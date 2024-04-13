import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	ObjectConverter,
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
});
