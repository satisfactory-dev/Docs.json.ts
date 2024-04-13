import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	Converter,
} from '../../../lib/DataDiscovery/Generator';
import {
	DataDiscovery,
} from '../../../lib/DataDiscovery';
import {
	docs,
} from '../../../lib/helpers';
import {
	array_has_size,
	is_instanceof,
	not_undefined,
	rejects_partial_match,
} from '../../../assert/CustomAssert';
import {
	BasicStringConverter,
	ConstStringConverter,
	EnumStringConverter,
	PatternConverter,
} from '../../../lib/DataDiscovery/JsonSchema/StringType';
import {
	SchemaObject,
} from 'ajv';
import {
	local_ref,
} from '../../../lib/StringStartsWith';
import {
	BooleanConverter,
} from '../../../lib/DataDiscovery/CustomTypes/BooleanOrBooleanExtended';
import {
	ArrayConverter,
} from '../../../lib/DataDiscovery/JsonSchema/Array';
import {
	UnrealEngineStringConverter,
} from '../../../lib/DataDiscovery/CustomTypes/UnrealEngineString';
import {
	ObjectConverter,
} from '../../../lib/DataDiscovery/JsonSchema/Object';
import {
	StringStartsWithConverter,
} from '../../../lib/DataDiscovery/CustomTypes/StringStartsWith';
import {
	TypedStringConverter,
} from '../../../lib/DataDiscovery/CustomTypes/TypedString';
import {
	Ref,
} from '../../../lib/DataDiscovery/JsonSchema/Ref';
import {
	OneOfConverter,
} from '../../../lib/DataDiscovery/JsonSchema/OneOf';

void describe('Converter', async () => {
	const candidates = await ((new DataDiscovery(docs)).candidates);
	const expected_converters:[
		SchemaObject,
		{
			[Symbol.hasInstance](instance:unknown): boolean;
		},
	][] = [
		[
			{type: 'string'},
			BasicStringConverter,
		],
		[
			{type: 'string', const: 'foo'},
			ConstStringConverter,
		],
		[
			{type: 'string', enum: ['foo']},
			EnumStringConverter,
		],
		[
			{type: 'string', pattern: '^foo'},
			PatternConverter ,
		],
		[
			{$ref: local_ref('boolean')},
			BooleanConverter,
		],
		[
			{$ref: local_ref('boolean-extended')},
			BooleanConverter,
		],
		[
			{type: 'array', minItems: 1, items: {type: 'string'}},
			ArrayConverter,
		],
		[
			{type: 'array', minItems: 0, items: {type: 'string'}},
			ArrayConverter,
		],
		[
			{type: 'string', minLength: 1, UnrealEngineString: true},
			UnrealEngineStringConverter,
		],
		[
			{
				type: 'object',
				$ref: local_ref('class--no-description-or-display-name'),
				required: ['foo'],
				unevaluatedProperties: false,
				properties: {
					foo: {type: 'string'},
				},
			},
			ObjectConverter,
		],
		[
			{type: 'string', string_starts_with: 'foo'},
			StringStartsWithConverter,
		],
		[
			{type: 'string', minLength: 1, typed_string: {
				required: ['foo'],
				properties: {
					foo: {type: 'string', const: 'bar'},
				},
			}},
			TypedStringConverter,
		],
		[
			{type: 'string', minLength: 1, typed_string: {
				minItems: 1,
				items: {type: 'string', const: 'bar'},
			}},
			TypedStringConverter,
		],
		[
			{type: 'string', minLength: 1, typed_string: {
				items: false,
				minItems: 1,
				prefixItems: [{type: 'string', const: 'bar'}],
			}},
			TypedStringConverter,
		],
		[
			{$ref: local_ref('None')},
			Ref,
		],
		[
			{
				oneOf: [
					{type: 'string', const: 'foo'},
					{type: 'string', const: 'bar'},
				],
			},
			OneOfConverter,
		],
	];

	void describe('has_matching_schema', () => {
		void it ('returns something', () => {

			for (const entry of expected_converters) {
				const [schema] = entry;

				not_undefined(
					Converter.has_matching_schema(
						candidates,
						schema
					),
					`expected to find something for ${JSON.stringify(schema)}`
				);
			}
		})
	})

	void describe('find_matching_schema', () => {
		void it ('does not reject', async () => {

			for (const entry of expected_converters) {
				const [schema] = entry;

				await assert.doesNotReject(
					Converter.find_matching_schema(
						candidates,
						schema
					)
				);
			}
		})
	})

	void it ('returns an expected converter', async () => {
		let candidates_remaining_to_be_checked = [
			...candidates,
		];

		for (const entry of expected_converters) {
			const [schema, expected] = entry;

			const promise = Converter.find_matching_schema(
				candidates,
				schema
			);

			await assert.doesNotReject(promise);
			is_instanceof(
				await promise,
				expected,
				`expecting ${
					expected.constructor.name
				}, receieved ${
					(await promise).constructor.name
				}`
			);

			candidates_remaining_to_be_checked =
				candidates_remaining_to_be_checked.filter(
					maybe => !(maybe instanceof expected)
				);
		}

		array_has_size(
			candidates_remaining_to_be_checked,
			0,
			`Expecting to have zero candidates remaining, ${
				candidates_remaining_to_be_checked
					.map(e => e.constructor.name)
					.join(', ')
			} found unchecked!`
		);
	});

	void describe('has_matching_schema_and_raw_data', () => {
		void it ('resolves to something', async () => {
			not_undefined(
				await Converter.has_matching_schema_and_raw_data(
					candidates,
					{type: 'string'},
					''
				)
			);
		})
	});
	void it('fails', async() => {
		await rejects_partial_match(
			Converter.find_matching_schema(candidates, {type: 'boolean'}),
			{
				property: {
					schema: {type: 'boolean'},
				},
				message: 'Could not identify suitable candidate!',
			}
		);
	});
	void it ('returns undefined', async () => {
		assert.equal(
			Converter.has_matching_schema(candidates, {type: 'boolean'}),
			undefined
		);
		const promise = Converter.has_matching_schema_and_raw_data(
			candidates,
			{type: 'string'},
			null
		);
		await assert.doesNotReject(
			promise,
			'Converter.has_matching_schema_and_raw_data should not throw!'
		);
		assert.equal(
			await promise,
			undefined
		);
	});
});
