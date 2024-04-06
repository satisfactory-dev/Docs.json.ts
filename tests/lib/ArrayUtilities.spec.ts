import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	non_empty_keys,
	non_empty_map, require_non_empty_array,
} from '../../lib/ArrayUtilities';

void describe('non_empty_map', () => {
	void it('behaves', () => {
		assert.equal(
			non_empty_map([1,2,3], e => e).length,
			3
		);
	});
})

void describe('non_empty_keys', () => {
	void it('behaves', () => {
		assert.equal(
			non_empty_keys({} as {[key: string]: unknown}).length,
			0
		);
		assert.deepEqual(
			non_empty_keys({foo: 1, bar: 1}),
			['foo', 'bar']
		);
	})
})

void describe('require_non_empty_array', () => {
	void it('throws', () => {
		assert.throws(() => require_non_empty_array([]))
	})
	void it('doesn\'t throw', () => {
		assert.doesNotThrow(() => require_non_empty_array([1]))
	})
})
