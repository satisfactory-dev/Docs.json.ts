// oxlint-disable @stylistic/max-len
import type {
	ErrorObject, ValidateFunction,
} from 'ajv';
import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';
import type {
	NonEmptyString_type,
} from '../../src/version-specific/0.8.3.3/TypedString/PropertySchemaToRegex/NonEmptyString.ts';
import type {
	PrefixedString_type,
} from '../../src/version-specific/0.8.3.3/PrefixedString.ts';
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
export const PropertySchemaToRegex_NonEmptyString = validate20;
const schema31 = { $schema: 'https://json-schema.org/draft/2020-12/schema', $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--NonEmptyString', type: 'object', additionalProperties: false, required: ['type', 'minLength'] as const, properties: { type: { type: 'string', const: 'string' }, minLength: { type: 'integer', const: 1 } } };
function validate20(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is NonEmptyString_type {
	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--NonEmptyString" */
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
		if (data.minLength === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'minLength' }, message: 'must have required property \'' + 'minLength' + '\'', schema: schema31.required, parentSchema: schema31, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!((key0 === 'type') || (key0 === 'minLength'))) {
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
		if (data.minLength !== undefined) {
			let data1 = data.minLength;
			if (!(((typeof data1 == 'number') && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))) {
				const err5: ErrorObject = { instancePath: instancePath + '/minLength', schemaPath: '#/properties/minLength/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer', schema: schema31.properties.minLength.type, parentSchema: schema31.properties.minLength, data: data1 };
				vErrors.push(err5);
				errors++;
			}
			if (1 !== data1) {
				const err6: ErrorObject = { instancePath: instancePath + '/minLength', schemaPath: '#/properties/minLength/const', keyword: 'const', params: { allowedValue: 1 }, message: 'must be equal to constant', schema: 1, parentSchema: schema31.properties.minLength, data: data1 };
				vErrors.push(err6);
				errors++;
			}
		}
	} else {
		const err7: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.type, parentSchema: schema31, data };
		vErrors.push(err7);
		errors++;
	}
	(validate20 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate20 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_Engine_non_quoted = validate21;
const schema32 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted--Engine', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'non_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'Engine' }, { type: 'boolean', const: false }] as const } } } } };
const func1 = ucs2length;
const pattern4 = new RegExp('^(.+)?#\\/\\$defs\\/(.+)$', 'u');
function validate21(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'non_quoted', 'Engine'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted--Engine" */
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
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
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
					if ('non_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'non_quoted' }, message: 'must be equal to constant', schema: 'non_quoted', parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('Engine' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'Engine' }, message: 'must be equal to constant', schema: 'Engine', parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema32.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema32.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema32.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.properties.DocsDotJson_PrefixedString.type, parentSchema: schema32.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.type, parentSchema: schema32, data };
		vErrors.push(err64);
		errors++;
	}
	(validate21 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate21 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_Engine_quoted = validate22;
const schema33 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--quoted--Engine', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'Engine' }, { type: 'boolean', const: false }] as const } } } } };
function validate22(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'quoted', 'Engine'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--quoted--Engine" */
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
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
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
					if ('quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'quoted' }, message: 'must be equal to constant', schema: 'quoted', parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema33.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('Engine' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'Engine' }, message: 'must be equal to constant', schema: 'Engine', parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema33.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema33.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema33.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.properties.DocsDotJson_PrefixedString.type, parentSchema: schema33.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema33.type, parentSchema: schema33, data };
		vErrors.push(err64);
		errors++;
	}
	(validate22 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate22 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_Engine_single_quoted = validate23;
const schema34 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted--Engine', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'single_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'Engine' }, { type: 'boolean', const: false }] as const } } } } };
function validate23(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'single_quoted', 'Engine'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted--Engine" */
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
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
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
					if ('single_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'single_quoted' }, message: 'must be equal to constant', schema: 'single_quoted', parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema34.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('Engine' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'Engine' }, message: 'must be equal to constant', schema: 'Engine', parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema34.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema34.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema34.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.properties.DocsDotJson_PrefixedString.type, parentSchema: schema34.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema34.type, parentSchema: schema34, data };
		vErrors.push(err64);
		errors++;
	}
	(validate23 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate23 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_Engine_version_specific_default = validate24;
const schema35 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default--Engine', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'version_specific_default' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'Engine' }, { type: 'boolean', const: false }] as const } } } } };
function validate24(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'version_specific_default', 'Engine'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default--Engine" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate24);
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
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema35.required, parentSchema: schema35, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema35, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema35.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema35.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema35.properties.$defs.additionalProperties.oneOf, parentSchema: schema35.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.$defs.type, parentSchema: schema35.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.type.type, parentSchema: schema35.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema35.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema35.properties.DocsDotJson_PrefixedString.required, parentSchema: schema35.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema35.properties.DocsDotJson_PrefixedString.required, parentSchema: schema35.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema35.properties.DocsDotJson_PrefixedString.required, parentSchema: schema35.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema35.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('version_specific_default' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'version_specific_default' }, message: 'must be equal to constant', schema: 'version_specific_default', parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema35.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema35.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema35.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('Engine' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'Engine' }, message: 'must be equal to constant', schema: 'Engine', parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema35.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema35.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema35.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.properties.DocsDotJson_PrefixedString.type, parentSchema: schema35.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema35.type, parentSchema: schema35, data };
		vErrors.push(err64);
		errors++;
	}
	(validate24 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate24 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_TemplateSequence_non_quoted = validate25;
const schema36 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted--TemplateSequence', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'non_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'TemplateSequence' }, { type: 'boolean', const: false }] as const } } } } };
function validate25(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'non_quoted', 'TemplateSequence'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted--TemplateSequence" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate25);
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
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema36.required, parentSchema: schema36, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema36, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema36.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema36.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema36.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema36.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema36.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema36.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema36.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema36.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema36.properties.$defs.additionalProperties.oneOf, parentSchema: schema36.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema36.properties.$defs.type, parentSchema: schema36.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.type.type, parentSchema: schema36.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema36.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema36.properties.DocsDotJson_PrefixedString.required, parentSchema: schema36.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema36.properties.DocsDotJson_PrefixedString.required, parentSchema: schema36.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema36.properties.DocsDotJson_PrefixedString.required, parentSchema: schema36.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema36.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('non_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'non_quoted' }, message: 'must be equal to constant', schema: 'non_quoted', parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema36.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema36.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema36.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('TemplateSequence' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'TemplateSequence' }, message: 'must be equal to constant', schema: 'TemplateSequence', parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema36.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema36.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema36.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema36.properties.DocsDotJson_PrefixedString.type, parentSchema: schema36.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema36.type, parentSchema: schema36, data };
		vErrors.push(err64);
		errors++;
	}
	(validate25 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate25 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_TemplateSequence_quoted = validate26;
const schema37 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--quoted--TemplateSequence', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'TemplateSequence' }, { type: 'boolean', const: false }] as const } } } } };
function validate26(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'quoted', 'TemplateSequence'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--quoted--TemplateSequence" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate26);
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
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema37.required, parentSchema: schema37, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
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
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema37.properties.DocsDotJson_PrefixedString.required, parentSchema: schema37.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema37.properties.DocsDotJson_PrefixedString.required, parentSchema: schema37.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema37.properties.DocsDotJson_PrefixedString.required, parentSchema: schema37.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema37.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'quoted' }, message: 'must be equal to constant', schema: 'quoted', parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema37.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema37.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema37.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('TemplateSequence' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'TemplateSequence' }, message: 'must be equal to constant', schema: 'TemplateSequence', parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema37.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema37.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema37.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.properties.DocsDotJson_PrefixedString.type, parentSchema: schema37.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema37.type, parentSchema: schema37, data };
		vErrors.push(err64);
		errors++;
	}
	(validate26 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate26 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_TemplateSequence_single_quoted = validate27;
const schema38 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted--TemplateSequence', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'single_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'TemplateSequence' }, { type: 'boolean', const: false }] as const } } } } };
function validate27(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'single_quoted', 'TemplateSequence'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted--TemplateSequence" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate27);
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
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
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
					if ('single_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'single_quoted' }, message: 'must be equal to constant', schema: 'single_quoted', parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
				if (data12.first_path !== undefined) {
					let data16 = data12.first_path;
					if (typeof data16 === 'string') {
						if (func1(data16) < 1) {
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema38.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('TemplateSequence' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'TemplateSequence' }, message: 'must be equal to constant', schema: 'TemplateSequence', parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema38.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema38.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema38.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.properties.DocsDotJson_PrefixedString.type, parentSchema: schema38.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema38.type, parentSchema: schema38, data };
		vErrors.push(err64);
		errors++;
	}
	(validate27 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate27 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_TemplateSequence_version_specific_default = validate28;
const schema39 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default--TemplateSequence', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'version_specific_default' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'TemplateSequence' }, { type: 'boolean', const: false }] as const } } } } };
function validate28(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'version_specific_default', 'TemplateSequence'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default--TemplateSequence" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate28);
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
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
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
					if ('version_specific_default' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'version_specific_default' }, message: 'must be equal to constant', schema: 'version_specific_default', parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
				if (data12.first_path !== undefined) {
					let data16 = data12.first_path;
					if (typeof data16 === 'string') {
						if (func1(data16) < 1) {
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema39.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('TemplateSequence' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'TemplateSequence' }, message: 'must be equal to constant', schema: 'TemplateSequence', parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema39.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema39.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema39.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.properties.DocsDotJson_PrefixedString.type, parentSchema: schema39.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema39.type, parentSchema: schema39, data };
		vErrors.push(err64);
		errors++;
	}
	(validate28 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate28 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_FactoryGame_non_quoted = validate29;
const schema40 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted--FactoryGame', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'non_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'FactoryGame' }, { type: 'boolean', const: false }] as const } } } } };
function validate29(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'non_quoted', 'FactoryGame'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted--FactoryGame" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate29);
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
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
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
					if ('non_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'non_quoted' }, message: 'must be equal to constant', schema: 'non_quoted', parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
				if (data12.first_path !== undefined) {
					let data16 = data12.first_path;
					if (typeof data16 === 'string') {
						if (func1(data16) < 1) {
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema40.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('FactoryGame' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'FactoryGame' }, message: 'must be equal to constant', schema: 'FactoryGame', parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema40.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema40.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema40.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.properties.DocsDotJson_PrefixedString.type, parentSchema: schema40.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema40.type, parentSchema: schema40, data };
		vErrors.push(err64);
		errors++;
	}
	(validate29 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate29 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_FactoryGame_quoted = validate30;
const schema41 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--quoted--FactoryGame', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'FactoryGame' }, { type: 'boolean', const: false }] as const } } } } };
function validate30(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'quoted', 'FactoryGame'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--quoted--FactoryGame" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate30);
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
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
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
					if ('quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'quoted' }, message: 'must be equal to constant', schema: 'quoted', parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
				if (data12.first_path !== undefined) {
					let data16 = data12.first_path;
					if (typeof data16 === 'string') {
						if (func1(data16) < 1) {
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema41.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('FactoryGame' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'FactoryGame' }, message: 'must be equal to constant', schema: 'FactoryGame', parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema41.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema41.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema41.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.properties.DocsDotJson_PrefixedString.type, parentSchema: schema41.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema41.type, parentSchema: schema41, data };
		vErrors.push(err64);
		errors++;
	}
	(validate30 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate30 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_FactoryGame_single_quoted = validate31;
const schema42 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted--FactoryGame', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'single_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'FactoryGame' }, { type: 'boolean', const: false }] as const } } } } };
function validate31(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'single_quoted', 'FactoryGame'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted--FactoryGame" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate31);
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema42.required, parentSchema: schema42, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema42.required, parentSchema: schema42, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema42, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema42.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema42.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema42.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema42.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema42.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema42.properties.$defs.additionalProperties.oneOf, parentSchema: schema42.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.properties.$defs.type, parentSchema: schema42.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.type.type, parentSchema: schema42.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema42.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema42.properties.DocsDotJson_PrefixedString.required, parentSchema: schema42.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema42.properties.DocsDotJson_PrefixedString.required, parentSchema: schema42.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema42.properties.DocsDotJson_PrefixedString.required, parentSchema: schema42.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema42.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('single_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'single_quoted' }, message: 'must be equal to constant', schema: 'single_quoted', parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema42.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema42.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema42.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('FactoryGame' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'FactoryGame' }, message: 'must be equal to constant', schema: 'FactoryGame', parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema42.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema42.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema42.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.properties.DocsDotJson_PrefixedString.type, parentSchema: schema42.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema42.type, parentSchema: schema42, data };
		vErrors.push(err64);
		errors++;
	}
	(validate31 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate31 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_FactoryGame_version_specific_default = validate32;
const schema43 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default--FactoryGame', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'version_specific_default' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'FactoryGame' }, { type: 'boolean', const: false }] as const } } } } };
function validate32(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'version_specific_default', 'FactoryGame'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default--FactoryGame" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate32);
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
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema43.required, parentSchema: schema43, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema43, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema43.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema43.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema43.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema43.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema43.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema43.properties.$defs.additionalProperties.oneOf, parentSchema: schema43.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.$defs.type, parentSchema: schema43.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.type.type, parentSchema: schema43.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema43.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema43.properties.DocsDotJson_PrefixedString.required, parentSchema: schema43.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema43.properties.DocsDotJson_PrefixedString.required, parentSchema: schema43.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema43.properties.DocsDotJson_PrefixedString.required, parentSchema: schema43.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema43.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('version_specific_default' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'version_specific_default' }, message: 'must be equal to constant', schema: 'version_specific_default', parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema43.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema43.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema43.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('FactoryGame' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'FactoryGame' }, message: 'must be equal to constant', schema: 'FactoryGame', parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema43.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema43.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema43.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.properties.DocsDotJson_PrefixedString.type, parentSchema: schema43.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema43.type, parentSchema: schema43, data };
		vErrors.push(err64);
		errors++;
	}
	(validate32 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate32 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_AkAudio_non_quoted = validate33;
const schema44 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted--AkAudio', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'non_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'AkAudio' }, { type: 'boolean', const: false }] as const } } } } };
function validate33(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'non_quoted', 'AkAudio'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted--AkAudio" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate33);
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema44.required, parentSchema: schema44, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema44.required, parentSchema: schema44, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema44, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema44.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema44.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema44.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema44.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema44.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema44.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema44.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema44.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema44.properties.$defs.additionalProperties.oneOf, parentSchema: schema44.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema44.properties.$defs.type, parentSchema: schema44.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.type.type, parentSchema: schema44.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema44.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema44.properties.DocsDotJson_PrefixedString.required, parentSchema: schema44.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema44.properties.DocsDotJson_PrefixedString.required, parentSchema: schema44.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema44.properties.DocsDotJson_PrefixedString.required, parentSchema: schema44.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema44.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('non_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'non_quoted' }, message: 'must be equal to constant', schema: 'non_quoted', parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema44.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema44.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema44.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('AkAudio' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'AkAudio' }, message: 'must be equal to constant', schema: 'AkAudio', parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema44.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema44.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema44.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema44.properties.DocsDotJson_PrefixedString.type, parentSchema: schema44.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema44.type, parentSchema: schema44, data };
		vErrors.push(err64);
		errors++;
	}
	(validate33 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate33 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_AkAudio_quoted = validate34;
const schema45 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--quoted--AkAudio', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'AkAudio' }, { type: 'boolean', const: false }] as const } } } } };
function validate34(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'quoted', 'AkAudio'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--quoted--AkAudio" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate34);
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema45.required, parentSchema: schema45, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema45.required, parentSchema: schema45, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema45, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema45.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema45.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema45.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema45.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema45.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema45.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema45.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema45.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema45.properties.$defs.additionalProperties.oneOf, parentSchema: schema45.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema45.properties.$defs.type, parentSchema: schema45.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.type.type, parentSchema: schema45.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema45.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema45.properties.DocsDotJson_PrefixedString.required, parentSchema: schema45.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema45.properties.DocsDotJson_PrefixedString.required, parentSchema: schema45.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema45.properties.DocsDotJson_PrefixedString.required, parentSchema: schema45.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema45.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'quoted' }, message: 'must be equal to constant', schema: 'quoted', parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema45.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema45.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema45.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('AkAudio' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'AkAudio' }, message: 'must be equal to constant', schema: 'AkAudio', parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema45.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema45.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema45.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema45.properties.DocsDotJson_PrefixedString.type, parentSchema: schema45.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema45.type, parentSchema: schema45, data };
		vErrors.push(err64);
		errors++;
	}
	(validate34 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate34 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_AkAudio_single_quoted = validate35;
const schema46 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted--AkAudio', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'single_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'AkAudio' }, { type: 'boolean', const: false }] as const } } } } };
function validate35(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'single_quoted', 'AkAudio'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted--AkAudio" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate35);
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema46.required, parentSchema: schema46, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema46.required, parentSchema: schema46, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema46, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema46.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema46.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema46.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema46.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema46.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema46.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema46.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema46.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema46.properties.$defs.additionalProperties.oneOf, parentSchema: schema46.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema46.properties.$defs.type, parentSchema: schema46.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.type.type, parentSchema: schema46.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema46.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema46.properties.DocsDotJson_PrefixedString.required, parentSchema: schema46.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema46.properties.DocsDotJson_PrefixedString.required, parentSchema: schema46.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema46.properties.DocsDotJson_PrefixedString.required, parentSchema: schema46.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema46.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('single_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'single_quoted' }, message: 'must be equal to constant', schema: 'single_quoted', parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema46.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema46.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema46.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('AkAudio' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'AkAudio' }, message: 'must be equal to constant', schema: 'AkAudio', parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema46.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema46.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema46.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema46.properties.DocsDotJson_PrefixedString.type, parentSchema: schema46.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema46.type, parentSchema: schema46, data };
		vErrors.push(err64);
		errors++;
	}
	(validate35 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate35 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_AkAudio_version_specific_default = validate36;
const schema47 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default--AkAudio', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'version_specific_default' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'AkAudio' }, { type: 'boolean', const: false }] as const } } } } };
function validate36(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'version_specific_default', 'AkAudio'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default--AkAudio" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate36);
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema47.required, parentSchema: schema47, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema47.required, parentSchema: schema47, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema47, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema47.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema47.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema47.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema47.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema47.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema47.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema47.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema47.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema47.properties.$defs.additionalProperties.oneOf, parentSchema: schema47.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema47.properties.$defs.type, parentSchema: schema47.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.type.type, parentSchema: schema47.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema47.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema47.properties.DocsDotJson_PrefixedString.required, parentSchema: schema47.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema47.properties.DocsDotJson_PrefixedString.required, parentSchema: schema47.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema47.properties.DocsDotJson_PrefixedString.required, parentSchema: schema47.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema47.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('version_specific_default' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'version_specific_default' }, message: 'must be equal to constant', schema: 'version_specific_default', parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema47.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema47.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema47.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('AkAudio' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'AkAudio' }, message: 'must be equal to constant', schema: 'AkAudio', parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema47.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema47.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema47.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema47.properties.DocsDotJson_PrefixedString.type, parentSchema: schema47.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema47.type, parentSchema: schema47, data };
		vErrors.push(err64);
		errors++;
	}
	(validate36 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate36 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_CoreUObject_non_quoted = validate37;
const schema48 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted--CoreUObject', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'non_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'CoreUObject' }, { type: 'boolean', const: false }] as const } } } } };
function validate37(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'non_quoted', 'CoreUObject'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--non_quoted--CoreUObject" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate37);
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema48.required, parentSchema: schema48, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema48.required, parentSchema: schema48, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema48, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema48.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema48.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema48.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema48.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema48.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema48.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema48.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema48.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema48.properties.$defs.additionalProperties.oneOf, parentSchema: schema48.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema48.properties.$defs.type, parentSchema: schema48.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.type.type, parentSchema: schema48.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema48.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema48.properties.DocsDotJson_PrefixedString.required, parentSchema: schema48.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema48.properties.DocsDotJson_PrefixedString.required, parentSchema: schema48.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema48.properties.DocsDotJson_PrefixedString.required, parentSchema: schema48.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema48.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('non_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'non_quoted' }, message: 'must be equal to constant', schema: 'non_quoted', parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema48.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema48.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema48.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('CoreUObject' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'CoreUObject' }, message: 'must be equal to constant', schema: 'CoreUObject', parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema48.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema48.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema48.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema48.properties.DocsDotJson_PrefixedString.type, parentSchema: schema48.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema48.type, parentSchema: schema48, data };
		vErrors.push(err64);
		errors++;
	}
	(validate37 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate37 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_CoreUObject_quoted = validate38;
const schema49 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--quoted--CoreUObject', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'CoreUObject' }, { type: 'boolean', const: false }] as const } } } } };
function validate38(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'quoted', 'CoreUObject'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--quoted--CoreUObject" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate38);
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema49.required, parentSchema: schema49, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema49.required, parentSchema: schema49, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema49, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema49.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema49.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema49.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema49.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema49.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema49.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema49.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema49.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema49.properties.$defs.additionalProperties.oneOf, parentSchema: schema49.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema49.properties.$defs.type, parentSchema: schema49.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.type.type, parentSchema: schema49.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema49.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema49.properties.DocsDotJson_PrefixedString.required, parentSchema: schema49.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema49.properties.DocsDotJson_PrefixedString.required, parentSchema: schema49.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema49.properties.DocsDotJson_PrefixedString.required, parentSchema: schema49.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema49.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'quoted' }, message: 'must be equal to constant', schema: 'quoted', parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema49.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema49.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema49.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('CoreUObject' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'CoreUObject' }, message: 'must be equal to constant', schema: 'CoreUObject', parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema49.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema49.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema49.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema49.properties.DocsDotJson_PrefixedString.type, parentSchema: schema49.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema49.type, parentSchema: schema49, data };
		vErrors.push(err64);
		errors++;
	}
	(validate38 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate38 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_CoreUObject_single_quoted = validate39;
const schema50 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted--CoreUObject', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'single_quoted' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'CoreUObject' }, { type: 'boolean', const: false }] as const } } } } };
function validate39(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'single_quoted', 'CoreUObject'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--single_quoted--CoreUObject" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate39);
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema50.required, parentSchema: schema50, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema50.required, parentSchema: schema50, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema50, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema50.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema50.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema50.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema50.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema50.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema50.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema50.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema50.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema50.properties.$defs.additionalProperties.oneOf, parentSchema: schema50.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema50.properties.$defs.type, parentSchema: schema50.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.type.type, parentSchema: schema50.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema50.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema50.properties.DocsDotJson_PrefixedString.required, parentSchema: schema50.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema50.properties.DocsDotJson_PrefixedString.required, parentSchema: schema50.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema50.properties.DocsDotJson_PrefixedString.required, parentSchema: schema50.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema50.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('single_quoted' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'single_quoted' }, message: 'must be equal to constant', schema: 'single_quoted', parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema50.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema50.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema50.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('CoreUObject' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'CoreUObject' }, message: 'must be equal to constant', schema: 'CoreUObject', parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema50.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema50.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema50.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema50.properties.DocsDotJson_PrefixedString.type, parentSchema: schema50.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema50.type, parentSchema: schema50, data };
		vErrors.push(err64);
		errors++;
	}
	(validate39 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate39 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const PropertySchemaToRegex_PrefixedString_CoreUObject_version_specific_default = validate40;
const schema51 = { $id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default--CoreUObject', type: 'object', additionalProperties: false, required: ['type', 'DocsDotJson_PrefixedString'] as const, properties: { $defs: { type: 'object', minProperties: 1, additionalProperties: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['allOf'] as const, properties: { allOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }, { type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { oneOf: { type: 'array', minItems: 2, items: { oneOf: [{ type: 'object', required: ['type'] as const, properties: { type: { type: 'string', minLength: 1 } } }, { type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^(.+)?#\\/\\$defs\\/(.+)$' } } }] as const } } } }] as const } }, type: { type: 'string', const: 'string' }, DocsDotJson_PrefixedString: { type: 'object', additionalProperties: false, required: ['prefix', 'mode', 'value'] as const, properties: { prefix: { type: 'string', minLength: 1 }, mode: { type: 'string', const: 'version_specific_default' }, value: { oneOf: [{ type: 'string', minLength: 1 }, { type: 'null' }] as const }, first_path: { type: 'string', minLength: 1 }, root_path: { type: 'string', minLength: 1 }, system_prefix: { oneOf: [{ type: 'string', const: 'CoreUObject' }, { type: 'boolean', const: false }] as const } } } } };
function validate40(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is PrefixedString_type<'version_specific_default', 'CoreUObject'> {
	let props0: (true | {
			type?: true,
		} | undefined) = undefined,
		props1: (true | {
			type?: true,
		} | undefined) = undefined,
		props2: (true | {
			type?: true,
		} | undefined) = undefined;

	/* # sourceURL="docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--PrefixedString--version_specific_default--CoreUObject" */
	let vErrors: ErrorObject[] = [];
	let errors = 0;
	const evaluated0 = ajv_utiltiies__definitely_evaluated(validate40);
	if (evaluated0?.dynamicProps) {
		evaluated0.props = undefined;
	}
	if (evaluated0?.dynamicItems) {
		evaluated0.items = undefined;
	}
	if (ajv_utilities__is_probably_object(data)) {
		if (data.type === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema51.required, parentSchema: schema51, data };
			vErrors.push(err0);
			errors++;
		}
		if (data.DocsDotJson_PrefixedString === undefined) {
			const err1: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'DocsDotJson_PrefixedString' }, message: 'must have required property \'' + 'DocsDotJson_PrefixedString' + '\'', schema: schema51.required, parentSchema: schema51, data };
			vErrors.push(err1);
			errors++;
		}
		for (const key0 in data) {
			if (!(((key0 === '$defs') || (key0 === 'type')) || (key0 === 'DocsDotJson_PrefixedString'))) {
				const err2: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema51, data };
				vErrors.push(err2);
				errors++;
			}
		}
		if (data.$defs !== undefined) {
			let data0 = data.$defs;
			if (ajv_utilities__is_probably_object(data0)) {
				if (Object.keys(data0).length < 1) {
					const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema51.properties.$defs, data: data0 };
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
							const err4: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema51.properties.$defs.additionalProperties.oneOf[0].required, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[0], data: data1 };
							vErrors.push(err4);
							errors++;
						}
						if (data1.type !== undefined) {
							let data2 = data1.type;
							if (typeof data2 === 'string') {
								if (func1(data2) < 1) {
									const err5: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
									vErrors.push(err5);
									errors++;
								}
							} else {
								const err6: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.$defs.additionalProperties.oneOf[0].properties.type.type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[0].properties.type, data: data2 };
								vErrors.push(err6);
								errors++;
							}
						}
					} else {
						const err7: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema51.properties.$defs.additionalProperties.oneOf[0].type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[0], data: data1 };
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
							const err8: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/required', keyword: 'required', params: { missingProperty: 'allOf' }, message: 'must have required property \'' + 'allOf' + '\'', schema: schema51.properties.$defs.additionalProperties.oneOf[1].required, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1], data: data1 };
							vErrors.push(err8);
							errors++;
						}
						for (const key2 in data1) {
							if (!(key2 === 'allOf')) {
								const err9: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key2 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1], data: data1 };
								vErrors.push(err9);
								errors++;
							}
						}
						if (data1.allOf !== undefined) {
							let data3 = data1.allOf;
							if (ajv_utilities__is_probably_array(data3)) {
								if (data3.length < 2) {
									const err10: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
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
											const err11: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].required, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
											vErrors.push(err11);
											errors++;
										}
										if (data4.type !== undefined) {
											let data5 = data4.type;
											if (typeof data5 === 'string') {
												if (func1(data5) < 1) {
													const err12: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
													vErrors.push(err12);
													errors++;
												}
											} else {
												const err13: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type.type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].properties.type, data: data5 };
												vErrors.push(err13);
												errors++;
											}
										}
									} else {
										const err14: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0].type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[0], data: data4 };
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
											const err15: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].required, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
											vErrors.push(err15);
											errors++;
										}
										for (const key3 in data4) {
											if (!(key3 === '$ref')) {
												const err16: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key3 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
												vErrors.push(err16);
												errors++;
											}
										}
										if (data4.$ref !== undefined) {
											let data6 = data4.$ref;
											if (typeof data6 === 'string') {
												if (!pattern4.test(data6)) {
													const err17: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
													vErrors.push(err17);
													errors++;
												}
											} else {
												const err18: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref.type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].properties.$ref, data: data6 };
												vErrors.push(err18);
												errors++;
											}
										}
									} else {
										const err19: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1].type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf[1], data: data4 };
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
										const err20: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf/' + i0, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing1 }, message: 'must match exactly one schema in oneOf', schema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items.oneOf, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.items, data: data4 };
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
								const err21: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/allOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/properties/allOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf.type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1].properties.allOf, data: data3 };
								vErrors.push(err21);
								errors++;
							}
						}
					} else {
						const err22: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema51.properties.$defs.additionalProperties.oneOf[1].type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[1], data: data1 };
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
								const err23: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema51.properties.$defs.additionalProperties.oneOf[2].required, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2], data: data1 };
								vErrors.push(err23);
								errors++;
							}
							for (const key4 in data1) {
								if (!(key4 === 'oneOf')) {
									const err24: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key4 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2], data: data1 };
									vErrors.push(err24);
									errors++;
								}
							}
							if (data1.oneOf !== undefined) {
								let data7 = data1.oneOf;
								if (ajv_utilities__is_probably_array(data7)) {
									if (data7.length < 2) {
										const err25: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
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
												const err26: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/required', keyword: 'required', params: { missingProperty: 'type' }, message: 'must have required property \'' + 'type' + '\'', schema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].required, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
												vErrors.push(err26);
												errors++;
											}
											if (data8.type !== undefined) {
												let data9 = data8.type;
												if (typeof data9 === 'string') {
													if (func1(data9) < 1) {
														const err27: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
														vErrors.push(err27);
														errors++;
													}
												} else {
													const err28: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/type', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type.type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].properties.type, data: data9 };
													vErrors.push(err28);
													errors++;
												}
											}
										} else {
											const err29: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0].type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[0], data: data8 };
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
												const err30: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].required, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
												vErrors.push(err30);
												errors++;
											}
											for (const key5 in data8) {
												if (!(key5 === '$ref')) {
													const err31: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key5 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
													vErrors.push(err31);
													errors++;
												}
											}
											if (data8.$ref !== undefined) {
												let data10 = data8.$ref;
												if (typeof data10 === 'string') {
													if (!pattern4.test(data10)) {
														const err32: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^(.+)?#\\/\\$defs\\/(.+)$' }, message: 'must match pattern "' + '^(.+)?#\\/\\$defs\\/(.+)$' + '"', schema: '^(.+)?#\\/\\$defs\\/(.+)$', parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
														vErrors.push(err32);
														errors++;
													}
												} else {
													const err33: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1 + '/$ref', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref.type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].properties.$ref, data: data10 };
													vErrors.push(err33);
													errors++;
												}
											}
										} else {
											const err34: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1].type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf[1], data: data8 };
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
											const err35: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf/' + i1, schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/items/oneOf', keyword: 'oneOf', params: { passingSchemas: passing2 }, message: 'must match exactly one schema in oneOf', schema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items.oneOf, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.items, data: data8 };
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
									const err36: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1') + '/oneOf', schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf.type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2].properties.oneOf, data: data7 };
									vErrors.push(err36);
									errors++;
								}
							}
						} else {
							const err37: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema51.properties.$defs.additionalProperties.oneOf[2].type, parentSchema: schema51.properties.$defs.additionalProperties.oneOf[2], data: data1 };
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
						const err38: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/oneOf', keyword: 'oneOf', params: { passingSchemas: passing0 }, message: 'must match exactly one schema in oneOf', schema: schema51.properties.$defs.additionalProperties.oneOf, parentSchema: schema51.properties.$defs.additionalProperties, data: data1 };
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
				const err39: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema51.properties.$defs.type, parentSchema: schema51.properties.$defs, data: data0 };
				vErrors.push(err39);
				errors++;
			}
		}
		if (data.type !== undefined) {
			let data11 = data.type;
			if (typeof data11 !== 'string') {
				const err40: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.type.type, parentSchema: schema51.properties.type, data: data11 };
				vErrors.push(err40);
				errors++;
			}
			if ('string' !== data11) {
				const err41: ErrorObject = { instancePath: instancePath + '/type', schemaPath: '#/properties/type/const', keyword: 'const', params: { allowedValue: 'string' }, message: 'must be equal to constant', schema: 'string', parentSchema: schema51.properties.type, data: data11 };
				vErrors.push(err41);
				errors++;
			}
		}
		if (data.DocsDotJson_PrefixedString !== undefined) {
			let data12 = data.DocsDotJson_PrefixedString;
			if (ajv_utilities__is_probably_object(data12)) {
				if (data12.prefix === undefined) {
					const err42: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'prefix' }, message: 'must have required property \'' + 'prefix' + '\'', schema: schema51.properties.DocsDotJson_PrefixedString.required, parentSchema: schema51.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err42);
					errors++;
				}
				if (data12.mode === undefined) {
					const err43: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'mode' }, message: 'must have required property \'' + 'mode' + '\'', schema: schema51.properties.DocsDotJson_PrefixedString.required, parentSchema: schema51.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err43);
					errors++;
				}
				if (data12.value === undefined) {
					const err44: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/required', keyword: 'required', params: { missingProperty: 'value' }, message: 'must have required property \'' + 'value' + '\'', schema: schema51.properties.DocsDotJson_PrefixedString.required, parentSchema: schema51.properties.DocsDotJson_PrefixedString, data: data12 };
					vErrors.push(err44);
					errors++;
				}
				for (const key6 in data12) {
					if (!((((((key6 === 'prefix') || (key6 === 'mode')) || (key6 === 'value')) || (key6 === 'first_path')) || (key6 === 'root_path')) || (key6 === 'system_prefix'))) {
						const err45: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key6 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema51.properties.DocsDotJson_PrefixedString, data: data12 };
						vErrors.push(err45);
						errors++;
					}
				}
				if (data12.prefix !== undefined) {
					let data13 = data12.prefix;
					if (typeof data13 === 'string') {
						if (func1(data13) < 1) {
							const err46: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
							vErrors.push(err46);
							errors++;
						}
					} else {
						const err47: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/prefix/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.DocsDotJson_PrefixedString.properties.prefix.type, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.prefix, data: data13 };
						vErrors.push(err47);
						errors++;
					}
				}
				if (data12.mode !== undefined) {
					let data14 = data12.mode;
					if (typeof data14 !== 'string') {
						const err48: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.DocsDotJson_PrefixedString.properties.mode.type, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
						vErrors.push(err48);
						errors++;
					}
					if ('version_specific_default' !== data14) {
						const err49: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/mode', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/mode/const', keyword: 'const', params: { allowedValue: 'version_specific_default' }, message: 'must be equal to constant', schema: 'version_specific_default', parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.mode, data: data14 };
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
							const err50: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
							vErrors.push(err50);
							errors++;
						}
					} else {
						const err51: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0].type, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.value.oneOf[0], data: data15 };
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
						const err52: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null', schema: schema51.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1].type, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.value.oneOf[1], data: data15 };
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
						const err53: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/value', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/value/oneOf', keyword: 'oneOf', params: { passingSchemas: passing3 }, message: 'must match exactly one schema in oneOf', schema: schema51.properties.DocsDotJson_PrefixedString.properties.value.oneOf, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.value, data: data15 };
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
							const err54: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
							vErrors.push(err54);
							errors++;
						}
					} else {
						const err55: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/first_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/first_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.DocsDotJson_PrefixedString.properties.first_path.type, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.first_path, data: data16 };
						vErrors.push(err55);
						errors++;
					}
				}
				if (data12.root_path !== undefined) {
					let data17 = data12.root_path;
					if (typeof data17 === 'string') {
						if (func1(data17) < 1) {
							const err56: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/minLength', keyword: 'minLength', params: { limit: 1 }, message: 'must NOT have fewer than 1 characters', schema: 1, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
							vErrors.push(err56);
							errors++;
						}
					} else {
						const err57: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/root_path', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/root_path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.DocsDotJson_PrefixedString.properties.root_path.type, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.root_path, data: data17 };
						vErrors.push(err57);
						errors++;
					}
				}
				if (data12.system_prefix !== undefined) {
					let data18 = data12.system_prefix;
					const _errs63 = errors;
					let valid18 = false;
					let passing4 = null;
					const _errs64 = errors;
					if (typeof data18 !== 'string') {
						const err58: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema51.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0].type, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err58);
						errors++;
					}
					if ('CoreUObject' !== data18) {
						const err59: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/0/const', keyword: 'const', params: { allowedValue: 'CoreUObject' }, message: 'must be equal to constant', schema: 'CoreUObject', parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[0], data: data18 };
						vErrors.push(err59);
						errors++;
					}
					var _valid4 = _errs64 === errors;
					if (_valid4) {
						valid18 = true;
						passing4 = 0;
					}
					const _errs66 = errors;
					if (typeof data18 !== 'boolean') {
						const err60: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean', schema: schema51.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1].type, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err60);
						errors++;
					}
					if (false !== data18) {
						const err61: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf/1/const', keyword: 'const', params: { allowedValue: false }, message: 'must be equal to constant', schema: false, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf[1], data: data18 };
						vErrors.push(err61);
						errors++;
					}
					var _valid4 = _errs66 === errors;
					if (_valid4 && valid18) {
						valid18 = false;
						passing4 = [passing4, 1];
					} else {
						if (_valid4) {
							valid18 = true;
							passing4 = 1;
						}
					}
					if (!valid18) {
						const err62: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString/system_prefix', schemaPath: '#/properties/DocsDotJson_PrefixedString/properties/system_prefix/oneOf', keyword: 'oneOf', params: { passingSchemas: passing4 }, message: 'must match exactly one schema in oneOf', schema: schema51.properties.DocsDotJson_PrefixedString.properties.system_prefix.oneOf, parentSchema: schema51.properties.DocsDotJson_PrefixedString.properties.system_prefix, data: data18 };
						vErrors.push(err62);
						errors++;
					} else {
						errors = _errs63;
						if (vErrors.length) {
							if (_errs63) {
								vErrors.length = _errs63;
							} else {
								vErrors = [];
							}
						}
					}
				}
			} else {
				const err63: ErrorObject = { instancePath: instancePath + '/DocsDotJson_PrefixedString', schemaPath: '#/properties/DocsDotJson_PrefixedString/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema51.properties.DocsDotJson_PrefixedString.type, parentSchema: schema51.properties.DocsDotJson_PrefixedString, data: data12 };
				vErrors.push(err63);
				errors++;
			}
		}
	} else {
		const err64: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema51.type, parentSchema: schema51, data };
		vErrors.push(err64);
		errors++;
	}
	(validate40 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate40 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
