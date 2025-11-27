import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	TemplateLiteralTypeNode,
} from 'typescript';

import type {
	array_options,
	array_schema,
	array_type,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	ArrayType,
	PositiveIntegerGuard,
	PositiveIntegerOrZeroGuard,
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

export type BlueprintGeneratedClass_quoted_list_SchemaTo = RestedTupleTypeNode<
	TemplateLiteralTypeNode
>;

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

// eslint-disable-next-line @stylistic/max-len
export async function BlueprintGeneratedClass_quoted_list_generate_typescript_type(
	schema: BlueprintGeneratedClass_quoted_list_type,
	schema_parser: SchemaParser,
): Promise<BlueprintGeneratedClass_quoted_list_SchemaTo> {
	const instance = schema_parser.types
		.find((
			maybe,
		) => maybe instanceof BlueprintGeneratedClass_quoted);

	if (undefined === instance) {
		throw new TypeError(`schema_parser not loaded with ${
			BlueprintGeneratedClass_quoted.constructor.name
		}`);
	}

	const type_generator: BlueprintGeneratedClass_quoted_list_TypeGenerator = (
		schema: BlueprintGeneratedClass_quoted_type,
	) => {
		return instance.generate_typescript_type({schema});
	};

	const sanity_check: (
		BlueprintGeneratedClass_quoted_list_SchemaTo
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

export function BlueprintGeneratedClass_quoted_list_ajv_macro(
	schema: BlueprintGeneratedClass_quoted_list_type,
) {
	const regex = BlueprintGeneratedClass_quoted
		.regex_from_value_and_mode(
			schema.items.DocsDotJson_BlueprintGeneratedClass_quoted,
			'quoted',
		);

	return Object.freeze({
		pattern: `^\\(${regex}(?:,${regex})*\\)$`,
	});
}

export function BlueprintGeneratedClass_quoted_list_generate_schema_definition(
): Readonly<BlueprintGeneratedClass_quoted_list_properties> {
	const sanity_check_subtype: (
		BlueprintGeneratedClass_quoted_schema
	) = BlueprintGeneratedClass_quoted
		.generate_schema_definition({
			mode: 'quoted',
		});

	const sanity_check_options: array_options<
		'items',
		'specified',
		'yes',
		'optional',
		BlueprintGeneratedClass_quoted_schema
	> = {
		array_mode: 'items',
		specified_mode: 'specified',
		unique_items_mode: 'yes',
		min_items_mode: 'optional',
		items: sanity_check_subtype,
		minItems: PositiveIntegerOrZeroGuard(1),
	};

	const sanity_check: Readonly<
		BlueprintGeneratedClass_quoted_list_properties
	> = ArrayType.generate_schema_definition(sanity_check_options);

	return sanity_check;
}

export function BlueprintGeneratedClass_quoted_list_generate_type_definition(
): Readonly<BlueprintGeneratedClass_quoted_list_type> {
	return Object.freeze({
		type: 'array',
		minItems: PositiveIntegerGuard(1),
		uniqueItems: true,
		items: BlueprintGeneratedClass_quoted
			.generate_type_definition({
				mode: 'quoted',
			}),
	});
}
