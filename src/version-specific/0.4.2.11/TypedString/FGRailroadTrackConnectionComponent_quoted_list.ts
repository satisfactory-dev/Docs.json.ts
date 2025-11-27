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
	FGRailroadTrackConnectionComponent,
	type FGRailroadTrackConnectionComponent_quoted_schema,
	type FGRailroadTrackConnectionComponent_quoted_type,
} from '../FGRailroadTrackConnectionComponent.ts';

export type FGRailroadTrackConnectionComponent_quoted_list_type = array_type<
	'items',
	'specified',
	'yes',
	'with',
	FGRailroadTrackConnectionComponent_quoted_type
>;

export type FGRailroadTrackConnectionComponent_quoted_list_properties = (
	array_schema<
		'items',
		'specified',
		'yes',
		'optional',
		FGRailroadTrackConnectionComponent_quoted_schema
	>
);

export type FGRailroadTrackConnectionComponent_quoted_list_SchemaTo = (
	RestedTupleTypeNode<
		TemplateLiteralTypeNode
	>
);

export type FGRailroadTrackConnectionComponent_quoted_list_DataTo = (
	ArrayLiteralExpression<
		StringLiteral,
		[StringLiteral, ...StringLiteral[]],
		true
	>
);

export type FGRailroadTrackConnectionComponent_quoted_list_Type_Generator = (
	schema: FGRailroadTrackConnectionComponent_quoted_type,
) => Promise<TemplateLiteralTypeNode>;

// eslint-disable-next-line @stylistic/max-len
export function FGRailroadTrackConnectionComponent_quoted_list_compile_validator(
	ajv: Ajv,
): ValidateFunction<FGRailroadTrackConnectionComponent_quoted_list_type> {
	return ajv.compile<
		FGRailroadTrackConnectionComponent_quoted_list_type
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
						// eslint-disable-next-line @stylistic/max-len
						'DocsDotJson_FGRailroadTrackConnectionComponent_quoted',
					],
					properties: {
						type: {
							type: 'string',
							const: 'string',
						},
						// eslint-disable-next-line @stylistic/max-len
						DocsDotJson_FGRailroadTrackConnectionComponent_quoted: {
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

// eslint-disable-next-line @stylistic/max-len
export function FGRailroadTrackConnectionComponent_quoted_list_generate_typescript_data(
	data: string,
	schema_parser: SchemaParser,
	coerced: FGRailroadTrackConnectionComponent_quoted_list_type['items'],
): FGRailroadTrackConnectionComponent_quoted_list_DataTo {
	const regex = FGRailroadTrackConnectionComponent.regex_from_value(
		coerced.DocsDotJson_FGRailroadTrackConnectionComponent_quoted,
	);

	const pattern = new RegExp(`^\\(${regex}(?:,${regex})*\\)$`);

	if (!pattern.test(data)) {
		throw new TypeError('Data does not match expected pattern!');
	}

	const data_parts = data.substring(1, data.length - 1).split(',');

	const sanity_check: (
		FGRailroadTrackConnectionComponent_quoted_list_DataTo
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
export async function FGRailroadTrackConnectionComponent_quoted_list_generate_typescript_type(
	schema: FGRailroadTrackConnectionComponent_quoted_list_type,
	schema_parser: SchemaParser,
): Promise<FGRailroadTrackConnectionComponent_quoted_list_SchemaTo> {
	const instance = schema_parser.types
		.find((
			maybe,
		) => maybe instanceof FGRailroadTrackConnectionComponent);

	if (undefined === instance) {
		throw new TypeError(`schema_parser not loaded with ${
			FGRailroadTrackConnectionComponent.constructor.name
		}`);
	}

	const type_generator: (
		FGRailroadTrackConnectionComponent_quoted_list_Type_Generator
	) = (
		schema: FGRailroadTrackConnectionComponent_quoted_type,
	) => {
		return instance.generate_typescript_type({schema});
	};

	const sanity_check: (
		FGRailroadTrackConnectionComponent_quoted_list_SchemaTo
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

export function FGRailroadTrackConnectionComponent_quoted_list_ajv_macro(
	schema: FGRailroadTrackConnectionComponent_quoted_list_type,
) {
	const regex = FGRailroadTrackConnectionComponent
		.regex_from_value(
			schema.items
				.DocsDotJson_FGRailroadTrackConnectionComponent_quoted,
		);

	return Object.freeze({
		pattern: `^\\(${regex}(?:,${regex})*\\)$`,
	});
}

// eslint-disable-next-line @stylistic/max-len
export function FGRailroadTrackConnectionComponent_quoted_list_generate_schema_definition(
): Readonly<FGRailroadTrackConnectionComponent_quoted_list_properties> {
	const sanity_check_subtype: (
		FGRailroadTrackConnectionComponent_quoted_schema
	) = FGRailroadTrackConnectionComponent
		.generate_schema_definition();

	const sanity_check_options: array_options<
		'items',
		'specified',
		'yes',
		'optional',
		FGRailroadTrackConnectionComponent_quoted_schema
	> = {
		array_mode: 'items',
		specified_mode: 'specified',
		unique_items_mode: 'yes',
		min_items_mode: 'optional',
		items: sanity_check_subtype,
		minItems: PositiveIntegerOrZeroGuard(1),
	};

	const sanity_check: Readonly<
		FGRailroadTrackConnectionComponent_quoted_list_properties
	> = ArrayType.generate_schema_definition(sanity_check_options);

	return sanity_check;
}
