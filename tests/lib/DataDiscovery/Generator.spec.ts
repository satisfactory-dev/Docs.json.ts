import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	Converter,
} from '../../../lib/DataDiscovery/Generator';
import {
	DataDiscovery,
} from '../../../lib/DataDiscovery';
import {
	docs,
} from '../../../lib/helpers';
import {
	is_instanceof,
	not_undefined,
	rejects_partial_match,
} from '../../../assert/CustomAssert';
import {
	BasicStringConverter,
} from '../../../lib/DataDiscovery/JsonSchema/StringType';

void describe('Converter', async () => {
	const candidates = await ((new DataDiscovery(docs)).candidates);

	void it ('returns a converter', async () => {
		not_undefined(
			Converter.has_matching_schema(
				candidates,
				{type: 'string'}
			)
		);
		await assert.doesNotReject(
			Converter.find_matching_schema(
				candidates,
				{type: 'string'}
			)
		);
		not_undefined(
			await Converter.has_matching_schema_and_raw_data(
				candidates,
				{type: 'string'},
				''
			)
		);

		const promise = Converter.find_matching_schema(
			candidates,
			{type: 'string'}
		);

		await assert.doesNotReject(promise);

		is_instanceof(await promise, BasicStringConverter);
	});
	void it ('returns undefined', async () => {
		assert.equal(
			Converter.has_matching_schema(candidates, {type: 'boolean'}),
			undefined
		);
		await rejects_partial_match(
			Converter.find_matching_schema(candidates, {type: 'boolean'}),
			{
				property: {
					schema: {type: 'boolean'},
				},
				message: 'Could not identify suitable candidate!',
			}
		);
		assert.equal(
			await Converter.has_matching_schema_and_raw_data(
				candidates,
				{type: 'string'},
				null
			),
			undefined
		);
	});
});
