import {
	ConverterMatchesSchema,
	ExpressionResult,
	Converter,
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

type schema_type = {
	type: 'object',
	$ref: local_ref<string>,
	unevaluatedProperties?: false,
	properties?: {[key: string]: SchemaObject},
};

export class ObjectConverter extends ConverterMatchesSchema<
	schema_type,
	{[key: string]: unknown},
	ObjectLiteralExpression
> {
	private readonly discovery:DataDiscovery;

	constructor(discovery:DataDiscovery) {
		super(discovery.docs.ajv, {
			type: 'object',
			required: ['type', '$ref'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'object'},
				$ref: {type: 'string', pattern: '^#/definitions/'},
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
		return Promise.resolve(
			this.can_convert_schema(schema)
			&& value_is_non_array_object(raw_data)
		);
	}

	async convert(
		schema: schema_type,
		raw_data: {[key: string]: unknown}
	): Promise<ExpressionResult<ObjectLiteralExpression>> {
		const sub_schema = await this.resolve_schema(schema);
		const converters = await this.resolve_converters(schema);

		const result:{[key: string]: ExpressionResult} = {};

		const missing_keys = Object.keys(raw_data).filter(maybe => !(maybe in converters));

		if (missing_keys.length) {
			throw new NoMatchError(
				{
					missing_keys,
					schema,
					raw_data,
				},
				'Missing converters'
			);
		}

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

		return new ExpressionResult(await this.discovery.literal.object_literal(result));
	}

	private async resolve_converters(
		schema: SchemaObject
	): Promise<{[key: string]: Converter<SchemaObject>}> {
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
			const $ref_converters = Object.entries(await this.resolve_converters_for_$ref(
				schema.$ref as local_ref<string>
			));

			for (const entry of $ref_converters) {
				const [property, converter] = entry;
				if (!(property in converters)) {
					converters[property] = converter;
				}
			}
		}

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
		schema: SchemaObject
	): Promise<{[key: string]: SchemaObject}> {
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
			for (const entry of Object.entries(await this.resolve_schema(await this.discovery.docs.definition(
				schema.$ref.substring(14)
			)))) {
				const [property, sub_schema] = entry;

				if (!(property in resolved_schema)) {
					resolved_schema[property] = sub_schema;
				}
			}
		}

		return resolved_schema;
	}
}
