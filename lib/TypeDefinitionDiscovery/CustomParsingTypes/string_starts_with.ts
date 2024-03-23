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

type RawData = {type: 'string', string_starts_with: string};

export class string_starts_with extends Generator<RawData, TypeReferenceNode>
{
	constructor(ajv:Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'string_starts_with'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				string_starts_with: {type: 'string'},
			},
		});
	}

	generate() {
		return (raw_data: RawData) => type_reference_node(
			'string_starts_with',
			create_literal(raw_data.string_starts_with),
		);
	}
}
