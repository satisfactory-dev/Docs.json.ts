import {
	Expression,
} from 'typescript';
import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../Exceptions';
import {
	compile,
} from '../AjvUtilities';

export abstract class Converter<
	Schema extends SchemaObject,
	RawData = unknown,
	Output extends Expression = Expression
> {
	abstract can_convert_schema(schema: SchemaObject): schema is Schema;

	abstract can_convert_schema_and_raw_data(
		schema:SchemaObject,
		raw_data:unknown
	): Promise<boolean>;

	abstract convert(
		schema:Schema,
		raw_data:RawData
	) : Promise<ExpressionResult<Output>>;

	static find_matching_schema(
		candidates: [Converter<SchemaObject>, ...Converter<SchemaObject>[]],
		schema: SchemaObject
	) : Promise<Converter<SchemaObject>> {
		const converter = this.has_matching_schema(candidates, schema);

		if (converter) {
			return Promise.resolve(converter);
		}

		throw new NoMatchError(
			{
				schema,
			},
			'Could not identify suitable candidate!'
		);
	}

	static has_matching_schema(
		candidates: [Converter<SchemaObject>, ...Converter<SchemaObject>[]],
		schema: SchemaObject
	) : Converter<SchemaObject>|undefined {
		return candidates.find(e => e.can_convert_schema(schema));
	}

	static async has_matching_schema_and_raw_data(
		candidates: [Converter<SchemaObject>, ...Converter<SchemaObject>[]],
		schema: SchemaObject,
		raw_data: unknown
	) : Promise<Converter<SchemaObject>|undefined> {
		for (const candidate of candidates) {
			if (await candidate.can_convert_schema_and_raw_data(
				schema,
				raw_data
			)) {
				return candidate;
			}
		}

		return undefined;
	}
}

export abstract class ConverterMatchesSchema<
	Schema extends SchemaObject,
	RawData = unknown,
	Output extends Expression = Expression
> extends Converter<Schema, RawData, Output> {
	protected check_schema:ValidateFunction<Schema>;

	protected constructor(ajv: Ajv, schema:SchemaObject) {
		super();
		this.check_schema = compile<Schema>(ajv, schema);
	}

	can_convert_schema(schema:SchemaObject) : schema is Schema
	{
		return !!this.check_schema(schema);
	}
}

export class ExpressionResult<T extends Expression = Expression>
{
	public readonly expression:T;

	constructor(expression:T) {
		this.expression = expression;
	}
}
