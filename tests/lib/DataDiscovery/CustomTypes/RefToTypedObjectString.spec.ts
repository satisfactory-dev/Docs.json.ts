import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import Ajv from 'ajv/dist/2020';
import {
	configure_ajv,
} from '../../../../lib/DocsValidation';
import {
	isObjectLiteralExpression,
	isStringLiteral,
} from '../../../../assert/TypeScriptAssert';
import {
	docs,
} from '../../../fixtures/Docs';
import {
	RefToTypedObjectStringBasic,
} from '../../../../lib/DataDiscovery/CustomTypes/RefToTypedObjectString';

void describe('RefToTypedObjectStringBasic .convert_unknown', async () => {
	const ajv = new Ajv({verbose: true});
	configure_ajv(ajv);
	const discovery = new DataDiscovery(docs, ajv);
	const instance = await RefToTypedObjectStringBasic.from_definitions(
		discovery,
		ajv
	);

	void it('throws', async () => {
		await assert.rejects(
			instance.convert_unknown(
				{
					$ref: '#/definitions/decimal-string',
				},
				'nope'
			),
			{
				property: {
					pattern: '^\\d+\\.\\d{6}$',
					type: 'string',
				},
				message: 'Schema not a typed_object_string string!',
			}
		);
		await assert.rejects(
			instance.convert_unknown(
				{
					$ref: '#/definitions/color',
				},
				'nope'
			),
			{
				message: 'raw data not a typed_object_string',
			}
		);
	});

	void it('does not throw', async () => {
		const value = instance.convert_unknown(
			{
				$ref: '#/definitions/color',
			},
			'(R=1,G=2,B=3,A=4)'
		);

		await assert.doesNotReject(value);

		const {expression} = await value;

		isObjectLiteralExpression(expression);
	});
});
