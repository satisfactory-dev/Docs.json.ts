import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	array_type,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
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
