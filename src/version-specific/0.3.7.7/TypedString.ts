import type {
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	KeywordTypeNode,
	PropertyAssignment,
	TemplateLiteralTypeNode,
} from 'typescript';
import {
	SyntaxKind,
} from 'typescript';

import type {
	object_schema,
	object_type_base,
	object_TypeLiteralNode_possibly_extended,
	ObjectOfSchemas,
	PositiveInteger,
	SchemaDefinitionDefinition,
	SchemalessTypeOptions,
	SchemaObject,
	SchemaParser,
	TypeDefinitionSchema,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	ObjectUnspecified,
	PositiveIntegerGuard,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	KeywordType,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

import type {
	ArrayLiteralExpression,
	EmptyTupleTypeNode,
	Identifier,
	LiteralTypeNode,
	ObjectLiteralExpression,
	RestedTupleTypeNode,
	StringLiteral,
	TupleTypeNode,
	UnionTypeNode,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';
import {
	factory,
	StringTupleToLiteralTypeNodeTuple,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import type {
	BlueprintGeneratedClass_quoted_schema,
	BlueprintGeneratedClass_quoted_type,
} from './BlueprintGeneratedClass.ts';
import {
	BlueprintGeneratedClass_quoted,
} from './BlueprintGeneratedClass.ts';

import type {
	FGTrainPlatformConnection_quoted_schema,
	FGTrainPlatformConnection_quoted_type,
} from './FGTrainPlatformConnection.ts';
import {
	FGTrainPlatformConnection,
} from './FGTrainPlatformConnection.ts';

type TypedString_mode = (
	| 'Empty'
	| 'None'
	| 'Object'
	| 'Object_list'
	| 'String_enum_list'
	| 'BlueprintGeneratedClass_quoted_list'
	| 'FGTrainPlatformConnection_quoted_list'
);

type TypedString_type<
	Mode extends TypedString_mode,
> = {
	type: 'string',
	typed_string: {
		Empty: {
			const: '',
		},
		None: {
			const: '(None)',
		},
		Object: object_type_base<
			'properties',
			SchemaObject,
			[string, ...string[]],
			ObjectOfSchemas,
			ObjectOfSchemas
		>,
		Object_list: {
			minItems: PositiveInteger<number>,
			items: object_type_base<
				'properties',
				SchemaObject,
				[string, ...string[]],
				ObjectOfSchemas,
				ObjectOfSchemas
			>,
		},
		String_enum_list: {
			enum_list: [string, ...string[]],
		},
		BlueprintGeneratedClass_quoted_list: {
			minItems: PositiveInteger<number>,
			items: BlueprintGeneratedClass_quoted_type,
		},
		FGTrainPlatformConnection_quoted_list: {
			minItems: PositiveInteger<number>,
			items: FGTrainPlatformConnection_quoted_type,
		},
	}[Mode],
};

type TypedString_matcher<
	Mode extends TypedString_mode,
> = [
	Mode,
	ValidateFunction<TypedString_type<Mode>['typed_string']>,
];

type TypedString_type_OneOf = {
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

type TypedString_schema_properties_typed_string<
	Mode extends TypedString_mode,
> = {
	Empty: {
		type: 'string',
		const: '',
	},
	None: {
		type: 'string',
		const: '(None)',
	},
	Object: object_schema<'properties'>,
	Object_list: {
		type: 'object',
		required: ['minItems', 'items'],
		additionalProperties: false,
		properties: {
			minItems: {
				type: 'integer',
				minimum: 1,
			},
			items: object_schema<'properties'>,
		},
	},
	String_enum_list: {
		type: 'object',
		required: ['enum_list'],
		additionalProperties: false,
		properties: {
			enum_list: {
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
	BlueprintGeneratedClass_quoted_list: {
		type: 'object',
		required: ['minItems', 'items'],
		additionalProperties: false,
		properties: {
			minItems: {
				type: 'integer',
				minimum: 1,
			},
			items: BlueprintGeneratedClass_quoted_schema,
		},
	},
	FGTrainPlatformConnection_quoted_list: {
		type: 'object',
		required: ['minItems', 'items'],
		additionalProperties: false,
		properties: {
			minItems: {
				type: 'integer',
				minimum: 1,
			},
			items: FGTrainPlatformConnection_quoted_schema,
		},
	},
}[Mode];

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
		TypedString_schema<'Empty'>,
		TypedString_schema<'None'>,
		TypedString_schema<'Object'>,
		TypedString_schema<'Object_list'>,
		TypedString_schema<'String_enum_list'>,
		TypedString_schema<'BlueprintGeneratedClass_quoted_list'>,
		TypedString_schema<'FGTrainPlatformConnection_quoted_list'>,
	],
};

type TypedString_SchemaTo<
	Mode extends TypedString_mode,
> = {
	Empty: KeywordTypeNode<SyntaxKind.UndefinedKeyword>,
	None: EmptyTupleTypeNode,
	Object: object_TypeLiteralNode_possibly_extended<
		'properties'
	>,
	Object_list: RestedTupleTypeNode<object_TypeLiteralNode_possibly_extended<
		'properties'
	>>,
	String_enum_list: (
		| RestedTupleTypeNode<UnionTypeNode<[
			LiteralTypeNode<StringLiteral>,
			LiteralTypeNode<StringLiteral>,
			...LiteralTypeNode<StringLiteral>[],
		]>>
		| TupleTypeNode<
			LiteralTypeNode<StringLiteral>,
			[LiteralTypeNode<StringLiteral>]
		>
	),
	BlueprintGeneratedClass_quoted_list: RestedTupleTypeNode<
		TemplateLiteralTypeNode
	>,
	FGTrainPlatformConnection_quoted_list: RestedTupleTypeNode<
		TemplateLiteralTypeNode
	>,
}[Mode];

type TypedString_DataTo<
	Mode extends TypedString_mode,
> = {
	Empty: Identifier<'undefined'>,
	None: ArrayLiteralExpression<never, never[], false>,
	Object: ObjectLiteralExpression,
	Object_list: ArrayLiteralExpression<
		ObjectLiteralExpression,
		[ObjectLiteralExpression, ...ObjectLiteralExpression[]],
		true
	>,
	String_enum_list: ArrayLiteralExpression<
		StringLiteral,
		[StringLiteral, ...StringLiteral[]],
		true
	>,
	BlueprintGeneratedClass_quoted_list: ArrayLiteralExpression<
		StringLiteral,
		[StringLiteral, ...StringLiteral[]],
		true
	>,
	FGTrainPlatformConnection_quoted_list: ArrayLiteralExpression<
		StringLiteral,
		[StringLiteral, ...StringLiteral[]],
		true
	>,
}[Mode];

type Type_Generator<
	Mode extends TypedString_mode,
> = {
	None: undefined,
	Empty: undefined,
	String_enum_list: undefined,
	Object: (
		schema: object_type_base<
			'properties',
			SchemaObject,
			[string, ...string[]],
			ObjectOfSchemas,
			ObjectOfSchemas
		>,
		schema_parser: SchemaParser,
	) => Promise<object_TypeLiteralNode_possibly_extended<'properties'>>,
	Object_list: (
		schema: object_type_base<
			'properties',
			SchemaObject,
			[string, ...string[]],
			ObjectOfSchemas,
			ObjectOfSchemas
		>,
		schema_parser: SchemaParser,
	) => Promise<object_TypeLiteralNode_possibly_extended<'properties'>>,
	BlueprintGeneratedClass_quoted_list: (
		schema: BlueprintGeneratedClass_quoted_type,
	) => Promise<TemplateLiteralTypeNode>,
	FGTrainPlatformConnection_quoted_list: (
		schema: FGTrainPlatformConnection_quoted_type,
	) => Promise<TemplateLiteralTypeNode>,
}[Mode];

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

	constructor(options: SchemalessTypeOptions) {
		const mode_from_schema = {
			Empty: options.ajv.compile<
				TypedString_type<'Empty'>['typed_string']
			>(
				TypedString
					.#generate_schema_definition('Empty')
					.properties.typed_string,
			),
			None: options.ajv.compile<
				TypedString_type<'None'>['typed_string']
			>(
				TypedString
					.#generate_schema_definition('None')
					.properties.typed_string,
			),
			Object: options.ajv.compile<
				TypedString_type<'Object'>['typed_string']
			>(
				TypedString
					.#generate_schema_definition('Object')
					.properties.typed_string,
			),
			Object_list: options.ajv.compile<
				TypedString_type<'Object_list'>['typed_string']
			>(
				TypedString
					.#generate_schema_definition('Object_list')
					.properties.typed_string,
			),
			String_enum_list: options.ajv.compile<
				TypedString_type<'String_enum_list'>['typed_string']
			>(
				TypedString
					.#generate_schema_definition('String_enum_list')
					.properties.typed_string,
			),
			BlueprintGeneratedClass_quoted_list: options.ajv.compile<
				TypedString_type<
					'BlueprintGeneratedClass_quoted_list'
				>['typed_string']
			>(
				TypedString
					.#generate_schema_definition(
						'BlueprintGeneratedClass_quoted_list',
					)
					.properties.typed_string,
			),
			FGTrainPlatformConnection_quoted_list: options.ajv.compile<
				TypedString_type<
					'FGTrainPlatformConnection_quoted_list'
				>['typed_string']
			>(
				TypedString
					.#generate_schema_definition(
						'FGTrainPlatformConnection_quoted_list',
					)
					.properties.typed_string,
			),
		};

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

					return TypedString.ajv_macro(mode, schema);
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
		let result: TypedString_DataTo<Mode>;

		const mode = TypedString.mode_from_schema(
			schema.typed_string,
			this.#mode_by_validator,
		);

		if ('Empty' === mode) {
			const sanity_check: TypedString_DataTo<
				'Empty'
			> = factory.createIdentifier('undefined');

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

				const property_schema = TypedString.maybe_add_$defs(
					schema,
					coerced_schema.properties[
						property_name
					],
				);

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
								property_schema,
							),
					);

				property_assignments.push(property_assignment);
			}

			const sanity_check: TypedString_DataTo<'Object'> = factory
				.createObjectLiteralExpression(property_assignments);

			result = sanity_check as typeof result;
		} else if ('Object_list' === mode) {
			const coerced_schema = schema.typed_string as TypedString_type<
				'Object_list'
			>['typed_string'];

			const properties = Object.keys(
				coerced_schema.items.properties,
			);

			const regex = new RegExp(`^\\(\\((?:,?${properties.map(
				(property): [
					string,
					string,
				] => [
					property,
					`(${
						RegExp.escape(property)
					})=([^=]+|[A-Z]+\\((?:[^)]+)\\)|\\([^)]+\\))`,
				],
			).map(([
				property,
				regex,
			], i) => (
				(
					coerced_schema.items.required || ([] as string[])
				).includes(property)
					? `${i > 0 ? ',' : ''}${regex}`
					: `(?:${i > 0 ? ',' : ''}${regex})?`
			)).join('')})*\\)\\)$`);

			const match = regex.exec(data);

			if (null === match) {
				throw new TypeError('Data does not match expected regex!');
			}

			const [, ...matches_unfiltered] = match;

			const matches = matches_unfiltered
				.filter((e) => 'string' === typeof e);

			const array_values: ObjectLiteralExpression[] = [];

			for (let i = 0; i < matches.length; i += (properties.length * 2)) {
				const property_assignments: PropertyAssignment[] = [];

				for (let j = 0; j < properties.length; j += 2) {
					const property_name = matches[i + j];
					const property_value = matches[i + j + 1];

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
				.filter((maybe) => coerced_schema.enum_list.includes(maybe));

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
		} else {
			throw new TypeError('Not implemented!');
		}

		return result;
	}

	async generate_typescript_type({
		schema,
		schema_parser,
	}: {
		schema: TypedString_type<Mode>,
		schema_parser: SchemaParser,
	}): Promise<TypedString_SchemaTo<Mode>> {
		let result: TypedString_SchemaTo<Mode>;

		const mode = TypedString.mode_from_schema(
			schema.typed_string,
			this.#mode_by_validator,
		);

		if ('Empty' === mode) {
			const sanity_check: TypedString_SchemaTo<
				'Empty'
			> = factory.createKeywordTypeNode(SyntaxKind.UndefinedKeyword);

			result = sanity_check as typeof result;
		} else if ('None' === mode) {
			const sanity_check: TypedString_SchemaTo<
				'None'
			> = factory.createTupleTypeNode([]);

			result = sanity_check as typeof result;
		} else if ('Object' === mode) {
			const instance = schema_parser.types
				.find((maybe): maybe is ObjectUnspecified<
					{[key: string]: unknown},
					'properties'
				> => (
					maybe instanceof ObjectUnspecified
					&& 'properties' === maybe.properties_mode
				));

			if (undefined === instance) {
				throw new TypeError(`schema_parser not loaded with ${
					ObjectUnspecified.constructor.name
				}<{[key: string]: unknown}, 'properties'>`);
			}

			const type_generator: Type_Generator<
				'Object'
			> = (
				schema: object_type_base<
					'properties',
					SchemaObject,
					[string, ...string[]],
					ObjectOfSchemas,
					ObjectOfSchemas
				>,
				schema_parser: SchemaParser,
			) => {
				return instance.generate_typescript_type({
					schema,
					schema_parser,
				});
			};

			const coerced_schema: TypedString_type<
				'Object'
			> = schema as TypedString_type<
				'Object'
			>;

			const sanity_check: TypedString_SchemaTo<
				'Object'
			> = await type_generator(
				coerced_schema.typed_string,
				schema_parser,
			);

			result = sanity_check as typeof result;
		} else if ('Object_list' === mode) {
			const instance = schema_parser.types
				.find((maybe): maybe is ObjectUnspecified<
					{[key: string]: unknown},
					'properties'
				> => (
					maybe instanceof ObjectUnspecified
					&& 'properties' === maybe.properties_mode
				));

			if (undefined === instance) {
				throw new TypeError(`schema_parser not loaded with ${
					ObjectUnspecified.constructor.name
				}<{[key: string]: unknown}, 'properties'>`);
			}

			const type_generator: Type_Generator<
				'Object_list'
			> = (
				schema: object_type_base<
					'properties',
					SchemaObject,
					[string, ...string[]],
					ObjectOfSchemas,
					ObjectOfSchemas
				>,
				schema_parser: SchemaParser,
			) => {
				return instance.generate_typescript_type({
					schema,
					schema_parser,
				});
			};

			const coerced_schema: TypedString_type<
				'Object_list'
			> = schema as TypedString_type<
				'Object_list'
			>;

			const sanity_check: TypedString_SchemaTo<
				'Object_list'
			> = factory.createTupleTypeNode([
				await type_generator(
					coerced_schema.typed_string.items,
					schema_parser,
				),
				factory.createRestTypeNode(
					factory.createArrayTypeNode(
						await type_generator(
							coerced_schema.typed_string.items,
							schema_parser,
						),
					),
				),
			]);

			result = sanity_check as typeof result;
		} else if ('String_enum_list' === mode) {
			const coerced_schema: TypedString_type<
				'String_enum_list'
			> = schema as TypedString_type<
				'String_enum_list'
			>;

			function enum_generator(
				value: [string, string, ...string[]],
			): UnionTypeNode<[
				LiteralTypeNode<StringLiteral>,
				LiteralTypeNode<StringLiteral>,
				...LiteralTypeNode<StringLiteral>[],
			]>;
			function enum_generator(
				value: [string],
			): LiteralTypeNode<StringLiteral>;
			function enum_generator(
				value: [string, ...string[]],
			): (
				| UnionTypeNode<[
					LiteralTypeNode<StringLiteral>,
					LiteralTypeNode<StringLiteral>,
					...LiteralTypeNode<StringLiteral>[],
				]>
				| LiteralTypeNode<StringLiteral>
			) {
				if (1 === value.length) {
					return factory.createLiteralTypeNode(
						factory.createStringLiteral(value[0]),
					);
				}

				return factory.createUnionTypeNode(
					StringTupleToLiteralTypeNodeTuple(
						value as [string, string, ...string[]],
					),
				);
			}

			if (coerced_schema.typed_string.enum_list.length > 1) {
				const coerced_enum = coerced_schema.typed_string.enum_list as [
					string,
					string,
					...string[],
				];

				const a = enum_generator(coerced_enum);
				const b = factory.createRestTypeNode(
					factory.createArrayTypeNode(
						enum_generator(coerced_enum),
					),
				);

				const sanity_check: RestedTupleTypeNode<
					UnionTypeNode<[
						LiteralTypeNode<StringLiteral>,
						LiteralTypeNode<StringLiteral>,
						...LiteralTypeNode<StringLiteral>[],
					]>
				> = factory.createTupleTypeNode([
					a,
					b,
				]);

				result = sanity_check as typeof result;
			} else {
				const coerced_enum = coerced_schema.typed_string.enum_list as [
					string,
				];

				const sanity_check: TupleTypeNode<
					LiteralTypeNode<StringLiteral>,
					[LiteralTypeNode<StringLiteral>]
				> = factory.createTupleTypeNode([
					enum_generator(coerced_enum),
				]);

				result = sanity_check as typeof result;
			}
		} else if ('BlueprintGeneratedClass_quoted_list' === mode) {
			const instance = schema_parser.types
				.find((
					maybe,
				) => maybe instanceof BlueprintGeneratedClass_quoted);

			if (undefined === instance) {
				throw new TypeError(`schema_parser not loaded with ${
					BlueprintGeneratedClass_quoted.constructor.name
				}`);
			}

			const type_generator: Type_Generator<
				'BlueprintGeneratedClass_quoted_list'
			> = (
				schema: BlueprintGeneratedClass_quoted_type,
			) => {
				return instance.generate_typescript_type({schema});
			};

			const coerced_schema: TypedString_type<
				'BlueprintGeneratedClass_quoted_list'
			> = schema as TypedString_type<
				'BlueprintGeneratedClass_quoted_list'
			>;

			const sanity_check: TypedString_SchemaTo<
				'BlueprintGeneratedClass_quoted_list'
			> = factory.createTupleTypeNode([
				await type_generator(
					coerced_schema.typed_string.items,
				),
				factory.createRestTypeNode(
					factory.createArrayTypeNode(
						await type_generator(
							coerced_schema.typed_string.items,
						),
					),
				),
			]);

			result = sanity_check as typeof result;
		} else if ('FGTrainPlatformConnection_quoted_list' === mode) {
			const instance = schema_parser.types
				.find((
					maybe,
				) => maybe instanceof FGTrainPlatformConnection);

			if (undefined === instance) {
				throw new TypeError(`schema_parser not loaded with ${
					FGTrainPlatformConnection.constructor.name
				}`);
			}

			const type_generator: Type_Generator<
				'FGTrainPlatformConnection_quoted_list'
			> = (
				schema: FGTrainPlatformConnection_quoted_type,
			) => {
				return instance.generate_typescript_type({schema});
			};

			const coerced_schema: TypedString_type<
				'FGTrainPlatformConnection_quoted_list'
			> = schema as TypedString_type<
				'FGTrainPlatformConnection_quoted_list'
			>;

			const sanity_check: TypedString_SchemaTo<
				'FGTrainPlatformConnection_quoted_list'
			> = factory.createTupleTypeNode([
				await type_generator(
					coerced_schema.typed_string.items,
				),
				factory.createRestTypeNode(
					factory.createArrayTypeNode(
						await type_generator(
							coerced_schema.typed_string.items,
						),
					),
				),
			]);

			result = sanity_check as typeof result;
		} else {
			throw new TypeError('not implemented!');
		}

		return result;
	}

	static ajv_macro<
		Mode extends TypedString_mode,
	>(
		mode: Mode,
		schema: TypedString_type<Mode>['typed_string'],
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
					}=.+)${
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

			const regex = `${
				coerced.enum_list
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
			const sanity_check: TypedString_schema_properties_typed_string<
				'Object_list'
			> = {
				type: 'object',
				required: ['minItems', 'items'],
				additionalProperties: false,
				properties: {
					minItems: {
						type: 'integer',
						minimum: 1,
					},
					items: ObjectUnspecified
						.generate_schema_definition({
							properties_mode: 'properties',
						}),
				},
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('String_enum_list' === mode) {
			const sanity_check: TypedString_schema_properties_typed_string<
				'String_enum_list'
			> = {
				type: 'object',
				required: ['enum_list'],
				additionalProperties: false,
				properties: {
					enum_list: {
						type: 'array',
						minItems: 1,
						uniqueItems: true,
						items: {
							type: 'string',
							minLength: 1,
						},
					},
				},
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('BlueprintGeneratedClass_quoted_list' === mode) {
			const sanity_check: TypedString_schema_properties_typed_string<
				'BlueprintGeneratedClass_quoted_list'
			> = {
				type: 'object',
				required: ['minItems', 'items'],
				additionalProperties: false,
				properties: {
					minItems: {
						type: 'integer',
						minimum: 1,
					},
					items: BlueprintGeneratedClass_quoted
						.generate_schema_definition({
							mode: 'quoted',
						}),
				},
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('FGTrainPlatformConnection_quoted_list' === mode) {
			const sanity_check: TypedString_schema_properties_typed_string<
				'FGTrainPlatformConnection_quoted_list'
			> = {
				type: 'object',
				required: ['minItems', 'items'],
				additionalProperties: false,
				properties: {
					minItems: {
						type: 'integer',
						minimum: 1,
					},
					items: FGTrainPlatformConnection
						.generate_schema_definition(),
				},
			};

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

	static generate_type_definition<
		Mode extends TypedString_mode,
	>({
		mode,
	}: {
		mode: Mode,
	}): Readonly<TypedString_type<Mode>> {
		let typed_string: TypedString_type<Mode>['typed_string'];

		if ('Empty' === mode) {
			const sanity_check: TypedString_type<'Empty'>['typed_string'] = {
				const: '',
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('None' === mode) {
			const sanity_check: TypedString_type<'None'>['typed_string'] = {
				const: '(None)',
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('Object' === mode) {
			const sanity_check: TypedString_type<
				'Object'
			>['typed_string'] = ObjectUnspecified.generate_type_definition({
				properties_mode: 'properties',
			});

			typed_string = sanity_check as typeof typed_string;
		} else if ('Object_list' === mode) {
			const sanity_check: TypedString_type<
				'Object_list'
			>['typed_string'] = {
				minItems: PositiveIntegerGuard(1),
				items: ObjectUnspecified.generate_type_definition({
					properties_mode: 'properties',
				}),
			};

			typed_string = sanity_check as typeof typed_string;
		} else if ('BlueprintGeneratedClass_quoted_list' === mode) {
			const sanity_check: TypedString_type<
				'BlueprintGeneratedClass_quoted_list'
			>['typed_string'] = {
				minItems: PositiveIntegerGuard(1),
				items: BlueprintGeneratedClass_quoted
					.generate_type_definition({
						mode: 'quoted',
					}),
			};

			typed_string = sanity_check as typeof typed_string;
		} else {
			const sanity_check: TypedString_type<
				'FGTrainPlatformConnection_quoted_list'
			>['typed_string'] = {
				minItems: PositiveIntegerGuard(1),
				items: FGTrainPlatformConnection
					.generate_type_definition(),
			};

			typed_string = sanity_check as typeof typed_string;
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
