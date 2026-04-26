import type {
	TypeScriptifyConfig,
} from '@satisfactory-dev/ajv-utilities';
import {
	typescriptify,
} from '@satisfactory-dev/ajv-utilities';

import type {
	Options,
	SchemaObject,
} from 'ajv/dist/2020.js';
import {
	Ajv2020,
} from 'ajv/dist/2020.js';

import standaloneCode from 'ajv/dist/standalone/index.js';

type schemas = {
	[key: string]: SchemaObject & {
		$id: string,
	},
};

type custom_config = (
	& TypeScriptifyConfig
	& {
		remove_dataCtxKeys: Exclude<
			TypeScriptifyConfig['remove_dataCtxKeys'],
			Extract<
				TypeScriptifyConfig['remove_dataCtxKeys'],
				string[]
			>
		>,
	}
);

export default class PrecompileValidators {
	#config: Partial<custom_config>;

	#default_remove_dataCtxKeys: Extract<
		TypeScriptifyConfig['remove_dataCtxKeys'],
		string[]
	>;

	#schemas: schemas;

	constructor(
		config: Partial<custom_config>,
		default_remove_dataCtxKeys: Extract<
			TypeScriptifyConfig['remove_dataCtxKeys'],
			string[]
		>,
		schemas: schemas,
	) {
		this.#config = config;
		this.#default_remove_dataCtxKeys = default_remove_dataCtxKeys;
		this.#schemas = schemas;
	}

	compile(
		options: Omit<Options, (
			| 'schema'
			| 'code'
		)>,
	) {
		const ajv = new Ajv2020({
			...options,
			code: {
				source: true,
				esm: true,
				lines: true,
				optimize: 2,
			},
			schemas: Object.values(this.#schemas),
		});

		const config = {
			...this.#config,
			remove_dataCtxKeys: this.#config.remove_dataCtxKeys || {},
		};

		for (const apply_default of Object.values(this.#schemas).map(({
			$id,
		}) => $id).filter((
			maybe,
		) => !(maybe in config.remove_dataCtxKeys))) {
			config.remove_dataCtxKeys[
				apply_default
			] = this.#default_remove_dataCtxKeys;
		}

		return `// oxlint-disable @stylistic/max-len${
			'\n'
		}${
			typescriptify(
				standaloneCode(
					ajv,
					Object.fromEntries(Object.entries(
						this.#schemas,
					).map(([label, {$id}]) => [label, $id])),
				),
				this.#config,
			)
		}`;
	}
}
