import Ajv from 'ajv/dist/2020';
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
	generate_markdown,
} from './TypeDefinitionWriter/types-progress.md';
import {
	configure_ajv,
} from './DocsValidation';
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
	typed_object_string,
} from './TypeDefinitionDiscovery/CustomParsingTypes/typed_object_string';
import {
	typed_array_string,
} from './TypeDefinitionDiscovery/CustomParsingTypes/typed_array_string';
import {
	oneOf_or_anyOf,
} from './TypeDefinitionDiscovery/JsonSchema/oneOf_or_anyOf';
import {
	glob,
} from 'glob';
import {
	object_has_property,
	value_is_non_array_object,
} from './CustomParsingTypes/CustomPairingTypes';
import ts, {
	ClassDeclaration,
} from 'typescript';
import {
	DocsTsAutoImports,
} from './DocsTsAutoImports';
import {
	ImportTracker,
} from './TypesGeneration';
import {
	dirname,
} from 'node:path';
import {
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
	require_non_empty_array,
} from './ArrayUtilities';
import {
	AnyGenerator,
} from './TypeDefinitionDiscovery/Generator';

const __dirname = import.meta.dirname;

type class_can_have_tree = ClassDeclaration & {
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

export class TypeDefinitionWriter
{
	private _discovery:
		| Promise<TypeDefinitionDiscovery>
		| undefined = undefined;
	private prepared = false;
	private readonly ajv:Ajv;
	private readonly docs:DocsTsGenerator;

	constructor(
		ajv:Ajv,
		docs: DocsTsGenerator,
	) {
		configure_ajv(ajv);
		this.ajv = ajv;
		this.docs = docs;
	}

	get discovery(): Promise<TypeDefinitionDiscovery>
	{
		if (!this._discovery) {
			const schema = this.docs.schema();
			const type_definition_discover = require_non_empty_array<
				AnyGenerator
			>([
				...TypeDefinitionDiscovery.standard_jsonschema_discovery(
					this.ajv
				),
				...TypeDefinitionDiscovery.custom_parsing_discovery(
					this.ajv
				),
			]);
			this._discovery = Promise.resolve(schema.then((schema) => {
				return new TypeDefinitionDiscovery(
					this.ajv,
					schema,
					[
						...TypesDiscovery.standard_jsonschema_discovery(
							schema
						),
						...TypesDiscovery.custom_parsing_types(schema),
					],
					type_definition_discover,
				);
			}));
		}

		return this._discovery;
	}

	async write(
		parent_folder: string,
		cleanup = true,
	) {
		await this.prepare();
		const discovery = await this.discovery;
		await writeFile(`${__dirname}/../types-progress.md`, await generate_markdown(discovery));

		if (cleanup) {
			for (const remove of await glob(`${parent_folder}/**/*.{ts,js,map}`)) {
				await unlink(remove);
			}
		}

		const types = await discovery.discover_type_definitions();
		const schema = await discovery.types_discovery.schema_from_json();

		if (
			types.missing_classes.length > 0
			|| types.missing_types.length > 0
		) {
			throw new NoMatchError(
				{
					classes: types.missing_classes,
					types: types.missing_types,
				},
				'Some missing types found!'
			);
		}

		if (!object_has_property(
			schema,
			'definitions',
			value_is_non_array_object
		)) {
			throw new Error('Schema appears to have no definitions');
		}

		const validations = types.found_classes.map(
			e => this.ajv.compile<DocsDataItem>(
				{
					definitions: schema.definitions,
					...e,
				}
			)
		);

		if (!object_has_property(
			schema.definitions,
			'NativeClass',
			value_is_non_array_object
		)) {
			throw new Error('Could not find NativeClass on provided schema!');
		}

		const files = await FilesGenerator.merge_files(
			[
				discovery,
				new DocsFiles(
					this.docs,
					validations,
					discovery,
					this.ajv
				),
				new FromArray([
					...legacy_UnrealEngineString_module.CustomGenerators(),
					string_starts_with,
					StringPassedRegExp,
				]),
			]
		);


		const auto_imports = new DocsTsAutoImports(files);
		await auto_imports.generate();

		const printer = ts.createPrinter({
			newLine: ts.NewLineKind.LineFeed,
		});

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
						result_file
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
						'Error printing node!'
					);
				}
			}

			await writeFile(
				file_name,
				await format_code(
					node_strings
						.join('\n\n')
				)
			);
		}

		await eslint_generated_types(`${parent_folder}/**/*.ts`);
	}

	private async prepare()
	{
		if (!this.prepared) {
			this.prepared = true;
			const discovery = await this.discovery;
			const discovered_types = (
				await discovery.types_discovery.discover_types()
			).discovered_types;

			discovery.add_candidates(
				new ObjectType(this.ajv, discovery),
				new ArrayType(
					this.ajv,
					discovered_types,
					discovery
				),
				new ExtendsObject(
					this.ajv,
					discovered_types,
					discovery
				),
				new typed_object_string(
					this.ajv,
					discovered_types,
					discovery
				),
				new typed_array_string(this.ajv, discovery),
				new oneOf_or_anyOf(this.ajv, discovery),
			);
		}
	}

	static guess_filename(ref: string): string {
		if (/^FG[A-Za-z]+--[A-Za-z-_]+$/.test(ref)) {
			return `classes/CoreUObject/${ref.split('--')[0]}.ts`;
		} else if (
			ref.startsWith('NativeClass--')
			|| ref.startsWith('EditorCurveData--')
		) {
			return 'classes/base.ts';
		}

		return 'common/unassigned.ts';
	}
}
