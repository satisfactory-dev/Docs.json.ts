import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';
import {
	ExpressionResult,
	RawGenerationResult,
} from '../../../lib/DataDiscovery/Generator';
import * as TypeScriptAssert from '../../../assert/TypeScriptAssert';
import {
	array_has_size,
	rejects_partial_match,
	value_matches_ExpressionResult,
} from '../../../assert/CustomAssert';
import {
	Literal,
} from '../../../lib/DataDiscovery/Literal';

void describe('Literal.object_literal', () => {
	const instance = new Literal();

	void it('handles empty objects', async () => {
		const foo = await instance.object_literal({});

		TypeScriptAssert.isObjectLiteralExpression(foo);
		array_has_size(foo.properties, 0);
	});

	void it('converts objects with non-number properties', async () => {
		const foo = await instance.object_literal({'foo': 'bar'});

		TypeScriptAssert.isObjectLiteralExpression(foo);
		array_has_size(foo.properties, 1);

		const [property] = foo.properties;

		TypeScriptAssert.isPropertyAssignment(property);
		TypeScriptAssert.isIdentifier(property.name);
		assert.equal(property.name.escapedText, 'foo');
		TypeScriptAssert.isStringLiteral(property.initializer);
		assert.equal(property.initializer.text, 'bar');
	});

	void it('doesn\'t convert numbers', async () => {
		const random = Math.random();
		await rejects_partial_match(
			instance.object_literal({foo: random}),
			{
				message: 'Failed to convert property value!',
				property: {
					error: {
						message: 'not an array!',
					},
					original_value: random,
					property: 'foo',
				},
			}
		);
	});
});

void describe('Literal.value_literal', () => {
	const instance = new Literal();

	void it('converts strings to StringLiteral', async () => {
		const value = await instance.value_literal('foo');

		TypeScriptAssert.isStringLiteral(value);
		assert.equal(value.text, 'foo');
	});

	void it('leaves ExpressionResult alone', async () => {
		const expression_result = new ExpressionResult(
			ts.factory.createIdentifier('foo')
		);

		const value = await instance.value_literal(
			expression_result
		);

		value_matches_ExpressionResult(value, expression_result);
	});

	void it('converts booleans', async () => {
		const true_value = await instance.value_literal(true);
		const false_value = await instance.value_literal(false);

		TypeScriptAssert.isBooleanLiteral(true_value, true);
		TypeScriptAssert.isBooleanLiteral(false_value, false);
	});

	void it('converts undefined', async () => {
		const value = await instance.value_literal(undefined);

		TypeScriptAssert.isIdentifier(value);
		assert.equal(value.escapedText, 'undefined');
	});

	void it('converts arrays', async () => {
		const value = await instance.value_literal(['foo']);

		TypeScriptAssert.isArrayLiteralExpression(value);
		array_has_size(value.elements, 1);
		TypeScriptAssert.isStringLiteral(value.elements[0]);
		assert.equal(value.elements[0].text, 'foo');
	});

	void it('converts objects', async () => {
		const foo = await instance.value_literal({});

		TypeScriptAssert.isObjectLiteralExpression(foo);
		array_has_size(foo.properties, 0);

		const bar = await instance.value_literal({'foo': 'bar'});

		TypeScriptAssert.isObjectLiteralExpression(bar);
		array_has_size(bar.properties, 1);
	});

	void it('doesn\'t convert numbers', async () => {
		await rejects_partial_match(
			instance.value_literal(1),
			{
				property: 1,
				message: 'not an array!',
			}
		);
	});

	void it('resolves GenerationResult', async () => {
		const string_value = await instance.value_literal(
			new RawGenerationResult('foo')
		);

		TypeScriptAssert.isStringLiteral(string_value);
		assert.equal(string_value.text, 'foo');

		await rejects_partial_match(
			instance.value_literal(
				new RawGenerationResult(2)
			),
			{
				property: 2,
				message: 'not an array!',
			}
		);
	});
});
