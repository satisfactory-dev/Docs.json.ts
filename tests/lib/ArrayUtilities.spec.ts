import 'jasmine';
import {
	non_empty_keys,
	non_empty_map, require_non_empty_array,
} from '../../lib/ArrayUtilities';

describe('non_empty_map', () => {
	it('behaves', () => {
		expect(non_empty_map([1,2,3], e => e)).toHaveSize(3);
	});
})

describe('non_empty_keys', () => {
	it('behaves', () => {
		expect(
			non_empty_keys({} as {[key: string]: unknown})
		).toEqual([]);
		expect(
			non_empty_keys({foo: 1, bar: 1})
		).toEqual(['foo', 'bar']);
	})
})

describe('require_non_empty_array', () => {
	it('throws', () => {
		expect(() => require_non_empty_array([])).toThrow()
	})
	it('doesn\'t throw', () => {
		expect(() => require_non_empty_array([1])).not.toThrow()
	})
})
