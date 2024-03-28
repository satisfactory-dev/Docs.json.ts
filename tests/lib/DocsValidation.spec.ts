import 'jasmine';

import {
	string_to_array,
	string_to_native_type,
	string_to_object,
} from '../../lib/DocsValidation';

type definitions = {
	[key: string]: [string, unknown][]
};

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
		],
		'nested objects': [
			['(foo=(bar="baz"))', {foo: {bar: 'baz'}}],
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

	for (const expectations of Object.entries(definitions)) {
		const [expectation, assertions] = expectations;

		it(expectation, () => {
			for (const assertion of assertions) {
				const [argument, to_equal] = assertion;
				expect(function_to_call(argument)).toEqual(to_equal);
			}
		});
	}
}
