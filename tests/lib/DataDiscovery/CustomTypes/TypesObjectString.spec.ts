import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import {
	docs,
} from '../../../fixtures/Docs';
import {
	schema_basic_type,
	TypedObjectString_basic,
} from '../../../../lib/DataDiscovery/CustomTypes/TypedObjectString';
import {
	array_has_size,
	not_undefined,
	rejects_partial_match,
} from '../../../../assert/CustomAssert';
import {
	Literal,
} from '../../../../lib/DataDiscovery/Literal';
import {
	ObjectLiteralExpression,
} from 'typescript';
import {
	isAsExpression,
	isIdentifier,
	isLiteralTypeNode,
	isObjectLiteralExpression,
	isPropertyAssignment,
	isStringLiteral,
	isTypeReferenceNode,
} from '../../../../assert/TypeScriptAssert';

const test_schema:schema_basic_type = {
	type: 'string',
	minLength: 1,
	typed_object_string: {
		foo: {type: 'string', const: '1'},
	},
};

void describe('TypedObjectString_basic.convert_unknown', () => {
	const discovery = new DataDiscovery(docs);
	const instance = new TypedObjectString_basic(discovery);

	void it ('throws on non-string values', async () => {
		await rejects_partial_match(
			instance.convert_unknown({
				type: 'string',
				minLength: 1,
				typed_object_string: {
					foo: {bar: 'baz'},
				},
			}, undefined),
			{
				message: 'raw data not a string!',
				property: undefined,
			}
		);
	});

	void it('throws on property mismatch', async() => {
		const property_mismatch = instance.convert_unknown(
			test_schema,
			'(foo=2)'
		);

		await rejects_partial_match(
			property_mismatch,
			{
				message: `Shallow parse of typed_object_string does not match schema!`,
				property: {
					shallow: {foo: '2'},
					schema: test_schema,
				},
			}
		);
	});

	void it('throws on additional properties', async() => {
		const property_mismatch = instance.convert_unknown(
			test_schema,
			'(foo=1,bar=2)'
		);

		await rejects_partial_match(
			property_mismatch,
			{
				message: 'Property not in schema!',
				property: {
					bar: '2',
					schema: {
						foo: {
							type: 'string',
							const: '1',
						},
					},
				},
			}
		);
	});

	void it('converts when expected', async () => {
		const random = Math.random().toFixed(6);
		const test = instance.convert_unknown(
			{
				type: 'string',
				minLength: 1,
				typed_object_string: {
					foo: {$ref: '#/definitions/decimal-string'},
				},
			},
			`(foo=${random})`
		);
		await assert.doesNotReject(test);
		const {expression} = await test;
		isObjectLiteralExpression(expression);
		array_has_size(expression.properties, 1);
		isPropertyAssignment(expression.properties[0]);
		isIdentifier(expression.properties[0].name);
		assert.equal(expression.properties[0].name.text, 'foo');
		isAsExpression(expression.properties[0].initializer);
		isStringLiteral(expression.properties[0].initializer.expression);
		assert.equal(
			expression.properties[0].initializer.expression.text,
			random
		);
		isTypeReferenceNode(expression.properties[0].initializer.type);
		isIdentifier(expression.properties[0].initializer.type.typeName);
		assert.equal(
			expression.properties[0].initializer.type.typeName.escapedText,
			'StringPassedRegExp'
		);
		not_undefined(expression.properties[0].initializer.type.typeArguments);
		const type_arguments =
			expression.properties[0].initializer.type.typeArguments
		;
		array_has_size(type_arguments, 1);
		isLiteralTypeNode(type_arguments[0]);
		isStringLiteral(type_arguments[0].literal);
		assert.equal(type_arguments[0].literal.text, '^\\d+\\.\\d{6}$');
	});

	void it('catches literal.object_literal() exceptions', async () => {
		const override = new class extends Literal {
			object_literal(): Promise<ObjectLiteralExpression> {
				throw new Error('foo');
			}
		};
		const discovery = new DataDiscovery(docs, override);
		const instance = new TypedObjectString_basic(discovery);
		await rejects_partial_match(
			instance.convert_unknown(
				{
					type: 'string',
					minLength: 1,
					typed_object_string: {
						foo: {$ref: '#/definitions/decimal-string'},
					},
				},
				'(foo=1.234567)'
			),
			{
				message: 'Failed to grab object literal!',
			}
		);
	});
});

void describe('TypedObjectString_basic.no_matches', () => {
	const discovery = new DataDiscovery(docs);
	const instance = new TypedObjectString_basic(discovery);

	void it('resolves to itself', async () => {
		assert.equal(
			await (await instance.matches(test_schema))?.result(),
			instance
		);
	});
});
