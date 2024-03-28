import 'jasmine';
import {
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
