import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

export type Empty_type = {
	type: 'string',
	const: '',
};

export function Empty_compile_vaildator(
	ajv: Ajv,
): ValidateFunction<Empty_type> {
	return ajv.compile<
		Empty_type
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
							const: '',
						},
					},
				},
				{
					type: 'string',
					const: '',
				},
			],
		},
	);
}
