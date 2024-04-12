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

void describe('TypedStringConverter', async () => {
	const instance = new TypedStringConverter(
		new DataDiscovery(docs),
		(await docs.schema()).definitions,
	);
	const object_schema = {type: 'string', minLength: 1, typed_string: {
		required: ['foo'],
		properties: {
			foo: {type: 'string', const: 'bar'},
		},
	}};
	const array_schema = {type: 'string', minLength: 1, typed_string: {
		minItems: 1,
		items: {type: 'string', const: 'bar'},
	}};
	/**
	 * @todo add cases where raw_data is valid but doesn't match shape
	 */
	const can_convert_args:[
		SchemaObject, // schema
		unknown, // raw_data
		boolean, // passes can_convert_schema
		boolean, // passes can_convert_schema_and_raw_data
	][] = [
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
		],
		[
			object_schema,
			'(foo="bar")',
			true,
			true,
		],
		[
			object_schema,
			'(foo=bar   )',
			true,
			true,
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
		],
		[
			array_schema,
			'("bar")',
			true,
			true,
		],
		[
			array_schema,
			'(bar    )',
			true,
			true,
		],
		[
			array_schema,
			'(bar, bar,"bar"    ,bar)',
			true,
			true,
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
				assert.equal(await promise, true);
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
})
