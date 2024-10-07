import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';

import {
	object_keys,
} from '@satisfactory-dev/predicates.ts';

import {
	ValueToRegexFormatter,
} from '../../../lib/CustomParsingTypes/ValueToRegexFormatter';
import {
	docs,
} from '../../../lib/helpers';
// eslint-disable-next-line max-len
import common_schema from '../../../schema/common.schema.json' with {type: 'json'};

for (const version of object_keys(docs.docs_versions)) {
	void describe(`${version}: ValueToRegexFormatter.pattern_from_value()`, async () => {
		const instance = new ValueToRegexFormatter(
			(await docs.schema(version)).$defs,
			common_schema.$defs,
		);
		void it('does not throw', async () => {
			const typed_string_types = [
				'EditorCurveData',
				'color',
				'color-decimal',
			];

			for (const typed_string_type of typed_string_types) {
				const definition = await docs.definition(
					version,
					typed_string_type,
				);
				assert.doesNotThrow(
					() => instance.pattern_from_value(definition),
				)
			}
		});
	});
}
