import Ajv from 'ajv/dist/2020';
import {
	is_UnrealEngineString_parent,
	UnrealEngineString,
	UnrealEngineString_parent_schema,
	UnrealEngineString_parent_type,
	UnrealEngineString_schema_definitions,
} from './UnrealEngineString';
import {
	general_schema,
	general_type,
	TypedObjectString,
} from './TypedObjectString';
import {
	UnexpectedlyUnknown,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
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
import {
	$ref_choices, $ref_schema, supported_$ref,
} from './SupportedRefObject';
import {
	typed_string_pattern_is_supported_schema,
	typed_string_pattern_schema, typed_string_pattern_value_regex,
} from './TypedStringPattern';

const already_configured = new WeakSet<Ajv>();

const typed_array_string_oneOf_schema = {
	type: 'array',
	minItems: 1,
	items: {
		oneOf: [
			UnrealEngineString_parent_schema,
			$ref_schema,
			general_schema,
			typed_string_const_schema,
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
				general_schema,
				UnrealEngineString_parent_schema,
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
				{
					type: 'object',
					required: ['type', 'prefixItems'],
					properties: {
						type: {type: 'string', const: 'array'},
						uniqueItems: {type: 'boolean'},
						items: {type: 'boolean', const: false},
						prefixItems: {
							type: 'array',
							minItems: 1,
							items: {
								anyOf: [
									typed_string_pattern_schema,
								],
							},
						},
						minItems: {type: 'number', minimum: 0},
						maxItems: {type: 'number', minimum: 1},
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
				? {maxItems: array_max_size}
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

declare type typed_array_string_oneOf = {
	oneOf: [
		$ref_choices | UnrealEngineString_parent_type,
		...($ref_choices | UnrealEngineString_parent_type)[],
	];
};

declare type typed_array_string_supported_items =
	| typed_array_string_oneOf
	| $ref_choices
	| enum_schema_type
	| const_schema_type
	| UnrealEngineString_parent_type
	| general_type;

const empty_object = {};

declare type typed_array_string = {
	type: 'array';
	minItems: number;
	items: typed_array_string_supported_items;
} & ({maxItems: number} | typeof empty_object);

declare type typed_array_string_tuple_2_prefixItems = [
	$ref_choices,
	$ref_choices,
];

declare type typed_array_string_tuple_2 = {
	type: 'array';
	minItems: 1;
	items: {
		type: 'array';
		minItems: 2;
		maxItems: 2;
		items: false;
		prefixItems: typed_array_string_tuple_2_prefixItems;
	};
} & ({maxItems: number} | typeof empty_object);

declare type typed_array_string_without_recursive_reference = {
	type: 'array';
	minItems: number;
	items: Exclude<
		typed_array_string_supported_items,
		general_type | enum_schema_type
	>;
} & ({maxItems: number} | typeof empty_object);

export type typed_array_string_parent_without_recursive_reference = {
	type: 'string';
	minLength: 1;
	typed_array_string: typed_array_string_without_recursive_reference;
};

export class TypedArrayString {
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
						UnrealEngineString_schema_definitions,
				},
				oneOf: [
					typed_array_string_schema,
					typed_array_string_tuple_2_schema,
				],
			},
			macro: this.ajv_macro_generator(false),
		});
	}

	public static item_to_regex(
		item: typed_array_string_supported_items | typed_array_string_tuple_2
	): string {
		if (is_UnrealEngineString_parent(item)) {
			return UnrealEngineString.ajv_macro_generator(true)(
				item.UnrealEngineString
			).pattern;
		} else if (typed_string_const.is_supported_schema(item)) {
			return typed_string_const.value_regex(item);
		} else if (typed_string_enum.is_supported_schema(item)) {
			return typed_string_enum.value_regex(item);
		} else if (supported_$ref.is_supported_schema(item)) {
			return supported_$ref.value_regex(item);
		} else if ('prefixItems' in item) {
			return `(?:\\(${(
				item.prefixItems as typed_array_string_tuple_2_prefixItems
			)
				.map((e) => {
					return `(?:${this.item_to_regex(e)})`;
				})
				.join(', *')}\\))`;
		} else if (
			'typed_object_string' in item
			&& TypedObjectString.value_is_general_type(
				item.typed_object_string
			)
		) {
			return TypedObjectString.ajv_macro_generator(true)(
				item.typed_object_string
			).pattern;
		} else if (
			TypedObjectString.value_is_general_type(
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
			TypedObjectString.value_is_general_type(item)
		) {
			return TypedObjectString.ajv_macro_generator(true)(
				item.typed_object_string
			).pattern;
		} else if ('oneOf' in item) {
			return `(?:${item.oneOf.map((e) => this.item_to_regex(e)).join('|')})`;
		} else if (typed_string_pattern_is_supported_schema(item)) {
			return typed_string_pattern_value_regex(item);
		}

		process.stdout.write(`${JSON.stringify(item, null, '\t')}\n`);

		throw new UnexpectedlyUnknown(
			{
				item,
			},
			'Currently unsupported in TypedArrayString.item_to_regex'
		);
	}
}
