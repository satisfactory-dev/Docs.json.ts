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

type StringDotString_type = {
	type: 'string',
	DocsDotJson_StringDotString: string,
};
const StringDotString_schema_properties = {
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_StringDotString: {
		type: 'string',
	},
} as const;

type StringDotString_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_StringDotString'],
	typeof StringDotString_schema_properties
>;

export class StringDotString extends
	MacroToTemplatedString<
		`${string}.${string}`,
		string,
		StringDotString_type,
		Record<string, never>,
		StringDotString_schema,
		Record<string, never>
	> {
	constructor(
		options: SchemalessTypeOptions,
	) {
		super(
			{
				keyword: 'DocsDotJson_StringDotString',
				macro: (value: string) => ({
					templated_string: [
						value,
						'.',
						value,
					],
				}),
				specified_parts: [
					{type: 'string'},
					'.',
					{type: 'string'},
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
			DocsDotJson_StringDotString: value,
		},
	}: {
		schema: StringDotString_type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts([
				value,
				'.',
				value,
			]),
		);
	}

	static generate_schema_definition(): Readonly<
		StringDotString_schema
	> {
		return Object.freeze({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'DocsDotJson_StringDotString'],
			properties: StringDotString_schema_properties,
		});
	}

	static generate_type_definition(): Readonly<StringDotString_type> {
		return Object.freeze({
			type: 'string',
			DocsDotJson_StringDotString: '',
		});
	}
}
