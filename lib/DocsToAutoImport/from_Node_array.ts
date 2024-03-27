import ts, {
	ArrayTypeNode,
	ClassDeclaration,
	EntityName,
	FunctionDeclaration,
	LiteralTypeNode,
	MethodDeclaration,
	Node,
	PropertyDeclaration,
	TupleTypeNode,
	TypeLiteralNode,
} from 'typescript';
import {
	TypeReferenceNodes,
} from './TypeReferenceNodes';
import {
	ClassDeclarations,
} from './ClassDeclarations';
import {
	TupleTypeNodes,
} from './TupleTypeNodes';
import {
	TypeLiteralNodes,
} from './TypeLiteralNodes';
import {
	LiteralTypeNodes,
} from './LiteralTypeNodes';
import {
	ArrayTypeNodes,
} from './ArrayTypeNodes';
import {
	MethodDeclarations,
} from './MethodDeclarations';
import {
	PropertyDeclarations,
} from './PropertyDeclarations';
import {
	FunctionDeclarations,
} from './FunctionDeclaration';
import {
	UnexpectedlyUnknown,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';

const recursion_limit = 10;

export function EntityName_array_from_Node_array(nodes: Node[]): EntityName[] {
	if (nodes.length < 1) {
		return [];
	}

	const class_declarations: ClassDeclaration[] = [];
	const tuple_types: TupleTypeNode[] = [];
	const type_literals: TypeLiteralNode[] = [];
	const literal_types: LiteralTypeNode[] = [];
	const reference_nodes: ts.TypeReferenceNode[] = [];
	const array_types: ArrayTypeNode[] = [];
	const method_declarations: MethodDeclaration[] = [];
	const property_declarations: PropertyDeclaration[] = [];
	const function_types: FunctionDeclaration[] = [];
	const sub_nodes: Node[] = [];
	const entity_names: EntityName[] = [];
	const others: Node[] = [];

	for (const node of nodes) {
		if (ts.isEntityName(node)) {
			entity_names.push(node);
		} else if (ts.isClassDeclaration(node)) {
			class_declarations.push(node);
		} else if (
			ts.isUnionTypeNode(node)
			|| ts.isIntersectionTypeNode(node)
		) {
			sub_nodes.push(...node.types);
		} else if (ts.isTupleTypeNode(node)) {
			tuple_types.push(node);
		} else if (ts.isTypeLiteralNode(node)) {
			type_literals.push(node);
		} else if (ts.isLiteralTypeNode(node)) {
			literal_types.push(node);
		} else if (ts.isTypeReferenceNode(node)) {
			reference_nodes.push(node);
			sub_nodes.push(...(node.typeArguments || []));
		} else if (ts.isArrayTypeNode(node)) {
			array_types.push(node);
		} else if (
			ts.isParenthesizedTypeNode(node)
			|| ts.isTypeOperatorNode(node)
			|| ts.isRestTypeNode(node)
			|| ts.isTypeAliasDeclaration(node)
		) {
			sub_nodes.push(node.type);

			if (ts.isTypeAliasDeclaration(node)) {
				sub_nodes.push(...(node.typeParameters || []));
			}
		} else if (ts.isMethodDeclaration(node)) {
			method_declarations.push(node);
		} else if (ts.isPropertyDeclaration(node)) {
			property_declarations.push(node);
		} else if (ts.isFunctionDeclaration(node)) {
			function_types.push(node);
		} else if (ts.isArrowFunction(node)) {
			sub_nodes.push(...[
				...node.parameters,
				...(node.typeParameters || []),
				node.body,
				...(
					(node.type && ts.isTypeLiteralNode(node.type))
						? [node.type]
						: []
				),
			].filter(e => !!e));
		} else if (ts.isBlock(node)) {
			sub_nodes.push(...node.statements);
		} else if (ts.isTypeParameterDeclaration(node)) {
			sub_nodes.push(
				...[node.name, node.constraint, node.expression].filter(
					(maybe): maybe is Exclude<typeof maybe, undefined> => {
						return undefined !== maybe;
					}
				)
			);
		} else if (ts.isIfStatement(node)) {
			sub_nodes.push(
				...[
					node.elseStatement,
					node.expression,
					node.thenStatement,
				].filter(
					(maybe): maybe is Exclude<typeof maybe, undefined> =>
						!!maybe
				)
			);
		} else if (ts.isVariableStatement(node)) {
			sub_nodes.push(node.declarationList);
		} else if (
			ts.isReturnStatement(node)
			|| ts.isExpressionStatement(node)
			|| ts.isThrowStatement(node)
			|| ts.isParenthesizedExpression(node)
		) {
			if (node.expression) {
				sub_nodes.push(node.expression);
			}
		} else if (ts.isParameter(node)) {
			sub_nodes.push(
				...[node.initializer, node.type].filter(
					(maybe): maybe is Exclude<typeof maybe, undefined> =>
						!!maybe
				)
			);
		} else if (ts.isNewExpression(node)) {
			sub_nodes.push(
				...[
					...(node.arguments || []),
					node.expression,
					...(node.typeArguments || []),
				].filter(
					(maybe): maybe is Exclude<typeof maybe, undefined> =>
						!!maybe
				)
			);
		} else if (ts.isPrefixUnaryExpression(node)) {
			sub_nodes.push(node.operand);
		} else if (ts.isBinaryExpression(node)) {
			sub_nodes.push(
				...[node.left, node.right].filter(
					(maybe) => !ts.isIdentifier(maybe)
				)
			);
		} else if (ts.isVariableDeclarationList(node)) {
			sub_nodes.push(...node.declarations);
		} else if (ts.isConditionalTypeNode(node)) {
			sub_nodes.push(
				node.trueType,
				node.checkType,
				node.extendsType,
				node.falseType
			);
		} else if (ts.isObjectBindingPattern(node)) {
			sub_nodes.push(...node.elements);
		} else if (ts.isAsExpression(node)) {
			sub_nodes.push(node.expression, node.type);
		} else if (ts.isElementAccessExpression(node)) {
			sub_nodes.push(node.argumentExpression, node.expression);
		} else if (ts.isCallExpression(node)) {
			sub_nodes.push(
				...[
					...node.arguments,
					node.expression,
					...(node.typeArguments || []),
				].filter(
					(maybe): maybe is Exclude<typeof maybe, undefined> =>
						!!maybe
				)
			);
		} else if (ts.isVariableDeclaration(node)) {
			sub_nodes.push(
				...[
					node.initializer,
					node.type,
					node.initializer,
				].filter(
					(maybe): maybe is Exclude<typeof maybe, undefined> =>
						!!maybe
				)
			);
		} else if (ts.isTypeQueryNode(node)) {
			sub_nodes.push(
				...[...(node.typeArguments || []), node.exprName].filter(
					(maybe): maybe is Exclude<typeof maybe, undefined> =>
						!!maybe
				)
			);
		} else if (ts.isBindingElement(node)) {
			sub_nodes.push(
				...[node.initializer].filter(
					(maybe): maybe is Exclude<typeof maybe, undefined> =>
						!!maybe
				)
			);
		} else if (ts.isPropertyAccessExpression(node)) {
			sub_nodes.push(node.expression);
		} else if (
			ts.isTemplateExpression(node)
			|| ts.isTemplateLiteralTypeNode(node)
		) {
			sub_nodes.push(node.head, ...node.templateSpans);
		} else if (ts.isTemplateSpan(node)) {
			sub_nodes.push(node.expression, node.literal);
		} else if (ts.isMappedTypeNode(node)) {
			sub_nodes.push(
				...[
					node.nameType,
					...(node.members || []),
					node.type,
					node.typeParameter,
				].filter(
					(maybe): maybe is Exclude<typeof maybe, undefined> =>
						!!maybe
				)
			);
		} else if (ts.isTemplateLiteralTypeSpan(node)) {
			sub_nodes.push(node.literal, node.type);
		} else if (ts.isHeritageClause(node)) {
			sub_nodes.push(...node.types);
		} else if (ts.isExpressionWithTypeArguments(node)) {
			sub_nodes.push(node.expression, ...(node.typeArguments || []));
		} else if (
			ts.isExportDeclaration(node)
			&& node.exportClause
			&& ts.isNamedExports(node.exportClause)
		) {
			sub_nodes.push(
				...node.exportClause.elements.map((sub_node) => {
					return sub_node.name;
				})
			);
		} else if (ts.isObjectLiteralExpression(node)) {
			sub_nodes.push(...node.properties);
		} else if (ts.isPropertyAssignment(node)) {
			sub_nodes.push(node.initializer);
		} else if (ts.isArrayLiteralExpression(node)) {
			sub_nodes.push(...node.elements);
		} else if (ts.isComputedPropertyName(node)) {
			sub_nodes.push(node.expression);
		} else if (
			!ts.isToken(node)
			&& !ts.isNamedExports(node)
			&& !ts.isShorthandPropertyAssignment(node)
		) {
			others.push(node);
		}
	}

	if (others.length) {
		throw new UnexpectedlyUnknown(
			others,
			'Unsupported types found!'
		);
	}

	return [
		...new ClassDeclarations(class_declarations).results,
		...new TupleTypeNodes(tuple_types).results,
		...new TypeLiteralNodes(type_literals).results,
		...new LiteralTypeNodes(literal_types).results,
		...new TypeReferenceNodes(reference_nodes).results,
		...new ArrayTypeNodes(array_types).results,
		...new MethodDeclarations(method_declarations).results,
		...new PropertyDeclarations(property_declarations).results,
		...new FunctionDeclarations(function_types).results,
		...EntityName_array_from_Node_array(sub_nodes),
		...entity_names,
	];
}

export function from_Node_array(nodes: Node[]): string[] {
	return [
		...EntityName_array_from_Node_array(nodes).map((checking) => {
			let recursion_iteration = 0;

			while (ts.isQualifiedName(checking)) {
				if (recursion_iteration > recursion_limit) {
					throw new Error('Recursion limit exceeded!');
				}

				checking = checking.left;
				++recursion_iteration;
			}

			return checking.escapedText.toString();
		}),
	];
}
