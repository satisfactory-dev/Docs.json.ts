import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	ComputedPropertyName,
	PropertyAssignment,
} from 'typescript';

import type {
	object_schema,
	object_type_base,
	object_TypeLiteralNode_possibly_extended,
	ObjectOfSchemas,
	SchemaObject,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	ObjectUnspecified,
	Type,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	factory,
	type ObjectLiteralExpression,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import {
	object_has_property,
	object_has_property_that_equals,
} from '@satisfactory-dev/predicates.ts';

import {
	FlexibleArray_regex__items__inner,
} from './FlexibleArray.ts';

export type Object_type = object_type_base<
	'properties',
	SchemaObject,
	[string, ...string[]],
	ObjectOfSchemas,
	ObjectOfSchemas
>;

export type Object_properties = object_schema<'properties'>;

export type Object_DataTo = ObjectLiteralExpression;

export type Object_SchemaTo = object_TypeLiteralNode_possibly_extended<
	'properties'
>;

export type Object_TypeGenerator = (
	schema: object_type_base<
		'properties',
		SchemaObject,
		[string, ...string[]],
		ObjectOfSchemas,
		ObjectOfSchemas
	>,
	schema_parser: SchemaParser,
) => Promise<object_TypeLiteralNode_possibly_extended<'properties'>>;

export const Object_type_schema = Object.freeze({
	type: 'object',
	required: ['type'],
	properties: {
		type: {
			type: 'string',
			const: 'object',
		},
	},
});

export function Object_compile_validator(
	ajv: Ajv,
): ValidateFunction<Object_type> {
	return ajv.compile<
		Object_type
	>(
		Object_type_schema,
	);
}

export function computedProperty_or_string(
	property: string,
): ComputedPropertyName|string {
	return /[?[\] ]/.test(property)
		? factory.createComputedPropertyName(
			factory.createStringLiteral(property),
		)
		: property;
}

export function Object_generate_typescript_data(
	data: string,
	schema_parser: SchemaParser,
	coerced_schema: Object_type,
	schema: SchemaObject,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
): Object_DataTo {
	const properties = Object.keys(
		coerced_schema.properties,
	);

	const regex = new RegExp(`^\\((?:,?${properties.map(
		(property): [
			string,
			string,
		] => {
			const regex = FlexibleArray_regex__items__inner(
				Type.maybe_add_$defs(
					coerced_schema,
					coerced_schema.properties[property],
				),
				property_schema_to_regex,
				true,
			);

			return [
				property,
				`(${RegExp.escape(property)})=${regex}`,
			];
		},
	).map(([
		property,
		regex,
	], i) => {
		const previous_optional = (
			i > 0
			&& !(
				coerced_schema.required || ([] as string[])
			).includes(properties[i - 1])
		);

		const current_required = (
			coerced_schema.required || ([] as string[])
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
	}).join('')})*\\)$`);

	const match = regex.exec(data);

	if (null === match) {
		throw new TypeError('Data does not match expected regex!');
	}

	const [, ...matches] = match;

	const property_assignments: PropertyAssignment[] = [];

	for (let i = 0; i < matches.length; i += 2) {
		const property_name = matches[i];
		let property_value = matches[i + 1];

		if (
			undefined === property_name
			&& undefined === property_value
		) {
			continue;
		}

		let property_schema = coerced_schema.properties[
			property_name
		];

		if (!object_has_property_that_equals(
			property_schema,
			'type',
			'string',
		)) {
			property_schema = Type.maybe_add_$defs(
			schema,
				property_schema,
		);
		}

		const type_for_property = schema_parser.parse(
			property_schema,
		);

		if (
			object_has_property(property_schema, 'type')
			&& 'string' === property_schema.type
			&& 'string' === typeof property_value
			&& property_value.startsWith('"')
			&& property_value.endsWith('"')
		) {
			property_value = property_value.substring(
				1,
				property_value.length - 1,
			);
		}

		const value = type_for_property
			.generate_typescript_data(
				property_value,
				schema_parser,
				property_schema,
			);

		const property_assignment = factory
			.createPropertyAssignment(
				computedProperty_or_string(property_name),
				value,
			);

		property_assignments.push(property_assignment);
	}

	const sanity_check: Object_DataTo = factory
		.createObjectLiteralExpression(
			property_assignments,
			true,
		);

	return sanity_check;
}

export function Object_generate_typescript_type(
	schema: Object_type,
	schema_parser: SchemaParser,
): Promise<Object_SchemaTo> {
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

	return instance.generate_typescript_type({
		schema,
		schema_parser,
	});
}

export class PropertySchemaToRegex<
	T,
> {
	#matcher: ValidateFunction<T>;

	#value_to_regex: (value: T) => string;

	constructor(
		matcher: ValidateFunction<T>,
		value_to_regex: (value: T) => string,
	) {
		this.#matcher = matcher;
		this.#value_to_regex = value_to_regex;
	}

	matches(value: unknown): value is T {
		return this.#matcher(value);
	}

	to_regex(value: T): string {
		return this.#value_to_regex(value);
	}
}

export function Object_type_to_regex(
	schema: Object_type,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
) {
	const regex = `${
		Object.keys(schema.properties)
			.map((property) => {
				let value_regex = `(?:[^=)]+)`;

				let resolved = Type.maybe_add_$defs(
					schema,
					schema.properties[property],
				);

				let converter = property_schema_to_regex.find((maybe) => {
					return maybe.matches(resolved);
				});

				if (!converter && 'typed_string' in resolved) {
					resolved = resolved.typed_string as SchemaObject;

					converter = property_schema_to_regex.find((maybe) => {
						return maybe.matches(resolved);
					});
				}

				if (converter) {
					value_regex = `${
						converter.to_regex(resolved)
					}`;
				}

				return `(?:,?${
					RegExp.escape(property)
				}=(?:${
					value_regex
				}))${
					(
						(schema.required || ([] as string[]))
							.includes(property)
					)
						? ''
						: '?'
				}`;
			})
			.join('')
	}`;

	return `\\(${regex}\\)`;
}

export function Object_ajv_macro(
	schema: Object_type,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
) {
	return Object.freeze({
		pattern: `^${
			Object_type_to_regex(schema, property_schema_to_regex)
		}$`,
	});
}

export function Object_generate_schema_definition(
): Readonly<Object_properties> {
	return ObjectUnspecified
		.generate_schema_definition({
			properties_mode: 'properties',
		});
}

export function Object_generate_type_definition(
): Readonly<Object_type> {
	return ObjectUnspecified
		.generate_type_definition({
			properties_mode: 'properties',
			properties: {},
		});
}
