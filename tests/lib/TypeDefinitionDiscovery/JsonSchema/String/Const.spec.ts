import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	Const,
} from '../../../../../lib/TypeDefinitionDiscovery/JsonSchema/String/Const';
import {
	update8,
} from '../../../../../lib/helpers';
import ts_assert from '@signpostmarv/ts-assert';

void describe('Const', () => {
	const instance = new Const(update8.ajv);

	void describe('generate', () => {
		void it('behaves', () => {
			const result = instance.generate()({
				type: 'string',
				const: 'foo',
			});

			ts_assert.isLiteralTypeNode(result);
			ts_assert.isStringLiteral(result.literal);
			assert.equal(result.literal.text, 'foo');
		})
	})
})
