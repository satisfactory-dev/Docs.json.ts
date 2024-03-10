import ts, {
	DeclarationStatement,
	Node, TypeAliasDeclaration, TypeNode,
	TypeReferenceNode
} from 'typescript';

export abstract class TypeReferenceNodeExtraction<T extends Node>
{
	readonly extracted:TypeReferenceNode[];

	constructor(nodes:T[]) {
		this.extracted = this.extract(nodes);
	}

	protected abstract extract(nodes:T[]) : TypeReferenceNode[];

	protected static reduce_type_references_arrays_to_type_reference_array(
		arrays: ts.TypeReferenceNode[][]
	): ts.TypeReferenceNode[] {
		return arrays.reduce((was, is) => {
			was.push(...is);

			return was;
		}, [] as ts.TypeReferenceNode[]);
	}

	protected static extract_type_references_from_tuple_type_node(
		node: ts.TupleTypeNode
	): ts.TypeReferenceNode[] {
		return node.elements.filter((maybe) => {
			return !ts.isNamedTupleMember(maybe);
		}).filter(ts.isTypeReferenceNode);
	}

	protected static extract_type_references_from_type_literal_node(
		node: ts.TypeLiteralNode
	): ts.TypeReferenceNode[] {
		return this.reduce_type_references_arrays_to_type_reference_array(
			node.members
				.filter(ts.isPropertySignature)
				.filter(
					(
						maybe
					): maybe is ts.PropertySignature & {
						type: ts.TupleTypeNode;
					} => {
						return (
							undefined !== maybe.type &&
							ts.isTupleTypeNode(maybe.type)
						);
					}
				)
				.map((property_signature) => {
					return this.extract_type_references_from_tuple_type_node(
						property_signature.type
					);
				})
		);
	}
}

export abstract class TypeNodeReferenceExtraction<T extends TypeNode = TypeNode> extends TypeReferenceNodeExtraction<T>
{
}

