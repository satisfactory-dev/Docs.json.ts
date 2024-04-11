import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	BooleanConverter,
} from '../../../../lib/DataDiscovery/CustomTypes/BooleanOrBooleanExtended';
import {
	docs,
} from '../../../../lib/helpers';
import {
	local_ref,
} from '../../../../lib/StringStartsWith';
import {
	isBooleanLiteral,
	isIdentifier,
} from '../../../../assert/TypeScriptAssert';

const schema = {$ref: local_ref('boolean-extended')};

void describe('BooleanConverter.can_convert_schema_and_raw_data()', () => {
	const instance = new BooleanConverter(docs.ajv);

	void it('resolves false', async () => {
		assert.equal(
			await instance.can_convert_schema_and_raw_data(
				{type: 'string'},
				'True'
			),
			false
		);
		assert.equal(
			await instance.can_convert_schema_and_raw_data(
				schema,
				true
			),
			false
		);
		assert.equal(
			await instance.can_convert_schema_and_raw_data(
				schema,
				'True'
			),
			true
		);
	});
});

void describe('BooleanConverter.convert()', () => {
	const instance = new BooleanConverter(docs.ajv);

	void it('resolves True', async () => {
		isBooleanLiteral(
			(await instance.convert(schema, 'True')).expression,
			true,
		);
	});

	void it('resolves False', async () => {
		isBooleanLiteral(
			(await instance.convert(schema, 'False')).expression,
			false,
		);
	});

	void it('resolved undefined', async() => {
		const result = (await instance.convert(schema, '')).expression;

		isIdentifier(result);
		assert.equal(result.text, 'undefined');
	});
});
