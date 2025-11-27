import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	TemplateLiteralTypeNode,
} from 'typescript';

import type {
	array_schema,
	array_type,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	ArrayLiteralExpression,
	StringLiteral,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';
import {
	factory,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import {
	BlueprintGeneratedClass_quoted,
	type BlueprintGeneratedClass_quoted_schema,
	type BlueprintGeneratedClass_quoted_type,
} from '../BlueprintGeneratedClass.ts';

export type BlueprintGeneratedClass_quoted_list_type = array_type<
	'items',
	'specified',
	'yes',
	'with',
	BlueprintGeneratedClass_quoted_type
>;

export type BlueprintGeneratedClass_quoted_list_properties = array_schema<
	'items',
	'specified',
	'yes',
	'optional',
	BlueprintGeneratedClass_quoted_schema
>;

export type BlueprintGeneratedClass_quoted_list_DataTo = (
	ArrayLiteralExpression<
		StringLiteral,
		[StringLiteral, ...StringLiteral[]],
		true
	>
);

export type BlueprintGeneratedClass_quoted_list_TypeGenerator = (
	schema: BlueprintGeneratedClass_quoted_type,
) => Promise<TemplateLiteralTypeNode>;

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

export function BlueprintGeneratedClass_quoted_list_generate_typescript_data(
	data: string,
	schema_parser: SchemaParser,
	coerced: BlueprintGeneratedClass_quoted_list_type['items'],
): BlueprintGeneratedClass_quoted_list_DataTo {
	const regex = BlueprintGeneratedClass_quoted.regex_from_value(
		coerced.DocsDotJson_BlueprintGeneratedClass_quoted,
	);

	const pattern = new RegExp(`^\\(${regex}(?:,${regex})*\\)$`);

	if (!pattern.test(data)) {
		throw new TypeError('Data does not match expected pattern!');
	}

	const data_parts = data.substring(1, data.length - 1).split(',');

	const sanity_check: (
		BlueprintGeneratedClass_quoted_list_DataTo
	) = factory.createArrayLiteralExpression(
		data_parts
			.map((value) => schema_parser
				.parse_by_type(value)
				.generate_typescript_data(
					value,
					schema_parser,
					coerced,
				),
			),
	);

	return sanity_check;
}
