import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	array_options,
	object_schema,
	SchemaDefinitionDefinition,
	SchemalessTypeOptions,
	SchemaParser,
	TypeDefinitionSchema,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	ArrayType,
	ObjectUnspecified,
	PositiveIntegerGuard,
	PositiveIntegerOrZeroGuard,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	KeywordType,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import type {
	BlueprintGeneratedClass_quoted_schema,
} from './BlueprintGeneratedClass.ts';
import {
	BlueprintGeneratedClass_quoted,
} from './BlueprintGeneratedClass.ts';

import type {
	FGTrainPlatformConnection_quoted_schema,
} from './FGTrainPlatformConnection.ts';
import {
	FGTrainPlatformConnection,
} from './FGTrainPlatformConnection.ts';

import type {
	Empty_DataTo,
	Empty_properties,
	Empty_SchemaTo,
	Empty_type,
	Empty_TypeGenerator,
} from './TypedString/Empty.ts';
import {
	Empty_compile_vaildator,
	Empty_generate_typescript_data,
	Empty_generate_typescript_type,
} from './TypedString/Empty.ts';

import type {
	None_DataTo,
	None_properties,
	None_SchemaTo,
	None_type,
	None_TypeGenerator,
} from './TypedString/None.ts';
import {
	None_compile_validator,
	None_generate_typescript_data,
	None_generate_typescript_type,
} from './TypedString/None.ts';

import type {
	Object_DataTo,
	Object_properties,
	Object_SchemaTo,
	Object_type,
	Object_TypeGenerator,
} from './TypedString/Object.ts';
import {
	Object_compile_validator,
	Object_generate_typescript_data,
	Object_generate_typescript_type,
} from './TypedString/Object.ts';

import type {
	Object_list_DataTo,
	Object_list_properties,
	Object_list_SchemaTo,
	Object_list_type,
	Object_list_TypeGenerator,
} from './TypedString/Object_list.ts';
import {
	Object_list_compile_validator,
	Object_list_generate_typescript_data,
	Object_list_generate_typescript_type,
} from './TypedString/Object_list.ts';

import type {
	String_enum_list_DataTo,
	String_enum_list_properties,
	String_enum_list_SchemaTo,
	String_enum_list_type,
	String_enum_list_TypeGenerator,
} from './TypedString/String_enum_list.ts';
import {
	String_enum_list_compile_validator,
	String_enum_list_generate_typescript_data,
	String_enum_list_generate_typescript_type,
} from './TypedString/String_enum_list.ts';

import type {
	BlueprintGeneratedClass_quoted_list_DataTo,
	BlueprintGeneratedClass_quoted_list_properties,
	BlueprintGeneratedClass_quoted_list_SchemaTo,
	BlueprintGeneratedClass_quoted_list_type,
	BlueprintGeneratedClass_quoted_list_TypeGenerator,
} from './TypedString/BlueprintGeneratedClass_quoted_list.ts';
import {
	BlueprintGeneratedClass_quoted_list_compile_validator,
	BlueprintGeneratedClass_quoted_list_generate_typescript_data,
	BlueprintGeneratedClass_quoted_list_generate_typescript_type,
} from './TypedString/BlueprintGeneratedClass_quoted_list.ts';

import type {
	FGTrainPlatformConnection_quoted_list_DataTo,
	FGTrainPlatformConnection_quoted_list_properties,
	FGTrainPlatformConnection_quoted_list_SchemaTo,
	FGTrainPlatformConnection_quoted_list_type,
	FGTrainPlatformConnection_quoted_list_TypeGenerator,
} from './TypedString/FGTrainPlatformConnection_quoted_list.ts';
import {
	FGTrainPlatformConnection_quoted_list_compile_validator,
	FGTrainPlatformConnection_quoted_list_generate_typescript_data,
	FGTrainPlatformConnection_quoted_list_generate_typescript_type,
} from './TypedString/FGTrainPlatformConnection_quoted_list.ts';

export type TypedString_mode = (
	| 'Empty'
	| 'None'
	| 'Object'
	| 'Object_list'
	| 'String_enum_list'
	| 'BlueprintGeneratedClass_quoted_list'
	| 'FGTrainPlatformConnection_quoted_list'
);

export type TypedString_type__by_mode = {
	Empty: Empty_type,
	None: None_type,
	Object: Object_type,
	Object_list: Object_list_type,
	String_enum_list: String_enum_list_type,
	BlueprintGeneratedClass_quoted_list: (
		BlueprintGeneratedClass_quoted_list_type
	),
	FGTrainPlatformConnection_quoted_list: (
		FGTrainPlatformConnection_quoted_list_type
	),
};

export type TypedString_type<
	Mode extends TypedString_mode,
> = {
	type: 'string',
	typed_string: TypedString_type__by_mode[Mode],
};

export type TypedString_matcher<
	Mode extends TypedString_mode,
> = [
	Mode,
	ValidateFunction<TypedString_type<Mode>['typed_string']>,
];

export type TypedString_type_OneOf = {
	oneOf: [
		TypedString_type<'Empty'>,
		TypedString_type<'None'>,
		TypedString_type<'Object'>,
		TypedString_type<'Object_list'>,
		TypedString_type<'String_enum_list'>,
		TypedString_type<'BlueprintGeneratedClass_quoted_list'>,
		TypedString_type<'FGTrainPlatformConnection_quoted_list'>,
	],
};

export type TypedString_schema_properties = {
	Empty: Empty_properties,
	None: None_properties,
	Object: Object_properties,
	Object_list: Object_list_properties,
	String_enum_list: String_enum_list_properties,
	BlueprintGeneratedClass_quoted_list: (
		BlueprintGeneratedClass_quoted_list_properties
	),
	FGTrainPlatformConnection_quoted_list: (
		FGTrainPlatformConnection_quoted_list_properties
	),
};

type TypedString_schema_properties_typed_string<
	Mode extends TypedString_mode,
> = TypedString_schema_properties[Mode];

type TypedString_schema<
	Mode extends TypedString_mode,
> = SchemaDefinitionDefinition<
	['type', 'typed_string'],
	{
		$defs: {
			type: 'object',
			additionalProperties: {
				type: 'object',
			},
		},
		type: {
			type: 'string',
			const: 'string',
		},
		typed_string: TypedString_schema_properties_typed_string<Mode>,
	}
>;

export type TypedString_schema_OneOf = TypeDefinitionSchema & {
	oneOf: [
		TypedString_schema<'Empty'>,
		TypedString_schema<'None'>,
		TypedString_schema<'Object'>,
		TypedString_schema<'Object_list'>,
		TypedString_schema<'String_enum_list'>,
		TypedString_schema<'BlueprintGeneratedClass_quoted_list'>,
		TypedString_schema<'FGTrainPlatformConnection_quoted_list'>,
	],
};

export type TypedString_SchemaTo__by_mode = {
	Empty: Empty_SchemaTo,
	None: None_SchemaTo,
	Object: Object_SchemaTo,
	Object_list: Object_list_SchemaTo,
	String_enum_list: String_enum_list_SchemaTo,
	BlueprintGeneratedClass_quoted_list: (
		BlueprintGeneratedClass_quoted_list_SchemaTo
	),
	FGTrainPlatformConnection_quoted_list: (
		FGTrainPlatformConnection_quoted_list_SchemaTo
	),
};

type TypedString_SchemaTo<
	Mode extends TypedString_mode,
> = TypedString_SchemaTo__by_mode[Mode];

export type TypedString_DataTo__by_mode = {
	Empty: Empty_DataTo,
	None: None_DataTo,
	Object: Object_DataTo,
	Object_list: Object_list_DataTo,
	String_enum_list: String_enum_list_DataTo,
	BlueprintGeneratedClass_quoted_list: (
		BlueprintGeneratedClass_quoted_list_DataTo
	),
	FGTrainPlatformConnection_quoted_list: (
		FGTrainPlatformConnection_quoted_list_DataTo
	),
};

type TypedString_DataTo<
	Mode extends TypedString_mode,
> = TypedString_DataTo__by_mode[Mode];

export type Type_Generator__by_mode = {
	None: None_TypeGenerator,
	Empty: Empty_TypeGenerator,
	String_enum_list: String_enum_list_TypeGenerator,
	Object: Object_TypeGenerator,
	Object_list: Object_list_TypeGenerator,
	BlueprintGeneratedClass_quoted_list: (
		BlueprintGeneratedClass_quoted_list_TypeGenerator
	),
	FGTrainPlatformConnection_quoted_list: (
		FGTrainPlatformConnection_quoted_list_TypeGenerator
	),
};

export function compile_validators(ajv: Ajv): {
	[key in TypedString_mode]: ValidateFunction<
		TypedString_type<key>['typed_string']
	>
} {
	return {
		Empty: Empty_compile_vaildator(ajv),
		None: None_compile_validator(ajv),
		Object: Object_compile_validator(ajv),
		Object_list: Object_list_compile_validator(ajv),
		String_enum_list: String_enum_list_compile_validator(ajv),
		BlueprintGeneratedClass_quoted_list: (
			BlueprintGeneratedClass_quoted_list_compile_validator(
				ajv,
			)
		),
		FGTrainPlatformConnection_quoted_list: (
			FGTrainPlatformConnection_quoted_list_compile_validator(
				ajv,
			)
		),
	};
}


export function generate_typescript_data__by_mode<
	Mode extends TypedString_mode,
>(
	data: string,
	schema_parser: SchemaParser,
	schema: TypedString_type<Mode>,
	mode: TypedString_mode,
): TypedString_DataTo<Mode>|undefined {
	let result: TypedString_DataTo<Mode>;

	if ('Empty' === mode) {
		result = Empty_generate_typescript_data() as typeof result;
	} else if ('None' === mode) {
		result = None_generate_typescript_data() as typeof result;
	} else if ('Object' === mode) {
		const coerced_schema = schema.typed_string as TypedString_type<
			'Object'
		>['typed_string'];

		result = Object_generate_typescript_data(
			data,
			schema_parser,
			coerced_schema,
			schema,
		) as typeof result;
	} else if ('Object_list' === mode) {
		const coerced_schema = schema.typed_string as TypedString_type<
			'Object_list'
		>['typed_string'];

		result = (
			Object_list_generate_typescript_data(
				data,
				schema_parser,
				coerced_schema,
				schema,
			)
		) as typeof result;
	} else if ('String_enum_list' === mode) {
		const coerced_schema = schema.typed_string as TypedString_type<
			'String_enum_list'
		>['typed_string'];

		result = String_enum_list_generate_typescript_data(
			data,
			coerced_schema,
		) as typeof result;
	} else if ('BlueprintGeneratedClass_quoted_list' === mode) {
		const coerced = (
			schema.typed_string as TypedString_type<
				'BlueprintGeneratedClass_quoted_list'
			>['typed_string']
		).items;

		result = (
			BlueprintGeneratedClass_quoted_list_generate_typescript_data(
				data,
				schema_parser,
				coerced,
			) as typeof result
		);
	} else if ('FGTrainPlatformConnection_quoted_list' === mode) {
		const coerced = (
			schema.typed_string as TypedString_type<
				'FGTrainPlatformConnection_quoted_list'
			>['typed_string']
		).items;

		result = (
			FGTrainPlatformConnection_quoted_list_generate_typescript_data(
				data,
				schema_parser,
				coerced,
			) as typeof result
		);
	} else {
		return undefined;
	}

	return result;
}

function generate_typescript_data<
	Mode extends TypedString_mode,
>(
	data: string,
	schema_parser: SchemaParser,
	schema: TypedString_type<Mode>,
	mode_by_validator: TypedString_matcher<TypedString_mode>[],
): TypedString_DataTo<Mode>|undefined {
	const mode = TypedString.mode_from_schema(
		schema.typed_string,
		mode_by_validator,
	);

	return generate_typescript_data__by_mode(
		data,
		schema_parser,
		schema,
		mode,
	);
}

export function generate_typescript_type__by_mode<
	Mode extends TypedString_mode,
>(
	schema: TypedString_type<Mode>,
	schema_parser: SchemaParser,
	mode: Mode,
): Promise<
	TypedString_SchemaTo<Mode>
>|undefined {
	let result: Promise<
		TypedString_SchemaTo<Mode>
	>;

	if ('Empty' === mode) {
		result = Promise.resolve(
			Empty_generate_typescript_type(),
		) as typeof result;
	} else if ('None' === mode) {
		result = Promise.resolve(
			None_generate_typescript_type(),
		) as typeof result;
	} else if ('Object' === mode) {
		const coerced_schema: (
			Object_type
		) = schema.typed_string as Object_type;

		result = Object_generate_typescript_type(
			coerced_schema,
			schema_parser,
		) as typeof result;
	} else if ('Object_list' === mode) {
		const coerced_schema: TypedString_type<
			'Object_list'
		> = schema as TypedString_type<
			'Object_list'
		>;

		result = Object_list_generate_typescript_type(
			coerced_schema.typed_string,
			schema_parser,
		) as typeof result;
	} else if ('String_enum_list' === mode) {
		const coerced_schema: TypedString_type<
			'String_enum_list'
		> = schema as TypedString_type<
			'String_enum_list'
		>;

		result = Promise.resolve(String_enum_list_generate_typescript_type(
			coerced_schema.typed_string,
		)) as typeof result;
	} else if ('BlueprintGeneratedClass_quoted_list' === mode) {
		const coerced_schema: TypedString_type<
			'BlueprintGeneratedClass_quoted_list'
		> = schema as TypedString_type<
			'BlueprintGeneratedClass_quoted_list'
		>;

		result = BlueprintGeneratedClass_quoted_list_generate_typescript_type(
			coerced_schema.typed_string,
			schema_parser,
		) as typeof result;
	} else if ('FGTrainPlatformConnection_quoted_list' === mode) {
		const coerced_schema: TypedString_type<
			'FGTrainPlatformConnection_quoted_list'
		> = schema as TypedString_type<
			'FGTrainPlatformConnection_quoted_list'
		>;

		// eslint-disable-next-line @stylistic/max-len
		result = FGTrainPlatformConnection_quoted_list_generate_typescript_type(
			coerced_schema.typed_string,
			schema_parser,
		) as typeof result;
	} else {
		return undefined;
	}

	return result;
}

function generate_typescript_type<
	Mode extends TypedString_mode,
>(
	schema: TypedString_type<Mode>,
	schema_parser: SchemaParser,
	mode_by_validator: TypedString_matcher<TypedString_mode>[],
): Promise<
	TypedString_SchemaTo<Mode>
>|undefined {
	const mode = TypedString.mode_from_schema(
		schema.typed_string,
		mode_by_validator,
	);

	return generate_typescript_type__by_mode(
		schema,
		schema_parser,
		mode,
	);
}

export class TypedString<
	Mode extends TypedString_mode,
> extends
	KeywordType<
		Exclude<string, ''>,
		TypedString_type_OneOf,
		Record<string, never>,
		TypedString_schema_OneOf,
		Record<string, never>,
		TypedString_SchemaTo<Mode>,
		TypedString_DataTo<Mode>,
		TypedString_type<Mode>
	> {
	#mode_by_validator: TypedString_matcher<TypedString_mode>[];

	constructor(
		options: SchemalessTypeOptions,
		{
			String_enum_list,
		}: {
			String_enum_list?: {
				quoted: boolean,
			},
		} = {},
	) {
		const mode_from_schema = compile_validators(options.ajv);

		const entries = Object.entries(mode_from_schema);

		super({
			...options,
			ajv_keyword: {
				keyword: 'typed_string',
				type: 'string',
				macro: (
					schema: TypedString_type<Mode>['typed_string'],
				) => {
					const mode = TypedString.mode_from_schema(
						schema,
						entries,
					);

					return TypedString.ajv_macro(mode, schema, {
						String_enum_list: String_enum_list || {
							quoted: false,
						},
					});
				},
			},
			type_definition: {},
			schema_definition: {},
		});

		this.#mode_by_validator = entries;
	}

	generate_typescript_data(
		data: string,
		schema_parser: SchemaParser,
		schema: TypedString_type<Mode>,
	): TypedString_DataTo<Mode> {
		const result = generate_typescript_data(
			data,
			schema_parser,
			schema,
			this.#mode_by_validator,
		);

		if (!result) {
			throw new TypeError('Not implemented!');
		}

		return result;
	}

	generate_typescript_type({
		schema,
		schema_parser,
	}: {
		schema: TypedString_type<Mode>,
		schema_parser: SchemaParser,
	}): Promise<TypedString_SchemaTo<Mode>> {
		const result = generate_typescript_type(
			schema,
			schema_parser,
			this.#mode_by_validator,
		);

		if (undefined === result) {
			throw new TypeError('not implemented!');
		}

		return result;
	}

	static ajv_macro<
		Mode extends TypedString_mode,
	>(
		mode: Mode,
		schema: TypedString_type<Mode>['typed_string'],
		{
			String_enum_list,
		}: {
			String_enum_list: {
				quoted: boolean,
			},
		},
	) {
		if ('Empty' === mode) {
			return {
				const: '',
			};
		} else if ('None' === mode) {
			return {
				const: '(None)',
			};
		} else if ('Object' === mode) {
			const coerced = schema as TypedString_type<
				'Object'
			>['typed_string'];

			const regex = `${
				Object.keys(coerced.properties)
					.map((property) => `(?:,?${
						RegExp.escape(property)
					}=(?:${
						`\\((?:,?[^=]+=(?:\\([^)]+\\)|\\d+))+\\)`
					}|${
						`\\([^=]+=\\([^)]+\\)\\)`
					}|${
						`\\([^)]+\\)`
					}|${
						`[^=]+`
					}))${
						(
							(coerced.required || ([] as string[]))
								.includes(property)
						)
							? ''
							: '?'
					}`)
					.join('')
			}`;

			return {
				pattern: `^\\(${regex}(?:,${regex})*\\)$`,
			};
		} else if ('Object_list' === mode) {
			const coerced = schema as TypedString_type<
				'Object_list'
			>['typed_string'];

			const regex = `\\(${
				Object.keys(coerced.items.properties)
					.map((property) => `(?:,?${
						RegExp.escape(property)
					}=.+)${
						(
							(coerced.items.required || ([] as string[]))
								.includes(property)
						)
							? ''
							: '?'
					}`)
					.join('')
			}\\)`;

			return {
				pattern: `^\\(${regex}(?:,${regex})*\\)$`,
			};
		} else if ('String_enum_list' === mode) {
			const coerced = schema as TypedString_type<
				'String_enum_list'
			>['typed_string'];

			const items = [...coerced.items.enum];

			if (String_enum_list.quoted) {
				items.push(...items.map((value) => `"${value}"`));
			}

			const regex = `${
				items
					.map((value) => RegExp.escape(value)).join('|')
			}`;

			return {
				pattern: `^\\((${
					regex
				})(?:,(${
					regex
				}))*\\)$`,
			};
		} else if ('BlueprintGeneratedClass_quoted_list' === mode) {
			const regex = BlueprintGeneratedClass_quoted
				.regex_from_value_and_mode(
					(schema as TypedString_type<
						'BlueprintGeneratedClass_quoted_list'
					>[
						'typed_string'
					]).items.DocsDotJson_BlueprintGeneratedClass_quoted,
					'quoted',
				);

			return {
				pattern: `^\\(${regex}(?:,${regex})*\\)$`,
			};
		} else if ('FGTrainPlatformConnection_quoted_list' === mode) {
			const regex = FGTrainPlatformConnection
				.regex_from_value(
					(schema as TypedString_type<
						'FGTrainPlatformConnection_quoted_list'
					>[
						'typed_string'
					]).items.DocsDotJson_FGTrainPlatformConnection_quoted,
				);

			return {
				pattern: `^\\(${regex}(?:,${regex})*\\)$`,
			};
		} else {
			throw new TypeError('Mode not implemented!');
		}
	}

	static generate_schema_definition(): Readonly<TypedString_schema_OneOf> {
		return Object.freeze({
			oneOf: [
				this.#generate_schema_definition('Empty'),
				this.#generate_schema_definition('None'),
				this.#generate_schema_definition('Object'),
				this.#generate_schema_definition('Object_list'),
				this.#generate_schema_definition('String_enum_list'),
				this.#generate_schema_definition(
					'BlueprintGeneratedClass_quoted_list',
				),
				this.#generate_schema_definition(
					'FGTrainPlatformConnection_quoted_list',
				),
			],
		});
	}

	static #generate_schema_definition<
		Mode extends TypedString_mode,
	>(
		mode: Mode,
	): Readonly<TypedString_schema<Mode>> {
		let typed_string: TypedString_schema_properties_typed_string<
			Mode
		>;

		if ('Empty' === mode) {
			const sanity_check: TypedString_schema_properties_typed_string<
				'Empty'
			> = {
				type: 'string',
				const: '',
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('None' === mode) {
			const sanity_check: TypedString_schema_properties_typed_string<
				'None'
			> = {
				type: 'string',
				const: '(None)',
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('Object' === mode) {
			const sanity_check: TypedString_schema_properties_typed_string<
				'Object'
			> = ObjectUnspecified
				.generate_schema_definition({
					properties_mode: 'properties',
				});

			typed_string = sanity_check as typeof typed_string;
		} else if ('Object_list' === mode) {
			const sanity_check_subtype: object_schema<
				'properties'
			> = ObjectUnspecified.generate_schema_definition({
				properties_mode: 'properties',
			});

			const sanity_check_options: array_options<
				'items',
				'specified',
				'yes',
				'with',
				object_schema<'properties'>
			> = {
				array_mode: 'items',
				specified_mode: 'specified',
				unique_items_mode: 'yes',
				min_items_mode: 'with',
				items: sanity_check_subtype,
				minItems: PositiveIntegerOrZeroGuard(1),
			};

			const sanity_check: Readonly<
				TypedString_schema_properties_typed_string<
					'Object_list'
				>
			> = ArrayType.generate_schema_definition(sanity_check_options);

			typed_string = sanity_check as typeof typed_string;
		} else if ('String_enum_list' === mode) {
			const sanity_check: Readonly<
				TypedString_schema_properties_typed_string<
					'String_enum_list'
				>
			> = {
				type: 'object',
				required: [
					'type',
					'minItems',
					'uniqueItems',
					'items',
				],
				properties: {
					type: {
						type: 'string',
						const: 'array',
					},
					minItems: {
						type: 'integer',
						minimum: 1,
					},
					uniqueItems: {
						type: 'boolean',
						const: true,
					},
					items: {
						type: 'object',
						required: ['type', 'enum'],
						properties: {
							type: {
								type: 'string',
								const: 'string',
							},
							enum: {
								type: 'array',
								minItems: 1,
								uniqueItems: true,
								items: {
									type: 'string',
									minLength: 1,
								},
							},
						},
					},
				},
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('BlueprintGeneratedClass_quoted_list' === mode) {
			const sanity_check_subtype: (
				BlueprintGeneratedClass_quoted_schema
			) = BlueprintGeneratedClass_quoted
				.generate_schema_definition({
					mode: 'quoted',
				});

			const sanity_check_options: array_options<
				'items',
				'specified',
				'yes',
				'optional',
				BlueprintGeneratedClass_quoted_schema
			> = {
				array_mode: 'items',
				specified_mode: 'specified',
				unique_items_mode: 'yes',
				min_items_mode: 'optional',
				items: sanity_check_subtype,
				minItems: PositiveIntegerOrZeroGuard(1),
			};

			const sanity_check: Readonly<
				TypedString_schema_properties_typed_string<
					'BlueprintGeneratedClass_quoted_list'
				>
			> = ArrayType.generate_schema_definition(sanity_check_options);

			typed_string = sanity_check as typeof typed_string;
		} else if ('FGTrainPlatformConnection_quoted_list' === mode) {
			const sanity_check_subtype: (
				FGTrainPlatformConnection_quoted_schema
			) = FGTrainPlatformConnection.generate_schema_definition();

			const sanity_check_options: array_options<
				'items',
				'specified',
				'yes',
				'optional',
				FGTrainPlatformConnection_quoted_schema
			> = {
				array_mode: 'items',
				specified_mode: 'specified',
				unique_items_mode: 'yes',
				min_items_mode: 'optional',
				items: sanity_check_subtype,
				minItems: PositiveIntegerOrZeroGuard(1),
			};

			const sanity_check: Readonly<
				TypedString_schema_properties_typed_string<
					'FGTrainPlatformConnection_quoted_list'
				>
			> = ArrayType.generate_schema_definition(sanity_check_options);

			typed_string = sanity_check as typeof typed_string;
		} else {
			throw new TypeError('not implemented!');
		}

		const properties: TypedString_schema<Mode>['properties'] = {
			$defs: {
				type: 'object',
				additionalProperties: {
					type: 'object',
				},
			},
			type: {
				type: 'string',
				const: 'string',
			},
			typed_string,
		};

		return Object.freeze({
			type: 'object',
			additionalProperties: false,
			required: ['type', 'typed_string'],
			properties,
		});
	}

	static generate_type_definition(): Readonly<TypedString_type_OneOf> {
		return Object.freeze({
			oneOf: [
				this.#generate_type_definition('Empty'),
				this.#generate_type_definition('None'),
				this.#generate_type_definition('Object'),
				this.#generate_type_definition('Object_list'),
				this.#generate_type_definition('String_enum_list'),
				this.#generate_type_definition(
					'BlueprintGeneratedClass_quoted_list',
				),
				this.#generate_type_definition(
					'FGTrainPlatformConnection_quoted_list',
				),
			],
		});
	}

	static #generate_type_definition<
		Mode extends TypedString_mode,
	>(
		mode: Mode,
	): Readonly<TypedString_type<Mode>> {
		let typed_string: TypedString_type<Mode>['typed_string'];

		if ('Empty' === mode) {
			const sanity_check: TypedString_type<'Empty'>['typed_string'] = {
				type: 'string',
				const: '',
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('None' === mode) {
			const sanity_check: TypedString_type<'None'>['typed_string'] = {
				type: 'string',
				const: '(None)',
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('Object' === mode) {
			const sanity_check: TypedString_type<
				'Object'
			>['typed_string'] = ObjectUnspecified.generate_type_definition({
				properties_mode: 'properties',
				properties: {},
			});

			typed_string = sanity_check as typeof typed_string;
		} else if ('Object_list' === mode) {
			const sanity_check: TypedString_type<
				'Object_list'
			>['typed_string'] = {
				type: 'array',
				minItems: PositiveIntegerGuard(1),
				uniqueItems: true,
				items: ObjectUnspecified.generate_type_definition({
					properties_mode: 'properties',
					properties: {},
				}),
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('String_enum_list' === mode) {
			const sanity_check: TypedString_type<
				'String_enum_list'
			>['typed_string'] = {
				type: 'array',
				minItems: PositiveIntegerGuard(1),
				uniqueItems: true,
				items: {
					type: 'string',
					enum: [' '],
				},
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('BlueprintGeneratedClass_quoted_list' === mode) {
			const sanity_check: TypedString_type<
				'BlueprintGeneratedClass_quoted_list'
			>['typed_string'] = {
				type: 'array',
				minItems: PositiveIntegerGuard(1),
				uniqueItems: true,
				items: BlueprintGeneratedClass_quoted
					.generate_type_definition({
						mode: 'quoted',
					}),
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('FGTrainPlatformConnection_quoted_list' === mode) {
			const sanity_check: TypedString_type<
				'FGTrainPlatformConnection_quoted_list'
			>['typed_string'] = {
				type: 'array',
				minItems: PositiveIntegerGuard(1),
				uniqueItems: true,
				items: FGTrainPlatformConnection
					.generate_type_definition(),
			};

			typed_string = sanity_check as typeof typed_string;
		} else {
			throw new TypeError('Not Implemented!');
		}

		return Object.freeze({
			type: 'string',
			typed_string,
		});
	}

	static mode_from_schema<
		Mode extends TypedString_mode,
	>(
		schema: TypedString_type<Mode>['typed_string'],
		matchers: TypedString_matcher<TypedString_mode>[],
	): Mode;
	static mode_from_schema(
		schema: unknown,
		matchers: TypedString_matcher<TypedString_mode>[],
	): TypedString_mode {
		const match = matchers.find(([, maybe]) => maybe(schema));

		if (undefined === match) {
			console.error(schema);

			throw new TypeError('No mode determined for schema!');
		}

		return match[0];
	}
}
