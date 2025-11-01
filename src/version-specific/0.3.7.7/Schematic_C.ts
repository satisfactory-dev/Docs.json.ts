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

type Schematic_C_type = {
	type: 'string',
	DocsDotJson_Schematic_C: string|null,
};
const Schematic_C_schema_properties = {
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_Schematic_C: {
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

type Schematic_C_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_Schematic_C'],
	typeof Schematic_C_schema_properties
>;

export class Schematic_C extends
	MacroToTemplatedString<
		`Schematic_${string}_C`,
		string,
		Schematic_C_type,
		Record<string, never>,
		Schematic_C_schema,
		Record<string, never>
	> {
	constructor(
		options: SchemalessTypeOptions,
	) {
		super(
			{
				keyword: 'DocsDotJson_Schematic_C',
				macro: (value: string|null) => ({
					templated_string: [
						'Schematic_',
						null === value ? {type: 'string'} : value,
						'_C',
					],
				}),
				specified_parts: [
					'Schematic_',
					{type: 'string'},
					'_C',
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
		schema: {
			DocsDotJson_Schematic_C: value,
		},
	}: {
		schema: Schematic_C_type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts([
				'Schematic_',
				null === value ? {type: 'string'} : value,
				'_C',
			]),
		);
	}

	static generate_schema_definition(): Readonly<
		Schematic_C_schema
	> {
		return Object.freeze({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'DocsDotJson_Schematic_C'],
			properties: Schematic_C_schema_properties,
		});
	}

	static generate_type_definition(): Readonly<Schematic_C_type> {
		return Object.freeze({
			type: 'string',
			DocsDotJson_Schematic_C: null,
		});
	}
}
