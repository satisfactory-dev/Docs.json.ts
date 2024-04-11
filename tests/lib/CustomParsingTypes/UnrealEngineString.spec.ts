import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	string_or_string_array_to_node,
} from '../../../lib/CustomParsingTypes/UnrealEngineString';
import ts_assert from '@signpostmarv/ts-assert';
import {
	array_has_size,
} from '../../../assert/CustomAssert';

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
