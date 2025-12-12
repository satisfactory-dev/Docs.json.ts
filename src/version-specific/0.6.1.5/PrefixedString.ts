import type {
	TemplateLiteralTypeNode,
} from 'typescript';

import type {
	SchemaDefinitionDefinition,
	SchemalessTypeOptions,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$defs_schema,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	TemplatedStringParts,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';
import {
	KeywordType,
	RegexpFailureError,
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import type {
	StringLiteral,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';
import {
	factory,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import type {
} from 'regexp.escape/auto';

type mode = 'quoted'|'non_quoted';

type PrefixedString_type<
	Mode extends mode = mode,
> = {
	type: 'string',
	DocsDotJson_PrefixedString: {
		prefix: string,
		mode: Mode,
		value: string|null,
		first_path?: Exclude<string, ''>,
	},
};

const PrefixedString_schema_properties = {
	$defs: $defs_schema.properties.$defs,
	type: {
		type: 'string',
		const: 'string',
	},
	DocsDotJson_PrefixedString: {
		type: 'object',
		additionalProperties: false,
		required: ['prefix', 'mode', 'value'],
		properties: {
			prefix: {
				type: 'string',
				minLength: 1,
			},
			mode: {
				type: 'string',
				enum: ['quoted', 'non_quoted'],
			},
			value: {
				oneOf: [
					{
						type: 'string',
						minLength: 1,
					},
					{
						type: 'null',
					},
				],
			},
			first_path: {
				type: 'string',
				minLength: 1,
			},
		},
	},
} as const;

type PrefixedString_schema = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_PrefixedString'],
	typeof PrefixedString_schema_properties
>;

export type {
	PrefixedString_schema,
	PrefixedString_type,
};

export class PrefixedString<
	Mode extends mode,
	Prefix extends Exclude<string, ''>,
	T extends {
		quoted: `${Prefix}'"/Game/${
			Exclude<string, ''>
		}/${
			string
		}"'`,
		non_quoted: `${Prefix} /Game/${
			Exclude<string, ''>
		}/${
			string
		}`,
	}[Mode] = {
		quoted: `${Prefix}'"/Game/${
			Exclude<string, ''>
		}/${
			string
		}"'`,
		non_quoted: `${Prefix} /Game/${
			Exclude<string, ''>
		}/${
			string
		}`,
	}[Mode],
> extends KeywordType<
		T,
		PrefixedString_type<Mode>,
		{mode: Mode},
		PrefixedString_schema,
		{mode: Mode},
		TemplateLiteralTypeNode,
		StringLiteral
	> {
	constructor(
		options: SchemalessTypeOptions,
		mode: Mode,
	) {
		super(
			{
				...options,
				ajv_keyword: {
					keyword: 'DocsDotJson_PrefixedString',
					type: 'string',
					macro: (
						{
							prefix,
							mode,
							value,
							first_path,
						}: PrefixedString_type<
							Mode
						>['DocsDotJson_PrefixedString'],
					) => {
						let pattern = PrefixedString
							.#regex_from_prefix_value_and_mode(
								prefix,
								value,
								mode,
								first_path,
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
	}

	generate_typescript_data(
		data: T,
		schema_parser: SchemaParser,
		{
			DocsDotJson_PrefixedString: {
				prefix,
				mode,
				value,
				first_path,
			},
		}: PrefixedString_type<Mode>,
	): StringLiteral {
		const regex = PrefixedString.#regex_from_prefix_value_and_mode(
			prefix,
			value,
			mode,
			first_path,
		);

		if (!regex.test(data)) {
			throw new RegexpFailureError(
				'Value does not match expected regex!',
				regex,
				data,
			);
		}

		return factory.createStringLiteral(data);
	}

	generate_typescript_type({
		schema: {
			DocsDotJson_PrefixedString: {
				prefix,
				mode,
				value,
				first_path,
			},
		},
	}: {
		schema: PrefixedString_type<Mode>,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts(
				PrefixedString.TemplatedStringParts_by_value(
					prefix,
					mode,
					value,
					first_path,
				),
			),
		);
	}

	static generate_schema_definition(): Readonly<PrefixedString_schema> {
		const result: PrefixedString_schema = {
			type: 'object',
			additionalProperties: false,
			required: [
				'type',
				'DocsDotJson_PrefixedString',
			],
			properties: PrefixedString_schema_properties,
		};

		return Object.freeze(result);
	}

	static generate_type_definition<
		Mode extends mode,
	>({
		prefix,
		mode,
	}: {
		prefix: Exclude<string, ''>,
		mode: Mode,
	}): Readonly<PrefixedString_type> {
		const result: PrefixedString_type<Mode> = {
			type: 'string',
			DocsDotJson_PrefixedString: {
				prefix,
				mode,
				value: null,
			},
		};

		return Object.freeze(result);
	}

	static regex_from_prefix_value_and_mode(
		prefix_string: Exclude<string, ''>,
		value: Exclude<string, ''>|null,
		mode: mode,
		first_path?: Exclude<string, ''>,
	): string {
		const start = RegExp.escape({
			quoted: `${prefix_string}'"`,
			non_quoted: `${prefix_string} `,
		}[mode]);


		if (null !== value) {
			const escaped = RegExp.escape(value);
			if ('quoted' === mode) {
				return `${start}${escaped}"'`;
			}

			return `${start}${escaped}`;
		}

		const prefix = RegExp.escape(`/Game/${first_path || 'FactoryGame'}/`);
		const suffix = RegExp.escape({
			quoted: `"'`,
			non_quoted: '',
		}[mode]);

		if ('quoted' === mode) {
			return `${start}${prefix}(?:[^\\/_]+\\/)*[^."]+\\.[^."]+${suffix}`;
		}

		return `${start}${prefix}(?:[^\\/_]+\\/)*[^.]+\\.[^.]+${suffix}`;
	}

	static TemplatedStringParts(
		{
			DocsDotJson_PrefixedString: {
				prefix,
				mode,
				value,
				first_path,
			},
		}: PrefixedString_type,
	): TemplatedStringParts {
		return this.TemplatedStringParts_by_value(
			prefix,
			mode,
			value,
			first_path,
		);
	}

	static TemplatedStringParts_by_value(
		prefix: Exclude<string, ''>,
		mode: mode,
		value: Exclude<string, ''>|null,
		first_path?: Exclude<string, ''>,
	): TemplatedStringParts {
		return [
			{
				non_quoted: `${prefix} /Game/${first_path || 'FactoryGame'}/`,
				quoted: `${prefix}'"/Game/${first_path || 'FactoryGame'}/`,
			}[mode],
			null === value ? {type: 'string'} : value,
			{
				non_quoted: '',
				quoted: `"'`,
			}[mode],
		];
	}

	static #regex_from_prefix_value_and_mode(
		prefix: Exclude<string, ''>,
		value: Exclude<string, ''>|null,
		mode: mode,
		first_path?: Exclude<string, ''>,
	): RegExp {
		return new RegExp(`^${
			this.regex_from_prefix_value_and_mode(
				prefix,
				value,
				mode,
				first_path,
			)
		}$`);
	}
}
