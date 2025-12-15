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

type NativeClass_type = {
	type: 'string',
	DocsDotJson_NativeClass: string,
};

const NativeClass_schema_properties = {
	$defs: {
		type: 'object',
	},
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_NativeClass: {
		type: 'string',
	},
} as const;

type NativeClass_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_NativeClass'],
	typeof NativeClass_schema_properties
>;

export class NativeClass extends
	MacroToTemplatedString<
		`/Script/CoreUObject.Class'/Script/${string}'`,
		string,
		NativeClass_type,
		Record<string, never>,
		NativeClass_schema,
		Record<string, never>
	> {
	constructor(
		options: SchemalessTypeOptions,
	) {
		super(
			{
				keyword: 'DocsDotJson_NativeClass',
				macro: (value: string) => ({
					templated_string: [
						`/Script/CoreUObject.Class'/Script/`,
						value,
						`'`,
					],
				}),
				specified_parts: [
					`/Script/CoreUObject.Class'/Script/`,
					{type: 'string'},
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
		schema: {
			DocsDotJson_NativeClass: value,
		},
	}: {
		schema: NativeClass_type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts([
				`/Script/CoreUObject.Class'/Script/`,
				value,
				`'`,
			]),
		);
	}

	static generate_schema_definition(): Readonly<
		NativeClass_schema
	> {
		return Object.freeze({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'DocsDotJson_NativeClass'],
			properties: NativeClass_schema_properties,
		});
	}

	static generate_type_definition(): Readonly<NativeClass_type> {
		return Object.freeze({
			type: 'string',
			DocsDotJson_NativeClass: '',
		});
	}
}
