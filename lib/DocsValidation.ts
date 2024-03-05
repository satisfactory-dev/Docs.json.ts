import Ajv, {_, KeywordCxt} from 'ajv/dist/2020';
import {default as standalone} from 'ajv/dist/standalone';

import {format_code} from './DocsTsGenerator';

import schema from "../schema/update8.schema.json" assert {type: 'json'};

const {definitions} = schema;

declare type array_tokenizer = {
	values: any[],
	current_item_buffer: '',
	current_value_nesting: number,
};

declare type object_tokenizer = {
	properties: [string, string|object|any[]][],
	mode: 'key'|'value',
	current_key_buffer: string,
	current_value_buffer: string,
	current_value_nesting: number,
};

class DefaultConfig
{
	private _ajv:Ajv|undefined;

	get ajv():Ajv
	{
		if (this._ajv) {
			return this._ajv;
		}

		const ajv = new Ajv({
			verbose: true,
		});

		configure_ajv(ajv);

		return ajv;
	}

	set ajv(ajv:Ajv)
	{
		configure_ajv(ajv);
		this._ajv = ajv;
	}
}

export const default_config = new DefaultConfig();

export function string_to_native_type(data:string): object|any[]|string|false {
	data = data.trim();
	if (/^\(.+\)$/.test(data)) {
		const object = string_to_object(data);

		return false !== object ? object : string_to_array(data);
	} else if (/^".+"$/.test(data)) {
		return data.substring(1, data.length - 1);
	}

	return data;
}

export function string_to_object<T extends object>(data:string): T|false {
	if ('' === data) {
		return false;
	}

	const match = /^\([^=]+=[^,]+(,[^=]+=(\([^)]+)\)|,[^=]+=[^,]+)*\)$/.test(data);

	if (!match) {
		return false;
	}

	return Object.fromEntries(data.substring(1, data.length - 1).split('').reduce((
		was: object_tokenizer,
		is:string,
		index: number,
		array: string[]
	): object_tokenizer => {
		let add_buffer = false;
		if ('key' === was.mode && '=' !== is) {
			add_buffer = true;
		} else if ('key' === was.mode && '=' === is) {
			was.mode = 'value';
			was.current_value_nesting = 0;
			add_buffer = false;
		} else if ('value' === was.mode) {
			add_buffer = true;
			if ('(' === is) {
				++was.current_value_nesting;
			} else if(')' === is) {
				--was.current_value_nesting;
			} else if(',' === is && 0 === was.current_value_nesting) {
				if (/^".+"$/.test(was.current_value_buffer)) {
					was.current_value_buffer = was.current_value_buffer.substring(1, was.current_value_buffer.length - 1);
				}
				const coerced_value = string_to_native_type(was.current_value_buffer);

				was.properties.push([
					was.current_key_buffer,
					false !== coerced_value ? coerced_value : was.current_value_buffer
				]);

				was.mode = 'key';
				was.current_key_buffer = '';
				was.current_value_buffer = '';
				add_buffer = false;
			}
		}

		if (add_buffer) {
			if ('key' === was.mode) {
				was.current_key_buffer += is;
			} else {
				was.current_value_buffer += is;
			}
		}

		if (index === (array.length - 1)) {
			if ('' !== was.current_key_buffer) {
				const coerced_value = string_to_native_type(was.current_value_buffer);

				was.properties.push([
					was.current_key_buffer,
					false !== coerced_value ? coerced_value : was.current_value_buffer
				]);
			}
			was.current_key_buffer = '';
			was.current_value_buffer = '';
			was.current_value_nesting = 0;
		}

		return was;
	}, {
		properties: [],
		mode: 'key',
		current_key_buffer: '',
		current_value_buffer: '',
		current_value_nesting: 0,
	}).properties) as T;
}

export function string_to_array<T extends any[]>(data:string): (T|false) {
	if (!/^\(.+\)$/.test(data)) {
		return false;
	}

	return data.substring(1, data.length - 1).split('').reduce(
		(was:array_tokenizer, is:string, index: number, array:string[]): array_tokenizer => {
			let add_buffer = true;
			let add_value = false;

			if (',' === is && 0 === was.current_value_nesting) {
				add_buffer = false;
				add_value = true;
			}

			if ('(' === is) {
				++was.current_value_nesting;
			} else if (')' === is) {
				--was.current_value_nesting;
			}

			if (add_buffer) {
				was.current_item_buffer += is;
			}
			if (add_value || (index === (array.length - 1) && '' !== was.current_item_buffer)) {
				if (/^".+"$/.test(was.current_item_buffer)) {
					was.values.push(was.current_item_buffer.substring(1, was.current_item_buffer.length - 1));
					was.current_item_buffer = '';
				} else {
					const coerced_value = string_to_native_type(was.current_item_buffer);

					was.values.push(false !== coerced_value ? coerced_value : was.current_item_buffer);

					was.current_item_buffer = '';
				}
			}

			if (index === (array.length - 1)) {
				was.current_item_buffer = '';
				was.current_value_nesting = 0;
			}

			return was;
		},
		{
			values: [],
			current_item_buffer: '',
			current_value_nesting: 0,
		}
	).values as T;
}

export function object_string(
	schema: {
		type: 'object',
		required: string[],
		properties: {[key: string]: object}
	}|{
		type: 'object',
		'$ref': string,
		unevaluatedProperties: false,
		properties: {[key: string]: object},
	},
	data: string
) {
	if ('' === data) {
		return false;
	}

	const match = /^\([^=]+=(?:(\([^)]+\))|[^,=]+)(?:,[^=,]+=[^,]+)*\)$/.test(data);

	if (!match) {
		return false;
	}

	const faux = string_to_object(data);

	const inner_validate = default_config.ajv.compile(Object.assign({}, schema, {
		"$schema": "https://json-schema.org/draft/2020-12/schema",
		definitions,
	}));

	return inner_validate(faux);
}

export const UnrealEngineString_regex = /^([^']+)'(?:"([^"]+)"|([^"]+))'$/;

class NotAnUnrealEngineString extends Error {}

export function extract_UnrealEngineString(from:string) : {
	prefix: string,
	value: string
} {
	const match = UnrealEngineString_regex.exec(from);

	if (!match) {
		throw new NotAnUnrealEngineString(`"${from}" is not an UnrealEngineString`);
	}

	return {
		prefix: match[1],
		value: match[2] || match[3],
	};
}

export function UnrealEngineString(
	schema: {
		type: string,
		pattern: string,
	}&({
		UnrealEngineString_prefix: string,
	}|{
		UnrealEngineString_prefix_pattern: string,
	}),
	data:string
) {
	let match:{prefix:string, value: string};

	try {
		match = extract_UnrealEngineString(data);
	} catch (err) {
		if (err instanceof NotAnUnrealEngineString) {
			return false;
		}

		throw err;
	}

	if ('UnrealEngineString_prefix' in schema) {
		if (match.prefix !== schema.UnrealEngineString_prefix) {
			throw new Error(
				`string was ${
					match.prefix
				}, expected ${
					schema.UnrealEngineString_prefix
				}`
			);
		}
	} else if (!(new RegExp(schema.UnrealEngineString_prefix_pattern)).test(match.prefix)) {
		throw new Error(
			`string was ${
				match.prefix
			}, expected to match ${
				schema.UnrealEngineString_prefix_pattern
			}`
		);
	}

	const {type, pattern} = schema;

	const inner_validate = default_config.ajv.compile({
		"$schema": "https://json-schema.org/draft/2020-12/schema",
		type,
		pattern
	});

	return inner_validate(match.value);
}

export type array_string_schema_type = {
	type: 'array',
	minItems?: number,
	maxItems?: number,
	prefixItems?: [object, ...object[]],
}&({items: object}|{items: false});

export function array_string(
	schema: array_string_schema_type,
	data: string
) {
	const array_of_things = string_to_array(data);

	if (false === array_of_things) {
		return false;
	}

	const inner_validate = default_config.ajv.compile(Object.assign({}, schema, {
		"$schema": "https://json-schema.org/draft/2020-12/schema",
		definitions,
	}));

	return inner_validate(array_of_things);
}

const already_configred = new WeakSet();

export function configure_ajv(ajv:Ajv): void {
	if (already_configred.has(ajv)) {
		return;
	}

	already_configred.add(ajv);

	ajv.addKeyword({
		keyword: 'array_string',
		type: 'string',
		metaSchema: {
			type: 'object',
			required: [
				'type',
			],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'array'},
				minItems: {type: 'number', minimum: 0},
				maxItems: {type: 'number', minimum: 1},
				items: {
					oneOf: [
						{type: 'boolean', const: false},
						{type: 'object'},
					],
				},
				prefixItems: {
					type: 'array',
					minItems: 1,
					items: {type: 'object'},
				},
			},
		},
		compile: (schema:{
			type: 'array',
			minItems?: number,
			maxItems?: number,
			prefixItems?: [object, ...object[]],
		}&({items: object}|{items: false})) => {
			return (data) => array_string(schema, data);
		},
		/*
		code: (ctx:KeywordCxt) => {
			const {data, schema} = ctx;

			ctx.fail(_`array_string(${schema}, ${data})`);
		},
		 */
	});

	ajv.addKeyword({
		keyword: 'object_string',
		type: 'string',
		metaSchema: {
			definitions: {
				base: {
					type: 'object',
					required: [
						'type',
						'required',
						'properties',
					],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'object'},
						required: {
							type: 'array',
							minItems: 1,
							items: {type: 'string', minLength: 1},
						},
						additionalProperties: {type: 'boolean', const: false},
						properties: {type: 'object'},
					},
				},
			},
			oneOf: [
				{'$ref': '#/definitions/base'},
				{
					type: 'object',
					required: [
						'type',
						'$ref',
						'unevaluatedProperties',
						'properties',
					],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'object'},
						'$ref': {type: 'string', minLength: 1},
						unevaluatedProperties: {type: 'boolean', const: false},
						properties: {type: 'object'},
					}
				}
			],
		},
		compile: (
			schema:{
				type: 'object',
				required: [string, ...string[]],
				properties: {[key: string]: object}
			}|{
				type: 'object',
				'$ref': string,
				unevaluatedProperties: false,
				properties: {[key: string]: object},
			}
		) => {
			return (data:string) => {
				return object_string(schema, data);
			};
		},
		/*
		code: (ctx:KeywordCxt) => {
			const {data, schema} = ctx;

			ctx.fail(_`object_string(${schema}, ${data})`);
		},
		 */
	});

	ajv.addKeyword({
		keyword: 'UnrealEngineString',
		type: 'string',
		metaSchema: {
			definitions: {
				base: {
					type: 'object',
					required: [
						'type',
						'pattern',
					],
					properties: {
						type: {type: 'string', const: 'string'},
						pattern: {type: 'string', minLength: 2},
					},
				}
			},
			oneOf: [
				{
					type: 'object',
					'$ref': '#/definitions/base',
					required: [
						'UnrealEngineString_prefix',
					],
					unevaluatedProperties: false,
					properties: {
						UnrealEngineString_prefix: {type: 'string', minLength: 1},
					},
				},
				{
					type: 'object',
					'$ref': '#/definitions/base',
					required: [
						'UnrealEngineString_prefix_pattern',
					],
					unevaluatedProperties: false,
					properties: {
						UnrealEngineString_prefix_pattern: {type: 'string', minLength: 2},
					},
				},
			],
		},
		compile: (
			schema:{
				type: 'string',
				pattern: string,
			}&({
				UnrealEngineString_prefix: string,
			}|{
				UnrealEngineString_prefix_pattern: string,
			})
		) => {
			return (data:string) => {
				return UnrealEngineString(schema, data);
			};
		},
		/*
		code: (ctx:KeywordCxt) => {
			const {data, schema} = ctx;

			ctx.fail(_`UnrealEngineString(${schema}, ${data})`);
		},
		 */
	});

	ajv.addKeyword({
		keyword: 'string_starts_with',
		type: 'string',
		metaSchema: {
			type: 'string',
			minLength: 1,
		},
		compile: (value:string) => {
			return (data:string) => data.startsWith(value);
		},
		code: (ctx:KeywordCxt) => {
			const {schema, data} = ctx;

			ctx.fail(_`!${data}.startsWith(${schema})`);
		},
	});
}
