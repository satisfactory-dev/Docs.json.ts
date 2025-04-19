import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';

import {
	SchemaObject,
} from 'ajv/dist/2020';

import {
	object_keys,
} from '@satisfactory-dev/predicates.ts';
import {
	not_undefined,
} from '@satisfactory-dev/custom-assert';

import {
	ValueToRegexFormatter,
} from '../../../lib/CustomParsingTypes/ValueToRegexFormatter';
import {
	docs,
} from '../../../lib/helpers';
// eslint-disable-next-line max-len
import common_schema from '../../../schema/common.schema.json' with {type: 'json'};
import {
	docs_versions,
} from '../../../lib/DocsTsGenerator';

const versions_to_test:(Exclude<keyof docs_versions, 'common'>)[] = [
	'update8',
	'version_1_1_0_1',
];

for (const version of versions_to_test) {
	void describe(`${version}: ValueToRegexFormatter.pattern_from_value()`, async () => {
		let schema:undefined|{$defs:{[key: string]: SchemaObject}};
		await assert.doesNotReject(
			() => {
				return docs.schema(version).then((res) => {
					schema = res;

					return schema;
				}).catch((err) => {
					console.error(err);

					throw err;
				});
			},
			`Failed to obtain schema for ${version}`,
		);
		not_undefined(schema, 'schema was undefined but did not throw');

		const instance = new ValueToRegexFormatter(
			schema.$defs,
			common_schema.$defs,
		);
		void it('does not throw', async () => {
			const typed_string_types = [
				'common-base--EditorCurveData',
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
					`ValueToRegexFormatter.pattern_from_value() threw with ${typed_string_type} against ${version}`,
				)
			}
		});
	});
}
