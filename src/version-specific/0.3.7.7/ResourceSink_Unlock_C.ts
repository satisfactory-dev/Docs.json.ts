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

type ResourceSink_Unlock_C_type = {
	type: 'string',
	DocsDotJson_ResourceSink_Unlock_C: string|null,
};
const ResourceSink_Unlock_C_schema_properties = {
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_ResourceSink_Unlock_C: {
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

type ResourceSink_Unlock_C_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_ResourceSink_Unlock_C'],
	typeof ResourceSink_Unlock_C_schema_properties
>;

export class ResourceSink_Unlock_C extends
	MacroToTemplatedString<
		`ResourceSink_${string}_Unlock_C`,
		string,
		ResourceSink_Unlock_C_type,
		Record<string, never>,
		ResourceSink_Unlock_C_schema,
		Record<string, never>
	> {
	constructor(
		options: SchemalessTypeOptions,
	) {
		super(
			{
				keyword: 'DocsDotJson_ResourceSink_Unlock_C',
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
			DocsDotJson_ResourceSink_Unlock_C: value,
		},
	}: {
		schema: ResourceSink_Unlock_C_type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts([
				'ResourceSink_',
				null === value ? {type: 'string'} : value,
				'_Unlock_C',
			]),
		);
	}

	static generate_schema_definition(): Readonly<
		ResourceSink_Unlock_C_schema
	> {
		return Object.freeze({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'DocsDotJson_ResourceSink_Unlock_C'],
			properties: ResourceSink_Unlock_C_schema_properties,
		});
	}

	static generate_type_definition(): Readonly<ResourceSink_Unlock_C_type> {
		return Object.freeze({
			type: 'string',
			DocsDotJson_ResourceSink_Unlock_C: null,
		});
	}
}
