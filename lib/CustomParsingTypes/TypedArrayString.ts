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
import {writeFile} from 'node:fs/promises';
import {
	adjust_class_name,
	create_literal_node_from_value,
	create_minimum_size_typed_array_of_single_type,
	create_modifier,
	create_union,
	possibly_create_lazy_union,
} from '../TsFactoryWrapper';
import {
	TypesGeneration_concrete,
	TypesGenerationFromSchema,
} from '../TypesGeneration';
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
import {object_only_has_that_property} from './CustomPairingTypes';
import {$ref_choices, $ref_schema, supported_$ref} from './SupportedRefObject';
import {supported_meta} from './SupportedMeta';

const already_configured = new WeakSet<Ajv>();

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
			],
		},
	},
};

const typed_array_string_schema_without_recursive_reference = {
	type: 'object',
	required: ['type', 'minItems', 'items'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'array'},
		minItems: {type: 'number', minimum: 1},
		maxItems: {type: 'number', minimum: 1},
		items: {
			oneOf: [UnrealEngineStringReference_general_schema],
		},
	},
};

const typed_array_string_parent_schema = {
	type: 'object',
	required: ['type', 'minLength', 'typed_array_string'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		typed_array_string: typed_array_string_schema,
	},
};

export const typed_array_string_parent_schema_without_recursive_reference = {
	type: 'object',
	required: ['type', 'minLength', 'typed_array_string'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		typed_array_string:
			typed_array_string_schema_without_recursive_reference,
	},
};

declare type typed_array_string_supported_items =
	| $ref_choices
	| enum_schema_type
	| const_schema_type
	| UnrealEngineStringReference_general_type
	| typed_object_string_general_type;

declare type typed_array_string = {
	type: 'array';
	minItems: number;
	items: typed_array_string_supported_items;
} & ({maxItems: number} | {});

declare type typed_array_string_without_recursive_reference = {
	type: 'array';
	minItems: number;
	items: Exclude<
		typed_array_string_supported_items,
		typed_object_string_general_type | enum_schema_type
	>;
} & ({maxItems: number} | {});

declare type typed_array_string_parent = {
	type: 'string';
	minLength: 1;
	typed_array_string: typed_array_string;
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

await writeFile(
	`typed-array-string.schema.json`,
	JSON.stringify(
		{
			definitions: UnrealEngineStringReference_schema_definitions,
			...typed_array_string_schema,
		},
		null,
		'\t'
	) + '\n'
);

await writeFile(
	`typed-array-string--parent.schema.json`,
	JSON.stringify(
		{
			definitions: UnrealEngineStringReference_schema_definitions,
			...typed_array_string_parent_schema,
		},
		null,
		'\t'
	) + '\n'
);

await writeFile(
	`foo.json`,
	JSON.stringify(empty_string_or_const_or_array_string_schema, null, '\t') +
		'\n'
);

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
				...typed_array_string_schema,
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
		item: typed_array_string_supported_items
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
		} else if (
			TypedObjectString.value_is_typed_object_string_general_type(
				item.typed_object_string
			)
		) {
			return TypedObjectString.ajv_macro_generator(true)(
				item.typed_object_string
			).pattern;
		} else if (
			TypedObjectString.value_is_typed_object_string_general_type(
				item
			) &&
			TypedObjectString.is_$ref_object_dictionary(
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
		}

		console.log(
			TypedObjectString.object_is_typed_object_string_oneOf(
				(item as any).typed_object_string
			)
		);

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
			!is_UnrealEngineStringReference_general_object(data.items) &&
			!TypedObjectString.value_is_typed_object_string_general_type(
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
				}

				return TypedObjectString.general_type_to_object_type(
					data.items
				);
			},
			'maxItems' in data ? data.maxItems : undefined
		);
	}

	static TypesGenerators(): [
		TypesGeneration_concrete,
		...TypesGeneration_concrete[],
	] {
		return [
			new TypesGenerationFromSchema<typed_array_string_parent>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_array_string_parent_schema,
				},
				(data, reference_name) => {
					return this.typed_array_string_type_alias_generator(
						data.typed_array_string,
						reference_name
					);
				}
			),
			new TypesGenerationFromSchema<typed_array_string>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_array_string_schema,
				},
				this.typed_array_string_type_alias_generator
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
						}

						return this.typed_array(e.typed_array_string);
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
		const {items} = data;

		if (
			!is_UnrealEngineStringReference_general_object(data.items) &&
			!supported_meta.is_supported_schema(data.items) &&
			!TypedObjectString.value_is_typed_object_string_general_type(
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

	static TypeNodeGeneration(): [
		TypeNodeGeneration<any>,
		...TypeNodeGeneration<any>[],
	] {
		return [
			new TypeNodeGeneration<typed_array_string_parent>(
				{
					definitions:
						UnrealEngineStringReference_schema_definitions,
					...typed_array_string_parent_schema,
				},
				(data) => {
					return this.typed_array_string_node_generation_result(
						data.typed_array_string
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
		];
	}
}
