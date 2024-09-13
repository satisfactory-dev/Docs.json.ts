import {
	readFile,
	writeFile,
} from 'node:fs/promises';
import {
	basename, dirname,
} from 'node:path';
import {
	existsSync,
} from 'node:fs';
import {
	fileURLToPath,
} from 'node:url';
import Ajv, {
	ErrorObject,
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import * as prettier from 'prettier';
import standalone from 'ajv/dist/standalone';
import {
	ESLint,
} from 'eslint';

import {
	BuiltInParserName,
} from 'prettier';
import {
	createHash,
} from 'node:crypto';
import {
	is_non_empty_array,
	is_string,
	object_has_only_properties_that_match_predicate,
	object_has_property,
	property_exists_on_object,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';
import {
	NoMatchError,
} from './Exceptions';
import {
	TypedString,
} from './CustomParsingTypes/TypedString';
import {
	compile,
	esmify,
} from '@satisfactory-dev/ajv-utilities';
import {
	DocsSchema,
	DocsSchemaByVersion,
} from './DocsSchema';

const __dirname = dirname(fileURLToPath(import.meta.url));

export class ValidationError extends Error {
	readonly errors: ErrorObject[];
	readonly json: unknown;

	constructor(
		message: string,
		errors: ErrorObject[] | undefined | null,
		json: unknown,
	) {
		super(message);
		this.errors = errors || [];
		this.json = json;
	}
}

export type DocsDataItem_Classes_entry<TypeOfUnknownProperties = unknown> = (
	& {[key: string]: TypeOfUnknownProperties}
	& {ClassName: string}
);

export type DocsDataItem<
	TypeOfUnknownProperties = unknown,
	TypeOfNativeClass = string
> = {
	NativeClass: TypeOfNativeClass;
	Classes: DocsDataItem_Classes_entry<TypeOfUnknownProperties>[];
};

export type DocsData = [DocsDataItem, ...DocsDataItem[]];

export class DocsTsGeneratorVersion
{
	docs: DocsData | undefined;
	readonly cache_path: string | undefined;
	readonly docs_path: string | DocsData;

	constructor({
		// raw JSON or path to UTF-16LE encoded Docs.json
		docs_path,
		// optional cache folder path for cacheable resources
		cache_path = undefined,
	}: {
		cache_path: string | undefined,
		docs_path: string | DocsData,
	}) {
		this.cache_path = cache_path;
		this.docs_path = docs_path;
	}
}

export type docs_versions = {
	update8?: DocsTsGeneratorVersion,
};

export class DocsTsGenerator {
	// eslint-disable-next-line max-len
	private readonly schema_data:DocsSchemaByVersion = new DocsSchemaByVersion();
	public readonly ajv:Ajv;
	readonly docs_versions: docs_versions;
	readonly types_from_module: string|undefined;

	static readonly PERF_EARLY_RETURN = 'Early Return of Docs.json';
	static readonly PERF_FAILURE = 'Failure to load Docs.json';
	static readonly PERF_FILE_PARSED = 'Docs.json contents parsed';
	static readonly PERF_FILE_READ = 'Docs.json contents read';
	static readonly PERF_START_LOADING_JSON = 'Start Loading Docs.json';
	static readonly PERF_VALIDATION_COMPILED = 'Docs.json validation compiled';
	static readonly PERF_VALIDATION_FINISHED = 'Docs.json validation finished';
	static readonly PERF_VALIDATION_PRECOMPILE =
		'Docs.json validation pre-compilation started';
	static readonly PERF_VALIDATION_STARTED = 'Docs.json validation started';

	constructor({
		// Ajv instance
		ajv,
		// Docs object
		docs_versions,
		types_from_module = undefined,
	}: {
		ajv: Ajv,
		docs_versions: docs_versions;
		types_from_module?: string,
	}) {
		if (Object.keys(docs_versions).length < 1) {
			throw new Error('No versions specified!');
		}

		this.ajv = ajv;
		this.docs_versions = docs_versions;
		this.types_from_module = types_from_module;
	}

	async definition(
		version: keyof docs_versions,
		$ref:string,
	): Promise<SchemaObject> {
		const schema = await this.schema(version);

		if (!property_exists_on_object(schema.$defs, $ref)) {
			throw new NoMatchError({
				$ref,
				options: Object.keys(schema.$defs),
			});
		}

		return schema.$defs[$ref];
	}

	async get(
		version: keyof docs_versions,
	) {
		return this.validate(
			version,
			await this.load(version),
			await this.schema(version),
		);
	}

	async schema<T extends keyof docs_versions>(
		version: T,
	): Promise<T extends 'update8'
		? DocsSchemaByVersion['update8']['en_US']['schema']
		: DocsSchema<unknown>['schema']
	> {
		if ('update8' === version) {
			const schema = this.schema_data.update8.en_US.schema;

			// eslint-disable-next-line max-len
			await this.validate_schema<DocsSchemaByVersion['update8']['en_US']['schema']>(
				version,
				schema,
			);

			return schema;
		}

		throw new Error('Could not find specified schema!');
	}

	private async load(
		version: keyof docs_versions,
	): Promise<DocsData> {
		const docs = this.docs_versions[version];

		if (undefined === docs) {
			throw new Error('Requested version not configured!');
		}

		if (undefined === docs.docs) {
			performance.mark(DocsTsGenerator.PERF_START_LOADING_JSON);
			if ('string' !== typeof docs.docs_path) {
				performance.measure(
					DocsTsGenerator.PERF_EARLY_RETURN,
					DocsTsGenerator.PERF_START_LOADING_JSON,
				);
				return docs.docs_path;
			} else if (!docs.docs_path.endsWith('.json')) {
				performance.measure(
					DocsTsGenerator.PERF_FAILURE,
					DocsTsGenerator.PERF_START_LOADING_JSON,
				);
				throw new Error('Probably not a JSON file');
			} else {
				let maybe_json: unknown;
				try {
					if (docs.cache_path) {
						const utf8_filename = basename(docs.docs_path).replace(
							/\.json$/,
							'.utf8.json',
						);
						const utf8_filepath = `${docs.cache_path}/${utf8_filename}`;

						if (existsSync(utf8_filepath)) {
							const file_contents =
								await readFile(utf8_filepath);
							performance.measure(
								DocsTsGenerator.PERF_FILE_READ,
								DocsTsGenerator.PERF_START_LOADING_JSON,
							);
							maybe_json = JSON.parse(file_contents.toString());
							performance.measure(
								DocsTsGenerator.PERF_FILE_PARSED,
								DocsTsGenerator.PERF_START_LOADING_JSON,
							);
						} else {
							maybe_json = await this.load_from_file(
								docs.docs_path,
							);
							performance.measure(
								DocsTsGenerator.PERF_FILE_PARSED,
								DocsTsGenerator.PERF_START_LOADING_JSON,
							);

							await writeFile(
								utf8_filepath,
								JSON.stringify(maybe_json, null, '\t') + '\n',
							);
						}
					} else {
						maybe_json = await this.load_from_file(docs.docs_path);
						performance.measure(
							DocsTsGenerator.PERF_FILE_PARSED,
							DocsTsGenerator.PERF_START_LOADING_JSON,
						);
					}
				} catch (err) {
					performance.measure(
						DocsTsGenerator.PERF_FAILURE,
						DocsTsGenerator.PERF_START_LOADING_JSON,
					);

					throw err;
				}

				if (
					!is_non_empty_array<{[key: string]: unknown}>(
						maybe_json,
						value_is_non_array_object,
					)
				) {
					performance.measure(
						DocsTsGenerator.PERF_FAILURE,
						DocsTsGenerator.PERF_START_LOADING_JSON,
					);
					throw new Error('Was expecting json to be an array!');
				}

				docs.docs = maybe_json as [DocsDataItem, ...DocsDataItem[]];
			}

			if (undefined === docs.docs) {
				throw new Error('docs not set!');
			}
		}

		return docs.docs;
	}

	private async load_from_file(filepath: string): Promise<unknown> {
		const file = await readFile(filepath, {
			encoding: 'utf-16le',
		});
		performance.measure(
			DocsTsGenerator.PERF_FILE_READ,
			DocsTsGenerator.PERF_START_LOADING_JSON,
		);

		const utf8 = Buffer.from(file).toString('utf-8');

		return JSON.parse(utf8.trim()) as unknown;
	}

	private async validate<T extends DocsData>(
		version: keyof docs_versions,
		json: unknown,
		schema: SchemaObject,
	): Promise<T> {
		performance.mark(DocsTsGenerator.PERF_VALIDATION_STARTED);

		const validateDocs = await this.validate_schema<T>(
			version,
			schema,
		);

		performance.measure(
			DocsTsGenerator.PERF_VALIDATION_COMPILED,
			DocsTsGenerator.PERF_VALIDATION_STARTED,
		);

		const result = validateDocs(json);
		performance.measure(
			DocsTsGenerator.PERF_VALIDATION_FINISHED,
			DocsTsGenerator.PERF_VALIDATION_STARTED,
		);

		if (!result) {
			throw new ValidationError(
				'Failed to validate against the provided JSON Schema',
				validateDocs.errors,
				json,
			);
		}

		return json;
	}

	private async validate_schema<
		Result = unknown,
		Schema extends SchemaObject = SchemaObject,
	> (
		version: keyof docs_versions,
		schema: Schema,
	): Promise<ValidateFunction<Result>> {
		const docs = this.docs_versions[version];

		if (undefined === docs) {
			throw new Error('Requested version not configured!');
		}

		if (
			object_has_property(
				schema,
				'$defs',
				value_is_non_array_object,
			)
			&& object_has_only_properties_that_match_predicate(
				schema.$defs,
				value_is_non_array_object,
			)
		) {
			const {$defs} = schema;

			if (
				object_has_only_properties_that_match_predicate(
					$defs,
					value_is_non_array_object,
				)
			) {
				TypedString.instance().configure_ajv($defs, this.ajv);
			}
		}

		if (docs.cache_path) {
			const file_sha512 = createHash('sha512');

			if (!object_has_property(schema, '$id', is_string)) {
				throw new ValidationError(
					'Schema does not have an id!',
					undefined,
					schema,
				);
			}

			file_sha512.update(
				await readFile(`${__dirname}/../schema/${schema['$id']}`),
			);

			const filename = `${schema['$id']}.${file_sha512.digest('hex')}.mjs`;
			const filepath = `${docs.cache_path}/${filename}`;

			if (!existsSync(filepath)) {
				performance.mark(DocsTsGenerator.PERF_VALIDATION_PRECOMPILE);
				performance.measure(
					'ajv configured',
					DocsTsGenerator.PERF_VALIDATION_PRECOMPILE,
				);

				await writeFile(filepath, esmify(standalone(
					this.ajv,
					compile(this.ajv, schema),
				)));
				performance.measure(
					'ajv pre-compilation done',
					DocsTsGenerator.PERF_VALIDATION_PRECOMPILE,
					DocsTsGenerator.PERF_VALIDATION_PRECOMPILE,
				);
			}

			const {
				default: validateDocs,
			} = (await import(filepath)) as {default: ValidateFunction};

			return validateDocs as ValidateFunction<Result>;
		}

		return compile<Result>(this.ajv, schema);
	}
}

const prettier_config = prettier.resolveConfig(`${__dirname}/../.prettierrc`);

export async function format_code(
	code: string,
	parser: BuiltInParserName = 'typescript',
): Promise<string> {
	const config = await prettier_config;

	if (!config) {
		throw new Error('could not find prettier config');
	}

	code = await prettier.format(
		code,
		Object.assign(
			{
				parser,
			},
			config,
		),
	);

	return code.replace(/(\t+) +/gm, '$1');
}

export async function eslint_generated_types(parent_folder: string) {
	const eslint = new ESLint({
		fix: true,
		cwd: parent_folder,
		cache: true,
		cacheLocation: `${parent_folder}/.eslintcache`,
		cacheStrategy: 'content',
	});
	const eslint_formatter = eslint.loadFormatter('stylish');
	const results = await eslint.lintFiles(`${parent_folder}/**/*.ts`);

	process.stdout.write(
		`${await (await eslint_formatter).format(results, {
			cwd: parent_folder,
			rulesMeta: eslint.getRulesMetaForResults(results),
		})}\n`,
	);
}
