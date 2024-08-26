import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	docs,
} from '../../lib/helpers';

void describe('DocsTsGenerator.schema', () => {
	void it('will currently return update 8', async () => {
		assert.equal(
			(await docs.schema()).$id,
			'update8.schema.json',
		);
	});
});

void describe('DocsTsGenerator.definition', () => {
	void it('will throw on unrecognised definition', async () => {
		let passed = false;
		try {
			await docs.definition('nope');
		} catch {
			passed = true;
		}
		assert.equal(passed, true);
	});
	void it('will return on a recognised definition', () => {
		assert.doesNotThrow(
			async () => await docs.definition('NativeClass'),
		);
	});
});
