import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	ConvertsArray,
	ConvertsUnknown,
	GenerationResult,
	Generator,
	RawGenerationResult,
} from '../../../lib/DataDiscovery/Generator';
import {
	DocsTsGenerator,
} from '../../../lib/DocsTsGenerator';
import {
	configure_ajv,
} from '../../../lib/DocsValidation';
import {
	DataDiscovery,
} from '../../../lib/DataDiscovery';
import Ajv, {SchemaObject} from 'ajv/dist/2020';
import {
	__dirname_from_meta,
} from '../../../lib/__dirname';

const __dirname = __dirname_from_meta(import.meta);

void describe('Generator.find', () => {
	const docs = new DocsTsGenerator({
		docs_path: `${__dirname}/../../../data/Docs.json`,
		cache_path: `${__dirname}/../../../data/`,
	});
	const ajv = new Ajv({verbose: true});
	configure_ajv(ajv);
	const discovery = new DataDiscovery(docs, ajv);

	void it('resolves unmatched to raw', async () => {
		assert.equal(
			await (await Generator.find([], 'foo')).result(),
			'foo',
		);
		assert.equal(
			await (await Generator.find([
				new class extends Generator {
					constructor() {
						super(discovery);
					}


					matches() {
						return Promise.resolve(undefined);
					}
				},
			], 'foo')).result(),
			'foo'
		);
	});

	void it('can resolve matched to something else', async () => {
		assert.equal(
			await (await Generator.find([
				new class extends Generator {
					constructor() {
						super(discovery);
					}


					matches() {
						return Promise.resolve(new RawGenerationResult(
							'bar',
						));
					}
				},
			], 'foo')).result(),
			'bar',
		);
	});
});

void describe('ConvertsArray.convert_unknown', () => {
	const docs = new DocsTsGenerator({
		docs_path: `${__dirname}/../../../data/Docs.json`,
		cache_path: `${__dirname}/../../../data/`,
	});
	const ajv = new Ajv({verbose: true});
	configure_ajv(ajv);
	const discovery = new DataDiscovery(docs, ajv);

	const example = new class extends ConvertsArray<unknown> {
		constructor() {
			super(discovery);
		}
		convert_array(): Promise<unknown[]> {
			return Promise.resolve([]);
		}

		matches() {
			return Promise.resolve(undefined);
		}
	}

	void it('throws only when expected', () => {
		assert.throws(() => example.convert_unknown({}, 1));
		assert.doesNotThrow(() => example.convert_unknown({}, []));
	});
})
