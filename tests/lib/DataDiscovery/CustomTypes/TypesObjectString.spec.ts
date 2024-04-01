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
	docs,
} from '../../../fixtures/Docs';
import {
	schema_basic_type,
	TypedObjectString_basic,
} from '../../../../lib/DataDiscovery/CustomTypes/TypedObjectString';
import {
	array_has_size,
	object_has_property,
} from '../../../../assert/CustomAssert';

const test_schema:schema_basic_type = {
	type: 'string',
	minLength: 1,
	typed_object_string: {
		foo: {type: 'string', const: '1'},
	},
};

void describe('TypedObjectString_basic.convert_unknown', () => {
	const ajv = new Ajv({verbose: true});
	configure_ajv(ajv);
	const discovery = new DataDiscovery(docs, ajv);
	const instance = new TypedObjectString_basic(discovery, ajv);

	void it ('throws on non-string values', async () => {
		await assert.rejects(
			() => instance.convert_unknown({
				type: 'string',
				minLength: 1,
				typed_object_string: {
					foo: {bar: 'baz'},
				},
			}, undefined),
			{
				message: 'raw data not a string!',
				property: undefined,
			}
		);
	});

	void it('throws on property mismatch', async() => {
		const property_mismatch = instance.convert_unknown(
			test_schema,
			'(foo=2)'
		);

		await assert.rejects(() => property_mismatch);
		let failure:unknown;
		await property_mismatch.catch((err) => {failure = err});
		object_has_property(failure, 'property');
		const {property} = failure;
		object_has_property(property, 'errors');
		const {errors} = property;
		array_has_size(errors as unknown[], 1);
		delete (failure as {property: {errors?: unknown[]}}).property.errors;
		assert.equal(
			failure.message,
			'Shallow parse of typed_object_string does not match schema!'
		);
		assert.deepEqual(failure.property, {
			shallow: {foo: '2'},
			schema: test_schema,
		});
	});

	void it('throws on additional properties', async() => {
		const property_mismatch = instance.convert_unknown(
			test_schema,
			'(foo=1,bar=2)'
		);

		await assert.rejects(() => property_mismatch);
		let failure:unknown;
		await property_mismatch.catch((err) => {failure = err});
		object_has_property(failure, 'property');
		assert.equal(
			failure.message,
			'Property not in schema!'
		);
		assert.deepEqual(failure.property, {
			bar: '2',
			schema: {
				foo: {
					type: 'string',
					const: '1',
				},
			},
		});
	});
});

void describe('TypedObjectString_basic.no_matches', () => {
	const ajv = new Ajv({verbose: true});
	configure_ajv(ajv);
	const discovery = new DataDiscovery(docs, ajv);
	const instance = new TypedObjectString_basic(discovery, ajv);

	void it('resolves to itself', async () => {
		assert.equal(
			await (await instance.matches(test_schema))?.result(),
			instance
		);
	});
});
