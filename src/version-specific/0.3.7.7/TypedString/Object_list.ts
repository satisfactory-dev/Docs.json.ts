import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	array_schema,
	array_type,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
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
