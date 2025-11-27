import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	PositiveInteger,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	ArrayLiteralExpression,
	StringLiteral,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';
import {
	factory,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

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

export type String_enum_list_DataTo = ArrayLiteralExpression<
	StringLiteral,
	[StringLiteral, ...StringLiteral[]],
	true
>;

export type String_enum_list_TypeGenerator = undefined;

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

export function String_enum_list_generate_typescript_data(
	data: string,
	coerced_schema: String_enum_list_type,
): String_enum_list_DataTo {
	const parts = data
		.substring(1, data.length - 1)
		.split(',');

	const matches = parts
		.map((e) => (
			/^"[^"]+"/.test(e)
				? e.substring(1, e.length - 1)
				: e
		))
		.filter((maybe) => coerced_schema.items.enum.includes(maybe));

	if (parts.length !== matches.length) {
		throw new TypeError('Data contains unsupported elements!');
	}

	const sanity_check: (
		String_enum_list_DataTo
	) = factory.createArrayLiteralExpression(
		matches
			.filter((maybe) => undefined !== maybe)
			.map((value) => factory.createStringLiteral(value)),
	);

	return sanity_check;
}
