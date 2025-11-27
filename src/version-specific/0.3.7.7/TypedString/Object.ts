import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
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

export function Object_generate_typescript_data(
	data: string,
	schema_parser: SchemaParser,
	coerced_schema: Object_type,
	schema: SchemaObject,
): Object_DataTo {
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

		const property_schema = Type.maybe_add_$defs(
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

export function Object_ajv_macro(
	schema: Object_type,
) {
	const regex = `${
		Object.keys(schema.properties)
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
					(schema.required || ([] as string[]))
						.includes(property)
				)
					? ''
					: '?'
			}`)
			.join('')
	}`;

	return Object.freeze({
		pattern: `^\\(${regex}(?:,${regex})*\\)$`,
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
