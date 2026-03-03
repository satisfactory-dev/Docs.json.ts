import {
	describe,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	DataDiscovery,
} from '../../lib/DataDiscovery.ts';
import {
	docs,
	skip_because_docs_dot_json_not_yet_bundled,
} from '../../lib/helpers.ts';
import {
	readFile,
} from 'node:fs/promises';

void describe(
	'generate_markdown update 8',
	skip_because_docs_dot_json_not_yet_bundled,
	async () => {
		const discovery = new DataDiscovery(docs, 'update8');
		const actual = await (discovery.generate_markdown());
		const expecting = (
			await readFile(`${import.meta.dirname}/../fixtures/update8/data-progress--empty.md`)
		).toString();
		assert.equal(actual, expecting);
	},
);
