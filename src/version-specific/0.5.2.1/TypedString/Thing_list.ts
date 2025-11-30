import type {
	TemplateLiteralTypeNode,
} from 'typescript';

import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	array_options,
	array_schema,
	array_type,
	SchemaDefinitionDefinition,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	ArrayType,
	PositiveIntegerGuard,
	PositiveIntegerOrZeroGuard,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	ArrayLiteralExpression,
	LiteralTypeNode,
	RestedTupleTypeNode,
	StringLiteral,
	UnionTypeNode,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import {
	BlueprintGeneratedClass_quoted,
	type BlueprintGeneratedClass_quoted_schema,
	type BlueprintGeneratedClass_quoted_type,
} from '../../0.3.7.7/BlueprintGeneratedClass.ts';

export type Thing_list_type = array_type<
	'items',
	'specified',
	'yes',
	'with',
	{
		oneOf: readonly [
			BlueprintGeneratedClass_quoted_type,
			{
				type: 'string',
				const: string,
			},
		],
	}
>;

export type Thing_list_schema_properties = array_schema<
	'items',
	'specified',
	'yes',
	'optional',
	SchemaDefinitionDefinition<
		['oneOf'],
		{
			oneOf: {
				type: 'array',
				minItems: 2,
				maxItems: 2,
				items: false,
				prefixItems: [
					BlueprintGeneratedClass_quoted_schema,
					SchemaDefinitionDefinition<
						['type', 'const'],
						{
							type: {
								type: 'string',
								const: 'string',
							},
							const: {
								type: 'string',
							},
						}
					>,
				],
			},
		}
	>
>;

export type Thing_list_SchemaTo = RestedTupleTypeNode<
	UnionTypeNode<[
		TemplateLiteralTypeNode,
		LiteralTypeNode<StringLiteral>,
	]>
>;

export type Thing_list_DataTo = ArrayLiteralExpression<
	StringLiteral,
	[StringLiteral, ...StringLiteral[]],
	true
>;

export function Thing_list_compile_validator(
	ajv: Ajv,
): ValidateFunction<Thing_list_type> {
	const DocsDotJson_BlueprintGeneratedClass_quoted_schema = {
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
	};

	const Thing_list_items = [
		DocsDotJson_BlueprintGeneratedClass_quoted_schema,
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
				},
			},
		},
	];

	return ajv.compile<
		Thing_list_type
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
					required: ['oneOf'],
					properties: {
						oneOf: {
							type: 'array',
							minItems: 2,
							maxItems: 2,
							items: false,
							prefixItems: Thing_list_items,
						},
					},
				},
			},
		},
	);
}

export function Thing_list_ajv_macro(
	schema: Thing_list_type,
) {
	const bgc_regex = BlueprintGeneratedClass_quoted
		.regex_from_value_and_mode(
			schema.items.oneOf[0]
				.DocsDotJson_BlueprintGeneratedClass_quoted,
			'quoted',
		);

	const const_regex = RegExp.escape(
		schema.items.oneOf[1].const,
	);

	const regex = `(?:${bgc_regex}|${const_regex})`;

	return Object.freeze({
		pattern: `^\\(${regex}(?:,${regex})*\\)$`,
	});
}

export function Thing_list_generate_schema_definition(
): Readonly<Thing_list_schema_properties> {
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
		Thing_list_schema_properties['properties']['items']
	> = {
		array_mode: 'items',
		specified_mode: 'specified',
		unique_items_mode: 'yes',
		min_items_mode: 'optional',
		items: {
			type: 'object',
			required: ['oneOf'],
			additionalProperties: false,
			properties: {
				oneOf: {
					type: 'array',
					minItems: 2,
					maxItems: 2,
					items: false,
					prefixItems: [
						sanity_check_subtype,
						{
							type: 'object',
							required: ['type', 'const'],
							additionalProperties: false,
							properties: {
								type: {
									type: 'string',
									const: 'string',
								},
								const: {
									type: 'string',
								},
							},
						},
					],
				},
			},
		},
		minItems: PositiveIntegerOrZeroGuard(1),
	};

	const sanity_check: Readonly<
		Thing_list_schema_properties
	> = ArrayType.generate_schema_definition(sanity_check_options);

	return sanity_check;
}

export function Thing_list_generate_type_definition(
): Readonly<Thing_list_type> {
	return Object.freeze({
		type: 'array',
		minItems: PositiveIntegerGuard(1),
		uniqueItems: true,
		items: {
			oneOf: [
				BlueprintGeneratedClass_quoted.generate_type_definition({
					mode: 'quoted',
				}),
				{
					type: 'string',
					const: '',
				},
			] as const,
		},
	});
}
