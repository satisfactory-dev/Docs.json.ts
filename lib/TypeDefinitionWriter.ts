import {
	TypesDiscovery,
} from './TypesDiscovery';
import {
	TypeDefinitionDiscovery,
} from './TypeDefinitionDiscovery';
import {
	mkdir,
	unlink,
	writeFile,
} from 'node:fs/promises';
import {
	ObjectType,
} from './TypeDefinitionDiscovery/JsonSchema/ObjectType';
import {
	ArrayType,
} from './TypeDefinitionDiscovery/JsonSchema/ArrayType';
import {
	ExtendsObject,
} from './TypeDefinitionDiscovery/JsonSchema/Object/ExtendsObject';
import {
	typed_string,
} from './TypeDefinitionDiscovery/CustomParsingTypes/typed_string';
import {
	oneOf_or_anyOf,
} from './TypeDefinitionDiscovery/JsonSchema/oneOf_or_anyOf';
import {
	glob,
} from 'glob';
import {
	object_has_property,
	require_non_empty_array,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';
import ts, {
	ClassDeclaration,
} from 'typescript';
import {
	DocsTsAutoImports,
} from './DocsTsAutoImports';
import {
	dirname,
} from 'node:path';
import {
	docs_versions,
	DocsDataItem,
	DocsTsGenerator,
	eslint_generated_types,
	format_code,
} from './DocsTsGenerator';
import {
	UnrealEngineString as legacy_UnrealEngineString_module,
} from './CustomParsingTypes/UnrealEngineString';
import {
	string_starts_with, StringPassedRegExp,
} from './TypesGeneration/validators';
import {
	NoMatchError,
} from './Exceptions';
import {
	FilesGenerator,
	FromArray,
} from './FilesGenerator';
import {
	FilesGenerator as DocsFiles,
} from './DocsTsGenerator/FilesGenerator';
import {
	AnyGenerator,
} from './TypeDefinitionDiscovery/Generator';
import {
	DataDiscovery,
} from './DataDiscovery';
import {
	__dirname_from_meta,
} from './__dirname';
import {
	compile,
} from '@satisfactory-dev/ajv-utilities';

import common_schema from '../schema/common.schema.json' with {type: 'json'};
import {
	common_ref,
} from './StringStartsWith';

const __dirname = __dirname_from_meta(import.meta);

type class_can_have_tree = ClassDeclaration & {
	heritageClauses: [{types: [{expression: ts.Identifier}]}];
};

export class TypeDefinitionWriter
{
	private _discovery:
		| Promise<TypeDefinitionDiscovery>
		| undefined = undefined;
	private prepared = false;
	private readonly data_discovery:DataDiscovery;
	private readonly docs:DocsTsGenerator;
	private readonly version: keyof docs_versions;

	constructor(
		docs: DocsTsGenerator,
		version: keyof docs_versions,
	) {
		this.docs = docs;
		this.data_discovery = new DataDiscovery(docs, version);
		this.version = version;
	}

	get discovery(): Promise<TypeDefinitionDiscovery>
	{
		if (!this._discovery) {
			const schema = this.docs.schema(this.version);
			const type_definition_discover = require_non_empty_array<
				AnyGenerator
			>([
				...TypeDefinitionDiscovery.standard_jsonschema_discovery(
					this.docs.ajv,
				),
				...TypeDefinitionDiscovery.custom_parsing_discovery(
					this.docs.ajv,
				),
			]);
			this._discovery = Promise.resolve(schema.then((schema) => {
				return new TypeDefinitionDiscovery(
					[
						...TypesDiscovery.standard_jsonschema_discovery(
							schema,
						),
						...TypesDiscovery.custom_parsing_types(schema),
					],
					type_definition_discover,
					this.docs,
					this.version,
				);
			}));
		}

		return this._discovery;
	}

	async write(
		parent_folder: string,
		cleanup = true,
	) {
		performance.mark(`${this.constructor.name}.write() start`);
		await this.prepare();
		performance.measure(
			`${this.constructor.name}.write() prepare`,
			`${this.constructor.name}.write() start`,
		);
		performance.mark(`${this.constructor.name}.write() start`);
		const discovery = await this.discovery;
		performance.measure(
			`${this.constructor.name}.write() discovery`,
			`${this.constructor.name}.write() start`,
		);
		performance.mark(`${this.constructor.name}.write() start`);
		await writeFile(
			`${__dirname}/../types-progress--${this.version}.md`,
			await discovery.generate_markdown(),
		);
		await writeFile(
			`${__dirname}/../data-progress--${this.version}.md`,
			await this.data_discovery.generate_markdown(),
		);
		performance.measure(
			`${this.constructor.name}.write() generate_markdown`,
			`${this.constructor.name}.write() start`,
		);

		if (cleanup) {
			performance.mark(`${this.constructor.name}.write() start`);
			for (const remove of await glob(`${parent_folder}/**/*.{ts,js,map}`)) {
				await unlink(remove);
			}
			performance.measure(
				`${this.constructor.name}.write() cleanup`,
				`${this.constructor.name}.write() start`,
			);
		}

		performance.mark(`${this.constructor.name}.write() start`);
		const types = await discovery.discover_type_$defs();
		const schema = await this.docs.schema(this.version);

		if (
			types.missing_classes.length > 0
			|| types.missing_types.length > 0
		) {
			throw new NoMatchError(
				{
					found_types: Object.keys(types.found_types),
					missing_types: types.missing_types,
					found_classes: types.found_classes,
					missing_classes: types.missing_classes,
				},
				'Some missing types found!',
			);
		}

		if (!object_has_property(
			schema,
			'$defs',
			value_is_non_array_object,
		)) {
			throw new Error('Schema appears to have no $defs');
		}

		const validations = types.found_classes.map(
			e => compile<DocsDataItem>(
				this.docs.ajv,
				{
					$defs: schema.$defs,
					...e,
				},
			),
		);

		if (!object_has_property(
			schema.$defs,
			'NativeClass',
			value_is_non_array_object,
		)) {
			throw new Error('Could not find NativeClass on provided schema!');
		}

		const files = await FilesGenerator.merge_files(
			[
				discovery,
				new DocsFiles(
					validations,
					discovery,
					this.version,
				),
				new FromArray([
					...legacy_UnrealEngineString_module.CustomGenerators(),
					string_starts_with,
					StringPassedRegExp,
				]),
				this.data_discovery,
			],
		);
		performance.measure(
			`${this.constructor.name}.write() FilesGenerator`,
			`${this.constructor.name}.write() start`,
		);
		performance.mark(`${this.constructor.name}.write() start`);

		const auto_imports = new DocsTsAutoImports(files);
		const import_tracker = auto_imports.generate();
		performance.measure(
			`${this.constructor.name}.write() auto_imports`,
			`${this.constructor.name}.write() start`,
		);

		await writeFile(
			`${__dirname}/../imports-come-from.${this.version}.json`,
			auto_imports.imports_come_from,
		);

		const printer = ts.createPrinter({
			newLine: ts.NewLineKind.LineFeed,
		});

		performance.mark(`${this.constructor.name}.write() start`);
		for (const entry of Object.entries(files)) {
			const result_file = ts.createSourceFile(
				entry[0],
				'',
				ts.ScriptTarget.Latest,
				false,
				ts.ScriptKind.TS,
			);

			const classes = entry[1].filter(ts.isClassDeclaration);

			const classes_mapped = Object.fromEntries(
				classes.map((e) => [e.name?.escapedText + '', e]),
			);

			const class_can_have_trees = Object.fromEntries(
				classes
					.filter(
						maybe => TypeDefinitionWriter.can_class_have_tree(
							maybe,
						),
					)
					.map((e) => [e.name?.escapedText + '', e]),
			);

			const class_parents = Object.values(class_can_have_trees).map(
				(class_node) => {
					let checking: undefined | ts.ClassDeclaration = class_node;

					const tree: string[] = [class_node.name?.escapedText + ''];

					while (
						checking
						&& TypeDefinitionWriter.can_class_have_tree(checking)
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
				},
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
							e.includes(thing),
						);

						return [thing, includes];
					})
					.filter(
						(
							entry,
						): entry is [string, [string[], ...string[][]]] => {
							return entry[1].length > 0;
						},
					)
					.map((entry) => {
						return [
							entry[0],
							Math.max(
								0,
								...entry[1].map((e) => e.indexOf(entry[0])),
							),
						];
					}),
			);

			const classes_in_order = class_parent_classes.sort((a, b) => {
				return (
					class_parent_class_max_depth[b] -
					class_parent_class_max_depth[a]
				);
			});

			const nodes = [
				...import_tracker.generate_imports(entry[0]),
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
								a.name?.escapedText + '',
							) -
							classes_in_order.indexOf(b.name?.escapedText + '')
						);
					}

					return 0;
				}),
			];

			const file_name = `${parent_folder}/${entry[0]}`;
			const dir = dirname(file_name);

			await mkdir(dir, {
				recursive: true,
			});

			const node_strings:string[] = [];

			for (const node of nodes) {
				try {
					node_strings.push(printer.printNode(
						ts.EmitHint.Unspecified,
						node,
						result_file,
					));
				} catch (err) {
					throw new NoMatchError(
						{
							file_name,
							node,
							err: (err instanceof Error) ? {
								message: err.message,
								stack: err.stack,
							} : err,
						},
						'Error printing node!',
					);
				}
			}

			let code = await format_code(
				node_strings
					.join('\n\n'),
			);

			const types_from_module = this.docs.docs_versions[
				this.version
			]?.types_from_module;

			if (types_from_module) {
				code = code.replace(
					/} from '(?:\.\.\/)+(classes|common|utils)\//g,
					`} from '${types_from_module}/$1/`,
				);
			}

			await writeFile(
				file_name,
				code,
			);
		}
		performance.measure(
			`${this.constructor.name}.write() actually write files`,
			`${this.constructor.name}.write() start`,
		);

		performance.mark(`${this.constructor.name}.write() start`);
		await writeFile(
			`${__dirname}/../data-progress--${this.version}.md`,
			await this.data_discovery.generate_markdown(),
		);
		performance.measure(
			`${this.constructor.name}.write() generate_markdown`,
			`${this.constructor.name}.write() start`,
		);

		performance.mark(`${this.constructor.name}.write() start`);
		await eslint_generated_types(parent_folder);
		performance.measure(
			`${this.constructor.name}.write() eslint`,
			`${this.constructor.name}.write() start`,
		);
	}

	private async prepare()
	{
		if (!this.prepared) {
			this.prepared = true;
			const discovery = await this.discovery;
			const {
				discovered_types,
			} = (
				await discovery.types_discovery.discover_types()
			);

			if ('common' === this.version) {
				discovered_types.push(
					...Object.keys(
						common_schema.$defs,
					).map(
						(e): `#/$defs/${string}` => `#/$defs/${e}`,
					).filter(maybe => !discovered_types.includes(maybe)),
				);
			}


			discovery.add_candidates(
				new ObjectType(discovery),
				new ArrayType(
					discovered_types,
					discovery,
				),
				new ExtendsObject(
					discovered_types,
					discovery,
				),
				new typed_string(
					discovered_types,
					Object.keys(common_schema).map(common_ref),
					discovery,
				),
				new oneOf_or_anyOf(discovery),
			);
		}
	}

	static can_class_have_tree(
		class_node: ts.ClassDeclaration,
	): class_node is class_can_have_tree {
		const heritage = [...(class_node.heritageClauses || [])].map(
			(e) => e.types,
		);

		return (
			1 === heritage.length
			&& 1 === heritage[0].length
			&& ts.isExpressionWithTypeArguments(heritage[0][0])
			&& ts.isIdentifier(heritage[0][0].expression)
		);
	}
}
