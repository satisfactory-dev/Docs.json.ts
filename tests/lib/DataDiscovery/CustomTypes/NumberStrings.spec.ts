import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	NumberStrings, schema_type,
} from '../../../../lib/DataDiscovery/CustomTypes/NumberStrings';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import {
	isAsExpression,
	isIdentifier,
	isStringLiteral,
	isTypeReferenceNode,
} from '../../../../assert/TypeScriptAssert';
import {
	is_instanceof,
	rejects_partial_match,
} from '../../../../assert/CustomAssert';
import {
	RawGenerationResult,
} from '../../../../lib/DataDiscovery/Generator';
import {
	docs,
} from '../../../../lib/helpers';

void describe('NumberStrings.convert_unknown', async () => {
	const discovery = new DataDiscovery(docs);
	const {definitions: {NativeClass}} = await docs.schema();
	const number_strings = new NumberStrings(discovery);

	void it('throws', async () => {
		await rejects_partial_match(
			number_strings.convert_unknown(
				{
					$ref: '#/definitions/decimal-string',
				},
				1
			),
			{
				property: 1,
				message: 'must be a string!',
			},
		);
		await rejects_partial_match(
			number_strings.convert_unknown(
				{
					$ref: '#/definitions/NativeClass',
				} as unknown as schema_type,
				'foo'
			),
			{
				property: {definition: NativeClass},
				message: 'Not a pattern schema!',
			},
		);
		await rejects_partial_match(
			number_strings.convert_unknown(
				{
					$ref: '#/definitions/decimal-string',
				},
				'1.2'
			),
			{
				property: {
					raw_data: '1.2',
					pattern: '^\\d+\\.\\d{6}$',
				},
				message: '"1.2" does not match /^\\d+\\.\\d{6}$/!',
			},
		);
	});
	void it('succeeds', async () => {
		const value = await number_strings.convert_unknown(
			{
				$ref: '#/definitions/decimal-string',
			},
			'1.200000'
		);

		isAsExpression(value.expression);
		isStringLiteral(value.expression.expression);
		isTypeReferenceNode(value.expression.type);
		isIdentifier(value.expression.type.typeName);
		assert.equal(
			value.expression.type.typeName.escapedText,
			'StringPassedRegExp'
		);
	});
});

void describe('NumberStrings.matches', async () => {
	const discovery = new DataDiscovery(docs);
	const {definitions: {
		NativeClass,
	}} = await docs.schema();
	const number_strings = new NumberStrings(discovery);

	void it('resolves undefined', async () => {
		assert.equal(await number_strings.matches(NativeClass), undefined);
	});
	void it('resolves to NumberStrings', async () => {
		const value = await number_strings.matches({
			$ref: '#/definitions/decimal-string',
		});

		is_instanceof(value, RawGenerationResult);

		const result = await value.result();

		is_instanceof(result, NumberStrings);

		assert.equal(result, number_strings);
	});
});
