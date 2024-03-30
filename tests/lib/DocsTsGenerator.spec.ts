import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	DocsTsGenerator,
} from '../../lib/DocsTsGenerator';
import {
	__dirname_from_meta,
} from '../../lib/__dirname';

const __dirname = __dirname_from_meta(import.meta);

void describe('DocsTsGenerator.schema', () => {
	const docs = new DocsTsGenerator({
		docs_path: `${__dirname}/../../data/Docs.json`,
		cache_path: `${__dirname}/../../data/`,
	});

	void it('will currently return update 8', async () => {
		assert.strictEqual(
			(await docs.schema()).$id,
			'update8.schema.json'
		);
	});
});

void describe('DocsTsGenerator.definition', () => {
	const docs = new DocsTsGenerator({
		docs_path: `${__dirname}/../../data/Docs.json`,
		cache_path: `${__dirname}/../../data/`,
	});

	void it('will throw on unrecognised definitions', async () => {
		let passed = false;
		try {
			await docs.definition('nope');
		} catch (err) {
			passed = true;
		}
		assert.strictEqual(passed, true);
	});
	void it('will return on a recognised definition', () => {
		assert.doesNotThrow(
			async () => await docs.definition('NativeClass')
		);
	});
});
