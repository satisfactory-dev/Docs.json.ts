// oxlint-disable @stylistic/max-len
import type {
	ErrorObject, ValidateFunction,
} from 'ajv';
import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';
import type {
	ConstString,
} from '../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/ConstString.ts';
import type {
	EnumString,
} from '../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/EnumString.ts';
import type {
	NamedList_type,
} from '../src/version-specific/0.3.7.7/NamedList.ts';
import type {
	FlexibleArray_type,
} from '../src/version-specific/0.3.7.7/TypedString/FlexibleArray.ts';
import type {
	PatternString_type,
} from '../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/PatternString.ts';
import type {
	TypedString_Object_type,
} from '../src/version-specific/0.3.7.7/TypedString/PropertySchemaToRegex/Object.ts';
import type {
	PrefixedString_type,
} from '../src/version-specific/0.3.7.7/PrefixedString.ts';
import type {
	$ref_type,
} from '@signpostmarv/json-schema-typescript-codegen';
import type {
	templated_string_type,
} from '@signpostmarv/json-schema-typescript-codegen/ajv';
function ajv_utilities__is_probably_object(maybe: unknown): maybe is Record<string, unknown> {
	return !!maybe && typeof maybe === 'object' && !Array.isArray(maybe);
}
function ajv_utilities__is_probably_array(maybe: unknown): maybe is unknown[] {
	return Array.isArray(maybe);
}
import fast_deep_equal from 'fast-deep-equal';
import {
	ucs2length,
} from '@satisfactory-dev/ajv-utilities/ajv';
export const PropertySchemaToRegex_ConstString = validate20;
const schema31 = { $schema: 'https://json-schema.org/draft/2020-12/schema', $id: 'docs.json.ts--lib--PropertySchemaToRegex--ConstString', type: 'object', additionalProperties: false, required: ['type', 'const'] as const, properties: { type: { type: 'string', const: 'string' }, const: { type: 'string' } } };
function validate20(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is ConstString {
	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--ConstString" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate20 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema31.required, parentSchema: schema31, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.const === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'const' }, message: 'must have required property \'' + 'const' + '\'', schema: schema31.required, parentSchema: schema31, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!((key0 === 'type') || (key0 === 'const'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data0 = data.type;
			if (typeof data0 !== 'string') {
				const err3: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.type.type, parentSchema: schema31.properties.type, data: data0 };
				vErrors.push(err3);
				errors++;
			}
			if ('string' !== data0) {
				const err4: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema31.properties.type, data: data0 };
				vErrors.push(err4);
				errors++;
			}
		}
		if (data.const !== undefined) {
			let data1 = data.const;
			if (typeof data1 !== 'string') {
				const err5: ErrorObject = { instancePath: instancePath + '/const', schemaPath: '#/properties/const/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.const.type, parentSchema: schema31.properties.const, data: data1 };
				vErrors.push(err5);
				errors++;
			}
		}
	} else {
		const err6: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.type, parentSchema: schema31, data };
		vErrors.push(err6);
		errors++;
	}
	(validate20 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate20 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_EnumString = validate21;
const schema32 = { $schema: 'https://json-schema.org/draft/2020-12/schema', $id: 'docs.json.ts--lib--PropertySchemaToRegex--EnumString', type: 'object', additionalProperties: false, required: ['type', 'enum'] as const, properties: { type: { type: 'string', const: 'string' }, enum: { type: 'array', minItems: 2, uniqueItems: true, items: { type: 'string', minLength: 1 } } } };
const func1 = ucs2length;
function validate21(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is EnumString {
	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--EnumString" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate21 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema32.required, parentSchema: schema32, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.enum === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'enum' }, message: 'must have required property \'' + 'enum' + '\'', schema: schema32.required, parentSchema: schema32, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!((key0 === 'type') || (key0 === 'enum'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema32, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data0 = data.type;
			if (typeof data0 !== 'string') {
				const err3: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.type.type, parentSchema: schema32.properties.type, data: data0 };
				vErrors.push(err3);
				errors++;
			}
			if ('string' !== data0) {
				const err4: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema32.properties.type, data: data0 };
				vErrors.push(err4);
				errors++;
			}
		}
		if (data.enum !== undefined) {
			let data1 = data.enum;
			if (ajv_utilities__is_probably_array(data1)) {
				if (data1.length < 2) {
					const err5: ErrorObject = { instancePath: instancePath + '/enum', schemaPath: '#/properties/enum/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema32.properties.enum, data: data1 };
					vErrors.push(err5);
					errors++;
				}
				const len0 = data1.length;
				for (let i0 = 0; i0 < len0; i0++) {
					let data2 = data1[i0];
					if (typeof data2 === 'string') {
						if (func1(data2) < 1) {
							const err6: ErrorObject = { instancePath: instancePath + '/enum/' + i0, schemaPath: '#/properties/enum/items/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema32.properties.enum.items, data: data2 };
							vErrors.push(err6);
							errors++;
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/enum/' + i0, schemaPath: '#/properties/enum/items/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.enum.items.type, parentSchema: schema32.properties.enum.items, data: data2 };
						vErrors.push(err7);
						errors++;
					}
				}
				let i1 = data1.length;
				let j0;
				if (i1 > 1) {
					const indices0: {
						[key: string]: number,
					} = {};
					for (; i1--;) {
						let item0 = data1[i1];
						if (typeof item0 !== 'string') {
							continue;
						}
						if (typeof indices0[item0] == 'number') {
							j0 = indices0[item0];
							const err8: ErrorObject = { instancePath: instancePath + '/enum', schemaPath: '#/properties/enum/uniqueItems', keyword: 'uniqueItems', params: { i: i1, j: j0 }, message: 'must NOT have duplicate items (items ## ' + j0 + ' and ' + i1 + ' are identical)', schema: true, parentSchema: schema32.properties.enum, data: data1 };
							vErrors.push(err8);
							errors++;
							break;
						}
						indices0[item0] = i1;
					}
				}
			} else {
				const err9: ErrorObject = { instancePath: instancePath + '/enum', schemaPath: '#/properties/enum/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema32.properties.enum.type, parentSchema: schema32.properties.enum, data: data1 };
				vErrors.push(err9);
				errors++;
			}
		}
	} else {
		const err10: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.type, parentSchema: schema32, data };
		vErrors.push(err10);
		errors++;
	}
	(validate21 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate21 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_NamedList = validate22;
const schema33 = { $schema: 'https://json-schema.org/draft/2020-12/schema', $id: 'docs.json.ts--lib--PropertySchemaToRegex--NamedList', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_named_list'] as const, properties: { type: { type: 'string', const: 'string' }, DocsDotJson_named_list: { type: 'string' } } };
function validate22(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is NamedList_type {
	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--NamedList" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate22 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema33.required, parentSchema: schema33, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_named_list === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_named_list' }, message: 'must have required property \'' + 'DocsDotJson_named_list' + '\'', schema: schema33.required, parentSchema: schema33, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!((key0 === 'type') || (key0 === 'DocsDotJson_named_list'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema33, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data0 = data.type;
			if (typeof data0 !== 'string') {
				const err3: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.type.type, parentSchema: schema33.properties.type, data: data0 };
				vErrors.push(err3);
				errors++;
			}
			if ('string' !== data0) {
				const err4: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema33.properties.type, data: data0 };
				vErrors.push(err4);
				errors++;
			}
		}
		if (data.DocsDotJson_named_list !== undefined) {
			let data1 = data.DocsDotJson_named_list;
			if (typeof data1 !== 'string') {
				const err5: ErrorObject = { instancePath: instancePath + '/DocsDotJson_named_list', schemaPath: '#/properties/DocsDotJson_named_list/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.DocsDotJson_named_list.type, parentSchema: schema33.properties.DocsDotJson_named_list, data: data1 };
				vErrors.push(err5);
				errors++;
			}
		}
	} else {
		const err6: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.type, parentSchema: schema33, data };
		vErrors.push(err6);
		errors++;
	}
	(validate22 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate22 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_FlexibleArray__items = validate23;
const schema34 = { $id: 'docs.json.ts--lib--PropertySchemaToRegex--FlexibleArray--items', type: 'object', additionalProperties: false, required: ['type', 'items', 'minItems', 'uniqueItems'] as const, properties: { $schema: { type: 'string', enum: ['https://json-schema.org/draft/2020-12/schema'] as const }, $id: { type: 'string', minLength: 1 }, type: { type: 'string', const: 'array' }, uniqueItems: { type: 'boolean', const: true }, $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, minItems: { type: 'integer', minimum: 0 }, maxItems: { type: 'integer', minimum: 0 }, items: {} } };
const pattern4 = new RegExp('^(.+)?#\\/\\$defs\\/(.+)$', 'u');
function validate23(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is FlexibleArray_type<'items'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--FlexibleArray--items" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate23 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema34.required, parentSchema: schema34, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.items === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'items' }, message: 'must have required property \'' + 'items' + '\'', schema: schema34.required, parentSchema: schema34, data };
			vErrors.push(err1);
			errors++;
		}
		if (data.minItems === undefined) {
			const err2: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'minItems' }, message: 'must have required property \'' + 'minItems' + '\'', schema: schema34.required, parentSchema: schema34, data };
			vErrors.push(err2);
			errors++;
		}
		if (data.uniqueItems === undefined) {
			const err3: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'uniqueItems' }, message: 'must have required property \'' + 'uniqueItems' + '\'', schema: schema34.required, parentSchema: schema34, data };
			vErrors.push(err3);
			errors++;
		}
		for (const key0 in data) {
			if (!((((((((key0 === '$schema') || (key0 === '$id')) || (key0 === 'type')) || (key0 === 'uniqueItems')) || (key0 === '$defs')) || (key0 === 'minItems')) || (key0 === 'maxItems')) || (key0 === 'items'))) {
				const err4: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema34, data };
				vErrors.push(err4);
				errors++;
			}
		}
		if (data.$schema !== undefined) {
			let data0 = data.$schema;
			if (typeof data0 !== 'string') {
				const err5: ErrorObject = { instancePath: instancePath + '/$schema', schemaPath: '#/properties/%24schema/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$schema.type, parentSchema: schema34.properties.$schema, data: data0 };
				vErrors.push(err5);
				errors++;
			}
			if (!(data0 === 'https://json-schema.org/draft/2020-12/schema')) {
				const err6: ErrorObject = { instancePath: instancePath + '/$schema', schemaPath: '#/properties/%24schema/enum', keyword: 'enum', params: { allowedValues: schema34.properties.$schema.enum }, message: 'must be equal to one of the allowed values', schema: schema34.properties.$schema.enum, parentSchema: schema34.properties.$schema, data: data0 };
				vErrors.push(err6);
				errors++;
			}
		}
		if (data.$id !== undefined) {
			let data1 = data.$id;
			if (typeof data1 === 'string') {
				if (func1(data1) < 1) {
					const err7: ErrorObject = { instancePath: instancePath + '/$id', schemaPath: '#/properties/%24id/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema34.properties.$id, data: data1 };
					vErrors.push(err7);
					errors++;
				}
			} else {
				const err8: ErrorObject = { instancePath: instancePath + '/$id', schemaPath: '#/properties/%24id/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$id.type, parentSchema: schema34.properties.$id, data: data1 };
				vErrors.push(err8);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data2 = data.type;
			if (typeof data2 !== 'string') {
				const err9: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.type.type, parentSchema: schema34.properties.type, data: data2 };
				vErrors.push(err9);
				errors++;
			}
			if ('array' !== data2) {
				const err10: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'array' }, message: 'must be equal to constant', schema: 'array', parentSchema: schema34.properties.type, data: data2 };
				vErrors.push(err10);
				errors++;
			}
		}
		if (data.uniqueItems !== undefined) {
			let data3 = data.uniqueItems;
			if (typeof data3 !== 'boolean') {
				const err11: ErrorObject = { instancePath: instancePath + '/uniqueItems', schemaPath: '#/properties/uniqueItems/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema34.properties.uniqueItems.type, parentSchema: schema34.properties.uniqueItems, data: data3 };
				vErrors.push(err11);
				errors++;
			}
			if (true !== data3) {
				const err12: ErrorObject = { instancePath: instancePath + '/uniqueItems', schemaPath: '#/properties/uniqueItems/const', keyword: 'const', params: { allowedValue: true }, message: 'must be equal to constant', schema: true, parentSchema: schema34.properties.uniqueItems, data: data3 };
				vErrors.push(err12);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data4 = data.$defs;
			if (ajv_utilities__is_probably_object(data4)) {
				if (Object.keys(data4).length < 1) {
					const err13: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema34.properties.$defs, data: data4 };
					vErrors.push(err13);
					errors++;
				}
				for (const key1 in data4) {
					let data5 = data4[key1];
					const _errs14 = errors;
					let valid2 = false;
					let passing0 = null;
					const _errs15 = errors;
					if (ajv_utilities__is_probably_object(data5)) {
						if (data5.type === undefined) {
							const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[0], data: data5 };
							vErrors.push(err14);
							errors++;
						}
						if (data5.type !== undefined) {
							let data6 = data5.type;
							if (typeof data6 === 'string') {
								if (func1(data6) < 1) {
									const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data6 };
									vErrors.push(err15);
									errors++;
								}
							} else {
								const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data6 };
								vErrors.push(err16);
								errors++;
							}
						}
					} else {
						const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[0], data: data5 };
						vErrors.push(err17);
						errors++;
					}
					var _valid0 = _errs15 === errors;
					if (_valid0) {
						valid2 = true;
						passing0 = 0;
						props0 = {};
						props0.type = true;
					}
					const _errs19 = errors;
					if (ajv_utilities__is_probably_object(data5)) {
						if (data5.allOf === undefined) {
							const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1], data: data5 };
							vErrors.push(err18);
							errors++;
						}
						for (const key2 in data5) {
							if (!(key2 === 'allOf')) {
								const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1], data: data5 };
								vErrors.push(err19);
								errors++;
							}
						}
						if (data5.allOf !== undefined) {
							let data7 = data5.allOf;
							if (ajv_utilities__is_probably_array(data7)) {
								if (data7.length < 2) {
									const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data7 };
									vErrors.push(err20);
									errors++;
								}
								const len0 = data7.length;
								for (let i0 = 0; i0 < len0; i0++) {
									let data8 = data7[i0];
									const _errs25 = errors;
									let valid7 = false;
									let passing1 = null;
									const _errs26 = errors;
									if (ajv_utilities__is_probably_object(data8)) {
										if (data8.type === undefined) {
											const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data8 };
											vErrors.push(err21);
											errors++;
										}
										if (data8.type !== undefined) {
											let data9 = data8.type;
											if (typeof data9 === 'string') {
												if (func1(data9) < 1) {
													const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err22);
													errors++;
												}
											} else {
												const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data9 };
												vErrors.push(err23);
												errors++;
											}
										}
									} else {
										const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data8 };
										vErrors.push(err24);
										errors++;
									}
									var _valid1 = _errs26 === errors;
									if (_valid1) {
										valid7 = true;
										passing1 = 0;
										props1 = {};
										props1.type = true;
									}
									const _errs30 = errors;
									if (ajv_utilities__is_probably_object(data8)) {
										if (data8.$ref === undefined) {
											const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data8 };
											vErrors.push(err25);
											errors++;
										}
										for (const key3 in data8) {
											if (!(key3 === '$ref')) {
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data8 };
												vErrors.push(err26);
												errors++;
											}
										}
										if (data8.$ref !== undefined) {
											let data10 = data8.$ref;
											if (typeof data10 === 'string') {
												if (!pattern4.test(data10)) {
													const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err27);
													errors++;
												}
											} else {
												const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data10 };
												vErrors.push(err28);
												errors++;
											}
										}
									} else {
										const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data8 };
										vErrors.push(err29);
										errors++;
									}
									var _valid1 = _errs30 === errors;
									if (_valid1 && valid7) {
										valid7 = false;
										passing1 = [passing1, 1];
									} else {
										if (_valid1) {
											valid7 = true;
											passing1 = 1;
											if (props1 !== true) {
												props1 = true;
											}
										}
									}
									if (!valid7) {
										const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data8 };
										vErrors.push(err30);
										errors++;
									} else {
										errors = _errs25;
										if (vErrors.length) {
											if (_errs25) {
												vErrors.length = _errs25;
											} else {
												vErrors = [];
											}
										}
									}
								}
							} else {
								const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data7 };
								vErrors.push(err31);
								errors++;
							}
						}
					} else {
						const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1], data: data5 };
						vErrors.push(err32);
						errors++;
					}
					var _valid0 = _errs19 === errors;
					if (_valid0 && valid2) {
						valid2 = false;
						passing0 = [passing0, 1];
					} else {
						if (_valid0) {
							valid2 = true;
							passing0 = 1;
							if (props0 !== true) {
								props0 = true;
							}
						}
						const _errs35 = errors;
						if (ajv_utilities__is_probably_object(data5)) {
							if (data5.oneOf === undefined) {
								const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2], data: data5 };
								vErrors.push(err33);
								errors++;
							}
							for (const key4 in data5) {
								if (!(key4 === 'oneOf')) {
									const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2], data: data5 };
									vErrors.push(err34);
									errors++;
								}
							}
							if (data5.oneOf !== undefined) {
								let data11 = data5.oneOf;
								if (ajv_utilities__is_probably_array(data11)) {
									if (data11.length < 2) {
										const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data11 };
										vErrors.push(err35);
										errors++;
									}
									const len1 = data11.length;
									for (let i1 = 0; i1 < len1; i1++) {
										let data12 = data11[i1];
										const _errs41 = errors;
										let valid13 = false;
										let passing2 = null;
										const _errs42 = errors;
										if (ajv_utilities__is_probably_object(data12)) {
											if (data12.type === undefined) {
												const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data12 };
												vErrors.push(err36);
												errors++;
											}
											if (data12.type !== undefined) {
												let data13 = data12.type;
												if (typeof data13 === 'string') {
													if (func1(data13) < 1) {
														const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data13 };
														vErrors.push(err37);
														errors++;
													}
												} else {
													const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data13 };
													vErrors.push(err38);
													errors++;
												}
											}
										} else {
											const err39: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data12 };
											vErrors.push(err39);
											errors++;
										}
										var _valid2 = _errs42 === errors;
										if (_valid2) {
											valid13 = true;
											passing2 = 0;
											props2 = {};
											props2.type = true;
										}
										const _errs46 = errors;
										if (ajv_utilities__is_probably_object(data12)) {
											if (data12.$ref === undefined) {
												const err40: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data12 };
												vErrors.push(err40);
												errors++;
											}
											for (const key5 in data12) {
												if (!(key5 === '$ref')) {
													const err41: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data12 };
													vErrors.push(err41);
													errors++;
												}
											}
											if (data12.$ref !== undefined) {
												let data14 = data12.$ref;
												if (typeof data14 === 'string') {
													if (!pattern4.test(data14)) {
														const err42: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data14 };
														vErrors.push(err42);
														errors++;
													}
												} else {
													const err43: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data14 };
													vErrors.push(err43);
													errors++;
												}
											}
										} else {
											const err44: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data12 };
											vErrors.push(err44);
											errors++;
										}
										var _valid2 = _errs46 === errors;
										if (_valid2 && valid13) {
											valid13 = false;
											passing2 = [passing2, 1];
										} else {
											if (_valid2) {
												valid13 = true;
												passing2 = 1;
												if (props2 !== true) {
													props2 = true;
												}
											}
										}
										if (!valid13) {
											const err45: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data12 };
											vErrors.push(err45);
											errors++;
										} else {
											errors = _errs41;
											if (vErrors.length) {
												if (_errs41) {
													vErrors.length = _errs41;
												} else {
													vErrors = [];
												}
											}
										}
									}
								} else {
									const err46: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data11 };
									vErrors.push(err46);
									errors++;
								}
							}
						} else {
							const err47: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2], data: data5 };
							vErrors.push(err47);
							errors++;
						}
						var _valid0 = _errs35 === errors;
						if (_valid0 && valid2) {
							valid2 = false;
							passing0 = [passing0, 2];
						} else {
							if (_valid0) {
								valid2 = true;
								passing0 = 2;
								if (props0 !== true) {
									props0 = true;
								}
							}
						}
					}
					if (!valid2) {
						const err48: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema34.properties.$defs.additionalProperties.oneOf, parentSchema: schema34.properties.$defs.additionalProperties, data: data5 };
						vErrors.push(err48);
						errors++;
					} else {
						errors = _errs14;
						if (vErrors.length) {
							if (_errs14) {
								vErrors.length = _errs14;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err49: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.type, parentSchema: schema34.properties.$defs, data: data4 };
				vErrors.push(err49);
				errors++;
			}
		}
		if (data.minItems !== undefined) {
			let data15 = data.minItems;
			if (!(((typeof data15 == 'number') && (!(data15 % 1) && !isNaN(data15))) && (isFinite(data15)))) {
				const err50: ErrorObject = { instancePath: instancePath + '/minItems', schemaPath: '#/properties/minItems/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer', schema: schema34.properties.minItems.type, parentSchema: schema34.properties.minItems, data: data15 };
				vErrors.push(err50);
				errors++;
			}
			if ((typeof data15 == 'number') && (isFinite(data15))) {
				if (data15 < 0 || isNaN(data15)) {
					const err51: ErrorObject = { instancePath: instancePath + '/minItems', schemaPath: '#/properties/minItems/minimum', keyword: 'minimum', params: { comparison: '>=', limit: 0 }, message: 'must be >= 0', schema: 0, parentSchema: schema34.properties.minItems, data: data15 };
					vErrors.push(err51);
					errors++;
				}
			}
		}
		if (data.maxItems !== undefined) {
			let data16 = data.maxItems;
			if (!(((typeof data16 == 'number') && (!(data16 % 1) && !isNaN(data16))) && (isFinite(data16)))) {
				const err52: ErrorObject = { instancePath: instancePath + '/maxItems', schemaPath: '#/properties/maxItems/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer', schema: schema34.properties.maxItems.type, parentSchema: schema34.properties.maxItems, data: data16 };
				vErrors.push(err52);
				errors++;
			}
			if ((typeof data16 == 'number') && (isFinite(data16))) {
				if (data16 < 0 || isNaN(data16)) {
					const err53: ErrorObject = { instancePath: instancePath + '/maxItems', schemaPath: '#/properties/maxItems/minimum', keyword: 'minimum', params: { comparison: '>=', limit: 0 }, message: 'must be >= 0', schema: 0, parentSchema: schema34.properties.maxItems, data: data16 };
					vErrors.push(err53);
					errors++;
				}
			}
		}
	} else {
		const err54: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.type, parentSchema: schema34, data };
		vErrors.push(err54);
		errors++;
	}
	(validate23 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate23 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_FlexibleArray__prefixItems = validate24;
const schema35 = { $id: 'docs.json.ts--lib--PropertySchemaToRegex--FlexibleArray--prefixItems', type: 'object', additionalProperties: false, required: ['type', 'items', 'prefixItems'] as const, properties: { $schema: { type: 'string', enum: ['https://json-schema.org/draft/2020-12/schema'] as const }, $id: { type: 'string', minLength: 1 }, type: { type: 'string', const: 'array' }, uniqueItems: { type: 'boolean', const: false }, $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, minItems: { type: 'integer', minimum: 0 }, maxItems: { type: 'integer', minimum: 1 }, items: { type: 'boolean', const: false }, prefixItems: { type: 'array', minItems: 1, items: { type: 'object', minProperties: 1 } } } };
const func6 = { call: (instance: object, property: string) => Object.prototype.hasOwnProperty.call(instance, property) };
function validate24(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is FlexibleArray_type<'prefixItems'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--FlexibleArray--prefixItems" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate24 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema35.required, parentSchema: schema35, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.items === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'items' }, message: 'must have required property \'' + 'items' + '\'', schema: schema35.required, parentSchema: schema35, data };
			vErrors.push(err1);
			errors++;
		}
		if (data.prefixItems === undefined) {
			const err2: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'prefixItems' }, message: 'must have required property \'' + 'prefixItems' + '\'', schema: schema35.required, parentSchema: schema35, data };
			vErrors.push(err2);
			errors++;
		}
		for (const key0 in data) {
			if (!(func6.call(schema35.properties, key0))) {
				const err3: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema35, data };
				vErrors.push(err3);
				errors++;
			}
		}
		if (data.$schema !== undefined) {
			let data0 = data.$schema;
			if (typeof data0 !== 'string') {
				const err4: ErrorObject = { instancePath: instancePath + '/$schema', schemaPath: '#/properties/%24schema/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$schema.type, parentSchema: schema35.properties.$schema, data: data0 };
				vErrors.push(err4);
				errors++;
			}
			if (!(data0 === 'https://json-schema.org/draft/2020-12/schema')) {
				const err5: ErrorObject = { instancePath: instancePath + '/$schema', schemaPath: '#/properties/%24schema/enum', keyword: 'enum', params: { allowedValues: schema35.properties.$schema.enum }, message: 'must be equal to one of the allowed values', schema: schema35.properties.$schema.enum, parentSchema: schema35.properties.$schema, data: data0 };
				vErrors.push(err5);
				errors++;
			}
		}
		if (data.$id !== undefined) {
			let data1 = data.$id;
			if (typeof data1 === 'string') {
				if (func1(data1) < 1) {
					const err6: ErrorObject = { instancePath: instancePath + '/$id', schemaPath: '#/properties/%24id/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema35.properties.$id, data: data1 };
					vErrors.push(err6);
					errors++;
				}
			} else {
				const err7: ErrorObject = { instancePath: instancePath + '/$id', schemaPath: '#/properties/%24id/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$id.type, parentSchema: schema35.properties.$id, data: data1 };
				vErrors.push(err7);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data2 = data.type;
			if (typeof data2 !== 'string') {
				const err8: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.type.type, parentSchema: schema35.properties.type, data: data2 };
				vErrors.push(err8);
				errors++;
			}
			if ('array' !== data2) {
				const err9: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'array' }, message: 'must be equal to constant', schema: 'array', parentSchema: schema35.properties.type, data: data2 };
				vErrors.push(err9);
				errors++;
			}
		}
		if (data.uniqueItems !== undefined) {
			let data3 = data.uniqueItems;
			if (typeof data3 !== 'boolean') {
				const err10: ErrorObject = { instancePath: instancePath + '/uniqueItems', schemaPath: '#/properties/uniqueItems/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema35.properties.uniqueItems.type, parentSchema: schema35.properties.uniqueItems, data: data3 };
				vErrors.push(err10);
				errors++;
			}
			if (false !== data3) {
				const err11: ErrorObject = { instancePath: instancePath + '/uniqueItems', schemaPath: '#/properties/uniqueItems/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema35.properties.uniqueItems, data: data3 };
				vErrors.push(err11);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data4 = data.$defs;
			if (ajv_utilities__is_probably_object(data4)) {
				if (Object.keys(data4).length < 1) {
					const err12: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema35.properties.$defs, data: data4 };
					vErrors.push(err12);
					errors++;
				}
				for (const key1 in data4) {
					let data5 = data4[key1];
					const _errs14 = errors;
					let valid2 = false;
					let passing0 = null;
					const _errs15 = errors;
					if (ajv_utilities__is_probably_object(data5)) {
						if (data5.type === undefined) {
							const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[0], data: data5 };
							vErrors.push(err13);
							errors++;
						}
						if (data5.type !== undefined) {
							let data6 = data5.type;
							if (typeof data6 === 'string') {
								if (func1(data6) < 1) {
									const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data6 };
									vErrors.push(err14);
									errors++;
								}
							} else {
								const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data6 };
								vErrors.push(err15);
								errors++;
							}
						}
					} else {
						const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[0], data: data5 };
						vErrors.push(err16);
						errors++;
					}
					var _valid0 = _errs15 === errors;
					if (_valid0) {
						valid2 = true;
						passing0 = 0;
						props0 = {};
						props0.type = true;
					}
					const _errs19 = errors;
					if (ajv_utilities__is_probably_object(data5)) {
						if (data5.allOf === undefined) {
							const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1], data: data5 };
							vErrors.push(err17);
							errors++;
						}
						for (const key2 in data5) {
							if (!(key2 === 'allOf')) {
								const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1], data: data5 };
								vErrors.push(err18);
								errors++;
							}
						}
						if (data5.allOf !== undefined) {
							let data7 = data5.allOf;
							if (ajv_utilities__is_probably_array(data7)) {
								if (data7.length < 2) {
									const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data7 };
									vErrors.push(err19);
									errors++;
								}
								const len0 = data7.length;
								for (let i0 = 0; i0 < len0; i0++) {
									let data8 = data7[i0];
									const _errs25 = errors;
									let valid7 = false;
									let passing1 = null;
									const _errs26 = errors;
									if (ajv_utilities__is_probably_object(data8)) {
										if (data8.type === undefined) {
											const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data8 };
											vErrors.push(err20);
											errors++;
										}
										if (data8.type !== undefined) {
											let data9 = data8.type;
											if (typeof data9 === 'string') {
												if (func1(data9) < 1) {
													const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err21);
													errors++;
												}
											} else {
												const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data9 };
												vErrors.push(err22);
												errors++;
											}
										}
									} else {
										const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data8 };
										vErrors.push(err23);
										errors++;
									}
									var _valid1 = _errs26 === errors;
									if (_valid1) {
										valid7 = true;
										passing1 = 0;
										props1 = {};
										props1.type = true;
									}
									const _errs30 = errors;
									if (ajv_utilities__is_probably_object(data8)) {
										if (data8.$ref === undefined) {
											const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data8 };
											vErrors.push(err24);
											errors++;
										}
										for (const key3 in data8) {
											if (!(key3 === '$ref')) {
												const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data8 };
												vErrors.push(err25);
												errors++;
											}
										}
										if (data8.$ref !== undefined) {
											let data10 = data8.$ref;
											if (typeof data10 === 'string') {
												if (!pattern4.test(data10)) {
													const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err26);
													errors++;
												}
											} else {
												const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data10 };
												vErrors.push(err27);
												errors++;
											}
										}
									} else {
										const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data8 };
										vErrors.push(err28);
										errors++;
									}
									var _valid1 = _errs30 === errors;
									if (_valid1 && valid7) {
										valid7 = false;
										passing1 = [passing1, 1];
									} else {
										if (_valid1) {
											valid7 = true;
											passing1 = 1;
											if (props1 !== true) {
												props1 = true;
											}
										}
									}
									if (!valid7) {
										const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data8 };
										vErrors.push(err29);
										errors++;
									} else {
										errors = _errs25;
										if (vErrors.length) {
											if (_errs25) {
												vErrors.length = _errs25;
											} else {
												vErrors = [];
											}
										}
									}
								}
							} else {
								const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data7 };
								vErrors.push(err30);
								errors++;
							}
						}
					} else {
						const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1], data: data5 };
						vErrors.push(err31);
						errors++;
					}
					var _valid0 = _errs19 === errors;
					if (_valid0 && valid2) {
						valid2 = false;
						passing0 = [passing0, 1];
					} else {
						if (_valid0) {
							valid2 = true;
							passing0 = 1;
							if (props0 !== true) {
								props0 = true;
							}
						}
						const _errs35 = errors;
						if (ajv_utilities__is_probably_object(data5)) {
							if (data5.oneOf === undefined) {
								const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2], data: data5 };
								vErrors.push(err32);
								errors++;
							}
							for (const key4 in data5) {
								if (!(key4 === 'oneOf')) {
									const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2], data: data5 };
									vErrors.push(err33);
									errors++;
								}
							}
							if (data5.oneOf !== undefined) {
								let data11 = data5.oneOf;
								if (ajv_utilities__is_probably_array(data11)) {
									if (data11.length < 2) {
										const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data11 };
										vErrors.push(err34);
										errors++;
									}
									const len1 = data11.length;
									for (let i1 = 0; i1 < len1; i1++) {
										let data12 = data11[i1];
										const _errs41 = errors;
										let valid13 = false;
										let passing2 = null;
										const _errs42 = errors;
										if (ajv_utilities__is_probably_object(data12)) {
											if (data12.type === undefined) {
												const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data12 };
												vErrors.push(err35);
												errors++;
											}
											if (data12.type !== undefined) {
												let data13 = data12.type;
												if (typeof data13 === 'string') {
													if (func1(data13) < 1) {
														const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data13 };
														vErrors.push(err36);
														errors++;
													}
												} else {
													const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data13 };
													vErrors.push(err37);
													errors++;
												}
											}
										} else {
											const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data12 };
											vErrors.push(err38);
											errors++;
										}
										var _valid2 = _errs42 === errors;
										if (_valid2) {
											valid13 = true;
											passing2 = 0;
											props2 = {};
											props2.type = true;
										}
										const _errs46 = errors;
										if (ajv_utilities__is_probably_object(data12)) {
											if (data12.$ref === undefined) {
												const err39: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data12 };
												vErrors.push(err39);
												errors++;
											}
											for (const key5 in data12) {
												if (!(key5 === '$ref')) {
													const err40: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data12 };
													vErrors.push(err40);
													errors++;
												}
											}
											if (data12.$ref !== undefined) {
												let data14 = data12.$ref;
												if (typeof data14 === 'string') {
													if (!pattern4.test(data14)) {
														const err41: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data14 };
														vErrors.push(err41);
														errors++;
													}
												} else {
													const err42: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data14 };
													vErrors.push(err42);
													errors++;
												}
											}
										} else {
											const err43: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data12 };
											vErrors.push(err43);
											errors++;
										}
										var _valid2 = _errs46 === errors;
										if (_valid2 && valid13) {
											valid13 = false;
											passing2 = [passing2, 1];
										} else {
											if (_valid2) {
												valid13 = true;
												passing2 = 1;
												if (props2 !== true) {
													props2 = true;
												}
											}
										}
										if (!valid13) {
											const err44: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data12 };
											vErrors.push(err44);
											errors++;
										} else {
											errors = _errs41;
											if (vErrors.length) {
												if (_errs41) {
													vErrors.length = _errs41;
												} else {
													vErrors = [];
												}
											}
										}
									}
								} else {
									const err45: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data11 };
									vErrors.push(err45);
									errors++;
								}
							}
						} else {
							const err46: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2], data: data5 };
							vErrors.push(err46);
							errors++;
						}
						var _valid0 = _errs35 === errors;
						if (_valid0 && valid2) {
							valid2 = false;
							passing0 = [passing0, 2];
						} else {
							if (_valid0) {
								valid2 = true;
								passing0 = 2;
								if (props0 !== true) {
									props0 = true;
								}
							}
						}
					}
					if (!valid2) {
						const err47: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema35.properties.$defs.additionalProperties.oneOf, parentSchema: schema35.properties.$defs.additionalProperties, data: data5 };
						vErrors.push(err47);
						errors++;
					} else {
						errors = _errs14;
						if (vErrors.length) {
							if (_errs14) {
								vErrors.length = _errs14;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err48: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.type, parentSchema: schema35.properties.$defs, data: data4 };
				vErrors.push(err48);
				errors++;
			}
		}
		if (data.minItems !== undefined) {
			let data15 = data.minItems;
			if (!(((typeof data15 == 'number') && (!(data15 % 1) && !isNaN(data15))) && (isFinite(data15)))) {
				const err49: ErrorObject = { instancePath: instancePath + '/minItems', schemaPath: '#/properties/minItems/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer', schema: schema35.properties.minItems.type, parentSchema: schema35.properties.minItems, data: data15 };
				vErrors.push(err49);
				errors++;
			}
			if ((typeof data15 == 'number') && (isFinite(data15))) {
				if (data15 < 0 || isNaN(data15)) {
					const err50: ErrorObject = { instancePath: instancePath + '/minItems', schemaPath: '#/properties/minItems/minimum', keyword: 'minimum', params: { comparison: '>=', limit: 0 }, message: 'must be >= 0', schema: 0, parentSchema: schema35.properties.minItems, data: data15 };
					vErrors.push(err50);
					errors++;
				}
			}
		}
		if (data.maxItems !== undefined) {
			let data16 = data.maxItems;
			if (!(((typeof data16 == 'number') && (!(data16 % 1) && !isNaN(data16))) && (isFinite(data16)))) {
				const err51: ErrorObject = { instancePath: instancePath + '/maxItems', schemaPath: '#/properties/maxItems/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer', schema: schema35.properties.maxItems.type, parentSchema: schema35.properties.maxItems, data: data16 };
				vErrors.push(err51);
				errors++;
			}
			if ((typeof data16 == 'number') && (isFinite(data16))) {
				if (data16 < 1 || isNaN(data16)) {
					const err52: ErrorObject = { instancePath: instancePath + '/maxItems', schemaPath: '#/properties/maxItems/minimum', keyword: 'minimum', params: { comparison: '>=', limit: 1 }, message: 'must be >= 1', schema: 1, parentSchema: schema35.properties.maxItems, data: data16 };
					vErrors.push(err52);
					errors++;
				}
			}
		}
		if (data.items !== undefined) {
			let data17 = data.items;
			if (typeof data17 !== 'boolean') {
				const err53: ErrorObject = { instancePath: instancePath + '/items', schemaPath: '#/properties/items/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema35.properties.items.type, parentSchema: schema35.properties.items, data: data17 };
				vErrors.push(err53);
				errors++;
			}
			if (false !== data17) {
				const err54: ErrorObject = { instancePath: instancePath + '/items', schemaPath: '#/properties/items/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema35.properties.items, data: data17 };
				vErrors.push(err54);
				errors++;
			}
		}
		if (data.prefixItems !== undefined) {
			let data18 = data.prefixItems;
			if (ajv_utilities__is_probably_array(data18)) {
				if (data18.length < 1) {
					const err55: ErrorObject = { instancePath: instancePath + '/prefixItems', schemaPath: '#/properties/prefixItems/minItems', keyword: 'minItems', params: { limit: 1 }, message: 'must NOT have fewer than 1 items', schema: 1, parentSchema: schema35.properties.prefixItems, data: data18 };
					vErrors.push(err55);
					errors++;
				}
				const len2 = data18.length;
				for (let i2 = 0; i2 < len2; i2++) {
					let data19 = data18[i2];
					if (ajv_utilities__is_probably_object(data19)) {
						if (Object.keys(data19).length < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/prefixItems/' + i2, schemaPath: '#/properties/prefixItems/items/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema35.properties.prefixItems.items, data: data19 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/prefixItems/' + i2, schemaPath: '#/properties/prefixItems/items/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.prefixItems.items.type, parentSchema: schema35.properties.prefixItems.items, data: data19 };
						vErrors.push(err57);
						errors++;
					}
				}
			} else {
				const err58: ErrorObject = { instancePath: instancePath + '/prefixItems', schemaPath: '#/properties/prefixItems/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema35.properties.prefixItems.type, parentSchema: schema35.properties.prefixItems, data: data18 };
				vErrors.push(err58);
				errors++;
			}
		}
	} else {
		const err59: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.type, parentSchema: schema35, data };
		vErrors.push(err59);
		errors++;
	}
	(validate24 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate24 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PatternString = validate25;
const schema36 = { $schema: 'https://json-schema.org/draft/2020-12/schema', $id: 'docs.json.ts--lib--PropertySchemaToRegex--PatternString', type: 'object', additionalProperties: false, required: ['type', 'pattern'] as const, properties: { type: { type: 'string', const: 'string' }, pattern: { type: 'string', pattern: '^\\^.+\\$$' } } };
const pattern8 = new RegExp('^\\^.+\\$$', 'u');
function validate25(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PatternString_type {
	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--PatternString" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate25 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema36.required, parentSchema: schema36, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.pattern === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'pattern' }, message: 'must have required property \'' + 'pattern' + '\'', schema: schema36.required, parentSchema: schema36, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!((key0 === 'type') || (key0 === 'pattern'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema36, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data0 = data.type;
			if (typeof data0 !== 'string') {
				const err3: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.type.type, parentSchema: schema36.properties.type, data: data0 };
				vErrors.push(err3);
				errors++;
			}
			if ('string' !== data0) {
				const err4: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema36.properties.type, data: data0 };
				vErrors.push(err4);
				errors++;
			}
		}
		if (data.pattern !== undefined) {
			let data1 = data.pattern;
			if (typeof data1 === 'string') {
				if (!pattern8.test(data1)) {
					const err5: ErrorObject = { instancePath: instancePath + '/pattern', schemaPath: '#/properties/pattern/pattern', keyword: 'pattern', params: { pattern: '^\\^.+\\$$' }, message: 'must match pattern "' + '^\\^.+\\$$' + '"', schema: '^\\^.+\\$$', parentSchema: schema36.properties.pattern, data: data1 };
					vErrors.push(err5);
					errors++;
				}
			} else {
				const err6: ErrorObject = { instancePath: instancePath + '/pattern', schemaPath: '#/properties/pattern/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.pattern.type, parentSchema: schema36.properties.pattern, data: data1 };
				vErrors.push(err6);
				errors++;
			}
		}
	} else {
		const err7: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema36.type, parentSchema: schema36, data };
		vErrors.push(err7);
		errors++;
	}
	(validate25 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate25 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_TypedString_object = validate26;
const schema37 = { $id: 'docs.json.ts--lib--PropertySchemaToRegex--TypedString--object', type: 'object', additionalProperties: false, required: ['type', 'typed_string'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, typed_string: { type: 'object', required: ['type', 'properties'] as const, additionalProperties: false, properties: { $schema: { type: 'string', enum: ['https://json-schema.org/draft/2020-12/schema'] as const }, $id: { type: 'string', minLength: 1 }, $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'object' }, $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, additionalProperties: { type: 'boolean' }, unevaluatedProperties: { type: 'boolean' }, required: { type: 'array', minItems: 1, items: { type: 'string', minLength: 1 } }, properties: { type: 'object', minProperties: 1, additionalProperties: { type: 'object' } } } } } };
function validate26(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is TypedString_Object_type {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined,
		props3: (true | {
			type?: true,
		} | undefined) = undefined,
		props4: (true | {
			type?: true,
		} | undefined) = undefined,
		props5: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--TypedString--object" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate26 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema37.required, parentSchema: schema37, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.typed_string === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'typed_string' }, message: 'must have required property \'' + 'typed_string' + '\'', schema: schema37.required, parentSchema: schema37, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'typed_string'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema37, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema37.properties.$defs, data: data0 };
					vErrors.push(err3);
					errors++;
				}
				for (const key1 in data0) {
					let data1 = data0[key1];
					const _errs6 = errors;
					let valid2 = false;
					let passing0 = null;
					const _errs7 = errors;
					if (ajv_utilities__is_probably_object(data1)) {
						if (data1.type === undefined) {
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema37.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[0], data: data1 };
						vErrors.push(err7);
						errors++;
					}
					var _valid0 = _errs7 === errors;
					if (_valid0) {
						valid2 = true;
						passing0 = 0;
						props0 = {};
						props0.type = true;
					}
					const _errs11 = errors;
					if (ajv_utilities__is_probably_object(data1)) {
						if (data1.allOf === undefined) {
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema37.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
									vErrors.push(err10);
									errors++;
								}
								const len0 = data3.length;
								for (let i0 = 0; i0 < len0; i0++) {
									let data4 = data3[i0];
									const _errs17 = errors;
									let valid7 = false;
									let passing1 = null;
									const _errs18 = errors;
									if (ajv_utilities__is_probably_object(data4)) {
										if (data4.type === undefined) {
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
										vErrors.push(err14);
										errors++;
									}
									var _valid1 = _errs18 === errors;
									if (_valid1) {
										valid7 = true;
										passing1 = 0;
										props1 = {};
										props1.type = true;
									}
									const _errs22 = errors;
									if (ajv_utilities__is_probably_object(data4)) {
										if (data4.$ref === undefined) {
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
										vErrors.push(err19);
										errors++;
									}
									var _valid1 = _errs22 === errors;
									if (_valid1 && valid7) {
										valid7 = false;
										passing1 = [passing1, 1];
									} else {
										if (_valid1) {
											valid7 = true;
											passing1 = 1;
											if (props1 !== true) {
												props1 = true;
											}
										}
									}
									if (!valid7) {
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
										vErrors.push(err20);
										errors++;
									} else {
										errors = _errs17;
										if (vErrors.length) {
											if (_errs17) {
												vErrors.length = _errs17;
											} else {
												vErrors = [];
											}
										}
									}
								}
							} else {
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[1], data: data1 };
						vErrors.push(err22);
						errors++;
					}
					var _valid0 = _errs11 === errors;
					if (_valid0 && valid2) {
						valid2 = false;
						passing0 = [passing0, 1];
					} else {
						if (_valid0) {
							valid2 = true;
							passing0 = 1;
							if (props0 !== true) {
								props0 = true;
							}
						}
						const _errs27 = errors;
						if (ajv_utilities__is_probably_object(data1)) {
							if (data1.oneOf === undefined) {
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema37.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
										vErrors.push(err25);
										errors++;
									}
									const len1 = data7.length;
									for (let i1 = 0; i1 < len1; i1++) {
										let data8 = data7[i1];
										const _errs33 = errors;
										let valid13 = false;
										let passing2 = null;
										const _errs34 = errors;
										if (ajv_utilities__is_probably_object(data8)) {
											if (data8.type === undefined) {
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
											vErrors.push(err29);
											errors++;
										}
										var _valid2 = _errs34 === errors;
										if (_valid2) {
											valid13 = true;
											passing2 = 0;
											props2 = {};
											props2.type = true;
										}
										const _errs38 = errors;
										if (ajv_utilities__is_probably_object(data8)) {
											if (data8.$ref === undefined) {
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
											vErrors.push(err34);
											errors++;
										}
										var _valid2 = _errs38 === errors;
										if (_valid2 && valid13) {
											valid13 = false;
											passing2 = [passing2, 1];
										} else {
											if (_valid2) {
												valid13 = true;
												passing2 = 1;
												if (props2 !== true) {
													props2 = true;
												}
											}
										}
										if (!valid13) {
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
											vErrors.push(err35);
											errors++;
										} else {
											errors = _errs33;
											if (vErrors.length) {
												if (_errs33) {
													vErrors.length = _errs33;
												} else {
													vErrors = [];
												}
											}
										}
									}
								} else {
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema37.properties.$defs.additionalProperties.oneOf[2], data: data1 };
							vErrors.push(err37);
							errors++;
						}
						var _valid0 = _errs27 === errors;
						if (_valid0 && valid2) {
							valid2 = false;
							passing0 = [passing0, 2];
						} else {
							if (_valid0) {
								valid2 = true;
								passing0 = 2;
								if (props0 !== true) {
									props0 = true;
								}
							}
						}
					}
					if (!valid2) {
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema37.properties.$defs.additionalProperties.oneOf, parentSchema: schema37.properties.$defs.additionalProperties, data: data1 };
						vErrors.push(err38);
						errors++;
					} else {
						errors = _errs6;
						if (vErrors.length) {
							if (_errs6) {
								vErrors.length = _errs6;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.$defs.type, parentSchema: schema37.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.type.type, parentSchema: schema37.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema37.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.typed_string !== undefined) {
			let data12 = data.typed_string;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.type === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/typed_string', schemaPath: '#/properties/typed_string/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema37.properties.typed_string.required, parentSchema: schema37.properties.typed_string, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.properties === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/typed_string', schemaPath: '#/properties/typed_string/required', keyword: 'required', params: { missingProperty: 'properties' }, message: 'must have required property \'' + 'properties' + '\'', schema: schema37.properties.typed_string.required, parentSchema: schema37.properties.typed_string, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				for (const key6 in data12) {
					if (!(func6.call(schema37.properties.typed_string.properties, key6))) {
						const err44: ErrorObject = { instancePath: instancePath + '/typed_string', schemaPath: '#/properties/typed_string/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema37.properties.typed_string, data: data12 };
						vErrors.push(err44);
						errors++;
					}
				}
				if (data12.$schema !== undefined) {
					let data13 = data12.$schema;
					if (typeof data13 !== 'string') {
						const err45: ErrorObject = { instancePath: instancePath + '/typed_string/$schema', schemaPath: '#/properties/typed_string/properties/%24schema/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.typed_string.properties.$schema.type, parentSchema: schema37.properties.typed_string.properties.$schema, data: data13 };
						vErrors.push(err45);
						errors++;
					}
					if (!(data13 === 'https://json-schema.org/draft/2020-12/schema')) {
						const err46: ErrorObject = { instancePath: instancePath + '/typed_string/$schema', schemaPath: '#/properties/typed_string/properties/%24schema/enum', keyword: 'enum', params: { allowedValues: schema37.properties.typed_string.properties.$schema.enum }, message: 'must be equal to one of the allowed values', schema: schema37.properties.typed_string.properties.$schema.enum, parentSchema: schema37.properties.typed_string.properties.$schema, data: data13 };
						vErrors.push(err46);
						errors++;
					}
				}
				if (data12.$id !== undefined) {
					let data14 = data12.$id;
					if (typeof data14 === 'string') {
						if (func1(data14) < 1) {
							const err47: ErrorObject = { instancePath: instancePath + '/typed_string/$id', schemaPath: '#/properties/typed_string/properties/%24id/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.typed_string.properties.$id, data: data14 };
							vErrors.push(err47);
							errors++;
						}
					} else {
						const err48: ErrorObject = { instancePath: instancePath + '/typed_string/$id', schemaPath: '#/properties/typed_string/properties/%24id/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.typed_string.properties.$id.type, parentSchema: schema37.properties.typed_string.properties.$id, data: data14 };
						vErrors.push(err48);
						errors++;
					}
				}
				if (data12.$defs !== undefined) {
					let data15 = data12.$defs;
					if (ajv_utilities__is_probably_object(data15)) {
						if (Object.keys(data15).length < 1) {
							const err49: ErrorObject = { instancePath: instancePath + '/typed_string/$defs', schemaPath: '#/properties/typed_string/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema37.properties.typed_string.properties.$defs, data: data15 };
							vErrors.push(err49);
							errors++;
						}
						for (const key7 in data15) {
							let data16 = data15[key7];
							const _errs56 = errors;
							let valid18 = false;
							let passing3 = null;
							const _errs57 = errors;
							if (ajv_utilities__is_probably_object(data16)) {
								if (data16.type === undefined) {
									const err50: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[0], data: data16 };
									vErrors.push(err50);
									errors++;
								}
								if (data16.type !== undefined) {
									let data17 = data16.type;
									if (typeof data17 === 'string') {
										if (func1(data17) < 1) {
											const err51: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data17 };
											vErrors.push(err51);
											errors++;
										}
									} else {
										const err52: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data17 };
										vErrors.push(err52);
										errors++;
									}
								}
							} else {
								const err53: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[0], data: data16 };
								vErrors.push(err53);
								errors++;
							}
							var _valid3 = _errs57 === errors;
							if (_valid3) {
								valid18 = true;
								passing3 = 0;
								props3 = {};
								props3.type = true;
							}
							const _errs61 = errors;
							if (ajv_utilities__is_probably_object(data16)) {
								if (data16.allOf === undefined) {
									const err54: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1], data: data16 };
									vErrors.push(err54);
									errors++;
								}
								for (const key8 in data16) {
									if (!(key8 === 'allOf')) {
										const err55: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key8 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1], data: data16 };
										vErrors.push(err55);
										errors++;
									}
								}
								if (data16.allOf !== undefined) {
									let data18 = data16.allOf;
									if (ajv_utilities__is_probably_array(data18)) {
										if (data18.length < 2) {
											const err56: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data18 };
											vErrors.push(err56);
											errors++;
										}
										const len2 = data18.length;
										for (let i2 = 0; i2 < len2; i2++) {
											let data19 = data18[i2];
											const _errs67 = errors;
											let valid23 = false;
											let passing4 = null;
											const _errs68 = errors;
											if (ajv_utilities__is_probably_object(data19)) {
												if (data19.type === undefined) {
													const err57: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data19 };
													vErrors.push(err57);
													errors++;
												}
												if (data19.type !== undefined) {
													let data20 = data19.type;
													if (typeof data20 === 'string') {
														if (func1(data20) < 1) {
															const err58: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2 + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data20 };
															vErrors.push(err58);
															errors++;
														}
													} else {
														const err59: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2 + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data20 };
														vErrors.push(err59);
														errors++;
													}
												}
											} else {
												const err60: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data19 };
												vErrors.push(err60);
												errors++;
											}
											var _valid4 = _errs68 === errors;
											if (_valid4) {
												valid23 = true;
												passing4 = 0;
												props4 = {};
												props4.type = true;
											}
											const _errs72 = errors;
											if (ajv_utilities__is_probably_object(data19)) {
												if (data19.$ref === undefined) {
													const err61: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data19 };
													vErrors.push(err61);
													errors++;
												}
												for (const key9 in data19) {
													if (!(key9 === '$ref')) {
														const err62: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key9 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data19 };
														vErrors.push(err62);
														errors++;
													}
												}
												if (data19.$ref !== undefined) {
													let data21 = data19.$ref;
													if (typeof data21 === 'string') {
														if (!pattern4.test(data21)) {
															const err63: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2 + '/$ref', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data21 };
															vErrors.push(err63);
															errors++;
														}
													} else {
														const err64: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2 + '/$ref', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data21 };
														vErrors.push(err64);
														errors++;
													}
												}
											} else {
												const err65: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data19 };
												vErrors.push(err65);
												errors++;
											}
											var _valid4 = _errs72 === errors;
											if (_valid4 && valid23) {
												valid23 = false;
												passing4 = [passing4, 1];
											} else {
												if (_valid4) {
													valid23 = true;
													passing4 = 1;
													if (props4 !== true) {
														props4 = true;
													}
												}
											}
											if (!valid23) {
												const err66: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data19 };
												vErrors.push(err66);
												errors++;
											} else {
												errors = _errs67;
												if (vErrors.length) {
													if (_errs67) {
														vErrors.length = _errs67;
													} else {
														vErrors = [];
													}
												}
											}
										}
									} else {
										const err67: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data18 };
										vErrors.push(err67);
										errors++;
									}
								}
							} else {
								const err68: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[1], data: data16 };
								vErrors.push(err68);
								errors++;
							}
							var _valid3 = _errs61 === errors;
							if (_valid3 && valid18) {
								valid18 = false;
								passing3 = [passing3, 1];
							} else {
								if (_valid3) {
									valid18 = true;
									passing3 = 1;
									if (props3 !== true) {
										props3 = true;
									}
								}
								const _errs77 = errors;
								if (ajv_utilities__is_probably_object(data16)) {
									if (data16.oneOf === undefined) {
										const err69: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2], data: data16 };
										vErrors.push(err69);
										errors++;
									}
									for (const key10 in data16) {
										if (!(key10 === 'oneOf')) {
											const err70: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key10 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2], data: data16 };
											vErrors.push(err70);
											errors++;
										}
									}
									if (data16.oneOf !== undefined) {
										let data22 = data16.oneOf;
										if (ajv_utilities__is_probably_array(data22)) {
											if (data22.length < 2) {
												const err71: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data22 };
												vErrors.push(err71);
												errors++;
											}
											const len3 = data22.length;
											for (let i3 = 0; i3 < len3; i3++) {
												let data23 = data22[i3];
												const _errs83 = errors;
												let valid29 = false;
												let passing5 = null;
												const _errs84 = errors;
												if (ajv_utilities__is_probably_object(data23)) {
													if (data23.type === undefined) {
														const err72: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data23 };
														vErrors.push(err72);
														errors++;
													}
													if (data23.type !== undefined) {
														let data24 = data23.type;
														if (typeof data24 === 'string') {
															if (func1(data24) < 1) {
																const err73: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3 + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data24 };
																vErrors.push(err73);
																errors++;
															}
														} else {
															const err74: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3 + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data24 };
															vErrors.push(err74);
															errors++;
														}
													}
												} else {
													const err75: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data23 };
													vErrors.push(err75);
													errors++;
												}
												var _valid5 = _errs84 === errors;
												if (_valid5) {
													valid29 = true;
													passing5 = 0;
													props5 = {};
													props5.type = true;
												}
												const _errs88 = errors;
												if (ajv_utilities__is_probably_object(data23)) {
													if (data23.$ref === undefined) {
														const err76: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data23 };
														vErrors.push(err76);
														errors++;
													}
													for (const key11 in data23) {
														if (!(key11 === '$ref')) {
															const err77: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key11 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data23 };
															vErrors.push(err77);
															errors++;
														}
													}
													if (data23.$ref !== undefined) {
														let data25 = data23.$ref;
														if (typeof data25 === 'string') {
															if (!pattern4.test(data25)) {
																const err78: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3 + '/$ref', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data25 };
																vErrors.push(err78);
																errors++;
															}
														} else {
															const err79: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3 + '/$ref', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data25 };
															vErrors.push(err79);
															errors++;
														}
													}
												} else {
													const err80: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data23 };
													vErrors.push(err80);
													errors++;
												}
												var _valid5 = _errs88 === errors;
												if (_valid5 && valid29) {
													valid29 = false;
													passing5 = [passing5, 1];
												} else {
													if (_valid5) {
														valid29 = true;
														passing5 = 1;
														if (props5 !== true) {
															props5 = true;
														}
													}
												}
												if (!valid29) {
													const err81: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing5 }, message: 'must match exactly one schema in oneOf', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data23 };
													vErrors.push(err81);
													errors++;
												} else {
													errors = _errs83;
													if (vErrors.length) {
														if (_errs83) {
															vErrors.length = _errs83;
														} else {
															vErrors = [];
														}
													}
												}
											}
										} else {
											const err82: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data22 };
											vErrors.push(err82);
											errors++;
										}
									}
								} else {
									const err83: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf[2], data: data16 };
									vErrors.push(err83);
									errors++;
								}
								var _valid3 = _errs77 === errors;
								if (_valid3 && valid18) {
									valid18 = false;
									passing3 = [passing3, 2];
								} else {
									if (_valid3) {
										valid18 = true;
										passing3 = 2;
										if (props3 !== true) {
											props3 = true;
										}
									}
								}
							}
							if (!valid18) {
								const err84: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema37.properties.typed_string.properties.$defs.additionalProperties.oneOf, parentSchema: schema37.properties.typed_string.properties.$defs.additionalProperties, data: data16 };
								vErrors.push(err84);
								errors++;
							} else {
								errors = _errs56;
								if (vErrors.length) {
									if (_errs56) {
										vErrors.length = _errs56;
									} else {
										vErrors = [];
									}
								}
							}
						}
					} else {
						const err85: ErrorObject = { instancePath: instancePath + '/typed_string/$defs', schemaPath: '#/properties/typed_string/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.typed_string.properties.$defs.type, parentSchema: schema37.properties.typed_string.properties.$defs, data: data15 };
						vErrors.push(err85);
						errors++;
					}
				}
				if (data12.type !== undefined) {
					let data26 = data12.type;
					if (typeof data26 !== 'string') {
						const err86: ErrorObject = { instancePath: instancePath + '/typed_string/type', schemaPath: '#/properties/typed_string/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.typed_string.properties.type.type, parentSchema: schema37.properties.typed_string.properties.type, data: data26 };
						vErrors.push(err86);
						errors++;
					}
					if ('object' !== data26) {
						const err87: ErrorObject = { instancePath: instancePath + '/typed_string/type', schemaPath: '#/properties/typed_string/properties/type/const', keyword: 'const', params: { allowedValue: 'object' }, message: 'must be equal to constant', schema: 'object', parentSchema: schema37.properties.typed_string.properties.type, data: data26 };
						vErrors.push(err87);
						errors++;
					}
				}
				if (data12.$ref !== undefined) {
					let data27 = data12.$ref;
					if (typeof data27 === 'string') {
						if (!pattern4.test(data27)) {
							const err88: ErrorObject = { instancePath: instancePath + '/typed_string/$ref', schemaPath: '#/properties/typed_string/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema37.properties.typed_string.properties.$ref, data: data27 };
							vErrors.push(err88);
							errors++;
						}
					} else {
						const err89: ErrorObject = { instancePath: instancePath + '/typed_string/$ref', schemaPath: '#/properties/typed_string/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.typed_string.properties.$ref.type, parentSchema: schema37.properties.typed_string.properties.$ref, data: data27 };
						vErrors.push(err89);
						errors++;
					}
				}
				if (data12.additionalProperties !== undefined) {
					let data28 = data12.additionalProperties;
					if (typeof data28 !== 'boolean') {
						const err90: ErrorObject = { instancePath: instancePath + '/typed_string/additionalProperties', schemaPath: '#/properties/typed_string/properties/additionalProperties/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema37.properties.typed_string.properties.additionalProperties.type, parentSchema: schema37.properties.typed_string.properties.additionalProperties, data: data28 };
						vErrors.push(err90);
						errors++;
					}
				}
				if (data12.unevaluatedProperties !== undefined) {
					let data29 = data12.unevaluatedProperties;
					if (typeof data29 !== 'boolean') {
						const err91: ErrorObject = { instancePath: instancePath + '/typed_string/unevaluatedProperties', schemaPath: '#/properties/typed_string/properties/unevaluatedProperties/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema37.properties.typed_string.properties.unevaluatedProperties.type, parentSchema: schema37.properties.typed_string.properties.unevaluatedProperties, data: data29 };
						vErrors.push(err91);
						errors++;
					}
				}
				if (data12.required !== undefined) {
					let data30 = data12.required;
					if (ajv_utilities__is_probably_array(data30)) {
						if (data30.length < 1) {
							const err92: ErrorObject = { instancePath: instancePath + '/typed_string/required', schemaPath: '#/properties/typed_string/properties/required/minItems', keyword: 'minItems', params: { limit: 1 }, message: 'must NOT have fewer than 1 items', schema: 1, parentSchema: schema37.properties.typed_string.properties.required, data: data30 };
							vErrors.push(err92);
							errors++;
						}
						const len4 = data30.length;
						for (let i4 = 0; i4 < len4; i4++) {
							let data31 = data30[i4];
							if (typeof data31 === 'string') {
								if (func1(data31) < 1) {
									const err93: ErrorObject = { instancePath: instancePath + '/typed_string/required/' + i4, schemaPath: '#/properties/typed_string/properties/required/items/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.typed_string.properties.required.items, data: data31 };
									vErrors.push(err93);
									errors++;
								}
							} else {
								const err94: ErrorObject = { instancePath: instancePath + '/typed_string/required/' + i4, schemaPath: '#/properties/typed_string/properties/required/items/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.typed_string.properties.required.items.type, parentSchema: schema37.properties.typed_string.properties.required.items, data: data31 };
								vErrors.push(err94);
								errors++;
							}
						}
					} else {
						const err95: ErrorObject = { instancePath: instancePath + '/typed_string/required', schemaPath: '#/properties/typed_string/properties/required/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema37.properties.typed_string.properties.required.type, parentSchema: schema37.properties.typed_string.properties.required, data: data30 };
						vErrors.push(err95);
						errors++;
					}
				}
				if (data12.properties !== undefined) {
					let data32 = data12.properties;
					if (ajv_utilities__is_probably_object(data32)) {
						if (Object.keys(data32).length < 1) {
							const err96: ErrorObject = { instancePath: instancePath + '/typed_string/properties', schemaPath: '#/properties/typed_string/properties/properties/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema37.properties.typed_string.properties.properties, data: data32 };
							vErrors.push(err96);
							errors++;
						}
						for (const key12 in data32) {
							let data33 = data32[key12];
							if (!(data33 && typeof data33 == 'object' && !Array.isArray(data33))) {
								const err97: ErrorObject = { instancePath: instancePath + '/typed_string/properties/' + key12.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/properties/additionalProperties/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.typed_string.properties.properties.additionalProperties.type, parentSchema: schema37.properties.typed_string.properties.properties.additionalProperties, data: data33 };
								vErrors.push(err97);
								errors++;
							}
						}
					} else {
						const err98: ErrorObject = { instancePath: instancePath + '/typed_string/properties', schemaPath: '#/properties/typed_string/properties/properties/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.typed_string.properties.properties.type, parentSchema: schema37.properties.typed_string.properties.properties, data: data32 };
						vErrors.push(err98);
						errors++;
					}
				}
			} else {
				const err99: ErrorObject = { instancePath: instancePath + '/typed_string', schemaPath: '#/properties/typed_string/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.typed_string.type, parentSchema: schema37.properties.typed_string, data: data12 };
				vErrors.push(err99);
				errors++;
			}
		}
	} else {
		const err100: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.type, parentSchema: schema37, data };
		vErrors.push(err100);
		errors++;
	}
	(validate26 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate26 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_non_quoted = validate27;
const schema38 = { $id: 'docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--non_quoted', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'non_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const } } } } };
function validate27(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'non_quoted'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--non_quoted" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate27 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema38.required, parentSchema: schema38, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema38.required, parentSchema: schema38, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema38, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema38.properties.$defs, data: data0 };
					vErrors.push(err3);
					errors++;
				}
				for (const key1 in data0) {
					let data1 = data0[key1];
					const _errs6 = errors;
					let valid2 = false;
					let passing0 = null;
					const _errs7 = errors;
					if (ajv_utilities__is_probably_object(data1)) {
						if (data1.type === undefined) {
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema38.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[0], data: data1 };
						vErrors.push(err7);
						errors++;
					}
					var _valid0 = _errs7 === errors;
					if (_valid0) {
						valid2 = true;
						passing0 = 0;
						props0 = {};
						props0.type = true;
					}
					const _errs11 = errors;
					if (ajv_utilities__is_probably_object(data1)) {
						if (data1.allOf === undefined) {
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema38.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
									vErrors.push(err10);
									errors++;
								}
								const len0 = data3.length;
								for (let i0 = 0; i0 < len0; i0++) {
									let data4 = data3[i0];
									const _errs17 = errors;
									let valid7 = false;
									let passing1 = null;
									const _errs18 = errors;
									if (ajv_utilities__is_probably_object(data4)) {
										if (data4.type === undefined) {
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
										vErrors.push(err14);
										errors++;
									}
									var _valid1 = _errs18 === errors;
									if (_valid1) {
										valid7 = true;
										passing1 = 0;
										props1 = {};
										props1.type = true;
									}
									const _errs22 = errors;
									if (ajv_utilities__is_probably_object(data4)) {
										if (data4.$ref === undefined) {
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
										vErrors.push(err19);
										errors++;
									}
									var _valid1 = _errs22 === errors;
									if (_valid1 && valid7) {
										valid7 = false;
										passing1 = [passing1, 1];
									} else {
										if (_valid1) {
											valid7 = true;
											passing1 = 1;
											if (props1 !== true) {
												props1 = true;
											}
										}
									}
									if (!valid7) {
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
										vErrors.push(err20);
										errors++;
									} else {
										errors = _errs17;
										if (vErrors.length) {
											if (_errs17) {
												vErrors.length = _errs17;
											} else {
												vErrors = [];
											}
										}
									}
								}
							} else {
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[1], data: data1 };
						vErrors.push(err22);
						errors++;
					}
					var _valid0 = _errs11 === errors;
					if (_valid0 && valid2) {
						valid2 = false;
						passing0 = [passing0, 1];
					} else {
						if (_valid0) {
							valid2 = true;
							passing0 = 1;
							if (props0 !== true) {
								props0 = true;
							}
						}
						const _errs27 = errors;
						if (ajv_utilities__is_probably_object(data1)) {
							if (data1.oneOf === undefined) {
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema38.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
										vErrors.push(err25);
										errors++;
									}
									const len1 = data7.length;
									for (let i1 = 0; i1 < len1; i1++) {
										let data8 = data7[i1];
										const _errs33 = errors;
										let valid13 = false;
										let passing2 = null;
										const _errs34 = errors;
										if (ajv_utilities__is_probably_object(data8)) {
											if (data8.type === undefined) {
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
											vErrors.push(err29);
											errors++;
										}
										var _valid2 = _errs34 === errors;
										if (_valid2) {
											valid13 = true;
											passing2 = 0;
											props2 = {};
											props2.type = true;
										}
										const _errs38 = errors;
										if (ajv_utilities__is_probably_object(data8)) {
											if (data8.$ref === undefined) {
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
											vErrors.push(err34);
											errors++;
										}
										var _valid2 = _errs38 === errors;
										if (_valid2 && valid13) {
											valid13 = false;
											passing2 = [passing2, 1];
										} else {
											if (_valid2) {
												valid13 = true;
												passing2 = 1;
												if (props2 !== true) {
													props2 = true;
												}
											}
										}
										if (!valid13) {
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
											vErrors.push(err35);
											errors++;
										} else {
											errors = _errs33;
											if (vErrors.length) {
												if (_errs33) {
													vErrors.length = _errs33;
												} else {
													vErrors = [];
												}
											}
										}
									}
								} else {
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema38.properties.$defs.additionalProperties.oneOf[2], data: data1 };
							vErrors.push(err37);
							errors++;
						}
						var _valid0 = _errs27 === errors;
						if (_valid0 && valid2) {
							valid2 = false;
							passing0 = [passing0, 2];
						} else {
							if (_valid0) {
								valid2 = true;
								passing0 = 2;
								if (props0 !== true) {
									props0 = true;
								}
							}
						}
					}
					if (!valid2) {
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema38.properties.$defs.additionalProperties.oneOf, parentSchema: schema38.properties.$defs.additionalProperties, data: data1 };
						vErrors.push(err38);
						errors++;
					} else {
						errors = _errs6;
						if (vErrors.length) {
							if (_errs6) {
								vErrors.length = _errs6;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.properties.$defs.type, parentSchema: schema38.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.type.type, parentSchema: schema38.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema38.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema38.properties.DocsDotJson_PrefixedString.required, parentSchema: schema38.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema38.properties.DocsDotJson_PrefixedString.required, parentSchema: schema38.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema38.properties.DocsDotJson_PrefixedString.required, parentSchema: schema38.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!(((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema38.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('non_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'non_quoted' }, message: 'must be equal to constant', schema: 'non_quoted', parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err49);
						errors++;
					}
				}
				if (data12.value !== undefined) {
					let data15 = data12.value;
					const _errs53 = errors;
					let valid17 = false;
					let passing3 = null;
					const _errs54 = errors;
					if (typeof data15 === 'string') {
						if (func1(data15) < 1) {
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
						vErrors.push(err51);
						errors++;
					}
					var _valid3 = _errs54 === errors;
					if (_valid3) {
						valid17 = true;
						passing3 = 0;
					}
					const _errs56 = errors;
					if (data15 !== null) {
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema38.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
						vErrors.push(err52);
						errors++;
					}
					var _valid3 = _errs56 === errors;
					if (_valid3 && valid17) {
						valid17 = false;
						passing3 = [passing3, 1];
					} else {
						if (_valid3) {
							valid17 = true;
							passing3 = 1;
						}
					}
					if (!valid17) {
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema38.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
						vErrors.push(err53);
						errors++;
					} else {
						errors = _errs53;
						if (vErrors.length) {
							if (_errs53) {
								vErrors.length = _errs53;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.properties.DocsDotJson_PrefixedString.type, parentSchema: schema38.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err54);
				errors++;
			}
		}
	} else {
		const err55: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.type, parentSchema: schema38, data };
		vErrors.push(err55);
		errors++;
	}
	(validate27 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate27 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_quoted = validate28;
const schema39 = { $id: 'docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--quoted', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const } } } } };
function validate28(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'quoted'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--quoted" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate28 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema39.required, parentSchema: schema39, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema39.required, parentSchema: schema39, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema39, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema39.properties.$defs, data: data0 };
					vErrors.push(err3);
					errors++;
				}
				for (const key1 in data0) {
					let data1 = data0[key1];
					const _errs6 = errors;
					let valid2 = false;
					let passing0 = null;
					const _errs7 = errors;
					if (ajv_utilities__is_probably_object(data1)) {
						if (data1.type === undefined) {
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema39.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[0], data: data1 };
						vErrors.push(err7);
						errors++;
					}
					var _valid0 = _errs7 === errors;
					if (_valid0) {
						valid2 = true;
						passing0 = 0;
						props0 = {};
						props0.type = true;
					}
					const _errs11 = errors;
					if (ajv_utilities__is_probably_object(data1)) {
						if (data1.allOf === undefined) {
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema39.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
									vErrors.push(err10);
									errors++;
								}
								const len0 = data3.length;
								for (let i0 = 0; i0 < len0; i0++) {
									let data4 = data3[i0];
									const _errs17 = errors;
									let valid7 = false;
									let passing1 = null;
									const _errs18 = errors;
									if (ajv_utilities__is_probably_object(data4)) {
										if (data4.type === undefined) {
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
										vErrors.push(err14);
										errors++;
									}
									var _valid1 = _errs18 === errors;
									if (_valid1) {
										valid7 = true;
										passing1 = 0;
										props1 = {};
										props1.type = true;
									}
									const _errs22 = errors;
									if (ajv_utilities__is_probably_object(data4)) {
										if (data4.$ref === undefined) {
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
										vErrors.push(err19);
										errors++;
									}
									var _valid1 = _errs22 === errors;
									if (_valid1 && valid7) {
										valid7 = false;
										passing1 = [passing1, 1];
									} else {
										if (_valid1) {
											valid7 = true;
											passing1 = 1;
											if (props1 !== true) {
												props1 = true;
											}
										}
									}
									if (!valid7) {
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
										vErrors.push(err20);
										errors++;
									} else {
										errors = _errs17;
										if (vErrors.length) {
											if (_errs17) {
												vErrors.length = _errs17;
											} else {
												vErrors = [];
											}
										}
									}
								}
							} else {
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[1], data: data1 };
						vErrors.push(err22);
						errors++;
					}
					var _valid0 = _errs11 === errors;
					if (_valid0 && valid2) {
						valid2 = false;
						passing0 = [passing0, 1];
					} else {
						if (_valid0) {
							valid2 = true;
							passing0 = 1;
							if (props0 !== true) {
								props0 = true;
							}
						}
						const _errs27 = errors;
						if (ajv_utilities__is_probably_object(data1)) {
							if (data1.oneOf === undefined) {
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema39.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
										vErrors.push(err25);
										errors++;
									}
									const len1 = data7.length;
									for (let i1 = 0; i1 < len1; i1++) {
										let data8 = data7[i1];
										const _errs33 = errors;
										let valid13 = false;
										let passing2 = null;
										const _errs34 = errors;
										if (ajv_utilities__is_probably_object(data8)) {
											if (data8.type === undefined) {
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
											vErrors.push(err29);
											errors++;
										}
										var _valid2 = _errs34 === errors;
										if (_valid2) {
											valid13 = true;
											passing2 = 0;
											props2 = {};
											props2.type = true;
										}
										const _errs38 = errors;
										if (ajv_utilities__is_probably_object(data8)) {
											if (data8.$ref === undefined) {
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
											vErrors.push(err34);
											errors++;
										}
										var _valid2 = _errs38 === errors;
										if (_valid2 && valid13) {
											valid13 = false;
											passing2 = [passing2, 1];
										} else {
											if (_valid2) {
												valid13 = true;
												passing2 = 1;
												if (props2 !== true) {
													props2 = true;
												}
											}
										}
										if (!valid13) {
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
											vErrors.push(err35);
											errors++;
										} else {
											errors = _errs33;
											if (vErrors.length) {
												if (_errs33) {
													vErrors.length = _errs33;
												} else {
													vErrors = [];
												}
											}
										}
									}
								} else {
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema39.properties.$defs.additionalProperties.oneOf[2], data: data1 };
							vErrors.push(err37);
							errors++;
						}
						var _valid0 = _errs27 === errors;
						if (_valid0 && valid2) {
							valid2 = false;
							passing0 = [passing0, 2];
						} else {
							if (_valid0) {
								valid2 = true;
								passing0 = 2;
								if (props0 !== true) {
									props0 = true;
								}
							}
						}
					}
					if (!valid2) {
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema39.properties.$defs.additionalProperties.oneOf, parentSchema: schema39.properties.$defs.additionalProperties, data: data1 };
						vErrors.push(err38);
						errors++;
					} else {
						errors = _errs6;
						if (vErrors.length) {
							if (_errs6) {
								vErrors.length = _errs6;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.properties.$defs.type, parentSchema: schema39.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.type.type, parentSchema: schema39.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema39.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema39.properties.DocsDotJson_PrefixedString.required, parentSchema: schema39.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema39.properties.DocsDotJson_PrefixedString.required, parentSchema: schema39.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema39.properties.DocsDotJson_PrefixedString.required, parentSchema: schema39.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!(((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema39.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'quoted' }, message: 'must be equal to constant', schema: 'quoted', parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err49);
						errors++;
					}
				}
				if (data12.value !== undefined) {
					let data15 = data12.value;
					const _errs53 = errors;
					let valid17 = false;
					let passing3 = null;
					const _errs54 = errors;
					if (typeof data15 === 'string') {
						if (func1(data15) < 1) {
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
						vErrors.push(err51);
						errors++;
					}
					var _valid3 = _errs54 === errors;
					if (_valid3) {
						valid17 = true;
						passing3 = 0;
					}
					const _errs56 = errors;
					if (data15 !== null) {
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema39.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
						vErrors.push(err52);
						errors++;
					}
					var _valid3 = _errs56 === errors;
					if (_valid3 && valid17) {
						valid17 = false;
						passing3 = [passing3, 1];
					} else {
						if (_valid3) {
							valid17 = true;
							passing3 = 1;
						}
					}
					if (!valid17) {
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema39.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
						vErrors.push(err53);
						errors++;
					} else {
						errors = _errs53;
						if (vErrors.length) {
							if (_errs53) {
								vErrors.length = _errs53;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.properties.DocsDotJson_PrefixedString.type, parentSchema: schema39.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err54);
				errors++;
			}
		}
	} else {
		const err55: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.type, parentSchema: schema39, data };
		vErrors.push(err55);
		errors++;
	}
	(validate28 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate28 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_single_quoted = validate29;
const schema40 = { $id: 'docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--single_quoted', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'single_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const } } } } };
function validate29(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'single_quoted'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--single_quoted" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate29 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema40.required, parentSchema: schema40, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema40.required, parentSchema: schema40, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema40, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema40.properties.$defs, data: data0 };
					vErrors.push(err3);
					errors++;
				}
				for (const key1 in data0) {
					let data1 = data0[key1];
					const _errs6 = errors;
					let valid2 = false;
					let passing0 = null;
					const _errs7 = errors;
					if (ajv_utilities__is_probably_object(data1)) {
						if (data1.type === undefined) {
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema40.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[0], data: data1 };
						vErrors.push(err7);
						errors++;
					}
					var _valid0 = _errs7 === errors;
					if (_valid0) {
						valid2 = true;
						passing0 = 0;
						props0 = {};
						props0.type = true;
					}
					const _errs11 = errors;
					if (ajv_utilities__is_probably_object(data1)) {
						if (data1.allOf === undefined) {
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema40.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
									vErrors.push(err10);
									errors++;
								}
								const len0 = data3.length;
								for (let i0 = 0; i0 < len0; i0++) {
									let data4 = data3[i0];
									const _errs17 = errors;
									let valid7 = false;
									let passing1 = null;
									const _errs18 = errors;
									if (ajv_utilities__is_probably_object(data4)) {
										if (data4.type === undefined) {
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
										vErrors.push(err14);
										errors++;
									}
									var _valid1 = _errs18 === errors;
									if (_valid1) {
										valid7 = true;
										passing1 = 0;
										props1 = {};
										props1.type = true;
									}
									const _errs22 = errors;
									if (ajv_utilities__is_probably_object(data4)) {
										if (data4.$ref === undefined) {
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
										vErrors.push(err19);
										errors++;
									}
									var _valid1 = _errs22 === errors;
									if (_valid1 && valid7) {
										valid7 = false;
										passing1 = [passing1, 1];
									} else {
										if (_valid1) {
											valid7 = true;
											passing1 = 1;
											if (props1 !== true) {
												props1 = true;
											}
										}
									}
									if (!valid7) {
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
										vErrors.push(err20);
										errors++;
									} else {
										errors = _errs17;
										if (vErrors.length) {
											if (_errs17) {
												vErrors.length = _errs17;
											} else {
												vErrors = [];
											}
										}
									}
								}
							} else {
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[1], data: data1 };
						vErrors.push(err22);
						errors++;
					}
					var _valid0 = _errs11 === errors;
					if (_valid0 && valid2) {
						valid2 = false;
						passing0 = [passing0, 1];
					} else {
						if (_valid0) {
							valid2 = true;
							passing0 = 1;
							if (props0 !== true) {
								props0 = true;
							}
						}
						const _errs27 = errors;
						if (ajv_utilities__is_probably_object(data1)) {
							if (data1.oneOf === undefined) {
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema40.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
										vErrors.push(err25);
										errors++;
									}
									const len1 = data7.length;
									for (let i1 = 0; i1 < len1; i1++) {
										let data8 = data7[i1];
										const _errs33 = errors;
										let valid13 = false;
										let passing2 = null;
										const _errs34 = errors;
										if (ajv_utilities__is_probably_object(data8)) {
											if (data8.type === undefined) {
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
											vErrors.push(err29);
											errors++;
										}
										var _valid2 = _errs34 === errors;
										if (_valid2) {
											valid13 = true;
											passing2 = 0;
											props2 = {};
											props2.type = true;
										}
										const _errs38 = errors;
										if (ajv_utilities__is_probably_object(data8)) {
											if (data8.$ref === undefined) {
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
											vErrors.push(err34);
											errors++;
										}
										var _valid2 = _errs38 === errors;
										if (_valid2 && valid13) {
											valid13 = false;
											passing2 = [passing2, 1];
										} else {
											if (_valid2) {
												valid13 = true;
												passing2 = 1;
												if (props2 !== true) {
													props2 = true;
												}
											}
										}
										if (!valid13) {
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
											vErrors.push(err35);
											errors++;
										} else {
											errors = _errs33;
											if (vErrors.length) {
												if (_errs33) {
													vErrors.length = _errs33;
												} else {
													vErrors = [];
												}
											}
										}
									}
								} else {
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema40.properties.$defs.additionalProperties.oneOf[2], data: data1 };
							vErrors.push(err37);
							errors++;
						}
						var _valid0 = _errs27 === errors;
						if (_valid0 && valid2) {
							valid2 = false;
							passing0 = [passing0, 2];
						} else {
							if (_valid0) {
								valid2 = true;
								passing0 = 2;
								if (props0 !== true) {
									props0 = true;
								}
							}
						}
					}
					if (!valid2) {
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema40.properties.$defs.additionalProperties.oneOf, parentSchema: schema40.properties.$defs.additionalProperties, data: data1 };
						vErrors.push(err38);
						errors++;
					} else {
						errors = _errs6;
						if (vErrors.length) {
							if (_errs6) {
								vErrors.length = _errs6;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.properties.$defs.type, parentSchema: schema40.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.type.type, parentSchema: schema40.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema40.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema40.properties.DocsDotJson_PrefixedString.required, parentSchema: schema40.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema40.properties.DocsDotJson_PrefixedString.required, parentSchema: schema40.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema40.properties.DocsDotJson_PrefixedString.required, parentSchema: schema40.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!(((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema40.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('single_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'single_quoted' }, message: 'must be equal to constant', schema: 'single_quoted', parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err49);
						errors++;
					}
				}
				if (data12.value !== undefined) {
					let data15 = data12.value;
					const _errs53 = errors;
					let valid17 = false;
					let passing3 = null;
					const _errs54 = errors;
					if (typeof data15 === 'string') {
						if (func1(data15) < 1) {
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
						vErrors.push(err51);
						errors++;
					}
					var _valid3 = _errs54 === errors;
					if (_valid3) {
						valid17 = true;
						passing3 = 0;
					}
					const _errs56 = errors;
					if (data15 !== null) {
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema40.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
						vErrors.push(err52);
						errors++;
					}
					var _valid3 = _errs56 === errors;
					if (_valid3 && valid17) {
						valid17 = false;
						passing3 = [passing3, 1];
					} else {
						if (_valid3) {
							valid17 = true;
							passing3 = 1;
						}
					}
					if (!valid17) {
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema40.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
						vErrors.push(err53);
						errors++;
					} else {
						errors = _errs53;
						if (vErrors.length) {
							if (_errs53) {
								vErrors.length = _errs53;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.properties.DocsDotJson_PrefixedString.type, parentSchema: schema40.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err54);
				errors++;
			}
		}
	} else {
		const err55: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.type, parentSchema: schema40, data };
		vErrors.push(err55);
		errors++;
	}
	(validate29 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate29 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_version_specific_default = validate30;
const schema41 = { $id: 'docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--version_specific_default', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'version_specific_default' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const } } } } };
function validate30(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'version_specific_default'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--PrefixedString--version_specific_default" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate30 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema41.required, parentSchema: schema41, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema41.required, parentSchema: schema41, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema41, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema41.properties.$defs, data: data0 };
					vErrors.push(err3);
					errors++;
				}
				for (const key1 in data0) {
					let data1 = data0[key1];
					const _errs6 = errors;
					let valid2 = false;
					let passing0 = null;
					const _errs7 = errors;
					if (ajv_utilities__is_probably_object(data1)) {
						if (data1.type === undefined) {
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema41.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[0], data: data1 };
						vErrors.push(err7);
						errors++;
					}
					var _valid0 = _errs7 === errors;
					if (_valid0) {
						valid2 = true;
						passing0 = 0;
						props0 = {};
						props0.type = true;
					}
					const _errs11 = errors;
					if (ajv_utilities__is_probably_object(data1)) {
						if (data1.allOf === undefined) {
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema41.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
									vErrors.push(err10);
									errors++;
								}
								const len0 = data3.length;
								for (let i0 = 0; i0 < len0; i0++) {
									let data4 = data3[i0];
									const _errs17 = errors;
									let valid7 = false;
									let passing1 = null;
									const _errs18 = errors;
									if (ajv_utilities__is_probably_object(data4)) {
										if (data4.type === undefined) {
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
										vErrors.push(err14);
										errors++;
									}
									var _valid1 = _errs18 === errors;
									if (_valid1) {
										valid7 = true;
										passing1 = 0;
										props1 = {};
										props1.type = true;
									}
									const _errs22 = errors;
									if (ajv_utilities__is_probably_object(data4)) {
										if (data4.$ref === undefined) {
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
										vErrors.push(err19);
										errors++;
									}
									var _valid1 = _errs22 === errors;
									if (_valid1 && valid7) {
										valid7 = false;
										passing1 = [passing1, 1];
									} else {
										if (_valid1) {
											valid7 = true;
											passing1 = 1;
											if (props1 !== true) {
												props1 = true;
											}
										}
									}
									if (!valid7) {
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
										vErrors.push(err20);
										errors++;
									} else {
										errors = _errs17;
										if (vErrors.length) {
											if (_errs17) {
												vErrors.length = _errs17;
											} else {
												vErrors = [];
											}
										}
									}
								}
							} else {
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[1], data: data1 };
						vErrors.push(err22);
						errors++;
					}
					var _valid0 = _errs11 === errors;
					if (_valid0 && valid2) {
						valid2 = false;
						passing0 = [passing0, 1];
					} else {
						if (_valid0) {
							valid2 = true;
							passing0 = 1;
							if (props0 !== true) {
								props0 = true;
							}
						}
						const _errs27 = errors;
						if (ajv_utilities__is_probably_object(data1)) {
							if (data1.oneOf === undefined) {
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema41.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
										vErrors.push(err25);
										errors++;
									}
									const len1 = data7.length;
									for (let i1 = 0; i1 < len1; i1++) {
										let data8 = data7[i1];
										const _errs33 = errors;
										let valid13 = false;
										let passing2 = null;
										const _errs34 = errors;
										if (ajv_utilities__is_probably_object(data8)) {
											if (data8.type === undefined) {
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
											vErrors.push(err29);
											errors++;
										}
										var _valid2 = _errs34 === errors;
										if (_valid2) {
											valid13 = true;
											passing2 = 0;
											props2 = {};
											props2.type = true;
										}
										const _errs38 = errors;
										if (ajv_utilities__is_probably_object(data8)) {
											if (data8.$ref === undefined) {
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
											vErrors.push(err34);
											errors++;
										}
										var _valid2 = _errs38 === errors;
										if (_valid2 && valid13) {
											valid13 = false;
											passing2 = [passing2, 1];
										} else {
											if (_valid2) {
												valid13 = true;
												passing2 = 1;
												if (props2 !== true) {
													props2 = true;
												}
											}
										}
										if (!valid13) {
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
											vErrors.push(err35);
											errors++;
										} else {
											errors = _errs33;
											if (vErrors.length) {
												if (_errs33) {
													vErrors.length = _errs33;
												} else {
													vErrors = [];
												}
											}
										}
									}
								} else {
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema41.properties.$defs.additionalProperties.oneOf[2], data: data1 };
							vErrors.push(err37);
							errors++;
						}
						var _valid0 = _errs27 === errors;
						if (_valid0 && valid2) {
							valid2 = false;
							passing0 = [passing0, 2];
						} else {
							if (_valid0) {
								valid2 = true;
								passing0 = 2;
								if (props0 !== true) {
									props0 = true;
								}
							}
						}
					}
					if (!valid2) {
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema41.properties.$defs.additionalProperties.oneOf, parentSchema: schema41.properties.$defs.additionalProperties, data: data1 };
						vErrors.push(err38);
						errors++;
					} else {
						errors = _errs6;
						if (vErrors.length) {
							if (_errs6) {
								vErrors.length = _errs6;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.properties.$defs.type, parentSchema: schema41.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.type.type, parentSchema: schema41.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema41.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema41.properties.DocsDotJson_PrefixedString.required, parentSchema: schema41.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema41.properties.DocsDotJson_PrefixedString.required, parentSchema: schema41.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema41.properties.DocsDotJson_PrefixedString.required, parentSchema: schema41.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!(((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema41.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('version_specific_default' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'version_specific_default' }, message: 'must be equal to constant', schema: 'version_specific_default', parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err49);
						errors++;
					}
				}
				if (data12.value !== undefined) {
					let data15 = data12.value;
					const _errs53 = errors;
					let valid17 = false;
					let passing3 = null;
					const _errs54 = errors;
					if (typeof data15 === 'string') {
						if (func1(data15) < 1) {
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
						vErrors.push(err51);
						errors++;
					}
					var _valid3 = _errs54 === errors;
					if (_valid3) {
						valid17 = true;
						passing3 = 0;
					}
					const _errs56 = errors;
					if (data15 !== null) {
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema41.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
						vErrors.push(err52);
						errors++;
					}
					var _valid3 = _errs56 === errors;
					if (_valid3 && valid17) {
						valid17 = false;
						passing3 = [passing3, 1];
					} else {
						if (_valid3) {
							valid17 = true;
							passing3 = 1;
						}
					}
					if (!valid17) {
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema41.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
						vErrors.push(err53);
						errors++;
					} else {
						errors = _errs53;
						if (vErrors.length) {
							if (_errs53) {
								vErrors.length = _errs53;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.properties.DocsDotJson_PrefixedString.type, parentSchema: schema41.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err54);
				errors++;
			}
		}
	} else {
		const err55: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.type, parentSchema: schema41, data };
		vErrors.push(err55);
		errors++;
	}
	(validate30 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate30 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_ref = validate31;
const schema42 = { $id: 'docs.json.ts--lib--PropertySchemaToRegex--$ref', type: 'object', required: ['$ref'] as const, additionalProperties: false, properties: { $defs: { type: 'object', additionalProperties: { type: 'object' } }, $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } };
function validate31(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is $ref_type {
	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--$ref" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate31 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.$ref === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema42.required, parentSchema: schema42, data };
			vErrors.push(err0);
			errors++;
		}
		for (const key0 in data) {
			if (!((key0 === '$defs') || (key0 === '$ref'))) {
				const err1: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema42, data };
				vErrors.push(err1);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				for (const key1 in data0) {
					let data1 = data0[key1];
					if (!(data1 && typeof data1 == 'object' && !Array.isArray(data1))) {
						const err2: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.properties.$defs.additionalProperties.type, parentSchema: schema42.properties.$defs.additionalProperties, data: data1 };
						vErrors.push(err2);
						errors++;
					}
				}
			} else {
				const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.properties.$defs.type, parentSchema: schema42.properties.$defs, data: data0 };
				vErrors.push(err3);
				errors++;
			}
		}
		if (data.$ref !== undefined) {
			let data2 = data.$ref;
			if (typeof data2 === 'string') {
				if (!pattern4.test(data2)) {
					const err4: ErrorObject = { instancePath: instancePath + '/$ref', schemaPath: '#/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema42.properties.$ref, data: data2 };
					vErrors.push(err4);
					errors++;
				}
			} else {
				const err5: ErrorObject = { instancePath: instancePath + '/$ref', schemaPath: '#/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.$ref.type, parentSchema: schema42.properties.$ref, data: data2 };
				vErrors.push(err5);
				errors++;
			}
		}
	} else {
		const err6: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.type, parentSchema: schema42, data };
		vErrors.push(err6);
		errors++;
	}
	(validate31 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate31 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_TemplatedString = validate32;
const schema43 = { $id: 'docs.json.ts--lib--PropertySchemaToRegex--TemplatedString', type: 'object', required: ['type', 'templated_string'] as const, additionalProperties: false, properties: { $defs: { type: 'object', additionalProperties: { type: 'object' } }, type: { type: 'string', const: 'string' }, templated_string: { type: 'array', minItems: 1, items: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'object', const: { type: 'string' } }, { type: 'object', const: { type: 'string', minLength: 1 } }, { type: 'array', minItems: 2, items: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'object', const: { type: 'string' } }] as const } }, { $ref: '#' }] as const } } } };
const func0 = fast_deep_equal;
function validate32(data: unknown, { instancePath = '', rootData = data, dynamicAnchors = {} }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is templated_string_type {
	/* # sourceURL="docs.json.ts--lib--PropertySchemaToRegex--TemplatedString" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = (validate32 as Is).evaluated;
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema43.required, parentSchema: schema43, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.templated_string === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'templated_string' }, message: 'must have required property \'' + 'templated_string' + '\'', schema: schema43.required, parentSchema: schema43, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'templated_string'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema43, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				for (const key1 in data0) {
					let data1 = data0[key1];
					if (!(data1 && typeof data1 == 'object' && !Array.isArray(data1))) {
						const err3: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.$defs.additionalProperties.type, parentSchema: schema43.properties.$defs.additionalProperties, data: data1 };
						vErrors.push(err3);
						errors++;
					}
				}
			} else {
				const err4: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.$defs.type, parentSchema: schema43.properties.$defs, data: data0 };
				vErrors.push(err4);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data2 = data.type;
			if (typeof data2 !== 'string') {
				const err5: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.type.type, parentSchema: schema43.properties.type, data: data2 };
				vErrors.push(err5);
				errors++;
			}
			if ('string' !== data2) {
				const err6: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema43.properties.type, data: data2 };
				vErrors.push(err6);
				errors++;
			}
		}
		if (data.templated_string !== undefined) {
			let data3 = data.templated_string;
			if (ajv_utilities__is_probably_array(data3)) {
				if (data3.length < 1) {
					const err7: ErrorObject = { instancePath: instancePath + '/templated_string', schemaPath: '#/properties/templated_string/minItems', keyword: 'minItems', params: { limit: 1 }, message: 'must NOT have fewer than 1 items', schema: 1, parentSchema: schema43.properties.templated_string, data: data3 };
					vErrors.push(err7);
					errors++;
				}
				const len0 = data3.length;
				for (let i0 = 0; i0 < len0; i0++) {
					let data4 = data3[i0];
					const _errs12 = errors;
					let valid4 = false;
					let passing0 = null;
					const _errs13 = errors;
					if (typeof data4 === 'string') {
						if (func1(data4) < 1) {
							const err8: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0, schemaPath: '#/properties/templated_string/items/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema43.properties.templated_string.items.oneOf[0], data: data4 };
							vErrors.push(err8);
							errors++;
						}
					} else {
						const err9: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0, schemaPath: '#/properties/templated_string/items/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.templated_string.items.oneOf[0].type, parentSchema: schema43.properties.templated_string.items.oneOf[0], data: data4 };
						vErrors.push(err9);
						errors++;
					}
					var _valid0 = _errs13 === errors;
					if (_valid0) {
						valid4 = true;
						passing0 = 0;
					}
					const _errs15 = errors;
					if (!(data4 && typeof data4 == 'object' && !Array.isArray(data4))) {
						const err10: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0, schemaPath: '#/properties/templated_string/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.templated_string.items.oneOf[1].type, parentSchema: schema43.properties.templated_string.items.oneOf[1], data: data4 };
						vErrors.push(err10);
						errors++;
					}
					if (!func0(data4, schema43.properties.templated_string.items.oneOf[1].const)) {
						const err11: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0, schemaPath: '#/properties/templated_string/items/oneOf/1/const', keyword: 'const', params: { allowedValue: schema43.properties.templated_string.items.oneOf[1].const }, message: 'must be equal to constant', schema: schema43.properties.templated_string.items.oneOf[1].const, parentSchema: schema43.properties.templated_string.items.oneOf[1], data: data4 };
						vErrors.push(err11);
						errors++;
					}
					var _valid0 = _errs15 === errors;
					if (_valid0 && valid4) {
						valid4 = false;
						passing0 = [passing0, 1];
					} else {
						if (_valid0) {
							valid4 = true;
							passing0 = 1;
						}
						const _errs17 = errors;
						if (!(data4 && typeof data4 == 'object' && !Array.isArray(data4))) {
							const err12: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0, schemaPath: '#/properties/templated_string/items/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.templated_string.items.oneOf[2].type, parentSchema: schema43.properties.templated_string.items.oneOf[2], data: data4 };
							vErrors.push(err12);
							errors++;
						}
						if (!func0(data4, schema43.properties.templated_string.items.oneOf[2].const)) {
							const err13: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0, schemaPath: '#/properties/templated_string/items/oneOf/2/const', keyword: 'const', params: { allowedValue: schema43.properties.templated_string.items.oneOf[2].const }, message: 'must be equal to constant', schema: schema43.properties.templated_string.items.oneOf[2].const, parentSchema: schema43.properties.templated_string.items.oneOf[2], data: data4 };
							vErrors.push(err13);
							errors++;
						}
						var _valid0 = _errs17 === errors;
						if (_valid0 && valid4) {
							valid4 = false;
							passing0 = [passing0, 2];
						} else {
							if (_valid0) {
								valid4 = true;
								passing0 = 2;
							}
							const _errs19 = errors;
							if (ajv_utilities__is_probably_array(data4)) {
								if (data4.length < 2) {
									const err14: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0, schemaPath: '#/properties/templated_string/items/oneOf/3/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema43.properties.templated_string.items.oneOf[3], data: data4 };
									vErrors.push(err14);
									errors++;
								}
								const len1 = data4.length;
								for (let i1 = 0; i1 < len1; i1++) {
									let data5 = data4[i1];
									const _errs22 = errors;
									let valid7 = false;
									let passing1 = null;
									const _errs23 = errors;
									if (typeof data5 === 'string') {
										if (func1(data5) < 1) {
											const err15: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0 + '/' + i1, schemaPath: '#/properties/templated_string/items/oneOf/3/items/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema43.properties.templated_string.items.oneOf[3].items.oneOf[0], data: data5 };
											vErrors.push(err15);
											errors++;
										}
									} else {
										const err16: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0 + '/' + i1, schemaPath: '#/properties/templated_string/items/oneOf/3/items/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.templated_string.items.oneOf[3].items.oneOf[0].type, parentSchema: schema43.properties.templated_string.items.oneOf[3].items.oneOf[0], data: data5 };
										vErrors.push(err16);
										errors++;
									}
									var _valid1 = _errs23 === errors;
									if (_valid1) {
										valid7 = true;
										passing1 = 0;
									}
									const _errs25 = errors;
									if (!(data5 && typeof data5 == 'object' && !Array.isArray(data5))) {
										const err17: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0 + '/' + i1, schemaPath: '#/properties/templated_string/items/oneOf/3/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.templated_string.items.oneOf[3].items.oneOf[1].type, parentSchema: schema43.properties.templated_string.items.oneOf[3].items.oneOf[1], data: data5 };
										vErrors.push(err17);
										errors++;
									}
									if (!func0(data5, schema43.properties.templated_string.items.oneOf[3].items.oneOf[1].const)) {
										const err18: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0 + '/' + i1, schemaPath: '#/properties/templated_string/items/oneOf/3/items/oneOf/1/const', keyword: 'const', params: { allowedValue: schema43.properties.templated_string.items.oneOf[3].items.oneOf[1].const }, message: 'must be equal to constant', schema: schema43.properties.templated_string.items.oneOf[3].items.oneOf[1].const, parentSchema: schema43.properties.templated_string.items.oneOf[3].items.oneOf[1], data: data5 };
										vErrors.push(err18);
										errors++;
									}
									var _valid1 = _errs25 === errors;
									if (_valid1 && valid7) {
										valid7 = false;
										passing1 = [passing1, 1];
									} else {
										if (_valid1) {
											valid7 = true;
											passing1 = 1;
										}
									}
									if (!valid7) {
										const err19: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0 + '/' + i1, schemaPath: '#/properties/templated_string/items/oneOf/3/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema43.properties.templated_string.items.oneOf[3].items.oneOf, parentSchema: schema43.properties.templated_string.items.oneOf[3].items, data: data5 };
										vErrors.push(err19);
										errors++;
									} else {
										errors = _errs22;
										if (vErrors.length) {
											if (_errs22) {
												vErrors.length = _errs22;
											} else {
												vErrors = [];
											}
										}
									}
								}
							} else {
								const err20: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0, schemaPath: '#/properties/templated_string/items/oneOf/3/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema43.properties.templated_string.items.oneOf[3].type, parentSchema: schema43.properties.templated_string.items.oneOf[3], data: data4 };
								vErrors.push(err20);
								errors++;
							}
							var _valid0 = _errs19 === errors;
							if (_valid0 && valid4) {
								valid4 = false;
								passing0 = [passing0, 3];
							} else {
								let items0: number | true = 0;
								if (_valid0) {
									valid4 = true;
									passing0 = 3;
									items0 = true;
								}
								const _errs27 = errors;
								if (!(validate32(data4, { instancePath: instancePath + '/templated_string/' + i0, parentData: data3, parentDataProperty: i0, rootData, dynamicAnchors }))) {
									vErrors = vErrors.concat((validate32 as Is).errors || []);
									errors = vErrors.length;
								} else {
									var items1 = (validate32 as Is).evaluated?.items;
								}
								var _valid0 = _errs27 === errors;
								if (_valid0 && valid4) {
									valid4 = false;
									passing0 = [passing0, 4];
								} else {
									if (_valid0) {
										valid4 = true;
										passing0 = 4;
										if (items0 !== true && items1 !== undefined) {
											items0 = items1 === true ? true : items0 > items1 ? items0 : items1;
										}
									}
								}
							}
						}
					}
					if (!valid4) {
						const err21: ErrorObject = { instancePath: instancePath + '/templated_string/' + i0, schemaPath: '#/properties/templated_string/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema43.properties.templated_string.items.oneOf, parentSchema: schema43.properties.templated_string.items, data: data4 };
						vErrors.push(err21);
						errors++;
					} else {
						errors = _errs12;
						if (vErrors.length) {
							if (_errs12) {
								vErrors.length = _errs12;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err22: ErrorObject = { instancePath: instancePath + '/templated_string', schemaPath: '#/properties/templated_string/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema43.properties.templated_string.type, parentSchema: schema43.properties.templated_string, data: data3 };
				vErrors.push(err22);
				errors++;
			}
		}
	} else {
		const err23: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.type, parentSchema: schema43, data };
		vErrors.push(err23);
		errors++;
	}
	(validate32 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate32 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
