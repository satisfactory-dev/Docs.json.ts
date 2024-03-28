import 'jasmine';
import {
	FilesGenerator,
	FromArray,
} from '../../lib/FilesGenerator';
import {
	create_literal,
} from '../../lib/TsFactoryWrapper';

describe('FromArray', () => {
	it('behaves', async () => {
		const instance = new FromArray([
			{file: 'foo.ts', node: create_literal('foo')},
		]);
		const entries = [];
		for await (const entry of instance.generate_files()) {
			entries.push(entry);
		}

		expect(entries).toHaveSize(1);
	});
});

describe('merge_files', () => {
	it('defines an object', async () => {
		expect(await FilesGenerator.merge_files([])).toEqual({});
	})
	it('modifies an object', async () => {
		const files = {};

		expect(
			await FilesGenerator.merge_files([
				new FromArray([
					{file: 'foo.ts', node: create_literal('bar')},
				]),
			], files)
		).toEqual({'foo.ts': []});
	})
});
