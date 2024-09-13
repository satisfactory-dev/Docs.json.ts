import {
	describe,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	DataDiscovery,
} from '../../lib/DataDiscovery';
import {
	update8,
	skip_because_docs_dot_json_not_yet_bundled,
} from '../../lib/helpers';
import {
	__dirname_from_meta,
} from '../../lib/__dirname';
import {
	readFile,
} from 'node:fs/promises';

const __dirname = __dirname_from_meta(import.meta);

void describe(
	'generate_markdown',
	skip_because_docs_dot_json_not_yet_bundled,
	async () => {
		const discovery = new DataDiscovery(update8);
		const actual = await (discovery.generate_markdown());
		const expecting = (
			await readFile(`${__dirname}/../fixtures/data-progress--empty.md`)
		).toString();
		assert.equal(actual, expecting);
	},
);
