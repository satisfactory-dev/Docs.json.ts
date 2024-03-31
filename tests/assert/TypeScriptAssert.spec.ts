import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	isArrayLiteralExpression,
	isAsExpression,
	isBooleanLiteral,
	isCallExpression,
	isIdentifier, isLiteralTypeNode,
	isNamedImports,
	isObjectLiteralExpression,
	isPropertyAssignment,
	isStringLiteral,
	isTokenWithExpectedKind,
	isTypeReferenceNode,
	isUnionTypeNode,
} from '../../assert/TypeScriptAssert';
import ts, {
	Node,
} from 'typescript';

type node_spec<T extends [Node, ...unknown[]] = [Node]> = {
	pass: T[],
	fail: T[],
};

const node_spec:{
	isArrayLiteralExpression: node_spec,
	isAsExpression: node_spec,
	isBooleanLiteral: node_spec<[Node, boolean]>,
	isIdentifier: node_spec,
	isStringLiteral: node_spec,
	isObjectLiteralExpression: node_spec,
	isPropertyAssignment: node_spec,
	isTypeReferenceNode: node_spec,
	isNamedImports: node_spec,
	isCallExpression: node_spec,
	isTokenWithExpectedKind: node_spec<[Node, ts.SyntaxKind]>,
	isLiteralTypeNode: node_spec,
	isUnionTypeNode: node_spec,
} = {
	isArrayLiteralExpression: {
		pass: [
			[ts.factory.createArrayLiteralExpression()],
		],
		fail: [
			[ts.factory.createStringLiteral('foo')],
		],
	},
	isAsExpression: {
		pass: [[ts.factory.createAsExpression(
			ts.factory.createStringLiteral('foo'),
			ts.factory.createLiteralTypeNode(
				ts.factory.createStringLiteral('bar')
			),
		)]],
		fail: [[ts.factory.createStringLiteral('foo')]],
	},
	isBooleanLiteral: {
		pass: [
			[ts.factory.createTrue(), true],
			[ts.factory.createFalse(), false],
		],
		fail: [
			[ts.factory.createTrue(), false],
			[ts.factory.createFalse(), true],
			[ts.factory.createStringLiteral('foo'), true],
			[ts.factory.createStringLiteral('foo'), false],
		],
	},
	isIdentifier: {
		pass: [[ts.factory.createIdentifier('foo')]],
		fail: [[ts.factory.createStringLiteral('foo')]],
	},
	isStringLiteral: {
		pass: [[ts.factory.createStringLiteral('foo')]],
		fail: [[ts.factory.createIdentifier('foo')]],
	},
	isObjectLiteralExpression: {
		pass: [[ts.factory.createObjectLiteralExpression()]],
		fail: [[ts.factory.createStringLiteral('foo')]],
	},
	isPropertyAssignment: {
		pass: [[ts.factory.createPropertyAssignment(
			'foo',
			ts.factory.createStringLiteral('bar'),
		)]],
		fail: [[ts.factory.createStringLiteral('foo')]],
	},
	isTypeReferenceNode: {
		pass: [[ts.factory.createTypeReferenceNode('foo')]],
		fail: [[ts.factory.createStringLiteral('foo')]],
	},
	isNamedImports: {
		pass: [[ts.factory.createNamedImports([])]],
		fail: [[ts.factory.createStringLiteral('foo')]],
	},
	isCallExpression: {
		pass: [[ts.factory.createCallExpression(
			ts.factory.createIdentifier('foo'),
			undefined,
			[]
		)]],
		fail: [[ts.factory.createStringLiteral('foo')]],
	},
	isTokenWithExpectedKind: {
		pass: [[
			ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
			ts.SyntaxKind.StringKeyword,
		]],
		fail: [
			[
				ts.factory.createStringLiteral('foo'),
				ts.SyntaxKind.StringKeyword,
			],
			[
				ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
				ts.SyntaxKind.NumberKeyword,
			],
		],
	},
	isLiteralTypeNode: {
		pass: [[ts.factory.createLiteralTypeNode(
			ts.factory.createStringLiteral('foo')
		)]],
		fail: [[ts.factory.createStringLiteral('foo')]],
	},
	isUnionTypeNode: {
		pass: [[ts.factory.createUnionTypeNode([
			ts.factory.createLiteralTypeNode(
				ts.factory.createStringLiteral('foo')
			),
		])]],
		fail: [[ts.factory.createStringLiteral('foo')]],
	},
};

const functions_to_call:{[key in keyof typeof node_spec]: unknown} & {
	isArrayLiteralExpression: typeof isArrayLiteralExpression,
	isAsExpression: typeof isAsExpression,
	isBooleanLiteral: typeof isBooleanLiteral,
	isIdentifier: typeof isIdentifier,
	isStringLiteral: typeof isStringLiteral,
	isObjectLiteralExpression: typeof isObjectLiteralExpression,
	isPropertyAssignment: typeof isPropertyAssignment,
	isTypeReferenceNode: typeof isTypeReferenceNode,
	isNamedImports: typeof isNamedImports,
	isCallExpression: typeof isCallExpression,
	isTokenWithExpectedKind: typeof isTokenWithExpectedKind,
	isLiteralTypeNode: typeof isLiteralTypeNode,
	isUnionTypeNode: typeof isUnionTypeNode,
} = {
	isArrayLiteralExpression,
	isAsExpression,
	isBooleanLiteral,
	isIdentifier,
	isStringLiteral,
	isObjectLiteralExpression,
	isPropertyAssignment,
	isTypeReferenceNode,
	isNamedImports,
	isCallExpression,
	isTokenWithExpectedKind,
	isLiteralTypeNode,
	isUnionTypeNode,
};

for (
	const function_name of Object.keys(
		functions_to_call
	) as (keyof typeof functions_to_call)[]
) {
	const spec = node_spec[function_name];

	const function_to_call = functions_to_call[function_name];

	void describe(function_name, () => {
		void it('does not throw', () => {
			for (const args of spec.pass) {
				const [node, second_arg] = args;
				if (function_to_call === isBooleanLiteral) {
					assert.doesNotThrow(
						() => function_to_call(node, second_arg as boolean)
					);
				} else if (function_to_call === isTokenWithExpectedKind) {
					assert.doesNotThrow(
						() => function_to_call(
							node,
							second_arg as ts.SyntaxKind
						)
					);
				} else {
					// @ts-expect-error no it won't
					assert.doesNotThrow(() => function_to_call(node));
				}
			}
		});
		void it('does throw', () => {
			for (const args of spec.fail) {
				const [node, second_arg] = args;
				if (function_to_call === isBooleanLiteral) {
					assert.throws(
						() => function_to_call(node, second_arg as boolean)
					);
				} else if (function_to_call === isTokenWithExpectedKind) {
					assert.throws(
						() => function_to_call(
							node,
							second_arg as ts.SyntaxKind
						)
					);
				} else {
					// @ts-expect-error no it won't
					assert.throws(() => function_to_call(node));
				}
			}
		});
	});
}
