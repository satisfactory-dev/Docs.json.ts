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

import update8_schema from '../schema/update8.schema.json' assert {
	type: 'json'
};
import {
	configure_ajv, default_config,
} from './DocsValidation';
import {
	BuiltInParserName,
} from 'prettier';
import {
	createHash,
} from 'node:crypto';
import {
	is_non_empty_array, object_has_property, property_exists_on_object,
	value_is_non_array_object,
} from './CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
} from './StringStartsWith';
import {
	NoMatchError,
} from './Exceptions';

const __dirname = dirname(fileURLToPath(import.meta.url));

export class ValidationError extends Error {
	readonly errors: ErrorObject[];
	readonly json: unknown;

	constructor(
		message: string,
		errors: ErrorObject[] | undefined | null,
		json: unknown
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

export class DocsTsGenerator {
	private docs: DocsData | undefined;
	private readonly cache_path: string | undefined;
	private readonly docs_path: string | DocsData;

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
		// raw JSON or path to UTF-16LE encoded Docs.json
		docs_path,
		// optional cache folder path for cacheable resources
		cache_path = undefined,
	}: {
		docs_path: string | DocsData;
		cache_path?: string;
	}) {
		this.docs_path = docs_path;
		this.cache_path = cache_path;
	}

	async definition(
		$ref:string
	): Promise<SchemaObject> {
		const schema = await this.schema();

		if (!property_exists_on_object(schema.definitions, $ref)) {
			throw new NoMatchError({
				$ref,
				options: Object.keys(schema.definitions),
			});
		}

		return schema.definitions[$ref];
	}

	async get() {
		return this.validate(
			await this.load(),
			await this.schema()
		);
	}

	async schema(): Promise<typeof update8_schema>
	{
		await this.validate_schema<typeof update8_schema>(update8_schema);

		return update8_schema;
	}

	private async load(): Promise<Exclude<typeof this.docs, undefined>> {
		if (undefined === this.docs) {
			performance.mark(DocsTsGenerator.PERF_START_LOADING_JSON);
			if ('string' !== typeof this.docs_path) {
				performance.measure(
					DocsTsGenerator.PERF_EARLY_RETURN,
					DocsTsGenerator.PERF_START_LOADING_JSON
				);
				return this.docs_path;
			} else if (!this.docs_path.endsWith('.json')) {
				performance.measure(
					DocsTsGenerator.PERF_FAILURE,
					DocsTsGenerator.PERF_START_LOADING_JSON
				);
				throw new Error('Probably not a JSON file');
			} else {
				let maybe_json: unknown;
				try {
					if (this.cache_path) {
						const utf8_filename = basename(this.docs_path).replace(
							/\.json$/,
							'.utf8.json'
						);
						const utf8_filepath = `${this.cache_path}/${utf8_filename}`;

						if (existsSync(utf8_filepath)) {
							const file_contents =
								await readFile(utf8_filepath);
							performance.measure(
								DocsTsGenerator.PERF_FILE_READ,
								DocsTsGenerator.PERF_START_LOADING_JSON
							);
							maybe_json = JSON.parse(file_contents.toString());
							performance.measure(
								DocsTsGenerator.PERF_FILE_PARSED,
								DocsTsGenerator.PERF_START_LOADING_JSON
							);
						} else {
							maybe_json = await this.load_from_file(
								this.docs_path
							);
							performance.measure(
								DocsTsGenerator.PERF_FILE_PARSED,
								DocsTsGenerator.PERF_START_LOADING_JSON
							);

							await writeFile(
								utf8_filepath,
								JSON.stringify(maybe_json, null, '\t') + '\n'
							);
						}
					} else {
						maybe_json = await this.load_from_file(this.docs_path);
						performance.measure(
							DocsTsGenerator.PERF_FILE_PARSED,
							DocsTsGenerator.PERF_START_LOADING_JSON
						);
					}
				} catch (err) {
					performance.measure(
						DocsTsGenerator.PERF_FAILURE,
						DocsTsGenerator.PERF_START_LOADING_JSON
					);

					throw err;
				}

				if (
					!is_non_empty_array<{[key: string]: unknown}>(
						maybe_json,
						value_is_non_array_object
					)
				) {
					performance.measure(
						DocsTsGenerator.PERF_FAILURE,
						DocsTsGenerator.PERF_START_LOADING_JSON
					);
					throw new Error('Was expecting json to be an array!');
				}

				this.docs = maybe_json as [DocsDataItem, ...DocsDataItem[]];
			}

			if (undefined === this.docs) {
				throw new Error('this.docs not set!');
			}
		}

		return this.docs;
	}

	private async load_from_file(filepath: string): Promise<unknown> {
		const file = await readFile(filepath, {
			encoding: 'utf-16le',
		});
		performance.measure(
			DocsTsGenerator.PERF_FILE_READ,
			DocsTsGenerator.PERF_START_LOADING_JSON
		);

		const utf8 = Buffer.from(file).toString('utf-8');

		return JSON.parse(utf8.trim()) as unknown;
	}

	private async validate<T extends DocsData>(
		json: unknown,
		schema: SchemaObject
	): Promise<T> {
		performance.mark(DocsTsGenerator.PERF_VALIDATION_STARTED);

		const validateDocs = await this.validate_schema<T>(schema);

		performance.measure(
			DocsTsGenerator.PERF_VALIDATION_COMPILED,
			DocsTsGenerator.PERF_VALIDATION_STARTED
		);

		const result = validateDocs(json);
		performance.measure(
			DocsTsGenerator.PERF_VALIDATION_FINISHED,
			DocsTsGenerator.PERF_VALIDATION_STARTED
		);

		if (!result) {
			throw new ValidationError(
				'Failed to validate against the provided JSON Schema',
				validateDocs.errors,
				json
			);
		}

		return json;
	}

	private async validate_schema<
		Result = unknown,
		Schema extends SchemaObject = SchemaObject
	> (schema: Schema): Promise<ValidateFunction<Result>> {

		if (this.cache_path) {
			const file_sha512 = createHash('sha512');

			if (!object_has_property(schema, '$id', is_string)) {
				throw new ValidationError(
					'Schema does not have an id!',
					undefined,
					schema
				);
			}

			file_sha512.update(
				await readFile(`${__dirname}/../schema/${schema['$id']}`)
			);

			const filename = `${schema['$id']}.${file_sha512.digest('hex')}.mjs`;
			const filepath = `${this.cache_path}/${filename}`;

			if (!existsSync(filepath)) {
				performance.mark(DocsTsGenerator.PERF_VALIDATION_PRECOMPILE);
				default_config.ajv = new Ajv({
					verbose: true,
					code: {
						source: true,
						es5: false,
						esm: true,
						optimize: true,
					},
				});
				configure_ajv(default_config.ajv);
				performance.measure(
					'ajv configured',
					DocsTsGenerator.PERF_VALIDATION_PRECOMPILE
				);

				await writeFile(filepath, standalone(
					default_config.ajv,
					default_config.ajv.compile(schema)
				).replace(/^"use strict";/, [
					'"use strict";',
					/*
					 * adapted from solution on stackoverflow
					 * https://stackoverflow.com/a/77047149/23528553
					 */
					'import { createRequire } from "module";',
					'const require = createRequire(import.meta.url);',
				].join('')));
				performance.measure(
					'ajv pre-compilation done',
					DocsTsGenerator.PERF_VALIDATION_PRECOMPILE,
					DocsTsGenerator.PERF_VALIDATION_PRECOMPILE
				);
			}

			const {
				default: validateDocs,
			} = (await import(filepath)) as {default: ValidateFunction};

			return validateDocs as ValidateFunction<Result>;
		}

		default_config.ajv = new Ajv({
			verbose: true,
		});

		return default_config.ajv.compile<Result>(schema);
	}
}

const prettier_config = prettier.resolveConfig(`${__dirname}/../.prettierrc`);

const eslint = new ESLint({fix: true});
const eslint_formatter = eslint.loadFormatter('stylish');

export async function format_code(
	code: string,
	parser: BuiltInParserName = 'typescript'
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
			config
		)
	);

	return code.replace(/(\t+) +/gm, '$1');
}

export async function eslint_generated_types(files: string) {
	const results = await eslint.lintFiles(files);

	process.stdout.write(
		`${await (await eslint_formatter).format(results)}\n`
	);
}
