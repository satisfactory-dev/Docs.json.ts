import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	object_schema,
	object_type_base,
	ObjectOfSchemas,
	SchemaObject,
} from '@signpostmarv/json-schema-typescript-codegen';

export type Object_type = object_type_base<
	'properties',
	SchemaObject,
	[string, ...string[]],
	ObjectOfSchemas,
	ObjectOfSchemas
>;

export type Object_properties = object_schema<'properties'>;

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
