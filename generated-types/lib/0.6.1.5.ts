// oxlint-disable @stylistic/max-len
import type {
	ErrorObject, ValidateFunction,
} from 'ajv';
import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';
import type {
	PrefixedString_type,
} from '../../src/version-specific/0.6.1.5/PrefixedString.ts';
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
export const PropertySchemaToRegex_PrefixedString_non_quoted = validate20;
const schema31 = { $id: 'docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'non_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 } } } } };
const func1 = ucs2length;
const pattern4 = new RegExp('^(.+)?#\\/\\$defs\\/(.+)$', 'u');
function validate20(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
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

	/* # sourceURL="docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted" */
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
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema31.required, parentSchema: schema31, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
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
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema31.properties.DocsDotJson_PrefixedString.required, parentSchema: schema31.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema31.properties.DocsDotJson_PrefixedString.required, parentSchema: schema31.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema31.properties.DocsDotJson_PrefixedString.required, parentSchema: schema31.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema31.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema31.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema31.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('non_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'non_quoted' }, message: 'must be equal to constant', schema: 'non_quoted', parentSchema: schema31.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema31.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema31.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema31.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema31.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema31.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema31.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
				if (data12.first_path !== undefined) {
					let data16 = data12.first_path;
					if (typeof data16 === 'string') {
						if (func1(data16) < 1) {
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema31.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema31.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
			} else {
				const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.DocsDotJson_PrefixedString.type, parentSchema: schema31.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err56);
				errors++;
			}
		}
	} else {
		const err57: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.type, parentSchema: schema31, data };
		vErrors.push(err57);
		errors++;
	}
	(validate20 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate20 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_quoted = validate21;
const schema32 = { $id: 'docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--quoted', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 } } } } };
function validate21(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
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

	/* # sourceURL="docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--quoted" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate21);
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
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema32.required, parentSchema: schema32, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema32, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema32.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema32.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema32.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema32.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema32.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema32.properties.$defs.additionalProperties.oneOf, parentSchema: schema32.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.properties.$defs.type, parentSchema: schema32.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.type.type, parentSchema: schema32.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema32.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema32.properties.DocsDotJson_PrefixedString.required, parentSchema: schema32.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema32.properties.DocsDotJson_PrefixedString.required, parentSchema: schema32.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema32.properties.DocsDotJson_PrefixedString.required, parentSchema: schema32.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema32.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'quoted' }, message: 'must be equal to constant', schema: 'quoted', parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema32.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema32.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
				if (data12.first_path !== undefined) {
					let data16 = data12.first_path;
					if (typeof data16 === 'string') {
						if (func1(data16) < 1) {
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
			} else {
				const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.properties.DocsDotJson_PrefixedString.type, parentSchema: schema32.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err56);
				errors++;
			}
		}
	} else {
		const err57: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.type, parentSchema: schema32, data };
		vErrors.push(err57);
		errors++;
	}
	(validate21 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate21 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_single_quoted = validate22;
const schema33 = { $id: 'docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'single_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 } } } } };
function validate22(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
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

	/* # sourceURL="docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate22);
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
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema33.required, parentSchema: schema33, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema33, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema33.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema33.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema33.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema33.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema33.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema33.properties.$defs.additionalProperties.oneOf, parentSchema: schema33.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.properties.$defs.type, parentSchema: schema33.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.type.type, parentSchema: schema33.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema33.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema33.properties.DocsDotJson_PrefixedString.required, parentSchema: schema33.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema33.properties.DocsDotJson_PrefixedString.required, parentSchema: schema33.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema33.properties.DocsDotJson_PrefixedString.required, parentSchema: schema33.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema33.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('single_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'single_quoted' }, message: 'must be equal to constant', schema: 'single_quoted', parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema33.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema33.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
				if (data12.first_path !== undefined) {
					let data16 = data12.first_path;
					if (typeof data16 === 'string') {
						if (func1(data16) < 1) {
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
			} else {
				const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.properties.DocsDotJson_PrefixedString.type, parentSchema: schema33.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err56);
				errors++;
			}
		}
	} else {
		const err57: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.type, parentSchema: schema33, data };
		vErrors.push(err57);
		errors++;
	}
	(validate22 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate22 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_version_specific_default = validate23;
const schema34 = { $id: 'docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'version_specific_default' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 } } } } };
function validate23(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
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

	/* # sourceURL="docs.json.ts--lib--0.6.1.5--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate23);
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
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema34.required, parentSchema: schema34, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema34, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema34.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema34.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema34.properties.$defs.additionalProperties.oneOf, parentSchema: schema34.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.$defs.type, parentSchema: schema34.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.type.type, parentSchema: schema34.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema34.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema34.properties.DocsDotJson_PrefixedString.required, parentSchema: schema34.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema34.properties.DocsDotJson_PrefixedString.required, parentSchema: schema34.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema34.properties.DocsDotJson_PrefixedString.required, parentSchema: schema34.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema34.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('version_specific_default' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'version_specific_default' }, message: 'must be equal to constant', schema: 'version_specific_default', parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema34.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema34.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
				if (data12.first_path !== undefined) {
					let data16 = data12.first_path;
					if (typeof data16 === 'string') {
						if (func1(data16) < 1) {
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
			} else {
				const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.DocsDotJson_PrefixedString.type, parentSchema: schema34.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err56);
				errors++;
			}
		}
	} else {
		const err57: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.type, parentSchema: schema34, data };
		vErrors.push(err57);
		errors++;
	}
	(validate23 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate23 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
