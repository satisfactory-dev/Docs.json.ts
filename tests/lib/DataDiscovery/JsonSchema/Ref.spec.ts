import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import {
	Ref,
} from '../../../../lib/DataDiscovery/JsonSchema/Ref';
import {
	docs,
} from '../../../../lib/helpers';
import {
	local_ref,
} from '../../../../lib/StringStartsWith';
import {
	is_instanceof,
	not_undefined,
} from '../../../../assert/CustomAssert';
import {
	ConstStringConverter,
} from '../../../../lib/DataDiscovery/JsonSchema/StringType';

void describe('Ref.can_convert_schema_and_raw_data()', () => {
	const instance = new Ref(new DataDiscovery(docs));

	void it ('resolves true', async() => {
		const promise = instance.can_convert_schema_and_raw_data(
			{
				$ref: local_ref('None'),
			},
			'None'
		);

		await assert.doesNotReject(promise);

		assert.equal(
			await promise,
			true
		);
	});

	void it ('resolves false', async() => {
		const promise = instance.can_convert_schema_and_raw_data(
			{
				$ref: local_ref('None'),
			},
			null
		);

		await assert.doesNotReject(promise);

		assert.equal(
			await promise,
			false
		);
	});
});

void describe('Ref.resolve_to_final_converter_schema_only()', () => {
	const instance = new Ref(new DataDiscovery(docs));

	void it ('resolves to ConstStringConverter', async() => {
		const promise = instance.resolve_to_final_converter_schema_only({
			$ref: local_ref('None'),
		});

		await assert.doesNotReject(promise);

		not_undefined(await promise);

		const [
			schema,
			converter,
		] = await promise;

		assert.deepEqual(
			schema,
			{
				type: 'string',
				const: 'None',
			},
		);

		is_instanceof(converter, ConstStringConverter);
	});
});
