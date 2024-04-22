import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	EntityName_array_from_Node_array,
	from_Node_array,
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
		UnionTypeNode: [
			ts.factory.createUnionTypeNode([]),
		],
		IntersectionTypeNode: [
			ts.factory.createIntersectionTypeNode([]),
		],
		TypeLiteralNode: [
			ts.factory.createTypeLiteralNode(undefined),
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
		],
		ArrowFunction: [
			ts.factory.createArrowFunction(
				undefined,
				undefined,
				[],
				undefined,
				undefined,
				ts.factory.createBlock([])
			),
			ts.factory.createArrowFunction(
				undefined,
				undefined,
				[],
				ts.factory.createTypeLiteralNode([]),
				undefined,
				ts.factory.createBlock([])
			),
		],
		IfStatement: [
			ts.factory.createIfStatement(
				ts.factory.createTrue(),
				ts.factory.createReturnStatement()
			),
		],
		VariableStatement: [
			ts.factory.createVariableStatement(
				undefined,
				[]
			),
		],
		Parameter: [
			ts.factory.createParameterDeclaration(
				undefined,
				undefined,
				'foo',
				undefined,
				undefined,
				undefined
			),
		],
		BinaryExpression: [
			ts.factory.createBinaryExpression(
				ts.factory.createIdentifier('foo'),
				ts.SyntaxKind.InstanceOfKeyword,
				ts.factory.createIdentifier('bar'),
			),
		],
		ObjectBindingPattern: [
			ts.factory.createObjectBindingPattern([]),
		],
		VariableDeclaration: [
			ts.factory.createVariableDeclaration(
				'foo',
				undefined,
				undefined,
				undefined
			),
		],
		BindingElement: [
			ts.factory.createBindingElement(
				undefined,
				undefined,
				'foo',
				undefined
			),
		],
		TemplateExpression: [
			ts.factory.createTemplateExpression(
				ts.factory.createTemplateHead(''),
				[]
			),
		],
		TemplateLiteralTypeNode: [
			ts.factory.createTemplateLiteralType(
				ts.factory.createTemplateHead(''),
				[]
			),
		],
		HeritageClause: [
			ts.factory.createHeritageClause(
				ts.SyntaxKind.ExtendsKeyword,
				[]
			),
		],
		ExportDeclaration: [
			ts.factory.createExportDeclaration(
				undefined,
				false,
				ts.factory.createNamedExports([]),
				undefined,
				undefined
			),
		],
		ObjectLiteralExpression: [
			ts.factory.createObjectLiteralExpression(
				undefined,
				undefined
			),
		],
		ArrayLiteralExpression: [
			ts.factory.createArrayLiteralExpression(
				undefined,
				undefined
			),
		],
	};

	for (const entry of Object.entries(empty_behaves)) {
		void it (`empty ${entry[0]} behaves`, () => {
			const result = EntityName_array_from_Node_array(entry[1]);

			assert.deepEqual(result, []);
			assert.deepEqual(from_Node_array(entry[1]), []);
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

	void it('behaves with ParenthesizedTypeNode', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createParenthesizedType(
					ts.factory.createArrayTypeNode(
						ts.factory.createTypeReferenceNode('foo')
					),
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with TypeOperatorNode', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createTypeOperatorNode(
					ts.SyntaxKind.KeyOfKeyword,
					ts.factory.createTypeReferenceNode('foo')
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with RestTypeNode', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createRestTypeNode(
					ts.factory.createTypeReferenceNode('foo')
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with TypeAliasDeclaration', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createTypeAliasDeclaration(
					undefined,
					'foo',
					undefined,
					ts.factory.createTypeReferenceNode('bar')
				),
			]),
			[
				ts.factory.createIdentifier('bar'),
			]
		)
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

	void it('behaves with ReturnStatement', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createReturnStatement(
					ts.factory.createIdentifier('foo')
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with NewExpression', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createNewExpression(
					ts.factory.createIdentifier('foo'),
					undefined,
					undefined
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with PrefixUnaryExpression', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createPrefixPlus(
					ts.factory.createIdentifier('foo'),
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves is ConditionalTypeNode', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createConditionalTypeNode(
					ts.factory.createTypeReferenceNode('foo'),
					ts.factory.createTypeReferenceNode('bar'),
					ts.factory.createTypeReferenceNode('baz'),
					ts.factory.createTypeReferenceNode('bat')
				),
			]),
			[
				ts.factory.createIdentifier('baz'),
				ts.factory.createIdentifier('foo'),
				ts.factory.createIdentifier('bar'),
				ts.factory.createIdentifier('bat'),
			]
		)
	})

	void it('behaves with AsExpression', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createAsExpression(
					ts.factory.createIdentifier('foo'),
					ts.factory.createTypeReferenceNode('bar'),
				),
			]),
			[
				ts.factory.createIdentifier('bar'),
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with ElementAccessExpression', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createElementAccessExpression(
					ts.factory.createIdentifier('foo'),
					1
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with CallExpression', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createCallExpression(
					ts.factory.createIdentifier('foo'),
					undefined,
					undefined
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with TypeQueryNode', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createTypeQueryNode(
					ts.factory.createIdentifier('foo'),
					undefined
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with PropertyAccessExpression', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createPropertyAccessExpression(
					ts.factory.createIdentifier('foo'),
					'bar'
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with TemplateSpan', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createTemplateSpan(
					ts.factory.createIdentifier('foo'),
					ts.factory.createTemplateTail('bar')
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with MappedTypeNode', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createMappedTypeNode(
					undefined,
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'foo',
						undefined,
						undefined
					),
					undefined,
					undefined,
					undefined,
					undefined
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with TemplateLiteralTypeSpan', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createTemplateLiteralTypeSpan(
					ts.factory.createTypeReferenceNode('foo'),
					ts.factory.createTemplateTail('bar')
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with ExpressionWithTypeArguments', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createExpressionWithTypeArguments(
					ts.factory.createIdentifier('foo'),
					undefined
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)
	})

	void it('behaves with ExportDeclaration', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createExportDeclaration(
					undefined,
					false,
					ts.factory.createNamedExports([
						ts.factory.createExportSpecifier(
							false,
							'foo',
							'bar'
						),
					]),
					undefined,
					undefined
				),
			]),
			[
				ts.factory.createIdentifier('bar'),
			]
		)
	})

	void it('behaves with PropertyAssignment', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createPropertyAssignment(
					'foo',
					ts.factory.createIdentifier('bar'),
				),
			]),
			[
				ts.factory.createIdentifier('bar'),
			]
		)
	})

	void it('behaves with ComputedPropertyName', () => {
		assert.deepEqual(
			EntityName_array_from_Node_array([
				ts.factory.createComputedPropertyName(
					ts.factory.createIdentifier('foo')
				),
			]),
			[
				ts.factory.createIdentifier('foo'),
			]
		)

		assert.deepEqual(
			from_Node_array([
				ts.factory.createComputedPropertyName(
					ts.factory.createIdentifier('foo')
				),
			]),
			[
				'foo',
			]
		)
	})

	void it('throws', () => {
		assert.throws(
			() => EntityName_array_from_Node_array([
				ts.factory.createExportDeclaration(
					undefined,
					false,
					undefined,
					undefined,
					undefined
				),
			]),
			{
				message: 'Unsupported types found!',
			}
		)
	})
})
