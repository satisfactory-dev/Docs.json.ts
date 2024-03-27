import {
	Generator,
} from '../Generator';
import {
	KeywordTypeNode,
	TypeReferenceNode,
} from 'typescript';
import Ajv from 'ajv/dist/2020';
import {
	create_literal,
	create_type, type_reference_node,
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
				minLength: {type: 'number', minimum: 0, not: {const: 1}},
			},
		});
	}
	generate(): (raw_data: {type: 'string'}) => KeywordTypeNode {
		return () => create_type('string');
	}
}

export class NonEmptyString extends Generator<
	{type: 'string', minLength: 1},
	TypeReferenceNode
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'minLength'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', const: 1},
			},
		});
	}

	generate() {
		return () => type_reference_node(
			'Exclude',
			create_type('string'),
			create_literal('')
		);
	}
}
