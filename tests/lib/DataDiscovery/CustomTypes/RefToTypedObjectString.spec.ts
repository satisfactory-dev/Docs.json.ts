import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import {
	isObjectLiteralExpression,
} from '../../../../assert/TypeScriptAssert';
import {
	docs,
} from '../../../../lib/helpers';
import {
	RefToTypedObjectStringBasic,
} from '../../../../lib/DataDiscovery/CustomTypes/RefToTypedObjectString';
import {
	rejects_partial_match,
} from '../../../../assert/CustomAssert';

void describe('RefToTypedObjectStringBasic .convert_unknown', async () => {
	const discovery = new DataDiscovery(docs);
	const instance = await RefToTypedObjectStringBasic.from_definitions(
		discovery
	);

	void it('throws', async () => {
		await rejects_partial_match(
			instance.convert_unknown(
				{
					$ref: '#/definitions/decimal-string',
				},
				'nope'
			),
			{
				property: {
					definition: {
					pattern: '^\\d+\\.\\d{6}$',
					type: 'string',
					},
				},
				message: 'Schema not a typed_object_string string!',
			}
		);
		await rejects_partial_match(
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
