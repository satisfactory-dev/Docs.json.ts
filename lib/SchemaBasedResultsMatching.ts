import Ajv, {
	Schema, ValidateFunction,
} from 'ajv/dist/2020';

export class GenerationResult<T> {
	readonly generate: () => T;

	constructor(generate: () => T) {
		this.generate = generate;
	}
}

export type DataType = {[key: string]: unknown} | true;

export type ResultGenerator<
	T1,
	T2 extends DataType,
	T3 extends GenerationResult<T1> = GenerationResult<T1>,
> = (data: T2) => T3;

export class ResultGeneration<
	ResultType,
	Data extends DataType = DataType,
	MatchResult extends
		GenerationResult<ResultType> = GenerationResult<ResultType>,
> {
	readonly schema: Schema;
	private validate: WeakMap<Ajv, ValidateFunction<Data>> = new WeakMap<
		Ajv,
		ValidateFunction<Data>
	>();
	private readonly generator: ResultGenerator<ResultType, Data, MatchResult>;

	constructor(
		schema: Schema,
		generator: ResultGenerator<ResultType, Data, MatchResult>
	) {
		this.schema = schema;
		this.generator = generator;
	}

	match(ajv: Ajv, data: object): MatchResult | null {
		if (!this.validate.has(ajv)) {
			this.validate.set(ajv, ajv.compile<Data>(this.schema));
		}
		const validate = this.validate.get(ajv) as ValidateFunction<Data>;

		if (validate(data)) {
			return this.generator(data);
		}

		return null;
	}
}
