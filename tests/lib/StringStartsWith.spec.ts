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
		assert.equal(local_ref('foo'), '#/$defs/foo');
	})

	void it('throws', () => {
		assert.throws(() => local_ref('foo bar'));
		assert.throws(() => local_ref('#/$defs/foo'));
	})
});

void describe('is_string', () => {
	void it ('behaves', () => {
		assert.equal(is_string('foo'), true);
		assert.equal(is_string(1), false);
	});
});

void describe('is_$ref', () => {
	void it('behaves', () => {
		assert.equal(is_$ref('#/$defs/foo'), true);
		assert.equal(is_$ref('foo'), false);
	});
});

void describe('$ref_in_array', () => {
	void it('behaves', () => {
		assert.equal($ref_in_array(
			1,
			['#/$defs/foo']
		), false);
		assert.equal($ref_in_array(
			'foo',
			['#/$defs/foo']
		), false);
		assert.equal($ref_in_array(
			'#/$defs/bar',
			['#/$defs/foo']
		), false);
		assert.equal($ref_in_array(
			'#/$defs/foo',
			['#/$defs/foo']
		), true);
	});
});
