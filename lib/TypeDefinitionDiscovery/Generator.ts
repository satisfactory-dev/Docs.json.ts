import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	TypeNode,
} from 'typescript';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyGenerator = Generator<any>;

export abstract class Generator<
	RawData,
	Type extends TypeNode = TypeNode
> {
	public readonly check:ValidateFunction<RawData>;

	protected constructor(ajv:Ajv, schema:SchemaObject) {
		this.check = ajv.compile<RawData>(schema);
	}

	abstract generate(): (raw_data:RawData) => Type;
}
