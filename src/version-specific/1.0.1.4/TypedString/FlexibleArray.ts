import type {
	SchemaObject,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$ref,
	Type,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	object_has_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

import type {
	FlexibleArray_type,
} from '../../0.3.7.7/TypedString/FlexibleArray.ts';

import type {
	PropertySchemaToRegex,
} from '../../0.3.7.7/TypedString/Object.ts';

export function FlexibleArray_regex__items__inner(
	items: FlexibleArray_type<'items'>['items'],
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
	capture: boolean = false,
	$ref_instance: $ref,
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

	let check_for_quotes = false;

	if ('$ref' in coerced && $ref.is_supported_$ref(coerced)) {
		const check_coerced = $ref_instance.resolve_def(
			coerced,
			coerced.$defs || {},
		);

		if (
			object_has_property(check_coerced, 'type')
			&& 'string' === check_coerced.type
			&& !object_has_property(
				check_coerced,
				'typed_string',
			)
		) {
			check_for_quotes = true;
		}
	}

	if (check_for_quotes) {
		if (capture) {
			return `((?:${regex})|"(?:${regex})")`;
		} else {
			return `(?:(?:${regex})|"(?:${regex})")`;
		}
	}

	if (capture) {
		return `(${regex})`;
	}

	return `(?:${regex})`;
}

export function FlexibleArray_regex__items(
	schema: FlexibleArray_type<'items'>,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
	$ref_instance: $ref,
): string {
	let count_regex = '+';

	if (
		(
			'minItems' in schema
			&& undefined !== schema.minItems
		)
		|| (
			'maxItems' in schema
			&& undefined !== schema.maxItems
		)
	) {
		if (
			'minItems' in schema
			&& 'maxItems' in schema
		) {
			count_regex = `{${schema.minItems},${schema.maxItems}}`;
		} else if ('minItems' in schema) {
			count_regex = `{${schema.minItems},}`;
		}
	}

	const result = `(?:\\((?:,?${
		FlexibleArray_regex__items__inner(
			(
				0 === Object.keys(schema.items).length
					? {}
					: Type.maybe_add_$defs(schema, schema.items)
			),
			property_schema_to_regex,
			false,
			$ref_instance,
		)
	})${count_regex}\\))`;

	return result;
}

export function FlexibleArray_ajv_macro__items(
	schema: FlexibleArray_type<'items'>,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
	$ref_instance: $ref,
): {
	pattern: string,
} {
	return Object.freeze({
		pattern: `^${FlexibleArray_regex__items(
			schema,
			property_schema_to_regex,
			$ref_instance,
		)}$`,
	});
}
