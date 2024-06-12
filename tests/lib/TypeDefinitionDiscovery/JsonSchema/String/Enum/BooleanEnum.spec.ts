import {
	describe,
	it,
} from 'node:test';
import {
	BooleanEnum,
} from '../../../../../../lib/TypeDefinitionDiscovery/JsonSchema/String/Enum/BooleanEnum';
import {
	docs,
} from '../../../../../../lib/helpers';
import ts_assert from '@signpostmarv/ts-assert';
import ts from 'typescript';
import {
	array_has_size,
} from '@satisfactory-clips-archive/custom-assert/assert/CustomAssert';

void describe('BooleanEnum', () => {
	const instance = new BooleanEnum(docs.ajv);

	void describe('generate', () => {
		void it('behaves with boolean only', () => {
			const result = instance.generate()({
				type: 'string',
				enum: ['True', 'False'],
			});

			ts_assert.isTokenWithExpectedKind(
				result,
				ts.SyntaxKind.BooleanKeyword,
			);
		})

		void it('behaves with nullable boolean', () => {
			const result = instance.generate()({
				type: 'string',
				enum: ['True', 'False', ''],
			});

			ts_assert.isUnionTypeNode(result);
			array_has_size(result.types, 2);
			ts_assert.isTokenWithExpectedKind(
				result.types[0],
				ts.SyntaxKind.BooleanKeyword,
			);
			ts_assert.isLiteralTypeNode(result.types[1]);
			ts_assert.isTokenWithExpectedKind(
				result.types[1].literal,
				ts.SyntaxKind.NullKeyword,
			);
		})
	})
})
