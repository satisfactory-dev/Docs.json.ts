import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';

import {
	ajv_is_configured,
	configure_ajv,
	default_config,
	string_to_array,
	string_to_native_type,
	string_to_object,
} from '../../lib/DocsValidation';
import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';

type definitions = {
	[key: string]: [string, unknown][]
};

void describe('DefaultConfig', () => {
	void it('getter', () => {
		assert.notStrictEqual(default_config.ajv, default_config.ajv);
	});
	void it('setter', () => {
		const default_ajv = default_config.ajv;
		default_config.ajv = default_ajv;
		assert.strictEqual(default_config.ajv, default_ajv);
		default_config.clear();
		assert.notStrictEqual(default_config.ajv, default_config.ajv);
	});
})

const spec:{
	string_to_array: definitions,
	string_to_object: definitions,
	string_to_native_type: definitions,
} = {
	string_to_array: {
		'empty': [
			['', false],
			['()', false],
		],
		'with objects': [
			['((foo=bar))', [{foo: 'bar'}]],
			['(foo,"bar",(foo=bar))', ['foo', 'bar', {foo: 'bar'}]],
		],
		'with truncated object': [
			['((bar=)', ['(bar=']],
		],
	},
	string_to_object: {
		'empty': [
			['', false],
			['()', false],
		],
		'quoted and unquoted values': [
			['(foo=bar,bar=baz)', {foo: 'bar', bar: 'baz'}],
			['(foo="bar",bar=baz)', {foo: 'bar', bar: 'baz'}],
			['(foo=bar,bar="baz")', {foo: 'bar', bar: 'baz'}],
			['(foo="bar",bar="baz")', {foo: 'bar', bar: 'baz'}],
			['(foo=bar,bar=())', {foo: 'bar', bar: '()'}],
		],
		'nested objects': [
			['(foo=(bar="baz"))', {foo: {bar: 'baz'}}],
			['(foo=(bar=)', {foo: '(bar='}],
		],
	},
	string_to_native_type: {
		'empty': [
			['', ''],
			['()', '()'],
			['(())', ['()']],
		],
	},
};

const functions_to_call:{
	[key in keyof typeof spec]: (data:string) => unknown
} = {
	string_to_array,
	string_to_object,
	string_to_native_type,
};

for (const describing of Object.entries(spec)) {
	const [
		function_name,
		definitions,
	] = describing as [keyof typeof spec, definitions];
	const function_to_call = functions_to_call[function_name];

	void describe(function_name, () => {
		for (const expectations of Object.entries(definitions)) {
			const [expectation, assertions] = expectations;

			void it(expectation, () => {
				for (const assertion of assertions) {
					const [argument, to_equal] = assertion;
					assert.deepStrictEqual(
						function_to_call(argument),
						to_equal
					);
				}
			});
		}
	});
}

void describe('configure_ajv', () => {
	const test_keyword_schemas:[
		SchemaObject,
		[string, boolean][],
	][] = [
		[
			{
				type: 'string',
				minLength: 1,
				typed_object_string: {
					foo: {type: 'string', const: 'bar'},
				},
			},
			[
				['(foo=bar)', true],
				['(foo="bar")', true],
				['(foo=baz)', false],
			],
		],
		[
			{
				type: 'string',
				minLength: 1,
				'string_starts_with': 'foo',
			},
			[
				['foobar', true],
				['bar', false],
			],
		],
	];

	void it('Ajv fails without use', () => {
		const ajv = new Ajv();
		const basic = ajv.compile({type: 'string'});

		assert.strictEqual(basic('foo'), true);
		assert.strictEqual(basic(1), false);

		for (const entry of test_keyword_schemas) {
			const [schema] = entry;

			assert.throws(() => {
				return ajv.compile(schema);
			});
		}
	});

	void it('Behaves when configured', () => {
		const ajv = new Ajv();
		configure_ajv(ajv);

		for (const entry of test_keyword_schemas) {
			const [schema, checks] = entry;

			const check = ajv.compile(schema);

			for (const check_entry of checks) {
				const [input, expected] = check_entry;

				assert.strictEqual(check(input), expected);
			}
		}
	});
});


void describe('ajv_is_configured', () => {
	void it('not yet configured', () => {
		const ajv = new Ajv();

		assert.strictEqual(ajv_is_configured(ajv), false);

		configure_ajv(ajv);

		assert.strictEqual(ajv_is_configured(ajv), true);

		assert.strictEqual(ajv_is_configured(default_config.ajv), true);
	})
});
