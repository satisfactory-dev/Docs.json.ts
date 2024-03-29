import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	FilesGenerator,
	FromArray,
} from '../../lib/FilesGenerator';
import {
	create_literal,
} from '../../lib/TsFactoryWrapper';
import {
	value_is_non_array_object,
} from '../../lib/CustomParsingTypes/CustomPairingTypes';

void describe('FromArray', () => {
	void it('behaves', async () => {
		const instance = new FromArray([
			{file: 'foo.ts', node: create_literal('foo')},
		]);
		const entries = [];
		for await (const entry of instance.generate_files()) {
			entries.push(entry);
		}

		assert.strictEqual(entries.length, 1);
	});
});

void describe('merge_files', () => {
	void it('defines an object', async () => {
		assert.strictEqual(
			value_is_non_array_object(
				await FilesGenerator.merge_files([])
			),
			true
		);
	})
	void it('modifies an object', async () => {
		const files = {};

		assert.strictEqual(
			(await FilesGenerator.merge_files([
				new FromArray([
					{file: 'foo.ts', node: create_literal('bar')},
				]),
			], files))['foo.ts'].length,
			1
		);
	})
});
