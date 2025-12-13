import type {
	Expression,
	TypeNode,
} from 'typescript';

import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	array_mode,
	array_schema,
	array_type,
	SchemaObject,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	ArrayType,
	PositiveIntegerGuard,
	Type,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	ArrayLiteralExpression,
	RestedTupleTypeNode,
	TupleTypeNode,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';
import {
	factory,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import {
	object_has_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

import type {
	PropertySchemaToRegex,
} from './Object';

export type FlexibleArray_type<
	ArrayMode extends array_mode = array_mode,
> = array_type<ArrayMode>;

export type FlexibleArray_schema_properties<
	ArrayMode extends array_mode = array_mode,
> = array_schema<ArrayMode>;

export type FlexibleArray_SchemaTo<
	ArrayMode extends array_mode,
> = {
	items: RestedTupleTypeNode<TypeNode>,
	prefixItems: TupleTypeNode,
}[ArrayMode];

export type FlexibleArray_DataTo = ArrayLiteralExpression<
	Expression,
	[Expression, ...Expression[]],
	true
>;

export function FlexibleArray_compile_validator<
	ArrayMode extends array_mode = array_mode,
>(
	ajv: Ajv,
	mode: ArrayMode,
): ValidateFunction<FlexibleArray_type<ArrayMode>> {
	return ajv.compile<FlexibleArray_type<ArrayMode>>({
		items: FlexibleArray_generate_schema_definition__items(),
		prefixItems: FlexibleArray_generate_schema_definition__prefixItems(),
	}[mode]);
}

export function FlexibleArray_regex__items__inner(
	items: FlexibleArray_type<'items'>['items'],
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
	capture: boolean = false,
): string {
	let coerced: SchemaObject = items;

	let converter = property_schema_to_regex.find((maybe) => {
		return maybe.matches(coerced);
	});

	if (undefined === converter && 'typed_string' in items) {
		coerced = items.typed_string as SchemaObject;
		converter = property_schema_to_regex.find((maybe) => {
			return maybe.matches(coerced);
		});

		coerced = Type.maybe_add_$defs(
			items,
			coerced,
		);
	}

	if (undefined === converter) {
		if (
			value_is_non_array_object(coerced)
			&& 0 === Object.keys(coerced).length
			&& !capture
		) {
			return `(?:.+)`;
		}

		throw new TypeError('Cannot capture non-matched type!');
	}

	const regex = converter.to_regex(coerced);

	if (capture) {
		return `(${regex})`;
	}

	return `(?:${regex})`;
}

export function FlexibleArray_regex__items(
	schema: FlexibleArray_type<'items'>,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
): string {
	return `(?:\\((?:,?${
		FlexibleArray_regex__items__inner(
			(
				0 === Object.keys(schema.items).length
					? {}
					: Type.maybe_add_$defs(schema, schema.items)
			),
			property_schema_to_regex,
			false,
		)
	})+\\))`;
}

export function FlexibleArray_ajv_macro__items(
	schema: FlexibleArray_type<'items'>,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
): {
	pattern: string,
} {
	return Object.freeze({
		pattern: `^${FlexibleArray_regex__items(
			schema,
			property_schema_to_regex,
		)}$`,
	});
}

export function FlexibleArray_regex__prefixItems(
	schema: FlexibleArray_type<'prefixItems'>,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
) {
	if (undefined === schema.prefixItems) {
		throw new TypeError('prefixItems on schema is required!');
	}

	const regex_parts: [string, ...string[]] = schema.prefixItems.map(
		(sub_schema, i) => {
			const converter = property_schema_to_regex.find((maybe) => {
				return maybe.matches(sub_schema);
			});

			if (undefined === converter) {
				throw new TypeError(
					`No converter found for sub-schema at offset ${i}`,
				);
			}

			return converter.to_regex(sub_schema);
		},
	);


	return `(?:\\((?:${regex_parts.join('), ?(?:')})\\))`;
}

export function FlexibleArray_ajv_macro__prefixItems(
	schema: FlexibleArray_type<'prefixItems'>,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
): {
	pattern: string,
} {
	return Object.freeze({
		pattern: `^${FlexibleArray_regex__prefixItems(
			schema,
			property_schema_to_regex,
		)}$`,
	});
}

export function FlexibleArray_generate_schema_definition__items(
) {
	return ArrayType.generate_schema_definition({
		array_mode: 'items',
		specified_mode: 'specified',
		unique_items_mode: 'yes',
		min_items_mode: 'with',
		minItems: PositiveIntegerGuard(1),
		items: {},
	});
}

export function FlexibleArray_generate_schema_definition__prefixItems(
) {
	return ArrayType.generate_schema_definition({
		array_mode: 'prefixItems',
		specified_mode: 'unspecified',
		unique_items_mode: 'no',
		min_items_mode: 'with',
		minItems: PositiveIntegerGuard(1),
	});
}

export function FlexibleArray_generate_type_definition__items(
) {
	return ArrayType.generate_type_definition({
		array_mode: 'items',
		specified_mode: 'specified',
		unique_items_mode: 'yes',
		min_items_mode: 'with',
		minItems: PositiveIntegerGuard(1),
		items: {},
	});
}

export function FlexibleArray_generate_type_definition__prefixItems(
) {
	return ArrayType.generate_type_definition({
		array_mode: 'prefixItems',
		specified_mode: 'unspecified',
		unique_items_mode: 'no',
		min_items_mode: 'with',
		minItems: PositiveIntegerGuard(1),
	});
}

export function FlexibleArray_generate_type<
	ArrayMode extends array_mode = array_mode,
>(
	mode: ArrayMode,
	data: unknown,
	schema: FlexibleArray_type<ArrayMode>,
	schema_parser: SchemaParser,
): Promise<FlexibleArray_SchemaTo<ArrayMode>> {
	const match = schema_parser.parse(schema);

	if (!ArrayType.is_a(match)) {
		throw new TypeError('Did not find expected type!');
	} else if (!Array.isArray(data)) {
		if (object_has_property(data, 'typed_string')) {
			data = undefined;
		}

		if (
			undefined === data
			|| (
				value_is_non_array_object(data)
				&& 0 === Object.keys(data).length
			)
		) {
			data = undefined;
		} else {
			throw new TypeError('Data not an array!');
		}
	} else if ('prefixItems' === mode && data.length !== schema.minItems) {
		throw new TypeError('Data not of expected length!');
	}

	type data_nudge = {
		items: unknown[],
		prefixItems: [unknown, ...unknown[]],
	}[ArrayMode];

	return match.generate_typescript_type({
		data: data as data_nudge,
		schema,
		schema_parser,
	}) as Promise<FlexibleArray_SchemaTo<ArrayMode>>;
}


export function FlexibleArray_generate_data<
	ArrayMode extends array_mode = array_mode,
>(
	mode: ArrayMode,
	data: string,
	schema: FlexibleArray_type<ArrayMode>,
	schema_parser: SchemaParser,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
): FlexibleArray_DataTo {
	if ('items' === mode) {
		return FlexibleArray_generate_data__items(
			data,
			schema as FlexibleArray_type<'items'>,
			schema_parser,
			property_schema_to_regex,
		);
	}

	return FlexibleArray_generate_data__prefixItems(
		data,
		schema as FlexibleArray_type<'prefixItems'>,
		schema_parser,
		property_schema_to_regex,
	);
}

function FlexibleArray_generate_data__items(
	data: string,
	schema: FlexibleArray_type<'items'>,
	schema_parser: SchemaParser,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
): FlexibleArray_DataTo {
	const regex = FlexibleArray_regex__items__inner(
		(
			0 === Object.keys(schema.items).length
				? {}
				: Type.maybe_add_$defs(schema, schema.items)
		),
		property_schema_to_regex,
		true,
	);
	const match = schema_parser.parse(schema.items);

	const items: string[] = [];

	data.replace(new RegExp(regex, 'g'), (match) => {
		items.push(match);

		return match;
	});

	const items_as_data = items.map((item) => {
		if (
			object_has_property(schema.items, 'type')
			&& 'string' === schema.items.type
			&& item.startsWith('"')
			&& item.endsWith('"')
		) {
			item = item.substring(
				1,
				item.length - 1,
			);
		}

		let items_schema = schema.items;

		if ('$defs' in schema && !('$defs' in items_schema)) {
			items_schema = {
				$defs: schema.$defs,
				...items_schema,
			};
		}

		return match.generate_typescript_data(
			item,
			schema_parser,
			items_schema,
		);
	});

	return factory.createArrayLiteralExpression(items_as_data);
}

function FlexibleArray_generate_data__prefixItems(
	data: string,
	schema: FlexibleArray_type<'prefixItems'>,
	schema_parser: SchemaParser,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
): FlexibleArray_DataTo {
	if (!schema.prefixItems) {
		throw new TypeError('prefixItems not present!');
	}

	const regex_parts = schema.prefixItems.map((sub_schema) => {
		return FlexibleArray_regex__items__inner(
			sub_schema,
			property_schema_to_regex,
			true,
		);
	});

	const regex = new RegExp(`^\\(${regex_parts.join(', ?')}\\)$`);

	const match = regex.exec(data);

	if (null === match) {
		throw new TypeError('Data did not match regex!');
	}

	const [, ...matches] = match;

	const items_as_data = schema.prefixItems.map((sub_schema, i) => {
		let sub_data = matches[i];
		const match = schema_parser.parse(sub_schema);

		if (
			object_has_property(sub_schema, 'type')
			&& 'string' === sub_schema.type
			&& sub_data.startsWith('"')
			&& sub_data.endsWith('"')
		) {
			sub_data = sub_data.substring(
				1,
				sub_data.length - 1,
			);
		}

		return match.generate_typescript_data(
			sub_data,
			schema_parser,
			sub_schema,
		);
	});

	return factory.createArrayLiteralExpression(items_as_data);
}
