import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	array_type,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	BlueprintGeneratedClass_quoted_type,
} from '../BlueprintGeneratedClass.ts';

export type BlueprintGeneratedClass_quoted_list_type = array_type<
	'items',
	'specified',
	'yes',
	'with',
	BlueprintGeneratedClass_quoted_type
>;

export function BlueprintGeneratedClass_quoted_list_compile_validator(
	ajv: Ajv,
): ValidateFunction<BlueprintGeneratedClass_quoted_list_type> {
	return ajv.compile<
		BlueprintGeneratedClass_quoted_list_type
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
				items: {
					type: 'object',
					additionalProperties: false,
					required: [
						'type',
						'DocsDotJson_BlueprintGeneratedClass_quoted',
					],
					properties: {
						type: {
							type: 'string',
							const: 'string',
						},
						DocsDotJson_BlueprintGeneratedClass_quoted: {
							oneOf: [
								{
									type: 'null',
								},
								{
									type: 'string',
									minLength: 1,
								},
							],
						},
					},
				},
			},
		},
	);
}
