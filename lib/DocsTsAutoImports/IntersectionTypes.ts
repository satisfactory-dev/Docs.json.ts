import ts, {
	IntersectionTypeNode,
	TypeAliasDeclaration,
	TypeNode,
	TypeReferenceNode,
} from 'typescript';
import {TypeNodeReferenceExtraction} from './TypeRefenceNodeExtraction';

export class IntersectionTypes extends TypeNodeReferenceExtraction {
	extract(nodes: TypeNode[]): TypeReferenceNode[] {
		return [
			...nodes.filter(ts.isTypeReferenceNode),
			...nodes
				.filter(ts.isTypeLiteralNode)
				.map(e => IntersectionTypes.extract_type_references_from_type_literal_node(e))
				.flat(),
		];
	}

	static declarations_to_types(nodes: TypeAliasDeclaration[]): TypeNode[] {
		return nodes
			.filter(
				(
					maybe
				): maybe is TypeAliasDeclaration & {
					type: IntersectionTypeNode;
				} => {
					return ts.isIntersectionTypeNode(maybe.type);
				}
			)
			.map((e) => e.type.types)
			.reduce((was, is) => {
				was.push(...is);
				return was;
			}, [] as TypeNode[]);
	}
}
