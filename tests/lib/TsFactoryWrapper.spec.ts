import 'jasmine';
import {
	adjust_class_name, create_literal,
	create_modifiers,
	modifier_map, type_reference_node,
} from '../../lib/TsFactoryWrapper';
import {
	non_empty_keys,
} from '../../lib/ArrayUtilities';
import exp from 'node:constants';
import ts, {LiteralTypeNode, StringLiteral} from 'typescript';

describe('adjust_class_name', () => {
	it('behaves', () => {
		for (const entry of Object.entries({
			'boolean': 'Docs_boolean',
			'class': 'Docs_class',
			'foo-bar': 'foo_bar',
		})) {
			const [input, expected] = entry;

			expect(adjust_class_name(input)).toEqual(expected);
		}
	});
});

describe('create_modifiers', () => {
	it('removes duplicates', () => {
		expect(
			create_modifiers('export', 'export', 'export')
		).toHaveSize(1);

		const keys = non_empty_keys(modifier_map);

		expect(
			create_modifiers(
				...keys,
				...keys
			)
		).toHaveSize(keys.length);
	});
})

describe('type_reference_node', () => {
	it('behaves', () => {
		const type = type_reference_node(
			'foo',
			create_literal('bar'),
			create_literal('baz')
		);

		expect(ts.isIdentifier(type.typeName)).toBeTrue();
		expect(type.typeArguments).toHaveSize(2);
		expect(ts.isLiteralTypeNode((type.typeArguments || [])[0])).toBeTrue();
		expect(ts.isLiteralTypeNode((type.typeArguments || [])[1])).toBeTrue();
		expect(
			ts.isStringLiteral(
				(
					type.typeArguments as unknown as [
						LiteralTypeNode,
						LiteralTypeNode
					]
				)[0].literal
			)
		).toBeTrue()
		expect(
			ts.isStringLiteral(
				(
					type.typeArguments as unknown as [
						LiteralTypeNode,
						LiteralTypeNode
					]
				)[1].literal
			)
		).toBeTrue()
		expect(
			((
				type.typeArguments as unknown as [
					LiteralTypeNode,
					LiteralTypeNode
				]
			)[0].literal as StringLiteral).text
		).toEqual('bar');
		expect(
			((
				type.typeArguments as unknown as [
					LiteralTypeNode,
					LiteralTypeNode
				]
			)[1].literal as StringLiteral).text
		).toEqual('baz');
	});
});
