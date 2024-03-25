import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	CallExpression,
	PrimaryExpression,
	TypeNode,
} from 'typescript';

export abstract class Generator<
	RawData
> {
	public readonly check:ValidateFunction<RawData>;

	protected constructor(ajv:Ajv, schema:SchemaObject) {
		this.check = ajv.compile<RawData>(schema);
	}

	abstract generate(
		type:TypeNode
	): (raw_data:PrimaryExpression) => CallExpression;
}
