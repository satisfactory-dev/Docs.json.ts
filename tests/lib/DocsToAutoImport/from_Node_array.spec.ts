import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	EntityName_array_from_Node_array,
} from '../../../lib/DocsToAutoImport/from_Node_array';
import ts, {
	Node,
} from 'typescript';

void describe('EntityName_array_from_Node_array', () => {
	const empty_behaves:{[key: string]: Node[]} = {
		'[]': [],
		ArrayTypeNode: [
			ts.factory.createArrayTypeNode(
				ts.factory.createLiteralTypeNode(
					ts.factory.createStringLiteral('foo')
				)
			),
		],
		ClassDeclaration: [
			ts.factory.createClassDeclaration(
				undefined,
				undefined,
				undefined,
				undefined,
				[]
			),
		],
		FunctionDeclaration: [
			ts.factory.createFunctionDeclaration(
				undefined,
				undefined,
				undefined,
				undefined,
				[],
				undefined,
				undefined
			),
		],
		MethodDeclaration: [
			ts.factory.createMethodDeclaration(
				undefined,
				undefined,
				'foo',
				undefined,
				undefined,
				[],
				undefined,
				undefined,
			),
		],
		PropertyDeclaration: [
			ts.factory.createPropertyDeclaration(
				undefined,
				'foo',
				undefined,
				undefined,
				undefined,
			),
		],
		TupleTypeNode: [
			ts.factory.createTupleTypeNode([]),
		],
	};

	for (const entry of Object.entries(empty_behaves)) {
		void it (`empty ${entry[0]} behaves`, () => {
			const result = EntityName_array_from_Node_array(entry[1]);

			assert.deepEqual(result, []);
		})
	}

	void it('behaves with ArrayTypeNode', () => {
		const result = EntityName_array_from_Node_array([
			ts.factory.createArrayTypeNode(
			ts.factory.createTypeReferenceNode('foo'),
			),
		]);

		assert.deepEqual(result, [
			ts.factory.createIdentifier('foo'),
		]);
	})

	void it('behaves with TypeLiteralNode', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createTypeLiteralNode(undefined),
			]),
			[]
		);
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createTypeLiteralNode([
					ts.factory.createIndexSignature(
						undefined,
						[
						],
						ts.factory.createKeywordTypeNode(
							ts.SyntaxKind.StringKeyword
						)
					),
				]),
			]),
			[]
		);
	})

	void it('behaves with ArrowFunction', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createArrowFunction(
					undefined,
					undefined,
					[],
					undefined,
					undefined,
					ts.factory.createBlock([])
				),
			]),
			[]
		);
	})

	void it ('behaves with TypeParameterDeclaration', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createTypeParameterDeclaration(
					undefined,
					'foo',
					undefined,
					undefined
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with IfStatement', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createIfStatement(
					ts.factory.createTrue(),
					ts.factory.createReturnStatement()
				),
			]),
			[]
		);
	})

	void it('behaves with VariableStatement', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createVariableStatement(
					undefined,
					[]
				),
			]),
			[]
		)
	})
})
