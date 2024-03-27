import Ajv, {
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
} from '../DataTransformerDiscovery/NoMatchError';

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
	abstract secondary_check(
		schema_data:SchemaType,
		raw_data:unknown
	): raw_data is RawData;

	static secondary_check_generators(
		discovery:DataTransformer,
		against:SchemaObject[]
	) {
		return against.map(
			(e) => {
				return [
					discovery.data.find_generator(e),
					e,
				];
			}
		).filter(
			(
				maybe
			) : maybe is [
				SecondaryCheckSchemaCompilingGenerator<
					unknown,
					unknown,
					unknown
				>,
				SchemaObject
			] => maybe[0] instanceof SecondaryCheckSchemaCompilingGenerator
		);
	}

	static secondary_check_generation(
		discovery:DataTransformer,
		against:SchemaObject[]
	) {
		const generators = against.map(e => discovery.data.find_generator(e));
		const secondary = this.secondary_check_generators(
			discovery,
			against
		);

		return Promise.resolve(async (raw_data: unknown) => {
			const generator = generators.find(e => e.check(raw_data));

			if (!generator) {
				const maybe = secondary.find(
					e => e[0].secondary_check(
						e[1],
						raw_data
					)
				);

				if (maybe) {
					return (await maybe[0].generate(maybe[1]))(raw_data);
				}

				throw new NoMatchError({
					against,
					raw_data,
				});
			}

			return (await generator.generate(raw_data))(raw_data);
		})
	}
}

export abstract class SchemaCompilingWithAutoDefinitions<
	SchemaType,
	RawData,
	Result
> extends SchemaCompilingGenerator<SchemaType, RawData, Result> {
	static async augment_schema(
		discovery:DataTransformer,
		schema: SchemaObject
	) : Promise<SchemaObject> {
		const {definitions} = await discovery.type_checked_schema();

		return {
			definitions,
			...schema,
		};
	}
}

export class ExpressionResult<T extends Expression = Expression>
{
	public readonly expression:T;

	constructor(expression:T) {
		this.expression = expression;
	}
}
