import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	ConvertsArray,
	ConvertsObject,
	Generator,
	RawGenerationResult,
} from '../../../lib/DataDiscovery/Generator';
import {
	DataDiscovery,
} from '../../../lib/DataDiscovery';
import {
	docs,
} from '../../../lib/helpers';

void describe('Generator.find', () => {
	const discovery = new DataDiscovery(docs);

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
			'foo',
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
	const discovery = new DataDiscovery(docs);

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

void describe('ConvertsObject.convert_unknown', () => {
	const discovery = new DataDiscovery(docs);

	const example = new class extends ConvertsObject<unknown> {
		constructor() {
			super(discovery);
		}
		convert_object(): Promise<{[key: string]: unknown}> {
			return Promise.resolve({});
		}

		matches() {
			return Promise.resolve(undefined);
		}
	}

	void it('throws only when expected', () => {
		assert.throws(() => example.convert_unknown({}, 1));
		assert.throws(() => example.convert_unknown({}, []));
		assert.doesNotThrow(() => example.convert_unknown({}, {}));
	});
})
