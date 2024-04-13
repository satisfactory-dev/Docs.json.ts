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
	object_has_property,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
	local_ref,
} from '../../StringStartsWith';
import {
	NoMatchError,
} from '../../Exceptions';
import {
	ObjectLiteralExpression,
} from 'typescript';

export type schema_type = {
	type: 'object',
	$ref: local_ref<string>,
	unevaluatedProperties?: false,
	required?: [string, ...string[]],
	properties?: {[key: string]: SchemaObject},
};

export class ObjectConverter extends ConverterMatchesSchema<
	schema_type,
	{[key: string]: unknown},
	ObjectLiteralExpression
> {
	private readonly already_resolved:{
		[key: string]: {[key: string]: SchemaObject},
	} = {};
	private readonly discovery:DataDiscovery;

	constructor(discovery:DataDiscovery) {
		super(discovery.docs.ajv, {
			type: 'object',
			required: ['type', '$ref'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'object'},
				$ref: {type: 'string', pattern: '^#/definitions/'},
				required: {
					type: 'array',
					minItems: 1,
					items: {type: 'string'},
				},
				unevaluatedProperties: {type: 'boolean', const: false},
				properties: {type: 'object', minProperties: 1},
			},
		});

		this.discovery = discovery;
	}

	async can_convert_schema_and_raw_data(
		schema:SchemaObject,
		raw_data:unknown
	) : Promise<boolean> {
		return (
			this.can_convert_schema(schema)
			&& value_is_non_array_object(raw_data)
			&& 0 === this.check_converters_for_missing_keys(
				raw_data,
				await this.resolve_converters(schema)
			).length
		);
	}

	async check_converters(
		schema: schema_type,
		raw_data: {[key: string]: unknown}
	) {
		const converters = await this.resolve_converters(schema);
		performance.mark(`${this.constructor.name}.check_converters() start`);

		const missing_keys = this.check_converters_for_missing_keys(
			raw_data,
			converters
		);

		if (missing_keys.length) {
			performance.measure(
				`${this.constructor.name}.check_converters() missing converters`,
				`${this.constructor.name}.check_converters() start`
			);
			throw new NoMatchError(
				{
					missing_keys,
					schema,
					raw_data,
				},
				'Missing converters'
			);
		}

		return converters;
	}

	check_converters_for_missing_keys(
		raw_data: {[key: string]: unknown},
		converters: {[key: string]: Converter<SchemaObject>}
	) {
		return Object.keys(raw_data).filter((
			maybe
		) => !(maybe in converters));
	}

	async convert(
		schema: schema_type,
		raw_data: {[key: string]: unknown}
	): Promise<ExpressionResult<ObjectLiteralExpression>> {
		performance.mark(`${this.constructor.name}.convert() start`);
		const sub_schema = await this.resolve_schema(schema);
		performance.measure(
			`${this.constructor.name}.convert() sub_schema`,
			`${this.constructor.name}.convert() start`
		);

		const converters = await this.check_converters(schema, raw_data);
		const result:{[key: string]: ExpressionResult} = {};

		for (const entry of Object.entries(raw_data)) {
			const [property, value] = entry;

			if (!await converters[property].can_convert_schema_and_raw_data(
				sub_schema[property],
				value
			)) {
				throw new NoMatchError(
					{
						property,
						value,
						sub_schema: sub_schema[property],
						instance: converters[property].constructor.name,
					},
					'Cannot convert value!'
				);
			}

			result[property] = await converters[property].convert(
				sub_schema[property],
				value
			);
		}
		performance.measure(
			`${this.constructor.name}.convert() converted`,
			`${this.constructor.name}.convert() start`
		);
		performance.mark(`${this.constructor.name}.convert() start`);

		const expression = new ExpressionResult(
			await this.discovery.literal.object_literal(result)
		);

		performance.measure(
			`${this.constructor.name}.convert() expression`,
			`${this.constructor.name}.convert() start`
		);

		return expression;
	}

	private async resolve_converters(
		schema: SchemaObject
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
							e => value_is_non_array_object(e)
						)
					);
				}
			)
		) {
			const {properties} = schema;

			for (const entry of Object.entries(properties)) {
				converters[entry[0]] = await Converter.find_matching_schema(
					await this.discovery.candidates,
					entry[1]
				);
			}
		}

		if (
			'$ref' in schema
			&& is_string(schema.$ref)
			&& schema.$ref.startsWith('#/definitions/')
		) {
			const $ref_converters = Object.entries(
				await this.resolve_converters_for_$ref(
					schema.$ref as local_ref<string>
				)
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
			`${this.constructor.name}.resolve_converters() start`
		);

		return converters;
	}

	private async resolve_converters_for_$ref(
		$ref:local_ref<string>
	): Promise<{[key: string]: Converter<SchemaObject>}> {
		const definition = await this.discovery.docs.definition(
			$ref.substring(14)
		);

		return this.resolve_converters(definition);
	}

	private async resolve_schema(
		schema: SchemaObject,
		depth = 0
	): Promise<{[key: string]: SchemaObject}> {
		performance.mark(
			`${this.constructor.name}.resolve_schema() start`
		);

		const json_string = JSON.stringify(schema);

		if (json_string in this.already_resolved) {
			performance.measure(
				`${this.constructor.name}.resolve_schema() previously resolved`,
				`${this.constructor.name}.resolve_schema() start`
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
							value_is_non_array_object
						)
					);
				}
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
			&& schema.$ref.startsWith('#/definitions/')
		) {
			for (const entry of Object.entries(
				await this.resolve_schema(
					await this.discovery.docs.definition(
						schema.$ref.substring(14)
					),
					depth + 1
				)
			)) {
				const [property, sub_schema] = entry;

				if (!(property in resolved_schema)) {
					resolved_schema[property] = sub_schema;
				}
			}
		}

		performance.measure(
			`${this.constructor.name}.resolve_schema()`,
			`${this.constructor.name}.resolve_schema() start`
		);

		this.already_resolved[json_string] = resolved_schema;

		return resolved_schema;
	}
}
