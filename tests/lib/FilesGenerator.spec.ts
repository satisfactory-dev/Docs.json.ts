import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	FilesGenerator,
	FromArray,
	guess_filename,
} from '../../lib/FilesGenerator';
import {
	create_literal,
} from '../../lib/TsFactoryWrapper';
import {
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

void describe('FromArray', () => {
	void it('behaves', async () => {
		const instance = new FromArray([
			{file: 'foo.ts', node: create_literal('foo')},
		]);
		const entries = [];
		for await (const entry of instance.generate_files()) {
			entries.push(entry);
		}

		assert.equal(entries.length, 1);
	});
});

void describe('merge_files', () => {
	void it('defines an object', async () => {
		assert.equal(
			value_is_non_array_object(
				await FilesGenerator.merge_files([]),
			),
			true,
		);
	})
	void it('modifies an object', async () => {
		const files = {};

		assert.equal(
			(await FilesGenerator.merge_files([
				new FromArray([
					{file: 'foo.ts', node: create_literal('bar')},
				]),
			], files))['foo.ts'].length,
			1,
		);
	})
});

void describe('guess_filename', () => {
	void it('guess_filename', () => {
		assert.equal(
			guess_filename('foo'),
			'common/unassigned.ts',
		);
		assert.equal(
			guess_filename('boolean'),
			'common/scalar.ts',
		);
		assert.equal(
			guess_filename('NativeClass--foo'),
			'classes/base.ts',
		);
		assert.equal(
			guess_filename('FGFoo--bar'),
			'classes/CoreUObject/FGFoo.ts',
		);
		assert.equal(
			guess_filename('FGFoo--type'),
			'classes/CoreUObject/FGFoo.ts',
		);
		assert.equal(
			guess_filename('FGFoo__type'),
			'classes/CoreUObject/FGFoo.ts',
		);
		assert.equal(
			guess_filename('FGFoo'),
			'classes/CoreUObject/FGFoo.ts',
		);
	});
});
