import {basename, dirname} from 'node:path';
import ts from 'typescript';
import Ajv from 'ajv/dist/2020';

import {
	TypeNodeGenerationMatcher,
	create_constructor_args,
	create_binding_constructor,
	NoMatchError,
	PropertyMatchFailure,
	PartialMatchError,
	TypeNodeGenerationResult,
	TypeNodeGeneration,
} from '../TypeNodeGeneration';
import {supported_base_classes} from '../TypesGeneration/Classes';
import {
	adjust_class_name,
	adjust_unrealengine_prefix,
	adjust_unrealengine_value,
	create_class_options,
	create_lazy_union,
	create_literal_node_from_value,
	create_minimum_size_typed_array_of_single_type,
	create_modifier,
	create_object_type,
	create_type,
	create_union,
	createClass,
	createClass__members__with_auto_constructor,
	createProperty,
	createProperty_with_specific_type,
	is_supported_properties_object,
	possibly_create_lazy_union,
	supported_modifiers,
} from '../TsFactoryWrapper';
import {extract_UnrealEngineString} from '../DocsValidation';
import {import_these_later} from '../TypesGeneration';

import schema from '../../schema/update8.schema.json' assert {type: 'json'};

declare type object_with_ref = {$ref: string};

declare type NativeClass = {
	type: 'object';
	required: ['NativeClasses', 'Classes'];
	additionalProperties: false;
	properties: {
		NativeClass: {
			type: 'string';
			const: string;
		};
		Classes:
			| {
					type: 'array';
					items:
						| object_with_ref
						| {oneOf: object_with_ref[]}
						| {anyOf: object_with_ref[]};
			  }
			| {
					type: 'array';
					minItems: number;
					maxItems: number;
					prefixItems: [object_with_ref, ...object_with_ref[]];
					items: object_with_ref | false;
			  }
			| {
					type: 'array';
					prefixItems: [object_with_ref, ...object_with_ref[]];
			  };
	};
};

declare type definition_key = keyof typeof schema.definitions;

export function get_dependency_tree(ref: definition_key): definition_key[] {
	const ancestry: definition_key[] = [ref];

	let checking = schema.definitions[ref];

	while (
		'$ref' in checking &&
		checking['$ref'].startsWith('#/definitions/')
	) {
		ancestry.push(check_ref(checking['$ref'].substring(14)));

		const next_reference_name: string = checking['$ref'].substring(14);

		if (next_reference_name in schema.definitions) {
			checking = schema.definitions[check_ref(next_reference_name)];
		}
	}

	return ancestry;
}

export function is_ref(ref: string): ref is definition_key & typeof ref {
	return ref in schema.definitions;
}

export function check_ref(ref: string): definition_key & typeof ref {
	if (!is_ref(ref)) {
		throw new Error(`${ref} not in the update 8 schema!`);
	}

	return ref as definition_key & typeof ref;
}

export class Update8TypeNodeGeneration {
	private readonly type_node_generator: TypeNodeGenerationMatcher;
	public classes: (
		| {file: string; node: ts.Node}
		| {file: string; node: ts.Node; ref: string}
	)[] = [];
	private abstracts: definition_key[] = [];
	public imports: import_these_later = {};

	constructor(type_node_generator: TypeNodeGenerationMatcher) {
		this.type_node_generator = type_node_generator;
	}

	private merge_imports_relatively(
		path_relative: string,
		filename: string,
		import_from: string,
		import_these: string[]
	) {
		if (dirname(filename) === dirname(import_from)) {
			import_from = `./${basename(import_from)}`;
		} else {
			import_from = `${path_relative}${import_from}`;
		}

		this.merge_imports(filename, import_from, import_these);
	}

	private merge_imports(
		filename: string,
		import_from: string,
		import_these: string[]
	) {
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
		other_filenames: {[key: string]: string}
	) {
		const path_relative = '../'.repeat(
			dirname(filename).split('/').length
		);
		const tree = get_dependency_tree(ref);
		const parent_ref = tree[1];

		if (!parent_ref) {
			throw new Error(`No parent ref for ${ref}`);
		}

		if (
			parent_ref in other_filenames &&
			filename !== other_filenames[parent_ref]
		) {
			const other_filename = other_filenames[parent_ref];
			const other_class = adjust_class_name(parent_ref);

			this.merge_imports_relatively(
				path_relative,
				filename,
				other_filename.replace(/\.ts$/, ''),
				[other_class]
			);
		}

		const [, ...ancestors] = tree;

		for (const probably_abstract of ancestors) {
			if (!this.abstracts.includes(probably_abstract)) {
				this.abstracts.push(probably_abstract);
			}
		}
	}

	private determine_parent_info(
		ajv: Ajv,
		ref: definition_key
	): {
		pass_to_super: string[];
		types: {[key: string]: TypeNodeGenerationResult};
		required_but_not_defined: string[];
	} {
		let checking = schema.definitions[ref];
		const property_index: {[key: string]: string[]} = {};
		const original_ref = ref;

		const types =
			'properties' in checking
				? this.type_node_generator.find_from_properties(
						ajv,
						checking.properties
					)
				: {};
		const properties = Object.keys(types);
		const result: {
			pass_to_super: string[];
			types: {[key: string]: TypeNodeGenerationResult};
			required_but_not_defined: string[];
		} = {
			pass_to_super: [],
			types,
			required_but_not_defined:
				'required' in checking
					? checking.required.filter(
							(maybe) => !properties.includes(maybe)
						)
					: [],
		};

		while ('$ref' in checking || 'properties' in checking) {
			property_index[ref] = [
				...new Set([
					...('properties' in checking
						? Object.keys(checking.properties)
						: []),
					...('required' in checking ? checking.required : []),
				]).values(),
			];
			const types =
				'properties' in checking
					? this.type_node_generator.find_from_properties(
							ajv,
							checking.properties
						)
					: {};

			for (const entry of Object.entries(types)) {
				const [property, type_result] = entry;

				if (
					!(property in result) &&
					result.required_but_not_defined.includes(property)
				) {
					result.types[property] = type_result;
				}
			}

			if ('$ref' in checking) {
				let sub_reference = checking['$ref'];

				if (!sub_reference.startsWith('#/definitions/')) {
					break;
				}

				sub_reference = sub_reference.substring(14);

				if (!is_ref(sub_reference)) {
					break;
				}

				ref = sub_reference;

				checking = schema.definitions[ref];
			} else {
				break;
			}
		}

		const current_properties =
			original_ref in property_index ? property_index[original_ref] : [];

		delete property_index[original_ref];
		const parent_properties = new Set(
			Object.values(property_index).flat()
		);

		result.pass_to_super = [
			...new Set([
				...[...parent_properties.values()].filter((maybe) =>
					current_properties.includes(maybe)
				),
			]).values(),
		];

		return result;
	}

	private generate_class(ajv: Ajv, ref: definition_key, filename: string) {
		const path_relative = '../'.repeat(
			dirname(filename).split('/').length
		);

		const class_name = adjust_class_name(ref);

		const tree = get_dependency_tree(ref);
		const parent_ref = tree[1];

		if (!parent_ref) {
			throw new Error(`No parent class found for ${ref}`);
		}

		const modifiers: supported_modifiers[] = ['export'];

		if (this.abstracts.includes(ref)) {
			modifiers.push('abstract');
		}

		const members: ts.ClassElement[] = [];

		const data = schema.definitions[ref];

		const {types, pass_to_super, required_but_not_defined} =
			this.determine_parent_info(ajv, ref);

		if ('$ref' in data || 'required' in data) {
			if (!filename.endsWith('.ts')) {
				throw new Error(
					`non-typescript filename specified: ${filename}`
				);
			}

			this.classes.push(
				create_constructor_args(filename, class_name, data, types)
			);
		}

		if ('properties' in data) {
			TypeNodeGenerationMatcher.merge_imports(
				filename,
				path_relative,
				Object.values(types),
				this.imports
			);

			members.push(
				...Object.entries(types)
					.filter((maybe) => {
						return !required_but_not_defined.includes(maybe[0]);
					})
					.map((entry) => {
						const [property, generator] = entry;
						const type = generator.type();
						TypeNodeGenerationMatcher.merge_import_singular(
							filename,
							path_relative,
							generator,
							this.imports
						);

						return createProperty_with_specific_type(
							property,
							type,
							['public']
						);
					})
			);
		}

		if ('$ref' in data || 'required' in data) {
			members.push(
				create_binding_constructor(
					ref,
					data,
					pass_to_super,
					required_but_not_defined
				)
			);
		}

		this.classes.push({
			ref,
			file: filename,
			node: ts.factory.createClassDeclaration(
				modifiers.map((modifier) => create_modifier(modifier)),
				class_name,
				undefined,
				[
					ts.factory.createHeritageClause(
						ts.SyntaxKind.ExtendsKeyword,
						[
							ts.factory.createExpressionWithTypeArguments(
								ts.factory.createIdentifier(
									adjust_class_name(parent_ref)
								),
								undefined
							),
						]
					),
				],
				members
			),
		});
	}

	private generate_types(ajv: Ajv) {
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

		for (const reference_name of StrictlyTypedNumberFromRegExp_reference_names.filter(
			is_ref
		)) {
			this.classes.push({
				file: 'utils/validators.ts',
				ref: `${reference_name}__type`,
				node: ts.factory.createTypeAliasDeclaration(
					[create_modifier('export')],
					adjust_class_name(`${reference_name}__type`),
					[
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'T',
							create_type('number'),
							create_type('number')
						),
					],
					ts.factory.createTypeReferenceNode(
						'StrictlyTypedNumberFromRegExp',
						[
							ts.factory.createLiteralTypeNode(
								ts.factory.createStringLiteral(
									schema.definitions[reference_name].pattern
								)
							),
							ts.factory.createTypeReferenceNode('T'),
						]
					)
				),
			});
		}

		const mByProductAmount_reference_name = adjust_class_name(
			`${schema.definitions.mFuel.items.properties.mByproductAmount.oneOf[1][
				'$ref'
			]?.substring(14)}__type`
		);

		const mFuel_item = {
			mFuelClass: ts.factory.createTypeReferenceNode(
				'StringPassedRegExp',
				[
					create_literal_node_from_value(
						schema.definitions.mFuel.items.properties.mFuelClass
							.pattern
					),
				]
			),
			mSupplementalResourceClass: create_lazy_union(
				'',
				schema.definitions.mFuel.items.properties
					.mSupplementalResourceClass.oneOf[1]
			),
			mByproduct: possibly_create_lazy_union(
				schema.definitions.mFuel.items.properties.mByproduct.enum
			),
			mByproductAmount: create_union(
				create_literal_node_from_value(''),
				ts.factory.createTypeReferenceNode(
					mByProductAmount_reference_name
				)
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
				create_object_type(mFuel_item)
			),
		});

		type EditorCurveData_required_expected =
			| 'DefaultValue'
			| 'PreInfinityExtrap'
			| 'PostInfinityExtrap';

		const EditorCurveData_required_expected: [
			EditorCurveData_required_expected,
			...EditorCurveData_required_expected[],
		] = ['DefaultValue', 'PreInfinityExtrap', 'PostInfinityExtrap'];

		function check_required<T extends string = string>(
			array: string[],
			required: [T, ...T[]]
		): array is [T, ...T[]] {
			return (
				array.length > 0 &&
				array.length ===
					array
						.map((item) => (required as string[]).includes(item))
						.reduce((was, is) => was + (is ? 1 : 0), 0) &&
				array.length === required.length
			);
		}

		if (
			!check_required<EditorCurveData_required_expected>(
				schema.definitions.EditorCurveData.object_string.properties
					.EditorCurveData.required,
				EditorCurveData_required_expected
			)
		) {
			throw new Error(
				'Inconsistent required properties found for EditorCurveData'
			);
		}
		if (
			!is_supported_properties_object(
				schema.definitions.EditorCurveData.object_string.properties
					.EditorCurveData.properties
			)
		) {
			throw new Error('Unsupported refs found for EditorCurveData');
		}

		this.classes.push({
			file: 'common/classes.ts',
			ref: 'EditorCurveData',
			node: createClass(
				'EditorCurveData',
				createClass__members__with_auto_constructor<
					[
						EditorCurveData_required_expected,
						...EditorCurveData_required_expected[],
					],
					'DefaultValue' | 'PreInfinityExtrap' | 'PostInfinityExtrap'
				>(
					{
						type: 'object',
						required:
							schema.definitions.EditorCurveData.object_string
								.properties.EditorCurveData.required,
						properties:
							schema.definitions.EditorCurveData.object_string
								.properties.EditorCurveData.properties,
					},
					['public', 'readonly']
				),
				{
					modifiers: ['export'],
				}
			),
		});

		for (const mUnlocks_type of schema.definitions['FGSchematic--base']
			.properties.mUnlocks.items.anyOf) {
			const {$ref} = mUnlocks_type;

			const reference_name = $ref.substring(14);
			const type_name = adjust_class_name(reference_name);

			if (!is_ref(reference_name)) {
				throw new NoMatchError(
					mUnlocks_type,
					`${reference_name} not in schema.definitions!`
				);
			}

			this.type_node_generator.matchers.push(
				new TypeNodeGeneration<{
					$ref:
						| '#/definitions/FGBuildable--mAllowedResources--default-UnrealEngineString'
						| '#/definitions/FGSchematic--mUnlocks_mSchematics--mSchematics';
				}>(
					{
						type: 'object',
						required: ['$ref'],
						additionalProperties: false,
						properties: {
							$ref: {
								type: 'string',
								enum: [
									'#/definitions/FGBuildable--mAllowedResources--default-UnrealEngineString',
									'#/definitions/FGSchematic--mUnlocks_mSchematics--mSchematics',
								],
							},
						},
					},
					(data) => {
						return new TypeNodeGenerationResult(() => {
							return ts.factory.createTypeReferenceNode(
								adjust_class_name(data.$ref.substring(14))
							);
						});
					}
				)
			);

			try {
				const result = this.type_node_generator.find(
					ajv,
					schema.definitions[reference_name]
				);

				this.classes.push({
					file: 'classes/CoreUObject/FGSchematic.ts',
					ref: reference_name,
					node: ts.factory.createTypeAliasDeclaration(
						[create_modifier('declare')],
						type_name,
						undefined,
						result.type()
					),
				});

				for (const entry of Object.entries(
					result.import_these_somewhere_later
				)) {
					this.merge_imports(
						'classes/CoreUObject/FGSchematic.ts',
						entry[0],
						entry[1]
					);
				}
			} catch (err) {
				if (
					err instanceof NoMatchError ||
					err instanceof PartialMatchError
				) {
					throw new PropertyMatchFailure(reference_name, err);
				}

				throw err;
			}
		}
	}

	private generate_base_classes(ajv: Ajv) {
		this.classes.push(
			...supported_base_classes.map((reference_name) => {
				const types =
					'properties' in schema.definitions[reference_name]
						? this.type_node_generator.find_from_properties(
								ajv,
								schema.definitions[reference_name].properties
							)
						: {};

				return create_constructor_args(
					'classes/base.ts',
					reference_name,
					schema.definitions[reference_name],
					types
				);
			})
		);

		this.classes.push(
			...supported_base_classes.map((reference_name) => {
				const data = schema.definitions[reference_name];

				const members: (
					| ts.PropertyDeclaration
					| ts.MethodDeclaration
				)[] = data.required.map((property) => {
					return createProperty(
						property,
						ts.SyntaxKind.StringKeyword,
						['public']
					);
				});

				const {pass_to_super} = this.determine_parent_info(
					ajv,
					reference_name
				);

				members.push(
					create_binding_constructor(
						reference_name,
						data,
						pass_to_super
					)
				);

				const class_options: create_class_options = {
					modifiers: ['export', 'abstract'],
				};

				if (
					'$ref' in data &&
					data['$ref']?.startsWith('#/definitions/')
				) {
					class_options.extends = data['$ref'].substring(14);
				}

				return {
					file: 'classes/base.ts',
					refs: reference_name,
					node: createClass(reference_name, members, class_options),
				};
			})
		);
	}

	private populate_checked_and_filenames(
		filenames: {[key: string]: string},
		checked: string[],
		ref: string,
		NativeClass: NativeClass
	) {
		if (checked.includes(ref)) {
			return;
		}

		checked.push(ref);

		const {prefix, value} = extract_UnrealEngineString(
			NativeClass.properties.NativeClass.const
		);

		const definition_name = ref.substring(14);

		filenames[definition_name] =
			`classes/${adjust_unrealengine_prefix(prefix)}/${adjust_unrealengine_value(value)}.ts`;
	}

	private generate_concrete_class(
		checked: string[],
		filenames: {[p: string]: string},
		NativeClass: NativeClass
	) {
		const {Classes} = NativeClass.properties;
		if ('items' in Classes && false !== Classes.items) {
			const {items} = Classes;

			if ('$ref' in items) {
				this.populate_checked_and_filenames(
					filenames,
					checked,
					items['$ref'],
					NativeClass
				);
			} else if ('oneOf' in items) {
				const {oneOf} = items;
				for (const entry of oneOf) {
					this.populate_checked_and_filenames(
						filenames,
						checked,
						entry['$ref'],
						NativeClass
					);
				}
			} else if ('anyOf' in items) {
				const {anyOf} = items;
				for (const entry of anyOf) {
					this.populate_checked_and_filenames(
						filenames,
						checked,
						entry['$ref'],
						NativeClass
					);
				}
			}
		}

		if ('prefixItems' in Classes) {
			const {prefixItems} = Classes;
			for (const entry of prefixItems) {
				this.populate_checked_and_filenames(
					filenames,
					checked,
					entry['$ref'],
					NativeClass
				);
			}
		}
	}

	private generate_concrete_classes(ajv: Ajv) {
		const checked: string[] = [];

		const filenames: {[key: string]: string} = {};

		for (const NativeClass of schema.prefixItems as [
			NativeClass,
			...NativeClass[],
		]) {
			this.generate_concrete_class(checked, filenames, NativeClass);
		}

		const NativeClass_ref_schema = {
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					type: 'string',
					enum: schema.prefixItems
						.map((native_class): [string, ...string[]] => {
							const {items, prefixItems} =
								native_class.properties.Classes;

							const output: string[] = [];

							if (items && true !== items) {
								if ('$ref' in items && items.$ref) {
									output.push(items.$ref);
								} else if (
									'oneOf' in items &&
									items.oneOf &&
									items.oneOf.length >= 1
								) {
									output.push(
										...items.oneOf.map((item) => {
											return item['$ref'];
										})
									);
								} else if (
									'anyOf' in items &&
									items.anyOf &&
									items.anyOf.length >= 1
								) {
									output.push(
										...items.anyOf.map((item) => {
											return item.$ref;
										})
									);
								}
							}

							if (prefixItems) {
								output.push(
									...prefixItems.map((item) => {
										return item.$ref;
									})
								);
							}

							if (output.length < 1) {
								throw new NoMatchError(
									native_class,
									'Could not extract all refs'
								);
							}

							return output as [string, ...string[]];
						})
						.flat()
						.filter((maybe) => undefined !== maybe),
				},
			},
		};

		this.type_node_generator.matchers.push(
			new TypeNodeGeneration(NativeClass_ref_schema, (data) => {
				return new TypeNodeGenerationResult(() =>
					ts.factory.createTypeReferenceNode(
						adjust_class_name(data.$ref.substring(14))
					)
				);
			}),
			new TypeNodeGeneration<{
				type: 'array';
				minItems?: number;
				maxItems?: number;
				prefixItems?: [{$ref: string}, ...{$ref: string}[]];
				items:
					| false
					| {$ref: string}
					| {oneOf: [{$ref: string}, ...{$ref: string}[]]};
			}>(
				{
					type: 'object',
					required: ['type'],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'array'},
						minItems: {type: 'number'},
						maxItems: {type: 'number'},
						prefixItems: {
							type: 'array',
							minItems: 1,
							items: NativeClass_ref_schema,
						},
						items: {
							oneOf: [
								{type: 'boolean', const: false},
								NativeClass_ref_schema,
								{
									type: 'object',
									required: ['oneOf'],
									additionalProperties: false,
									properties: {
										oneOf: {
											type: 'array',
											minItems: 1,
											items: NativeClass_ref_schema,
										},
									},
								},
							],
						},
					},
				},
				(data) => {
					return new TypeNodeGenerationResult(() => {
						const {items, maxItems, minItems, prefixItems} = data;

						if (items && '$ref' in items) {
							if (prefixItems) {
								return ts.factory.createTupleTypeNode([
									...prefixItems.map((item) => {
										return ts.factory.createTypeReferenceNode(
											adjust_class_name(
												item.$ref.substring(14)
											)
										);
									}),
									ts.factory.createRestTypeNode(
										ts.factory.createArrayTypeNode(
											ts.factory.createTypeReferenceNode(
												adjust_class_name(
													items.$ref.substring(14)
												)
											)
										)
									),
								]);
							}

							return ts.factory.createArrayTypeNode(
								ts.factory.createTypeReferenceNode(
									adjust_class_name(items.$ref.substring(14))
								)
							);
						} else if (prefixItems) {
							return ts.factory.createTupleTypeNode(
								prefixItems.map((item) => {
									return ts.factory.createTypeReferenceNode(
										adjust_class_name(
											item.$ref.substring(14)
										)
									);
								})
							);
						} else if (items && 'oneOf' in items) {
							return create_minimum_size_typed_array_of_single_type(
								minItems ? minItems : 1,
								() => {
									return ts.factory.createUnionTypeNode(
										items.oneOf.map((item) => {
											return ts.factory.createTypeReferenceNode(
												adjust_class_name(
													item.$ref.substring(14)
												)
											);
										})
									);
								},
								maxItems ? maxItems : undefined
							);
						}

						throw new NoMatchError(
							data,
							'Could not figure out a type'
						);
					});
				}
			)
		);

		for (const entry of Object.entries(filenames)) {
			const [ref, filename] = entry;

			this.build_abstracts(check_ref(ref), filename, filenames);
		}

		for (const entry of Object.entries(filenames)) {
			const [ref, filename] = entry;

			this.generate_class(ajv, check_ref(ref), filename);
		}
	}

	private remove_generated_abstracts(): definition_key[] {
		const generated_refs = (
			this.classes.filter((entry) => 'ref' in entry) as {ref: string}[]
		).map((entry) => {
			return entry.ref;
		});

		generated_refs.push(
			'class',
			'class--no-description',
			'class--no-description-or-display-name'
		);

		return (this.abstracts = this.abstracts.filter(
			(maybe) => !generated_refs.includes(maybe)
		));
	}

	private generate_abstract_classes(ajv: Ajv) {
		for (const ref of this.remove_generated_abstracts()) {
			const filename = this.guess_filename(ref);
			this.generate_class(ajv, check_ref(ref), filename);
		}
	}

	public generate_DocsJsonTs(ajv: Ajv) {
		return ts.factory.createTypeAliasDeclaration(
			[create_modifier('export')],
			'Docs',
			undefined,
			ts.factory.createTupleTypeNode(
				schema.prefixItems.map((native_class) => {
					if (
						!native_class.properties.NativeClass.const.startsWith(
							"/Script/CoreUObject.Class'/Script/FactoryGame."
						)
					) {
						throw new NoMatchError(
							native_class.properties.NativeClass.const,
							'Unsupported const!'
						);
					}

					return this.type_node_generator
						.find(ajv, native_class)
						.type();
				})
			)
		);
	}

	generate_generators(ajv: Ajv) {
		return [
			() => {
				this.generate_types(ajv);
				this.generate_base_classes(ajv);
				this.generate_concrete_classes(ajv);
				this.generate_abstract_classes(ajv);

				return this.classes;
			},
		];
	}

	can_guess_filename(ref: definition_key) {
		return /^FG[A-Za-z]+--[A-Za-z-_]+$/.test(ref);
	}

	guess_filename(ref: definition_key): string {
		if (!this.can_guess_filename(ref)) {
			throw new Error(`${ref} not a supported filename`);
		}

		return `classes/CoreUObject/${ref.split('--')[0]}.ts`;
	}
}
