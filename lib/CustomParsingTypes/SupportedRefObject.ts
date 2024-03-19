import {
	object_only_has_that_property,
	SupportedSubSchemaType,
} from './CustomPairingTypes';
import ts, {TypeReferenceNode} from 'typescript';
import {adjust_class_name} from '../TsFactoryWrapper';
import {UnrealEngineStringReference} from './UnrealEngineStringReference';
import update8_schema from '../../schema/update8.schema.json' assert {type: 'json'};

const UnrealEngineStringReference_inner =
	UnrealEngineStringReference.ajv_macro_generator(true);

const $ref_supported = {
	'#/definitions/mEventType': 'EV_Christmas',
	'#/definitions/FGSchematic--mUnlocks_mSchematics--mSchematics':
		UnrealEngineStringReference_inner(
			update8_schema.definitions[
				'FGSchematic--mUnlocks_mSchematics--mSchematics'
			].UnrealEngineStringReference
		).pattern,
	'#/definitions/None': 'None',
	'#/definitions/integer-string': '\\d+',
	'#/definitions/decimal-string': '\\d+.\\d+',
};

const $ref_supported_array = Object.keys(
	$ref_supported
) as (keyof typeof $ref_supported)[];

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
	is_supported_schema(maybe: any): maybe is $ref_choices {
		return (
			'object' === typeof maybe &&
			object_only_has_that_property(maybe, '$ref') &&
			$ref_supported_array.includes(maybe.$ref)
		);
	}
	value_regex(value: $ref_choices): string {
		return `(?:${$ref_supported[value.$ref]})`;
	}
	value_type(value: $ref_choices): TypeReferenceNode {
		const ref = value.$ref.substring(14);

		return ts.factory.createTypeReferenceNode(
			adjust_class_name(
				`${ref}${ref.startsWith('integer-string') || ref.startsWith('decimal-string') ? '--type' : ''}`
			)
		);
	}
}

export const supported_$ref = new SupportedRefObject();
