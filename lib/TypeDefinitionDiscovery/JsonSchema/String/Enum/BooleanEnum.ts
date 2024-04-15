import {
	Generator,
} from '../../../Generator';
import ts, {
	KeywordTypeNode,
	UnionTypeNode,
} from 'typescript';
import {
	create_literal,
	create_union,
} from '../../../../TsFactoryWrapper';
import Ajv from 'ajv/dist/2020';

export type boolean_or_null_type = {
	type: 'string',
	enum: ['True', 'False']
} | {
	type: 'string',
	enum: ['True', 'False', '']
};
type boolean_or_null_return =
	| KeywordTypeNode<ts.SyntaxKind.BooleanKeyword>
	| UnionTypeNode;

export class BooleanEnum extends Generator<
	boolean_or_null_type,
	KeywordTypeNode<ts.SyntaxKind.BooleanKeyword>|UnionTypeNode
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'enum'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				enum: {
					oneOf: [
						{
							type: 'array',
							minItems: 2,
							maxItems: 2,
							prefixItems: [
								{type: 'string', const: 'True'},
								{type: 'string', const: 'False'},
							],
						},
						{
							type: 'array',
							minItems: 3,
							maxItems: 3,
							prefixItems: [
								{type: 'string', const: 'True'},
								{type: 'string', const: 'False'},
								{type: 'string', const: ''},
							],
						},
					],
				},
			},
		});
	}

	generate(): (raw_data:boolean_or_null_type) => boolean_or_null_return {
		return (raw_data:boolean_or_null_type) => {
			const boolean = ts.factory.createKeywordTypeNode(
				ts.SyntaxKind.BooleanKeyword
			);

			return 2 === raw_data.enum.length
				? boolean
				: create_union(boolean, create_literal(null));
		};
	}
}
