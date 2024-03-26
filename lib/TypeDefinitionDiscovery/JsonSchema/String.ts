import {
	Generator,
} from '../Generator';
import {
	KeywordTypeNode,
} from 'typescript';
import Ajv from 'ajv/dist/2020';
import {
	create_type,
} from '../../TsFactoryWrapper';

export class StringType extends Generator<{type: 'string'}, KeywordTypeNode>
{
	constructor(ajv:Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', minimum: 0},
			},
		});
	}
	generate(): (raw_data: {type: 'string'}) => KeywordTypeNode {
		return () => create_type('string');
	}
}
