import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	__dirname_from_meta,
} from '../../lib/__dirname';
import {
	dirname,
} from 'node:path';
import {
	fileURLToPath,
} from 'node:url';

void describe('__dirname_from_meta', () => {
	void it('behaves', () => {
		assert.equal(
			__dirname_from_meta(import.meta),
			fileURLToPath(dirname(import.meta.url)),
		);
		assert.equal(
			__dirname_from_meta({
				dirname: '',
				filename: '',
				url: 'file:///app/foo/bar.ts',
				resolve: () => '',
			}),
			'/app/foo',
		);
	});
});
