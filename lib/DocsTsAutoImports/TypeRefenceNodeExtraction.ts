import ts, {
	DeclarationStatement,
	Identifier,
	Node,
	TypeAliasDeclaration,
	TypeNode,
	TypeReferenceNode,
} from 'typescript';
import {UnionTypes} from './UnionTypes';

export abstract class TypeReferenceNodeExtraction<T extends Node> {
	readonly extracted: TypeReferenceNode[];

	constructor(nodes: T[]) {
		this.extracted = this.extract(nodes);
	}

	protected abstract extract(nodes: T[]): TypeReferenceNode[];

	protected static extract_type_references_from_tuple_type_node(
		node: ts.TupleTypeNode
	): ts.TypeReferenceNode[] {
		return node.elements
			.filter((maybe) => {
				return !ts.isNamedTupleMember(maybe);
			})
			.filter(ts.isTypeReferenceNode);
	}

	protected static extract_type_references_from_type_literal_node(
		node: ts.TypeLiteralNode
	): ts.TypeReferenceNode[] {
		const property_signatures =
			node.members
				.filter(ts.isPropertySignature)
		;

		return [
			...property_signatures
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
				.flat(),
			...(new UnionTypes(property_signatures
				.filter(
					(
						maybe
					): maybe is ts.PropertySignature & {
						type: ts.UnionTypeNode;
					} => {
						return (
							undefined !== maybe.type &&
							ts.isUnionTypeNode(maybe.type)
						);
					}
				).map(e => e.type.types).flat())).extracted
		];
	}
}

export abstract class TypeNodeReferenceExtraction<
	T extends TypeNode = TypeNode,
> extends TypeReferenceNodeExtraction<T> {}

export abstract class IdentifierExtraction<
	T extends Identifier = Identifier,
> extends TypeReferenceNodeExtraction<T> {}
