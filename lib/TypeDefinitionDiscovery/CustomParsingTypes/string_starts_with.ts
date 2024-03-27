import {
	Generator,
} from '../Generator';
import {
	TypeReferenceNode,
} from 'typescript';
import Ajv from 'ajv/dist/2020';
import {
	create_literal,
	type_reference_node,
} from '../../TsFactoryWrapper';

export type RawData = {type: 'string', string_starts_with: string};
export const schema = {
	type: 'object',
	required: ['type', 'string_starts_with'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		string_starts_with: {type: 'string'},
	},
};

export class string_starts_with extends Generator<RawData, TypeReferenceNode>
{
	constructor(ajv:Ajv) {
		super(ajv, schema);
	}

	generate() {
		return (raw_data: RawData) => type_reference_node(
			'StringStartsWith',
			create_literal(raw_data.string_starts_with),
		);
	}
}
