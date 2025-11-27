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
	RestedTupleTypeNode,
	StringLiteral,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';
import {
	factory,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import {
	FGTrainPlatformConnection,
	type FGTrainPlatformConnection_quoted_schema,
	type FGTrainPlatformConnection_quoted_type,
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

export type FGTrainPlatformConnection_quoted_list_SchemaTo = (
	RestedTupleTypeNode<
		TemplateLiteralTypeNode
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

export function FGTrainPlatformConnection_quoted_list_generate_typescript_data(
	data: string,
	schema_parser: SchemaParser,
	coerced: FGTrainPlatformConnection_quoted_list_type['items'],
): FGTrainPlatformConnection_quoted_list_DataTo {
	const regex = FGTrainPlatformConnection.regex_from_value(
		coerced.DocsDotJson_FGTrainPlatformConnection_quoted,
	);

	const pattern = new RegExp(`^\\(${regex}(?:,${regex})*\\)$`);

	if (!pattern.test(data)) {
		throw new TypeError('Data does not match expected pattern!');
	}

	const data_parts = data.substring(1, data.length - 1).split(',');

	const sanity_check: (
		FGTrainPlatformConnection_quoted_list_DataTo
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

// eslint-disable-next-line @stylistic/max-len
export async function FGTrainPlatformConnection_quoted_list_generate_typescript_type(
	schema: FGTrainPlatformConnection_quoted_list_type,
	schema_parser: SchemaParser,
): Promise<FGTrainPlatformConnection_quoted_list_SchemaTo> {
	const instance = schema_parser.types
		.find((
			maybe,
		) => maybe instanceof FGTrainPlatformConnection);

	if (undefined === instance) {
		throw new TypeError(`schema_parser not loaded with ${
			FGTrainPlatformConnection.constructor.name
		}`);
	}

	const type_generator: (
		FGTrainPlatformConnection_quoted_list_TypeGenerator
	) = (
		schema: FGTrainPlatformConnection_quoted_type,
	) => {
		return instance.generate_typescript_type({schema});
	};

	const sanity_check: (
		FGTrainPlatformConnection_quoted_list_SchemaTo
	) = factory.createTupleTypeNode([
		await type_generator(
			schema.items,
		),
		factory.createRestTypeNode(
			factory.createArrayTypeNode(
				await type_generator(
					schema.items,
				),
			),
		),
	]);

	return sanity_check;
}
