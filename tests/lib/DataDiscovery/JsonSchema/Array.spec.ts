import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	ArrayConverter,
} from '../../../../lib/DataDiscovery/JsonSchema/Array.ts';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery.ts';
import {
	docs,
} from '../../../../lib/helpers.ts';

/**
 * @todo add full coverage on ArrayConverter
 */
void describe('ArrayConverter.can_convert_schema_and_raw_data()', () => {
	const instance = new ArrayConverter(new DataDiscovery(docs, 'update8'));

	void it('resolves false', async () => {
		assert.equal(
			await instance.can_convert_schema_and_raw_data(
				{type: 'string'},
				null,
			),
			false,
		);
	});

	void it('resolves true', async () => {
		assert.equal(
			await instance.can_convert_schema_and_raw_data(
				{
					type: 'array',
					minItems: 1,
					items: {type: 'string'},
				},
				[''],
			),
			true,
		);
	});
});
