import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';

import {
	object_has_property,
} from '@satisfactory-dev/predicates.ts';

import type {
	$ref,
	SchemalessTypeOptions,
	SchemaObject,
	SchemaParser,
	TypeDefinitionSchema,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	Type,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	KeywordType,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import type {
} from '@signpostmarv/js-types';

import type {
	TypedString_DataTo__by_mode as TypedString_DataTo__by_mode__update6,
	TypedString_mode as TypedString_mode__update6,
	TypedString_schema_OneOf as TypedString_schema_OneOf__update6,
	TypedString_SchemaTo__by_mode as TypedString_SchemaTo__by_mode__update6,
	TypedString_type__by_mode as TypedString_type__by_mode__update6,
	TypedString_type_OneOf as TypedString_type_OneOf__update6,
} from '../0.6.1.5/TypedString.ts';
import {
	compile_validators,
} from '../0.6.1.5/TypedString.ts';

import {
	generate_typescript_data__by_mode,
	generate_typescript_type__by_mode,
	// eslint-disable-next-line @stylistic/max-len
	PropertySchemaToRegex__matchers_as_object as PropertySchemaToRegex__matchers_as_object__update8,
	TypedString as TypedString__update6,
} from '../0.8.3.3/TypedString.ts';

import type {
	Object_type,
	PropertySchemaToRegex,
} from '../0.3.7.7/TypedString/Object.ts';

import type {
	PropertySchemaToRegex__matchers_object,
} from '../0.3.7.7/TypedString.ts';

import {
	PrefixedString as PrefixedStringMatcher,
} from './TypedString/PropertySchemaToRegex/PrefixedString.ts';

import {
	FlexibleArrayMatcher__items,
} from './TypedString/PropertySchemaToRegex/FlexibleArrayMatcher.ts';

import {
	FlexibleArrayMatcher__prefixItems,
} from '../0.3.7.7/TypedString/PropertySchemaToRegex/FlexibleArrayMatcher.ts';

import {
	Object_ajv_macro,
} from './TypedString/Object.ts';

import {
	FlexibleArray_ajv_macro__items,
} from './TypedString/FlexibleArray.ts';

type TypedString_mode = (
	| TypedString_mode__update6
);

export type TypedString_type__by_mode = (
	& TypedString_type__by_mode__update6
);

type TypedString_type<
	Mode extends TypedString_mode,
> = {
	type: 'string',
	typed_string: TypedString_type__by_mode[Mode],
};

type TypedString_matcher<
	Mode extends TypedString_mode,
> = [
	Mode,
	Is<TypedString_type<Mode>['typed_string']>,
];

type TypedString_type_OneOf = {
	oneOf: [
		...TypedString_type_OneOf__update6['oneOf'],
	],
};

type TypedString_schema_OneOf = TypeDefinitionSchema & {
	oneOf: [
		...TypedString_schema_OneOf__update6['oneOf'],
	],
};

type TypedString_SchemaTo__by_mode = (
	& TypedString_SchemaTo__by_mode__update6
);

type TypedString_DataTo__by_mode = (
	& TypedString_DataTo__by_mode__update6
);

type TypedString_DataTo<
	Mode extends TypedString_mode,
> = TypedString_DataTo__by_mode[Mode];

type TypedString_SchemaTo<
	Mode extends TypedString_mode,
> = TypedString_SchemaTo__by_mode[Mode];

export function PropertySchemaToRegex__matchers_as_object(
): PropertySchemaToRegex__matchers_object {
	return {
		...PropertySchemaToRegex__matchers_as_object__update8(),
		PrefixedStringMatcher: () => [
			...([
				'quoted',
				'single_quoted',
				'non_quoted',
				'version_specific_default',
			] as const).flatMap((mode) => [
				PrefixedStringMatcher(mode, 'Engine', 'single_quoted'),
				PrefixedStringMatcher(
					mode,
					'TemplateSequence',
					'single_quoted',
				),
				PrefixedStringMatcher(
					mode,
					'FactoryGame',
					'single_quoted',
				),
				PrefixedStringMatcher(mode, 'AkAudio', 'single_quoted'),
				PrefixedStringMatcher(
					mode,
					'CoreUObject',
					'single_quoted',
				),
			]),
		],
		FlexibleArrayMatcher: ({existing, $ref_instance}) => [
			FlexibleArrayMatcher__items(
				existing,
				$ref_instance,
			),
			FlexibleArrayMatcher__prefixItems(
				existing,
			),
		],
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

	return generate_typescript_data__by_mode<Mode>(
		data,
		schema_parser,
		schema,
		mode,
		property_schema_to_regex,
	);
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
		const mode_from_schema = compile_validators();

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

	async generate_typescript_type({
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
		options: {
			$ref_instance: $ref,
			Object: {
				matchers: PropertySchemaToRegex<unknown>[],
			},
		},
	) {
		if ('Object' === mode) {
			return Object_ajv_macro(
				schema as Object_type,
				options.Object.matchers,
				options.$ref_instance,
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
				options.Object.matchers,
				options.$ref_instance,
			);
		}

		return TypedString__update6.ajv_macro(
			mode,
			schema,
			options,
		);
	}

	static generate_schema_definition(): Readonly<TypedString_schema_OneOf> {
		return Object.freeze({
			oneOf: [
				...TypedString__update6.generate_schema_definition().oneOf,
			],
		});
	}

	static generate_type_definition(): Readonly<TypedString_type_OneOf> {
		return Object.freeze({
			oneOf: [
				...TypedString__update6.generate_type_definition().oneOf,
			],
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
			throw new TypeError('No mode determined for schema!');
		}

		return match[0];
	}
}
