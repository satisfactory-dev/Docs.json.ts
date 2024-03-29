import Ajv, {
	ErrorObject,
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	DataTransformer,
} from '../DataTransformer';
import {
	Expression,
} from 'typescript';
import {
	writeFileSync,
} from 'node:fs';
import {
	NoMatchError,
} from '../Exceptions';

export type AnyGenerator = Generator<unknown, unknown, unknown>;

export abstract class Generator<
	SchemaType,
	RawData,
	Result
> {
	public readonly check:ValidateFunction<SchemaType>;

	protected constructor(check:ValidateFunction<SchemaType>) {
		this.check = check;
	}

	abstract generate(
		schema_data:SchemaType
	): Promise<
		| ((raw_data:RawData) => Result)
	>;
}

export abstract class SchemaCompilingGenerator<
	SchemaType,
	RawData,
	Result
> extends Generator<SchemaType, RawData, Result> {
	protected constructor(ajv:Ajv, schema:SchemaObject) {
		try {
			super(ajv.compile<SchemaType>(schema));
		} catch (err) {
			console.error(err);
			writeFileSync(
				'/app/failed-to-compile.json',
				JSON.stringify(schema, null, '\t')
			);

			throw new Error('Could not compile schema!');
		}
	}
}

export abstract class SecondaryCheckSchemaCompilingGenerator<
	SchemaType,
	RawData,
	Result
> extends SchemaCompilingGenerator<
	SchemaType,
	RawData,
	Result
> {
	protected _secondary_errors:(
		| (ErrorObject|NoMatchError)[]
		| null
		| undefined
	) = undefined;

	get secondary_errors()
	{
		return this._secondary_errors;
	}

	abstract secondary_check(
		schema_data:SchemaType,
		raw_data:unknown
	): Promise<boolean>;

	static gather_errors(from:AnyGenerator[]): (ErrorObject|NoMatchError)[] {
		const result:(ErrorObject|NoMatchError)[] = [];

		for (const generator of from) {
			if (generator.check.errors) {
				result.push(...generator.check.errors);
			}
			if (
				SecondaryCheckSchemaCompilingGenerator.is(generator)
				&& generator.secondary_errors
			) {
				result.push(...generator.secondary_errors)
			}
		}

		return result;
	}

	static is(
		maybe:AnyGenerator
	): maybe is SecondaryCheckSchemaCompilingGenerator<
		unknown,
		unknown,
		unknown
	> {
		return maybe instanceof SecondaryCheckSchemaCompilingGenerator;
	}
}

async function augment_schema(
	discovery:DataTransformer,
	schema: SchemaObject
) : Promise<SchemaObject> {
	const {definitions} = await discovery.type_checked_schema();

	return {
		definitions,
		...schema,
	};
}

export abstract class SecondaryCheckWithAutoDefinitions<
	SchemaType,
	RawData,
	Result
> extends SecondaryCheckSchemaCompilingGenerator<
	SchemaType,
	RawData,
	Result
>{
	protected readonly discovery:DataTransformer;

	protected constructor(
		ajv:Ajv,
		schema:SchemaObject,
		discovery:DataTransformer
	) {
		super(ajv, schema);
		this.discovery = discovery;
	}

	static async augment_schema(
		discovery:DataTransformer,
		schema: SchemaObject
	) : Promise<SchemaObject> {
		return augment_schema(discovery, schema);
	}
}

export class ExpressionResult<T extends Expression = Expression>
{
	public readonly expression:T;

	constructor(expression:T) {
		this.expression = expression;
	}
}
