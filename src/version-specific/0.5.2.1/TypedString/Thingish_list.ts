import type {
	Expression,
} from 'typescript';
import {
	factory,
} from 'typescript';

import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	$ref_type,
	array_schema,
	array_type,
	SchemaObject,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$ref,
	ArrayType,
	PositiveIntegerGuard,
	PositiveIntegerOrZeroGuard,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	ArrayLiteralExpression,
	RestedTupleTypeNode,
	TypeReferenceNode,
	UnionTypeNode,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import type {
	templated_string_type,
	TemplatedStringParts,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';
import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

type Thingish_list_prefixItems_item = (
	| $ref_type
);

type Thingish_list_items_item = (
	| templated_string_type
);

type Thingish_list_outter<
	SelfReference extends SchemaObject,
> = {
	type: 'string',
	typed_string: (
		& array_type<
			'items',
			'specified',
			'yes',
			'with',
			SelfReference
		>
		& {
			maxItems: ReturnType<typeof PositiveIntegerOrZeroGuard<number>>,
		}
	),
};

type Thingish_list_prefixItems = (
	& array_type<
		'prefixItems',
		'specified',
		'yes',
		'with',
		SchemaObject,
		[
			Thingish_list_prefixItems_item,
			...Thingish_list_prefixItems_item[],
		]
	>
	& {
		maxItems: ReturnType<typeof PositiveIntegerOrZeroGuard<number>>,
	}
);

type Thingish_list_items = array_type<
	'items',
	'specified',
	'yes',
	'with',
	Thingish_list_items_item
>;

export type Thingish_list_type<
	SelfReference extends SchemaObject,
> = (
	| Thingish_list_outter<SelfReference>
	| Thingish_list_prefixItems
	| Thingish_list_items
);

const unspecified__prefixItems = ArrayType.generate_schema_definition({
	array_mode: 'prefixItems',
	specified_mode: 'unspecified',
	unique_items_mode: 'no',
	min_items_mode: 'with',
	minItems: PositiveIntegerOrZeroGuard(1),
});

const non_self_reference__prefixItems = {
	type: 'object',
	additionalProperties: false,
	required: ['type', 'typed_string'],
	properties: {
		type: {
			type: 'string',
			const: 'string',
		},
		typed_string: {
			...unspecified__prefixItems,
			properties: {
				...unspecified__prefixItems.properties,
				prefixItems: {
					...unspecified__prefixItems.properties.prefixItems,
					items: {
						oneOf: [
							$ref.generate_type_definition(),
						] as const,
					},
				},
			},
		},
	},
} as const;

const non_self_reference__items = {
	oneOf: [
		TemplatedString.generate_schema_definition(),
	],
} as const;

export type Thingish_list_schema_properties = {
	$id: 'DocsDotJson_thingish_list_schema',
	oneOf: [
		array_schema<
			'items',
			'specified',
			'yes',
			'with',
			{
				$ref: 'DocsDotJson_thingish_list_schema',
			}
		>,
		typeof non_self_reference__prefixItems,
		typeof non_self_reference__items,
	],
};

export type Thingish_list_SchemaTo = (
	| RestedTupleTypeNode<
		UnionTypeNode<[
			TypeReferenceNode,
			TypeReferenceNode,
			...TypeReferenceNode[],
		]>
	>
);

export type Thingish_list_DataTo = (
	| ArrayLiteralExpression<
		Expression,
		[Expression, ...Expression[]],
		true
	>
);

export function Thingish_list_compile_validator<
	SelfReference extends SchemaObject,
>(
	ajv: Ajv,
): ValidateFunction<Thingish_list_type<SelfReference>> {
	const self_reference: Readonly<
		Thingish_list_schema_properties['oneOf'][0]
	> = ArrayType.generate_schema_definition({
		array_mode: 'items',
		specified_mode: 'specified',
		unique_items_mode: 'yes',
		min_items_mode: 'with',
		items: {
			$ref: 'DocsDotJson_thingish_list_schema',
		},
		minItems: PositiveIntegerOrZeroGuard(1),
	});

	const schema: Thingish_list_schema_properties = {
		$id: 'DocsDotJson_thingish_list_schema',
		oneOf: [
			self_reference,
			non_self_reference__prefixItems,
			non_self_reference__items,
		],
	};

	return ajv.compile<Thingish_list_type<SelfReference>>(schema);
}

function is_prefixItems(
	schema: SchemaObject,
): schema is Thingish_list_prefixItems {
	return 'prefixItems' in schema;
}

function is_items(
	schema: SchemaObject,
): schema is Thingish_list_items {
	return 'items' in schema && false !== schema.items && (
		'templated_string' in schema.items
	);
}

function is_outter<
	SelfReference extends Thingish_list_type<SchemaObject>,
>(
	schema: SchemaObject,
): schema is Thingish_list_outter<SelfReference> {
	return ('typed_string' in schema);
}

function is_inner<
	SelfReference extends Thingish_list_type<SchemaObject>,
>(
	schema: SchemaObject,
): schema is Thingish_list_outter<SelfReference>['typed_string'] {
	return (
		'items' in schema
		&& false !== schema.items
	);
}

export function Thingish_list_schema_ajv_macro<
	SelfReference extends SchemaObject,
>(
	schema: Thingish_list_type<SelfReference>,
): {pattern: string} {
	return {
		pattern: `^(?:${Thingish_list_schema_to_pattern__str(schema)})$`,
	};
}

function Thingish_list_schema_to_pattern__str(
	schema: SchemaObject,
): string {
	if (is_prefixItems(schema)) {
		return Thingish_list_schema_to_pattern__prefixItems(schema);
	} else if (is_items(schema)) {
		return Thingish_list_schema_to_pattern__items(schema);
	} else if (is_outter(schema)) {
		return Thingish_list_schema_to_pattern__str(schema.typed_string);
	} else if (is_inner(schema)) {
		return Thingish_list_schema_to_pattern__inner(schema);
	}

	throw new TypeError('Unsupported schema!');
}

function Thingish_list_schema_to_pattern__prefixItems(
	schema: Thingish_list_prefixItems,
): string {
	const regex: string[] = [];

	if (schema.maxItems !== schema.minItems) {
		throw new TypeError('minItems must match maxItems!');
	}

	for (const sub_schema of schema.prefixItems) {
		if ($ref.is_supported_$ref(sub_schema)) {
			switch (sub_schema.$ref) {
				case 'docs.json.ts--common--types#/$defs/integer_string':
					regex.push('\\d+');
					break;
				case 'docs.json.ts--common--types#/$defs/decimal_string':
					regex.push('\\d+\\.\\d{6}');
					break;
				case '#/$defs/this-is-here-for-spec-reasons':
					break;
				default:
					throw new TypeError('Unsupported $ref found!');
			}
		} else {
			throw new TypeError('Not yet implemented!');
		}
	}

	return `(?:\\(${regex.join(', ')}\\))`;
}

function Thingish_list_schema_to_pattern__items(
	schema?: Thingish_list_items,
): string {
	const regex: string[] = [];

	regex.push(
		TemplatedString.to_regex_string_inner(
			(
				undefined === schema
					? [{} as TemplatedStringParts[0]]
					: schema.items.templated_string
			),
			false,
		),
	);

	return `(?:\\(,?${regex.join('|')}\\))`;
}

function Thingish_list_schema_to_pattern__inner<
	SelfReference extends Thingish_list_type<SchemaObject>,
>(
	schema: Thingish_list_outter<SelfReference>['typed_string'],
): string {
	if (schema.maxItems < schema.minItems) {
		throw new TypeError('maxItems must be greater or equal to minItems!');
	}

	const regex = Thingish_list_schema_to_pattern__str(
		schema.items,
	);

	return `(?:\\((?:,?${
		regex
	}){${
		schema.minItems
	},${
		schema.maxItems
	}}\\))`;
}

export function Thingish_list_generate_schema_definition(
): Readonly<Thingish_list_schema_properties> {
	const sanity_check_self_reference: Readonly<
		Thingish_list_schema_properties['oneOf'][0]
	> = ArrayType.generate_schema_definition({
		array_mode: 'items',
		specified_mode: 'specified',
		unique_items_mode: 'yes',
		min_items_mode: 'with',
		minItems: PositiveIntegerGuard(1),
		items: {
			$ref: 'DocsDotJson_thingish_list_schema',
		},
	});

	const sanity_check: Thingish_list_schema_properties = {
		$id: 'DocsDotJson_thingish_list_schema',
		oneOf: [
			sanity_check_self_reference,
			non_self_reference__prefixItems,
			non_self_reference__items,
		],
	};

	return Object.freeze(sanity_check);
}

export function Thingish_list_generate_type_definition_prefixItems(
) {
	return Object.freeze({
		type: 'string',
		typed_string: {
			type: 'array',
			items: false,
			prefixItems: [
				{
					$ref: '#/$defs/this-is-here-for-spec-reasons',
				},
			],
		},
	});
}

export function Thingish_list_generate_typescript_type(
	schema: Thingish_list_type<SchemaObject>,
	schema_parser: SchemaParser,
): Promise<Thingish_list_SchemaTo> {
	if ('typed_string' in schema) {
		throw new TypeError('Not implemented!');
	}

	const coerced = schema as unknown as Thingish_list_outter<
		Thingish_list_outter<
			array_type<
				'items',
				'specified',
				'yes',
				'with',
				(
					| Thingish_list_prefixItems
					| Thingish_list_items
				)
			>
		>
	>['typed_string'];

	if ('typed_string' in coerced.items) {
		return Thingish_list_generate_typescript_type__prefixItems(
			coerced as Thingish_list_outter<
				Thingish_list_outter<
					array_type<
						'items',
						'specified',
						'yes',
						'with',
						(
							| Thingish_list_prefixItems
						)
					>
				>
			>['typed_string'],
			schema_parser,
		);
	}

	return Thingish_list_generate_typescript_type__items(
		coerced as Thingish_list_outter<
			Thingish_list_outter<
				array_type<
					'items',
					'specified',
					'yes',
					'with',
					(
						| Thingish_list_items
					)
				>
			>
		>['typed_string'],
		schema_parser,
	);
}

function Thingish_list_generate_typescript_type__prefixItems(
	coerced: Thingish_list_outter<
		Thingish_list_outter<
			array_type<
				'items',
				'specified',
				'yes',
				'with',
				(
					| Thingish_list_prefixItems
				)
			>
		>
	>['typed_string'],
	schema_parser: SchemaParser,
) {
	const inner = coerced.items.typed_string;

	const instance = schema_parser.parse(coerced);

	if (!(instance instanceof ArrayType)) {
		throw new TypeError('Matched instance not of expected type!');
	}

	const inner_instance = schema_parser.parse(inner);

	if (!(inner_instance instanceof ArrayType)) {
		throw new TypeError('Matched instance not of expected type!');
	}

	const modified = {
		...coerced,
		items: {
			...inner,
		},
	};

	return instance.generate_typescript_type({
		data: undefined,
		schema: modified,
		schema_parser,
	});
}

function Thingish_list_generate_typescript_type__items(
	coerced: Thingish_list_outter<
		Thingish_list_outter<
			array_type<
				'items',
				'specified',
				'yes',
				'with',
				(
					| Thingish_list_items
				)
			>
		>
	>['typed_string'],
	schema_parser: SchemaParser,
) {
	const inner = coerced.items;

	const instance = schema_parser.parse(coerced);

	if (!(instance instanceof ArrayType)) {
		throw new TypeError('Matched instance not of expected type!');
	}

	const inner_instance = schema_parser.parse(inner);

	if (!(inner_instance instanceof TemplatedString)) {
		throw new TypeError('Matched instance not of expected type!');
	}

	const modified = {
		...coerced,
		items: {
			...inner,
		},
	};

	return instance.generate_typescript_type({
		data: undefined,
		schema: modified,
		schema_parser,
	});
}

export function Thingish_list_generate_typescript_data(
	data: string,
	schema_parser: SchemaParser,
	schema: Thingish_list_type<SchemaObject>,
): Thingish_list_DataTo {
	const full_regex = new RegExp(`^${
		Thingish_list_schema_to_pattern__str(schema)
	}$`);

	if (!full_regex.test(data)) {
		throw new TypeError('Data does not match expected regex!');
	}

	return Thingish_list_generate_typescript_data_validated(
		data,
		schema_parser,
		schema,
	) as Thingish_list_DataTo;
}

function Thingish_list_generate_typescript_data_validated(
	data: string,
	schema_parser: SchemaParser,
	schema: Thingish_list_type<SchemaObject>,
) {
	const result: Expression[] = [];

	if (is_inner(schema)) {
		const regex = ('templated_string' in schema.items)
			? new RegExp(TemplatedString.to_regex_string_inner(
				schema.items.templated_string,
				false,
			), 'g')
			: new RegExp(Thingish_list_schema_to_pattern__str(
			schema.items,
		), 'g');

		const items: string[] = [];

		data.replace(regex, (match) => {
			items.push(match);

			return match;
		});

		if (items.length < schema.minItems || items.length > schema.maxItems) {
			throw new RangeError(`Matched items expected to be between ${
				schema.minItems
			} and ${
				schema.maxItems
			}, found ${
				items.length
			}`);
		}

		if ('typed_string' in schema.items) {
			result.push(...items.map((item) => {
				return Thingish_list_generate_typescript_data_validated(
					item,
					schema_parser,
					schema.items,
				);
			}));
		} else if ('templated_string' in schema.items) {
			result.push(...items.map((item) => {
				return factory.createStringLiteral(item);
			}));
		} else {
			throw new TypeError('Unsupported schema found!');
		}

		return factory.createArrayLiteralExpression(
			result,
			true,
		);
	} else if (is_prefixItems(schema)) {
		return Thingish_list_generate_typescript_data_validated__prefixItems(
			data,
			schema_parser,
			schema,
		);
	} else if (is_outter(schema)) {
		return Thingish_list_generate_typescript_data_validated(
			data,
			schema_parser,
			schema.typed_string as unknown as Thingish_list_type<SchemaObject>,
		);
	}

	throw new TypeError('Unsupported schema found!');
}

function Thingish_list_generate_typescript_data_validated__prefixItems(
	data: string,
	schema_parser: SchemaParser,
	schema: Thingish_list_prefixItems,
) {
	const regex_parts: string[] = [];

	for (const sub_schema of schema.prefixItems) {
		if ($ref.is_supported_$ref(sub_schema)) {
			switch (sub_schema.$ref) {
				case 'docs.json.ts--common--types#/$defs/integer_string':
					regex_parts.push('(\\d+)');
					break;
				case 'docs.json.ts--common--types#/$defs/decimal_string':
					regex_parts.push('(\\d+\\.\\d{6})');
					break;
				default:
					throw new TypeError('Unsupported $ref found!');
			}
		} else {
			throw new TypeError('Not yet implemented!');
		}
	}

	const regex = new RegExp(`^\\(${regex_parts.join(', ')}\\)$`);

	const [, ...matches] = regex.exec(data) as RegExpExecArray;

	const instance = schema_parser.parse(schema);

	return instance.generate_typescript_data(
		matches,
		schema_parser,
		schema,
	);
}
