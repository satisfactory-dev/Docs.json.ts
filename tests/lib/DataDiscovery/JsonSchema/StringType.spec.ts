import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	BasicStringConverter,
	ConstStringConverter,
	EnumStringConverter,
	pattern_schema,
	PatternConverter,
	string_schema,
} from '../../../../lib/DataDiscovery/JsonSchema/StringType';
import {
	docs,
} from '../../../../lib/helpers';
import ts_assert from '@signpostmarv/ts-assert';
import {
	array_has_size,
	not_undefined,
	rejects_partial_match,
} from '@satisfactory-clips-archive/custom-assert/assert/CustomAssert';
import {
	SchemaObject,
} from 'ajv';
import {
	Expression,
} from 'typescript';
import {
	const_schema_type,
} from '../../../../lib/CustomParsingTypes/TypedStringConst';
import {
	ConverterMatchesSchema,
} from '../../../../lib/DataDiscovery/Generator';
import {
	enum_schema_type,
} from '../../../../lib/CustomParsingTypes/TypedStringEnum';

type data_sets<
	InstanceType extends (
		| ConverterMatchesSchema<SchemaType>
		| PatternConverter
	),
	SchemaType extends SchemaObject,
> = {
	make_instance: () => InstanceType,
	can_convert_schema: [SchemaObject, boolean][],
	can_convert_schema_and_raw_data: [SchemaObject, unknown, boolean][],
	convert: {
		succeeds: [SchemaType, string, (expression:Expression) => void][],
		fails?: [SchemaType, string, {[key: string]: unknown}][],
	},
};

const basic_string_schema:string_schema = {type: 'string'};
const const_string_schema:const_schema_type = {type: 'string', const: 'Foo'};
const basic_number_schema = {type: 'number'};
const enum_string_schema:enum_schema_type = {
	type: 'string',
	enum: ['Foo', 'Bar'],
};
const pattern_string_schema:pattern_schema = {
	type: 'string',
	pattern: '^Foo(Bar|Baz)$',
};

function generate_basic_expression_check(
	expecting:string
): ((expression:Expression) => void) {
	return (expression:Expression) => {
		ts_assert.isStringLiteral(expression);
		assert.equal(expression.text, expecting);
	};
}

const data_sets: {
	BasicStringConverter: data_sets<BasicStringConverter, string_schema>,
	ConstStringConverter: data_sets<ConstStringConverter, const_schema_type>,
	EnumStringConverter: data_sets<EnumStringConverter, enum_schema_type>,
	PatternConverter: data_sets<PatternConverter, pattern_schema>,
} = {
	BasicStringConverter: {
		make_instance: () => new BasicStringConverter(docs.ajv),
		can_convert_schema: [
			[basic_string_schema, true],
			[const_string_schema, false],
			[basic_number_schema, false],
		],
		can_convert_schema_and_raw_data: [
			[basic_string_schema, '', true],
			[basic_string_schema, null, false],
			[basic_number_schema, '', false],
		],
		convert: {
			succeeds: [
				[
					basic_string_schema,
					'',
					generate_basic_expression_check(''),
				],
			],
		},
	},
	ConstStringConverter: {
		make_instance: () => new ConstStringConverter(docs.ajv),
		can_convert_schema: [
			[basic_string_schema, false],
			[const_string_schema, true],
			[basic_number_schema, false],
		],
		can_convert_schema_and_raw_data: [
			[const_string_schema, 'Foo', true],
			[const_string_schema, 'Bar', false],
		],
		convert: {
			succeeds: [
				[
					const_string_schema,
					'Foo',
					generate_basic_expression_check('Foo'),
				],
			],
			fails: [
				[
					const_string_schema,
					'',
					{
						property: {
							schema: const_string_schema,
							raw_data: '',
						},
						message: 'Raw data probably did not pass check!',
					},
				],
				[
					const_string_schema,
					'Bar',
					{
						property: {
							schema: const_string_schema,
							raw_data: 'Bar',
						},
						message: 'Raw data probably did not pass check!',
					},
				],
			],
		},
	},
	EnumStringConverter: {
		make_instance: () => new EnumStringConverter(docs.ajv),
		can_convert_schema: [
			[basic_string_schema, false],
			[const_string_schema, false],
			[basic_number_schema, false],
			[enum_string_schema, true],
		],
		can_convert_schema_and_raw_data: [
			[enum_string_schema, 'Foo', true],
			[enum_string_schema, 'Bar', true],
			[enum_string_schema, 'Baz', false],
			[enum_string_schema, 'foo', false],
			[enum_string_schema, 'bar', false],
		],
		convert: {
			succeeds: [
				[
					enum_string_schema,
					'Foo',
					generate_basic_expression_check('Foo'),
				],
			],
		},
	},
	PatternConverter: {
		make_instance: () => new PatternConverter(docs.ajv),
		can_convert_schema: [
			[basic_string_schema, false],
			[const_string_schema, false],
			[basic_number_schema, false],
			[enum_string_schema, false],
			[pattern_string_schema, true],
		],
		can_convert_schema_and_raw_data: [
			[pattern_string_schema, 'FooBar', true],
			[pattern_string_schema, 'FooBaz', true],
			[pattern_string_schema, 'FooFoo', false],
			[pattern_string_schema, 'foobar', false],
			[pattern_string_schema, 'foobaz', false],
		],
		convert: {
			succeeds: [
				[
					pattern_string_schema,
					'FooBar',
					(expression:Expression) => {
						ts_assert.isAsExpression(expression);
						ts_assert.isStringLiteral(expression.expression);
						assert.equal(expression.expression.text, 'FooBar');
						ts_assert.isTypeReferenceNode(expression.type);
						ts_assert.isExpectedIdentifier(
							expression.type.typeName,
							'StringPassedRegExp'
						);
						not_undefined(expression.type.typeArguments);
						array_has_size(expression.type.typeArguments, 1);
						ts_assert.isLiteralTypeNode(
							expression.type.typeArguments[0]
						);
						ts_assert.isStringLiteral(
							expression.type.typeArguments[0].literal
						);
						assert.equal(
							expression.type.typeArguments[0].literal.text,
							'^Foo(Bar|Baz)$'
						);
					},
				],
			],
			fails:  [
				[
					pattern_string_schema,
					'foobar',
					{
						property: {
							schema: pattern_string_schema,
							raw_data: 'foobar',
						},
						message: 'Cannot convert schema!',
					},
				],
			],
		},
	},
};

for (const data_set of Object.entries(data_sets)) {
	const [converter, data] = data_set;
	const instance = data.make_instance();

	void describe(converter, () => {
		void describe('can_convert_schema', () => {
			void it('behaves', () => {
				for (const entry of data.can_convert_schema) {
					const [schema, expectation] = entry;

					const actual = instance.can_convert_schema(schema);

					assert.equal(
						actual,
						expectation,
						`${instance.constructor.name}.can_convert_schema(${
							JSON.stringify(schema)
						}) returned ${
							JSON.stringify(actual)
						}, expected ${
							JSON.stringify(expectation)
						}`
					);
				}
			})
		})
	})

	void describe('can_convert_schema_and_raw_data', () => {
		void it('behaves', async() => {
			for (const entry of data.can_convert_schema_and_raw_data) {
				const [schema, raw_data, expectation] = entry;
				const promise = instance.can_convert_schema_and_raw_data(
					schema,
					raw_data,
				);

				await assert.doesNotReject(promise);
				assert.equal(await promise, expectation);
			}
		})
	})

	void describe('convert', () => {
		void it('succeeds', async () => {
			for (const entry of data.convert.succeeds) {
				const [schema, raw_data, expectation] = entry;
				const promise = instance.convert(schema as never, raw_data);

				await assert.doesNotReject(promise);

				const {expression} = await promise;
				expectation(expression);
			}
		})

		const {fails} = data.convert;

		if (fails) {
			void it ('fails', async() => {
				for (const entry of fails) {
					const [schema, raw_data, failure] = entry;
					await rejects_partial_match(
						instance.convert(
							schema as never,
							raw_data
						),
						failure
					);
				}
			});
		}
	})
}
