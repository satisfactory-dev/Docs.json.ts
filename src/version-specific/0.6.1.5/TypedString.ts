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
	TypedString_DataTo__by_mode as TypedString_DataTo__by_mode__update5,
	TypedString_mode as TypedString_mode__update5,
	TypedString_schema_OneOf as TypedString_schema_OneOf__update5,
	TypedString_schema_properties as TypedString_schema_properties__update5,
	TypedString_SchemaTo__by_mode as TypedString_SchemaTo__by_mode__update5,
	TypedString_type__by_mode as TypedString_type__by_mode__update5,
	TypedString_type_OneOf as TypedString_type_OneOf__update5,
} from '../0.5.2.1/TypedString.ts';
import {
	compile_validators as compile_validators__update5,
	// eslint-disable-next-line @stylistic/max-len
	generate_typescript_data__by_mode as generate_typescript_data__by_mode__update5,
	// eslint-disable-next-line @stylistic/max-len
	generate_typescript_type__by_mode as generate_typescript_type__by_mode__update5,
	TypedString as TypedString__update5,
} from '../0.5.2.1/TypedString.ts';

import type {
	AkAudioEvent_quoted_list_DataTo,
	AkAudioEvent_quoted_list_properties,
	AkAudioEvent_quoted_list_SchemaTo,
	AkAudioEvent_quoted_list_type,
} from './TypedString/AkAudioEvent_quoted_list.ts';
import {
	AkAudioEvent_quoted_list_ajv_macro,
	AkAudioEvent_quoted_list_compile_validator,
	AkAudioEvent_quoted_list_generate_schema_definition,
	AkAudioEvent_quoted_list_generate_type_definition,
	AkAudioEvent_quoted_list_generate_typescript_data,
	AkAudioEvent_quoted_list_generate_typescript_type,
} from './TypedString/AkAudioEvent_quoted_list.ts';

type TypedString_mode = (
	| TypedString_mode__update5
	| 'AkAudioEvent_list'
);

export type TypedString_type__by_mode = (
	& TypedString_type__by_mode__update5
	& {
		AkAudioEvent_list: AkAudioEvent_quoted_list_type,
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
		...TypedString_type_OneOf__update5['oneOf'],
		TypedString_type<'AkAudioEvent_list'>,
	],
};

type TypedString_schema_properties = (
	& TypedString_schema_properties__update5
	& {
		AkAudioEvent_list: AkAudioEvent_quoted_list_properties,
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
		...TypedString_schema_OneOf__update5['oneOf'],
		TypedString_schema<'AkAudioEvent_list'>,
	],
};

type TypedString_SchemaTo__by_mode = (
	& TypedString_SchemaTo__by_mode__update5
	& {
		AkAudioEvent_list: AkAudioEvent_quoted_list_SchemaTo,
	}
);

type TypedString_DataTo__by_mode = (
	& TypedString_DataTo__by_mode__update5
	& {
		AkAudioEvent_list: AkAudioEvent_quoted_list_DataTo,
	}
);

type TypedString_DataTo<
	Mode extends TypedString_mode,
> = TypedString_DataTo__by_mode[Mode];

type TypedString_SchemaTo<
	Mode extends TypedString_mode,
> = TypedString_SchemaTo__by_mode[Mode];

function compile_validators(ajv: Ajv): {
	[key in TypedString_mode]: ValidateFunction<
		TypedString_type<key>['typed_string']
	>
} {
	return {
		...compile_validators__update5(ajv),
		AkAudioEvent_list: AkAudioEvent_quoted_list_compile_validator(ajv),
	};
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

export function generate_typescript_data__by_mode<
	Mode extends TypedString_mode,
>(
	data: string,
	schema_parser: SchemaParser,
	schema: TypedString_type<Mode>,
	mode: Mode,
) {
	if ('AkAudioEvent_list' === mode) {
		const coerced = (
			schema as TypedString_type<
				'AkAudioEvent_list'
			>
		).typed_string.items;

		return AkAudioEvent_quoted_list_generate_typescript_data(
			data,
			schema_parser,
			coerced,
		) as TypedString_DataTo<Mode>;
	}

	const coerced = schema as TypedString_type<
		Exclude<Mode, (
			| 'AkAudioEvent_list'
		)>
	>;

	return generate_typescript_data__by_mode__update5(
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
	if ('AkAudioEvent_list' === mode) {
		const coerced = (
			schema as TypedString_type<
				'AkAudioEvent_list'
			>
		).typed_string;

		return AkAudioEvent_quoted_list_generate_typescript_type(
			coerced,
			schema_parser,
		) as Promise<TypedString_SchemaTo<Mode>>;
	}

	const coerced = schema as TypedString_type<
		Exclude<Mode, (
			| 'AkAudioEvent_list'
		)>
	>;

	return generate_typescript_type__by_mode__update5(
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
		if ('AkAudioEvent_list' === mode) {
			const coerced_schema = schema as TypedString_type<
				'AkAudioEvent_list'
			>[
				'typed_string'
			];

			return AkAudioEvent_quoted_list_ajv_macro(coerced_schema);
		}

		const coerced = schema as TypedString_type<
			Exclude<Mode, (
				| 'AkAudioEvent_list'
			)>
		>['typed_string'];

		return TypedString__update5.ajv_macro(
			mode,
			coerced,
			options,
		);
	}

	static generate_schema_definition(): Readonly<TypedString_schema_OneOf> {
		return Object.freeze({
			oneOf: [
				...TypedString__update5.generate_schema_definition().oneOf,
				this.#generate_schema_definition(
					'AkAudioEvent_list',
				),
			],
		});
	}

	static #generate_schema_definition<
		Mode extends (
			| 'AkAudioEvent_list'
		),
	>(
		mode: Mode,
	): Readonly<TypedString_schema<Mode>> {
		let typed_string: TypedString_schema_properties_typed_string<
			Mode
		>;

		if ('AkAudioEvent_list' === mode) {
			typed_string = AkAudioEvent_quoted_list_generate_schema_definition(
			) as typeof typed_string;
		} else {
			throw new TypeError('Not implemented');
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
				...TypedString__update5.generate_type_definition().oneOf,
				this.#generate_type_definition('AkAudioEvent_list'),
			],
		});
	}

	static #generate_type_definition<
		Mode extends (
			| 'AkAudioEvent_list'
		),
	>(
		mode: Mode,
	): Readonly<TypedString_type<Mode>> {
		let typed_string: TypedString_type<Mode>['typed_string'];

		if ('AkAudioEvent_list' === mode) {
			typed_string = AkAudioEvent_quoted_list_generate_type_definition(
			) as unknown as typeof typed_string;
		} else {
			throw new TypeError('Not implemented!');
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
			throw new TypeError('No mode determined for schema!');
		}

		return match[0];
	}
}
