import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	$ref,
	SchemaDefinitionDefinition,
	SchemalessTypeOptions,
	SchemaObject,
	SchemaParser,
	TypeDefinitionSchema,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	Type,
} from '@signpostmarv/json-schema-typescript-codegen';

// required for type hinting on github actions checks
import type {
} from '@signpostmarv/json-schema-typescript-codegen/javascript-overrides';

import {
	KeywordType,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import {
	object_has_property,
} from '@satisfactory-dev/predicates.ts';

import type {
	Empty_DataTo,
	Empty_properties,
	Empty_SchemaTo,
	Empty_type,
	Empty_TypeGenerator,
} from './TypedString/Empty.ts';
import {
	Empty_ajv_macro,
	Empty_compile_vaildator,
	Empty_generate_schema_definition,
	Empty_generate_type_definition,
	Empty_generate_typescript_data,
	Empty_generate_typescript_type,
} from './TypedString/Empty.ts';

import type {
	Object_DataTo,
	Object_properties,
	Object_SchemaTo,
	Object_type,
	Object_TypeGenerator,
	PropertySchemaToRegex,
} from './TypedString/Object.ts';
import {
	Object_ajv_macro,
	Object_compile_validator,
	Object_generate_schema_definition,
	Object_generate_type_definition,
	Object_generate_typescript_data,
	Object_generate_typescript_type,
} from './TypedString/Object.ts';

import type {
	FlexibleArray_DataTo,
	FlexibleArray_schema_properties,
	FlexibleArray_SchemaTo,
	FlexibleArray_type,
} from './TypedString/FlexibleArray.ts';
import {
	FlexibleArray_ajv_macro__items,
	FlexibleArray_ajv_macro__prefixItems,
	FlexibleArray_compile_validator,
	FlexibleArray_generate_data,
	FlexibleArray_generate_schema_definition__items,
	FlexibleArray_generate_schema_definition__prefixItems,
	FlexibleArray_generate_type,
	FlexibleArray_generate_type_definition__items,
	FlexibleArray_generate_type_definition__prefixItems,
} from './TypedString/FlexibleArray.ts';

import {
	ConstString,
} from './TypedString/PropertySchemaToRegex/ConstString.ts';

import {
	PrefixedString as PrefixedStringMatcher,
} from './TypedString/PropertySchemaToRegex/PrefixedString.ts';

import {
	NamedListMatcher,
} from './TypedString/PropertySchemaToRegex/NamedListMatcher.ts';

import {
	TemplatedStringMatcher,
} from './TypedString/PropertySchemaToRegex/TemplatedStringMatcher.ts';

import {
	FlexibleArrayMatcher__items,
	FlexibleArrayMatcher__prefixItems,
} from './TypedString/PropertySchemaToRegex/FlexibleArrayMatcher.ts';

import {
	EnumString,
} from './TypedString/PropertySchemaToRegex/EnumString.ts';

import {
	PatternString,
} from './TypedString/PropertySchemaToRegex/PatternString.ts';

import {
	RefResolver,
} from './TypedString/PropertySchemaToRegex/RefResolver.ts';

export type TypedString_mode = (
	| 'Empty'
	| 'Object'
	| 'FlexibleArray__items'
	| 'FlexibleArray__prefixItems'
);

export type TypedString_type__by_mode = {
	Empty: Empty_type,
	Object: Object_type,
	FlexibleArray__items: FlexibleArray_type<'items'>,
	FlexibleArray__prefixItems: FlexibleArray_type<'prefixItems'>,
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
		TypedString_type<'Object'>,
		TypedString_type<'FlexibleArray__items'>,
		TypedString_type<'FlexibleArray__prefixItems'>,
	],
};

export type TypedString_schema_properties = {
	Empty: Empty_properties,
	Object: Object_properties,
	FlexibleArray__items: FlexibleArray_schema_properties<'items'>,
	FlexibleArray__prefixItems: FlexibleArray_schema_properties<'prefixItems'>,
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
		TypedString_schema<'Object'>,
		TypedString_schema<'FlexibleArray__items'>,
		TypedString_schema<'FlexibleArray__prefixItems'>,
	],
};

export type TypedString_SchemaTo__by_mode = {
	Empty: Empty_SchemaTo,
	Object: Object_SchemaTo,
	FlexibleArray__items: FlexibleArray_SchemaTo<'items'>,
	FlexibleArray__prefixItems: FlexibleArray_SchemaTo<'prefixItems'>,
};

type TypedString_SchemaTo<
	Mode extends TypedString_mode,
> = TypedString_SchemaTo__by_mode[Mode];

export type TypedString_DataTo__by_mode = {
	Empty: Empty_DataTo,
	Object: Object_DataTo,
	FlexibleArray__items: FlexibleArray_DataTo,
	FlexibleArray__prefixItems: FlexibleArray_DataTo,
};

type TypedString_DataTo<
	Mode extends TypedString_mode,
> = TypedString_DataTo__by_mode[Mode];

export type Type_Generator__by_mode = {
	Empty: Empty_TypeGenerator,
	Object: Object_TypeGenerator,
};

export function compile_validators(ajv: Ajv): {
	[key in TypedString_mode]: ValidateFunction<
		TypedString_type<key>['typed_string']
	>
} {
	return {
		Empty: Empty_compile_vaildator(ajv),
		Object: Object_compile_validator(ajv),
		FlexibleArray__items: FlexibleArray_compile_validator(ajv, 'items'),
		FlexibleArray__prefixItems: FlexibleArray_compile_validator(
			ajv,
			'prefixItems',
		),
	};
}

export type PropertySchemaToRegex__matchers_object = {
	[key: string]: (
		options: {
			ajv: Ajv,
			existing: PropertySchemaToRegex<unknown>[],
			Object_matcher_instance: PropertySchemaToRegex<{
				type: 'string',
				typed_string: Object_type,
			}>,
			$ref_instance: $ref,
		},
	) => PropertySchemaToRegex<unknown>[],
};

export function PropertySchemaToRegex__matchers_as_object(
): PropertySchemaToRegex__matchers_object {
	return {
		ConstString: ({ajv}) => [ConstString(ajv)],
		EnumString: ({ajv}) => [EnumString(ajv)],
		PatternString: ({ajv}) => [PatternString(ajv)],
		PrefixedStringMatcher: ({ajv}) => [
			PrefixedStringMatcher(ajv, 'quoted', 'quoted'),
			PrefixedStringMatcher(ajv, 'single_quoted', 'quoted'),
			PrefixedStringMatcher(ajv, 'non_quoted', 'quoted'),
			PrefixedStringMatcher(ajv, 'version_specific_default', 'quoted'),
		],
		NamedListMatcher: ({ajv}) => [NamedListMatcher(ajv)],
		TemplatedStringMatcher: ({ajv}) => [TemplatedStringMatcher(ajv)],
		FlexibleArrayMatcher: ({ajv, existing}) => [
			FlexibleArrayMatcher__items(
				ajv,
				existing,
			),
			FlexibleArrayMatcher__prefixItems(
				ajv,
				existing,
			),
		],
		$ref: ({ajv, existing, $ref_instance}) => [RefResolver(
			ajv,
			existing,
			$ref_instance,
		)],
	} as PropertySchemaToRegex__matchers_object;
}

export function PropertySchemaToRegex__matchers(
	ajv: Ajv,
	existing: PropertySchemaToRegex<unknown>[],
	Object_matcher_instance: PropertySchemaToRegex<{
		type: 'string',
		typed_string: Object_type,
	}>,
	$ref_instance: $ref,
) {
	return Object.values(
		PropertySchemaToRegex__matchers_as_object(),
	).flatMap((cb) => cb({
		ajv,
		existing,
		Object_matcher_instance,
		$ref_instance,
	}));
}

export function generate_typescript_data__by_mode<
	Mode extends TypedString_mode,
>(
	data: string,
	schema_parser: SchemaParser,
	schema: TypedString_type<Mode>,
	mode: TypedString_mode,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
): TypedString_DataTo<Mode>|undefined {
	let result: TypedString_DataTo<Mode>;

	if ('Empty' === mode) {
		result = Empty_generate_typescript_data() as typeof result;
	} else if ('Object' === mode) {
		let coerced_schema = schema.typed_string as TypedString_type<
			'Object'
		>['typed_string'];

		coerced_schema = Type.maybe_add_$defs(schema, coerced_schema);

		result = Object_generate_typescript_data(
			data,
			schema_parser,
			coerced_schema,
			schema,
			property_schema_to_regex,
		) as typeof result;
	} else if (
		'FlexibleArray__items' === mode
	) {
		let coerced = (
			schema as TypedString_type<'FlexibleArray__items'>
		).typed_string;

		if ('$defs' in schema && !('$defs' in coerced)) {
			coerced = {
				$defs: schema.$defs,
				...coerced,
			} as TypedString_type<'FlexibleArray__items'>['typed_string'];
		}

		return FlexibleArray_generate_data<'items'>(
			'items',
			data,
			coerced,
			schema_parser,
			property_schema_to_regex,
		) as TypedString_DataTo<Mode>;
	} else if (
		'FlexibleArray__prefixItems' === mode
	) {
		const coerced = (
			schema as TypedString_type<'FlexibleArray__prefixItems'>
		).typed_string;

		return FlexibleArray_generate_data<'prefixItems'>(
			'prefixItems',
			data,
			coerced,
			schema_parser,
			property_schema_to_regex,
		) as TypedString_DataTo<Mode>;
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
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
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
		property_schema_to_regex,
	);
}

export function generate_typescript_type__by_mode<
	Mode extends TypedString_mode,
>(
	data: unknown,
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
	} else if ('Object' === mode) {
		const coerced_schema: (
			Object_type
		) = schema.typed_string as Object_type;

		result = Object_generate_typescript_type(
			coerced_schema,
			schema_parser,
		) as typeof result;
	} else if (
		'FlexibleArray__items' === mode
	) {
		const coerced = (
			schema as TypedString_type<'FlexibleArray__items'>
		).typed_string;

		return FlexibleArray_generate_type(
			'items',
			data,
			coerced,
			schema_parser,
		) as Promise<TypedString_SchemaTo<Mode>>;
	} else if (
		'FlexibleArray__prefixItems' === mode
	) {
		const coerced = (
			schema as TypedString_type<'FlexibleArray__prefixItems'>
		).typed_string;

		return FlexibleArray_generate_type(
			'prefixItems',
			data,
			coerced,
			schema_parser,
		) as Promise<TypedString_SchemaTo<Mode>>;
	} else {
		return undefined;
	}

	return result;
}

function generate_typescript_type<
	Mode extends TypedString_mode,
>(
	data: unknown,
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
		data,
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

	#property_schema_to_regex: PropertySchemaToRegex<unknown>[];

	constructor(
		options: SchemalessTypeOptions,
		{
			$ref_instance,
			Object: Object_options,
		}: {
			$ref_instance: $ref,
			Object?: {
				matchers: PropertySchemaToRegex<unknown>[],
			},
		},
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
					parent_schema,
					it,
				) => {
					const mode = TypedString.mode_from_schema(
						schema,
						entries,
					);

					let root_schema: SchemaObject = {$defs: {}};

					if (
						object_has_property(it.self.schemas, it.baseId)
						&& object_has_property(
							it.self.schemas[it.baseId],
							'schema',
						)
						&& object_has_property(
							it.self.schemas[it.baseId]?.schema,
							'$defs',
						)
					) {
						root_schema = it.self.schemas[
							it.baseId
						]?.schema as SchemaObject;
					} else if (
						'#' === it.baseId
						&& object_has_property(
							it.schemaEnv.root.schema,
							'$defs',
						)
					) {
						root_schema = (
							it.schemaEnv.root.schema as SchemaObject
						);
					}

					if (Object.keys(root_schema.$defs || {}).length > 0) {
						schema = Type.maybe_add_$defs(
							root_schema,
							schema,
						);
					}

					return TypedString.ajv_macro(mode, schema, {
						$ref_instance,
						Object: Object_options || {
							matchers: [],
						},
					});
				},
			},
			type_definition: {},
			schema_definition: {},
		});

		this.#mode_by_validator = entries;
		this.#property_schema_to_regex = Object_options?.matchers || [];
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
			this.#property_schema_to_regex,
		);

		if (!result) {
			throw new TypeError('Not implemented!');
		}

		return result;
	}

	generate_typescript_type({
		data,
		schema,
		schema_parser,
	}: {
		data: unknown,
		schema: TypedString_type<Mode>,
		schema_parser: SchemaParser,
	}): Promise<TypedString_SchemaTo<Mode>> {
		const result = generate_typescript_type(
			data,
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
			Object,
		}: {
			$ref_instance: $ref,
			Object: {
				matchers: PropertySchemaToRegex<unknown>[],
			},
		},
	) {
		if ('Empty' === mode) {
			return Empty_ajv_macro();
		} else if ('Object' === mode) {
			const coerced = schema as TypedString_type<
				'Object'
			>['typed_string'];

			return Object_ajv_macro(
				coerced,
				Object.matchers,
			);
		} else if (
			'FlexibleArray__items' === mode
		) {
			const coerced = (
				schema as TypedString_type<
					'FlexibleArray__items'
				>['typed_string']
			);

			return FlexibleArray_ajv_macro__items(
				coerced,
				Object.matchers,
			);
		} else if (
			'FlexibleArray__prefixItems' === mode
		) {
			const coerced = (
				schema as TypedString_type<
					'FlexibleArray__prefixItems'
				>['typed_string']
			);

			return FlexibleArray_ajv_macro__prefixItems(
				coerced,
				Object.matchers,
			);
		} else {
			throw new TypeError('Mode not implemented!');
		}
	}

	static generate_schema_definition(): Readonly<TypedString_schema_OneOf> {
		return Object.freeze({
			oneOf: [
				this.#generate_schema_definition('Empty'),
				this.#generate_schema_definition('Object'),
				this.#generate_schema_definition('FlexibleArray__items'),
				this.#generate_schema_definition('FlexibleArray__prefixItems'),
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
			typed_string = Empty_generate_schema_definition(
			) as typeof typed_string;
		} else if ('Object' === mode) {
			typed_string = Object_generate_schema_definition(
			) as typeof typed_string;
		} else if ('FlexibleArray__items' === mode) {
			typed_string = FlexibleArray_generate_schema_definition__items(
			) as typeof typed_string;
		} else if ('FlexibleArray__prefixItems' === mode) {
			// eslint-disable-next-line @stylistic/max-len
			typed_string = FlexibleArray_generate_schema_definition__prefixItems(
			) as typeof typed_string;
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
				this.#generate_type_definition('Object'),
				this.#generate_type_definition('FlexibleArray__items'),
				this.#generate_type_definition('FlexibleArray__prefixItems'),
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
			typed_string = Empty_generate_type_definition(
			) as typeof typed_string;
		} else if ('Object' === mode) {
			typed_string = Object_generate_type_definition(
			) as typeof typed_string;
		} else if ('FlexibleArray__items' === mode) {
			typed_string = FlexibleArray_generate_type_definition__items(
			) as typeof typed_string;
		} else if ('FlexibleArray__prefixItems' === mode) {
			typed_string = FlexibleArray_generate_type_definition__prefixItems(
			) as typeof typed_string;
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
		let match = matchers.find(([, maybe]) => maybe(schema));

		if (undefined === match) {
			if (
				object_has_property(schema, 'uniqueItems')
				&& false === schema.uniqueItems
			) {
				match = matchers.find(([, maybe]) => maybe({
					...schema,
					uniqueItems: true,
				}));
			}
		}

		if (undefined === match) {
			console.error(schema);

			throw new TypeError('No mode determined for schema!');
		}

		return match[0];
	}
}
