import type {
	TemplateLiteralTypeNode,
} from 'typescript';

import type {
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
	mode as base__mode,
	PrefixedString_base_schema,
	PrefixedString_base_type,
} from '../0.3.7.7/PrefixedString.ts';

export type mode = base__mode | 'single_quoted';

export type PrefixedString_type<
	Mode extends mode = mode,
> = PrefixedString_base_type<Mode>;

type PrefixedString_schema<
	Mode extends mode,
> = PrefixedString_base_schema<Mode>;

export class PrefixedString<
	Mode extends mode,
	Prefix extends Exclude<string, ''>,
	T extends {
		quoted: `${Prefix}'"/Game/FactoryGame/${
			string
		}"'`,
		single_quoted: `${Prefix}'/Game/FactoryGame/${
			string
		}'`,
		non_quoted: `${Prefix} /Game/FactoryGame/${
			string
		}`,
	}[Mode] = {
		quoted: `${Prefix}'"/Game/FactoryGame/${
			string
		}"'`,
		single_quoted: `${Prefix}'/Game/FactoryGame/${
			string
		}'`,
		non_quoted: `${Prefix} /Game/FactoryGame/${
			string
		}`,
	}[Mode],
> extends KeywordType<
		T,
		PrefixedString_type<Mode>,
		{mode: Mode},
		PrefixedString_schema<Mode>,
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
						}: PrefixedString_type<
							Mode
						>['DocsDotJson_PrefixedString'],
					) => {
						let pattern = PrefixedString
							.#regex_from_prefix_value_and_mode(
								prefix,
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
	}

	generate_typescript_data(
		data: T,
		schema_parser: SchemaParser,
		{
			DocsDotJson_PrefixedString: {
				prefix,
				mode,
				value,
			},
		}: PrefixedString_type<Mode>,
	): StringLiteral {
		const regex = PrefixedString.#regex_from_prefix_value_and_mode(
			prefix,
			value,
			mode,
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
		schema,
	}: {
		schema: PrefixedString_type<Mode>,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts(
				PrefixedString.TemplatedStringParts_by_value(
					schema.DocsDotJson_PrefixedString.prefix,
					schema.DocsDotJson_PrefixedString.mode,
					schema.DocsDotJson_PrefixedString.value,
				),
			),
		);
	}

	static generate_schema_definition<
		Mode extends mode,
	>({
		mode,
	}: {
		mode: Mode,
	}): Readonly<PrefixedString_schema<Mode>> {
		const result: PrefixedString_schema<Mode> = {
			type: 'object',
			additionalProperties: false,
			required: [
				'type',
				'DocsDotJson_PrefixedString',
			],
			properties: {
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
							const: mode,
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
					},
				},
			},
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
	): string {
		const start = RegExp.escape({
			quoted: `${prefix_string}'"`,
			single_quoted: `${prefix_string}'`,
			non_quoted: `${prefix_string} `,
		}[mode]);


		if (null !== value) {
			const escaped = RegExp.escape(value);
			if ('quoted' === mode) {
				return `${start}${escaped}"'`;
			}

			return `${start}${escaped}`;
		}

		const prefix = RegExp.escape('/Game/FactoryGame/');
		const suffix = RegExp.escape({
			quoted: `"'`,
			single_quoted: `'`,
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
			},
		}: PrefixedString_type,
	): TemplatedStringParts {
		return this.TemplatedStringParts_by_value(prefix, mode, value);
	}

	static TemplatedStringParts_by_value(
		prefix: Exclude<string, ''>,
		mode: mode,
		value: Exclude<string, ''>|null,
	): TemplatedStringParts {
		return [
			{
				non_quoted: `${prefix} /Game/FactoryGame/`,
				quoted: `${prefix}'"/Game/FactoryGame/`,
				single_quoted: `${prefix}'/Game/FactoryGame/`,
			}[mode],
			null === value ? {type: 'string'} : value,
			{
				non_quoted: '',
				quoted: `"'`,
				single_quoted: `'`,
			}[mode],
		];
	}

	static #regex_from_prefix_value_and_mode(
		prefix: Exclude<string, ''>,
		value: Exclude<string, ''>|null,
		mode: mode,
	): RegExp {
		return new RegExp(`^${
			this.regex_from_prefix_value_and_mode(prefix, value, mode)
		}$`);
	}
}
