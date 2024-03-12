import {TypeReferenceNodeExtraction} from './TypeRefenceNodeExtraction';
import ts, {
	ClassDeclaration,
	PropertyDeclaration,
	TypeReferenceNode,
	UnionTypeNode,
	TypeNode, TypeLiteralNode,
} from 'typescript';
import {UnionTypes} from './UnionTypes';

declare type property_declaration_has_type = PropertyDeclaration & {type: TypeNode};

export class PropertyDeclarations extends TypeReferenceNodeExtraction<PropertyDeclaration> {
	extract(nodes: ts.PropertyDeclaration[]): ts.TypeReferenceNode[] {
		const nodes_with_types = nodes.filter(
			(maybe) : maybe is property_declaration_has_type => {
				return !!maybe.type;
			}
		);

		const others = nodes_with_types.filter(maybe => {
			return (
				!ts.isTypeReferenceNode(maybe.type)
				&& !ts.isUnionTypeNode(maybe.type)
				&& !ts.isToken(maybe.type)
				&& !ts.isTypeLiteralNode(maybe.type)
				&& !ts.isLiteralTypeNode(maybe.type)
				&& !ts.isArrayTypeNode(maybe.type)
			);
		});

		if (others.length) {
			console.log(others.map(e => e.type));

			throw new Error('foo');
		}

		return [
			...PropertyDeclarations.extract_type_references(nodes_with_types),
			...PropertyDeclarations.extract_union_type_references(nodes_with_types),
			...PropertyDeclarations.extract_type_literal_type_references(nodes_with_types),
			...PropertyDeclarations.extract_array_type_references(nodes_with_types),
		];
	}

	private static extract_type_references(nodes: property_declaration_has_type[]) {
		return nodes
			.filter(
				(
					maybe
				): maybe is PropertyDeclaration & {
					type: TypeReferenceNode;
				} => {
					return ts.isTypeReferenceNode(maybe.type);
				}
			)
			.map((property_declaration) => {
				return property_declaration.type;
			});
	}

	private static extract_union_type_references(nodes: property_declaration_has_type[]) : TypeReferenceNode[] {
		return (new UnionTypes(
			nodes
			.filter(
				(
					maybe
				): maybe is PropertyDeclaration & {
					type: UnionTypeNode;
				} => {
					return ts.isUnionTypeNode(maybe.type);
				}
			)
			.map(e => e.type)
		)).extracted;
	}

	private static extract_type_literal_type_references(nodes: property_declaration_has_type[]) : TypeReferenceNode[] {
		return nodes
			.filter((e) : e is property_declaration_has_type & {type: TypeLiteralNode} => {
				return ts.isTypeLiteralNode(e.type);
			})
			.map(e => e.type)
			.map(PropertyDeclarations.extract_type_references_from_type_literal_node)
			.flat();
	}

	private static extract_array_type_references(nodes: property_declaration_has_type[]) : TypeReferenceNode[] {
		return (new UnionTypes(nodes.map(e => e.type).filter(ts.isArrayTypeNode))).extracted;
	}

	static class_declarations_to_property_declarations(
		nodes: ClassDeclaration[]
	): PropertyDeclaration[] {
		return nodes
			.map((declaration) =>
				declaration.members.filter(ts.isPropertyDeclaration)
			)
			.reduce((was, is) => {
				was.push(...is);
				return was;
			}, []);
	}
}
