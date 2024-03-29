import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	adjust_class_name, create_literal,
	create_modifiers,
	modifier_map, type_reference_node,
} from '../../lib/TsFactoryWrapper';
import {
	non_empty_keys,
} from '../../lib/ArrayUtilities';
import ts, {
	LiteralTypeNode,
	StringLiteral,
} from 'typescript';

void describe('adjust_class_name', () => {
	void it('behaves', () => {
		for (const entry of Object.entries({
			'boolean': 'Docs_boolean',
			'class': 'Docs_class',
			'foo-bar': 'foo_bar',
		})) {
			const [input, expected] = entry;

			assert.strictEqual(adjust_class_name(input), expected);
		}
	});
});

void describe('create_modifiers', () => {
	void it('removes duplicates', () => {
		assert.strictEqual(
			create_modifiers('export', 'export', 'export').length,
			1
		);

		const keys = non_empty_keys(modifier_map);

		assert.strictEqual(
			create_modifiers(
				...keys,
				...keys
			).length,
			keys.length
		);
	});
})

void describe('type_reference_node', () => {
	void it('behaves', () => {
		const type = type_reference_node(
			'foo',
			create_literal('bar'),
			create_literal('baz')
		);

		assert.strictEqual(ts.isIdentifier(type.typeName), true);
		assert.strictEqual(type.typeArguments?.length, 2);
		assert.strictEqual(
			ts.isLiteralTypeNode((type.typeArguments || [])[0]),
			true
		);
		assert.strictEqual(
			ts.isLiteralTypeNode((type.typeArguments || [])[1]),
			true
		);
		assert.strictEqual(
			ts.isStringLiteral(
				(
					type.typeArguments as unknown as [
						LiteralTypeNode,
						LiteralTypeNode
					]
				)[0].literal
			),
			true
		);
		assert.strictEqual(
			ts.isStringLiteral(
				(
					type.typeArguments as unknown as [
						LiteralTypeNode,
						LiteralTypeNode
					]
				)[1].literal
			),
			true
		);
		assert.strictEqual(
			((
				type.typeArguments as unknown as [
					LiteralTypeNode,
					LiteralTypeNode
				]
			)[0].literal as StringLiteral).text,
			'bar'
		);
		assert.strictEqual(
			((
				type.typeArguments as unknown as [
					LiteralTypeNode,
					LiteralTypeNode
				]
			)[1].literal as StringLiteral).text,
			'baz'
		);
	});
});
