import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	TypedStringConverter,
} from '../../../../lib/DataDiscovery/CustomTypes/TypedString';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import {
	docs,
} from '../../../../lib/helpers';
import {
	SchemaObject,
} from 'ajv';
import {
	typed_string_parent_type,
} from '../../../../lib/CustomParsingTypes/TypedString';
import {
	is_string,
} from '../../../../lib/StringStartsWith';

void describe('TypedStringConverter', async () => {
	const discovery = new DataDiscovery(docs);
	const instance = new TypedStringConverter(
		discovery,
		(await docs.schema()).definitions,
	);
	const object_schema:typed_string_parent_type = {
		type: 'string',
		minLength: 1,
		typed_string: {
			required: ['foo'],
			properties: {
				foo: {type: 'string', const: 'bar'},
			},
		},
	};
	const object_pattern_schema:typed_string_parent_type = {
		type: 'string',
		minLength: 1,
		typed_string: {
			minProperties: 1,
			patternProperties: {
				'^(Foo|Bar)$': {type: 'string', const: 'foo'},
			},
		},
	};
	const nested_object_schema:typed_string_parent_type = {
		type: 'string',
		minLength: 1,
		typed_string: {
			required: ['foo'],
			properties: {
				foo: {
					type: 'string',
					minLength: 1,
					typed_string: {
						required: ['bar'],
						properties: {
							bar: {type: 'string', const: 'baz'},
						},
					},
				},
			},
		},
	};
	const array_schema:typed_string_parent_type = {
		type: 'string',
		minLength: 1,
		typed_string: {
			minItems: 1,
			items: {type: 'string', const: 'bar'},
		},
	};
	const prefix_schema:typed_string_parent_type = {
		type: 'string',
		minLength: 1,
		typed_string: {
			items: false,
			minItems: 1,
			prefixItems: [
				{type: 'string', const: 'bar'},
			],
		},
	};
	/**
	 * @todo add cases where raw_data is valid but doesn't match shape
	 */
	const can_convert_args:(
		| [
			SchemaObject, // schema
			unknown, // raw_data
			boolean, // passes can_convert_schema
			boolean, // passes can_convert_schema_and_raw_data
		]
		| [
			SchemaObject,
			unknown,
			boolean,
			boolean,
			unknown[]|{[key: string]: unknown}, // expected result
		]
	)[] = [
		[
			{type: 'string'},
			null,
			false,
			false,
		],
		[
			object_schema,
			null,
			true,
			false,
		],
		[
			object_schema,
			'(foo=bar)',
			true,
			true,
			{foo: 'bar'},
		],
		[
			object_schema,
			'(foo="bar")',
			true,
			true,
			{foo: 'bar'},
		],
		[
			array_schema,
			null,
			true,
			false,
		],
		[
			array_schema,
			'(bar)',
			true,
			true,
			['bar'],
		],
		[
			array_schema,
			'("bar")',
			true,
			true,
			['bar'],
		],
		[
			array_schema,
			'(bar, bar,"bar", bar)',
			true,
			true,
			['bar', 'bar', 'bar', 'bar'],
		],
		[
			prefix_schema,
			'((bar))',
			true,
			true,
			[['bar']],
		],
		[
			nested_object_schema,
			'(foo=(bar=baz))',
			true,
			true,
			{foo:{bar: 'baz'}},
		],
		[
			object_pattern_schema,
			'(Foo=foo)',
			true,
			true,
			{Foo:'foo'},
		],
	];

	void describe('can_convert_schema', () => {
		const passes:SchemaObject[] = [];
		const fails:SchemaObject[] = [];

		for (const entry of can_convert_args) {
			const [schema,,passes_or_fails] = entry;

			(passes_or_fails ? passes : fails).push(schema);
		}

		void it('passes', () => {
			for (const schema of passes) {
				assert.equal(instance.can_convert_schema(schema), true);
			}
		});

		void it('fails', () => {
			for (const schema of fails) {
				assert.equal(instance.can_convert_schema(schema), false);
			}
		});
	});

	void describe('can_convert_schema_and_raw_data', () => {
		const passes:[SchemaObject, unknown][] = [];
		const fails:[SchemaObject, unknown][] = [];

		for (const entry of can_convert_args) {
			const [schema, raw_data,, passes_or_fails] = entry;

			(passes_or_fails ? passes : fails).push([schema, raw_data]);
		}

		void it('passes', async () => {
			for (const entry of passes) {
				const [schema, raw_data] = entry;

				const promise = instance.can_convert_schema_and_raw_data(
					schema,
					raw_data
				);

				await assert.doesNotReject(promise);
				assert.equal(
					await promise,
					true,
					`failed to behave as expected with ${
						instance.constructor.name
					}.can_convert_schema_and_raw_data(${
						JSON.stringify(schema)
					}, ${
						JSON.stringify(raw_data)
					})`
				);
			}
		});

		void it('fails', async () => {
			for (const entry of fails) {
				const [schema, raw_data] = entry;

				const promise = instance.can_convert_schema_and_raw_data(
					schema,
					raw_data
				);

				await assert.doesNotReject(promise);
				assert.equal(await promise, false);
			}
		});
	});

	void describe('convert', () => {
		const passes:[
			typed_string_parent_type,
			string,
			unknown[]|{[key:string]: unknown},
		][] = [];
		const fails:[typed_string_parent_type, string][] = [
			[
				object_schema,
				'',
			],
			[
				array_schema,
				'',
			],
			[
				object_schema,
				'(foo)',
			],
			[
				object_schema,
				'(foo=baz)',
			],
			[
				nested_object_schema,
				'(foo=(bar=bar))',
			],
		];

		for (const entry of can_convert_args) {
			const [
				schema,
				raw_data,
				first_pass,
				second_pass,
				expecting,
			] = entry;

			if (!is_string(raw_data)) {
				continue;
			}

			if (undefined !== expecting && first_pass && second_pass) {
				passes.push([
					schema as typed_string_parent_type,
					raw_data,
					expecting,
				]);
			} else {
				fails.push([schema as typed_string_parent_type, raw_data]);
			}
		}

		void it('passes', async () => {
			for (const entry of passes) {
				const [schema, raw_data, expecting] = entry;
				const promise = instance.convert(schema, raw_data);

				try {
					await assert.doesNotReject(promise);
				} catch (err) {
					console.error(schema, raw_data);

					throw err;
				}
				assert.deepEqual(
					(await promise).expression,
					await discovery.literal.value_literal(expecting)
				);
			}
		});

		void it('fails', async () => {
			for (const entry of fails) {
				const [schema, raw_data] = entry;
				const promise = instance.convert(schema, raw_data);

				await assert.rejects(promise);
			}
		})
	})
})
