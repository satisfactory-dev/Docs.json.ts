import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
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
import {
	adjust_class_name,
	create_modifier,
} from './TsFactoryWrapper';
import ts, {
	ClassDeclaration,
	Node,
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
	adjust_unrealengine_value,
	UnrealEngineString as legacy_UnrealEngineString_module,
} from './CustomParsingTypes/UnrealEngineString';
import {
	string_starts_with, StringPassedRegExp,
} from './TypesGeneration/validators';
import {
	UnrealEngineString,
} from './TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';
import {
	DataTransformer,
} from './DataTransformer';
import {NativeClass} from './DataTransformer/Update8/NativeClass';

const __dirname = import.meta.dirname;

const known_ref_file_targets = {
	'quaternion': 'common/vectors.ts',
	transformation: 'common/vectors.ts',
	color: 'common/color.ts',
	'color-decimal': 'common/color.ts',
	mDockingRuleSet: 'common/vectors.ts',
	mLightControlData: 'classes/CoreUObject/FGBuildableLightSource.ts',
	mDisableSnapOn: 'classes/CoreUObject/FGBuildable.ts',
	'SpecifiedColor': 'classes/CoreUObject/FGSchematic.ts',
};

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
	public readonly discovery:TypeDefinitionDiscovery;
	private readonly ajv:Ajv;
	private prepared = false;

	constructor(
		ajv:Ajv,
		schema:SchemaObject
	) {
		configure_ajv(ajv);
		this.ajv = ajv;

		this.discovery = new TypeDefinitionDiscovery(
			ajv,
			schema,
			[
				...TypesDiscovery.standard_jsonschema_discovery(schema),
				...TypesDiscovery.custom_parsing_types(schema),
			],
			[
				...TypeDefinitionDiscovery.standard_jsonschema_discovery(ajv),
				...TypeDefinitionDiscovery.custom_parsing_discovery(ajv),
			],
		);
	}

	private async prepare()
	{
		if (!this.prepared) {
			this.prepared = true;
			const discovered_types = (
				await this.discovery.types_discovery.discover_types()
			).discovered_types;

			this.discovery.add_candidates(
				new ObjectType(this.ajv, this.discovery),
				new ArrayType(
					this.ajv,
					discovered_types,
					this.discovery
				),
				new ExtendsObject(
					this.ajv,
					discovered_types,
					this.discovery
				),
				new typed_object_string(
					this.ajv,
					discovered_types,
					this.discovery
				),
				new typed_array_string(this.ajv, this.discovery),
				new oneOf_or_anyOf(this.ajv, this.discovery),
			);
		}
	}

	async write(
		docs:DocsTsGenerator,
		parent_folder: string,
		cleanup = true
	) {
		await this.prepare();
		await writeFile(`${__dirname}/../types-progress.md`, await generate_markdown(this.discovery));

		if (cleanup) {
			for (const remove of await glob(`${parent_folder}/**/*.{ts,js,map}`)) {
				await unlink(remove);
			}
		}

		const types = await this.discovery.discover_type_definitions();
		const schema = await this.discovery.types_discovery.schema_from_json();

		if (!object_has_property(
			schema,
			'definitions',
			value_is_non_array_object
		)) {
			throw new Error('Schema appears to have no definitions');
		}

		const files:{[key: string]: Node[]} = {};

		const custom_generators = [
			...legacy_UnrealEngineString_module.CustomGenerators(),
			string_starts_with,
			StringPassedRegExp,
		]

		for (const entry of custom_generators) {
			if (!(entry.file in files)) {
				files[entry.file] = [];
			}

			files[entry.file].push(entry.node);
		}

		for (const entry of Object.entries(types.found_types)) {
			const [definition, generator] = entry;
			const $ref = definition.substring(14);
			const target_file = this.can_guess_filename($ref)
				? this.guess_filename($ref)
				: 'common/unassigned.ts';

			if (!(target_file in files)) {
				files[target_file] = [];
			}

			files[target_file].push(ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				adjust_class_name($ref),
				undefined,
				generator(schema.definitions[$ref] as never)
			));
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

		const is_NativeClass = await TypesDiscovery.generate_is_NativeClass(
			this.ajv,
			this.discovery.types_discovery
		);

		for (const entry of await docs.get()) {
			const check = validations.find(maybe => maybe(entry));

			if (!check) {
				console.error(entry);
				throw new Error('Could not find schema!');
			} else if (!is_NativeClass(entry)) {
				console.error(entry);
				throw new Error('Entry not a general NativeClass!');
			}

			const entry_type = this.discovery.find(
				types.found_classes[validations.indexOf(check)]
			);

			const entry_class_name = adjust_unrealengine_value(
				UnrealEngineString.fromString(entry.NativeClass).right
			);

			const entry_filename = `classes/CoreUObject/${
				entry_class_name
			}.ts`;

			if (!(entry_filename in files)) {
				files[entry_filename] = [];
			}

			files[entry_filename].push(ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				`${entry_class_name}__NativeClass`,
				undefined,
				entry_type
			));
		}

		for await (
			const entry of (
				new DataTransformer(
					this.ajv,
					this.discovery,
					[
						new NativeClass(this.ajv),
					],
					docs
				)
			).generate()
		) {
			if (!(entry.file in files)) {
				files[entry.file] = [];
			}

			files[entry.file].push(entry.node);
		}


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

		await eslint_generated_types(`${parent_folder}/**/*.ts`);
	}

	private is_known_key_file_target(
		ref: string
	): ref is keyof typeof known_ref_file_targets {
		return ref in known_ref_file_targets;
	}

	can_guess_filename(ref: string) {
		return (
			ref in known_ref_file_targets
			|| /^FG[A-Za-z]+--[A-Za-z-_]+$/.test(ref)
			|| ref.startsWith('EditorCurveData--')
			|| ref.startsWith('NativeClass--')
		);
	}

	guess_filename(ref: string): string {
		if (!this.can_guess_filename(ref)) {
			throw new Error(`${ref} not a supported filename`);
		} else if (
			ref.startsWith('NativeClass--')
			|| ref.startsWith('EditorCurveData--')
		) {
			return 'classes/base.ts';
		} else if (this.is_known_key_file_target(ref)) {
			return known_ref_file_targets[ref];
		}

		return `classes/CoreUObject/${ref.split('--')[0]}.ts`;
	}
}
