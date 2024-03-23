import Ajv from 'ajv/dist/2020';
import {
	LiteralTypeNode,
	StringLiteral,
} from 'typescript';
import {
	create_literal,
} from '../../../TsFactoryWrapper';
import {
	Generator,
} from '../../Generator';

type RawData = {type: 'string', const: string};
type Type = (LiteralTypeNode & {literal: StringLiteral});

export class Const extends Generator<RawData, Type>
{
	constructor(ajv:Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'const'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				const: {type: 'string'},
			},
		});
	}

	generate(): (raw_data: RawData) => Type {
		return (raw_data:RawData) => create_literal(raw_data.const);
	}
}
