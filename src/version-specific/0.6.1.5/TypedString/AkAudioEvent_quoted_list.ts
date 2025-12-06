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

import type {
	AkAudioEvent_quoted_schema,
	AkAudioEvent_quoted_type,
} from '../AkAudioEvent.ts';
import {
	AkAudioEvent,
} from '../AkAudioEvent.ts';

export type AkAudioEvent_quoted_list_type = array_type<
	'items',
	'specified',
	'yes',
	'with',
	AkAudioEvent_quoted_type
>;

export type AkAudioEvent_quoted_list_properties = array_schema<
	'items',
	'specified',
	'yes',
	'optional',
	AkAudioEvent_quoted_schema
>;

export type AkAudioEvent_quoted_list_DataTo = (
	ArrayLiteralExpression<
		StringLiteral,
		[StringLiteral, ...StringLiteral[]],
		true
	>
);

export type AkAudioEvent_quoted_list_SchemaTo = (
	RestedTupleTypeNode<
		TemplateLiteralTypeNode
	>
);

export type AkAudioEvent_quoted_list_TypeGenerator = (
	schema: AkAudioEvent_quoted_type,
) => Promise<TemplateLiteralTypeNode>;

export function AkAudioEvent_quoted_list_compile_validator(
	ajv: Ajv,
): ValidateFunction<AkAudioEvent_quoted_list_type> {
	return ajv.compile<
		AkAudioEvent_quoted_list_type
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
						'DocsDotJson_AkAudioEvent_quoted',
					],
					properties: {
						type: {
							type: 'string',
							const: 'string',
						},
						DocsDotJson_AkAudioEvent_quoted: {
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

export function AkAudioEvent_quoted_list_generate_typescript_data(
	data: string,
	schema_parser: SchemaParser,
	coerced: AkAudioEvent_quoted_list_type['items'],
): AkAudioEvent_quoted_list_DataTo {
	const regex = AkAudioEvent.regex_from_value(
		coerced.DocsDotJson_AkAudioEvent_quoted,
	);

	const pattern = new RegExp(`^\\(${regex}(?:,${regex})*\\)$`);

	if (!pattern.test(data)) {
		throw new TypeError('Data does not match expected pattern!');
	}

	const data_parts = data.substring(1, data.length - 1).split(',');

	const sanity_check: (
		AkAudioEvent_quoted_list_DataTo
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

export async function AkAudioEvent_quoted_list_generate_typescript_type(
	schema: AkAudioEvent_quoted_list_type,
	schema_parser: SchemaParser,
): Promise<AkAudioEvent_quoted_list_SchemaTo> {
	const instance = schema_parser.types
		.find((
			maybe,
		) => maybe instanceof AkAudioEvent);

	if (undefined === instance) {
		throw new TypeError(`schema_parser not loaded with ${
			AkAudioEvent.constructor.name
		}`);
	}

	const type_generator: (
		AkAudioEvent_quoted_list_TypeGenerator
	) = (
		schema: AkAudioEvent_quoted_type,
	) => {
		return instance.generate_typescript_type({schema});
	};

	const sanity_check: (
		AkAudioEvent_quoted_list_SchemaTo
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

export function AkAudioEvent_quoted_list_ajv_macro(
	schema: AkAudioEvent_quoted_list_type,
) {
	const regex = AkAudioEvent
		.regex_from_value(
			schema.items.DocsDotJson_AkAudioEvent_quoted,
		);

	return Object.freeze({
		pattern: `^\\(${regex}(?:,${regex})*\\)$`,
	});
}

export function AkAudioEvent_quoted_list_generate_schema_definition(
): Readonly<AkAudioEvent_quoted_list_properties> {
	const sanity_check_subtype: (
		AkAudioEvent_quoted_schema
	) = AkAudioEvent.generate_schema_definition();

	const sanity_check_options: array_options<
		'items',
		'specified',
		'yes',
		'optional',
		AkAudioEvent_quoted_schema
	> = {
		array_mode: 'items',
		specified_mode: 'specified',
		unique_items_mode: 'yes',
		min_items_mode: 'optional',
		items: sanity_check_subtype,
		minItems: PositiveIntegerOrZeroGuard(1),
	};

	const sanity_check: Readonly<
		AkAudioEvent_quoted_list_properties
	> = ArrayType.generate_schema_definition(sanity_check_options);

	return sanity_check;
}

export function AkAudioEvent_quoted_list_generate_type_definition(
): Readonly<AkAudioEvent_quoted_list_type> {
	return Object.freeze({
		type: 'array',
		minItems: PositiveIntegerGuard(1),
		uniqueItems: true,
		items: AkAudioEvent
			.generate_type_definition(),
	});
}
