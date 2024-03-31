import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	BooleanOrBooleanExtended,
	schema_type,
} from '../../../../lib/DataDiscovery/CustomTypes/BooleanOrBooleanExtended';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import Ajv from 'ajv/dist/2020';
import {
	configure_ajv,
} from '../../../../lib/DocsValidation';
import {
	isBooleanLiteral,
	isIdentifier,
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

void describe('BooleanOrBooleanExtended.convert_unknown', async () => {
	const ajv = new Ajv({verbose: true});
	configure_ajv(ajv);
	const discovery = new DataDiscovery(docs, ajv);
	const {definitions: {NativeClass}} = await docs.schema();
	const number_strings = new BooleanOrBooleanExtended(discovery, ajv);

	void it('throws', async () => {
		await assert.rejects(
			number_strings.convert_unknown(
				{
					$ref: '#/definitions/boolean',
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
				message: 'Not a boolean schema!',
			},
		);
	});
	void it('succeeds', async () => {
		const true_value = await number_strings.convert_unknown(
			{
				$ref: '#/definitions/boolean',
			},
			'True'
		);
		const false_value = await number_strings.convert_unknown(
			{
				$ref: '#/definitions/boolean',
			},
			'False'
		);
		const undefined_value = await number_strings.convert_unknown(
			{
				$ref: '#/definitions/boolean-extended',
			},
			''
		);

		isBooleanLiteral(true_value.expression, true);
		isBooleanLiteral(false_value.expression, false);
		isIdentifier(undefined_value.expression);
		assert.equal(undefined_value.expression.text, 'undefined');
	});
});

void describe('BooleanOrBooleanExtended.matches', async () => {
	const ajv = new Ajv({verbose: true});
	configure_ajv(ajv);
	const discovery = new DataDiscovery(docs, ajv);
	const {definitions: {
		NativeClass,
	}} = await docs.schema();
	const instance = new BooleanOrBooleanExtended(discovery, ajv);

	void it('resolves undefined', async () => {
		assert.equal(await instance.matches(NativeClass), undefined);
	});
	void it('resolves to BooleanOrBooleanExtended', async () => {
		const value = await instance.matches({
			$ref: '#/definitions/boolean',
		});

		is_instanceof(value, RawGenerationResult);

		const result = await value.result();

		is_instanceof(result, BooleanOrBooleanExtended);

		assert.equal(result, instance);
	});
});
