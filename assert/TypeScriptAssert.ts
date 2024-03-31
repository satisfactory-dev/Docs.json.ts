import assert from 'node:assert/strict';
import ts, {
	ArrayLiteralExpression,
	AsExpression,
	CallExpression,
	FalseLiteral,
	Identifier,
	ImportClause,
	ImportSpecifier,
	LiteralTypeNode,
	Node,
	NodeArray,
	ObjectLiteralExpression,
	PropertyAssignment,
	StringLiteral,
	TrueLiteral,
	TypeNode,
	TypeReferenceNode,
	UnionTypeNode,
} from 'typescript';

export function isArrayLiteralExpression(
	maybe:Node,
	message?:string|Error
): asserts maybe is ArrayLiteralExpression {
	assert.equal(ts.isArrayLiteralExpression(maybe), true, message);
}

export function isAsExpression(
	maybe:Node,
	message?:string|Error
): asserts maybe is AsExpression {
	assert.equal(ts.isAsExpression(maybe), true, message);
}

export function isBooleanLiteral(
	maybe:Node,
	type:boolean,
	message?:string|Error
): asserts maybe is (
	typeof type extends true
		? TrueLiteral
		: FalseLiteral
	) {
	assert.equal(ts.isExpression(maybe), true, message);
	assert.equal(
		maybe.kind,
		type
			? ts.SyntaxKind.TrueKeyword
			: ts.SyntaxKind.FalseKeyword,
		message
	);
}

export function isIdentifier(
	maybe:Node,
	message?:string|Error
): asserts maybe is Identifier {
	assert.equal(ts.isIdentifier(maybe), true, message);
}

export function isStringLiteral(
	maybe:Node,
	message?:string|Error
): asserts maybe is StringLiteral {
	assert.equal(ts.isStringLiteral(maybe), true, message);
}

export function isObjectLiteralExpression(
	maybe:Node,
	message?:string|Error
): asserts maybe is ObjectLiteralExpression {
	assert.equal(ts.isObjectLiteralExpression(maybe), true, message);
}

export function isPropertyAssignment(
	maybe:Node,
	message?:string|Error
): asserts maybe is PropertyAssignment {
	assert.equal(ts.isPropertyAssignment(maybe), true, message);
}

export function isTypeReferenceNode(
	maybe:Node,
	message?:string|Error
): asserts maybe is TypeReferenceNode {
	assert.equal(ts.isTypeReferenceNode(maybe), true, message);
}

export function isNamedImports(
	maybe:Node,
	message?:string|Error
): asserts maybe is Node & {
	readonly kind: ts.SyntaxKind.NamedImports;
	readonly parent: ImportClause;
	readonly elements: NodeArray<ImportSpecifier>;
} {
	assert.equal(ts.isNamedImports(maybe), true, message);
}

export function isCallExpression(
	maybe:Node,
	message?:string|Error
): asserts maybe is CallExpression {
	assert.equal(ts.isCallExpression(maybe), true, message);
}

export function isTokenWithExpectedKind(
	maybe:Node,
	expected_kind: ts.SyntaxKind,
	message?:string|Error
): asserts maybe is TypeNode & {kind: typeof expected_kind} {
	assert.equal(ts.isToken(maybe), true, message);
	assert.equal(ts.isTokenKind(maybe.kind), true, message);
	assert.equal(maybe.kind, expected_kind, message);
}

export function isLiteralTypeNode(
	maybe:Node,
	message?:string|Error
): asserts maybe is LiteralTypeNode {
	assert.equal(ts.isLiteralTypeNode(maybe), true, message);
}

export function isUnionTypeNode(
	maybe:Node,
	message?:string|Error
): asserts maybe is UnionTypeNode {
	assert.equal(ts.isUnionTypeNode(maybe), true, message);
}
