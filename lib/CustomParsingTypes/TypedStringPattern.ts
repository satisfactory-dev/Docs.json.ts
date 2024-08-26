import {
	is_string,
	object_has_property,
	object_has_property_that_equals,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

import {
	SupportedSubSchemaType,
} from './CustomPairingTypes';

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

export type pattern_schema_general_type = {
	type: 'string',
	pattern:
		| `^\\^\\[A-Z\\]\\[A-Za-z\\]\\+\\([_ ]\\[A-Z\\]\\[A-Za-z\\]\\+\\)\\*\\$$`,
};

export const typed_string_pattern_general_schema = {
	type: 'object',
	required: ['type', 'pattern'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		pattern: {
			type: 'string',
			enum: [
				`^\\^\\[A-Z\\]\\[A-Za-z\\]\\+\\([_ ]\\[A-Z\\]\\[A-Za-z\\]\\+\\)\\*\\$$`,
			],
		},
	},
};

const typed_string_pattern_general_schema_oneOf =
	typed_string_pattern_general_schema.properties.pattern.enum.map(
		(pattern) => {
			return {
				type: 'string',
				pattern,
			}
		},
	);

export const typed_string_pattern_general_schema_self_testing = {
	type: 'object',
	required: ['type', 'pattern'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		pattern: {
			oneOf: typed_string_pattern_general_schema_oneOf,
		},
	},
}

const typed_string_pattern_general_schema_enum_regex =
	typed_string_pattern_general_schema.properties.pattern.enum.map(
		(e) => {
			return new RegExp(e);
		},
	);

export function typed_string_pattern_value_regex(
	value: pattern_schema_type,
): string {
	return `(?:${value.pattern.substring(1, value.pattern.length - 1)})`;
}

export function typed_string_pattern_is_supported_schema(
	maybe: unknown,
) : maybe is pattern_schema_type {
	return (
		value_is_non_array_object(maybe)
		&& 2 === Object.keys(maybe).length
		&& object_has_property(maybe, 'type')
		&& 'string' === maybe.type
		&& object_has_property(maybe, 'pattern', is_string)
		&& typed_string_pattern_schema.properties.pattern.enum.includes(
			maybe.pattern,
		)
	);
}

function is_supported_pattern_string(
	e:unknown,
): e is pattern_schema_general_type['pattern'] {
	return (
		is_string(e)
		&& !!typed_string_pattern_general_schema_enum_regex.find(
			(regex) => regex.test(e),
		)
	)
}

class TypedStringPatternGeneral extends SupportedSubSchemaType<
	pattern_schema_general_type
> {
	is_supported_schema(
		maybe: unknown,
	): maybe is pattern_schema_general_type {
		return (
			value_is_non_array_object(maybe)
			&& 2 === Object.keys(maybe).length
			&& object_has_property_that_equals(
				maybe,
				'type',
				'string',
			)
			&& object_has_property(
				maybe,
				'pattern',
				is_supported_pattern_string,
			)
		);
	}

	value_regex(value: pattern_schema_general_type): string {
		const regex = `(?:${value.pattern.substring(1, value.pattern.length - 1)})`;

		return `(?:${regex}|"${regex}")`;
	}
}

export const typed_string_pattern_general = new TypedStringPatternGeneral();
