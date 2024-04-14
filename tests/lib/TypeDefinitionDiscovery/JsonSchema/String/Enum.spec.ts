import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	Enum,
} from '../../../../../lib/TypeDefinitionDiscovery/JsonSchema/String/Enum';
import {
	docs,
} from '../../../../../lib/helpers';
import ts_assert from '@signpostmarv/ts-assert';
import {
	array_has_size,
} from '../../../../../assert/CustomAssert';

void describe('Enum', () => {
	const instance = new Enum(docs.ajv);

	void describe('generate', () => {
		void it('behaves', () => {
			const result = instance.generate()({
				type: 'string',
				enum: [
					'foo',
					'bar',
				],
			});

			ts_assert.isUnionTypeNode(result);
			array_has_size(result.types, 2);
			ts_assert.isLiteralTypeNode(result.types[0]);
			ts_assert.isStringLiteral(result.types[0].literal);
			assert.equal(result.types[0].literal.text, 'foo');
			ts_assert.isLiteralTypeNode(result.types[1]);
			ts_assert.isStringLiteral(result.types[1].literal);
			assert.equal(result.types[1].literal.text, 'bar');
		})
	})
})
