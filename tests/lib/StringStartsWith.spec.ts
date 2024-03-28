import 'jasmine';
import {
	$ref_in_array,
	is_$ref,
	is_string,
	local_ref,
} from '../../lib/StringStartsWith';

describe('local_ref', () => {
	it('works', () => {
		expect(local_ref('foo')).toEqual('#/definitions/foo');
	})

	it('throws', () => {
		expect(() => local_ref('foo bar')).toThrow();
	})
});

describe('is_string', () => {
	it ('behaves', () => {
		expect(is_string('foo')).toBeTrue();
		expect(is_string(1)).toBeFalse();
	});
});

describe('is_$ref', () => {
	it('behaves', () => {
		expect(is_$ref('#/definitions/foo')).toBeTrue();
		expect(is_$ref('foo')).toBeFalse();
	});
});

describe('$ref_in_array', () => {
	it('behaves', () => {
		expect($ref_in_array(
			1,
			['#/definitions/foo']
		)).toBeFalse();
		expect($ref_in_array(
			'foo',
			['#/definitions/foo']
		)).toBeFalse();
		expect($ref_in_array(
			'#/definitions/bar',
			['#/definitions/foo']
		)).toBeFalse();
		expect($ref_in_array(
			'#/definitions/foo',
			['#/definitions/foo']
		)).toBeTrue();
	});
});
