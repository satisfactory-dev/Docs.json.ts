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

type BP_C_type = {
	type: 'string',
	DocsDotJson_BP_C: string|null,
};
const BP_C_schema_properties = {
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_BP_C: {
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

type BP_C_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_BP_C'],
	typeof BP_C_schema_properties
>;

export class BP_C extends
	MacroToTemplatedString<
		`BP_${string}_C`,
		string,
		BP_C_type,
		Record<string, never>,
		BP_C_schema,
		Record<string, never>
	> {
	constructor(
		options: SchemalessTypeOptions,
	) {
		super(
			{
				keyword: 'DocsDotJson_BP_C',
				macro: (value: string|null) => ({
					templated_string: [
						'BP_',
						null === value ? {type: 'string'} : value,
						'_C',
					],
				}),
				specified_parts: [
					'BP_',
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
			DocsDotJson_BP_C: value,
		},
	}: {
		schema: BP_C_type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts([
				'BP_',
				null === value ? {type: 'string'} : value,
				'_C',
			]),
		);
	}

	static generate_schema_definition(): Readonly<
		BP_C_schema
	> {
		return Object.freeze({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'DocsDotJson_BP_C'],
			properties: BP_C_schema_properties,
		});
	}

	static generate_type_definition(): Readonly<BP_C_type> {
		return Object.freeze({
			type: 'string',
			DocsDotJson_BP_C: null,
		});
	}
}
