import 'jasmine';
import {
	object_has_property,
	object_only_has_that_property,
	value_is_non_array_object,
} from '../../lib/CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
} from '../../lib/StringStartsWith';

describe('object_has_property', () => {
	it('gets no predicate', () => {
		expect(object_has_property([], 'foo')).toBeFalse();
		expect(object_has_property({}, 'foo')).toBeFalse()
		expect(object_has_property({foo:undefined}, 'foo')).toBeTrue();
	});
	it('gets a predicate', () => {
		expect(
			object_has_property(
				{foo: 'bar'},
				'foo',
				is_string
			)
		).toBeTrue();
		expect(
			object_has_property(
				{foo: 'bar'},
				'foo',
				value_is_non_array_object
			)
		).toBeFalse();
		expect(
			object_has_property(
				{foo: 'bar', bar: 1},
				'foo',
				value_is_non_array_object
			)
		).toBeFalse();
	});
});

describe('object_only_has_that_property', () => {
	it('gets no predicate', () => {
		expect(object_only_has_that_property([], 'foo')).toBeFalse();
		expect(object_only_has_that_property({}, 'foo')).toBeFalse()
		expect(
			object_only_has_that_property(
				{foo:undefined},
				'foo'
			)
		).toBeTrue();
		expect(
			object_only_has_that_property(
				{foo:undefined, bar: 1},
				'foo'
			)
		).toBeFalse();
	});
	it('gets a predicate', () => {
		expect(
			object_only_has_that_property(
				{foo: 'bar'},
				'foo',
				is_string
			)
		).toBeTrue();
		expect(
			object_only_has_that_property(
				{foo: 'bar', bar: 1},
				'foo',
				is_string
			)
		).toBeFalse();
		expect(
			object_only_has_that_property(
				{foo: 'bar'},
				'foo',
				value_is_non_array_object
			)
		).toBeFalse();
	});
});

describe('value_is_non_array_object', () => {
	it('behaves', () => {
		expect(value_is_non_array_object([])).toBeFalse();
		expect(value_is_non_array_object(1)).toBeFalse();
		expect(value_is_non_array_object(undefined)).toBeFalse();
		expect(value_is_non_array_object({})).toBeTrue();
		expect(value_is_non_array_object({} as unknown[])).toBeTrue();
	});
});
