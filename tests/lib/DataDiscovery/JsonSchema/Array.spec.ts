import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	ArrayConverter,
} from '../../../../lib/DataDiscovery/JsonSchema/Array';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import {
	update8,
} from '../../../../lib/helpers';

/**
 * @todo add full coverage on ArrayConverter
 */
void describe('ArrayConverter.can_convert_schema_and_raw_data()', () => {
	const instance = new ArrayConverter(new DataDiscovery(update8));

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
		)
	});
});
