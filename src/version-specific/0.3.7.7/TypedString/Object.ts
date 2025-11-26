import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	object_schema,
	object_type_base,
	object_TypeLiteralNode_possibly_extended,
	ObjectOfSchemas,
	SchemaObject,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	ObjectLiteralExpression,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

export type Object_type = object_type_base<
	'properties',
	SchemaObject,
	[string, ...string[]],
	ObjectOfSchemas,
	ObjectOfSchemas
>;

export type Object_properties = object_schema<'properties'>;

export type Object_DataTo = ObjectLiteralExpression;

export type Object_TypeGenerator = (
	schema: object_type_base<
		'properties',
		SchemaObject,
		[string, ...string[]],
		ObjectOfSchemas,
		ObjectOfSchemas
	>,
	schema_parser: SchemaParser,
) => Promise<object_TypeLiteralNode_possibly_extended<'properties'>>;

export const Object_type_schema = Object.freeze({
	type: 'object',
	required: ['type'],
	properties: {
		type: {
			type: 'string',
			const: 'object',
		},
	},
});

export function Object_compile_validator(
	ajv: Ajv,
): ValidateFunction<Object_type> {
	return ajv.compile<
		Object_type
	>(
		Object_type_schema,
	);
}
