import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	PropertyAssignment,
} from 'typescript';

import type {
	array_schema,
	array_type,
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

import type {
	ArrayLiteralExpression,
	ObjectLiteralExpression,
	RestedTupleTypeNode,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';
import {
	factory,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

import type {
	Object_DataTo,
	Object_properties,
	Object_SchemaTo,
	Object_type,
} from './Object.ts';
import {
	Object_type_schema,
} from './Object.ts';

export type Object_list_type = array_type<
	'items',
	'specified',
	'yes',
	'with',
	Object_type
>;

export type Object_list_properties = array_schema<
	'items',
	'specified',
	'yes',
	'with',
	Object_properties
>;

export type Object_list_DataTo = ArrayLiteralExpression<
	Object_DataTo,
	[Object_DataTo, ...Object_DataTo[]],
	true
>;

export type Object_list_SchemaTo = RestedTupleTypeNode<Object_SchemaTo>;

export type Object_list_TypeGenerator = (
	schema: object_type_base<
		'properties',
		SchemaObject,
		[string, ...string[]],
		ObjectOfSchemas,
		ObjectOfSchemas
	>,
	schema_parser: SchemaParser,
) => Promise<object_TypeLiteralNode_possibly_extended<'properties'>>;

export function Object_list_compile_validator(
	ajv: Ajv,
): ValidateFunction<Object_list_type> {
	return ajv.compile<
		Object_list_type
	>(
		{
			type: 'object',
			required: [
				'type',
				'minItems',
				'items',
			],
			properties: {
				type: {
					type: 'string',
					const: 'array',
				},
				minItems: {
					type: 'integer',
					minimum: 0,
				},
				items: Object_type_schema,
			},
		},
	);
}

export function Object_list_generate_typescript_data(
	data: string,
	schema_parser: SchemaParser,
	coerced_schema: Object_list_type,
	schema: SchemaObject,
): Object_list_DataTo {
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
							Type.maybe_add_$defs(
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

	const sanity_check: Object_list_DataTo = factory
		.createArrayLiteralExpression(array_values);

	return sanity_check;
}

export async function Object_list_generate_typescript_type(
	schema: Object_list_type,
	schema_parser: SchemaParser,
): Promise<Object_list_SchemaTo> {
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

	const type_generator: Object_list_TypeGenerator = (
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

	const sanity_check: Object_list_SchemaTo = factory.createTupleTypeNode([
		await type_generator(
			schema.items,
			schema_parser,
		),
		factory.createRestTypeNode(
			factory.createArrayTypeNode(
				await type_generator(
					schema.items,
					schema_parser,
				),
			),
		),
	]);

	return sanity_check;
}

export function Object_list_ajv_macro(
	schema: Object_list_type,
) {
	const regex = `\\(${
		Object.keys(schema.items.properties)
			.map((property) => `(?:,?${
				RegExp.escape(property)
			}=.+)${
				(
					(schema.items.required || ([] as string[]))
						.includes(property)
				)
					? ''
					: '?'
			}`)
			.join('')
	}\\)`;

	return Object.freeze({
		pattern: `^\\(${regex}(?:,${regex})*\\)$`,
	});
}
