import {
	Expression,
} from 'typescript';
import {
	DataDiscovery,
} from '../DataDiscovery';

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

class RawGenerationResult<
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
