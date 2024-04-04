import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	array_has_size,
	not_undefined,
} from '../../assert/CustomAssert';
import {
	ImportTracker,
} from '../../lib/TypesGeneration';
import {
	isNamedImports, isStringLiteral,
} from '../../assert/TypeScriptAssert';

void describe('ImportTracker.generate_imports()', () => {
	void it('returns an empty array with no configured imports', () => {
		const instance = new ImportTracker();
		array_has_size(instance.generate_imports('foo.ts'), 0);
	});

	void it('returns an empty array with some other file configured', () => {
		const instance = new ImportTracker();

		instance.merge_and_set_imports({
			'bar.ts': {
				baz: ['baz'],
			},
		});
		assert.equal(1, instance.number_of_files);

		array_has_size(instance.generate_imports('foo.ts'), 0);
	});

	void it(
		`returns an empty array with some other file configured via merge_and_set_imports`,
		() => {
			const instance = new ImportTracker();
			assert.equal(0, instance.number_of_files);
			array_has_size(instance.generate_imports('foo.ts'), 0);
		}
	);

	void it('returns an expected array of ImportDeclaration instances', () => {
		const instance = new ImportTracker();

		instance.merge_and_set_imports({
			'foo.ts': {
				'baz': ['bar'],
			},
		});
		assert.equal(1, instance.number_of_files);

		let imports = instance.generate_imports('foo.ts');

		function check_element(
			index:number,
			module_specifier:string,
			name_bindings:[string, ...string[]]
		) {
			const import_entry = imports[index];

			not_undefined(import_entry.importClause);
			isStringLiteral(import_entry.moduleSpecifier);
			assert.equal(
				import_entry.moduleSpecifier.text,
				module_specifier
			);
			not_undefined(import_entry.importClause.namedBindings);
			isNamedImports(import_entry.importClause.namedBindings);

			const {elements} = import_entry.importClause.namedBindings;

			array_has_size(elements, name_bindings.length);

			name_bindings.forEach((name_binding, name_binding_index) => {
				assert.equal(
					elements[name_binding_index].name.text,
					name_binding
				);
			});
		}

		array_has_size(imports, 1);
		check_element(0, 'baz', ['bar']);

		instance.merge_and_set_imports({
			'foo.ts': {
				'bar': ['baz'],
			},
		});
		assert.equal(1, instance.number_of_files);

		imports = instance.generate_imports('foo.ts');

		array_has_size(imports, 2);
		check_element(0, 'baz', ['bar']);
		check_element(1, 'bar', ['baz']);

		instance.merge_and_set_imports({
			'foo.ts': {
				'bar': ['test'],
			},
		});
		assert.equal(1, instance.number_of_files);

		imports = instance.generate_imports('foo.ts');

		array_has_size(imports, 2);
		check_element(0, 'baz', ['bar']);
		check_element(1, 'bar', ['baz', 'test']);
	});
});

void describe('ImportTracker.merge_and_set_imports()', () => {
	void it('throws', () => {
		const instance = new ImportTracker();

		assert.throws(() => instance.merge_and_set_imports({
			'foo.ts': {
				'bar.ts': ['baz'],
			},
		}));
	});
});
