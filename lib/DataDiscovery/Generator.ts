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
	protected _secondary_errors:ErrorObject[]|null|undefined = undefined;

	get secondary_errors()
	{
		return this._secondary_errors;
	}

	abstract secondary_check(
		schema_data:SchemaType,
		raw_data:unknown
	): Promise<boolean>;

	static secondary_check_generators(
		discovery:DataTransformer,
		against:SchemaObject[]
	) {
		const secondary = against.map(
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

		return async (
			raw_data:unknown
		) => {
			for (const generator of secondary) {
				if (
					await generator[0].secondary_check(generator[1], raw_data)
				) {
					const result = await generator[0].generate(generator[1]);

					return () => {
						return result(raw_data);
					}
				}
			}

			return undefined;
		}
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
				const maybe = await secondary(raw_data);

				if (maybe) {
					return maybe();
				}

				const secondary_errors = generators.filter(
					(
						e
					): e is SecondaryCheckSchemaCompilingGenerator<
						unknown,
						unknown,
						unknown
					> => {
						return (
							e instanceof SecondaryCheckSchemaCompilingGenerator
						);
					}
				).map(e => e.secondary_errors);

				throw new NoMatchError({
					against,
					raw_data,
					errors: generators.map(e => e.check.errors),
					secondary_errors,
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
