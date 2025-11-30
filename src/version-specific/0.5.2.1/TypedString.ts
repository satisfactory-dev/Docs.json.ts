import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	SchemaDefinitionDefinition,
	SchemalessTypeOptions,
	SchemaParser,
	TypeDefinitionSchema,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	KeywordType,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import type {
} from '@signpostmarv/json-schema-typescript-codegen/javascript-overrides';

import type {
	Thingish_list_DataTo,
	Thingish_list_schema_properties,
	Thingish_list_SchemaTo,
	Thingish_list_type,
} from './TypedString/Thingish_list.ts';
import {
	Thingish_list_compile_validator,
	Thingish_list_generate_schema_definition,
	Thingish_list_generate_type_definition_prefixItems,
	Thingish_list_schema_ajv_macro,
} from './TypedString/Thingish_list.ts';

import type {
	TypedString_DataTo__by_mode as TypedString_DataTo__by_mode__update4,
	TypedString_mode as TypedString_mode__update4,
	TypedString_schema_OneOf as TypedString_schema_OneOf__update4,
	TypedString_schema_properties as TypedString_schema_properties__update4,
	TypedString_SchemaTo__by_mode as TypedString_SchemaTo__by_mode__update4,
	TypedString_type__by_mode as TypedString_type__by_mode__update4,
	TypedString_type_OneOf as TypedString_type_OneOf__update4,
} from '../0.4.2.11/TypedString.ts';
import {
	compile_validators as compile_validators__update4,
	// eslint-disable-next-line @stylistic/max-len
	generate_typescript_data__by_mode as generate_typescript_data__by_mode__update4,
	// eslint-disable-next-line @stylistic/max-len
	generate_typescript_type__by_mode as generate_typescript_type__by_mode__update4,
	TypedString as TypedString__update4,
} from '../0.4.2.11/TypedString.ts';

import type {
	Thing_list_DataTo,
	Thing_list_schema_properties,
	Thing_list_SchemaTo,
	Thing_list_type,
} from './TypedString/Thing_list.ts';
import {
	Thing_list_ajv_macro,
	Thing_list_compile_validator,
	Thing_list_generate_schema_definition,
	Thing_list_generate_type_definition,
} from './TypedString/Thing_list.ts';

type TypedString_mode = (
	| TypedString_mode__update4
	| 'Thing_list'
	| 'Thingish_list'
);

export type TypedString_type__by_mode = (
	& TypedString_type__by_mode__update4
	& {
		Thing_list: Thing_list_type,
		Thingish_list: Thingish_list_type<
			TypedString_type<'Thingish_list'>
		>,
	}
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
	ValidateFunction<TypedString_type<Mode>['typed_string']>,
];

type TypedString_type_OneOf = {
	oneOf: [
		...TypedString_type_OneOf__update4['oneOf'],
		TypedString_type<'Thing_list'>,
		TypedString_type<'Thingish_list'>,
	],
};

type TypedString_schema_properties = (
	& TypedString_schema_properties__update4
	& {
		Thing_list: Thing_list_schema_properties,
		Thingish_list: Thingish_list_schema_properties,
	}
);

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

type TypedString_schema_OneOf = TypeDefinitionSchema & {
	oneOf: [
		...TypedString_schema_OneOf__update4['oneOf'],
		TypedString_schema<'Thing_list'>,
		TypedString_schema<'Thingish_list'>,
	],
};

type TypedString_SchemaTo__by_mode = (
	& TypedString_SchemaTo__by_mode__update4
	& {
		Thing_list: Thing_list_SchemaTo,
		Thingish_list: Thingish_list_SchemaTo,
	}
);

type TypedString_SchemaTo<
	Mode extends TypedString_mode,
> = TypedString_SchemaTo__by_mode[Mode];

type TypedString_DataTo__by_mode = (
	& TypedString_DataTo__by_mode__update4
	& {
		Thing_list: Thing_list_DataTo,
		Thingish_list: Thingish_list_DataTo,
	}
);

type TypedString_DataTo<
	Mode extends TypedString_mode,
> = TypedString_DataTo__by_mode[Mode];

function compile_validators(ajv: Ajv): {
	[key in TypedString_mode]: ValidateFunction<
		TypedString_type<key>['typed_string']
	>
} {
	return {
		...compile_validators__update4(ajv),
		Thing_list: Thing_list_compile_validator(ajv),
		Thingish_list: Thingish_list_compile_validator(ajv),
	};
}

export function generate_typescript_data<
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

	if ('Thing_list' === mode) {
		throw new TypeError('Not implemented');
	} else if ('Thingish_list' === mode) {
		throw new TypeError('Not implemented');
	}


	const coerced = schema as TypedString_type<
		Exclude<Mode, (
			| 'Thing_list'
			| 'Thingish_list'
		)>
	>;

	return generate_typescript_data__by_mode__update4(
		data,
		schema_parser,
		coerced,
		mode,
	) as TypedString_DataTo<Mode>|undefined;
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

export function generate_typescript_type__by_mode<
	Mode extends TypedString_mode,
>(
	schema: TypedString_type<Mode>,
	schema_parser: SchemaParser,
	mode: Mode,
): Promise<
	TypedString_SchemaTo<Mode>
>|undefined {
	if ('Thing_list' === mode) {
		throw new TypeError('Not yet implemented');
	} else if ('Thingish_list' === mode) {
		throw new TypeError('Not yet implemented');
	}

	const coerced = schema as TypedString_type<
		Exclude<Mode, (
			| 'Thing_list'
			| 'Thingish_list'
		)>
	>;

	return generate_typescript_type__by_mode__update4(
		coerced,
		schema_parser,
		mode,
	) as Promise<TypedString_SchemaTo<Mode>>|undefined;
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

		/*
		if ('Empty' === mode) {
			const sanity_check: TypedString_DataTo<
				'Empty'
			> = factory.createIdentifier('null');

			result = sanity_check as typeof result;
		} else if ('None' === mode) {
			const sanity_check: TypedString_DataTo<
				'None'
			> = factory.createArrayLiteralExpression([], false);

			result = sanity_check as typeof result;
		} else if ('Object' === mode) {
			const coerced_schema = schema.typed_string as TypedString_type<
				'Object'
			>['typed_string'];

			const properties = Object.keys(
				coerced_schema.properties,
			);

			const regex = new RegExp(`^\\((?:,?${properties.map(
				(property): [
					string,
					string,
				] => [
					property,
					`(${RegExp.escape(property)})=([^=]+|\\(.+\\)(?=[,\\)]))`,
				],
			).map(([
				property,
				regex,
			], i) => (
				(
					coerced_schema.required || ([] as string[])
				).includes(property)
					? `${i > 0 ? ',' : ''}${regex}`
					: `(?:${i > 0 ? ',' : ''}${regex})?`
			)).join('')})*\\)$`);

			const match = regex.exec(data);

			if (null === match) {
				throw new TypeError('Data does not match expected regex!');
			}

			const [, ...matches] = match;

			const property_assignments: PropertyAssignment[] = [];

			for (let i = 0; i < matches.length; i += 2) {
				const property_name = matches[i];
				const property_value = matches[i + 1];

				if (
					undefined === property_name
					&& undefined === property_value
				) {
					continue;
				}

				const property_schema = TypedString.maybe_add_$defs(
					schema,
					coerced_schema.properties[
						property_name
					],
				);

				const type_for_property = schema_parser.parse(
					property_schema,
				);

				const value = type_for_property
					.generate_typescript_data(
						property_value,
						schema_parser,
						property_schema,
					);

				const property_assignment = factory
					.createPropertyAssignment(
						property_name,
						value,
					);

				property_assignments.push(property_assignment);
			}

			const sanity_check: TypedString_DataTo<'Object'> = factory
				.createObjectLiteralExpression(
					property_assignments,
					true,
				);

			result = sanity_check as typeof result;
		} else if ('Object_list' === mode) {
			const coerced_schema = schema.typed_string as TypedString_type<
				'Object_list'
			>['typed_string'];

			const properties = Object.keys(
				coerced_schema.items.properties,
			);

			const regex = new RegExp(`^\\((?:,?\\(${properties.map(
				(
					property,
					i,
				): [
					string,
					string,
				] => {
					const next_required = (
						i >= 0
						&& i < (properties.length - 1)
						&& (
							coerced_schema.items.required || ([] as string[])
						).includes(properties[i + 1])
					);

					const current_required = (
						coerced_schema.items.required || ([] as string[])
					).includes(property);

					return [
						property,
						`(${
							RegExp.escape(property)
						})=(\\([^)]+\\)|[^=]+|[A-Z]+\\((?:[^)]+)\\)${
							!current_required
							&& next_required
								? ',?'
								: ''
						})`,
					];
				},
			).map(([
				property,
				regex,
			], i) => {
				const previous_optional = (
					i > 0
					&& !(
						coerced_schema.items.required || ([] as string[])
					).includes(properties[i - 1])
				);

				const current_required = (
					coerced_schema.items.required || ([] as string[])
				).includes(property);

				return (
					current_required
						? `${
							i > 0
								? (
									previous_optional
										? ',?'
										: ','
								)
								: ''
						}${regex}`
						: `(?:${i > 0 ? ',' : ''}${regex})?`
				);
			}).join('')}\\))*\\)$`);

			const match = regex.exec(data);

			if (null === match) {
				throw new TypeError('Data does not match expected regex!');
			}

			const [, ...matches_unfiltered] = match;

			const matches = matches_unfiltered;

			const array_values: ObjectLiteralExpression[] = [];

			for (let i = 0; i < matches.length; i += (properties.length * 2)) {
				const property_assignments: PropertyAssignment[] = [];

				for (let j = 0; j < properties.length; ++j) {
					const property_name = matches[i + (j * 2)];

					if (
						undefined === property_name
					) {
						if (coerced_schema.items.required?.includes(
							properties[j],
						)) {
							throw new TypeError(
								'Required property not found!',
							);
						} else {
							continue;
						}
					}

					let property_value = matches[i + (j * 2) + 1];

					if (/^"[^"]+"$/.test(property_value)) {
						property_value = property_value.substring(
							1,
							property_value.length - 1,
						);
					}

					const property_schema = coerced_schema.items.properties[
						property_name
					];

					const property_assignment = factory
						.createPropertyAssignment(
							property_name,
							schema_parser
								.parse(
									property_schema,
								)
								.generate_typescript_data(
									property_value,
									schema_parser,
									TypedString.maybe_add_$defs(
										schema,
										property_schema,
									),
								),
						);

					property_assignments.push(property_assignment);
				}

				array_values.push(factory.createObjectLiteralExpression(
					property_assignments,
					true,
				));
			}

			const sanity_check: TypedString_DataTo<'Object_list'> = factory
				.createArrayLiteralExpression(array_values);

			result = sanity_check as typeof result;
		} else if ('String_enum_list' === mode) {
			const coerced_schema = schema.typed_string as TypedString_type<
				'String_enum_list'
			>['typed_string'];

			const parts = data
				.substring(1, data.length - 1)
				.split(',');

			const matches = parts
				.map((e) => (
					/^"[^"]+"/.test(e)
						? e.substring(1, e.length - 1)
						: e
				))
				.filter((maybe) => coerced_schema.items.enum.includes(maybe));

			if (parts.length !== matches.length) {
				throw new TypeError('Data contains unsupported elements!');
			}

			const sanity_check: TypedString_DataTo<
				'String_enum_list'
			> = factory.createArrayLiteralExpression(
				matches
					.filter((maybe) => undefined !== maybe)
					.map((value) => factory.createStringLiteral(value)),
			);

			result = sanity_check as typeof result;
		} else if ('BlueprintGeneratedClass_quoted_list' === mode) {
			const coerced = (
				schema.typed_string as TypedString_type<
					'BlueprintGeneratedClass_quoted_list'
				>['typed_string']
			).items;

			const regex = BlueprintGeneratedClass_quoted.regex_from_value(
				coerced.DocsDotJson_BlueprintGeneratedClass_quoted,
			);

			const pattern = new RegExp(`^\\(${regex}(?:,${regex})*\\)$`);

			if (!pattern.test(data)) {
				throw new TypeError('Data does not match expected pattern!');
			}

			const data_parts = data.substring(1, data.length - 1).split(',');

			const sanity_check: TypedString_DataTo<
				'BlueprintGeneratedClass_quoted_list'
			> = factory.createArrayLiteralExpression(
				data_parts
					.map((value) => schema_parser
						.parse_by_type(value)
						.generate_typescript_data(
							value,
							schema_parser,
							coerced,
						),
					),
			);

			result = sanity_check as typeof result;
		} else if ('FGTrainPlatformConnection_quoted_list' === mode) {
			const coerced = (
				schema.typed_string as TypedString_type<
					'FGTrainPlatformConnection_quoted_list'
				>['typed_string']
			).items;

			const regex = FGTrainPlatformConnection.regex_from_value(
				coerced.DocsDotJson_FGTrainPlatformConnection_quoted,
			);

			const pattern = new RegExp(`^\\(${regex}(?:,${regex})*\\)$`);

			if (!pattern.test(data)) {
				throw new TypeError('Data does not match expected pattern!');
			}

			const data_parts = data.substring(1, data.length - 1).split(',');

			const sanity_check: TypedString_DataTo<
				'FGTrainPlatformConnection_quoted_list'
			> = factory.createArrayLiteralExpression(
				data_parts
					.map((value) => schema_parser
						.parse_by_type(value)
						.generate_typescript_data(
							value,
							schema_parser,
							coerced,
						),
					),
			);

			result = sanity_check as typeof result;
		} else if ('FGRailroadTrackConnectionComponent_quoted_list' === mode) {
			const coerced = (
				schema.typed_string as TypedString_type<
					'FGRailroadTrackConnectionComponent_quoted_list'
				>['typed_string']
			).items;

			const regex = FGRailroadTrackConnectionComponent.regex_from_value(
				coerced.DocsDotJson_FGRailroadTrackConnectionComponent_quoted,
			);

			const pattern = new RegExp(`^\\(${regex}(?:,${regex})*\\)$`);

			if (!pattern.test(data)) {
				throw new TypeError('Data does not match expected pattern!');
			}

			const data_parts = data.substring(1, data.length - 1).split(',');

			const sanity_check: TypedString_DataTo<
				'FGRailroadTrackConnectionComponent_quoted_list'
			> = factory.createArrayLiteralExpression(
				data_parts
					.map((value) => schema_parser
						.parse_by_type(value)
						.generate_typescript_data(
							value,
							schema_parser,
							coerced,
						),
					),
			);

			result = sanity_check as typeof result;
		} else {
			throw new TypeError('Not implemented!');
		}
		*/

		return result;
	}

	async generate_typescript_type({
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
		options: {
			String_enum_list: {
				quoted: boolean,
			},
		},
	) {
		/*
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
		}
		*/

		if ('Thing_list' === mode) {
			const coerced_schema = schema as TypedString_type<
				'Thing_list'
			>[
				'typed_string'
			];

			return Thing_list_ajv_macro(coerced_schema);
		} else if ('Thingish_list' === mode) {
			const coerced_schema = schema as TypedString_type<
				'Thingish_list'
			>[
				'typed_string'
			];

			return Thingish_list_schema_ajv_macro(coerced_schema);

		/*
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
		} else if ('FGRailroadTrackConnectionComponent_quoted_list' === mode) {
			const regex = FGRailroadTrackConnectionComponent
				.regex_from_value(
					(schema as TypedString_type<
						'FGRailroadTrackConnectionComponent_quoted_list'
					>[
						'typed_string'
					]).items
						.DocsDotJson_FGRailroadTrackConnectionComponent_quoted,
				);

			return {
				pattern: `^\\(${regex}(?:,${regex})*\\)$`,
			};
		} else {
			throw new TypeError('Mode not implemented!');
		*/
		}

		const coerced = schema as TypedString_type<
			Exclude<Mode, (
				| 'Thing_list'
				| 'Thingish_list'
			)>
		>['typed_string'];

		return TypedString__update4.ajv_macro(
			mode,
			coerced,
			options,
		);
	}

	static generate_schema_definition(): Readonly<TypedString_schema_OneOf> {
		return Object.freeze({
			oneOf: [
				...TypedString__update4.generate_schema_definition().oneOf,
				this.#generate_schema_definition(
					'Thing_list',
				),
				this.#generate_schema_definition(
					'Thingish_list',
				),
			],
		});
	}

	static #generate_schema_definition<
		Mode extends (
			| 'Thing_list'
			| 'Thingish_list'
		),
	>(
		mode: Mode,
	): Readonly<TypedString_schema<Mode>> {
		let typed_string: TypedString_schema_properties_typed_string<
			Mode
		>;

		if ('Thing_list' === mode) {
			typed_string = Thing_list_generate_schema_definition(
			) as typeof typed_string;
		} else if ('Thingish_list' === mode) {
			typed_string = Thingish_list_generate_schema_definition(
			) as typeof typed_string;
		} else {
			throw new TypeError('Not implemented');
		}

		/*
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
		} else
		*/

		/*
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
		} else if ('FGRailroadTrackConnectionComponent_quoted_list' === mode) {
			const sanity_check_subtype: (
				FGRailroadTrackConnectionComponent_quoted_schema
			) = FGRailroadTrackConnectionComponent
				.generate_schema_definition();

			const sanity_check_options: array_options<
				'items',
				'specified',
				'yes',
				'optional',
				FGRailroadTrackConnectionComponent_quoted_schema
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
					'FGRailroadTrackConnectionComponent_quoted_list'
				>
			> = ArrayType.generate_schema_definition(sanity_check_options);

			typed_string = sanity_check as typeof typed_string;
		} else {
			throw new TypeError('not implemented!');
		}
		*/

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
				...TypedString__update4.generate_type_definition().oneOf,
				this.#generate_type_definition('Thing_list'),
				this.#generate_type_definition('Thingish_list'),
			],
		});
	}

	static #generate_type_definition<
		Mode extends (
			| 'Thing_list'
			| 'Thingish_list'
		),
	>(
		mode: Mode,
	): Readonly<TypedString_type<Mode>> {
		let typed_string: TypedString_type<Mode>['typed_string'];

		if ('Thing_list' === mode) {
			typed_string = Thing_list_generate_type_definition(
			) as typeof typed_string;
		} else if ('Thingish_list' === mode) {
			typed_string = Thingish_list_generate_type_definition_prefixItems(
			) as unknown as typeof typed_string;
		} else {
			throw new TypeError('Not implemented!');
		}

		/*
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
		} else if ('FGRailroadTrackConnectionComponent_quoted_list' === mode) {
			const sanity_check: TypedString_type<
				'FGRailroadTrackConnectionComponent_quoted_list'
			>['typed_string'] = {
				type: 'array',
				minItems: PositiveIntegerGuard(1),
				uniqueItems: true,
				items: FGRailroadTrackConnectionComponent
					.generate_type_definition(),
			};

			typed_string = sanity_check as typeof typed_string;
		} else {
		*/

		/*
		}
		*/

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
			throw new TypeError('No mode determined for schema!');
		}

		return match[0];
	}
}
