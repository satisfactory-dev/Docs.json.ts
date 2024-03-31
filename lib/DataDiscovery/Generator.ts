import {
	Expression,
} from 'typescript';
import {
	DataDiscovery,
} from '../DataDiscovery';
import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../Exceptions';
import {
	value_is_non_array_object,
} from '../CustomParsingTypes/CustomPairingTypes';
import {is_string} from '../StringStartsWith';

export abstract class GenerationResult<
	Input = unknown,
	Output = unknown
> {
	protected readonly input:Input;

	constructor(input:Input) {
		this.input = input;
	}

	abstract result(): Promise<Output>;
}

export class RawGenerationResult<
	Input = unknown
> extends GenerationResult<Input, Input> {
	result(): Promise<Input> {
		return Promise.resolve(this.input);
	}
}

export abstract class Generator<
	Input = unknown,
	Output = unknown,
	Matches = Output
> {
	protected readonly discovery:DataDiscovery;

	protected constructor(discovery:DataDiscovery) {
		this.discovery = discovery;
	}

	abstract matches(raw_data:unknown) : Promise<
		| GenerationResult<Input, Matches>|RawGenerationResult<this>
		| undefined
	>

	static async find<
		Input = unknown,
		Output = unknown
	>(
		candidates:Generator<Input, Output>[],
		raw_data:unknown
	) {
		for (const candidate of candidates) {
			const maybe = await candidate.matches(raw_data);
			if (maybe) {
				return maybe;
			}
		}

		return new RawGenerationResult<
			Input
		>(raw_data as Input);
	}
}


export class ExpressionResult<T extends Expression = Expression>
{
	public readonly expression:T;

	constructor(expression:T) {
		this.expression = expression;
	}
}

export abstract class ConvertsUnknown<
	Input,
	Output,
	Schema extends {[key: string]: unknown} = {[key: string]: unknown}
> extends Generator<Input, Output, ConvertsUnknown<Input, Output, Schema>> {
	abstract convert_unknown(
		schema:Schema,
		raw_data:unknown
	) : Promise<Output>;

	abstract matches(raw_data:unknown) : Promise<
		| RawGenerationResult<this>
		| undefined
	>
}

export abstract class ConvertsArray<
	Input,
	Schema extends {[key: string]: unknown} = {[key: string]: unknown}
> extends ConvertsUnknown<Input, unknown[], Schema> {
	convert_unknown(schema:Schema, raw_data:unknown)
	{
		if (!(raw_data instanceof Array)) {
			throw new NoMatchError(
				raw_data,
				'Raw data not an array!'
			);
		}

		return this.convert_array(schema, raw_data);
	}

	abstract convert_array(
		schema:Schema,
		raw_data:unknown[]
	): Promise<unknown[]>;
}

export abstract class ConvertsObject<
	Input,
	Schema extends {[key: string]: unknown} = {[key: string]: unknown}
> extends ConvertsUnknown<Input, {[key: string]: unknown}, Schema> {
	convert_unknown(schema:Schema, raw_data:unknown)
	{
		if (!value_is_non_array_object(raw_data)) {
			throw new NoMatchError(
				raw_data,
				'Raw data not an object!'
			);
		}

		return this.convert_object(schema, raw_data);
	}

	abstract convert_object(
		schema:Schema,
		raw_data:{[key: string]: unknown}
	): Promise<{[key: string]: unknown}>;
}

export abstract class DoubleCheckedSchema<
	Input,
	Primary extends {[key: string]: unknown} & {$ref: string},
	Secondary extends {[key: string]: unknown},
	Output extends ExpressionResult = ExpressionResult
> extends ConvertsUnknown<
	Input,
	Output,
	Primary
> {
	protected readonly check:ValidateFunction<Primary>;
	protected readonly double_check:ValidateFunction<Secondary>;

	protected constructor(
		discovery: DataDiscovery,
		ajv: Ajv,
		primary: SchemaObject,
		secondary: SchemaObject
	) {
		super(discovery);
		this.check = ajv.compile<Primary>(primary);
		this.double_check = ajv.compile<Secondary>(secondary);
	}

	async convert_unknown(
		schema: Primary,
		raw_data: unknown
	) {
		this.check_raw_data(raw_data);

		const definition = await this.discovery.docs.definition(
			schema.$ref.substring(14)
		);

		if (!this.double_check(definition)) {
			throw new NoMatchError(
				definition,
				this.double_check_failure_message()
			);
		}

		return this.expression_result(definition, raw_data);
	}

	matches(raw_data: unknown) {
		if (this.check(raw_data)) {
			return Promise.resolve(new RawGenerationResult(this));
		}

		return Promise.resolve(undefined);
	}

	protected abstract check_raw_data(
		raw_data:unknown
	): asserts raw_data is Input;

	protected abstract double_check_failure_message(): string;

	protected abstract expression_result(
		definition:Secondary,
		raw_data:Input
	): Promise<Output>;
}

export abstract class DoubleCheckedStringSchema<
	Primary extends {[key: string]: unknown} & {$ref: string},
	Secondary extends {[key: string]: unknown},
	Output extends ExpressionResult = ExpressionResult
> extends DoubleCheckedSchema<
	string,
	Primary,
	Secondary,
	Output
> {
	protected check_raw_data(raw_data: unknown): asserts raw_data is string {
		if (!is_string(raw_data)) {
			throw new NoMatchError(raw_data, 'must be a string!');
		}
	}
}
