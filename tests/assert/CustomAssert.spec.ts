import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	array_has_size, is_instanceof,
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

void describe('array_has_size', () => {
	void it('does not throw', () => {
		assert.doesNotThrow(() => array_has_size([], 0));
		assert.doesNotThrow(() => array_has_size(['foo'], 1));
	});
	void it('does throw', () => {
		assert.throws(() => array_has_size([], 1));
		assert.throws(() => array_has_size([1], 0));
	});
});

void describe('is_instanceof', () => {
	void it('does not throw', () => {
		assert.doesNotThrow(() => is_instanceof([], Array));
	});
	void it('does throw', () => {
		assert.throws(() => is_instanceof(1, Array));
	});
});
