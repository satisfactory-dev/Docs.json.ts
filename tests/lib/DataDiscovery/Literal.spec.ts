import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';
import {
	ExpressionResult,
} from '../../../lib/DataDiscovery/Generator';
import {
	array_has_size,
	rejects_partial_match,
} from '@satisfactory-clips-archive/custom-assert/assert/CustomAssert';
import {
	value_matches_ExpressionResult,
} from '../../../assert/CustomAssert';
import {
	Literal,
} from '../../../lib/DataDiscovery/Literal';
import ts_assert from '@signpostmarv/ts-assert';

void describe('Literal.object_literal', () => {
	const instance = new Literal();

	void it('handles empty objects', async () => {
		const foo = await instance.object_literal({});

		ts_assert.isObjectLiteralExpression(foo);
		array_has_size(foo.properties, 0);
	});

	void it('converts objects with non-number properties', async () => {
		const foo = await instance.object_literal({'foo': 'bar'});

		ts_assert.isObjectLiteralExpression(foo);
		array_has_size(foo.properties, 1);

		const [property] = foo.properties;

		ts_assert.isPropertyAssignment(property);
		ts_assert.isExpectedIdentifier(property.name, 'foo');
		ts_assert.isStringLiteral(property.initializer);
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

		ts_assert.isStringLiteral(value);
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

		ts_assert.isBooleanLiteral(true_value, true);
		ts_assert.isBooleanLiteral(false_value, false);
	});

	void it('converts undefined', async () => {
		const value = await instance.value_literal(undefined);

		ts_assert.isUndefined(value);
	});

	void it('converts arrays', async () => {
		const value = await instance.value_literal(['foo']);

		ts_assert.isArrayLiteralExpression(value);
		array_has_size(value.elements, 1);
		ts_assert.isStringLiteral(value.elements[0]);
		assert.equal(value.elements[0].text, 'foo');
	});

	void it('converts objects', async () => {
		const foo = await instance.value_literal({});

		ts_assert.isObjectLiteralExpression(foo);
		array_has_size(foo.properties, 0);

		const bar = await instance.value_literal({'foo': 'bar'});

		ts_assert.isObjectLiteralExpression(bar);
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
});
