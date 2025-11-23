import type {
	TemplateLiteralTypeNode,
} from 'typescript';

import type {
	SchemaDefinitionDefinition,
	SchemalessTypeOptions,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	TemplatedStringParts,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';
import {
	KeywordType,
	RegexpFailureError,
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import {
	factory,
	type StringLiteral,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import type {
} from 'regexp.escape/auto';

type BlueprintGeneratedClass_single_quoted_type = {
	type: 'string',
	DocsDotJson_BlueprintGeneratedClass_single_quoted: string|null,
};

const BlueprintGeneratedClass_single_quoted_schema_properties = {
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_BlueprintGeneratedClass_single_quoted: {
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

type BlueprintGeneratedClass_single_quoted_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_BlueprintGeneratedClass_single_quoted'],
	typeof BlueprintGeneratedClass_single_quoted_schema_properties
>;

export type {
	BlueprintGeneratedClass_single_quoted_schema,
	BlueprintGeneratedClass_single_quoted_type,
};

export class BlueprintGeneratedClassSingleQuoted<
	T extends `BlueprintGeneratedClass'/Game/FactoryGame/${
		string
	}${string}.${string}_C'` = `BlueprintGeneratedClass'/Game/FactoryGame/${
		string
	}${string}.${string}_C'`,
> extends KeywordType<
		T,
		BlueprintGeneratedClass_single_quoted_type,
		Record<string, never>,
		BlueprintGeneratedClass_single_quoted_schema,
		Record<string, never>,
		TemplateLiteralTypeNode,
		StringLiteral
	> {
	#regex: RegExp;

	constructor(
		options: SchemalessTypeOptions,
	) {
		super(
			{
				...options,
				ajv_keyword: {
					keyword: (
						'DocsDotJson_BlueprintGeneratedClass_single_quoted'
					),
					type: 'string',
					macro: (value: string|null) => {
						let pattern = BlueprintGeneratedClassSingleQuoted
							.#regex_from_value(
								value,
							).toString();

						if (pattern.startsWith('/') && pattern.endsWith('/')) {
							pattern = pattern.substring(1, pattern.length - 1);
						}

						return {
							pattern,
						};
					},
				},
				type_definition: {},
				schema_definition: {},
				add_to_$defs_excluded: true,
			},
		);

		this.#regex = BlueprintGeneratedClassSingleQuoted.#regex_from_value(
			null,
		);
	}

	generate_typescript_data(
		data: T,
	): StringLiteral {
		if (!this.#regex.test(data)) {
			throw new RegexpFailureError(
				'Value does not match expected regex!',
				this.#regex,
				data,
			);
		}

		return factory.createStringLiteral(data);
	}

	generate_typescript_type({
		schema,
	}: {
		schema: BlueprintGeneratedClass_single_quoted_type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts(
				BlueprintGeneratedClassSingleQuoted
					.TemplatedStringParts_by_value(
						schema
							.DocsDotJson_BlueprintGeneratedClass_single_quoted,
					),
			),
		);
	}

	static generate_schema_definition() {
		const result: BlueprintGeneratedClass_single_quoted_schema = {
			type: 'object',
			additionalProperties: false,
			required: [
				'type',
				'DocsDotJson_BlueprintGeneratedClass_single_quoted',
			],
			properties: (
				BlueprintGeneratedClass_single_quoted_schema_properties
			),
		};

		return Object.freeze(result);
	}

	static generate_type_definition(): Readonly<
		BlueprintGeneratedClass_single_quoted_type
	> {
		const result: BlueprintGeneratedClass_single_quoted_type = {
			type: 'string',
			DocsDotJson_BlueprintGeneratedClass_single_quoted: null,
		};

		return Object.freeze(result);
	}

	static regex_from_value(
		value: string|null,
	): string {
		if (null !== value) {
			const escaped = RegExp.escape(value);

			return `BlueprintGeneratedClass'${escaped}'`;
		}

		const start = `BlueprintGeneratedClass'`;

		const prefix = RegExp.escape('/Game/FactoryGame/');
		const suffix = RegExp.escape(`_C'`);

		return `${start}${prefix}(?:[^\\/_]+\\/)*[^.']+\\.[^.']+${suffix}`;
	}

	static TemplatedStringParts(
		schema: BlueprintGeneratedClass_single_quoted_type,
	): TemplatedStringParts {
		return this.TemplatedStringParts_by_value(
			schema.DocsDotJson_BlueprintGeneratedClass_single_quoted,
		);
	}

	static TemplatedStringParts_by_value(
		value: string|null,
	): TemplatedStringParts {
		return [
			`BlueprintGeneratedClass'/Game/FactoryGame/`,
			null === value ? {type: 'string'} : value,
			`'`,
		];
	}

	static #regex_from_value(
		value: string|null,
	): RegExp {
		return new RegExp(`^${this.regex_from_value(value)}$`);
	}
}
