import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	StringStartsWithConverter,
} from '../../../../lib/DataDiscovery/CustomTypes/StringStartsWith';
import {
	docs,
} from '../../../../lib/helpers';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import ts_assert from '@signpostmarv/ts-assert';
import {
	array_has_size, not_undefined,
} from '@satisfactory-clips-archive/custom-assert';

void describe('StringStartsWithConverter', () => {
	const instance = new StringStartsWithConverter(docs.ajv);

	void describe('can_convert_schema_and_raw_data', () => {
		void it('resolves true', async () => {
			const promise = instance.can_convert_schema_and_raw_data(
				{
					type: 'string',
					string_starts_with: 'foo',
				},
				'foobar',
			);

			await assert.doesNotReject(promise);
			assert.equal(await promise, true);
		})

		void it('resolves false', async () => {
			const promises_args:[SchemaObject, unknown][] = [
				[
					{
						type: 'string',
						string_starts_with: 'foo',
					},
					'barfoo',
				],
				[
					{
						type: 'string',
					},
					'foobar',
				],
				[
					{
						type: 'string',
						string_starts_with: 'foo',
					},
					null,
				],
			];

			for (const args of promises_args) {
				const [schema, raw_data] = args;
				const promise = instance.can_convert_schema_and_raw_data(
					schema,
					raw_data,
				);
				await assert.doesNotReject(promise);
				assert.equal(await promise, false);
			}
		})
	})

	void describe('convert', () => {
		void it('behaves', async() => {
			const promise = instance.convert(
				{
					type: 'string',
					string_starts_with: 'foo',
				},
				'foobar',
			);

			await assert.doesNotReject(promise);

			const {expression} = await promise;

			ts_assert.isAsExpression(expression);
			ts_assert.isStringLiteral(expression.expression);
			assert.equal(expression.expression.text, 'foobar');
			ts_assert.isTypeReferenceNode(expression.type);
			ts_assert.isExpectedIdentifier(
				expression.type.typeName,
				'StringStartsWith'
			);
			not_undefined(expression.type.typeArguments);
			array_has_size(expression.type.typeArguments, 1);
			ts_assert.isLiteralTypeNode(expression.type.typeArguments[0]);
			ts_assert.isStringLiteral(
				expression.type.typeArguments[0].literal
			);
			assert.equal(
				expression.type.typeArguments[0].literal.text,
				'foo'
			);
		})
	})
})
