import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';

import {
	typed_string,
// eslint-disable-next-line max-len
} from '../../../../lib/TypeDefinitionDiscovery/CustomParsingTypes/typed_string';
import {
	TypeDefinitionWriter,
} from '../../../../lib/TypeDefinitionWriter';
import {
	docs,
} from '../../../../lib/helpers';
import {
	typed_string_inner_array_prefixItems_type,
	typed_string_inner_array_type,
	typed_string_inner_object_pattern_type,
	typed_string_inner_object_type,
} from '../../../../lib/CustomParsingTypes/TypedString';
import ts_assert from '@signpostmarv/ts-assert';
import {
	array_has_size,
	not_undefined,
} from '@satisfactory-dev/custom-assert';

void describe('typed_string', async () => {
	const type_definition_writer = new TypeDefinitionWriter(docs, 'update8');
	const discovery = await type_definition_writer.discovery;
	const discovered_types = (
		await discovery.types_discovery.discover_types()
	).discovered_types;

	const instance = new typed_string(
		discovered_types,
		discovery,
	);

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
					expectation,
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
					expectation,
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
					expectation,
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
					expectation,
				);
			}
		})
	})

	void describe('generate', () => {
		void it ('behaves with found array type', () => {
			const result = instance.generate()({
				type: 'string',
				minLength: 1,
				typed_string: {
					minItems: 1,
					items: {
						type: 'string',
						const: 'foo',
					},
				},
			});

			ts_assert.isTupleTypeNode(result);
			array_has_size(result.elements, 2);
			ts_assert.isLiteralTypeNode(result.elements[0]);
			ts_assert.isStringLiteral(result.elements[0].literal);
			ts_assert.isRestTypeNode(result.elements[1]);
			ts_assert.isArrayTypeNode(result.elements[1].type);
			ts_assert.isLiteralTypeNode(
				result.elements[1].type.elementType,
			);
			ts_assert.isStringLiteral(
				result.elements[1].type.elementType.literal,
			);
		})
		void it('behaves with known array type', () => {
			const result = instance.generate()({
				type: 'string',
				minLength: 1,
				typed_string: {
					minItems: 1,
					items: {
						type: 'string',
						minLength: 1,
						UnrealEngineString: true,
					},
				},
			});

			ts_assert.isTupleTypeNode(result);
			array_has_size(result.elements, 2);
			ts_assert.isTypeReferenceNode(result.elements[0]);
		})
		void it('behaves with prefixItems type', () => {
			const result = instance.generate()({
				type: 'string',
				minLength: 1,
				typed_string: {
					minItems: 1,
					items: false,
					prefixItems: [{
						type: 'string',
						const: 'foo',
					}],
				},
			});

			ts_assert.isTupleTypeNode(result);
			array_has_size(result.elements, 2);
			ts_assert.isTupleTypeNode(result.elements[0]);
			array_has_size(result.elements[0].elements, 1);
			ts_assert.isLiteralTypeNode(result.elements[0].elements[0])
			ts_assert.isStringLiteral(result.elements[0].elements[0].literal);
			assert.equal(
				result.elements[0].elements[0].literal.text,
				'foo',
			);
			ts_assert.isRestTypeNode(result.elements[1]);
			ts_assert.isArrayTypeNode(result.elements[1].type);
			ts_assert.isTupleTypeNode(result.elements[1].type.elementType);
			array_has_size(result.elements[1].type.elementType.elements, 1);
			ts_assert.isLiteralTypeNode(
				result.elements[1].type.elementType.elements[0],
			)
			ts_assert.isStringLiteral(
				result.elements[1].type.elementType.elements[0].literal,
			);
			assert.equal(
				result.elements[1].type.elementType.elements[0].literal.text,
				'foo',
			);
		})
		/**
		 * @todo whenever I have the patience, do a full-depth assertion
		 */
		void it('behaves with object pattern type', () => {
			const result = instance.generate()({
				type: 'string',
				minLength: 1,
				typed_string: {
					minProperties: 1,
					patternProperties: {
						'^(Foo|Bar)$': {type: 'string', const: 'foo'},
					},
				},
			});

			ts_assert.isUnionTypeNode(result);
			array_has_size(result.types, 3);
			ts_assert.isTypeLiteralNode(result.types[0]);
			ts_assert.isTypeLiteralNode(result.types[1]);
			ts_assert.isTypeLiteralNode(result.types[2]);
		})

		void it('behaves with object standard found type', () => {
			const result = instance.generate()({
				type: 'string',
				minLength: 1,
				typed_string: {
					required: ['foo'],
					properties: {
						foo: {type: 'string', const: 'bar'},
					},
				},
			});

			ts_assert.isTypeLiteralNode(result);
			array_has_size(result.members, 1);
			ts_assert.isPropertySignature(result.members[0]);
			ts_assert.isExpectedIdentifier(result.members[0].name, 'foo');
			not_undefined(result.members[0].type);
			ts_assert.isLiteralTypeNode(result.members[0].type);
			ts_assert.isStringLiteral(result.members[0].type.literal);
			assert.equal(result.members[0].type.literal.text, 'bar');
		})

		void it('behaves with object standard known type', () => {
			const result = instance.generate()({
				type: 'string',
				minLength: 1,
				typed_string: {
					required: ['foo'],
					properties: {
						foo: {
							type: 'string',
							minLength: 1,
							UnrealEngineString: true,
						},
					},
				},
			});

			ts_assert.isTypeLiteralNode(result);
			array_has_size(result.members, 1);
			ts_assert.isPropertySignature(result.members[0]);
			ts_assert.isExpectedIdentifier(result.members[0].name, 'foo');
			not_undefined(result.members[0].type);
			ts_assert.isTypeReferenceNode(result.members[0].type);
		})
	})
})
