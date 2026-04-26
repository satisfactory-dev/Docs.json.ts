import type {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import type {
	PropertyAssignment,
} from 'typescript';

import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';

import {
	is_non_empty_array,
	object_has_property,
	object_only_has_that_property,
} from '@satisfactory-dev/predicates.ts';

import type {
	array_options,
	array_schema,
	array_type,
	object_schema,
	object_type_base,
	object_TypeLiteralNode_possibly_extended,
	ObjectOfSchemas,
	SchemaObject,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$ref,
	ArrayType,
	ObjectUnspecified,
	PositiveIntegerGuard,
	PositiveIntegerOrZeroGuard,
	Type,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	TemplatedStringParts,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';
import {
	TemplatedString,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';

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
	PropertySchemaToRegex,
} from './Object.ts';
import {
	computedProperty_or_string,
	Object_generate_schema_definition,
	Object_generate_type_definition,
	Object_type_schema,
	Object_type_to_regex,
} from './Object.ts';

import {
	NamedList,
} from '../NamedList.ts';

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
): Is<Object_list_type> {
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

			let quote_stripped_from_value = false;

			if (/^"[^"]+"$/.test(property_value)) {
				quote_stripped_from_value = true;
				property_value = property_value.substring(
					1,
					property_value.length - 1,
				);
			}

			let property_schema = coerced_schema.items.properties[
				property_name
			];

			if (
				quote_stripped_from_value
				&& 'type' in property_schema
				&& 'enum' in property_schema
				&& 'string' === property_schema.type
				&& Array.isArray(property_schema.enum)
				&& property_schema.enum.length > 0
				&& property_schema.enum.every(
					(value) => 'string' === typeof value,
				)
			) {
				property_schema = {
					...property_schema,
					enum: property_schema.enum.map((value) => {
						if (/^"[^"]+"$/.test(value)) {
							return value.substring(1, value.length - 1);
						}

						return value;
					}),
				};
			}

			const property_assignment = factory
				.createPropertyAssignment(
					computedProperty_or_string(property_name),
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

export function ajv_macro_value_regex(value: SchemaObject) {
	if ($ref.is_supported_$ref(value)) {
		if (
			'docs.json.ts--common--types#/$defs/integer_string' === value.$ref
		) {
			return '\\d+';
		} else if (
			'docs.json.ts--common--types#/$defs/decimal_string' === value.$ref
		) {
			return '\\d+\\.\\d{6}';
		} else if (
			// eslint-disable-next-line @stylistic/max-len
			'docs.json.ts--common--types#/$defs/decimal_string--signed' === value.$ref
			|| '#/$defs/decimal_string--signed' === value.$ref
		) {
			return '-?\\d+\\.\\d{6}';
		} else if (
			'docs.json.ts--common--types#/$defs/BGRA' === value.$ref
		) {
			return '\\(B=\\d+,G=\\d+,R=\\d+,A=\\d+\\)';
		} else if (
			'docs.json.ts--common--types#/$defs/bool_string' === value.$ref
		) {
			return '(?:True|False)';
		} else if (
			// eslint-disable-next-line @stylistic/max-len
			'docs.json.ts--common--types#/$defs/XYZW--decimal_string' === value.$ref
		) {
			// eslint-disable-next-line @stylistic/max-len
			return '\\(X=-?\\d+\\.\\d{6},Y=-?\\d+\\.\\d{6},Z=-?\\d+\\.\\d{6},W=-?\\d+\\.\\d{6}\\)';
		} else if (
			// eslint-disable-next-line @stylistic/max-len
			'docs.json.ts--common--types#/$defs/XYZ--decimal_string' === value.$ref
		) {
			// eslint-disable-next-line @stylistic/max-len
			return '\\(X=-?\\d+\\.\\d{6},Y=-?\\d+\\.\\d{6},Z=-?\\d+\\.\\d{6}\\)';
		}
	} else if (
		object_has_property(
			value,
			'DocsDotJson_named_list',
		)
		&& 'string' === typeof value.DocsDotJson_named_list
	) {
		return NamedList.regex(value.DocsDotJson_named_list);
	} else if (
		object_has_property(
			value,
			'templated_string',
		)
		&& Array.isArray(value.templated_string)
		&& value.templated_string.every(
			(maybe): maybe is TemplatedStringParts[0] => {
				return (
					'string' === typeof maybe
					|| (
						object_only_has_that_property(
							maybe,
							'type',
						)
						&& 'string' === maybe.type
					)
				);
			},
		)
		&& is_non_empty_array<
			TemplatedStringParts[0]
		>(value.templated_string)
	) {
		return TemplatedString.to_regex_string_inner(
			value.templated_string,
			false,
		);
	} else if (
		object_has_property(value, 'type')
		&& object_has_property(value, 'enum')
		&& 2 === Object.keys(value).length
		&& 'string' === value.type
		&& Array.isArray(value.enum)
		&& value.enum.every(
			(maybe): maybe is string => 'string' === typeof maybe,
		)
		&& is_non_empty_array<string>(value.enum)
	) {
		return `(?:${
			value.enum.flatMap(
				(sub_value) => [
					RegExp.escape(sub_value),
					RegExp.escape(`"${sub_value}"`),
				],
			).join('|')
		})`;
	} else if (
		object_has_property(value, 'type')
		&& object_has_property(value, 'const')
		&& 2 === Object.keys(value).length
		&& 'string' === value.type
		&& 'string' === typeof value.const
	) {
		return `(?:${
			RegExp.escape(value.const)
		}|${
			RegExp.escape(`"${value.const}"`)
		})`;
	} else if (
		object_has_property(value, 'type')
		&& object_has_property(value, 'pattern')
		&& 2 === Object.keys(value).length
		&& 'string' === value.type
		&& 'string' === typeof value.pattern
		&& value.pattern.startsWith('^')
		&& value.pattern.endsWith('$')
	) {
		return `(?:${
			value.pattern.substring(1, value.pattern.length - 1)
		}|${
			RegExp.escape('"')
		}${
			value.pattern.substring(1, value.pattern.length - 1)
		}${
			RegExp.escape('"')
		})`;
	}

	return '.+';
}

export function Object_list_ajv_macro(
	schema: Object_list_type,
	property_schema_to_regex: PropertySchemaToRegex<unknown>[],
) {
	let regex: string;

	if ('object' === schema.items.type) {
		regex = Object_type_to_regex(
			schema.items,
			property_schema_to_regex,
		);
	} else {
		regex = `\\(${
			Object.keys(schema.items.properties)
				.map((property) => `(?:,?${
					RegExp.escape(property)
				}=${ajv_macro_value_regex(
					schema.items.properties[property],
				)})${
					(
						(schema.items.required || ([] as string[]))
							.includes(property)
					)
						? ''
						: '?'
				}`)
				.join('')
		}\\)`;
	}

	return Object.freeze({
		pattern: `^\\(${regex}(?:,${regex})*\\)$`,
	});
}

export function Object_list_generate_schema_definition(
): Readonly<Object_list_properties> {
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
		items: Object_generate_schema_definition(),
		minItems: PositiveIntegerOrZeroGuard(1),
	};

	return Object.freeze(
		ArrayType.generate_schema_definition(
			sanity_check_options,
		),
	);
}

export function Object_list_generate_type_definition(
): Readonly<Object_list_type> {
	return Object.freeze({
		type: 'array',
		minItems: PositiveIntegerGuard(1),
		uniqueItems: true,
		items: Object_generate_type_definition(),
	});
}
