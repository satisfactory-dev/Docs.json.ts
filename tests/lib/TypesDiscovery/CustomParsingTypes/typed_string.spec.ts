import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	typed_string,
} from '../../../../lib/TypesDiscovery/CustomParsingTypes/typed_string';
import {
	SchemaObject,
} from 'ajv';

void describe('typed_string', () => {
	const instance = new typed_string({});
	void describe('discovery_candidates', () => {
		const behaves:[SchemaObject, string[]][] = [
			[{}, []],
			[
				{
					definitions: {
						foo: {type: 'string', const: 'foo'},
					},
				},
				[],
			],
			[
				{
					definitions: {
						foo: {type: 'string', minLength: 1},
					},
				},
				[],
			],
			[
				{
					definitions: {
						foo: {
							type: 'string',
							minLength: 1,
							typed_string: true,
						},
					},
				},
				[],
			],
			[
				{
					definitions: {
						foo: {
							type: 'string',
							minLength: 1,
							typed_string: {
								type: 'object',
							},
						},
					},
				},
				[],
			],
			[
				{
					definitions: {
						foo: {
							type: 'string',
							minLength: 1,
							typed_string: {
								properties: {
									foo: {type: 'string', const: 'foo'},
								},
							},
						},
					},
				},
				[],
			],
			[
				{
					definitions: {
						foo: {
							type: 'string',
							minLength: 1,
							typed_string: {
								required: ['foo'],
								properties: {
									foo: {type: 'string', const: 'foo'},
								},
							},
						},
					},
				},
				['#/definitions/foo'],
			],
			[
				{
					definitions: {
						foo: {
							type: 'string',
							minLength: 1,
							typed_string: {
								items: false,
								prefixItems: [{}],
							},
						},
					},
				},
				[],
			],
			[
				{
					definitions: {
						foo: {
							type: 'string',
							minLength: 1,
							typed_string: {
								items: false,
								minItems: 1,
								prefixItems: [{}],
							},
						},
					},
				},
				['#/definitions/foo'],
			],
			[
				{
					definitions: {
						foo: {
							type: 'string',
							minLength: 1,
							typed_string: {
								items: false,
								minItems: 1,
								maxItems: 1,
								prefixItems: [{}],
							},
						},
					},
				},
				['#/definitions/foo'],
			],
		];

		for (const entry of behaves) {
			const [schema, expectation] = entry;

			void it(`behaves with ${JSON.stringify(schema)}`, () => {
				const set = new Set<string>();

				const result = instance.discovery_candidates(schema, set);

				assert.equal(result, undefined);
				assert.deepEqual([...set.values()], expectation);
			})
		}
	})
})
