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
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	ArrayLiteralExpression,
	StringLiteral,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import type {
	FGTrainPlatformConnection_quoted_schema,
	FGTrainPlatformConnection_quoted_type,
} from '../FGTrainPlatformConnection.ts';

export type FGTrainPlatformConnection_quoted_list_type = array_type<
	'items',
	'specified',
	'yes',
	'with',
	FGTrainPlatformConnection_quoted_type
>;

export type FGTrainPlatformConnection_quoted_list_properties = array_schema<
	'items',
	'specified',
	'yes',
	'optional',
	FGTrainPlatformConnection_quoted_schema
>;

export type FGTrainPlatformConnection_quoted_list_DataTo = (
	ArrayLiteralExpression<
		StringLiteral,
		[StringLiteral, ...StringLiteral[]],
		true
	>
);

export type FGTrainPlatformConnection_quoted_list_TypeGenerator = (
	schema: FGTrainPlatformConnection_quoted_type,
) => Promise<TemplateLiteralTypeNode>;

export function FGTrainPlatformConnection_quoted_list_compile_validator(
	ajv: Ajv,
): ValidateFunction<FGTrainPlatformConnection_quoted_list_type> {
	return ajv.compile<
		FGTrainPlatformConnection_quoted_list_type
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
						'DocsDotJson_FGTrainPlatformConnection_quoted',
					],
					properties: {
						type: {
							type: 'string',
							const: 'string',
						},
						DocsDotJson_FGTrainPlatformConnection_quoted: {
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
