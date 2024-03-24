import {
	mkdir, readFile, unlink, writeFile,
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
	ErrorObject, ValidateFunction,
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
	target_files as enum_target_files,
	generators as enum_generators,
	type_node_generators as enum_type_node_generators,
} from './TypesGeneration/enum';
import {
	target_files as validator_target_files,
	generators as validator_generators,
	custom_generators as validator_custom_generators,
	type_node_generators as validators_type_node_generators,
} from './TypesGeneration/validators';
import {
	target_files as vectors_target_files,
	custom_generators as vectors_custom_generators,
	type_node_generators as vectors_type_node_generators,
} from './TypesGeneration/vectors';
import {
	target_files as constants_target_files,
	generators as constants_generators,
	type_node_generators as const_type_node_generators,
} from './TypesGeneration/constants';
import {
	target_files as prefixes_target_files,
	generators as prefixes_generators,
	type_node_generators as prefixes_type_node_generators,
} from './TypesGeneration/prefixes';
import {
	target_files as unions_target_files,
	generators as unions_generators,
	type_node_generators as unions_type_node_generators,
} from './TypesGeneration/unions';
import {
	TypesGenerationFromSchema,
	GenerationMatch,
	ImportTracker,
	TypesGeneration_concrete,
} from './TypesGeneration';
import {
	configure_ajv, default_config,
} from './DocsValidation';
import ts from 'typescript';
import {
	glob,
} from 'glob';
import {
	BuiltInParserName,
} from 'prettier';
import {
	target_files as classes_target_files,
	generators as classes_generators,
	supported_base_classes as Classes_supported_base_classes,
	type_node_generators,
} from './TypesGeneration/Classes';
import {
	target_files as arrays_target_files,
	generators as arrays_generators,
	type_node_generators as arrays_type_node_generators,
} from './TypesGeneration/arrays';
import {
	target_files as aliases_target_files,
	generators as aliases_generators,
	type_node_generators as aliases_type_node_generators,
} from './TypesGeneration/aliases';
import {
	is_ref, Update8TypeNodeGeneration,
} from './Schemas/Update8';
import {
	TypeNodeGeneration,
	TypeNodeGenerationMatcher,
} from './SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	DocsTsAutoImports,
} from './DocsTsAutoImports';
import {
	createHash,
} from 'node:crypto';
import {
	is_non_empty_array, object_has_property,
	value_is_non_array_object,
} from './CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
} from './StringStartsWith';

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

export class GenerationException extends Error {
	readonly progress: generation_result;
	readonly exception: unknown;

	constructor(progress: generation_result, exception: unknown) {
		super('a generation exception occurred');
		this.progress = progress;
		this.exception = exception;
	}
}

export type generation_result = {
	definitions: {
		keys: string[];
		supported: string[];
		missing_target_files: string[];
	};
	files: {[key: string]: ts.Node[]};
};

export type DocsDataItem = {
	NativeClass: string;
	Classes: ({[key: string]: unknown[] | string} & {ClassName: string})[];
};

export type DocsData = [DocsDataItem, ...DocsDataItem[]];

declare type basic_docs_type = {[key: string]: unknown}[];

export class DocsTsGenerator {
	private readonly cache_path: string | undefined;
	private readonly docs_path: string | basic_docs_type;
	private docs: basic_docs_type | undefined;

	static readonly PERF_START_LOADING_JSON = 'Start Loading Docs.json';
	static readonly PERF_EARLY_RETURN = 'Early Return of Docs.json';
	static readonly PERF_FAILURE = 'Failure to load Docs.json';
	static readonly PERF_FILE_READ = 'Docs.json contents read';
	static readonly PERF_FILE_PARSED = 'Docs.json contents parsed';
	static readonly PERF_VALIDATION_STARTED = 'Docs.json validation started';
	static readonly PERF_VALIDATION_COMPILED = 'Docs.json validation compiled';
	static readonly PERF_VALIDATION_FINISHED = 'Docs.json validation finished';
	static readonly PERF_VALIDATION_PRECOMPILE =
		'Docs.json validation pre-compilation started';

	constructor({
		// raw JSON or path to UTF-16LE encoded Docs.json
		docs_path,
		// optional cache folder path for cacheable resources
		cache_path = undefined,
	}: {
		docs_path: string | basic_docs_type;
		cache_path?: string;
	}) {
		this.docs_path = docs_path;
		this.cache_path = cache_path;
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

				this.docs = maybe_json;
			}

			if (undefined === this.docs) {
				throw new Error('this.docs not set!');
			}
		}

		return this.docs;
	}

	private async validate<T extends DocsData>(
		json: unknown,
		schema: {$id: 'update8.schema.json'}
	): Promise<T> {
		performance.mark(DocsTsGenerator.PERF_VALIDATION_STARTED);
		if (this.cache_path) {
			const file_sha512 = createHash('sha512');

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

				await writeFile(filepath, await format_code(standalone(
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
				].join(''))));
				performance.measure(
					'ajv pre-compilation done',
					DocsTsGenerator.PERF_VALIDATION_PRECOMPILE,
					DocsTsGenerator.PERF_VALIDATION_PRECOMPILE
				);
			}

			const {
				default: validateDocs,
			} = (await import(filepath)) as {default: ValidateFunction};

			if (!validateDocs(json)) {
				throw new ValidationError(
					'Failed to validate against the provided JSON Schema',
					validateDocs.errors,
					json
				);
			}

			return json as T;
		}

		default_config.ajv = new Ajv({
			verbose: true,
		});

		const validateDocs = default_config.ajv.compile<T>(schema);
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

	async get() {
		return this.validate(
			await this.load(),
			update8_schema as typeof update8_schema & {
				$id: 'update8.schema.json';
			}
		);
	}

	/**
	 * @throws {GenerationException}
	 */
	async generate_types(
		parent_folder: string,
		throw_on_failure_to_find = true,
		write_on_failure = false
	): Promise<generation_result> {
		try {
			const progress = this.actually_generate_types(
				throw_on_failure_to_find
			);

			await this.write_files(parent_folder, progress.files);

			return progress;
		} catch (err) {
			if (write_on_failure && err instanceof GenerationException) {
				await this.write_files(parent_folder, err.progress.files);
			}

			throw err;
		}
	}

	/**
	 * @throws {GenerationException}
	 */
	private actually_generate_types(
		throw_on_failure_to_find = true
	): generation_result {
		const target_files:{[key: string]: string} = {
			...enum_target_files,
			...validator_target_files,
			...vectors_target_files,
			...constants_target_files,
			...prefixes_target_files,
			...arrays_target_files,
			...classes_target_files,
			...unions_target_files,
			...aliases_target_files,
		};

		const generators: TypesGeneration_concrete[] = [
			...enum_generators,
			...validator_generators,
			...constants_generators,
			...prefixes_generators,
			...arrays_generators,
			...classes_generators,
			...unions_generators,
			...aliases_generators,
		] as TypesGeneration_concrete[];

		const type_node_generators_list: TypeNodeGeneration[] = [
			...enum_type_node_generators,
			...const_type_node_generators,
			...validators_type_node_generators,
			...vectors_type_node_generators,
			...arrays_type_node_generators,
			...type_node_generators,
			...prefixes_type_node_generators,
			...unions_type_node_generators,
			...aliases_type_node_generators,
		] as unknown as TypeNodeGeneration[];

		const type_node_generation = new TypeNodeGenerationMatcher(
			type_node_generators_list
		);
		type_node_generation.throw_on_failure_to_find =
			throw_on_failure_to_find;
		type_node_generation.definitions_to_check = update8_schema.definitions;

		const supported_conversions = Object.entries(
			update8_schema.definitions
		)
			.filter((e: [string, object]) => {
				for (const generator of generators) {
					if (generator instanceof TypesGenerationFromSchema) {
						if (generator.test(e[1])) {
							return true;
						}
					} else if (generator.test(e[0])) {
						return true;
					}
				}

				return false;
			})
			.map((e: [string, object]) => {
				const generator = generators.find((maybe) => {
					if (maybe instanceof TypesGenerationFromSchema) {
						return maybe.test(e[1]);
					}

					return maybe.test(e[0]);
				});

				if (!generator) {
					throw new Error('whoops');
				}

				return new GenerationMatch<object>(e[0], e[1], generator);
			});

		const supported_conversion_names = supported_conversions.map(
			(e) => e.definition
		);

		for (const supported_elsewhere of [
			...Classes_supported_base_classes,
		]) {
			if (!supported_conversion_names.includes(supported_elsewhere)) {
				supported_conversion_names.push(supported_elsewhere);
			}
		}

		let missing_target_files = supported_conversions
			.map((match) => {
				return match.definition;
			})
			.filter((maybe) => !(maybe in target_files));

		const definitions_keys = Object.keys(update8_schema.definitions);

		let progress: generation_result = {
			definitions: {
				keys: definitions_keys,
				supported: supported_conversion_names,
				missing_target_files: missing_target_files,
			},
			files: {},
		};

		function update_progress() {
			missing_target_files = supported_conversions
				.map((match) => {
					return match.definition;
				})
				.filter((maybe) => !(maybe in target_files));

			progress = {
				definitions: {
					keys: definitions_keys,
					supported: supported_conversion_names,
					missing_target_files: missing_target_files,
				},
				files: progress.files,
			};
		}

		const Update8 = new Update8TypeNodeGeneration(type_node_generation);

		for (const generator of [
			...validator_custom_generators,
			...Update8.generate_generators(default_config.ajv),
			...vectors_custom_generators,
		]) {
			try {
				const Classes_results: (
					| {file: string; node: ts.Node}
					| {file: string; node: ts.Node; ref: string}
				)[] = generator();

				for (const result of Classes_results) {
					const {file, node} = result;

					if (object_has_property(
						result,
						'ref',
						is_string
					)) {
						target_files[result.ref] = file;

						if (!supported_conversion_names.includes(result.ref)) {
							supported_conversion_names.push(result.ref);
						}
					}

					if (!(file in progress.files)) {
						progress.files[file] = [];
					}

					progress.files[file].push(node);
				}
			} catch (err) {
				update_progress();
				throw new GenerationException(progress, err);
			}
		}

		update_progress();

		for (const match of supported_conversions) {
			if (!(match.definition in target_files)) {
				if (
					is_ref(match.definition)
					&& Update8.can_guess_filename(match.definition)
				) {
					target_files[match.definition] = Update8.guess_filename(
						match.definition
					);
				} else {
					target_files[match.definition] = 'common/unassigned.ts';
				}
			}

			const target_file = target_files[match.definition];

			if (!(target_file in progress.files)) {
				progress.files[target_file] = [];
			}

			progress.files[target_file].push(
				match.generation.generate(match.data, match.definition)
			);
		}

		update_progress();

		try {
			progress.files['Docs.json.ts'] = [
				Update8.generate_DocsJsonTs(default_config.ajv),
			];
		} catch (err) {
			update_progress();
			throw new GenerationException(progress, err);
		}

		update_progress();

		return progress;
	}

	private async write_files(
		parent_folder: string,
		files: {[key: string]: ts.Node[]}
	) {
		const auto_imports = new DocsTsAutoImports(files);
		await auto_imports.generate();

		const printer = ts.createPrinter({
			newLine: ts.NewLineKind.LineFeed,
		});

		const cleanup = await glob(`${parent_folder}/update8/**/*.ts`);

		for (const remove of cleanup) {
			await unlink(remove);
		}

		type class_can_have_tree = ts.ClassDeclaration & {
			heritageClauses: [{types: [{expression: ts.Identifier}]}];
		};

		function can_class_have_tree(
			class_node: ts.ClassDeclaration
		): class_node is class_can_have_tree {
			const heritage = [...(class_node.heritageClauses || [])].map(
				(e) => e.types
			);

			return (
				1 === heritage.length
				&& 1 === heritage[0].length
				&& ts.isExpressionWithTypeArguments(heritage[0][0])
				&& ts.isIdentifier(heritage[0][0].expression)
			);
		}

		for (const entry of Object.entries(files)) {
			const result_file = ts.createSourceFile(
				entry[0],
				'',
				ts.ScriptTarget.Latest,
				false,
				ts.ScriptKind.TS
			);

			const classes = entry[1].filter(ts.isClassDeclaration);

			const classes_mapped = Object.fromEntries(
				classes.map((e) => [e.name?.escapedText + '', e])
			);

			const class_can_have_trees = Object.fromEntries(
				classes
					.filter(can_class_have_tree)
					.map((e) => [e.name?.escapedText + '', e])
			);

			const class_parents = Object.values(class_can_have_trees).map(
				(class_node) => {
					let checking: undefined | ts.ClassDeclaration = class_node;

					const tree: string[] = [class_node.name?.escapedText + ''];

					while (
						checking
						&& can_class_have_tree(checking)
						&& (
							checking
								.heritageClauses[0]
								.types[0]
								?.expression
								.escapedText
								.toString()
						) in
							class_can_have_trees
					) {
						const parent_class_name: string =
							checking
								.heritageClauses[0]
								.types[0]
								.expression
								.escapedText
								.toString();
						if (parent_class_name in classes_mapped) {
							tree.push(parent_class_name);

							checking = classes_mapped[parent_class_name];
						} else {
							checking = undefined;
						}
					}

					return tree;
				}
			);

			const class_parent_classes = class_parents
				.flat()
				.reduce((was, is) => {
					if (!was.includes(is)) {
						was.push(is);
					}

					return was;
				}, [] as string[]);
			const class_parent_class_max_depth = Object.fromEntries(
				class_parent_classes
					.map((thing): [string, string[][]] => {
						const includes = class_parents.filter((e) =>
							e.includes(thing)
						);

						return [thing, includes];
					})
					.filter(
						(
							entry
						): entry is [string, [string[], ...string[][]]] => {
							return entry[1].length > 0;
						}
					)
					.map((entry) => {
						return [
							entry[0],
							Math.max(
								0,
								...entry[1].map((e) => e.indexOf(entry[0]))
							),
						];
					})
			);

			const classes_in_order = class_parent_classes.sort((a, b) => {
				return (
					class_parent_class_max_depth[b] -
					class_parent_class_max_depth[a]
				);
			});

			const nodes = [
				...ImportTracker.generate_imports(entry[0]),
				...entry[1].sort((a, b) => {
					if (
						ts.isTypeAliasDeclaration(a)
						&& !ts.isTypeAliasDeclaration(b)
					) {
						return -1;
					}

					if (ts.isClassDeclaration(a) && ts.isClassDeclaration(b)) {
						return (
							classes_in_order.indexOf(
								a.name?.escapedText + ''
							) -
							classes_in_order.indexOf(b.name?.escapedText + '')
						);
					}

					return 0;
				}),
			];

			const file_name = `${parent_folder}/update8/${entry[0]}`;
			const dir = dirname(file_name);

			await mkdir(dir, {
				recursive: true,
			});

			await writeFile(
				file_name,
				await format_code(
					nodes
						.map((node) => {
							return printer.printNode(
								ts.EmitHint.Unspecified,
								node,
								result_file
							);
						})
						.join('\n\n')
				)
			);
		}

		await eslint_generated_types(`${parent_folder}/update8/**/*.ts`);
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

	return prettier.format(
		code,
		Object.assign(
			{
				parser,
			},
			config
		)
	);
}

export async function eslint_generated_types(files: string) {
	const results = await eslint.lintFiles(files);

	process.stdout.write(
		`${await (await eslint_formatter).format(results)}\n`
	);
}
