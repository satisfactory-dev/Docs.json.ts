import type {
	SchemalessTypeOptions,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$defs_schema,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	TemplatedStringParts,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import {
	PrefixedString_base,
	type PrefixedString_base_schema as PrefixedString_base_schema__update3,
	type PrefixedString_base_type as PrefixedString_base_type__update3,
} from '../0.3.7.7/PrefixedString.ts';

import type {
	mode,
} from '../0.3.7.7/PrefixedString.ts';

export type PrefixedString_base_type<
	Mode extends string = string,
> = (
	& PrefixedString_base_type__update3<Mode>
	& {
		DocsDotJson_PrefixedString: (
			& PrefixedString_base_type__update3<
				Mode
			>['DocsDotJson_PrefixedString']
			& {
				first_path?: Exclude<string, ''>,
			}
		),
	}
);

export type PrefixedString_type<
	Mode extends mode = mode,
> = PrefixedString_base_type<Mode>;

export type PrefixedString_base_schema<
	Mode extends string,
> = (
	& PrefixedString_base_schema__update3<Mode>
	& {
		properties: (
			& PrefixedString_base_schema__update3<Mode>['properties']
			& {
				DocsDotJson_PrefixedString: (
					& PrefixedString_base_schema__update3<
						Mode
					>['properties']['DocsDotJson_PrefixedString']
					& {
						properties: (
							& PrefixedString_base_schema__update3<
								Mode
							>[
								'properties'
							][
								'DocsDotJson_PrefixedString'
							][
								'properties'
							]
							& {
								first_path: {
									type: 'string',
									minLength: 1,
								},
							}
						),
					}
				),
			}
		),
	}
);

type PrefixedString_schema<
	Mode extends mode,
> = PrefixedString_base_schema<Mode>;

export type PrefixedString_value_type<
	Prefix extends Exclude<string, ''>,
	FirstPath extends Exclude<string, ''>,
> = {
	quoted: `${Prefix}'"/Game/${FirstPath}/${
		string
	}"'`,
	single_quoted: `${Prefix}'/Game/${FirstPath}/${
		string
	}'`,
	non_quoted: `${Prefix} /Game/${FirstPath}/${
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
	FirstPath extends Exclude<string, ''> = 'FactoryGame',
> extends PrefixedString_base<
		Mode,
		(
			& PrefixedString_value_type<Prefix, FirstPath>
			& {
				version_specific_default: PrefixedString_value_type<
					Prefix,
					FirstPath
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
				first_path,
			}) => PrefixedString.#regex_from_prefix_value_and_mode(
				prefix,
				value,
				mode,
				version_specific_default,
				first_path,
			),
		);
	}

	protected TemplatedStringParts_by_value({
		prefix,
		mode,
		value,
		first_path,
	}: PrefixedString_type<
		Mode
	>['DocsDotJson_PrefixedString']): TemplatedStringParts {
		const head = {
			non_quoted: `${prefix} /Game/${first_path || 'FactoryGame'}/`,
			quoted: `${prefix}'"/Game/${first_path || 'FactoryGame'}/`,
			single_quoted: `${
				prefix
			}'/Game/${
				first_path
				|| 'FactoryGame'
			}/`,
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
		] = head[this.version_specific_default];
		tail[
			'version_specific_default'
		] = tail[this.version_specific_default];

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
						first_path: {
							type: 'string',
							minLength: 1,
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
		version_specific_default: Exclude<mode, 'version_specific_default'>,
		first_path?: Exclude<string, ''>,
	): string {
		const start = RegExp.escape({
			quoted: `${prefix_string}'"`,
			single_quoted: `${prefix_string}'`,
			non_quoted: `${prefix_string} `,
		}[
			mode === 'version_specific_default'
				? version_specific_default
				: mode
		]);


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

	static #regex_from_prefix_value_and_mode(
		prefix: Exclude<string, ''>,
		value: Exclude<string, ''>|null,
		mode: mode,
		version_specific_default: Exclude<mode, 'version_specific_default'>,
		first_path?: Exclude<string, ''>,
	): RegExp {
		return new RegExp(`^${
			this.regex_from_prefix_value_and_mode(
				prefix,
				value,
				mode,
				version_specific_default,
				first_path,
			)
		}$`);
	}
}
