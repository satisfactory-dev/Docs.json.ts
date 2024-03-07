import {dirname} from 'node:path';
import ts from 'typescript';
import Ajv from 'ajv/dist/2020';

import {
	TypeNodeGenerationMatcher,
	create_constructor_args,
	create_binding_constructor,
} from '../TypeNodeGeneration';
import {
	supported_base_classes,
} from '../TypesGeneration/Classes';
import {
	adjust_class_name,
	adjust_unrealengine_prefix,
	adjust_unrealengine_value,
	create_class_options, create_lazy_union, create_literal_node_from_value,
	create_modifier, create_object_type, create_type, create_union,
	createClass,
	createProperty,
	createProperty_with_specific_type, possibly_create_lazy_union,
	supported_modifiers
} from '../TsFactoryWrapper';
import {extract_UnrealEngineString} from '../DocsValidation';
import {import_these_later} from '../TypesGeneration';

import schema from '../../schema/update8.schema.json' assert {type: 'json'};

declare type object_with_ref = { '$ref': string };

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
			items: object_with_ref | { oneOf: object_with_ref[] } | { anyOf: object_with_ref[] },
		} | {
			type: 'array',
			minItems: number,
			maxItems: number,
			prefixItems: [object_with_ref, ...object_with_ref[]],
			items: object_with_ref | false,
		} | {
			type: 'array',
			prefixItems: [object_with_ref, ...object_with_ref[]],
		},
	},
};

declare type definition_key<T extends string = keyof typeof schema.definitions> = keyof typeof schema.definitions;

export function get_dependency_tree(ref: definition_key): (definition_key)[] {
	const ancestry: definition_key[] = [ref];

	let checking = schema.definitions[ref];

	while ('$ref' in checking && checking['$ref'].startsWith('#/definitions/')) {
		ancestry.push(check_ref(checking['$ref'].substring(14)));

		const next_reference_name: string = checking['$ref'].substring(14);

		if (next_reference_name in schema.definitions) {
			checking = schema.definitions[check_ref(next_reference_name)];
		}
	}

	return ancestry;
}

export function is_ref(ref:string) : ref is definition_key&(typeof ref)
{
	return ref in schema.definitions;
}

export function check_ref(ref: string): (definition_key&(typeof ref)) {
	if (!is_ref(ref)) {
		throw new Error(`${ref} not in the update 8 schema!`);
	}

	return ref as (definition_key&(typeof ref));
}

export class Update8TypeNodeGeneration {
	private readonly type_node_generator: TypeNodeGenerationMatcher;
	public classes: ({ file: string, node: ts.Node}|{ file: string, node: ts.Node, ref: string})[] = [];
	private abstracts: (definition_key)[] = [];
	public imports: import_these_later = {};

	constructor(type_node_generator: TypeNodeGenerationMatcher) {
		this.type_node_generator = type_node_generator;
	}

	private merge_imports(filename:string, import_from:string, import_these:string[])
	{
		if (!(filename in this.imports)) {
			this.imports[filename] = {};
		}

		if (!(import_from in this.imports[filename])) {
			this.imports[filename][import_from] = [];
		}

		for (const import_this of import_these) {
			if (!this.imports[filename][import_from].includes(import_this)) {
				this.imports[filename][import_from].push(import_this);
			}
		}
	}

	private build_abstracts(
		ref: definition_key,
		filename: string,
		other_filenames: { [key: string]: string }
	) {
		const tree = get_dependency_tree(ref);
		const parent_ref = tree[1];

		if (!parent_ref) {
			throw new Error(`No parent ref for ${ref}`);
		}

		if (parent_ref in other_filenames && filename !== other_filenames[parent_ref]) {
			const other_filename = other_filenames[parent_ref];
			const other_class = adjust_class_name(parent_ref);

			this.merge_imports(filename, other_filename, [other_class]);
		}

		const [, ...ancestors] = tree;

		for (const probably_abstract of ancestors) {
			if (!this.abstracts.includes(probably_abstract)) {
				this.abstracts.push(probably_abstract);
			}
		}
	}

	private generate_class(
		ajv: Ajv,
		ref: definition_key,
		filename: string
	) {
		const path_relative = '../'.repeat(dirname(filename).split('/').length);

		const class_name = adjust_class_name(ref);

		const tree = get_dependency_tree(ref);
		const parent_ref = tree[1];

		if (!parent_ref) {
			throw new Error('foo');
		}

		const modifiers: supported_modifiers[] = ['export'];

		if (this.abstracts.includes(ref)) {
			modifiers.push('abstract');
		}

		const members: ts.ClassElement[] = [];

		const data = schema.definitions[ref];

		if ('$ref' in data || 'required' in data) {
			this.classes.push({...create_constructor_args(filename, class_name, data), ref});
		}

		if ('properties' in data) {
			const types = this.type_node_generator.find_from_properties(
				ajv,
				data.properties
			);

			TypeNodeGenerationMatcher.merge_imports(
				filename,
				path_relative,
				Object.values(types),
				this.imports
			);

			const required_properties = 'required' in data ? data.required : [];

			members.push(...Object.entries(types).map((entry) => {
				const [property, generator] = entry;
				TypeNodeGenerationMatcher.merge_import_singular(
					filename,
					path_relative,
					generator,
					this.imports
				);

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

		if ('$ref' in data || 'required' in data) {
			members.push(create_binding_constructor(ref, data));
		}

		this.classes.push({
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

	private generate_types() {
		const StrictlyTypedNumberFromRegExp_reference_names: (
			| 'decimal-string'
			| 'decimal-string--signed'
			| 'integer-string'
			| 'integer-string--signed'
		)[] = [
			'decimal-string',
			'decimal-string--signed',
			'integer-string',
			'integer-string--signed',
		];

		for (const reference_name of StrictlyTypedNumberFromRegExp_reference_names.filter(is_ref)) {
			this.classes.push({file: 'utils/validators.ts', node: ts.factory.createTypeAliasDeclaration(
					[create_modifier('export')],
					adjust_class_name(`${reference_name}__type`),
					[ts.factory.createTypeParameterDeclaration(
						undefined,
						'T',
						create_type('number'),
						create_type('number'),
					)],
					ts.factory.createTypeReferenceNode(
						'StrictlyTypedNumberFromRegExp',
						[
							ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(schema.definitions[reference_name].pattern)),
							ts.factory.createTypeReferenceNode('T'),
						]
					)
				)});
		}

		const mByProductAmount_reference_name = adjust_class_name(
			`${
				schema.definitions.mFuel.items.properties.mByproductAmount.oneOf[1]['$ref']?.substring(14)
			}__type`
		);

		const mFuel_item = {
			mFuelClass: ts.factory.createTypeReferenceNode(
				'StringPassedRegExp',
				[create_literal_node_from_value(
					schema.definitions.mFuel.items.properties.mFuelClass.pattern
				)]
			),
			mSupplementalResourceClass: create_lazy_union(
				'',
				schema.definitions.mFuel.items.properties.mSupplementalResourceClass.oneOf[1]
			),
			mByproduct: possibly_create_lazy_union(
				schema.definitions.mFuel.items.properties.mByproduct.enum
			),
			mByproductAmount: create_union(
				create_literal_node_from_value(''),
				ts.factory.createTypeReferenceNode(mByProductAmount_reference_name)
			),
		};

		this.merge_imports('common/arrays.ts', '../utils/validators', [
			'StringPassedRegExp',
			mByProductAmount_reference_name,
		]);

		this.classes.push({
			file: 'common/arrays.ts',
			node: ts.factory.createTypeAliasDeclaration(
				[create_modifier('declare')],
				'mFuel_item',
				undefined,
				create_object_type(mFuel_item, Object.keys(mFuel_item) as (keyof typeof mFuel_item)[])
			),
		});
	}

	private generate_base_classes() {
		this.classes.push(...supported_base_classes.map((reference_name) => {
			return create_constructor_args('classes/base.ts', reference_name, schema.definitions[reference_name]);
		}));

		this.classes.push(...supported_base_classes.map((reference_name) => {
			const data = schema.definitions[reference_name];

			const members: (ts.PropertyDeclaration | ts.MethodDeclaration)[] = data.required.map((property) => {
				return createProperty(property, ts.SyntaxKind.StringKeyword, [
					'public',
				]);
			});

			members.push(create_binding_constructor(
				reference_name,
				data
			));

			const class_options: create_class_options = {
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
	}

	private generate_concrete_classes(ajv: Ajv) {
		const checked: string[] = [];

		const filenames: { [key: string]: string } = {};

		function populate_checked_and_filenames(ref: string, NativeClass: NativeClass) {
			if (checked.includes(ref)) {
				return;
			}

			checked.push(ref);

			const {prefix, value} = extract_UnrealEngineString(NativeClass.properties.NativeClass.const);

			const definition_name = ref.substring(14);

			filenames[definition_name] = `classes/${adjust_unrealengine_prefix(prefix)}/${adjust_unrealengine_value(value)}.ts`;
		}

		for (const NativeClass of (schema.prefixItems as [NativeClass, ...NativeClass[]])) {
			let found_some = false;
			if (
				'items' in NativeClass.properties.Classes
				&& false !== NativeClass.properties.Classes.items
			) {
				if ('$ref' in NativeClass.properties.Classes.items) {
					found_some = true;
					populate_checked_and_filenames(NativeClass.properties.Classes.items['$ref'], NativeClass);
				} else if ('oneOf' in NativeClass.properties.Classes.items) {
					for (const entry of NativeClass.properties.Classes.items.oneOf) {
						found_some = true;
						populate_checked_and_filenames(entry['$ref'], NativeClass);
					}
				} else if ('anyOf' in NativeClass.properties.Classes.items) {
					for (const entry of NativeClass.properties.Classes.items.anyOf) {
						found_some = true;
						populate_checked_and_filenames(entry['$ref'], NativeClass);
					}
				}
			}

			if (
				'prefixItems' in NativeClass.properties.Classes
			) {
				for (const entry of NativeClass.properties.Classes.prefixItems) {
					found_some = true;
					populate_checked_and_filenames(entry['$ref'], NativeClass);
				}
			}

			if (!found_some) {
				console.error(NativeClass);

				throw new Error('whut');
			}
		}

		for (const entry of Object.entries(filenames)) {
			const [ref, filename] = entry;

			this.build_abstracts(check_ref(ref), filename, filenames);
		}

		for (const entry of Object.entries(filenames)) {
			const [ref, filename] = entry;

			this.generate_class(
				ajv,
				check_ref(ref),
				filename,
			);
		}
	}

	private remove_generated_abstracts() : definition_key[]
	{
		const generated_refs = (this.classes.filter(
			(entry) => 'ref' in entry
		) as {ref: string}[]).map((entry) => {
			return entry.ref;
		});

		generated_refs.push('class', 'class--no-description', 'class--no-description-or-display-name');

		return this.abstracts = this.abstracts.filter(maybe => !generated_refs.includes(maybe));
	}

	private generate_types_for_abstracts(ajv:Ajv, already_supproted:definition_key[])
	{
		const destination_map = {
			'Texture2D': 'common/unions.ts',
		};

		for (const ref of this.remove_generated_abstracts()) {
			if ('properties' in schema.definitions[ref])
			{
				const properties = (schema.definitions[ref] as {
					properties: {[key: string]: { '$ref': string }|{}}
				}).properties;

				for (const property of Object.values(properties)) {
					if (
						'$ref' in property
						&& property['$ref'].startsWith('#/definitions/')
						&& !already_supproted.includes(check_ref(property['$ref'].substring(14)))
					) {
						throw new Error(property['$ref'])

						// const filename = 'foo.ts';
						//
						// this.generate_class(
						// 	ajv,
						// 	check_ref(property['$ref'].substring(14)),
						// 	filename
						// );
					}
				}
			}
		}
	}

	private generate_abstract_classes(ajv:Ajv)
	{
		for (const ref of this.remove_generated_abstracts()) {
			const filename = `${ref.split('--')[0]}.ts`;
			this.generate_class(ajv, check_ref(ref), filename);
		}
	}

	generate_generators(
		ajv: Ajv,
		already_supported:definition_key[]
	) {
		return [
			() => {
				this.generate_types();
				this.generate_base_classes();
				this.generate_concrete_classes(ajv);
				/*
				this.generate_types_for_abstracts(ajv, already_supported);
				this.generate_abstract_classes(ajv);
				 */

				return this.classes;
			},
		];
	}
}
