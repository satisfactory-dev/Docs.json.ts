import type {
	SchemalessTypeOptions,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$defs_schema,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	TemplatedStringParts,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import type {
} from 'regexp.escape/auto';

import {
	PrefixedString_base,
} from '../0.3.7.7/PrefixedString.ts';

import type {
	mode,
} from '../0.3.7.7/PrefixedString.ts';

import type {
	PrefixedString_base_schema as PrefixedString_base_schema__update6,
	PrefixedString_base_type as PrefixedString_base_type__update6,
} from '../0.6.1.5/PrefixedString.ts';

export type system_prefix = (
	| 'Engine'
	| 'TemplateSequence'
	| 'FactoryGame'
	| 'AkAudio'
	| 'CoreUObject'
);

type version_specific_prefix<
	SystemPrefix extends system_prefix = system_prefix,
> = `/Script/${SystemPrefix}.`;

export type PrefixedString_base_type<
	Mode extends string = string,
	SystemPrefix extends string = string,
> = (
	& PrefixedString_base_type__update6<Mode>
	& {
		DocsDotJson_PrefixedString: (
			& PrefixedString_base_type__update6<
				Mode
			>['DocsDotJson_PrefixedString']
			& {
				system_prefix?: (
					| Exclude<SystemPrefix, 'Engine'>
					| false
				),
				root_path?: Exclude<string, ''>,
			}
		),
	}
);

export type PrefixedString_type<
	Mode extends mode = mode,
	SystemPrefix extends system_prefix = system_prefix,
> = PrefixedString_base_type<Mode, SystemPrefix>;

export type PrefixedString_base_schema<
	Mode extends string,
	SystemPrefix extends string = string,
> = (
	& PrefixedString_base_schema__update6<Mode>
	& {
		properties: (
			& PrefixedString_base_schema__update6<Mode>['properties']
			& {
				DocsDotJson_PrefixedString: (
					& PrefixedString_base_schema__update6<
						Mode
					>['properties']['DocsDotJson_PrefixedString']
					& {
						properties: (
							& PrefixedString_base_schema__update6<
								Mode
							>[
								'properties'
							][
								'DocsDotJson_PrefixedString'
							][
								'properties'
							]
							& {
								system_prefix: {
									oneOf: [
										{
											type: 'string',
											const: SystemPrefix,
										},
										{
											type: 'boolean',
											const: false,
										},
									],
								},
								root_path: {
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
	SystemPrefix extends system_prefix = system_prefix,
> = PrefixedString_base_schema<Mode, SystemPrefix>;

export type PrefixedString_value_type<
	Prefix extends Exclude<string, ''>,
	SystemPrefix extends system_prefix,
	FirstPath extends Exclude<string, ''>,
	RootPath extends Exclude<string, ''>,
> = {
			quoted: `${
				version_specific_prefix<SystemPrefix>
			}${
				Prefix
	}'"/${RootPath}/${FirstPath}/${
				string
			}"'`,
			single_quoted: `${
				version_specific_prefix<SystemPrefix>
	}${Prefix}'/${RootPath}/${FirstPath}/${
				string
			}'`,
			non_quoted: `${
				version_specific_prefix<SystemPrefix>
	}${Prefix} /${RootPath}/${FirstPath}/${
				string
			}`,
};

export class PrefixedString<
	Mode extends mode,
	Prefix extends Exclude<string, ''>,
	SystemPrefix extends system_prefix,
	VersionSpecificDefaultMode extends Exclude<
		mode,
		'version_specific_default'
	>,
	FirstPath extends Exclude<string, ''> = 'FactoryGame',
	RootPath extends Exclude<string, ''> = 'Game',
> extends PrefixedString_base<
		Mode,
		(
			& PrefixedString_value_type<
				Prefix,
				SystemPrefix,
				FirstPath,
				RootPath
			>
			& {
				version_specific_default: PrefixedString_value_type<
					Prefix,
					SystemPrefix,
					FirstPath,
					RootPath
				>[VersionSpecificDefaultMode],
			}
		),
		{
			mode: Mode,
			system_prefix: SystemPrefix,
		},
		PrefixedString_type<Mode>,
		PrefixedString_schema<Mode>,
		VersionSpecificDefaultMode
	> {
	constructor(
		options: SchemalessTypeOptions,
		mode: Mode,
		system_prefix: SystemPrefix,
		version_specific_default: VersionSpecificDefaultMode,
	) {
		super(
			options,
			{mode, system_prefix},
			version_specific_default,
			({
				prefix,
				value,
				mode,
				first_path,
				root_path,
				system_prefix,
			}) => {
				if (undefined === system_prefix && 'non_quoted' === mode) {
					system_prefix = false;
				}

				return PrefixedString.#regex_from_prefix_value_and_mode(
					prefix,
					value,
					mode,
					first_path,
					root_path,
					false === system_prefix
						? system_prefix
						: (system_prefix || 'Engine'),
					version_specific_default,
				);
			},
		);
	}

	protected TemplatedStringParts_by_value({
		prefix,
		mode,
		value,
		first_path,
		root_path,
		system_prefix,
	}: PrefixedString_type<
		Mode
	>['DocsDotJson_PrefixedString']): TemplatedStringParts {
		let version_specific_prefix = `/Script/${
			system_prefix || 'Engine'
		}.`;

		if (false === system_prefix) {
			version_specific_prefix = '';
		}

		if (undefined === system_prefix && 'non_quoted' === mode) {
			version_specific_prefix = '';
		}

		const head = {
				non_quoted: `${
					version_specific_prefix
			}${prefix} /${
					root_path || 'Game'
			}/${
					first_path
					|| 'FactoryGame'
				}`,
				quoted: `${
					version_specific_prefix
			}${prefix}'"/${
				root_path || 'Game'
			}/${
					first_path
					|| 'FactoryGame'
				}`,
				single_quoted: `${
					version_specific_prefix
			}${prefix}'/${
				root_path || 'Game'
			}/${
					first_path
					|| 'FactoryGame'
				}`,
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
		SystemPrefix extends system_prefix,
	>({
		mode,
		system_prefix,
	}: {
		mode: Mode,
		system_prefix: SystemPrefix,
	}): Readonly<PrefixedString_schema<Mode, SystemPrefix>> {
		const result: PrefixedString_schema<Mode, SystemPrefix> = {
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
						root_path: {
							type: 'string',
							minLength: 1,
						},
						system_prefix: {
							oneOf: [
								{
									type: 'string',
									const: system_prefix,
								},
								{
									type: 'boolean',
									const: false,
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
		first_path: Exclude<string, ''>|undefined,
		root_path: Exclude<string, ''>|undefined,
		version_specific_prefix: (
			| version_specific_prefix
			| false
		),
		version_specific_default: Exclude<mode, 'version_specific_default'>,
	): string {
		const use_mode = mode === 'version_specific_default'
			? version_specific_default
			: mode;

		let start_parts = [
			RegExp.escape({
				quoted: `${prefix_string}'"`,
				single_quoted: `${prefix_string}'`,
				non_quoted: `${prefix_string} `,
			}[use_mode]),
		];

		if (false !== version_specific_prefix) {
			start_parts = [
				RegExp.escape(`${version_specific_prefix}`),
				...start_parts,
			];
		}

		const start = start_parts.join('');

		if (null !== value) {
			const escaped = RegExp.escape(value);
			if ('quoted' === mode) {
				return `${start}${escaped}"'`;
			}

			return `${start}${escaped}`;
		}

		const prefix = RegExp.escape(`/${
			root_path || 'Game'
		}/${
			first_path || 'FactoryGame'
		}`);
		const suffix = RegExp.escape({
			quoted: `"'`,
			single_quoted: `'`,
			non_quoted: '',
		}[use_mode]);

		if ('quoted' === mode) {
			return `${
				start
			}${
				prefix
			}(?:[^\\/_,]+\\/)*[^.",]*\\.[^.",]+${
				suffix
			}`;
		}

		return `${
			start
		}${
			prefix
		}(?:[^\\/_,]+\\/)*[^.,]*\\.[^.,]+${
			suffix
		}`;
	}

	static #regex_from_prefix_value_and_mode(
		prefix: Exclude<string, ''>,
		value: Exclude<string, ''>|null,
		mode: mode,
		first_path: Exclude<string, ''>|undefined,
		root_path: Exclude<string, ''>|undefined,
		system_prefix: (
			| system_prefix
			| false
		),
		version_specific_default: Exclude<mode, 'version_specific_default'>,
	): RegExp {
		return new RegExp(`^${
			this.regex_from_prefix_value_and_mode(
				prefix,
				value,
				mode,
				first_path,
				root_path,
				false === system_prefix
					? system_prefix
					: `/Script/${system_prefix}.`,
				version_specific_default,
			)
		}$`);
	}
}
