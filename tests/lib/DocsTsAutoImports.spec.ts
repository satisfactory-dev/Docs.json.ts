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
} from '@satisfactory-clips-archive/custom-assert/assert/CustomAssert';

class Testable extends DocsTsAutoImports
{
	public file_exports(): {[p: string]: [string, ...string[]]} {
		return super.file_exports();
	}
}

void describe('DocsTsAutoImports', () => {
	void describe('generate', () => {
		void it('can resolve to an empty ImportTracker', () => {
			const instance = new DocsTsAutoImports({});

			const result = instance.generate();
			assert.equal(0, result.number_of_files);
		});

		void it('can auto-resolve imports', () => {
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
			const baz = ts.factory.createTypeAliasDeclaration(
				create_modifiers('export'),
				'baz',
				undefined,
				type_reference_node('foo')
			);

			const instance = new Testable({
				'foo.ts': [
					foo,
				],
				'bar.ts': [
					bar,
					baz,
				],
			});

			assert.deepEqual(instance.file_exports(), {
				'foo.ts': ['foo'],
				'bar.ts': ['bar', 'baz'],
			});

			const result = instance.generate();
			assert.equal(result.number_of_files, 1);
			assert.equal(
				instance.imports_come_from,
				JSON.stringify(
					{
						foo: 'foo',
						bar: 'bar',
						baz: 'bar',
					},
					null,
					'\t'
				) + '\n'
			);
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

			const promise = new Promise((yup, nope) => {
				try {
					yup(instance.generate());
				} catch (err) {
					nope(err);
				}
			});

			await rejects_partial_match(promise, {
				message: 'foo conflict!',
				property: [
					'bar.ts',
					['foo'],
				],
			});
		})
	})
});
