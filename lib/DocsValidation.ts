import Ajv from 'ajv/dist/2020';
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

export function string_to_object(data:string): object|false {
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
	}).properties);
}

export function string_to_array(data:string): (any[]|false) {
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
	).values;
}

export function object_string(
	schema: {
		type: 'object',
		required: string[],
		properties: {[key: string]: object}
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
	const inner_match = /^([^']+)'(?:"([^"]+)"|([^"]+))'$/.exec(data);

	if (!inner_match) {
		return false;
	}

	if ('UnrealEngineString_prefix' in schema) {
		if (inner_match[1] !== schema.UnrealEngineString_prefix) {
			throw new Error(
				`string was ${
					inner_match[1]
				}, expected ${
					schema.UnrealEngineString_prefix
				}`
			);
		}
	} else if (!(new RegExp(schema.UnrealEngineString_prefix_pattern)).test(inner_match[1])) {
		throw new Error(
			`string was ${
				inner_match[1]
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

	return inner_validate(inner_match[2] || inner_match[3]);
}

export function array_string(
	schema: {
		type: 'array',
		minItems?: number,
		maxItems?: number,
		prefixItems?: object[],
	}&({items: object}|{items: false}),
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

export function quick_string(_schema:string, _data:string) {
	return true;
}

export function configure_ajv(ajv:Ajv): void {
	ajv.addKeyword({
		keyword: 'array_string',
		validate: array_string,
	});

	ajv.addKeyword({
		keyword: 'object_string',
		validate: object_string,
	});

	ajv.addKeyword({
		keyword: 'UnrealEngineString',
		validate: UnrealEngineString,
	});

	ajv.addKeyword({
		keyword: 'UnrealEngineString_prefix',
		validate: quick_string,
	});
	ajv.addKeyword({
		keyword: 'UnrealEngineString_prefix_pattern',
		validate: quick_string,
	});
	ajv.addKeyword({
		keyword: 'string_starts_with',
		type: 'string',
		compile: (value:string) => {
			return (data:string) => data.startsWith(value);
		},
		metaSchema: {
			type: 'string',
			minLength: 1,
		},
	});
}
