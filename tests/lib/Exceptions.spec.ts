import 'jasmine';
import {
	FragileTypeSafetyError,
	NoMatchError,
} from '../../lib/Exceptions';

describe('NoMatchError', () => {
	it('has a default message', () => {
		const foo = new NoMatchError(null);

		expect(foo.message).toEqual('No match found!');
	});
	it('can have a specific message', () => {
		const foo = new NoMatchError(null, 'foo');

		expect(foo.message).toEqual('foo');
	});
	it('will keep a copy of the passed value', () => {
		expect((new NoMatchError(1)).property).toEqual(1);
		expect((new NoMatchError(null)).property).toEqual(null);
		expect((new NoMatchError(true)).property).toBeTrue();
		expect((new NoMatchError(false)).property).toBeFalse();
	});
})

describe('FragileTypeSafetyError', () => {
	it('has a default message', () => {
		expect((new FragileTypeSafetyError(null)).message).toEqual(
			'type safety in here is a bit fragile, check earlier in the stack'
		);
	});
})
