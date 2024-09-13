import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	FilesGenerator,
} from '../../../lib/DocsTsGenerator/FilesGenerator';
import {
	TypeDefinitionWriter,
} from '../../../lib/TypeDefinitionWriter';
import {
	update8,
} from '../../../lib/helpers';
import {
	create_literal,
} from '../../../lib/TsFactoryWrapper';
import ts, {
	TypeNode,
} from 'typescript';
import ts_assert from '@signpostmarv/ts-assert';
import {
	array_has_size,
	not_undefined,
	rejects_partial_match,
} from '@satisfactory-dev/custom-assert';
import {
	DocsDataItem,
} from '../../../lib/DocsTsGenerator';

void describe('FilesGenerator', async () => {
	const type_definition_writer = new TypeDefinitionWriter(update8);
	const discovery = await type_definition_writer.discovery;
	const instance = new class Testable extends FilesGenerator{
		constructor()
		{
			super(
				[],
				discovery,
			);
		}

		public generate_file(entry:DocsDataItem)
		{
			return super.generate_file(entry);
		}

		public generate_files_class_name(value:string)
		{
			return super.generate_files_class_name(value);
		}

		public generate_files_entry_yield(
			entry_type:TypeNode,
			entry_class_name:string,
		) {
			return super.generate_files_entry_yield(
				entry_type,
				entry_class_name,
			);
		}
	};

	void describe('generate_file', () => {
		void it('falls over as expected', async() => {
			const promise = instance.generate_file({
				NativeClass: 'foo',
				Classes: [],
			});

			await rejects_partial_match(promise, {
				property: {
					entry: {
						NativeClass: 'foo',
						Classes: [],
					},
				},
				message: 'Could not find matching validator!',
			});
		})
	})

	void describe('generate_files_class_name', () => {
		void it('behaves', () => {
			assert.equal(
				instance.generate_files_class_name('foo\'bar\''),
				'bar',
			)
		})
	})

	void describe('generate_files_entry_yield', () => {
		void it('behaves', () => {
			const entry_type = create_literal('foo');

			const result = instance.generate_files_entry_yield(
				entry_type,
				'bar',
			);

			assert.equal(result.file, 'classes/CoreUObject/bar.ts');

			ts_assert.isTypeAliasDeclaration(result.node);
			not_undefined(result.node.modifiers);
			array_has_size(result.node.modifiers, 1);
			ts_assert.isTokenWithExpectedKind(
				result.node.modifiers[0],
				ts.SyntaxKind.ExportKeyword,
			);
			ts_assert.isExpectedIdentifier(
				result.node.name,
				'bar__NativeClass',
			);
			assert.equal(result.node.typeParameters, undefined);
			assert.equal(result.node.type, entry_type);
		})
	})
})
