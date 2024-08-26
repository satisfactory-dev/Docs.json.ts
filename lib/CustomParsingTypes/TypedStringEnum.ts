import {
	is_string,
	object_has_non_empty_array_property,
	object_has_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

import {
	SupportedSubSchemaType,
} from './CustomPairingTypes';
import {
	typed_string_const_value_regex,
	typed_string_const_value_regex__native,
} from './TypedStringConst';

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
	enum_schema_type
> {
	is_supported_schema(maybe: unknown): maybe is enum_schema_type {
		return (
			value_is_non_array_object(maybe)
			&& 2 === Object.keys(maybe).length
			&& object_has_property(maybe, 'type')
			&& 'string' === maybe.type
			&& object_has_non_empty_array_property(maybe, 'enum')
			&& maybe.enum.every(
				(e) =>
					is_string(e)
					&& typed_string_const_value_regex__native.test(e),
			)
		);
	}
	value_regex(value: enum_schema_type): string {
		const enums = `(?:${value.enum.join('|')})`;
		return `(?:${enums}|"${enums}")`;
	}
}

export const typed_string_enum = new TypedStringEnum();
