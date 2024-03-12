import ts, {
	TypeAliasDeclaration,
	TypeNode,
	TypeReferenceNode,
	UnionTypeNode,
	ArrayTypeNode,
} from 'typescript';
import {TypeNodeReferenceExtraction} from './TypeRefenceNodeExtraction';
import {UnionTypes} from './UnionTypes';
export class ArrayTypes extends TypeNodeReferenceExtraction<ArrayTypeNode> {
	extract(nodes: ArrayTypeNode[]) : TypeReferenceNode[]
	{
		const element_types = nodes.map(e => e.elementType);

		const parenthesized = element_types
			.filter(ts.isParenthesizedTypeNode)
			.map((e) => e.type);

		const parenthesized_unions = parenthesized
			.filter(ts.isUnionTypeNode)
			.map((e) => e.types)
			.flat();

		return [
			...(parenthesized_unions.length > 0
				? new UnionTypes(parenthesized_unions).extracted
				: []),
			...element_types
				.filter(ts.isTypeLiteralNode)
				.map(UnionTypes.extract_type_references_from_type_literal_node)
				.flat(),
		];
	}
}
