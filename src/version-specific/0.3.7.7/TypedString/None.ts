import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	ArrayLiteralExpression,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

export type None_type = {
	type: 'string',
	const: '(None)',
};

export type None_properties = {
	type: 'string',
	const: '(None)',
};

export type None_DataTo = ArrayLiteralExpression<never, never[], false>;

export type None_TypeGenerator = undefined;

export function None_compile_validator(ajv: Ajv): ValidateFunction<None_type> {
	return ajv.compile<
		None_type
	>(
		{
			oneOf: [
				{
					type: 'object',
					additionalProperties: false,
					required: ['type', 'const'],
					properties: {
						type: {
							type: 'string',
							const: 'string',
						},
						const: {
							type: 'string',
							const: '(None)',
						},
					},
				},
				{
					type: 'string',
					const: '(None)',
				},
			],
		},
	);
}
