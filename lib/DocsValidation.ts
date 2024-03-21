import Ajv, {
	_, KeywordCxt,
} from 'ajv/dist/2020';
import {
	UnrealEngineStringReference,
} from './CustomParsingTypes/UnrealEngineStringReference';
import {
	TypedObjectString,
} from './CustomParsingTypes/TypedObjectString';
import {
	TypedArrayString,
} from './CustomParsingTypes/TypedArrayString';
import {
	object_has_property,
} from './CustomParsingTypes/CustomPairingTypes';

declare type array_tokenizer = {
	values: unknown[];
	current_item_buffer: '';
	current_value_nesting: number;
};

declare type object_tokenizer = {
	properties: [string, string | object | unknown[]][];
	mode: 'key' | 'value';
	current_key_buffer: string;
	current_value_buffer: string;
	current_value_nesting: number;
};

class DefaultConfig {
	private _ajv: Ajv | undefined;

	get ajv(): Ajv {
		if (this._ajv) {
			return this._ajv;
		}

		const ajv = new Ajv({
			verbose: true,
		});

		configure_ajv(ajv);

		return ajv;
	}

	set ajv(ajv: Ajv) {
		configure_ajv(ajv);
		this._ajv = ajv;
	}
}

export const default_config = new DefaultConfig();

export function string_to_native_type(
	data: string
): object | unknown[] | string | false {
	data = data.trim();
	if (/^\(.+\)$/.test(data)) {
		const object = string_to_object(data);

		return false !== object ? object : string_to_array(data);
	} else if (/^".+"$/.test(data)) {
		return data.substring(1, data.length - 1);
	}

	return data;
}

export function string_to_object<T extends object>(data: string): T | false {
	if ('' === data) {
		return false;
	}

	const match = /^\([^=]+=[^,]+(,[^=]+=(\([^)]+)\)|,[^=]+=[^,]+)*\)$/.test(
		data
	);

	if (!match) {
		return false;
	}

	return Object.fromEntries(
		data
			.substring(1, data.length - 1)
			.split('')
			.reduce(
				(
					was: object_tokenizer,
					is: string,
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
						} else if (')' === is) {
							--was.current_value_nesting;
						} else if (
							',' === is
							&& 0 === was.current_value_nesting
						) {
							if (/^".+"$/.test(was.current_value_buffer)) {
								was.current_value_buffer =
									was.current_value_buffer.substring(
										1,
										was.current_value_buffer.length - 1
									);
							}
							const coerced_value = string_to_native_type(
								was.current_value_buffer
							);

							was.properties.push([
								was.current_key_buffer,
								false !== coerced_value
									? coerced_value
									: was.current_value_buffer,
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

					if (index === array.length - 1) {
						if ('' !== was.current_key_buffer) {
							const coerced_value = string_to_native_type(
								was.current_value_buffer
							);

							was.properties.push([
								was.current_key_buffer,
								false !== coerced_value
									? coerced_value
									: was.current_value_buffer,
							]);
						}
						was.current_key_buffer = '';
						was.current_value_buffer = '';
						was.current_value_nesting = 0;
					}

					return was;
				},
				{
					properties: [],
					mode: 'key',
					current_key_buffer: '',
					current_value_buffer: '',
					current_value_nesting: 0,
				}
			).properties
	) as T;
}

export function string_to_array<T extends unknown[]>(data: string): T | false {
	if (!/^\(.+\)$/.test(data)) {
		return false;
	}

	return data
		.substring(1, data.length - 1)
		.split('')
		.reduce(
			(
				was: array_tokenizer,
				is: string,
				index: number,
				array: string[]
			): array_tokenizer => {
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
				if (
					add_value
					|| (
						index === array.length - 1
						&& '' !== was.current_item_buffer
					)
				) {
					if (/^".+"$/.test(was.current_item_buffer)) {
						was.values.push(
							was.current_item_buffer.substring(
								1,
								was.current_item_buffer.length - 1
							)
						);
						was.current_item_buffer = '';
					} else {
						const coerced_value = string_to_native_type(
							was.current_item_buffer
						);

						was.values.push(
							false !== coerced_value
								? coerced_value
								: was.current_item_buffer
						);

						was.current_item_buffer = '';
					}
				}

				if (index === array.length - 1) {
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

const already_configured = new WeakSet();

export function configure_ajv(ajv: Ajv): void {
	if (already_configured.has(ajv)) {
		return;
	}

	already_configured.add(ajv);

	TypedObjectString.configure_ajv(ajv);
	UnrealEngineStringReference.configure_ajv(ajv);
	TypedArrayString.configure_ajv(ajv);

	ajv.addKeyword({
		keyword: 'string_starts_with',
		type: 'string',
		metaSchema: {
			type: 'string',
			minLength: 1,
		},
		compile: (value: string) => {
			return (data: string) => data.startsWith(value);
		},
		code: (ctx: KeywordCxt) => {
			if (!object_has_property(ctx, 'schema', (maybe:unknown): maybe is string => 'string' === typeof maybe)) {
				throw new Error(`ctx.schema was not a string, ${typeof ctx.schema} found!`);
			}

			const {data} = ctx;

			ctx.pass(_`${data}.startsWith(${ctx.schema})`);
		},
	});
}
