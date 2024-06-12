import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	value_matches_ExpressionResult,
} from '../../assert/CustomAssert';
import ts from 'typescript';
import {
	ExpressionResult,
} from '../../lib/DataDiscovery/Generator';

void describe('value_matches_ExpressionResult', () => {
	void it('does not throw', () => {
		const value = ts.factory.createStringLiteral('foo');

		assert.doesNotThrow(() => value_matches_ExpressionResult(
			value,
			new ExpressionResult(value)
		));
	});
	void it('does throw', () => {
		const value = ts.factory.createStringLiteral('foo');

		assert.throws(() => value_matches_ExpressionResult(
			value,
			new ExpressionResult(ts.factory.createStringLiteral('bar'))
		));
	});
});
