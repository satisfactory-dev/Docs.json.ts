import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	string_or_string_array_to_node,
	UnrealEngineString,
	UnrealEngineString_type,
} from '../../../lib/CustomParsingTypes/UnrealEngineString';
import ts_assert from '@signpostmarv/ts-assert';
import {
	array_has_size,
} from '@satisfactory-clips-archive/custom-assert';

void describe('string_or_string_array_to_node', () => {
	void it('returns a union given an array', () => {
		const value = string_or_string_array_to_node(['foo', 'bar']);

		ts_assert.isUnionTypeNode(value);
		array_has_size(value.types, 2);
		ts_assert.isLiteralTypeNode(value.types[0]);
		ts_assert.isLiteralTypeNode(value.types[1]);
		ts_assert.isStringLiteral(value.types[0].literal);
		ts_assert.isStringLiteral(value.types[1].literal);
		assert.equal(value.types[0].literal.text, 'foo');
		assert.equal(value.types[1].literal.text, 'bar');
	});
});

const regex_uppercase = 'A-Z';
const regex_alpha = `${regex_uppercase}a-z`;

const general_regex =
	`/(?:[${
		regex_uppercase
	}-][A-Za-z0-9_-]+/)+(?:[${
		regex_uppercase
	}][A-Za-z_0-9-]+\\.[${
		regex_uppercase
	}][A-Za-z_0-9-]+(?:_C)?(?::[${
		regex_uppercase
	}][A-Za-z0-9_]+)?|[${
		regex_uppercase
	}][${
		regex_alpha
	}_]+\\.[${
		regex_uppercase
	}][${
		regex_alpha
	}_]+)`;

const right_regex_suffix =
	`(?:[${
		regex_uppercase
	}][${
		regex_alpha
	}0-9_.]+/)*[${
		regex_uppercase
	}][${
		regex_alpha
	}_.0-9-]+(?::[${
		regex_uppercase
	}][${
		regex_alpha
	}0-9]+)?`;

void describe('UnrealEngineString', () => {
	void describe('ajv_macro_generator', () => {
		void describe('result', () => {
			const data_sets:[
				UnrealEngineString_type,
				string,
			][] = [
				[
					true,
					`(?:(?:/Script/Engine.BlueprintGeneratedClass)'(?:${
						general_regex
					}|"${
						general_regex
					}")')`,
				],
				[
					{left: 'foo'},
					`(?:(?:foo)'(?:${
						general_regex
					}|"${
						general_regex
					}")')`,
				],
				[
					{left: ['foo']},
					`(?:(?:foo)'(?:${
						general_regex
					}|"${
						general_regex
					}")')`,
				],
				[
					{left: ['foo', 'bar']},
					`(?:(?:foo|bar)'(?:${
						general_regex
					}|"${
						general_regex
					}")')`,
				],
				[
					{right: 'foo'},
					`(?:(?:/Script/Engine.BlueprintGeneratedClass)'(?:(?:foo)|"(?:foo)")')`,
				],
				[
					{right: ['foo']},
					`(?:(?:/Script/Engine.BlueprintGeneratedClass)'(?:(?:foo)|"(?:foo)")')`,
				],
				[
					{right: ['foo', 'bar']},
					`(?:(?:/Script/Engine.BlueprintGeneratedClass)'(?:(?:foo|bar)|"(?:foo|bar)")')`,
				],
				[
					{right: {starts_with: 'foo'}},
					`(?:(?:/Script/Engine.BlueprintGeneratedClass)'(?:(?:(?:foo${
						right_regex_suffix
					}))|"(?:(?:foo${
						right_regex_suffix
					}))")')`,
				],
				[
					{right: {starts_with: ['foo']}},
					`(?:(?:/Script/Engine.BlueprintGeneratedClass)'(?:(?:(?:foo${
						right_regex_suffix
					}))|"(?:(?:foo${
						right_regex_suffix
					}))")')`,
				],
				[
					{right: {starts_with: ['foo', 'bar']}},
					`(?:(?:/Script/Engine.BlueprintGeneratedClass)'(?:(?:(?:foo${
						right_regex_suffix
					}|bar${
						right_regex_suffix
					}))|"(?:(?:foo${
						right_regex_suffix
					}|bar${
						right_regex_suffix
					}))")')`,
				],
			];
			const inner = UnrealEngineString.ajv_macro_generator(
				true
			);
			const standalone = UnrealEngineString.ajv_macro_generator(
				false
			);

			for (const data_set of data_sets) {
				const [data, pattern] = data_set;
				void it(
					`UnrealEngineString.ajv_macro_generator(true)(${
						JSON.stringify(data)
					}) returns {pattern: ${pattern}}`,
					() => {

						assert.deepEqual(
							inner(data),
							{
								pattern,
							}
						);
					}
				)
				void it(
					`UnrealEngineString.ajv_macro_generator(false)(${
						JSON.stringify(data)
					}) returns {pattern: ${pattern}}`,
					() => {

						assert.deepEqual(
							standalone(data),
							{
								pattern: `^${pattern}$`,
							}
						);
					}
				)
			}
		})
	})
})
