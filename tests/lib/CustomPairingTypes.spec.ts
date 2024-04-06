import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	object_has_property,
	object_only_has_that_property,
	value_is_non_array_object,
} from '../../lib/CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
} from '../../lib/StringStartsWith';

void describe('object_has_property', () => {
	void it('gets no predicate', () => {
		assert.equal(object_has_property([], 'foo'), false);
		assert.equal(object_has_property({}, 'foo'), false)
		assert.equal(object_has_property({foo:undefined}, 'foo'), true);
	});
	void it('gets a predicate', () => {
		assert.equal(
			object_has_property(
				{foo: 'bar'},
				'foo',
				is_string
			),
			true
		);
		assert.equal(
			object_has_property(
				{foo: 'bar'},
				'foo',
				value_is_non_array_object
			),
			false
		);
		assert.equal(
			object_has_property(
				{foo: 'bar', bar: 1},
				'foo',
				value_is_non_array_object
			),
			false
		);
	});
});

void describe('object_only_has_that_property', () => {
	void it('gets no predicate', () => {
		assert.equal(object_only_has_that_property([], 'foo'), false);
		assert.equal(object_only_has_that_property({}, 'foo'), false);
		assert.equal(
			object_only_has_that_property(
				{foo:undefined},
				'foo'
			),
			true
		);
		assert.equal(
			object_only_has_that_property(
				{foo:undefined, bar: 1},
				'foo'
			),
			false
		);
	});
	void it('gets a predicate', () => {
		assert.equal(
			object_only_has_that_property(
				{foo: 'bar'},
				'foo',
				is_string
			),
			true
		);
		assert.equal(
			object_only_has_that_property(
				{foo: 'bar', bar: 1},
				'foo',
				is_string
			),
			false
		);
		assert.equal(
			object_only_has_that_property(
				{foo: 'bar'},
				'foo',
				value_is_non_array_object
			),
			false
		);
	});
});

void describe('value_is_non_array_object', () => {
	void it('behaves', () => {
		assert.equal(value_is_non_array_object([]), false);
		assert.equal(value_is_non_array_object(1), false);
		assert.equal(value_is_non_array_object(undefined), false);
		assert.equal(value_is_non_array_object({}), true);
		assert.equal(value_is_non_array_object({} as unknown[]), true);
	});
});
