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
	DocsTsGenerator,
} from '../../../../lib/DocsTsGenerator';
import Ajv from 'ajv/dist/2020';
import {
	configure_ajv,
} from '../../../../lib/DocsValidation';
import {
	isAsExpression,
	isIdentifier,
	isStringLiteral,
	isTypeReferenceNode,
} from '../../../../assert/TypeScriptAssert';
import {
	is_instanceof,
} from '../../../../assert/CustomAssert';
import {
	RawGenerationResult,
} from '../../../../lib/DataDiscovery/Generator';
import {
	docs,
} from '../../../fixtures/Docs';

void describe('NumberStrings.convert_unknown', async () => {
	const ajv = new Ajv({verbose: true});
	configure_ajv(ajv);
	const discovery = new DataDiscovery(docs, ajv);
	const {definitions: {NativeClass}} = await docs.schema();
	const number_strings = new NumberStrings(discovery, ajv);

	void it('throws', async () => {
		await assert.rejects(
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
		await assert.rejects(
			number_strings.convert_unknown(
				{
					$ref: '#/definitions/NativeClass',
				} as unknown as schema_type,
				'foo'
			),
			{
				property: NativeClass,
				message: 'Not a pattern schema!',
			},
		);
	});
	void it('succeeds', async () => {
		const value = await number_strings.convert_unknown(
			{
				$ref: '#/definitions/decimal-string',
			},
			'1.2'
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
	const ajv = new Ajv({verbose: true});
	configure_ajv(ajv);
	const discovery = new DataDiscovery(docs, ajv);
	const {definitions: {
		NativeClass,
	}} = await docs.schema();
	const number_strings = new NumberStrings(discovery, ajv);

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
