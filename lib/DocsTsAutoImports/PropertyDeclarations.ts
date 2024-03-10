import {
	TypeReferenceNodeExtraction,
} from './TypeRefenceNodeExtraction';
import ts, {
	ClassDeclaration,
	PropertyDeclaration,
	TypeReferenceNode,
	UnionTypeNode,
} from 'typescript';

export class PropertyDeclarations extends TypeReferenceNodeExtraction<PropertyDeclaration>
{

	extract(nodes: ts.PropertyDeclaration[]): ts.TypeReferenceNode[] {
		return [
			...PropertyDeclarations.use_type_reference(nodes),
			...PropertyDeclarations.use_union_type_references(nodes),
		];
	}

	private static use_type_reference(nodes:PropertyDeclaration[])
	{
		return nodes.filter(
			(
				maybe
			): maybe is PropertyDeclaration & {
				type: TypeReferenceNode;
			} => {
				return (
					!!maybe.type &&
					ts.isTypeReferenceNode(maybe.type)
				);
			}
		)
			.map((property_declaration) => {
				return property_declaration.type;
			})
	}

	private static use_union_type_references(nodes:PropertyDeclaration[])
	{
		return nodes.filter(
			(
				maybe
			): maybe is PropertyDeclaration & {
				type: UnionTypeNode;
			} => {
				return (
					!!maybe.type && ts.isUnionTypeNode(maybe.type)
				);
			}
		)
			.map((node) => {
				return [...node.type.types.filter(ts.isTypeReferenceNode)];
			})
			.flat();
	}

	static class_declarations_to_property_declarations(nodes:ClassDeclaration[]): PropertyDeclaration[]
	{
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
