import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	property_regex,
} from '../../CustomParsingTypes/TypedObjectString';
import {
	Generator as Base,
	ConvertsUnknown,
	ExpressionResult,
	RawGenerationResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	ObjectLiteralExpression,
} from 'typescript';
import {
	is_string,
} from '../../StringStartsWith';
import {
	NoMatchError,
} from '../../Exceptions';
import {
	string_to_object,
} from '../../DocsValidation';
import {
	Literal,
} from '../Literal';

export const schema_basic = {
	type: 'object',
	required: ['type', 'minLength', 'typed_object_string'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		typed_object_string: {
			type: 'object',
			additionalProperties: false,
			patternProperties: {
				[property_regex]: {
					type: 'object',
					not: {
						type: 'object',
						additionalProperties: false,
						patternProperties: {
							[property_regex]: {
								type: 'object',
							},
						},
					},
				},
			},
		},
	},
};

export type schema_basic_type = SchemaObject & {
	type: 'string',
	minLength: 1,
	typed_object_string: {[key: string]: {[key: string]: unknown}},
};

export class TypedObjectString_basic extends ConvertsUnknown<
	string,
	ExpressionResult<ObjectLiteralExpression>,
	schema_basic_type
> {
	private readonly ajv:Ajv;
	private readonly check:ValidateFunction<schema_basic_type>;
	private readonly definitions:Promise<{[key: string]: SchemaObject}>;

	constructor(discovery:DataDiscovery, ajv:Ajv) {
		super(discovery);
		this.ajv = ajv;
		this.check = ajv.compile<schema_basic_type>(schema_basic);
		this.definitions = discovery.docs.schema().then(
			({definitions}) => definitions
		);
	}

	async convert_unknown(
		schema: schema_basic_type,
		raw_data: unknown
	): Promise<ExpressionResult<ObjectLiteralExpression>> {
		if (!is_string(raw_data)) {
			throw new NoMatchError(raw_data, 'raw data not a string!');
		}

		const shallow = string_to_object(raw_data, true);

		if (false === shallow) {
			throw new NoMatchError(
				raw_data,
				'raw data not a typed_object_string'
			);
		}

		const definitions = await this.definitions;

		const shallow_schema = {
			type: 'object',
			definitions,
			properties: schema.typed_object_string,
		};

		const check = this.shallow_schema<{[key: string]: unknown}>(
			shallow_schema
		);

		if (!check(shallow)) {
			throw new NoMatchError(
				{
					shallow,
					schema,
					errors: check.errors,
				},
				'Shallow parse of typed_object_string does not match schema!'
			);
		}

		const converted = Object.fromEntries(await Promise.all(
			Object.entries(shallow).map(async (
				entry
			) : Promise<[string, unknown]> => {
				if (!(entry[0] in schema.typed_object_string)) {
					throw new NoMatchError(
						{
							[entry[0]]: entry[1],
							schema: schema.typed_object_string,
						},
						'Property not in schema!'
					);
				}

				const [property, value] = entry;
				const converter:unknown = await (await Base.find(
					await this.discovery.candidates,
					schema.typed_object_string[property]
				)).result();

				if (converter instanceof ConvertsUnknown) {
					return [
						property,
						await converter.convert_unknown(
							schema.typed_object_string[property],
							value
						),
					];
				}

				throw new NoMatchError(
					{
						[property]: value,
						schema: schema.typed_object_string[property],
					},
					'No converter found!'
				)
			})
		));

		try {
			return new ExpressionResult(
				await Literal.object_literal(converted)
			);
		} catch (error) {
			throw new NoMatchError(
				{
					converted,
					error,
				},
				'Failed to grab object literal!'
			);
		}
	}

	matches(raw_data:unknown): Promise<RawGenerationResult<this>|undefined>
	{
		if (value_is_non_array_object(raw_data) && this.check(raw_data)) {
			return Promise.resolve(new RawGenerationResult(this));
		}

		return Promise.resolve(undefined);
	}

	private shallow_schema<T>(
		shallow_schema:SchemaObject
	): ValidateFunction<T> {
		try {
			return this.ajv.compile<T>(shallow_schema);
		} catch (error) {
			throw new NoMatchError(
				{
					shallow_schema,
					error,
				},
				'Could not compile schema!'
			);
		}
	}
}
