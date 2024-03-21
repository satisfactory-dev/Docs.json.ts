import Ajv from 'ajv/dist/2020';
import {
	create_UnrealEngineStringReference_reference_type,
	is_UnrealEngineStringReference_general_object,
	UnrealEngineStringReference,
	UnrealEngineStringReference_general_schema,
	UnrealEngineStringReference_general_type,
	UnrealEngineStringReference_schema_definitions,
} from './UnrealEngineStringReference';
import {
	typed_object_string_general_schema,
	typed_object_string_general_type,
	TypedObjectString,
} from './TypedObjectString';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
	UnexpectedlyUnknownNoMatchError,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	adjust_class_name,
	create_literal_node_from_value,
	create_minimum_size_typed_array_of_single_type,
	create_modifier,
	create_union,
} from '../TsFactoryWrapper';
import {TypesGenerationFromSchema} from '../TypesGeneration';
import ts, {TupleTypeNode, TypeAliasDeclaration} from 'typescript';
import {
	const_schema_type,
	typed_string_const,
	typed_string_const_schema,
} from './TypedStringConst';
import {
	enum_schema_type,
	typed_string_enum,
	typed_string_enum_schema,
} from './TypedStringEnum';
import {$ref_choices, $ref_schema, supported_$ref} from './SupportedRefObject';
import {supported_meta} from './SupportedMeta';

const already_configured = new WeakSet<Ajv>();

const typed_array_string_oneOf_schema = {
	type: 'array',
	minItems: 1,
	items: {
		oneOf: [
			UnrealEngineStringReference_general_schema,
			$ref_schema,
			typed_object_string_general_schema,
		],
	},
};

const typed_array_string_schema = {
	type: 'object',
	required: ['type', 'minItems', 'items'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'array'},
		minItems: {type: 'number', minimum: 1},
		maxItems: {type: 'number', minimum: 1},
		items: {
			oneOf: [
				typed_object_string_general_schema,
				UnrealEngineStringReference_general_schema,
				typed_string_enum_schema,
				typed_string_const_schema,
				$ref_schema,
				{
					type: 'object',
					required: ['oneOf'],
					additionalProperties: false,
					properties: {
						oneOf: typed_array_string_oneOf_schema,
					},
				},
			],
		},
	},
};

declare type generate_tuple_schema_type<
	tuple_size = number,
	array_min_size = number,
	array_max_size = number | undefined,
> = {
	type: 'object';
	required: ['type', 'minItems', 'items'];
	additionalProperties: false;
	properties: {
		type: {type: 'string'; const: 'array'};
		minItems: {type: 'number'; const: array_min_size};
		items: {
			type: 'object';
			required: ['type', 'minItems', 'maxItems', 'uniqueItems', 'items'];
			additionalProperties: false;
			properties: {
				type: {type: 'string'; const: 'array'};
				items: {type: 'boolean'; const: false};
				minItems: {type: 'number'; const: tuple_size};
				maxItems: {type: 'number'; const: tuple_size};
				uniqueItems: {type: 'boolean'; const: true};
				prefixItems: {
					type: 'array';
					minItems: tuple_size;
					maxItems: tuple_size;
					uniqueItems: true;
					items: {
						oneOf: [typeof $ref_schema];
					};
				};
			};
		};
	} & (array_max_size extends undefined
		? typeof empty_object
		: {maxItems: {type: 'number'; const: array_max_size}});
};

function generate_tuple_schema(
	tuple_size: number,
	array_min_size: number = 1,
	array_max_size: number | undefined = undefined
): generate_tuple_schema_type<
	typeof tuple_size,
	typeof array_min_size,
	typeof array_max_size
> {
	if ((tuple_size | 0) !== tuple_size) {
		throw new Error('Tuple size be an integer!');
	} else if (tuple_size <= 0) {
		throw new Error('Tuple size be greater than zero!');
	} else if ((array_min_size | 0) !== array_min_size) {
		throw new Error('Array minimum size must be an integer!');
	} else if (array_min_size <= 0) {
		throw new Error('Array minimum size must be greater than zero!');
	} else if (undefined !== array_max_size) {
		if ((array_max_size | 0) !== array_max_size) {
			throw new Error('Array maximum size must be an integer!');
		} else if (array_max_size < array_min_size) {
			throw new Error(
				`Array maximum size must be greater than or equal to \`${array_min_size}\`!`
			);
		}
	}

	return {
		type: 'object',
		required: ['type', 'minItems', 'items'],
		additionalProperties: false,
		properties: {
			type: {type: 'string', const: 'array'},
			minItems: {type: 'number', const: array_min_size},
			...(array_max_size
				? {
						maxItems: array_max_size,
					}
				: {}),
			items: {
				type: 'object',
				required: [
					'type',
					'minItems',
					'maxItems',
					'uniqueItems',
					'items',
				],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'array'},
					items: {type: 'boolean', const: false},
					minItems: {type: 'number', const: tuple_size},
					maxItems: {type: 'number', const: tuple_size},
					uniqueItems: {type: 'boolean', const: true},
					prefixItems: {
						type: 'array',
						minItems: tuple_size,
						maxItems: tuple_size,
						uniqueItems: true,
						items: {
							oneOf: [$ref_schema],
						},
					},
				},
			},
		},
	};
}

const typed_array_string_tuple_2_schema = generate_tuple_schema(2);

const typed_array_string_parent_schema = {
	type: 'object',
	required: ['type', 'minLength', 'typed_array_string'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		typed_array_string: {
			oneOf: [
				typed_array_string_schema,
				typed_array_string_tuple_2_schema,
			],
		},
	},
};

declare type typed_array_string_oneOf = {
	oneOf: [
		$ref_choices | UnrealEngineStringReference_general_type,
		...($ref_choices | UnrealEngineStringReference_general_type)[],
	];
};

declare type typed_array_string_supported_items =
	| typed_array_string_oneOf
	| $ref_choices
	| enum_schema_type
	| const_schema_type
	| UnrealEngineStringReference_general_type
	| typed_object_string_general_type;

const empty_object = {};

declare type typed_array_string = {
	type: 'array';
	minItems: number;
	items: typed_array_string_supported_items;
} & ({maxItems: number} | typeof empty_object);

declare type typed_array_string_tuple_2 = {
	type: 'array';
	minItems: 1;
	items: {
		type: 'array';
		minItems: 2;
		maxItems: 2;
		items: false;
		prefixItems: [$ref_choices, $ref_choices];
	};
} & ({maxItems: number} | typeof empty_object);

declare type typed_array_string_without_recursive_reference = {
	type: 'array';
	minItems: number;
	items: Exclude<
		typed_array_string_supported_items,
		typed_object_string_general_type | enum_schema_type
	>;
} & ({maxItems: number} | typeof empty_object);

declare type typed_array_string_parent = {
	type: 'string';
	minLength: 1;
	typed_array_string: typed_array_string | typed_array_string_tuple_2;
};

export type typed_array_string_parent_without_recursive_reference = {
	type: 'string';
	minLength: 1;
	typed_array_string: typed_array_string_without_recursive_reference;
};

const empty_string_or_const_or_array_string_schema = {
	type: 'object',
	required: ['oneOf'],
	additionalProperties: false,
	definitions: UnrealEngineStringReference_schema_definitions,
	properties: {
		oneOf: {
			type: 'array',
			minItems: 2,
			items: {
				oneOf: [
					{
						type: 'object',
						required: ['type', 'const'],
						additionalProperties: false,
						properties: {
							type: {type: 'string', const: 'string'},
							const: {type: 'string', const: ''},
						},
					},
					typed_string_const_schema,
					typed_array_string_parent_schema,
				],
			},
		},
	},
};

export class TypedArrayString {
	static configure_ajv(ajv: Ajv) {
		if (already_configured.has(ajv)) {
			return;
		}

		already_configured.add(ajv);

		ajv.addKeyword({
			keyword: 'typed_array_string',
			type: 'string',
			metaSchema: {
				...{
					definitions:
						UnrealEngineStringReference_schema_definitions,
				},
				oneOf: [
					typed_array_string_schema,
					typed_array_string_tuple_2_schema,
				],
			},
			macro: this.ajv_macro_generator(false),
		});
	}

	static ajv_macro_generator(inner: boolean) {
		return (schema: typed_array_string) => {
			const item_regex = `(?:${this.item_to_regex(schema.items)})`;
			const max_items =
				'maxItems' in schema ? schema.maxItems : undefined;

			const additional_items =
				schema.minItems === max_items && 1 === schema.minItems
					? ''
					: `(?:,${item_regex})${max_items && max_items > 1 ? `{${max_items - 1},}` : schema.minItems === max_items && max_items > 1 ? `{${max_items - 1}` : '*'}`;

			const regex = `(?:\\(${item_regex}${additional_items}\\))`;

			return {
				pattern: inner ? regex : `^${regex}$`,
			};
		};
	}

	public static item_to_regex(
		item: typed_array_string_supported_items | typed_array_string_tuple_2
	): string {
		if (is_UnrealEngineStringReference_general_object(item)) {
			return UnrealEngineStringReference.ajv_macro_generator(true)(
				item.UnrealEngineStringReference
			).pattern;
		} else if (typed_string_const.is_supported_schema(item)) {
			return typed_string_const.value_regex(item);
		} else if (typed_string_enum.is_supported_schema(item)) {
			return typed_string_enum.value_regex(item);
		} else if (supported_$ref.is_supported_schema(item)) {
			return supported_$ref.value_regex(item);
		} else if ('prefixItems' in item) {
			return `(?:\\(${(
				item.prefixItems as typed_array_string_tuple_2['items']['prefixItems']
			)
				.map((e) => {
					return `(?:${this.item_to_regex(e)})`;
				})
				.join(', *')}\\))`;
		} else if (
			'typed_object_string' in item
			&& TypedObjectString.value_is_typed_object_string_general_type(
				item.typed_object_string
			)
		) {
			return TypedObjectString.ajv_macro_generator(true)(
				item.typed_object_string
			).pattern;
		} else if (
			TypedObjectString.value_is_typed_object_string_general_type(
				item
			)
			&& TypedObjectString.is_$ref_object_dictionary(
				item.typed_object_string
			)
		) {
			return TypedObjectString.ajv_macro_generator(true)(
				item.typed_object_string
			).pattern;
		} else if (
			TypedObjectString.value_is_typed_object_string_general_type(item)
		) {
			return TypedObjectString.ajv_macro_generator(true)(
				item.typed_object_string
			).pattern;
		} else if ('oneOf' in item) {
			return `(?:${item.oneOf.map((e) => this.item_to_regex(e)).join('|')})`;
		}

		throw new UnexpectedlyUnknownNoMatchError(
			item,
			'Currently unsupported in TypedArrayString.item_to_regex'
		);
	}

	private static typed_array_string_type_alias_generator(
		data: typed_array_string,
		reference_name: string
	): TypeAliasDeclaration {
		if (
			!('oneOf' in data.items)
			&& !is_UnrealEngineStringReference_general_object(data.items)
			&& !TypedObjectString.value_is_typed_object_string_general_type(
				data.items
			)
		) {
			throw new UnexpectedlyUnknownNoMatchError(
				data.items,
				'Currently unsupported in TypedArrayString.typed_array_string_type_alias_generator'
			);
		}

		return ts.factory.createTypeAliasDeclaration(
			[create_modifier('export')],
			adjust_class_name(reference_name),
			undefined,
			this.typed_array(data)
		);
	}

	public static typed_array(
		data:
			| typed_array_string
			| typed_array_string_without_recursive_reference
	): TupleTypeNode {
		return create_minimum_size_typed_array_of_single_type(
			data.minItems,
			() => {
				if (
					is_UnrealEngineStringReference_general_object(data.items)
				) {
					return create_UnrealEngineStringReference_reference_type(
						data.items.UnrealEngineStringReference
					);
				} else if (typed_string_enum.is_supported_schema(data.items)) {
					return typed_string_enum.value_type(data.items);
				} else if (
					typed_string_const.is_supported_schema(data.items)
				) {
					return typed_string_const.value_type(data.items);
				} else if (supported_$ref.is_supported_schema(data.items)) {
					return supported_$ref.value_type(data.items);
				} else if ('oneOf' in data.items) {
					return ts.factory.createUnionTypeNode(
						data.items.oneOf.map((e) => {
							if (supported_$ref.is_supported_schema(e)) {
								return supported_$ref.value_type(e);
							}

							return create_UnrealEngineStringReference_reference_type(
								e.UnrealEngineStringReference
							);
						})
					);
				}

				return TypedObjectString.general_type_to_object_type(
					data.items
				);
			},
			'maxItems' in data ? data.maxItems : undefined
		);
	}

	private static is_tuple(
		maybe: typed_array_string_parent
	): maybe is typed_array_string_parent & {
		typed_array_string: typed_array_string_tuple_2;
	} {
		return 'prefixItems' in maybe.typed_array_string.items;
	}

	private static is_not_tuple(
		maybe: typed_array_string_parent
	): maybe is typed_array_string_parent & {
		typed_array_string: typed_array_string;
	} {
		return !('prefixItems' in maybe.typed_array_string.items);
	}

	static TypesGenerators() {
		return [
			new TypesGenerationFromSchema<typed_array_string_parent>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_array_string_parent_schema,
				},
				(data, reference_name) => {
					if (this.is_not_tuple(data)) {
						return this.typed_array_string_type_alias_generator(
							data.typed_array_string,
							reference_name
						);
					}

					throw new UnexpectedlyUnknownNoMatchError(
						data,
						'not yet supported'
					);
				}
			),
			new TypesGenerationFromSchema<typed_array_string>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_array_string_schema,
				},
				(data, reference_name) => this.typed_array_string_type_alias_generator(data, reference_name)
			),
			new TypesGenerationFromSchema<{
				oneOf: [
					const_schema_type | typed_array_string_parent,
					const_schema_type | typed_array_string_parent,
					...(const_schema_type | typed_array_string_parent)[],
				];
			}>(
				empty_string_or_const_or_array_string_schema,
				(data, reference_name) => {
					const [a, b, ...rest] = data.oneOf.map((e) => {
						if (typed_string_const.is_supported_schema(e)) {
							return typed_string_const.value_type(e);
						} else if ('const' in e && '' === e.const) {
							return create_literal_node_from_value('');
						} else if (this.is_not_tuple(e)) {
							return this.typed_array(e.typed_array_string);
						}

						throw new UnexpectedlyUnknownNoMatchError(
							e,
							'not yet supported'
						);
					});

					return ts.factory.createTypeAliasDeclaration(
						[create_modifier('export')],
						adjust_class_name(reference_name),
						undefined,
						create_union(a, b, ...rest)
					);
				}
			),
		];
	}

	private static typed_array_string_node_generation_result(
		data: typed_array_string
	): TypeNodeGenerationResult {
		if (
			!('oneOf' in data.items)
			&& !is_UnrealEngineStringReference_general_object(data.items)
			&& !supported_meta.is_supported_schema(data.items)
			&& !TypedObjectString.value_is_typed_object_string_general_type(
				data.items
			)
		) {
			throw new UnexpectedlyUnknownNoMatchError(
				data.items,
				'Currently unsupported in TypedArrayString.typed_array_string_node_generation_result'
			);
		}

		return new TypeNodeGenerationResult(() => this.typed_array(data));
	}

	static TypeNodeGeneration() {
		return [
			new TypeNodeGeneration<typed_array_string_parent>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_array_string_parent_schema,
				},
				(data) => {
					if (this.is_not_tuple(data)) {
						return this.typed_array_string_node_generation_result(
							data.typed_array_string
						);
					} else if (this.is_tuple(data)) {
						return new TypeNodeGenerationResult(() => {
							return create_minimum_size_typed_array_of_single_type(
								data.typed_array_string.minItems,
								() =>
									ts.factory.createTupleTypeNode(
										data.typed_array_string.items.prefixItems.map(
											(e) => {
												return supported_$ref.value_type(
													e
												);
											}
										)
									),
								'maxItems' in data.typed_array_string
									? data.typed_array_string.maxItems
									: undefined
							);
						});
					}

					throw new UnexpectedlyUnknownNoMatchError(
						data,
						'Unsupported type found'
					);
				}
			),
			new TypeNodeGeneration<typed_array_string>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_array_string_schema,
				},
				(data) => {
					return this.typed_array_string_node_generation_result(
						data
					);
				}
			),
			new TypeNodeGeneration<typed_array_string_oneOf>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_array_string_oneOf_schema,
				},
				(data) => {
					return new TypeNodeGenerationResult(() => {
						return ts.factory.createUnionTypeNode(
							data.oneOf.map((e) => {
								if (supported_$ref.is_supported_schema(e)) {
									return supported_$ref.value_type(e);
								}

								return create_UnrealEngineStringReference_reference_type(
									e.UnrealEngineStringReference
								);
							})
						);
					});
				}
			),
		];
	}
}
