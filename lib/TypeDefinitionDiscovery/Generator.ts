import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	TypeNode,
} from 'typescript';
import {
	compile,
} from '@satisfactory-dev/ajv-utilities';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyGenerator = Generator<any>;

export abstract class Generator<
	RawData,
	Type extends TypeNode = TypeNode
> {
	public readonly check:ValidateFunction<RawData>;

	protected constructor(ajv:Ajv, schema:SchemaObject) {
		this.check = compile<RawData>(ajv, schema);
	}

	abstract generate(): (raw_data:RawData) => Type;
}
