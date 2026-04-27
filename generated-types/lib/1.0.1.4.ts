// oxlint-disable @stylistic/max-len
import type {
	ErrorObject, ValidateFunction,
} from 'ajv';
import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';
import type {
	ObjectSchema_type,
} from '../../src/version-specific/1.0.1.4/TypedString/PropertySchemaToRegex/Object.ts';
function ajv_utiltiies__definitely_evaluated<T>(maybe: Is<T>): Exclude<Is<T>['evaluated'], undefined> {
	if (undefined === maybe.evaluated)
		throw new Error(`${maybe.name}.evaluated not set!`);

	return maybe.evaluated;
}
function ajv_utilities__is_probably_object(maybe: unknown): maybe is Record<string, unknown> {
	return !!maybe && typeof maybe === 'object' && !Array.isArray(maybe);
}
function ajv_utilities__is_probably_array(maybe: unknown): maybe is unknown[] {
	return Array.isArray(maybe);
}
import {
	ucs2length,
} from '@satisfactory-dev/ajv-utilities/ajv';
export const ObjectSchema = validate20;
const schema31 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--Object', type: 'object', additionalProperties: false, required: ['type', 'typed_string'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, typed_string: { type: 'object', required: ['type', 'properties'] as const, additionalProperties: false, properties: { $schema: { type: 'string', enum: ['https://json-schema.org/draft/2020-12/schema'] as const }, $id: { type: 'string', minLength: 1 }, $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'object' }, $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, additionalProperties: { type: 'boolean' }, unevaluatedProperties: { type: 'boolean' }, required: { type: 'array', minItems: 1, items: { type: 'string', minLength: 1 } }, properties: { type: 'object', minProperties: 1, additionalProperties: { type: 'object' } } } } } };
const func1 = ucs2length;
const func4 = { call: (instance: object, property: string) => Object.prototype.hasOwnProperty.call(instance, property) };
const pattern4 = new RegExp('^(.+)?#\\/\\$defs\\/(.+)$', 'u');
function validate20(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is ObjectSchema_type {
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

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--Object" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate20);
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
		if (data.typed_string === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'typed_string' }, message: 'must have required property \'' + 'typed_string' + '\'', schema: schema31.required, parentSchema: schema31, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'typed_string'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema31.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema31.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema31.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema31.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema31.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema31.properties.$defs.additionalProperties.oneOf, parentSchema: schema31.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.$defs.type, parentSchema: schema31.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.type.type, parentSchema: schema31.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema31.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.typed_string !== undefined) {
			let data12 = data.typed_string;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.type === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/typed_string', schemaPath: '#/properties/typed_string/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema31.properties.typed_string.required, parentSchema: schema31.properties.typed_string, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.properties === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/typed_string', schemaPath: '#/properties/typed_string/required', keyword: 'required', params: { missingProperty: 'properties' }, message: 'must have required property \'' + 'properties' + '\'', schema: schema31.properties.typed_string.required, parentSchema: schema31.properties.typed_string, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				for (const key6 in data12) {
					if (!(func4.call(schema31.properties.typed_string.properties, key6))) {
						const err44: ErrorObject = { instancePath: instancePath + '/typed_string', schemaPath: '#/properties/typed_string/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31.properties.typed_string, data: data12 };
						vErrors.push(err44);
						errors++;
					}
				}
				if (data12.$schema !== undefined) {
					let data13 = data12.$schema;
					if (typeof data13 !== 'string') {
						const err45: ErrorObject = { instancePath: instancePath + '/typed_string/$schema', schemaPath: '#/properties/typed_string/properties/%24schema/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.typed_string.properties.$schema.type, parentSchema: schema31.properties.typed_string.properties.$schema, data: data13 };
						vErrors.push(err45);
						errors++;
					}
					if (!(data13 === 'https://json-schema.org/draft/2020-12/schema')) {
						const err46: ErrorObject = { instancePath: instancePath + '/typed_string/$schema', schemaPath: '#/properties/typed_string/properties/%24schema/enum', keyword: 'enum', params: { allowedValues: schema31.properties.typed_string.properties.$schema.enum }, message: 'must be equal to one of the allowed values', schema: schema31.properties.typed_string.properties.$schema.enum, parentSchema: schema31.properties.typed_string.properties.$schema, data: data13 };
						vErrors.push(err46);
						errors++;
					}
				}
				if (data12.$id !== undefined) {
					let data14 = data12.$id;
					if (typeof data14 === 'string') {
						if (func1(data14) < 1) {
							const err47: ErrorObject = { instancePath: instancePath + '/typed_string/$id', schemaPath: '#/properties/typed_string/properties/%24id/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema31.properties.typed_string.properties.$id, data: data14 };
							vErrors.push(err47);
							errors++;
						}
					} else {
						const err48: ErrorObject = { instancePath: instancePath + '/typed_string/$id', schemaPath: '#/properties/typed_string/properties/%24id/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.typed_string.properties.$id.type, parentSchema: schema31.properties.typed_string.properties.$id, data: data14 };
						vErrors.push(err48);
						errors++;
					}
				}
				if (data12.$defs !== undefined) {
					let data15 = data12.$defs;
					if (ajv_utilities__is_probably_object(data15)) {
						if (Object.keys(data15).length < 1) {
							const err49: ErrorObject = { instancePath: instancePath + '/typed_string/$defs', schemaPath: '#/properties/typed_string/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema31.properties.typed_string.properties.$defs, data: data15 };
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
									const err50: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[0], data: data16 };
									vErrors.push(err50);
									errors++;
								}
								if (data16.type !== undefined) {
									let data17 = data16.type;
									if (typeof data17 === 'string') {
										if (func1(data17) < 1) {
											const err51: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data17 };
											vErrors.push(err51);
											errors++;
										}
									} else {
										const err52: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data17 };
										vErrors.push(err52);
										errors++;
									}
								}
							} else {
								const err53: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[0], data: data16 };
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
									const err54: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1], data: data16 };
									vErrors.push(err54);
									errors++;
								}
								for (const key8 in data16) {
									if (!(key8 === 'allOf')) {
										const err55: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key8 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1], data: data16 };
										vErrors.push(err55);
										errors++;
									}
								}
								if (data16.allOf !== undefined) {
									let data18 = data16.allOf;
									if (ajv_utilities__is_probably_array(data18)) {
										if (data18.length < 2) {
											const err56: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data18 };
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
													const err57: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data19 };
													vErrors.push(err57);
													errors++;
												}
												if (data19.type !== undefined) {
													let data20 = data19.type;
													if (typeof data20 === 'string') {
														if (func1(data20) < 1) {
															const err58: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2 + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data20 };
															vErrors.push(err58);
															errors++;
														}
													} else {
														const err59: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2 + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data20 };
														vErrors.push(err59);
														errors++;
													}
												}
											} else {
												const err60: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data19 };
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
													const err61: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data19 };
													vErrors.push(err61);
													errors++;
												}
												for (const key9 in data19) {
													if (!(key9 === '$ref')) {
														const err62: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key9 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data19 };
														vErrors.push(err62);
														errors++;
													}
												}
												if (data19.$ref !== undefined) {
													let data21 = data19.$ref;
													if (typeof data21 === 'string') {
														if (!pattern4.test(data21)) {
															const err63: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2 + '/$ref', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data21 };
															vErrors.push(err63);
															errors++;
														}
													} else {
														const err64: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2 + '/$ref', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data21 };
														vErrors.push(err64);
														errors++;
													}
												}
											} else {
												const err65: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data19 };
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
												const err66: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i2, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data19 };
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
										const err67: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data18 };
										vErrors.push(err67);
										errors++;
									}
								}
							} else {
								const err68: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[1], data: data16 };
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
										const err69: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2], data: data16 };
										vErrors.push(err69);
										errors++;
									}
									for (const key10 in data16) {
										if (!(key10 === 'oneOf')) {
											const err70: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key10 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2], data: data16 };
											vErrors.push(err70);
											errors++;
										}
									}
									if (data16.oneOf !== undefined) {
										let data22 = data16.oneOf;
										if (ajv_utilities__is_probably_array(data22)) {
											if (data22.length < 2) {
												const err71: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data22 };
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
														const err72: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data23 };
														vErrors.push(err72);
														errors++;
													}
													if (data23.type !== undefined) {
														let data24 = data23.type;
														if (typeof data24 === 'string') {
															if (func1(data24) < 1) {
																const err73: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3 + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data24 };
																vErrors.push(err73);
																errors++;
															}
														} else {
															const err74: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3 + '/type', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data24 };
															vErrors.push(err74);
															errors++;
														}
													}
												} else {
													const err75: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data23 };
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
														const err76: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data23 };
														vErrors.push(err76);
														errors++;
													}
													for (const key11 in data23) {
														if (!(key11 === '$ref')) {
															const err77: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key11 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data23 };
															vErrors.push(err77);
															errors++;
														}
													}
													if (data23.$ref !== undefined) {
														let data25 = data23.$ref;
														if (typeof data25 === 'string') {
															if (!pattern4.test(data25)) {
																const err78: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3 + '/$ref', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data25 };
																vErrors.push(err78);
																errors++;
															}
														} else {
															const err79: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3 + '/$ref', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data25 };
															vErrors.push(err79);
															errors++;
														}
													}
												} else {
													const err80: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data23 };
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
													const err81: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i3, schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing5 }, message: 'must match exactly one schema in oneOf', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data23 };
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
											const err82: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data22 };
											vErrors.push(err82);
											errors++;
										}
									}
								} else {
									const err83: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf[2], data: data16 };
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
								const err84: ErrorObject = { instancePath: instancePath + '/typed_string/$defs/' + key7.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema31.properties.typed_string.properties.$defs.additionalProperties.oneOf, parentSchema: schema31.properties.typed_string.properties.$defs.additionalProperties, data: data16 };
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
						const err85: ErrorObject = { instancePath: instancePath + '/typed_string/$defs', schemaPath: '#/properties/typed_string/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.typed_string.properties.$defs.type, parentSchema: schema31.properties.typed_string.properties.$defs, data: data15 };
						vErrors.push(err85);
						errors++;
					}
				}
				if (data12.type !== undefined) {
					let data26 = data12.type;
					if (typeof data26 !== 'string') {
						const err86: ErrorObject = { instancePath: instancePath + '/typed_string/type', schemaPath: '#/properties/typed_string/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.typed_string.properties.type.type, parentSchema: schema31.properties.typed_string.properties.type, data: data26 };
						vErrors.push(err86);
						errors++;
					}
					if ('object' !== data26) {
						const err87: ErrorObject = { instancePath: instancePath + '/typed_string/type', schemaPath: '#/properties/typed_string/properties/type/const', keyword: 'const', params: { allowedValue: 'object' }, message: 'must be equal to constant', schema: 'object', parentSchema: schema31.properties.typed_string.properties.type, data: data26 };
						vErrors.push(err87);
						errors++;
					}
				}
				if (data12.$ref !== undefined) {
					let data27 = data12.$ref;
					if (typeof data27 === 'string') {
						if (!pattern4.test(data27)) {
							const err88: ErrorObject = { instancePath: instancePath + '/typed_string/$ref', schemaPath: '#/properties/typed_string/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema31.properties.typed_string.properties.$ref, data: data27 };
							vErrors.push(err88);
							errors++;
						}
					} else {
						const err89: ErrorObject = { instancePath: instancePath + '/typed_string/$ref', schemaPath: '#/properties/typed_string/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.typed_string.properties.$ref.type, parentSchema: schema31.properties.typed_string.properties.$ref, data: data27 };
						vErrors.push(err89);
						errors++;
					}
				}
				if (data12.additionalProperties !== undefined) {
					let data28 = data12.additionalProperties;
					if (typeof data28 !== 'boolean') {
						const err90: ErrorObject = { instancePath: instancePath + '/typed_string/additionalProperties', schemaPath: '#/properties/typed_string/properties/additionalProperties/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema31.properties.typed_string.properties.additionalProperties.type, parentSchema: schema31.properties.typed_string.properties.additionalProperties, data: data28 };
						vErrors.push(err90);
						errors++;
					}
				}
				if (data12.unevaluatedProperties !== undefined) {
					let data29 = data12.unevaluatedProperties;
					if (typeof data29 !== 'boolean') {
						const err91: ErrorObject = { instancePath: instancePath + '/typed_string/unevaluatedProperties', schemaPath: '#/properties/typed_string/properties/unevaluatedProperties/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema31.properties.typed_string.properties.unevaluatedProperties.type, parentSchema: schema31.properties.typed_string.properties.unevaluatedProperties, data: data29 };
						vErrors.push(err91);
						errors++;
					}
				}
				if (data12.required !== undefined) {
					let data30 = data12.required;
					if (ajv_utilities__is_probably_array(data30)) {
						if (data30.length < 1) {
							const err92: ErrorObject = { instancePath: instancePath + '/typed_string/required', schemaPath: '#/properties/typed_string/properties/required/minItems', keyword: 'minItems', params: { limit: 1 }, message: 'must NOT have fewer than 1 items', schema: 1, parentSchema: schema31.properties.typed_string.properties.required, data: data30 };
							vErrors.push(err92);
							errors++;
						}
						const len4 = data30.length;
						for (let i4 = 0; i4 < len4; i4++) {
							let data31 = data30[i4];
							if (typeof data31 === 'string') {
								if (func1(data31) < 1) {
									const err93: ErrorObject = { instancePath: instancePath + '/typed_string/required/' + i4, schemaPath: '#/properties/typed_string/properties/required/items/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema31.properties.typed_string.properties.required.items, data: data31 };
									vErrors.push(err93);
									errors++;
								}
							} else {
								const err94: ErrorObject = { instancePath: instancePath + '/typed_string/required/' + i4, schemaPath: '#/properties/typed_string/properties/required/items/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.typed_string.properties.required.items.type, parentSchema: schema31.properties.typed_string.properties.required.items, data: data31 };
								vErrors.push(err94);
								errors++;
							}
						}
					} else {
						const err95: ErrorObject = { instancePath: instancePath + '/typed_string/required', schemaPath: '#/properties/typed_string/properties/required/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema31.properties.typed_string.properties.required.type, parentSchema: schema31.properties.typed_string.properties.required, data: data30 };
						vErrors.push(err95);
						errors++;
					}
				}
				if (data12.properties !== undefined) {
					let data32 = data12.properties;
					if (ajv_utilities__is_probably_object(data32)) {
						if (Object.keys(data32).length < 1) {
							const err96: ErrorObject = { instancePath: instancePath + '/typed_string/properties', schemaPath: '#/properties/typed_string/properties/properties/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema31.properties.typed_string.properties.properties, data: data32 };
							vErrors.push(err96);
							errors++;
						}
						for (const key12 in data32) {
							let data33 = data32[key12];
							if (!(data33 && typeof data33 == 'object' && !Array.isArray(data33))) {
								const err97: ErrorObject = { instancePath: instancePath + '/typed_string/properties/' + key12.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/typed_string/properties/properties/additionalProperties/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.typed_string.properties.properties.additionalProperties.type, parentSchema: schema31.properties.typed_string.properties.properties.additionalProperties, data: data33 };
								vErrors.push(err97);
								errors++;
							}
						}
					} else {
						const err98: ErrorObject = { instancePath: instancePath + '/typed_string/properties', schemaPath: '#/properties/typed_string/properties/properties/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.typed_string.properties.properties.type, parentSchema: schema31.properties.typed_string.properties.properties, data: data32 };
						vErrors.push(err98);
						errors++;
					}
				}
			} else {
				const err99: ErrorObject = { instancePath: instancePath + '/typed_string', schemaPath: '#/properties/typed_string/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.typed_string.type, parentSchema: schema31.properties.typed_string, data: data12 };
				vErrors.push(err99);
				errors++;
			}
		}
	} else {
		const err100: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.type, parentSchema: schema31, data };
		vErrors.push(err100);
		errors++;
	}
	(validate20 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate20 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
