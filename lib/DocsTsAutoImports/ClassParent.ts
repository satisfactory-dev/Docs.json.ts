import ts, {
	ClassDeclaration, ExpressionWithTypeArguments,
	HeritageClause, Identifier, LeftHandSideExpression,
	TypeNode,
	TypeReferenceNode,
} from 'typescript';
import {IdentifierExtraction} from './TypeRefenceNodeExtraction';

export class ClassParent
{
	static extract_parent_classes(nodes: ClassDeclaration[]): Identifier[] {
		return nodes
			.filter(
				(
					maybe
				): maybe is ClassDeclaration & {
					heritageClauses: [HeritageClause, ...HeritageClause[]],
				} => {
					return !!maybe.heritageClauses && maybe.heritageClauses.length > 0;
				}
			)
			.map((e) => e.heritageClauses)
			.reduce((was, is) => {
				was.push(...is);
				return was;
			}, [] as HeritageClause[])
			.map(e => e.types)
			.reduce((was, is) => {
				was.push(
					...is
						.filter((maybe) => ts.isExpressionWithTypeArguments(maybe))
						.filter((maybe) : maybe is ExpressionWithTypeArguments & {expression: Identifier}  => {
							return ts.isIdentifier(maybe.expression);
						})
						.map((e) => e.expression)
				);

				return was;
			}, [] as Identifier[])
	}
}
