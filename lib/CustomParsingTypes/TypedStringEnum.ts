import {
	object_has_non_empty_array_property,
	object_has_property,
	SupportedSubSchemaType,
} from './CustomPairingTypes';
import {
	typed_string_const_value_regex,
	typed_string_const_value_regex__native,
} from './TypedStringConst';
import {
	create_typed_union,
	non_empty_string_literal_union,
	possibly_create_lazy_union,
} from '../TsFactoryWrapper';

export type enum_schema_type = {type: 'string'; enum: [string, ...string[]]};

export const typed_string_enum_schema = {
	type: 'object',
	required: ['type', 'enum'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		enum: {
			type: 'array',
			minItems: 1,
			items: {
				type: 'string',
				pattern: typed_string_const_value_regex,
			},
		},
	},
};

class TypedStringEnum extends SupportedSubSchemaType<
	enum_schema_type,
	non_empty_string_literal_union
> {
	is_supported_schema(maybe: any): maybe is enum_schema_type {
		return (
			'object' === typeof maybe &&
			2 === Object.keys(maybe).length &&
			object_has_property(maybe, 'type') &&
			'string' === maybe.type &&
			object_has_non_empty_array_property(maybe, 'enum') &&
			maybe.enum.every((e) =>
				typed_string_const_value_regex__native.test(e)
			)
		);
	}
	value_regex(value: enum_schema_type): string {
		const enums = `(?:${value.enum.join('|')})`;
		return `(?:${enums}|"${enums}")`;
	}

	key_value_pair_regex(key: string, value: enum_schema_type): string {
		return `(?:${key}=(?:${this.value_regex(value)}))`;
	}

	value_type(value: enum_schema_type): non_empty_string_literal_union {
		return create_typed_union(value.enum);
	}
}

export const typed_string_enum = new TypedStringEnum();