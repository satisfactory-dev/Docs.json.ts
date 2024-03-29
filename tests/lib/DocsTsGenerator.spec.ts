import {
	DocsTsGenerator,
} from '../../lib/DocsTsGenerator';

const __dirname = import.meta.dirname;

describe('DocsTsGenerator.schema', () => {
	const docs = new DocsTsGenerator({
		docs_path: `${__dirname}/../../data/Docs.json`,
		cache_path: `${__dirname}/../../data/`,
	});

	it('will currently return update 8', async () => {
		expect(
			(await docs.schema()).$id
		).toEqual(
			'update8.schema.json'
		);
	});
});

describe('DocsTsGenerator.definition', () => {
	const docs = new DocsTsGenerator({
		docs_path: `${__dirname}/../../data/Docs.json`,
		cache_path: `${__dirname}/../../data/`,
	});

	it('will throw on unrecognised definitions', async () => {
		let passed = false;
		try {
			await docs.definition('nope');
		} catch (err) {
			passed = true;
		}
		expect(passed).toBeTrue();
	});
	it('will return on a recognised definition', () => {
		expect(
			async () => await docs.definition('NativeClass')
		).not.toThrow();
	});
});
