import ts, {
	TypeAliasDeclaration,
	TypeNode,
	TypeReferenceNode,
	UnionTypeNode,
} from 'typescript';
import {TypeNodeReferenceExtraction} from './TypeRefenceNodeExtraction';
import {ArrayTypes} from './ArrayTypes';

export class UnionTypes extends TypeNodeReferenceExtraction {
	extract(nodes: TypeNode[]): TypeReferenceNode[] {
		return [
			...nodes.filter(ts.isTypeReferenceNode),
			...UnionTypes.union_type_tuple_references(nodes),
			...UnionTypes.union_type_literal_sub_references(nodes),
			...UnionTypes.union_type_array_references(nodes),
		];
	}

	private static union_type_tuple_references(
		union_types: TypeNode[]
	): TypeReferenceNode[] {
		return union_types
			.filter(ts.isTupleTypeNode)
			.map((e) =>
				UnionTypes.extract_type_references_from_tuple_type_node(e)
			)
			.flat();
	}

	private static union_type_literal_sub_references(
		union_types: TypeNode[]
	): TypeReferenceNode[] {
		return union_types
			.filter(ts.isTypeLiteralNode)
			.map((e) =>
				UnionTypes.extract_type_references_from_type_literal_node(e)
			)
			.flat();
	}

	private static union_type_array_references(
		union_types: TypeNode[]
	): TypeReferenceNode[] {
		const element_types = union_types
			.filter(ts.isArrayTypeNode);

		return (new ArrayTypes(element_types)).extracted;
	}

	static declarations_to_types(nodes: TypeAliasDeclaration[]): TypeNode[] {
		return nodes
			.filter(
				(
					maybe
				): maybe is TypeAliasDeclaration & {
					type: UnionTypeNode;
				} => {
					return ts.isUnionTypeNode(maybe.type);
				}
			)
			.map((e) => e.type.types)
			.reduce((was, is) => {
				was.push(...is);
				return was;
			}, [] as TypeNode[]);
	}
}
