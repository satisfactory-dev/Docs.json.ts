import {
	Generator,
} from '../../Generator';
import Ajv from 'ajv/dist/2020';
import {
	create_typed_union,
} from '../../../TsFactoryWrapper';
import {
	LiteralTypeNode,
	StringLiteral,
	UnionTypeNode,
} from 'typescript';

type RawData = {type: 'string', enum: [string, ...string[]]};
type Type = UnionTypeNode & {
	types: [
		(LiteralTypeNode & {literal: StringLiteral}),
		...(LiteralTypeNode & {literal: StringLiteral})[]
	],
};

export class Enum extends Generator<RawData, Type> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'enum'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				enum: {type: 'array', minItems: 1, items: {type: 'string'}},
			},
		});
	}

	generate(): (raw_data: RawData) => Type {
		return (raw_data: RawData) => {
			return create_typed_union(raw_data.enum);
		};
	}
}
