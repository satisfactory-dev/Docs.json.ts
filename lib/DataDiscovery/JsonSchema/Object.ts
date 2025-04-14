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
	object_only_has_that_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

import {
	common_ref,
	local_ref,
	update8_ref,
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

		if (this.schema_is_allOf_$refs(schema)) {
			for (const sub_schema of schema.allOf) {
				const $ref_converters = Object.entries(
					sub_schema.$ref.startsWith('#/$defs/')
						? await this.resolve_converters_for_$ref(
							sub_schema.$ref as local_ref<string>,
						)
						: await this.resolve_converters_for_common_$ref(
							sub_schema.$ref as common_ref<string>,
						),
				);

				for (const entry of $ref_converters) {
					const [property, converter] = entry;
					if (!(property in converters)) {
						converters[property] = converter;
					}
				}
			}
		}

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
		} else if (
			'$ref' in schema
			&& is_string(schema.$ref)
			&& schema.$ref.startsWith('common.schema.json#/$defs/')
		) {
			const $ref_converters = Object.entries(
				await this.resolve_converters_for_common_$ref(
					schema.$ref as common_ref<string>,
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

	protected async resolve_converters_for_common_$ref(
		$ref: common_ref<string>,
	): Promise<{[key: string]: Converter<SchemaObject>}> {
		const definition = await this.discovery.docs.definition_from_common(
			$ref.substring(26),
		);

		return this.resolve_converters(definition);
	}

	protected async resolve_schema(
		schema: SchemaObject,
		depth = 0,
		is_common = false,
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

		if (this.schema_is_allOf_$refs(schema)) {
			for (const allOf_schema_entry of schema.allOf) {
				if (allOf_schema_entry.$ref.startsWith('#/$defs/')) {
					for (const entry of Object.entries(
						await this.resolve_schema(
							await this.discovery.docs.definition(
								is_common ? 'common' : this.discovery.version,
								allOf_schema_entry.$ref.substring(8),
							),
							depth + 1,
							is_common,
						),
					)) {
						const [property, sub_schema] = entry;

						if (!(property in resolved_schema)) {
							resolved_schema[property] = sub_schema;
						}
					}
				} else {
					for (const entry of Object.entries(
						await this.resolve_schema(
							await this.discovery.docs.definition_from_common(
								allOf_schema_entry.$ref.substring(26),
							),
							depth + 1,
							true,
						),
					)) {
						const [property, sub_schema] = entry;

						if (!(property in resolved_schema)) {
							resolved_schema[property] = sub_schema;
						}
					}
				}
			}
		}

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
						is_common ? 'common' : this.discovery.version,
						schema.$ref.substring(8),
					),
					depth + 1,
					is_common,
				),
			)) {
				const [property, sub_schema] = entry;

				if (!(property in resolved_schema)) {
					resolved_schema[property] = sub_schema;
				}
			}
		} else if (
			'$ref' in schema
			&& is_string(schema.$ref)
			&& schema.$ref.startsWith('common.schema.json#/$defs/')
		) {
			for (const entry of Object.entries(
				await this.resolve_schema(
					await this.discovery.docs.definition_from_common(
						schema.$ref.substring(26),
					),
					depth + 1,
					true,
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

	protected schema_is_allOf_$refs(maybe: unknown): maybe is {allOf: [
		{$ref: local_ref<string>|common_ref<string>|update8_ref<string>},
		...{$ref: local_ref<string>|common_ref<string>|update8_ref<string>}[]
	]} {
		return object_has_property(
			maybe,
			'allOf',
			(maybe): maybe is [
				{$ref: local_ref<string>|common_ref<string>|update8_ref<string>},
				...{$ref: local_ref<string>|common_ref<string>|update8_ref<string>}[]
			] => {
				return (
					Array.isArray(maybe)
					&& maybe.every((inner): inner is {$ref: string} => {
						return object_only_has_that_property(
							inner,
							'$ref',
							(maybe_inner): maybe_inner is (
								| local_ref<string>
								| common_ref<string>
								| update8_ref<string>
							) => {
								return (
									is_string(maybe_inner)
									&& (
										maybe_inner.startsWith('#/$defs/')
										|| maybe_inner.startsWith(
											'common.schema.json#/$defs/',
										)
										|| maybe_inner.startsWith(
											'update8.schema.json#/$defs/',
										)
									)
								)
							},
						);
					})
				)
			},
		);
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
				$ref: {
					type: 'string',
					pattern: '^(common.schema.json)?#/\\$defs/',
				},
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
						has_sub_schema: !!sub_schema[property],
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
				$ref: {
					type: 'string',
					pattern: '^(common.schema.json)#/\\$defs/',
				},
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
