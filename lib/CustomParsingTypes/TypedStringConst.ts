import {
	is_string,
	object_has_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

import {
	UnrealEngineString_general_regex,
} from './UnrealEngineString';
import {
	SupportedSubSchemaType,
} from './CustomPairingTypes';

export const typed_string_const_value_regex = `^(?:[A-Za-z0-9][A-Za-z0-9_ -]*|${UnrealEngineString_general_regex}|\\(\\)|(?:[A-Z][a-z]+(?:\\.[A-Z][a-z]+)+\\.[A-Z][A-Za-z]+(?:\\d+-\\d+)?))$`;
export const typed_string_const_value_regex__native = new RegExp(
	typed_string_const_value_regex,
);
export const typed_string_const_schema = {
	type: 'object',
	required: ['type', 'const'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		const: {
			type: 'string',
			pattern: typed_string_const_value_regex,
		},
	},
};

export type const_schema_type = {type: 'string'; const: string};

class TypedStringConst extends SupportedSubSchemaType<
	const_schema_type
> {
	is_supported_schema(maybe: unknown): maybe is const_schema_type {
		return (
			value_is_non_array_object(maybe)
			&& 2 === Object.keys(maybe).length
			&& object_has_property(maybe, 'type')
			&& 'string' === maybe.type
			&& object_has_property(
				maybe,
				'const',
				is_string,
			)
			&& typed_string_const_value_regex__native.test(maybe.const)
		);
	}
	value_regex(value: const_schema_type): string {
		const lazy_escape = value.const
			.replace(/\(/g, '\\(')
			.replace(/\)/g, '\\)');

		return `(?:(${lazy_escape}|"${lazy_escape}"|\\\\"${lazy_escape}\\\\"))`;
	}
}

export const typed_string_const = new TypedStringConst();
