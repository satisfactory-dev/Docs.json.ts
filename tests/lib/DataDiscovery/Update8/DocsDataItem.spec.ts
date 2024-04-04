import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	Generator,
} from '../../../../lib/DataDiscovery/Update8/DocsDataItem';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import {
	docs,
	skip_because_docs_dot_json_not_yet_bundled,
} from '../../../../lib/helpers';
import {
	is_instanceof,
} from '../../../../assert/CustomAssert';
import {
	RawGenerationResult,
} from '../../../../lib/DataDiscovery/Generator';

void describe('Generator', () => {
	const instance = new Generator(
		new DataDiscovery(docs)
	);

	void it('resolves non-matching values to undefined', async () => {
		assert.equal(
			await instance.matches('foo'),
			undefined
		);
	});

	void it(
		'resolves matching values to RawGenerationResult',
		skip_because_docs_dot_json_not_yet_bundled,
		async () => {
			const [{NativeClass, Classes: [example]}] = await docs.get();

			const truncated_example = {
				NativeClass,
				Classes: [
					example,
				],
			};

			const value = await instance.matches(truncated_example);
			is_instanceof(value, RawGenerationResult);

			const result = await value?.result();
			assert.deepEqual(
				Object.keys(result.Classes[0]),
				Object.keys(example)
			);
		}
	)
});
