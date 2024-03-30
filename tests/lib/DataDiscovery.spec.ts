import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	DataDiscovery,
} from '../../lib/DataDiscovery';
import ts from 'typescript';
import {
	ExpressionResult, RawGenerationResult,
} from '../../lib/DataDiscovery/Generator';
import * as TypeScriptAssert from '../../assert/TypeScriptAssert';
import {
	array_has_size,
	value_matches_ExpressionResult,
} from '../../assert/CustomAssert';

void describe('DataDiscovery.object_literal', () => {
	void it('handles empty objects', async () => {
		const foo = await DataDiscovery.object_literal({});

		TypeScriptAssert.isObjectLiteralExpression(foo);
		array_has_size(foo.properties, 0);
	});

	void it('converts objects with non-number properties', async () => {
		const foo = await DataDiscovery.object_literal({'foo': 'bar'});

		TypeScriptAssert.isObjectLiteralExpression(foo);
		array_has_size(foo.properties, 1);
		TypeScriptAssert.isPropertyAssignment(foo.properties[0]);
		TypeScriptAssert.isIdentifier(foo.properties[0].name);
		TypeScriptAssert.isStringLiteral(foo.properties[0].initializer);
		assert.equal(foo.properties[0].name.text, 'foo');
		assert.equal(foo.properties[0].initializer.text, 'bar');
	});

	void it('doesn\'t convert numbers', async () => {
		const random = Math.random();
		await assert.rejects(
			DataDiscovery.object_literal({foo: random}),
			{
				property: random,
				message: 'not an array!',
			}
		);
	});
});

void describe('DataDiscovery.value_literal', () => {
	void it('converts strings to StringLiteral', async () => {
		const value = await DataDiscovery.value_literal('foo');

		TypeScriptAssert.isStringLiteral(value);
		assert.equal(value.text, 'foo');
	});

	void it('leaves ExpressionResult alone', async () => {
		const expression_result = new ExpressionResult(
			ts.factory.createIdentifier('foo')
		);

		const value = await DataDiscovery.value_literal(
			expression_result
		);

		value_matches_ExpressionResult(value, expression_result);
	});

	void it('converts booleans', async () => {
		const true_value = await DataDiscovery.value_literal(true);
		const false_value = await DataDiscovery.value_literal(false);

		TypeScriptAssert.isBooleanLiteral(true_value, true);
		TypeScriptAssert.isBooleanLiteral(false_value, false);
	});

	void it('converts undefined', async () => {
		const value = await DataDiscovery.value_literal(undefined);

		TypeScriptAssert.isIdentifier(value);
		assert.equal(value.escapedText, 'undefined');
	});

	void it('converts arrays', async () => {
		const value = await DataDiscovery.value_literal(['foo']);

		TypeScriptAssert.isArrayLiteralExpression(value);
		array_has_size(value.elements, 1);
		TypeScriptAssert.isStringLiteral(value.elements[0]);
		assert.equal(value.elements[0].text, 'foo');
	});

	void it('converts objects', async () => {
		const foo = await DataDiscovery.value_literal({});

		TypeScriptAssert.isObjectLiteralExpression(foo);
		array_has_size(foo.properties, 0);

		const bar = await DataDiscovery.value_literal({'foo': 'bar'});

		TypeScriptAssert.isObjectLiteralExpression(bar);
		array_has_size(bar.properties, 1);
	});

	void it('doesn\'t convert numbers', async () => {
		await assert.rejects(
			DataDiscovery.value_literal(1),
			{
				property: 1,
				message: 'not an array!',
			}
		);
	});

	void it('resolves GenerationResult', async () => {
		const string_value = await DataDiscovery.value_literal(
			new RawGenerationResult('foo')
		);

		TypeScriptAssert.isStringLiteral(string_value);
		assert.equal(string_value.text, 'foo');

		await assert.rejects(
			DataDiscovery.value_literal(
				new RawGenerationResult(2)
			),
			{
				property: 2,
				message: 'not an array!',
			}
		);
	});
});