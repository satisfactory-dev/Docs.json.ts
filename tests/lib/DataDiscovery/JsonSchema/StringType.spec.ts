import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	BasicStringConverter,
	ConstStringConverter,
	string_schema,
} from '../../../../lib/DataDiscovery/JsonSchema/StringType';
import {
	docs,
} from '../../../../lib/helpers';
import ts_assert from '@signpostmarv/ts-assert';
import {
	rejects_partial_match,
} from '../../../../assert/CustomAssert';
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

type data_sets<
	InstanceType extends ConverterMatchesSchema<SchemaType>,
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
};

for (const data_set of Object.entries(data_sets)) {
	const [converter, data] = data_set;
	const instance = data.make_instance();

	void describe(converter, () => {

	void describe('can_convert_schema', () => {
			void it('behaves', () => {
				for (const entry of data.can_convert_schema) {
					const [schema, expectation] = entry;
			assert.equal(
					instance.can_convert_schema(schema),
						expectation
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
				const promise = instance.convert(schema, raw_data);

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
						schema,
						raw_data
				),
					failure
			);
			}
		});
		}
	})
}
