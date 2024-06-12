import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	Pattern,
} from '../../../../../lib/TypeDefinitionDiscovery/JsonSchema/String/Pattern';
import {
	docs,
} from '../../../../../lib/helpers';
import ts_assert from '@signpostmarv/ts-assert';
import {
	array_has_size,
	not_undefined,
} from '@satisfactory-clips-archive/custom-assert/assert/CustomAssert';

void describe('Pattern', () => {
	const instance = new Pattern(docs.ajv);

	void describe('generate', () => {
		void it('behaves', () => {
			const result = instance.generate()({
				type: 'string',
				pattern: '^(Foo|Bar)$',
			});

			ts_assert.isTypeReferenceNode(result);
			ts_assert.isExpectedIdentifier(
				result.typeName,
				'StringPassedRegExp'
			);
			not_undefined(result.typeArguments);
			array_has_size(result.typeArguments, 1);
			ts_assert.isLiteralTypeNode(result.typeArguments[0])
			ts_assert.isStringLiteral(result.typeArguments[0].literal);
			assert.equal(
				result.typeArguments[0].literal.text,
				'^(Foo|Bar)$'
			);
		})
	})
})
