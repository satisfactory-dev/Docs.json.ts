import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	unbound_array as unbound_array_schema_type,
	UnboundArray,
} from '../../../../lib/DataDiscovery/JsonSchema/Array';
import {
	docs,
} from '../../../../lib/helpers';
import {
	is_instanceof,
} from '../../../../assert/CustomAssert';
import {
	RawGenerationResult,
} from '../../../../lib/DataDiscovery/Generator';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';

void describe('UnboundArray', () => {
	const unbound_array = new UnboundArray(
		new DataDiscovery(docs)
	);

	void it('matches only against array schema with no maxItems', async () => {
		assert.equal(
			await unbound_array.matches({
				type: 'string',
			}),
			undefined,
			'unspecified string'
		);

		assert.equal(
			await unbound_array.matches({
				type: 'array',
				minItems: 1,
				maxItems: 1,
				items: {type: 'object'},
			}),
			undefined,
			'maxItems present'
		);

		const promise = unbound_array.matches({
			type: 'array',
			minItems: 1,
			items: {type: 'object'},
		});

		await assert.doesNotReject(promise, 'failed to match example schema');

		const value = await promise;

		is_instanceof(
			value,
			RawGenerationResult,
			'value not instanceof a RawGeneratorResult'
		);
		assert.equal(
			await value.result(),
			unbound_array,
			'result not the UnboundArray instance we started with'
		);
	});

	const schemas:unbound_array_schema_type[] = [
		{
			type: 'array',
			minItems: 1,
			items: {
				type: 'array',
				minItems: 1,
				items: {type: 'object'},
			},
		},
		{
			type: 'array',
			minItems: 1,
			items: {
				type: 'object',
				$ref: '#/definitions/decimal-string',
				unevaluatedProperties: false,
			},
		},
	];

	void it('resolved to input array', async () => {
		for (const schema of schemas) {
			const empty_array: unknown[] = [];
			const non_empty_array = [1];
			const object_array = [{foo: 'bar'}];
			const array_array = [[{foo: 'bar'}]];

			assert.deepEqual(
				await Promise.all((await unbound_array.convert_array(
					schema,
					empty_array
				))),
				empty_array
			);

			assert.deepEqual(
				await Promise.all((await unbound_array.convert_array(
					schema,
					non_empty_array
				)).map(e => e.result())),
				non_empty_array
			);

			assert.deepEqual(
				await Promise.all((await unbound_array.convert_array(
					schema,
					object_array
				)).map(e => e.result())),
				object_array
			);

			assert.deepEqual(
				await Promise.all((await unbound_array.convert_array(
					schema,
					array_array
				)).map(e => e.result())),
				array_array
			);
		}
	});
});
