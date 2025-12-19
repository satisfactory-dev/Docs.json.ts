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

import {
	factory,
	type StringLiteral,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import type {
} from 'regexp.escape/auto';

export type mode = (
	| 'quoted'
	| 'non_quoted'
	| 'single_quoted'
	| 'version_specific_default'
);

export type PrefixedString_base_type<
	Mode extends string = string,
> = {
	type: 'string',
	DocsDotJson_PrefixedString: {
		prefix: string,
		mode: Mode,
		value: string|null,
	},
};

export type PrefixedString_type<
	Mode extends mode = mode,
> = PrefixedString_base_type<Mode>;

export type PrefixedString_base_schema<
	Mode extends string,
> = SchemaDefinitionDefinition<
	['type', 'DocsDotJson_PrefixedString'],
	{
		$defs: (typeof $defs_schema)['properties']['$defs'],
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
					const: Mode,
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
	}
>;

type PrefixedString_schema<
	Mode extends mode,
> = PrefixedString_base_schema<Mode>;

export abstract class PrefixedString_base<
	Mode extends string,
	T_by_mode extends {[key in Mode]: string},
	SpecificOptions extends {mode: Mode},
	Type extends PrefixedString_base_type<Mode>,
	Schema extends PrefixedString_base_schema<Mode>,
	VersionSpecificDefaultMode extends Exclude<
		string,
		'version_specific_default'
	>,
> extends KeywordType<
		T_by_mode[Mode],
		Type,
		SpecificOptions,
		Schema,
		SpecificOptions
	> {
	#regex_from_instance: (
		instance: Type['DocsDotJson_PrefixedString'],
	) => RegExp;

	protected version_specific_default: VersionSpecificDefaultMode;

	constructor(
		options: SchemalessTypeOptions,
		specific_options: SpecificOptions,
		version_specific_default: VersionSpecificDefaultMode,
		regex_from_instance: (
			instance: Type['DocsDotJson_PrefixedString'],
		) => RegExp,
	) {
		super(
			{
				...options,
				ajv_keyword: {
					keyword: 'DocsDotJson_PrefixedString',
					type: 'string',
					macro: (
						instance: Type['DocsDotJson_PrefixedString'],
					) => {
						let pattern = regex_from_instance(instance).toString();

						if (pattern.startsWith('/') && pattern.endsWith('/')) {
							pattern = pattern.substring(1, pattern.length - 1);
						}

						return {
							pattern,
						};
					},
				},
				type_definition: specific_options,
				schema_definition: specific_options,
				add_to_$defs_excluded: true,
			},
		);

		this.#regex_from_instance = regex_from_instance;
		this.version_specific_default = version_specific_default;
	}

	generate_typescript_data(
		data: T_by_mode[Mode],
		schema_parser: SchemaParser,
		instance: Type,
	): StringLiteral {
		const regex = this.#regex_from_instance(
			instance.DocsDotJson_PrefixedString,
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
		schema: Type,
	}): Promise<TemplateLiteralTypeNode> {
		return Promise.resolve(
			TemplatedString.generate_typescript_type_from_parts(
				this.TemplatedStringParts_by_value(
					schema.DocsDotJson_PrefixedString,
				),
			),
		);
	}

	protected abstract TemplatedStringParts_by_value(
		value: Type['DocsDotJson_PrefixedString'],
	): TemplatedStringParts;
}

export type PrefixedString_value_type<
	Prefix extends Exclude<string, ''>,
> = {
	quoted: `${Prefix}'"/Game/FactoryGame/${
		string
	}"'`,
	single_quoted: `${Prefix}'/Game/FactoryGame/${
		string
	}'`,
	non_quoted: `${Prefix} /Game/FactoryGame/${
		string
	}`,
};

export class PrefixedString<
	Mode extends mode,
	Prefix extends Exclude<string, ''>,
	VersionSpecificDefaultMode extends Exclude<
		mode,
		'version_specific_default'
	>,
> extends PrefixedString_base<
		Mode,
		(
			& PrefixedString_value_type<Prefix>
			& {
				version_specific_default: PrefixedString_value_type<
					Prefix
				>[VersionSpecificDefaultMode],
			}
		),
		{mode: Mode},
		PrefixedString_type<Mode>,
		PrefixedString_schema<Mode>,
		VersionSpecificDefaultMode
	> {
	constructor(
		options: SchemalessTypeOptions,
		mode: Mode,
		version_specific_default: VersionSpecificDefaultMode,
	) {
		super(
			options,
			{mode},
			version_specific_default,
			({
				prefix,
				value,
				mode,
			}) => PrefixedString.#regex_from_prefix_value_and_mode(
				prefix,
				value,
				mode,
				version_specific_default,
			),
		);

		this.version_specific_default = version_specific_default;
	}

	protected TemplatedStringParts_by_value({
		prefix,
		mode,
		value,
	}: PrefixedString_type<
		Mode
	>['DocsDotJson_PrefixedString']): TemplatedStringParts {
		const head = {
				non_quoted: `${prefix} /Game/FactoryGame/`,
				quoted: `${prefix}'"/Game/FactoryGame/`,
				single_quoted: `${prefix}'/Game/FactoryGame/`,
			version_specific_default: '',
		};

		const tail = {
				non_quoted: '',
				quoted: `"'`,
				single_quoted: `'`,
				version_specific_default: '',
		};

		head[
			'version_specific_default'
		] = head[
			this.version_specific_default
		];
		tail[
			'version_specific_default'
		] = tail[
			this.version_specific_default
		];

		return [
			head[mode],
			null === value ? {type: 'string', minLength: 1} : value,
			tail[mode],
		];
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
		prefix_string: Exclude<string, ''>|undefined,
		value: Exclude<string, ''>|null,
		mode: mode,
		version_specific_default: Exclude<mode, 'version_specific_default'>,
	): string {
		let start: string;

		if (prefix_string) {
			start = RegExp.escape({
				quoted: `${prefix_string}'"`,
				single_quoted: `${prefix_string}'`,
				non_quoted: `${prefix_string} `,
			}[
				mode === 'version_specific_default'
					? version_specific_default
					: mode
			]);
		} else {
			start = {
				quoted: `[^'"]+'"`,
				single_quoted: `[^']+'`,
				non_quoted: '[^ ]+ ',
			}[
				mode === 'version_specific_default'
					? version_specific_default
					: mode
			];
		}


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
		}[
			mode === 'version_specific_default'
				? version_specific_default
				: mode
		]);

		if ('quoted' === mode) {
			return `${start}${prefix}(?:[^\\/_]+\\/)*[^."]+\\.[^."]+${suffix}`;
		}

		return `${start}${prefix}(?:[^\\/_]+\\/)*[^.]+\\.[^.]+${suffix}`;
	}

	static TemplatedStringParts_by_value(
		prefix: Exclude<string, ''>,
		mode: mode,
		version_specific_default: Exclude<mode, 'version_specific_default'>,
		value: Exclude<string, ''>|null,
	): TemplatedStringParts {
		return [
			{
				non_quoted: `${prefix} /Game/FactoryGame/`,
				quoted: `${prefix}'"/Game/FactoryGame/`,
				single_quoted: `${prefix}'/Game/FactoryGame/`,
			}[
				mode === 'version_specific_default'
					? version_specific_default
					: mode
			],
			null === value ? {type: 'string'} : value,
			{
				non_quoted: '',
				quoted: `"'`,
				single_quoted: `'`,
			}[
				mode === 'version_specific_default'
					? version_specific_default
					: mode
			],
		];
	}

	static #regex_from_prefix_value_and_mode(
		prefix: Exclude<string, ''>,
		value: Exclude<string, ''>|null,
		mode: mode,
		version_specific_default: Exclude<mode, 'version_specific_default'>,
	): RegExp {
		return new RegExp(`^${
			this.regex_from_prefix_value_and_mode(
				prefix,
				value,
				mode,
				version_specific_default,
			)
		}$`);
	}
}
