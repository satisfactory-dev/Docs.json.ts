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

type data_sets<
	SchemaType extends SchemaObject,
> = {
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
	BasicStringConverter: data_sets<string_schema>,
	ConstStringConverter: data_sets<const_schema_type>,
} = {
	BasicStringConverter: {
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

void describe('BasicStringConverter', () => {
	const instance = new BasicStringConverter(docs.ajv);

	void describe('can_convert_schema', () => {
		const pass = data_sets.BasicStringConverter.can_convert_schema.filter(
			maybe => maybe[1],
		);
		const fail = data_sets.BasicStringConverter.can_convert_schema.filter(
			maybe => !maybe[1],
		);
		void it('returns true', () => {
			for (const entry of pass) {
				const [schema] = entry;

			assert.equal(
					instance.can_convert_schema(schema),
				true
			);
			}
		})
		void it('returns false', () => {
			for (const entry of fail) {
				const [schema] = entry;

			assert.equal(
					instance.can_convert_schema(schema),
				false
			);
			}
		})
	})

	void describe('can_convert_schema_and_raw_data', () => {
		const pass = data_sets.BasicStringConverter.can_convert_schema_and_raw_data.filter(
			maybe => maybe[2],
		);
		const fail = data_sets.BasicStringConverter.can_convert_schema_and_raw_data.filter(
			maybe => !maybe[2],
		);
		void it ('resolves true', async () => {
			for (const entry of pass) {
				const [schema, raw_data] = entry;
			const promise = instance.can_convert_schema_and_raw_data(
					schema,
					raw_data,
			);

			await assert.doesNotReject(promise);
			assert.equal(await promise, true);
			}
		});
		void it ('resolves false', async () => {
			for (const entry of fail) {
				const [schema, raw_data] = entry;

				const promise = instance.can_convert_schema_and_raw_data(
					schema,
					raw_data,
				);

				await assert.doesNotReject(promise);

				if (await promise) {
					console.error(schema, raw_data);
				}

				assert.equal(await promise, false);
			}
		});
	})

	void describe('convert', () => {
		void it('behaves', async () => {
			for (const entry of data_sets.BasicStringConverter.convert.succeeds) {
				const [schema, raw_data, expectation] = entry;
				const promise = instance.convert(schema, raw_data);

			await assert.doesNotReject(promise);

			const {expression} = await promise;
				expectation(expression);
			}
		})
	})
})

void describe('ConstStringConverter', () => {
	const instance = new ConstStringConverter(docs.ajv);

	void describe('can_convert_schema', () => {
		const pass = data_sets.ConstStringConverter.can_convert_schema.filter(
			maybe => maybe[1],
		);
		const fail = data_sets.ConstStringConverter.can_convert_schema.filter(
			maybe => !maybe[1],
		);
		void it('returns true', () => {
			for (const entry of pass) {
				const [schema] = entry;

			assert.equal(
					instance.can_convert_schema(schema),
				true
			);
			}
		})
		void it('returns false', () => {
			for (const entry of fail) {
				const [schema] = entry;

			assert.equal(
					instance.can_convert_schema(schema),
				false
			);
			}
		})
	})

	void describe('can_convert_schema_and_raw_data', () => {
		const pass = data_sets.ConstStringConverter.can_convert_schema_and_raw_data.filter(
			maybe => maybe[2],
		);
		const fail = data_sets.ConstStringConverter.can_convert_schema_and_raw_data.filter(
			maybe => !maybe[2],
		);
		void it ('resolves true', async () => {
			for (const entry of pass) {
				const [schema, raw_data] = entry;
			const promise = instance.can_convert_schema_and_raw_data(
					schema,
					raw_data,
			);

			await assert.doesNotReject(promise);
			assert.equal(await promise, true);
			}
		});
		void it ('resolves false', async () => {
			for (const entry of fail) {
				const [schema, raw_data] = entry;

			const promise = instance.can_convert_schema_and_raw_data(
					schema,
					raw_data,
			);

			await assert.doesNotReject(promise);
			assert.equal(await promise, false);
			}
		});
	});

	void describe('convert', () => {
		void it('succeeds', async () => {
			for (const entry of data_sets.ConstStringConverter.convert.succeeds) {
				const [schema, raw_data, expectation] = entry;
				const promise = instance.convert(schema, raw_data);

			await assert.doesNotReject(promise);

				const {expression} = await promise;
				expectation(expression);
			}
		});

		const {fails} = data_sets.ConstStringConverter.convert;

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
	});
});
