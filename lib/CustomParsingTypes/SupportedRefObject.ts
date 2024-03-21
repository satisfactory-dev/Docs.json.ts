import {
	object_only_has_that_property,
	SupportedSubSchemaType,
	value_is_non_array_object,
} from './CustomPairingTypes';
import {
	TypeReferenceNode,
} from 'typescript';
import {
	adjust_class_name,
	type_reference_node,
} from '../TsFactoryWrapper';
import {
	check_UnrealEngineString_parent,
	UnrealEngineString,
} from './UnrealEngineString';
import update8_schema from '../../schema/update8.schema.json' assert {
	type: 'json'
};

const UnrealEngineString_inner =
	UnrealEngineString.ajv_macro_generator(true);

const $ref_supported = {
	'#/definitions/mEventType': 'EV_Christmas',
	'#/definitions/FGSchematic--mUnlocks_mSchematics--mSchematics':
		UnrealEngineString_inner(
			check_UnrealEngineString_parent(update8_schema.definitions[
				'FGSchematic--mUnlocks_mSchematics--mSchematics'
			]).UnrealEngineString
		).pattern,
	'#/definitions/None': 'None',
	'#/definitions/integer-string': '\\d+',
	'#/definitions/decimal-string': '\\d+.\\d+',
};

const $ref_supported_array = Object.keys(
	$ref_supported
) as (keyof typeof $ref_supported)[];

function value_is_in_$ref_supported_array(
	maybe: unknown
): maybe is keyof typeof $ref_supported {
	return (
		'string' === typeof maybe
		&& ($ref_supported_array as string[]).includes(maybe)
	);
}

export const $ref_schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {
			type: 'string',
			enum: $ref_supported_array,
		},
	},
};

export type $ref_choices = {
	$ref: keyof typeof $ref_supported;
};
class SupportedRefObject extends SupportedSubSchemaType<
	$ref_choices,
	TypeReferenceNode
> {
	is_supported_schema(maybe: unknown): maybe is $ref_choices {
		return (
			value_is_non_array_object(maybe)
			&& object_only_has_that_property(maybe, '$ref')
			&& value_is_in_$ref_supported_array(maybe.$ref)
		);
	}
	value_regex(value: $ref_choices): string {
		return `(?:${$ref_supported[value.$ref]})`;
	}
	value_type(value: $ref_choices): TypeReferenceNode {
		const ref = value.$ref.substring(14);

		return type_reference_node(
			adjust_class_name(
				`${ref}${ref.startsWith('integer-string') || ref.startsWith('decimal-string') ? '--type' : ''}`
			)
		);
	}
}

export const supported_$ref = new SupportedRefObject();
