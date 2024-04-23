import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	compile,
	esmify,
} from '../../lib/AjvUtilities';

void describe('AjvUtilities', () => {
	void describe('compile', () => {
		const ajv = new Ajv();
		const data_sets:(
			| [unknown, {[key: string]: unknown}]
			| [SchemaObject, true, [unknown, boolean][]]
		)[] = [
			[{type: 'string'}, true, [
				[1, false],
				['1', true],
			]],
			[{type: 'string'}, true, [ // duplicated for caching branches
				[1, false],
				['1', true],
			]],
			[null, {
				message: 'Failed to compile schema',
			}],
		];

		for (const data_set of data_sets) {
			const [schema, expectation, trigger_cache] = data_set;

			void it(
				`compile(ajv:Ajv, ${
					JSON.stringify(schema)
				}) ${
					true === expectation
						? 'behaves'
						: 'throws'
				}`,
				() => {
					const get_result = () => compile(
						ajv,
						schema as SchemaObject
					);

					if (true === expectation) {
						assert.doesNotThrow(get_result);

						for (const test_to_trigger_cache of trigger_cache) {
							const [
								input,
								input_expectation,
							] = test_to_trigger_cache;
							assert.strictEqual(
								!!get_result()(input),
								input_expectation
							);
						}
					} else {
						assert.throws(
							get_result,
							expectation
						);
					}
				}
			);
		}
	})

	void describe('esmify', () => {
		const data_sets:[string, string][] = [
			['', ''],
			[
				'require("ajv/dist/runtime/equal").default',
				// no import because there's no "use strict;" header
				'fast_deep_equal',
			],
			[
				'"use strict";',
				// nothing to modify
				'"use strict";',
			],
			[
				'"use strict";require("ajv/dist/runtime/equal").default',
				[
					'"use strict";',
					'import fast_deep_equal from \'fast-deep-equal\';',
					'fast_deep_equal',
				].join(''),
			],
		];

		for (const data_set of data_sets) {
			const [input, expectation] = data_set;

			void it(
				`esmify(${
					JSON.stringify(input)
				}) returns ${
					JSON.stringify(expectation)
				}`,
				() => {
					assert.equal(
						esmify(input),
						expectation
					)
				}
			)
		}
	});
})
