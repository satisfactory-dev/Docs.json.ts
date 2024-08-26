import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	FragileTypeSafetyError,
	NoMatchError,
} from '../../lib/Exceptions';

void describe('NoMatchError', () => {
	void it('has a default message', () => {
		const foo = new NoMatchError(null);

		assert.equal(foo.message, 'No match found!');
	});
	void it('can have a specific message', () => {
		const foo = new NoMatchError(null, 'foo');

		assert.equal(foo.message,'foo');
	});
	void it('will keep a copy of the passed value', () => {
		assert.equal((new NoMatchError(1)).property,1);
		assert.equal((new NoMatchError(null)).property,null);
		assert.equal((new NoMatchError(true)).property, true);
		assert.equal((new NoMatchError(false)).property, false);
	});
})

void describe('FragileTypeSafetyError', () => {
	void it('has a default message', () => {
		assert.equal(
			(new FragileTypeSafetyError(null)).message,
			'type safety in here is a bit fragile, check earlier in the stack',
		);
	});
})
