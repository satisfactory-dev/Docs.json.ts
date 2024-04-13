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
import {
	SchemaObject,
} from 'ajv';

void describe('Converter', async () => {
	const candidates = await ((new DataDiscovery(docs)).candidates);
	const expected_converters:[
		SchemaObject,
		typeof BasicStringConverter
	][] = [
		[
			{type: 'string'},
			BasicStringConverter,
		],
	];

	void it ('returns an expected converter', async () => {
		for (const entry of expected_converters) {
			const [schema, expected] = entry;

			not_undefined(
				Converter.has_matching_schema(
					candidates,
					schema
				)
			);
			await assert.doesNotReject(
				Converter.find_matching_schema(
					candidates,
					schema
				)
			);

			const promise = Converter.find_matching_schema(
				candidates,
				schema
			);

			await assert.doesNotReject(promise);
			is_instanceof(await promise, expected);
		}

		not_undefined(
			await Converter.has_matching_schema_and_raw_data(
				candidates,
				{type: 'string'},
				''
			)
		);
	});
	void it('fails', async() => {
		await rejects_partial_match(
			Converter.find_matching_schema(candidates, {type: 'boolean'}),
			{
				property: {
					schema: {type: 'boolean'},
				},
				message: 'Could not identify suitable candidate!',
			}
		);
	});
	void it ('returns undefined', async () => {
		assert.equal(
			Converter.has_matching_schema(candidates, {type: 'boolean'}),
			undefined
		);
		const promise = Converter.has_matching_schema_and_raw_data(
			candidates,
			{type: 'string'},
			null
		);
		await assert.doesNotReject(
			promise,
			'Converter.has_matching_schema_and_raw_data should not throw!'
		);
		assert.equal(
			await promise,
			undefined
		);
	});
});
