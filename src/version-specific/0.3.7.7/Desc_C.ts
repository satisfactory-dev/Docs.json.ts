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

type Desc_C_type = {
	type: 'string',
	DocsDotJson_Desc_C: string|null,
};
const Desc_C_schema_properties = {
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_Desc_C: {
		oneOf: [
			{
				type: 'string',
			},
			{
				type: 'null',
			},
		],
	},
} as const;

type Desc_C_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_Desc_C'],
	typeof Desc_C_schema_properties
>;

export class Desc_C extends
	MacroToTemplatedString<
		`Desc_${string}_C`,
		string,
		Desc_C_type,
		Record<string, never>,
		Desc_C_schema,
		Record<string, never>
	> {
	constructor(
		options: SchemalessTypeOptions,
	) {
		super(
			{
				keyword: 'DocsDotJson_Desc_C',
				macro: (value: string|null) => ({
					templated_string: [
						'Desc_',
						null === value ? {type: 'string'} : value,
						'_C',
					],
				}),
				specified_parts: [
					'Desc_',
					{type: 'string'},
					'_C',
				],
			},
			{
				...options,
				type_definition: {},
				schema_definition: {},
				add_to_$defs_excluded: true,
			},
		);
	}

	generate_typescript_type({
		schema: {
			DocsDotJson_Desc_C: value,
		},
	}: {
		schema: Desc_C_type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts([
				'Desc_',
				null === value ? {type: 'string'} : value,
				'_C',
			]),
		);
	}

	static generate_schema_definition(): Readonly<
		Desc_C_schema
	> {
		return Object.freeze({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'DocsDotJson_Desc_C'],
			properties: Desc_C_schema_properties,
		});
	}

	static generate_type_definition(): Readonly<Desc_C_type> {
		return Object.freeze({
			type: 'string',
			DocsDotJson_Desc_C: null,
		});
	}
}
