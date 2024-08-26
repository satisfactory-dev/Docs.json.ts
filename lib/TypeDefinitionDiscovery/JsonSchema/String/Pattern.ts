import Ajv from 'ajv/dist/2020';
import {
	TypeReferenceNode,
} from 'typescript';
import {
	create_literal,
	type_reference_node,
} from '../../../TsFactoryWrapper';
import {
	Generator,
} from '../../Generator';

export class Pattern extends Generator<
	{type: 'string', pattern: string},
	TypeReferenceNode
> {
	constructor(ajv:Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'pattern'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				pattern: {type: 'string'},
			},
		});
	}

	generate(): (
		raw_data:{type: 'string', pattern: string}
	) => TypeReferenceNode {
		return (
			raw_data:{type: 'string', pattern: string},
		) => {
			return type_reference_node(
				'StringPassedRegExp',
				create_literal(raw_data.pattern),
			)
		};
	}
}
