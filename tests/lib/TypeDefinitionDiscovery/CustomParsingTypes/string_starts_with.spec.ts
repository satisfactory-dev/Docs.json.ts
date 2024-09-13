import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	string_starts_with,
// eslint-disable-next-line max-len
} from '../../../../lib/TypeDefinitionDiscovery/CustomParsingTypes/string_starts_with';
import {
	update8,
} from '../../../../lib/helpers';
import ts_assert from '@signpostmarv/ts-assert';
import {
	array_has_size,
	not_undefined,
} from '@satisfactory-dev/custom-assert';

void describe('string_starts_with', () => {
	const instance = new string_starts_with(update8.ajv);

	void describe('generate', () => {
		void it ('behaves', () => {
			const result = instance.generate()({
				type: 'string',
				string_starts_with: 'foo',
			});

			ts_assert.isTypeReferenceNode(result);
			ts_assert.isExpectedIdentifier(
				result.typeName,
				'StringStartsWith',
			);
			not_undefined(result.typeArguments);
			array_has_size(result.typeArguments, 1);
			ts_assert.isLiteralTypeNode(result.typeArguments[0])
			ts_assert.isStringLiteral(result.typeArguments[0].literal);
			assert.equal(
				result.typeArguments[0].literal.text,
				'foo',
			);
		})
	})
})
