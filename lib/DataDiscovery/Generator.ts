import {
	Expression,
} from 'typescript';
import {
	DataDiscovery,
} from '../DataDiscovery';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../Exceptions';
import {
	value_is_non_array_object,
} from '../CustomParsingTypes/CustomPairingTypes';

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
	Output = unknown
> {
	protected readonly discovery:DataDiscovery;

	protected constructor(discovery:DataDiscovery) {
		this.discovery = discovery;
	}

	abstract matches(raw_data:unknown) : Promise<
		| GenerationResult<Input, Output>
		| undefined
	>

	static async find<
		Input = unknown,
		Output = unknown
	>(
		candidates:Generator<Input, Output>[],
		raw_data:unknown
	) : Promise<GenerationResult<Input, Output>> {
		for (const candidate of candidates) {
			const maybe = await candidate.matches(raw_data);
			if (maybe) {
				return maybe;
			}
		}

		return new RawGenerationResult<
			Input
		>(raw_data as Input) as unknown as GenerationResult<Input, Output>;
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
	Schema extends SchemaObject = SchemaObject
> extends Generator<Input, ConvertsUnknown<Input, Output>> {
	abstract convert_unknown(
		schema:Schema,
		raw_data:unknown
	) : Promise<Output>;
}

export abstract class ConvertsArray<
	Input,
	Schema extends SchemaObject = SchemaObject
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
	Schema extends SchemaObject = SchemaObject
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
