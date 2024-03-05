import update8_schema from '../../schema/update8.schema.json';
import {
	default_config,
	extract_UnrealEngineString,
} from '../DocsValidation';
import {
	adjust_class_name,
	adjust_unrealengine_prefix,
	adjust_unrealengine_value, create_callExpression__for_validation_function, create_class_options,
	create_modifier, createClass, createMethod, createProperty, createProperty_with_specific_type,
	supported_modifiers,
} from "../TsFactoryWrapper";
import ts from 'typescript';
import {
	import_these_later,
	imports_shorthand,
	ImportTracker,
} from "../TypesGeneration";
import {TypeNodeGenerationMatcher} from "../TypeNodeGeneration";
import {
	type_node_generators as enum_type_node_generators,
} from './enum';
import {
	type_node_generators as const_type_node_generators,
} from './constants';
import {
	type_node_generators as validators_type_node_generators,
} from './validators';
import {
	type_node_generators as vectors_type_node_generators,
} from './vectors';

function get_dependency_tree(ref:string, schema:{
	definitions: {[key: string]: {
		'$ref': string
	}|Exclude<object, {
			'$ref': string
		}>}
}) : string[] {
	if (!(ref in schema.definitions)) {
		throw new Error(`${ref} not in supplied schema!`);
	}

	const ancestry:string[] = [ref];

	let checking = schema.definitions[ref];

	while ('$ref' in checking && checking['$ref'].startsWith('#/definitions/')) {
		ancestry.push(checking['$ref'].substring(14));

		const next_reference_name = checking['$ref'].substring(14);

		if (next_reference_name in schema.definitions) {
			checking = schema.definitions[next_reference_name];
		}
	}

	return ancestry;
}

declare type object_with_ref = {'$ref': string};

declare type NativeClass = {
	type: 'object',
	required: [
		'NativeClasses',
		'Classes',
	],
	additionalProperties: false,
	properties: {
		NativeClass: {
			type: 'string',
			const: string,
		},
		Classes: {
			type: 'array',
			items: object_with_ref|{oneOf: object_with_ref[]}|{anyOf: object_with_ref[]},
		} | {
			type: 'array',
			minItems: number,
			maxItems: number,
			prefixItems: [object_with_ref, ...object_with_ref[]],
			items: object_with_ref|false,
		} | {
			type: 'array',
			prefixItems: [object_with_ref, ...object_with_ref[]],
		},
	},
};

declare type supported_base_classes_union = 'class--no-description-or-display-name'|'class--no-description'|'class';
const supported_base_classes:[supported_base_classes_union, ...supported_base_classes_union[]] = [
	'class--no-description-or-display-name',
	'class--no-description',
	'class',
];

ImportTracker.set_imports('classes/base.ts', [{
	import_these: [
		'regexp_argument',
	],
	from: '../utils/validators',
}]);

export const custom_generators = [
	(schema:typeof update8_schema) : {file: string, node:ts.Node, ref?:string}[] => {
		const output:{file: string, node:ts.Node, ref?:string}[] = [];

		output.push(...supported_base_classes.map((reference_name) => {
			const data = schema.definitions[reference_name];

			let type:ts.TypeNode = ts.factory.createTypeLiteralNode(data.required.map((property) => {
				return ts.factory.createPropertySignature(
					undefined,
					property,
					undefined,
					ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
				);
			}));

			if ('$ref' in data && data['$ref']?.startsWith('#/definitions/')) {
				type = ts.factory.createIntersectionTypeNode([
					ts.factory.createTypeReferenceNode(adjust_class_name(`${
						data['$ref'].substring(14)
					}__constructor_args`)),
					type,
				]);
			}

			return {
				file: 'classes/base.ts',
				node: ts.factory.createTypeAliasDeclaration(
					[
						create_modifier('export'),
					],
					ts.factory.createIdentifier(adjust_class_name(`${reference_name}__constructor_args`)),
					undefined,
					type
				)
			};
		}));

		output.push(...supported_base_classes.map((reference_name) => {
			const data = schema.definitions[reference_name];

			const members:(ts.PropertyDeclaration|ts.MethodDeclaration)[] = data.required.map((property) => {
				return createProperty(property, ts.SyntaxKind.StringKeyword, [
					'public',
				]);
			});

			const constructor_arg = data.required.map((property) => {
				return ts.factory.createBindingElement(
					undefined,
					undefined,
					property,
				);
			});

			let constructor_body = data.required.map((property, index) => {
				const property_object = data.properties[
					property as keyof typeof data.properties
					] as {
					[key: string]: {
						type: string,
						pattern?: string,
					}
				};

				let assigned_value:ts.Expression = ts.factory.createIdentifier(property);

				if ('pattern' in property_object && 'string' === typeof property_object.pattern) {
					assigned_value = create_callExpression__for_validation_function(
						'regexp_argument',
						index,
						[
							assigned_value,
							ts.factory.createStringLiteral(property_object.pattern),
						]
					);
				}

				return ts.factory.createExpressionStatement(ts.factory.createAssignment(
					ts.factory.createPropertyAccessExpression(
						ts.factory.createThis(),
						property
					),
					assigned_value
				));
			});

			if ('$ref' in data && data['$ref']?.startsWith('#/definitions/')) {
				constructor_body = [
					ts.factory.createExpressionStatement(ts.factory.createCallExpression(
						ts.factory.createSuper(),
						undefined,
						[ts.factory.createIdentifier('rest')]
					)),
					...constructor_body,
				];
				constructor_arg.push(ts.factory.createBindingElement(
					ts.factory.createToken(ts.SyntaxKind.DotDotDotToken),
					undefined,
					'rest'
				));
			}

			members.push(createMethod(
				'constructor',
				[
					ts.factory.createParameterDeclaration(
						undefined,
						undefined,
						ts.factory.createObjectBindingPattern(constructor_arg),
						undefined,
						ts.factory.createTypeReferenceNode(adjust_class_name(`${reference_name}__constructor_args`))
					),
				],
				constructor_body,
				['protected']
			));

			const class_options:create_class_options = {
				modifiers: ['abstract'],
			};

			if ('$ref' in data && data['$ref']?.startsWith('#/definitions/')) {
				class_options.extends = data['$ref'].substring(14);
			}

			return {
				file: 'classes/base.ts',
				refs: reference_name,
				node: createClass(reference_name, members, class_options),
			};
		}));

		return output;
	},
	(schema:typeof update8_schema) : {file: string, node:ts.Node, ref:string}[] => {
		const checked:string[] = [];

		const filenames:{[key: string]: string} = {};
		const imports:import_these_later = {};

		const classes:{file: string, node:ts.Node, ref:string}[] = [];

		const abstracts:string[] = [];

		const type_node_generator = new TypeNodeGenerationMatcher([
			...enum_type_node_generators,
			...const_type_node_generators,
			...validators_type_node_generators,
			...vectors_type_node_generators,
		]);

		function populate_checked_and_filenames(ref:string, NativeClass:NativeClass) {
			if (checked.includes(ref)) {
				return;
			}

			checked.push(ref);

			const {prefix, value} = extract_UnrealEngineString(NativeClass.properties.NativeClass.const);

			filenames[ref.substring(14)] = `classes/${adjust_unrealengine_prefix(prefix)}/${adjust_unrealengine_value(value)}.ts`
		}

		for (const NativeClass of (schema.prefixItems as [NativeClass, ...NativeClass[]])) {
			if (
				'items' in NativeClass.properties.Classes
				&& false !== NativeClass.properties.Classes.items
			) {
				if ('$ref' in NativeClass.properties.Classes.items) {
					populate_checked_and_filenames(NativeClass.properties.Classes.items['$ref'], NativeClass);
				} else if ('oneOf' in NativeClass.properties.Classes.items) {
					for (const entry of NativeClass.properties.Classes.items.oneOf) {
						populate_checked_and_filenames(entry['$ref'], NativeClass);
					}
				} else if ('anyOf' in NativeClass.properties.Classes.items) {
					for (const entry of NativeClass.properties.Classes.items.anyOf) {
						populate_checked_and_filenames(entry['$ref'], NativeClass);
					}
				}
			}
		}

		for (const entry of Object.entries(filenames)) {
			const [ref, filename] = entry;

			const tree = get_dependency_tree(ref, schema);
			const parent_ref = tree[1];

			if (!parent_ref) {
				throw new Error('foo');
			}

			if (parent_ref in filenames && filename !== filenames[parent_ref]) {
				const other_filename = filenames[parent_ref];
				const other_class = adjust_class_name(parent_ref);

				if ( ! (filename in imports)) {
					imports[filename] = {};
				}

				if ( ! (other_filename in imports[filename])) {
					imports[filename][other_filename] = [];
				}

				if ( ! imports[filename][other_filename].includes(other_class)) {
					imports[filename][other_filename].push(other_class);
				}
			}

			const [, ...ancestors] = tree;

			for (const probably_abstract of ancestors) {
				if (!abstracts.includes(probably_abstract)) {
					abstracts.push(probably_abstract);
				}
			}
		}

		for (const entry of Object.entries(filenames)) {
			const [ref, filename] = entry;

			const class_name = adjust_class_name(ref);

			const tree = get_dependency_tree(ref, schema);
			const parent_ref = tree[1];

			if (!parent_ref) {
				throw new Error('foo');
			}

			const modifiers:supported_modifiers[] = ['export'];

			if (abstracts.includes(ref)) {
				modifiers.push('abstract');
			}

			const members:ts.ClassElement[] = [];


			const data = schema.definitions[
				ref as keyof typeof update8_schema.definitions
			];

			if ('properties' in data) {
				const types = Object.fromEntries(Object.entries(data.properties).map((entry) => {
					const [property, property_data] = entry;

					return [
						property,
						type_node_generator.find(default_config.ajv, property_data),
					];
				}));

				for (const result of Object.values(types)) {
					for (const import_these_entry of  Object.entries(result.import_these_somewhere_later)) {
						const [import_destination, import_entries] = import_these_entry;

						if ( ! (import_destination in imports)) {
							imports[import_destination] = {};
						}

						for (const import_entry of Object.entries(import_entries)) {
							const [import_from, import_these] = import_entry;

							if ( ! (import_from in imports[import_destination])) {
								imports[import_destination][import_from] = [];
							}

							for (const import_this of import_these) {
								if (!imports[import_destination][import_from].includes(import_this)) {
									imports[import_destination][import_from].push(import_this);
								}
							}
						}
					}
				}

				const required_properties = 'required' in data ? data.required : [];

				members.push(...Object.entries(types).map((entry) => {
					const [property, generator] = entry;
					return createProperty_with_specific_type(
						property,
						required_properties.includes(property) ? ts.factory.createUnionTypeNode([
							generator.type(),
							ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
						]) : generator.type(),
						['public']
					);
				}));
			}

			classes.push({
				ref,
				file: filename,
				node: ts.factory.createClassDeclaration(
					modifiers.map((modifier) => create_modifier(modifier)),
					class_name,
					undefined,
					[
						ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
							ts.factory.createExpressionWithTypeArguments(
								ts.factory.createIdentifier(adjust_class_name(parent_ref)),
								undefined
							),
						])
					],
					members,
				),
			});
		}

		for (const entry of Object.entries(imports)) {
			const imports_shorthand:imports_shorthand = [];

			const [filename, file_imports] = entry;

			for (const inner_entry of Object.entries(file_imports)) {
				const [from, import_these] = inner_entry;

				if (import_these.length) {
					imports_shorthand.push({from, import_these: import_these as [string, ...string[]]});
				}
			}

			if (imports_shorthand.length) {
				ImportTracker.set_imports(filename, imports_shorthand);
			}
		}

		return classes;
	},
];
