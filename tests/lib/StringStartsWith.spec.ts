import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	$ref_in_array,
	is_$ref,
	is_string,
	local_ref,
} from '../../lib/StringStartsWith';

void describe('local_ref', () => {
	void it('works', () => {
		assert.strictEqual(local_ref('foo'), '#/definitions/foo');
	})

	void it('throws', () => {
		assert.throws(() => local_ref('foo bar'));
		assert.throws(() => local_ref('#/definitions/foo'));
	})
});

void describe('is_string', () => {
	void it ('behaves', () => {
		assert.strictEqual(is_string('foo'), true);
		assert.strictEqual(is_string(1), false);
	});
});

void describe('is_$ref', () => {
	void it('behaves', () => {
		assert.strictEqual(is_$ref('#/definitions/foo'), true);
		assert.strictEqual(is_$ref('foo'), false);
	});
});

void describe('$ref_in_array', () => {
	void it('behaves', () => {
		assert.strictEqual($ref_in_array(
			1,
			['#/definitions/foo']
		), false);
		assert.strictEqual($ref_in_array(
			'foo',
			['#/definitions/foo']
		), false);
		assert.strictEqual($ref_in_array(
			'#/definitions/bar',
			['#/definitions/foo']
		), false);
		assert.strictEqual($ref_in_array(
			'#/definitions/foo',
			['#/definitions/foo']
		), true);
	});
});
