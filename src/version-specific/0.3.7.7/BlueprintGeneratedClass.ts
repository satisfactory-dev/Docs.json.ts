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

type BlueprintGeneratedClass_type = {
	type: 'string',
	DocsDotJson_BlueprintGeneratedClass: string|null,
};
type BlueprintGeneratedClass_quoted_type = {
	type: 'string',
	DocsDotJson_BlueprintGeneratedClass_quoted: string|null,
};

const BlueprintGeneratedClass_schema_properties = {
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_BlueprintGeneratedClass: {
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

const BlueprintGeneratedClass_quoted_schema_properties = {
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_BlueprintGeneratedClass_quoted: {
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

type BlueprintGeneratedClass_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_BlueprintGeneratedClass'],
	typeof BlueprintGeneratedClass_schema_properties
>;

type BlueprintGeneratedClass_quoted_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_BlueprintGeneratedClass_quoted'],
	typeof BlueprintGeneratedClass_quoted_schema_properties
>;

export type {
	BlueprintGeneratedClass_schema,
	BlueprintGeneratedClass_type,
	BlueprintGeneratedClass_quoted_schema,
	BlueprintGeneratedClass_quoted_type,
};

type mode = 'quoted'|'non_quoted';

abstract class BlueprintGeneratedClass<
	Mode extends mode,
	T extends {
		quoted: `BlueprintGeneratedClass'"/Game/FactoryGame/${
			string
		}${string}.${string}_C"`,
		non_quoted: `BlueprintGeneratedClass /Game/FactoryGame/${
			string
		}${string}.${string}_C`,
	}[Mode] = {
		quoted: `BlueprintGeneratedClass'"/Game/FactoryGame/${
			string
		}${string}.${string}_C"`,
		non_quoted: `BlueprintGeneratedClass /Game/FactoryGame/${
			string
		}${string}.${string}_C`,
	}[Mode],
> extends KeywordType<
		T,
		{
			quoted: BlueprintGeneratedClass_quoted_type,
			non_quoted: BlueprintGeneratedClass_type,
		}[Mode],
		{mode: Mode},
		{
			quoted: BlueprintGeneratedClass_quoted_schema,
			non_quoted: BlueprintGeneratedClass_schema,
		}[Mode],
		{mode: Mode},
		TemplateLiteralTypeNode,
		StringLiteral
	> {
	#regex: RegExp;

	constructor(
		options: SchemalessTypeOptions,
		mode: Mode,
	) {
		super(
			{
				...options,
				ajv_keyword: {
					keyword: {
						non_quoted: 'DocsDotJson_BlueprintGeneratedClass',
						quoted: 'DocsDotJson_BlueprintGeneratedClass_quoted',
					}[mode],
					type: 'string',
					macro: (value: string|null) => {
						let pattern = BlueprintGeneratedClass
							.#regex_from_value_and_mode(
								value,
								mode,
							).toString();

						if (pattern.startsWith('/') && pattern.endsWith('/')) {
							pattern = pattern.substring(1, pattern.length - 1);
						}

						return {
							pattern,
						};
					},
				},
				type_definition: {mode},
				schema_definition: {mode},
				add_to_$defs_excluded: true,
			},
		);

		this.#regex = BlueprintGeneratedClass.#regex_from_value_and_mode(
			null,
			mode,
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

	static generate_schema_definition<
		Mode extends mode,
	>({mode}: {mode: Mode}): Readonly<{
		quoted: BlueprintGeneratedClass_quoted_schema,
		non_quoted: BlueprintGeneratedClass_schema,
	}[Mode]> {
		let result: {
			quoted: BlueprintGeneratedClass_quoted_schema,
			non_quoted: BlueprintGeneratedClass_schema,
		}[Mode];

		if ('quoted' === mode) {
			const sanity_check: BlueprintGeneratedClass_quoted_schema = {
				type: 'object',
				additionalProperties: false,
				required: [
					'type',
					'DocsDotJson_BlueprintGeneratedClass_quoted',
				],
				properties: BlueprintGeneratedClass_quoted_schema_properties,
			};

			result = sanity_check as typeof result;
		} else {
			const sanity_check: BlueprintGeneratedClass_schema = {
				type: 'object',
				additionalProperties: false,
				required: [
					'type',
					'DocsDotJson_BlueprintGeneratedClass',
				],
				properties: BlueprintGeneratedClass_schema_properties,
			};

			result = sanity_check as typeof result;
		}

		return Object.freeze(result);
	}

	static generate_type_definition<
		Mode extends mode,
	>({mode}: {mode: Mode}): Readonly<{
		quoted: BlueprintGeneratedClass_quoted_type,
		non_quoted: BlueprintGeneratedClass_type,
	}[Mode]> {
		let result: {
			quoted: BlueprintGeneratedClass_quoted_type,
			non_quoted: BlueprintGeneratedClass_type,
		}[Mode];

		if ('quoted' === mode) {
			const sanity_check: BlueprintGeneratedClass_quoted_type = {
				type: 'string',
				DocsDotJson_BlueprintGeneratedClass_quoted: null,
			};

			result = sanity_check as typeof result;
		} else {
			const sanity_check: BlueprintGeneratedClass_type = {
				type: 'string',
				DocsDotJson_BlueprintGeneratedClass: null,
			};

			result = sanity_check as typeof result;
		}

		return Object.freeze(result);
	}

	static regex_from_value_and_mode(
		value: string|null,
		mode: mode,
	): string {
		const start = RegExp.escape({
			quoted: `BlueprintGeneratedClass'"`,
			non_quoted: `BlueprintGeneratedClass `,
		}[mode]);


		if (null !== value) {
			const escaped = RegExp.escape(value);
			if ('quoted' === mode) {
				return `${start}${escaped}"'`;
			}

			return `BlueprintGeneratedClass ${escaped}`;
		}

		const prefix = RegExp.escape('/Game/FactoryGame/');
		const suffix = RegExp.escape({
			quoted: `_C"'`,
			non_quoted: '_C',
		}[mode]);

		if ('quoted' === mode) {
			return `${start}${prefix}(?:[^\\/_]+\\/)*[^."]+\\.[^."]+${suffix}`;
		}

		return `${start}${prefix}(?:[^\\/_]+\\/)*[^.]+\\.[^.]+${suffix}`;
	}

	static TemplatedStringParts(
		schema: (
			| BlueprintGeneratedClass_quoted_type
			| BlueprintGeneratedClass_type
		),
	): TemplatedStringParts {
		let value: string|null;
		let mode: mode;

		if ('DocsDotJson_BlueprintGeneratedClass_quoted' in schema) {
			value = schema.DocsDotJson_BlueprintGeneratedClass_quoted;
			mode = 'quoted';
		} else {
			value = schema.DocsDotJson_BlueprintGeneratedClass;
			mode = 'non_quoted';
		}

		return this.TemplatedStringParts_by_value(value, mode);
	}

	static TemplatedStringParts_by_value(
		value: string|null,
		mode: mode,
	): TemplatedStringParts {
		return [
			{
				non_quoted: 'BlueprintGeneratedClass /Game/FactoryGame/',
				quoted: 'BlueprintGeneratedClass\'\\"/Game/FactoryGame/',
			}[mode],
			null === value ? {type: 'string'} : value,
			{
				non_quoted: '',
				quoted: '\\"',
			}[mode],
		];
	}

	static #regex_from_value_and_mode(
		value: string|null,
		mode: mode,
	): RegExp {
		return new RegExp(`^${this.regex_from_value_and_mode(value, mode)}$`);
	}
}

export class BlueprintGeneratedClass_non_quoted extends
	BlueprintGeneratedClass<'non_quoted'> {
	constructor(
		options: SchemalessTypeOptions,
	) {
		super(options, 'non_quoted');
	}

	generate_typescript_type({
		schema,
	}: {
		schema: BlueprintGeneratedClass_type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts(
				BlueprintGeneratedClass.TemplatedStringParts_by_value(
					schema.DocsDotJson_BlueprintGeneratedClass,
					'non_quoted',
				),
			),
		);
	}

	static regex_from_value(value: string | null): string {
		return this.regex_from_value_and_mode(value, 'non_quoted');
	}
}

export class BlueprintGeneratedClass_quoted extends
	BlueprintGeneratedClass<'quoted'> {
	constructor(
		options: SchemalessTypeOptions,
	) {
		super(options, 'quoted');
	}

	generate_typescript_type({
		schema,
	}: {
		schema: BlueprintGeneratedClass_quoted_type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts(
				BlueprintGeneratedClass.TemplatedStringParts_by_value(
					schema.DocsDotJson_BlueprintGeneratedClass_quoted,
					'quoted',
				),
			),
		);
	}

	static regex_from_value(value: string | null): string {
		return this.regex_from_value_and_mode(value, 'quoted');
	}
}
