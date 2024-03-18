import {UnrealEngineStringReference_general_regex} from './UnrealEngineStringReference';
import {object_has_property, SupportedSubSchemaType} from './CustomPairingTypes';
import {LiteralTypeNode, StringLiteral} from 'typescript';
import {create_literal_node_from_value} from '../TsFactoryWrapper';

const typed_object_string_const_value_regex = `^([A-Za-z][A-Za-z_]*|${UnrealEngineStringReference_general_regex})$`;
const typed_object_string_const_value_regex__native = new RegExp(
	typed_object_string_const_value_regex
);
export const typed_object_supported_const_string_schema = {
	type: 'object',
	required: ['type', 'const'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		const: {
			type: 'string',
			pattern: typed_object_string_const_value_regex,
		},
	},
};

type const_schema_type = {type: 'string', const: string};

class TypedStringConst extends SupportedSubSchemaType<const_schema_type, StringLiteral>
{
	is_supported_schema(maybe: any): maybe is const_schema_type {
		return (
			'object' === typeof maybe &&
			2 === Object.keys(maybe).length &&
			object_has_property(maybe, 'type') &&
			'string' === maybe.type &&
			object_has_property(maybe, 'const') &&
			typed_object_string_const_value_regex__native.test(maybe.const)
		);
	}
	value_regex(value: const_schema_type): string {
		return value.const;
	}

	key_value_pair_regex(key: string, value: const_schema_type): string {
		return `(?:${key}=${value.const})`;
	}
	key_value_pair_literal_type_entry(key: string, value: const_schema_type): [string, LiteralTypeNode & { literal: StringLiteral; }] {
		return ['foo', create_literal_node_from_value(value.const)];
	}
}

export const typed_string_const = new TypedStringConst();
