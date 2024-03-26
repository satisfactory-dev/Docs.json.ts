import {
	object_has_property,
	value_is_non_array_object,
} from './CustomPairingTypes';
import {
	is_string,
} from '../StringStartsWith';

export type pattern_schema_type = {
	type: 'string',
	pattern:
		| '^\\d+\\.\\d{6}$'
		| '^-?\\d+\\.\\d{6}$'
		| '^\\d+$'
		| '^-?\\d+$'
};

export const typed_string_pattern_schema = {
	type: 'object',
	required: ['type', 'pattern'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		pattern: {
			type: 'string',
			enum: [
				'^\\d+\\.\\d{6}$',
				'^-?\\d+\\.\\d{6}$',
				'^\\d+$',
				'^-?\\d+$',
			],
		},
	},
};


export function typed_string_pattern_value_regex(
	value: pattern_schema_type
): string {
	return `(?:${value.pattern.substring(1, value.pattern.length - 1)})`;
}

export function typed_string_pattern_is_supported_schema(
	maybe: unknown
) : maybe is pattern_schema_type {
	return (
		value_is_non_array_object(maybe)
		&& 2 === Object.keys(maybe).length
		&& object_has_property(maybe, 'type')
		&& 'string' === maybe.type
		&& object_has_property(maybe, 'pattern', is_string)
		&& typed_string_pattern_schema.properties.pattern.enum.includes(
			maybe.pattern
		)
	);
}
