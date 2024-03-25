import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	DataTransformer,
} from '../DataTransformer';

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
	): Promise<(raw_data:RawData) => Result>;
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
			console.error(err, schema);

			throw new Error('Could not compile schema!');
		}
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
