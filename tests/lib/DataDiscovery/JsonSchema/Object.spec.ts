import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import Ajv from 'ajv/dist/2020';
import {
	configure_ajv,
} from '../../../../lib/DocsValidation';
import {
	DataDiscovery,
} from '../../../../lib/DataDiscovery';
import {
	docs,
} from '../../../fixtures/Docs';
import {
	object_extends_but_has_no_additional_properties,
	ObjectExtendsButHasNoAdditionalProperties,
} from '../../../../lib/DataDiscovery/JsonSchema/Object';
import {
	is_instanceof,
} from '../../../../assert/CustomAssert';
import {
	ExpressionResult,
	RawGenerationResult,
} from '../../../../lib/DataDiscovery/Generator';
import {
	local_ref,
} from '../../../../lib/StringStartsWith';
import {
	isAsExpression,
	isIdentifier,
	isStringLiteral,
	isTypeReferenceNode,
} from '../../../../assert/TypeScriptAssert';
import {
	object_keys,
} from '../../../../lib/ArrayUtilities';

const example_schema_decimal_string:
	object_extends_but_has_no_additional_properties = {
		type: 'object',
		$ref: local_ref('decimal-string'),
		unevaluatedProperties: false,
	};

void describe('ObjectExtendsButHasNoAdditionalProperties', () => {
	const ajv = new Ajv({verbose: true});
	configure_ajv(ajv);
	const instance = new ObjectExtendsButHasNoAdditionalProperties (
		new DataDiscovery(docs, ajv),
		ajv
	);
	void it('resolves to undefined only on non-matching schema', async () => {
		assert.equal(
			await instance.matches({type: 'string'}),
			undefined,
			'unspecified string'
		);

		const value = await instance.matches(example_schema_decimal_string);
		is_instanceof(
			value,
			RawGenerationResult
		);
		assert.equal(await value?.result(), instance);
	});

	void it('leaves non-matching objects alone', async () => {
		const example = {foo: 'bar'};
		assert.equal(
			await instance.convert_object(
				example_schema_decimal_string,
				example
			),
			example
		);
	});

	void it('converts supported properties', async () => {
		const definition:object_extends_but_has_no_additional_properties = {
			type: 'object',
			$ref: '#/definitions/FGBuildable--docking-station-base',
			unevaluatedProperties: false,
		};
		const example = {
			mStorageSizeX: '1',
			mStorageSizeY: '2',
			mTransferSpeed: '1.234567',
			mStackTransferSize: '2.345678',
			foo: 'bar',
		};
		const converted = await instance.convert_object(
			definition,
			example
		);

		for (const key of object_keys(example)) {
			if ('foo' === key) {
				assert.equal(converted.foo, 'bar');
				continue;
			}

			is_instanceof(converted[key], ExpressionResult);

			const converted_value:ExpressionResult = (
				converted[key] as ExpressionResult
			);

			isAsExpression(converted_value.expression);
			isStringLiteral(converted_value.expression.expression);
			isTypeReferenceNode(converted_value.expression.type);
			assert.equal(
				converted_value.expression.expression.text,
				example[key]
			);
			isIdentifier(converted_value.expression.type.typeName);
			assert.equal(
				converted_value.expression.type.typeName.escapedText,
				'StringPassedRegExp'
			);
		}
	});
});
