
import type {
	TemplateLiteralTypeNode,
} from 'typescript';

import type {
	SchemaDefinitionDefinition,
	SchemalessTypeOptions,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	MacroToTemplatedString,
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

type macro_schema = ([
	string|null,
	string|null,
	(
		| '64'
		| '256'
		| '512'
		| ['64', '256', '512']
		| ['64', '256']
		| ['64', '256', '1b', '64_new']
		| ['256', '512']
		| ['256', '512', '1b', '256_New']
		| ['64', '512']
		// eslint-disable-next-line @stylistic/comma-dangle
		| null
	),
])|null;

type Texture2D_type = {
	type: 'string',
	DocsDotJson_Texture2D: macro_schema,
};

const Texture2D_schema_properties = {
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_Texture2D: {
		oneOf: [
			{
				type: 'null',
			},
			{
				type: 'array',
				items: false,
				minItems: 3,
				maxItems: 3,
				prefixItems: [
					{
						oneOf: [
							{
								type: 'string',
							},
							{
								type: 'null',
							},
						],
					},
					{
						oneOf: [
							{
								type: 'string',
							},
							{
								type: 'null',
							},
						],
					},
					{
						oneOf: [
							{
								type: 'string',
								enum: [
									'64',
									'256',
									'512',
								],
							},
							{
								type: 'array',
								enum: [
									['64', '256', '512'],
									['64', '256'],
									['64', '256', '1b', '64_new'],
									['256', '512'],
									['256', '512', '1b', '256_New'],
									['64', '512'],
								],
							},
							{
								type: 'null',
							},
						],
					},
				],
			},
		],
	},
} as const;

type Texture2D_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_Texture2D'],
	typeof Texture2D_schema_properties
>;

export class Texture2D extends
	MacroToTemplatedString<
		`Texture2D'/Game/FactoryGame/${
			string
		}${
			'/IconDesc_'|'/'|''
		}${string}.${string}'`,
		macro_schema,
		Texture2D_type,
		Record<string, never>,
		Texture2D_schema,
		Record<string, never>
	> {
	constructor(
		options: SchemalessTypeOptions,
	) {
		super(
			{
				keyword: 'DocsDotJson_Texture2D',
				macro: (value: ([
					string|null,
					string|null,
					(
						| '64'
						| '256'
						| '512'
						| ['64', '256', '512']
						| ['64', '256']
						| ['64', '256', '1b', '64_new']
						| ['256', '512']
						| ['256', '512', '1b', '256_New']
						| ['64', '512']
						// eslint-disable-next-line @stylistic/comma-dangle
						| null
					),
				])|null) => {
					value = (null === value) ? [null, null, null] : value;

					const value1 = null === value[1]
						? {type: 'string'}
						: value[1];
					const value2 = null === value[2]
						? ['64', '256']
						: value[2];

					return {
						templated_string: [
							`Texture2D'/Game/FactoryGame/`,
							null === value[0] ? {type: 'string'} : value[0],
							['/IconDesc_', '/', ''],
							{
								type: 'string',
								templated_string: [
									{
										type: 'string',
										templated_string: [
											value1,
											'_',
											value2,
										],
									},
									'.',
									{
										type: 'string',
										templated_string: [
											value1,
											'_',
											value2,
										],
									},
								],
							},
							`'`,
						],
					};
				},
				specified_parts: [
					`Texture2D'/Game/FactoryGame/`,
					{type: 'string'},
					['/IconDesc_', '/', ''],
					{
						type: 'string',
						templated_string: [
							{
								type: 'string',
								templated_string: [
									{type: 'string'},
									'_',
									['64', '256', '512'],
								],
							},
							'.',
							{
								type: 'string',
								templated_string: [
									{type: 'string'},
									'_',
									['64', '256', '512'],
								],
							},
						],
					},
					`'`,
				],
			},
			{
				...options,
				type_definition: {},
				schema_definition: {},
			},
		);
	}

	generate_typescript_type({
		schema,
	}: {
		schema: Texture2D_type,
	}): Promise<TemplateLiteralTypeNode> {
		const [
			first,
			second,
			third,
		] = (null === schema.DocsDotJson_Texture2D)
			? [null, null, null]
			: schema.DocsDotJson_Texture2D;

		const value0 = null === first ? null : first;
		const value1 = null === second ? null : second;
		const value2: (
			| '64'
			| '256'
			| '512'
			| ['64', '256', '512']
			| ['64', '256']
			| ['64', '256', '1b', '64_new']
			| ['256', '512']
			| ['256', '512', '1b', '256_New']
			| ['64', '512']
		) = null === third
			? ['64', '256']
			: (Array.isArray(third) ? third : third);

		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts([
				`Texture2D'/Game/FactoryGame/`,
				null === value0 ? {type: 'string'} : value0,
				['/IconDesc_', '/', ''],
				null === value1 ? {type: 'string'} : value1,
				'_',
				value2,
				'.',
				null === value1 ? {type: 'string'} : value1,
				'_',
				value2,
				`'`,
			]),
		);
	}

	static generate_schema_definition(): Readonly<Texture2D_schema> {
		return Object.freeze({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'DocsDotJson_Texture2D'],
			properties: Texture2D_schema_properties,
		});
	}

	static generate_type_definition(): Readonly<Texture2D_type> {
		return Object.freeze({
			type: 'string',
			DocsDotJson_Texture2D: null,
		});
	}
}
