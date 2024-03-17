import Ajv, {_, KeywordCxt} from 'ajv/dist/2020';

import schema from '../schema/update8.schema.json' assert {type: 'json'};
import {
	UnrealEngineStringReference,
	is_UnrealEngineStringReference_value,
	UnrealEngineStringReference_inner_schema,
	UnrealEngineStringReference_schema,
} from './CustomParsingTypes/UnrealEngineStringReference';

const {definitions} = schema;

declare type array_tokenizer = {
	values: any[];
	current_item_buffer: '';
	current_value_nesting: number;
};

declare type object_tokenizer = {
	properties: [string, string | object | any[]][];
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
): object | any[] | string | false {
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
							',' === is &&
							0 === was.current_value_nesting
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

export function string_to_array<T extends any[]>(data: string): T | false {
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
					add_value ||
					(index === array.length - 1 &&
						'' !== was.current_item_buffer)
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

export function object_string(
	schema:
		| {
				type: 'object';
				required: string[];
				properties: {[key: string]: object};
		  }
		| {
				type: 'object';
				$ref: string;
				unevaluatedProperties: false;
				properties: {[key: string]: object};
		  },
	data: string
) {
	if ('' === data) {
		return false;
	}

	const match = /^\([^=]+=(?:(\([^)]+\))|[^,=]+)(?:,[^=,]+=[^,]+)*\)$/.test(
		data
	);

	if (!match) {
		return false;
	}

	performance.mark('object_string validation');
	const faux = string_to_object(data);
	performance.measure('object_string parsing', 'object_string validation');

	const inner_validate = default_config.ajv.compile(
		Object.assign({}, schema, {
			$schema: 'https://json-schema.org/draft/2020-12/schema',
			definitions,
		})
	);

	performance.mark('object_string ajv validation');
	const result = inner_validate(faux);
	performance.measure(
		'object_string ajv validation',
		'object_string validation'
	);

	return result;
}

export type array_string_schema_type = {
	type: 'array';
	minItems?: number;
	maxItems?: number;
	prefixItems?: [object, ...object[]];
} & ({items: object} | {items: false});

export function array_string(schema: array_string_schema_type, data: string) {
	performance.mark('array_string validation');
	const array_of_things = string_to_array(data);
	performance.measure('array_string parsing', 'array_string validation');

	if (false === array_of_things) {
		return false;
	}

	const inner_validate = default_config.ajv.compile(
		Object.assign({}, schema, {
			$schema: 'https://json-schema.org/draft/2020-12/schema',
			definitions,
		})
	);

	performance.mark('array_string ajv validation');
	const result = inner_validate(array_of_things);
	performance.measure(
		'array_string ajv validation',
		'array_string validation'
	);

	return result;
}

const already_configured = new WeakSet();

export function configure_ajv(ajv: Ajv): void {
	if (already_configured.has(ajv)) {
		return;
	}

	already_configured.add(ajv);

	ajv.addKeyword({
		keyword: 'array_string',
		type: 'string',
		metaSchema: {
			type: 'object',
			required: ['type'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'array'},
				minItems: {type: 'number', minimum: 0},
				maxItems: {type: 'number', minimum: 1},
				items: {
					oneOf: [{type: 'boolean', const: false}, {type: 'object'}],
				},
				prefixItems: {
					type: 'array',
					minItems: 1,
					items: {type: 'object'},
				},
			},
		},
		compile: (
			schema: {
				type: 'array';
				minItems?: number;
				maxItems?: number;
				prefixItems?: [object, ...object[]];
			} & ({items: object} | {items: false})
		) => {
			return (data) => array_string(schema, data);
		},
		/*
		code: (ctx:KeywordCxt) => {
			const {data, schema} = ctx;

			ctx.pass(_`array_string(${schema}, ${data})`);
		},
		*/
	});

	const typed_object_string_property_regex = '^[A-Za-z][A-Za-z]*$';

	const type_object_string_$ref_supported = {
		'#/definitions/EditorCurveData--item': true,
		'#/definitions/InfinityExtrap': true,
		'#/definitions/empty-object': true,
		'#/definitions/decimal-string': true,
		'#/definitions/decimal-string--signed': true,
		'#/definitions/integer-string': true,
		'#/definitions/integer-string--signed': true,
		'#/definitions/boolean': true,
	};
	const type_object_string_$ref_supported_array = Object.keys(
		type_object_string_$ref_supported
	) as (keyof typeof type_object_string_$ref_supported)[];

	type type_object_string_$ref_choices = {
		$ref: keyof typeof type_object_string_$ref_supported;
	};

	type typed_object_string_$ref_only = {
		[key: string]: type_object_string_$ref_choices;
	};

	type typed_object_string_type = {
		[key: string]:
			| type_object_string_$ref_choices
			| typed_object_string_$ref_only;
	};

	const typed_object_string_$ref_schema = {
		type: 'object',
		required: ['$ref'],
		additionalProperties: false,
		properties: {
			$ref: {
				oneOf: [
					{
						type: 'string',
						const: '#/definitions/EditorCurveData--item',
					},
					{
						type: 'string',
						const: '#/definitions/InfinityExtrap',
					},
					{
						type: 'string',
						const: '#/definitions/empty-object',
					},
					{
						type: 'string',
						const: '#/definitions/decimal-string',
					},
					{
						type: 'string',
						const: '#/definitions/decimal-string--signed',
					},
					{
						type: 'string',
						const: '#/definitions/integer-string',
					},
					{
						type: 'string',
						const: '#/definitions/integer-string--signed',
					},
					{
						type: 'string',
						const: '#/definitions/boolean',
					},
				],
			},
		},
	};

	function typed_object_string_$ref_to_regex(
		property: string,
		value: type_object_string_$ref_choices
	): string {
		const {$ref} = value;

		let value_regex = '(?:True|False)';

		if ('#/definitions/InfinityExtrap' === $ref) {
			value_regex = 'RCCE_Constant';
		} else if ('#/definitions/empty-object' === $ref) {
			value_regex = '\\(\\)';
		} else if ('#/definitions/EditorCurveData--item' === $ref) {
			if (
				!is_$ref_object_dictionary(
					schema.definitions['EditorCurveData--item']
				)
			) {
				throw new Error(`${$ref} not supported!`);
			}

			value_regex = typed_object_string_property_to_regex(
				schema.definitions['EditorCurveData--item']
			);
		} else if ('#/definitions/boolean' !== $ref) {
			if ($ref === undefined) {
				console.log(property, value);

				throw new Error('foo');
			}
			if ($ref.startsWith('#/definitions/decimal-string')) {
				value_regex = '\\d+\\.\\d+';
			} else {
				value_regex = '\\d+';
			}

			if ($ref.endsWith('--signed')) {
				value_regex = `-?${value_regex}`;
			}
		}

		return `${property}=${value_regex}`;
	}

	function keys_are_$ref_only(keys: string[]): keys is ['$ref'] {
		return 1 === keys.length && keys.includes('$ref');
	}

	function is_$ref_object(maybe: {
		[key: string]: any;
	}): maybe is type_object_string_$ref_choices {
		return (
			keys_are_$ref_only(Object.keys(maybe)) &&
			type_object_string_$ref_supported_array.includes(maybe.$ref)
		);
	}

	function is_$ref_object_dictionary(maybe: {
		[key: string]: {[key: string]: string};
	}): maybe is {[key: string]: type_object_string_$ref_choices} {
		for (const sub_object of Object.values(maybe)) {
			if (!is_$ref_object(sub_object)) {
				return false;
			}
		}

		return 0 !== Object.keys(maybe).length;
	}

	function typed_object_string_property_to_regex(
		data: typed_object_string_type
	): string {
		return `\\(${Object.entries(data)
			.map((entry) => {
				if (is_$ref_object(entry[1])) {
					return typed_object_string_$ref_to_regex(
						entry[0],
						entry[1]
					);
				}

				if (
					'UnrealEngineStringReference--inner' in entry[1] &&
					is_UnrealEngineStringReference_value(
						entry[1]['UnrealEngineStringReference--inner']
					)
				) {
					return `${entry[0]}=${
						UnrealEngineStringReference.ajv_macro_generator(true)(
							entry[1]['UnrealEngineStringReference--inner']
						).pattern
					}`;
				} else if ('UnrealEngineStringReference--inner' in entry[1]) {
					console.error(entry[0], entry[1]);
					throw new Error(
						'Not a UnrealEngineStringReference--inner'
					);
				}

				return `${entry[0]}=\\(${Object.entries(entry[1])
					.map((sub_entry) => {
						const [sub_property, sub_value] = sub_entry;

						return typed_object_string_$ref_to_regex(
							sub_property,
							sub_value
						);
					})
					.join(',')}\\)`;
			})
			.join(',')}\\)`;
	}

	ajv.addKeyword({
		keyword: 'typed_object_string',
		type: 'string',
		metaSchema: {
			type: 'object',
			additionalProperties: false,
			definitions: UnrealEngineStringReference_schema.definitions,
			patternProperties: {
				[typed_object_string_property_regex]: {
					oneOf: [
						typed_object_string_$ref_schema,
						{
							type: 'object',
							additionalProperties: false,
							patternProperties: {
								[typed_object_string_property_regex]:
									typed_object_string_$ref_schema,
							},
						},
						UnrealEngineStringReference_inner_schema,
					],
				},
			},
		},
		macro: (schema: typed_object_string_type) => {
			const pattern = `^${typed_object_string_property_to_regex(
				schema
			)}$`;

			return {pattern};
		},
	});

	ajv.addKeyword({
		keyword: 'object_string',
		type: 'string',
		metaSchema: {
			definitions: {
				base: {
					type: 'object',
					required: ['type', 'required', 'properties'],
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
				{$ref: '#/definitions/base'},
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
						$ref: {type: 'string', minLength: 1},
						unevaluatedProperties: {type: 'boolean', const: false},
						properties: {type: 'object'},
					},
				},
			],
		},
		compile: (
			schema:
				| {
						type: 'object';
						required: [string, ...string[]];
						properties: {[key: string]: object};
				  }
				| {
						type: 'object';
						$ref: string;
						unevaluatedProperties: false;
						properties: {[key: string]: object};
				  }
		) => {
			return (data: string) => {
				return object_string(schema, data);
			};
		},
		/*
		code: (ctx:KeywordCxt) => {
			const {data, schema} = ctx;

			ctx.pass(_`object_string(${schema}, ${data})`);
		},
		*/
	});

	UnrealEngineStringReference.configure_ajv(ajv);

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
			const {schema, data} = ctx;

			ctx.pass(_`${data}.startsWith(${schema})`);
		},
	});
}
