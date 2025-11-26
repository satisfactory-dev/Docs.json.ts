import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	PositiveInteger,
} from '@signpostmarv/json-schema-typescript-codegen';

export type String_enum_list_type = {
	type: 'array',
	minItems: PositiveInteger<number>,
	uniqueItems: true,
	items: {
		type: 'string',
		enum: [string, ...string[]],
	},
};

export type String_enum_list_properties = {
	type: 'object',
	required: [
		'type',
		'minItems',
		'uniqueItems',
		'items',
	],
	properties: {
		type: {
			type: 'string',
			const: 'array',
		},
		minItems: {
			type: 'integer',
			minimum: 1,
		},
		uniqueItems: {
			type: 'boolean',
			const: true,
		},
		items: {
			type: 'object',
			required: ['type', 'enum'],
			properties: {
				type: {
					type: 'string',
					const: 'string',
				},
				enum: {
					type: 'array',
					minItems: 1,
					uniqueItems: true,
					items: {
						type: 'string',
						minLength: 1,
					},
				},
			},
		},
	},
};

export function String_enum_list_compile_validator(
	ajv: Ajv,
): ValidateFunction<String_enum_list_type> {
	return ajv.compile<
		String_enum_list_type
	>(
		{
			type: 'object',
			additionalProperties: false,
			required: [
				'type',
				'minItems',
				'uniqueItems',
				'items',
			],
			properties: {
				type: {
					type: 'string',
					const: 'array',
				},
				minItems: {
					type: 'integer',
					minimum: 1,
				},
				uniqueItems: {
					type: 'boolean',
					const: true,
				},
				items: {
					type: 'object',
					required: ['type', 'enum'],
					properties: {
						type: {
							type: 'string',
							const: 'string',
						},
						enum: {
							type: 'array',
							minItems: 1,
							items: {
								type: 'string',
								minLength: 1,
							},
						},
					},
				},
			},
		},
	);
}
