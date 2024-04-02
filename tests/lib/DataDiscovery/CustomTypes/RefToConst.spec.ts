import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import {
	isStringLiteral,
} from '../../../../assert/TypeScriptAssert';
import {
	docs,
} from '../../../fixtures/Docs';
import {
	RefToConst,
} from '../../../../lib/DataDiscovery/CustomTypes/RefToConst';

void describe('RefToConst.convert_unknown', async () => {
	const discovery = new DataDiscovery(docs);
	const instance = await RefToConst.from_definitions(discovery);

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
				message: 'Schema not a const string!',
			}
		);
		await assert.rejects(
			instance.convert_unknown(
				{
					$ref: '#/definitions/empty-object',
				},
				'nope'
			),
			{
				property: {
					definition: {
						const: '()',
						type: 'string',
					},
					raw_data: 'nope',
				},
				message: 'raw_data does not match schema!',
			}
		);
	});

	void it('does not throw', async () => {
		const value = instance.convert_unknown(
			{
				$ref: '#/definitions/empty-object',
			},
			'()'
		);

		await assert.doesNotReject(value);

		const {expression} = await value;

		isStringLiteral(expression);
		assert.equal(expression.text, '()');
	});
});
