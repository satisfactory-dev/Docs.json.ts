import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	DocsTsAutoImports,
} from '../../lib/DocsTsAutoImports';
import {
	create_literal,
	create_modifiers,
	type_reference_node,
} from '../../lib/TsFactoryWrapper';
import ts from 'typescript';
import {
	rejects_partial_match,
} from '../../assert/CustomAssert';

class Testable extends DocsTsAutoImports
{
	public file_exports(): {[p: string]: [string, ...string[]]} {
		return super.file_exports();
	}
}

void describe('DocsTsAutoImports.generate()', () => {
	void it('can resolve to an empty ImportTracker', async () => {
		const instance = new DocsTsAutoImports({});

		const promise = instance.generate();
		await assert.doesNotReject(promise);

		const result = await promise;
		assert.equal(0, result.number_of_files);
	});

	void it('can auto-resolve imports', async () => {
		const foo = ts.factory.createTypeAliasDeclaration(
			create_modifiers('export'),
			'foo',
			undefined,
			create_literal('foo')
		);
		const bar = ts.factory.createTypeAliasDeclaration(
			create_modifiers('export'),
			'bar',
			undefined,
			type_reference_node('foo')
		);

		const instance = new Testable({
			'foo.ts': [
				foo,
			],
			'bar.ts': [
				bar,
			],
		});

		assert.deepEqual(instance.file_exports(), {
			'foo.ts': ['foo'],
			'bar.ts': ['bar'],
		});

		const promise = instance.generate();
		await assert.doesNotReject(promise);

		const result = await promise;
		assert.equal(1, result.number_of_files);
	});

	void it('throws an error on conflicting exports', async () => {
		const foo = ts.factory.createTypeAliasDeclaration(
			create_modifiers('export'),
			'foo',
			undefined,
			create_literal('foo')
		);
		const bar = ts.factory.createTypeAliasDeclaration(
			create_modifiers('export'),
			'foo',
			undefined,
			type_reference_node('foo')
		);

		const instance = new Testable({
			'foo.ts': [
				foo,
			],
			'bar.ts': [
				bar,
			],
		});

		assert.deepEqual(instance.file_exports(), {
			'foo.ts': ['foo'],
			'bar.ts': ['foo'],
		});

		const promise = instance.generate();
		await rejects_partial_match(promise, {
			message: 'foo conflict!',
			property: [
				'bar.ts',
				['foo'],
			],
		});
	})
});
