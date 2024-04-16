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
			ts.factory.createTypeReferenceNode('foo'),
		]);

		assert.deepEqual(result, [
			ts.factory.createIdentifier('foo'),
		]);
	})
})
