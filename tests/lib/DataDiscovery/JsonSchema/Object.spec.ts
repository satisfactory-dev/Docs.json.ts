import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	ObjectConverter,
	schema_type,
} from '../../../../lib/DataDiscovery/JsonSchema/Object';
import {
	docs,
} from '../../../../lib/helpers';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import {
	local_ref,
} from '../../../../lib/StringStartsWith';
import {
	rejects_partial_match,
} from '@satisfactory-clips-archive/custom-assert/assert/CustomAssert';

void describe('ObjectConverter', () => {
	const instance = new ObjectConverter(new DataDiscovery(docs));

	void describe('can_convert_schema_and_raw_data', () => {
		const schema = {
			type: 'object',
			$ref: local_ref('class--no-description-or-display-name'),
			unevaluatedProperties: false,
			properties: {
				foo: {type: 'string'},
			},
		};

		assert.equal(
			instance.can_convert_schema(schema),
			true,
			'schema not valid'
		);

		void it ('resolves false', async () => {
			assert.equal(
				await instance.can_convert_schema_and_raw_data(
					{type: 'string'},
					null
				),
				false,
				'Should not be able to convert string schema with null'
			);

			assert.equal(
				await instance.can_convert_schema_and_raw_data(
					schema,
					null
				),
				false,
				'Should not be able to convert schema with null value'
			);
		});

		void it('resolves true', async () => {
			assert.equal(
				await instance.can_convert_schema_and_raw_data(
					schema,
					{
						ClassName: 'foo',
						foo: 'bar',
					},
				),
				true,
				'Should be able to convert valid schema'
			);
		})
	})

	void describe ('check converters', () => {
		const test_schema:schema_type = {
			type: 'object',
			$ref: local_ref('class--no-description-or-display-name'),
		};

		const check_converters:[
			schema_type,
			{[key: string]: unknown},
			{[key: string]: unknown}?,
		][] = [
			[
				test_schema,
				{ClassName: 'foo'},
			],
			[
				test_schema,
				{ClassName: 'foo', foo: 'bar'},
				{
					property: {
						missing_keys: ['foo'],
						schema: test_schema,
						raw_data: {ClassName: 'foo', foo: 'bar'},
					},
				},
			],
		];

		void it ('behaves', async () => {
			for (const entry of check_converters) {
				const [schema, raw_data, failure] = entry;

				const promise = instance.check_converters(schema, raw_data);

				if (failure) {
					await rejects_partial_match(
						promise,
						failure
					);
				} else {
					await assert.doesNotReject(promise);
				}
			}
		})
	})
});
