import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	array_schema,
	array_type,
	object_type_base,
	object_TypeLiteralNode_possibly_extended,
	ObjectOfSchemas,
	SchemaObject,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	ArrayLiteralExpression,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import type {
	Object_DataTo,
	Object_properties,
	Object_type,
} from './Object.ts';
import {
	Object_type_schema,
} from './Object.ts';

export type Object_list_type = array_type<
	'items',
	'specified',
	'yes',
	'with',
	Object_type
>;

export type Object_list_properties = array_schema<
	'items',
	'specified',
	'yes',
	'with',
	Object_properties
>;

export type Object_list_DataTo = ArrayLiteralExpression<
	Object_DataTo,
	[Object_DataTo, ...Object_DataTo[]],
	true
>;

export type Object_list_TypeGenerator = (
	schema: object_type_base<
		'properties',
		SchemaObject,
		[string, ...string[]],
		ObjectOfSchemas,
		ObjectOfSchemas
	>,
	schema_parser: SchemaParser,
) => Promise<object_TypeLiteralNode_possibly_extended<'properties'>>;

export function Object_list_compile_validator(
	ajv: Ajv,
): ValidateFunction<Object_list_type> {
	return ajv.compile<
		Object_list_type
	>(
		{
			type: 'object',
			required: [
				'type',
				'minItems',
				'items',
			],
			properties: {
				type: {
					type: 'string',
					const: 'array',
				},
				minItems: {
					type: 'integer',
					minimum: 0,
				},
				items: Object_type_schema,
			},
		},
	);
}
