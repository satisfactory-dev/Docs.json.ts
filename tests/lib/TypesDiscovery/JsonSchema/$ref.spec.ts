import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	$ref,
} from '../../../../lib/TypesDiscovery/JsonSchema/$ref';

/**
 * @todo add full coverage in this test rather than relying on others
 */
void describe('$ref', () => {
	void describe ('discovery_candidates', () => {
		void it('behaves with default + empty schema', () => {
			const instance = new $ref({});
			const set = new Set<string>();
			const result = instance.discovery_candidates({}, set);
			assert.deepEqual([...set.values()], []);
			assert.equal(result, undefined);
		})
	})
})
