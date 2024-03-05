import {mkdir, readFile, unlink, writeFile} from "node:fs/promises";
import {basename, dirname} from 'node:path';
import {existsSync} from 'node:fs';

import * as prettier from 'prettier';
import Ajv, {ErrorObject} from 'ajv/dist/2020';

import update8_schema from '../schema/update8.schema.json' assert {type: 'json'};

import {
	target_files as color_target_files,
	generators as color_generators,
} from './TypesGeneration/color';
import {
	target_files as enum_target_files,
	generators as enum_generators,
} from './TypesGeneration/enum';
import {
	target_files as validator_target_files,
	generators as validator_generators,
	custom_generators as validator_custom_generators,
} from './TypesGeneration/validators';
import {
	target_files as vector_target_files,
	generators as vector_generators,
} from './TypesGeneration/vectors';
import {
	target_files as constants_target_files,
	generators as constants_generators,
} from './TypesGeneration/constants';
import {
	target_files as prefixes_target_files,
	generators as prefixes_generators,
} from './TypesGeneration/prefixes';
import {
	TypesGeneration,
	TypesGenerationFromSchema,
	TypesGenerationMatchesReferenceName,
	GenerationMatch,
	ImportTracker,
} from './TypesGeneration';
import {default_config} from './DocsValidation';
import ts from "typescript";
import {glob} from "glob";
import {BuiltInParserName} from "prettier";
import {
	custom_generators as Classes_custom_generators,
} from './TypesGeneration/Classes';

class ValidationError extends Error
{
	readonly errors:ErrorObject[];
	readonly json:any;

	constructor(message:string, errors:ErrorObject[]|undefined|null, json:any) {
		super(message);
		this.errors = errors || [];
		this.json = json;
	}
}

export class GenerationException
{
	readonly progress:generation_result;
	readonly exception:unknown;

	constructor(progress:generation_result, exception:unknown) {
		this.progress = progress;
		this.exception = exception;
	}
}

declare type generation_result = {
	definitions: {
		keys: string[],
		supported: string[],
		unsupported: string[],
		missing_target_files: string[],
	},
};

export class DocsTsGenerator
{
	private readonly cache_path:string|undefined;
	private readonly docs_path:string|object[];
	private docs:object[]|undefined;

	constructor({
		docs_path, // raw JSON or path to UTF-16LE encoded Docs.json
		cache_path = undefined, // optional cache folder path for cacheable resources
	}:{
		docs_path: string|object[],
		cache_path?: string,
	}) {
		this.docs_path = docs_path;
		this.cache_path = cache_path;
	}

	private async load_from_file(filepath:string): Promise<any>
	{
		const file = await readFile(filepath, {
			encoding: 'utf-16le',
		});

		const utf8 = Buffer.from(file).toString('utf-8');

		return JSON.parse(utf8.trim());
	}

	private async load(): Promise<any>
	{
		if (undefined === this.docs) {
			if ('string' !== typeof(this.docs_path)) {
				return this.docs_path;
			} else if (!this.docs_path.endsWith('.json')) {
				throw new Error('Probably not a JSON file');
			} else {
				if (this.cache_path) {
					const utf8_filename = basename(this.docs_path).replace(
						/\.json$/,
						'.utf8.json'
					);
					const utf8_filepath = `${this.cache_path}/${utf8_filename}`;

					if (existsSync(utf8_filepath)) {
						this.docs = JSON.parse((await readFile(utf8_filepath)).toString());
					}

					const json = await this.load_from_file(this.docs_path);

					await writeFile(utf8_filepath, JSON.stringify(json, null, '\t') + '\n');

					return json;
				} else {
					return await this.load_from_file(this.docs_path);
				}
			}
		}

		return this.docs;
	}

	private async validate<T extends [
		{
			NativeClass: string,
			Classes: {ClassName: string}[]
		},
		...{
			NativeClass: string,
			Classes: {ClassName: string}[]
		}[]
	]>(json:any, schema:{'$id': 'update8.schema.json'}): Promise<T> {
		/* unfortunately this code doesn't work because it generates the wrong type of js :(
		if (this.cache_path) {
			const file_sha512 = createHash('sha512');

			file_sha512.update(await readFile(`${__dirname}/../schema/${schema['$id']}`));

			const filename = `${schema['$id']}.${file_sha512.digest('hex')}.mjs`;
			const filepath = `${this.cache_path}/${filename}`;

			if (!existsSync(filepath)) {
				console.log('precompiled validator not generated');
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

				await writeFile(
					filepath,
					await format_code(
						standalone(
							default_config.ajv,
							default_config.ajv.compile(schema)
						)
					)
				);
			}

			const validateDocs = await import(filepath);

			if (!validateDocs(json)) {
				throw new ValidationError(
					'Argument 1 failed to validate against the Update 8 JSON Schema',
					validateDocs.errors,
					json
				);
			}

			return json as T;
		}
		 */

		default_config.ajv = new Ajv({
			verbose: true,
		});

		const validateDocs = default_config.ajv.compile<T>(schema);

		if (!validateDocs(json)) {
			throw new ValidationError(
				'Argument 1 failed to validate against the Update 8 JSON Schema',
				validateDocs.errors,
				json
			);
		}

		return json;
	}

	async get()
	{
		return this.validate(
			await this.load(),
			update8_schema as (typeof update8_schema & {'$id': 'update8.schema.json'})
		);
	}

	/**
	 * @throws {GenerationException}
	 */
	async generate_types(parent_folder:string) : Promise<generation_result>
	{
		const target_files:{[key: string]: string} = Object.assign(
			{},
			enum_target_files,
			color_target_files,
			validator_target_files,
			vector_target_files,
			constants_target_files,
			prefixes_target_files,
		);

		const generators:TypesGeneration<any, any>[] = [
			...color_generators,
			...enum_generators,
			...validator_generators,
			...vector_generators,
			...constants_generators,
			...prefixes_generators,
		];

		const supported_conversions:GenerationMatch<object>[] = Object.entries(update8_schema.definitions).filter(
			(e:[string, object]) => {
				for (const generator of generators) {
					if (generator.test(generator instanceof TypesGenerationFromSchema ? e[1] : e[0])) {
						return true;
					}
				}

				return false;
			}
		).map((e: [string, object]) => {
			return new GenerationMatch<object>(e[0], e[1], generators.find((maybe) => {
				return maybe.test(maybe instanceof TypesGenerationFromSchema ? e[1] : e[0]);
			}) as TypesGenerationFromSchema<object>|TypesGenerationMatchesReferenceName<object, any>);
		});

		const supported_conversion_names = supported_conversions.map(e => e.definition);

		const unsupported_conversions = Object.keys(update8_schema.definitions).filter(
			(maybe) => !supported_conversion_names.includes(maybe)
		);

		let missing_target_files = supported_conversions.map((match) => {
			return match.definition;
		}).filter((maybe) => !(maybe in target_files));

		let progress = {
			definitions: {
				keys: Object.keys(update8_schema),
				supported: supported_conversion_names,
				unsupported: unsupported_conversions,
				missing_target_files: missing_target_files,
			},
		};

		try {
			const printer = ts.createPrinter({
				newLine: ts.NewLineKind.LineFeed,
			});

			const files:{[key: string]: ts.Node[]} = {};

			for (const generator of [
				...validator_custom_generators,
				...Classes_custom_generators,
			]) {
				const Classes_results:(
					| {file: string, node: ts.Node}
					| {file: string, node: ts.Node, ref: string}
				)[] = generator(update8_schema);

				for (const result of Classes_results) {

					const {file, node} = result;

					if ('ref' in result) {
						target_files[result.ref] = file;
					}

					if (!(file in files)) {
						files[file] = [];
					}

					files[file].push(node);
				}
			}

			missing_target_files = supported_conversions.map((match) => {
				return match.definition;
			}).filter((maybe) => !(maybe in target_files));

			progress = {
				definitions: {
					keys: Object.keys(update8_schema),
					supported: supported_conversion_names,
					unsupported: unsupported_conversions,
					missing_target_files: missing_target_files,
				},
			};

			for (const match of supported_conversions) {
				if (!(match.definition in target_files)) {
					throw new Error(`no target file found for ${match.definition}`);
				}

				const target_file = target_files[match.definition];

				if (!(target_file in files)) {
					files[target_file] = [];
				}

				files[target_file].push(match.generation.generate(match.data, match.definition));
			}

			const cleanup = await glob(`${parent_folder}/update8/**/*.ts`);

			for (const remove of cleanup) {
				await unlink(remove);
			}

			for (const entry of Object.entries(files)) {
				const result_file = ts.createSourceFile(
					entry[0],
					'',
					ts.ScriptTarget.Latest,
					false,
					ts.ScriptKind.TS
				);

				const nodes = [
					...ImportTracker.generate_imports(entry[0]),
					...entry[1]
				];

				const file_name = `${parent_folder}/update8/${entry[0]}`;
				const dir = dirname(file_name);

				await mkdir(dir, {
					recursive: true,
				});

				await writeFile(
					file_name,
					await format_code(nodes.map((node) => {
						return printer.printNode(ts.EmitHint.Unspecified, node, result_file)
					}).join('\n\n'))
				);
			}
		} catch (err) {
			throw new GenerationException(progress, err);
		}

		return progress;
	}
}

export function format_code(code:string, parser:BuiltInParserName = 'typescript'): Promise<string> {
	return prettier.format(code, {
		parser,
		singleQuote: true,
		trailingComma: 'es5',
		arrowParens: 'always',
		endOfLine: 'lf',
		useTabs: true,
	});
}
