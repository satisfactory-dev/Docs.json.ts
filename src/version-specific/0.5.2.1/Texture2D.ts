
import type {
	TemplateLiteralTypeNode,
} from 'typescript';

import type {
	SchemaDefinitionDefinition,
	SchemalessTypeOptions,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	templated_string_type,
	TemplatedStringParts,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';
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
		| [
			'1', '2', '3', '4', '5',
			'Factory', 'MAM', 'Logistics',
			'Vehicle', 'Structure', 'Equipment', 'Icon',
			'64', '64_new', '256', '512',
		]
		| ['256', '512', '256_New', 'White']
		| ['64', '256', '64_new', '512']
		| ['64', '256', 'Map']
		// eslint-disable-next-line @stylistic/comma-dangle
		| null
	),
])|null;

type Texture2D_type = {
	type: 'string',
	DocsDotJson_Texture2D: macro_schema,
};

const Texture2D_schema_properties = {
	$defs: {
		type: 'object',
		additionalProperties: {
			type: 'object',
		},
	},
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
									[
										'1',
										'2',
										'3',
										'4',
										'5',
										'Factory',
										'MAM',
										'Logistics',
										'Vehicle',
										'Structure',
										'Equipment',
										'Icon',
										'64',
										'64_new',
										'256',
										'512',
									],
									['256', '512', '256_New', 'White'],
									['64', '256', '64_new', '512'],
									['64', '256', 'Map'],
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

const suffix_options = [...(
	new Set(
		Texture2D_schema_properties
			.DocsDotJson_Texture2D
			.oneOf[1]
			.prefixItems[2]
			.oneOf[1]
			.enum
			.flatMap((e) => e),
	)
).values()];

type Texture2D_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_Texture2D'],
	typeof Texture2D_schema_properties
>;

export class Texture2D extends
	MacroToTemplatedString<
		`Texture2D${' '|`'`|`'"`}/Game/FactoryGame/${
			string
		}${
			'/IconDesc_'|'/'|''
		}${string}.${string}${`"'`|`'`|''}`,
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
						| [
							'1', '2', '3', '4', '5',
							'Factory', 'MAM', 'Logistics',
							'Vehicle', 'Structure', 'Equipment', 'Icon',
							'64', '64_new', '256', '512',
						]
						| ['256', '512', '256_New', 'White']
						| ['64', '256', '64_new', '512']
						| ['64', '256', 'Map']
						// eslint-disable-next-line @stylistic/comma-dangle
						| null
					),
				])|null) => {
					value = (null === value) ? [null, null, null] : value;

					const value1: TemplatedStringParts[0] = null === value[1]
						? {type: 'string'}
						: value[1];
					const value2 = null === value[2]
						? ['64', '256']
						: value[2];

					return Texture2D.reduce_parts(
						value[0],
						value1,
						value2,
					);
				},
				specified_parts: Texture2D.reduce_parts(
					{type: 'string'},
					{type: 'string'},
					suffix_options,
				).templated_string,
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
			| [
				'1', '2', '3', '4', '5',
				'Factory', 'MAM', 'Logistics',
				'Vehicle', 'Structure', 'Equipment', 'Icon',
				'64', '64_new', '256', '512',
			]
			| ['256', '512', '256_New', 'White']
			| ['64', '256', '64_new', '512']
			| ['64', '256', 'Map']
		) = null === third
			? ['64', '256']
			: (Array.isArray(third) ? third : third);

		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts(
				Texture2D.reduce_parts(
					null === value0 ? {type: 'string'} : value0,
					null === value1 ? {type: 'string'} : value1,
					value2,
				).templated_string,
			),
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

	static reduce_parts(
		value0: {type: 'string'} | string | null,
		value1: TemplatedStringParts[0],
		value2: string | string[],
	): {
		templated_string: TemplatedStringParts,
	} {
		const value2_array = Array.isArray(value2)
			? value2
			: [value2];

		if (value2.length < 1) {
			throw new TypeError('No trailing elements found!');
		}

		const parts = (
			value2_array as [string, ...string[]]
		).map((value2_item): templated_string_type => {
			const part_a_inner: TemplatedStringParts = [
				value1,
				'_',
				value2_item,
			];
			const part_a: templated_string_type = {
				type: 'string',
				templated_string: part_a_inner,
			};

			const part_b_inner: TemplatedStringParts = [
				value1,
				'_',
				value2_item,
			];

			const part_b: templated_string_type = {
				type: 'string',
				templated_string: part_b_inner,
			};

			const separator: TemplatedStringParts[0] = '.';

			const parts: TemplatedStringParts = [
				part_a,
				separator,
				part_b,
			];

			return {
				type: 'string',
				templated_string: parts,
			};
		});

		return {
			templated_string: [
				[
					`Texture2D /Game/FactoryGame/`,
					`Texture2D'"/Game/FactoryGame/`,
				],
				null === value0 ? {type: 'string'} : value0,
				parts,
				[`"'`, `'`, ''],
			],
		};
	}
}
