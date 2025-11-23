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

type FGRailroadTrackConnectionComponent_quoted_type = {
	type: 'string',
	DocsDotJson_FGRailroadTrackConnectionComponent_quoted: string|null,
};

const FGRailroadTrackConnectionComponent_quoted_schema_properties = {
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_FGRailroadTrackConnectionComponent_quoted: {
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

type FGRailroadTrackConnectionComponent_quoted_schema = (
	SchemaDefinitionDefinition<
		['type', 'DocsDotJson_FGRailroadTrackConnectionComponent_quoted'],
		typeof FGRailroadTrackConnectionComponent_quoted_schema_properties
	>
);

export type {
	FGRailroadTrackConnectionComponent_quoted_schema,
	FGRailroadTrackConnectionComponent_quoted_type,
};

export class FGRailroadTrackConnectionComponent<
	T extends `FGRailroadTrackConnectionComponent'"/Game/FactoryGame/${
		string
	}${
		string
	}.${
		string
	}_C:PlatformConnection${
		'0'|'1'
	}"` = `FGRailroadTrackConnectionComponent'"/Game/FactoryGame/${
		string
	}${
		string
	}.${
		string
	}_C:PlatformConnection${
		'0'|'1'
	}"`,
> extends KeywordType<
		T,
		FGRailroadTrackConnectionComponent_quoted_type,
		Record<string, never>,
		FGRailroadTrackConnectionComponent_quoted_schema,
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
						'DocsDotJson_FGRailroadTrackConnectionComponent_quoted'
					),
					type: 'string',
					macro: (value: string|null) => {
						let pattern = FGRailroadTrackConnectionComponent
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

		this.#regex = FGRailroadTrackConnectionComponent.#regex_from_value(
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
		schema: FGRailroadTrackConnectionComponent_quoted_type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts(
				FGRailroadTrackConnectionComponent
					.TemplatedStringParts_by_value(
						// eslint-disable-next-line @stylistic/max-len
						schema.DocsDotJson_FGRailroadTrackConnectionComponent_quoted,
					),
			),
		);
	}

	static generate_schema_definition(): Readonly<
		FGRailroadTrackConnectionComponent_quoted_schema
	> {
		const result: FGRailroadTrackConnectionComponent_quoted_schema = {
			type: 'object',
			additionalProperties: false,
			required: [
				'type',
				'DocsDotJson_FGRailroadTrackConnectionComponent_quoted',
			],
			properties: (
				FGRailroadTrackConnectionComponent_quoted_schema_properties
			),
		};

		return Object.freeze(result);
	}

	static generate_type_definition(): Readonly<
		FGRailroadTrackConnectionComponent_quoted_type
	> {
		const result: FGRailroadTrackConnectionComponent_quoted_type = {
			type: 'string',
			DocsDotJson_FGRailroadTrackConnectionComponent_quoted: null,
		};

		return Object.freeze(result);
	}

	static regex_from_value(
		value: string|null,
	): string {
		const start = RegExp.escape(`FGRailroadTrackConnectionComponent'"`);


		if (null !== value) {
			const escaped = RegExp.escape(value);

			return `${start}${escaped}"'`;
		}

		const prefix = RegExp.escape('/Game/FactoryGame/');
		const suffix = RegExp.escape(`_C:TrackConnection`);

		return `${
			start
		}${
			prefix
		}(?:[^\\/_]+\\/)*[^."]+\\.[^."]+${
			suffix
		}[01]"'`;
	}

	static TemplatedStringParts(
		schema: FGRailroadTrackConnectionComponent_quoted_type,
	): TemplatedStringParts {
		const value = (
			schema.DocsDotJson_FGRailroadTrackConnectionComponent_quoted
		);

		return this.TemplatedStringParts_by_value(value);
	}

	static TemplatedStringParts_by_value(
		value: string|null,
	): TemplatedStringParts {
		return [
			`FGRailroadTrackConnectionComponent'"/Game/FactoryGame/`,
			null === value ? {type: 'string'} : value,
			`"'`,
		];
	}

	static #regex_from_value(
		value: string|null,
	): RegExp {
		return new RegExp(`^${this.regex_from_value(value)}$`);
	}
}
