import {
	describe,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	DataDiscovery,
} from '../../lib/DataDiscovery';
import {
	docs,
	skip_because_docs_dot_json_not_yet_bundled,
} from '../fixtures/Docs';
import {
	__dirname_from_meta,
} from '../../lib/__dirname';
import {
	readFile,
} from 'node:fs/promises';
import {
	configure_ajv,
} from '../../lib/DocsValidation';
import Ajv from 'ajv/dist/2020';

const __dirname = __dirname_from_meta(import.meta);

void describe(
	'generate_markdown',
	skip_because_docs_dot_json_not_yet_bundled,
	async () => {
		const ajv = new Ajv({verbose: true});
		configure_ajv(ajv);
		const discovery = new DataDiscovery(docs, ajv);
		const actual = await (discovery.generate_markdown());
		const expecting = (
			await readFile(`${__dirname}/../fixtures/data-progress--empty.md`)
		).toString();
		assert.equal(actual, expecting);
	}
);
