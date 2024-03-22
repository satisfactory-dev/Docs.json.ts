import {
	UnrealEngineString_general_regex,
} from './UnrealEngineString';
import {
	object_has_property,
	SupportedSubSchemaType,
	value_is_non_array_object,
} from './CustomPairingTypes';
import {
	LiteralTypeNode, StringLiteral,
} from 'typescript';
import {
	create_literal,
} from '../TsFactoryWrapper';

export const typed_string_const_value_regex = `^(?:[A-Za-z0-9][A-Za-z0-9_ -]*|${UnrealEngineString_general_regex})$`;
export const typed_string_const_value_regex__native = new RegExp(
	typed_string_const_value_regex
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
	const_schema_type,
	StringLiteral
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
				(maybe:unknown): maybe is string => 'string' === typeof maybe
			)
			&& typed_string_const_value_regex__native.test(maybe.const)
		);
	}
	value_regex(value: const_schema_type): string {
		return `(?:(${value.const}|"${value.const}"))`;
	}

	value_type(
		value: const_schema_type
	): LiteralTypeNode & {literal: StringLiteral} {
		return create_literal(value.const);
	}
}

export const typed_string_const = new TypedStringConst();
