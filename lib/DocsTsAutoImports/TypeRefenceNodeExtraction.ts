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
		const extracted = this.extract(nodes);
		this.extracted = [
			...extracted,
			...extracted
				.map(
					TypeNodeReferenceExtraction.extract_type_references_from_type_arguments
				)
				.flat(),
		];
	}

	protected abstract extract(nodes: T[]): TypeReferenceNode[];

	private static extract_type_references_from_type_arguments(
		node: TypeReferenceNode
	): TypeReferenceNode[] {
		const types = [...(node.typeArguments || ([] as TypeReferenceNode[]))];

		return types.filter(ts.isTypeReferenceNode);
	}

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
		const property_signatures = node.members
			.filter(ts.isPropertySignature)
			.filter(
				(maybe): maybe is ts.PropertySignature & {type: TypeNode} => {
					return !!maybe.type;
				}
			);
		const property_signature_types = property_signatures.map(
			(e) => e.type
		);

		const array_types = property_signature_types
			.filter(ts.isArrayTypeNode)
			.map((e) =>
				ts.isParenthesizedTypeNode(e.elementType)
					? e.elementType.type
					: e.elementType
			);

		const array_union_types = array_types.filter(ts.isUnionTypeNode);
		const array_literal_types_found = array_types.filter(
			ts.isLiteralTypeNode
		).length;
		const array_token_types_found = array_types.filter(ts.isToken).length;
		const array_reference_types = array_types.filter(
			ts.isTypeReferenceNode
		);
		const array_type_literals = array_types.filter(ts.isTypeLiteralNode);
		const array_tuple_types = array_types.filter(ts.isTupleTypeNode);

		const array_matches_types_length =
			array_union_types.length +
			array_literal_types_found +
			array_reference_types.length +
			array_token_types_found +
			array_type_literals.length +
			array_tuple_types.length;

		if (array_types.length !== array_matches_types_length) {
			console.error(
				array_types.filter((maybe) => !ts.isUnionTypeNode(maybe))
			);
			throw new Error('Some types not accounted for!');
		}

		return [
			...property_signature_types
				.filter(ts.isTupleTypeNode)
				.map((type) => {
					return this.extract_type_references_from_tuple_type_node(
						type
					);
				})
				.flat(),
			...new UnionTypes([
				...property_signature_types
					.filter(ts.isUnionTypeNode)
					.map((e) => e.types)
					.flat(),
				...array_union_types,
			]).extracted,
			...array_reference_types,
			...array_type_literals
				.map(
					TypeNodeReferenceExtraction.extract_type_references_from_type_literal_node
				)
				.flat(),
			...array_tuple_types
				.map(
					TypeNodeReferenceExtraction.extract_type_references_from_tuple_type_node
				)
				.flat(),
		];
	}
}

export abstract class TypeNodeReferenceExtraction<
	T extends TypeNode = TypeNode,
> extends TypeReferenceNodeExtraction<T> {}

export abstract class IdentifierExtraction<
	T extends Identifier = Identifier,
> extends TypeReferenceNodeExtraction<T> {}
