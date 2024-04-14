import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';

import {
	typed_string,
} from '../../../../lib/TypeDefinitionDiscovery/CustomParsingTypes/typed_string';
/*
import {
	TypeDefinitionWriter,
} from '../../../../lib/TypeDefinitionWriter';
import {
	docs,
} from '../../../../lib/helpers';
*/
import {
	typed_string_inner_array_prefixItems_type,
	typed_string_inner_array_type,
	typed_string_inner_object_pattern_type,
	typed_string_inner_object_type,
} from '../../../../lib/CustomParsingTypes/TypedString';

void describe('typed_string', () => {
	/*
	const type_definition_writer = new TypeDefinitionWriter(docs);
	const discovery = await type_definition_writer.discovery;
	const discovered_types = (
		await discovery.types_discovery.discover_types()
	).discovered_types;

	const instance = new typed_string(
		discovered_types,
		discovery
	);
	*/

	const static_schema_checks:[
		(
			| typed_string_inner_object_type
			| typed_string_inner_object_pattern_type
			| typed_string_inner_array_type
			| typed_string_inner_array_prefixItems_type
		),
		boolean, // is_array_type
		boolean, // is_object_pattern_type
		boolean, // is_object_type
		boolean, // is_prefixItems_type
	][] = [
		[
			{minItems: 1, items: {type: 'string', const: 'foo'}},
			true,
			false,
			false,
			false,
		],
		[
			{
				minProperties: 1,
				patternProperties: {
					'^(Foo|Bar)$': {type: 'string', const: 'foo'},
				},
			},
			false,
			true,
			false,
			false,
		],
		[
			{
				required: ['foo'],
				properties: {foo: {type: 'string', const: 'foo'}},
			},
			false,
			false,
			true,
			false,
		],
		[
			{
				minItems: 1,
				items: false,
				prefixItems: [{type: 'string', const: 'foo'}],
			},
			false,
			false,
			false,
			true,
		],
	];

	void describe('is_array_type', () => {
		void it('behaves', () => {
			for (const entry of static_schema_checks) {
				const [schema, expectation] = entry;

				assert.equal(
					typed_string.is_array_type(schema),
					expectation
				);
			}
		})
	})

	void describe('is_object_pattern_type', () => {
		void it('behaves', () => {
			for (const entry of static_schema_checks) {
				const [schema,, expectation] = entry;

				assert.equal(
					typed_string.is_object_pattern_type(schema),
					expectation
				);
			}
		})
	})

	void describe('is_object_type', () => {
		void it('behaves', () => {
			for (const entry of static_schema_checks) {
				const [schema,,, expectation] = entry;

				assert.equal(
					typed_string.is_object_type(schema),
					expectation
				);
			}
		})
	})

	void describe('is_prefixItems_type', () => {
		void it('behaves', () => {
			for (const entry of static_schema_checks) {
				const [schema,,,, expectation] = entry;

				assert.equal(
					typed_string.is_prefixItems_type(schema),
					expectation
				);
			}
		})
	})
})
