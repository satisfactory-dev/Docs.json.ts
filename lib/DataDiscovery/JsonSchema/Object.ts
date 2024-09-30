import {
	Converter,
	ConverterMatchesSchema,
	ExpressionResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	is_string,
	object_has_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

import {
	local_ref,
} from '../../StringStartsWith';
import {
	NoMatchError,
} from '../../Exceptions';
import {
	Expression,
	ObjectLiteralExpression,
} from 'typescript';
import {
	pattern_properties_regex,
	typed_string_inner_object_pattern_type,
} from '../../CustomParsingTypes/TypedString';

export type schema_type = {
	type: 'object',
	$ref: local_ref<string>,
	unevaluatedProperties?: false,
	required?: [string, ...string[]],
	properties?: {[key: string]: SchemaObject},
};

abstract class ObjectConverterMatchesSchema<
	Schema extends SchemaObject,
	RawData = unknown,
	Output extends Expression = Expression
> extends ConverterMatchesSchema<
	Schema,
	RawData,
	Output
> {
	protected readonly already_resolved:{
		[key: string]: {[key: string]: SchemaObject},
	} = {};
	protected readonly discovery:DataDiscovery;

	constructor(discovery:DataDiscovery, schema:SchemaObject) {
		super(discovery.docs.ajv, schema);

		this.discovery = discovery;
	}

	async can_convert_schema_and_raw_data(
		schema:SchemaObject,
		raw_data:unknown,
	) : Promise<boolean> {
		return (
			this.can_convert_schema(schema)
			&& value_is_non_array_object(raw_data)
			&& 0 === this.check_converters_for_missing_keys(
				raw_data,
				await this.resolve_converters(schema),
			).length
			&& await new Promise((yup => {
				this.convert(
					schema,
					raw_data as RawData,
				).then(() => yup(true)).catch(() => yup(false));
			}))
		);
	}

	async check_converters(
		schema: schema_type,
		raw_data: {[key: string]: unknown},
	) {
		const converters = await this.resolve_converters(schema);
		performance.mark(`${this.constructor.name}.check_converters() start`);

		const missing_keys = this.check_converters_for_missing_keys(
			raw_data,
			converters,
		);

		if (missing_keys.length) {
			performance.measure(
				`${this.constructor.name}.check_converters() missing converters`,
				`${this.constructor.name}.check_converters() start`,
			);
			throw new NoMatchError(
				{
					missing_keys,
					schema,
					raw_data,
				},
				'Missing converters',
			);
		}

		return converters;
	}

	check_converters_for_missing_keys(
		raw_data: {[key: string]: unknown},
		converters: {[key: string]: Converter<SchemaObject>},
	) {
		return Object.keys(raw_data).filter((
			maybe,
		) => !(maybe in converters));
	}

	protected async resolve_converters(
		schema: SchemaObject,
	): Promise<{[key: string]: Converter<SchemaObject>}> {
		performance.mark(`${this.constructor.name}.resolve_converters() start`);
		const converters:{[key: string]: Converter<SchemaObject>} = {};

		if (
			object_has_property(
				schema,
				'properties',
				(maybe): maybe is {[key: string]: SchemaObject} => {
					return (
						value_is_non_array_object(maybe)
						&& Object.values(maybe).every(
							e => value_is_non_array_object(e),
						)
					);
				},
			)
		) {
			const {properties} = schema;

			for (const entry of Object.entries(properties)) {
				converters[entry[0]] = await Converter.find_matching_schema(
					await this.discovery.candidates,
					entry[1],
				);
			}
		}

		if (
			'$ref' in schema
			&& is_string(schema.$ref)
			&& schema.$ref.startsWith('#/$defs/')
		) {
			const $ref_converters = Object.entries(
				await this.resolve_converters_for_$ref(
					schema.$ref as local_ref<string>,
				),
			);

			for (const entry of $ref_converters) {
				const [property, converter] = entry;
				if (!(property in converters)) {
					converters[property] = converter;
				}
			}
		}

		performance.measure(
			`${this.constructor.name}.resolve_converters() resolve_converters`,
			`${this.constructor.name}.resolve_converters() start`,
		);

		return converters;
	}

	protected async resolve_converters_for_$ref(
		$ref:local_ref<string>,
	): Promise<{[key: string]: Converter<SchemaObject>}> {
		const definition = await this.discovery.docs.definition(
			this.discovery.version,
			$ref.substring(8),
		);

		return this.resolve_converters(definition);
	}

	protected async resolve_schema(
		schema: SchemaObject,
		depth = 0,
	): Promise<{[key: string]: SchemaObject}> {
		performance.mark(
			`${this.constructor.name}.resolve_schema() start`,
		);

		const json_string = JSON.stringify(schema);

		if (json_string in this.already_resolved) {
			performance.measure(
				`${this.constructor.name}.resolve_schema() previously resolved`,
				`${this.constructor.name}.resolve_schema() start`,
			);

			return this.already_resolved[json_string];
		}

		const resolved_schema:{[key: string]: SchemaObject} = {};

		if (
			object_has_property(
				schema,
				'properties',
				(e): e is {[key: string]: SchemaObject} => {
					return (
						value_is_non_array_object(e)
						&& Object.values(e).every(
							value_is_non_array_object,
						)
					);
				},
			)
		) {
			const {properties} = schema;

			for (const entry of Object.entries(properties)) {
				const [property, sub_schema] = entry;

				resolved_schema[property] = sub_schema;
			}
		}

		if (
			'$ref' in schema
			&& is_string(schema.$ref)
			&& schema.$ref.startsWith('#/$defs/')
		) {
			for (const entry of Object.entries(
				await this.resolve_schema(
					await this.discovery.docs.definition(
						this.discovery.version,
						schema.$ref.substring(8),
					),
					depth + 1,
				),
			)) {
				const [property, sub_schema] = entry;

				if (!(property in resolved_schema)) {
					resolved_schema[property] = sub_schema;
				}
			}
		}

		performance.measure(
			`${this.constructor.name}.resolve_schema()`,
			`${this.constructor.name}.resolve_schema() start`,
		);

		this.already_resolved[json_string] = resolved_schema;

		return resolved_schema;
	}
}

export class ObjectConverter extends ObjectConverterMatchesSchema<
	schema_type,
	{[key: string]: unknown},
	ObjectLiteralExpression
> {
	constructor(discovery:DataDiscovery) {
		super(discovery, {
			type: 'object',
			required: ['type'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'object'},
				$ref: {type: 'string', pattern: '^#/\\$defs/'},
				required: {
					type: 'array',
					minItems: 1,
					items: {type: 'string'},
				},
				additionalProperties: {type: 'boolean', const: false},
				unevaluatedProperties: {type: 'boolean', const: false},
				properties: {type: 'object', minProperties: 1},
			},
		});
	}

	async convert(
		schema: schema_type,
		raw_data: {[key: string]: unknown},
	): Promise<ExpressionResult<ObjectLiteralExpression>> {
		performance.mark(`${this.constructor.name}.convert() start`);
		const sub_schema = await this.resolve_schema(schema);
		performance.measure(
			`${this.constructor.name}.convert() sub_schema`,
			`${this.constructor.name}.convert() start`,
		);

		const converters = await this.check_converters(schema, raw_data);
		const result:{[key: string]: ExpressionResult} = {};

		for (const entry of Object.entries(raw_data)) {
			const [property, value] = entry;
			performance.mark(
				`${this.constructor.name}.convert() property start`,
			);

			if (!await converters[property].can_convert_schema_and_raw_data(
				sub_schema[property],
				value,
			)) {
				throw new NoMatchError(
					{
						raw_data,
						property,
						converter: converters[property].constructor.name,
						can_convert_schema: converters[
							property
						].can_convert_schema(sub_schema[property]),
						value,
						sub_schema: sub_schema[property],
						instance: converters[property].constructor.name,
						schema,
					},
					'Cannot convert value!',
				);
			}
			performance.measure(
				`${this.constructor.name}.convert() property checked`,
				`${this.constructor.name}.convert() property start`,
			);
			performance.mark(
				`${this.constructor.name}.convert() property start`,
			);

			result[property] = await converters[property].convert(
				sub_schema[property],
				value,
			);
			performance.measure(
				`${this.constructor.name}.convert() property converted`,
				`${this.constructor.name}.convert() property start`,
			);
		}
		performance.measure(
			`${this.constructor.name}.convert() converted`,
			`${this.constructor.name}.convert() start`,
		);
		performance.mark(`${this.constructor.name}.convert() start`);

		const expression = new ExpressionResult(
			await this.discovery.literal.object_literal(result),
		);

		performance.measure(
			`${this.constructor.name}.convert() expression`,
			`${this.constructor.name}.convert() start`,
		);

		return expression;
	}
}

export class PatternedObjectConverter extends ObjectConverterMatchesSchema<
	typed_string_inner_object_pattern_type,
	{[key: string]: unknown},
	ObjectLiteralExpression
> {
	constructor(
		discovery:DataDiscovery,
	) {
		super(discovery, {
			type: 'object',
			required: ['type', 'minProperties', 'patternProperties'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'object'},
				$ref: {type: 'string', pattern: '^#/\\$defs/'},
				additionalProperties: {type: 'boolean', const: false},
				unevaluatedProperties: {type: 'boolean', const: false},
				minProperties: {type: 'number', minimum: 1},
				maxProperties: {type: 'number', minimum: 1},
				patternProperties: {
					type: 'object',
					minProperties: 1,
					maxProperties: 1,
					patternProperties: {
						[pattern_properties_regex]: {
							type: 'object',
							minProperties: 1,
						},
					},
				},
			},
		});
	}

	convert(
		schema: typed_string_inner_object_pattern_type,
		raw_data: { [key: string]: unknown; },
	): Promise<ExpressionResult<ObjectLiteralExpression>> {
		throw new NoMatchError(
			{
				schema,
				raw_data,
			},
			'Method not implemented.',
		);
	}
}
