import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	ConstStringConverter,
} from '../../../../lib/DataDiscovery/JsonSchema/StringType';
import {
	docs,
} from '../../../../lib/helpers';
import {
	isStringLiteral,
} from '../../../../assert/TypeScriptAssert';
import {
	rejects_partial_match,
} from '../../../../assert/CustomAssert';

void describe('ConstStringConverter', () => {
	const instance = new ConstStringConverter(docs.ajv);

	void describe('can_convert_schema', () => {
		void it('returns true', () => {
			assert.equal(
				instance.can_convert_schema({
					type: 'string',
					const: 'Foo',
				}),
				true,
			);
		});
		void it('returns false', () => {
			assert.equal(
				instance.can_convert_schema({type: 'string'}),
				false
			);
			assert.equal(
				instance.can_convert_schema({
					type: 'boolean',
					const: true,
				}),
				false
			);
		});
	});

	void describe('can_convert_schema_and_raw_data', () => {
		void it('resolves true', async () => {
			const promise = instance.can_convert_schema_and_raw_data(
				{
					type: 'string',
					const: 'Foo',
				},
				'Foo',
			);

			await assert.doesNotReject(promise);

			assert.equal(await promise, true);
		});
		void it('resolves false', async () => {
			const promise = instance.can_convert_schema_and_raw_data(
				{
					type: 'string',
					const: 'Foo',
				},
				'Bar',
			);

			await assert.doesNotReject(promise);

			assert.equal(await promise, false);
		});
	});

	void describe('convert', () => {
		void it('succeeds', async () => {
			const promise = instance.convert(
				{
					type: 'string',
					const: 'Foo',
				},
				'Foo',
			);

			await assert.doesNotReject(promise);

			const result = (await promise).expression;

			isStringLiteral(result);
			assert.equal(result.text, 'Foo');
		});

		void it ('fails', async () => {
			await rejects_partial_match(
				instance.convert(
					{
						type: 'string',
						const: 'Foo',
					},
					'Bar',
				),
				{
					property: {
						schema: {
							type: 'string',
							const: 'Foo',
						},
						raw_data: 'Bar',
					},
					message: 'Raw data probably did not pass check!',
				},
			);
			await rejects_partial_match(
				instance.convert(
					{
						type: 'string',
						const: 'Foo',
					},
					'',
				),
				{
					property: {
						schema: {
							type: 'string',
							const: 'Foo',
						},
						raw_data: '',
					},
					message: 'Raw data probably did not pass check!',
				},
			);
		});
	});
});
