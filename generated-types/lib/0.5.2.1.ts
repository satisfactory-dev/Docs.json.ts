// oxlint-disable @stylistic/max-len
import type {
	ErrorObject, ValidateFunction,
} from 'ajv';
import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';
import type {
	OneOf_type,
} from '../../src/version-specific/0.5.2.1/TypedString/PropertySchemaToRegex/OneOf.ts';
import type {
	properties_object_type,
} from '../../src/version-specific/0.5.2.1/TypedString/PropertySchemaToRegex/properties_objects.ts';
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
export const OneOf = validate20;
const schema31 = { $id: 'docs.json.ts--lib--0.5.2.1--TypedString--PropertySchemaToRegex--OneOf', type: 'object', additionalProperties: false, required: ['oneOf'] as const, properties: { $defs: { type: 'object', additionalProperties: { type: 'object' } }, oneOf: { type: 'array', minItems: 2, items: { type: 'object', minProperties: 1, additionalProperties: {} } } } };
function validate20(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is OneOf_type {
	/* # sourceURL="docs.json.ts--lib--0.5.2.1--TypedString--PropertySchemaToRegex--OneOf" */
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
		if (data.oneOf === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: 'oneOf' }, message: 'must have required property \'' + 'oneOf' + '\'', schema: schema31.required, parentSchema: schema31, data };
			vErrors.push(err0);
			errors++;
		}
		for (const key0 in data) {
			if (!((key0 === '$defs') || (key0 === 'oneOf'))) {
				const err1: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31, data };
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
						const err2: ErrorObject = { instancePath: instancePath + '/$defs/' + key1.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/properties/%24defs/additionalProperties/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.$defs.additionalProperties.type, parentSchema: schema31.properties.$defs.additionalProperties, data: data1 };
						vErrors.push(err2);
						errors++;
					}
				}
			} else {
				const err3: ErrorObject = { instancePath: instancePath + '/$defs', schemaPath: '#/properties/%24defs/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.$defs.type, parentSchema: schema31.properties.$defs, data: data0 };
				vErrors.push(err3);
				errors++;
			}
		}
		if (data.oneOf !== undefined) {
			let data2 = data.oneOf;
			if (ajv_utilities__is_probably_array(data2)) {
				if (data2.length < 2) {
					const err4: ErrorObject = { instancePath: instancePath + '/oneOf', schemaPath: '#/properties/oneOf/minItems', keyword: 'minItems', params: { limit: 2 }, message: 'must NOT have fewer than 2 items', schema: 2, parentSchema: schema31.properties.oneOf, data: data2 };
					vErrors.push(err4);
					errors++;
				}
				const len0 = data2.length;
				for (let i0 = 0; i0 < len0; i0++) {
					let data3 = data2[i0];
					if (ajv_utilities__is_probably_object(data3)) {
						if (Object.keys(data3).length < 1) {
							const err5: ErrorObject = { instancePath: instancePath + '/oneOf/' + i0, schemaPath: '#/properties/oneOf/items/minProperties', keyword: 'minProperties', params: { limit: 1 }, message: 'must NOT have fewer than 1 properties', schema: 1, parentSchema: schema31.properties.oneOf.items, data: data3 };
							vErrors.push(err5);
							errors++;
						}
					} else {
						const err6: ErrorObject = { instancePath: instancePath + '/oneOf/' + i0, schemaPath: '#/properties/oneOf/items/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.properties.oneOf.items.type, parentSchema: schema31.properties.oneOf.items, data: data3 };
						vErrors.push(err6);
						errors++;
					}
				}
			} else {
				const err7: ErrorObject = { instancePath: instancePath + '/oneOf', schemaPath: '#/properties/oneOf/type', keyword: 'type', params: { type: 'array' }, message: 'must be array', schema: schema31.properties.oneOf.type, parentSchema: schema31.properties.oneOf, data: data2 };
				vErrors.push(err7);
				errors++;
			}
		}
	} else {
		const err8: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.type, parentSchema: schema31, data };
		vErrors.push(err8);
		errors++;
	}
	(validate20 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate20 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const properties_object = validate21;
const schema32 = { $id: 'docs.json.ts--lib--0.5.2.1--TypedString--PropertySchemaToRegex--properties_object', type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', pattern: '^docs.json.ts--0.5.2.1--properties#\\/\\$defs\\/(?:mDisableSnapOn--bottom|mDisableSnapOn--top|mDockingRuleSet|FalloffCurve--EditorCurveData--only|FalloffCurve--EditorCurveData--with-ExternalCurve)$' } } };
const pattern4 = new RegExp('^docs.json.ts--0.5.2.1--properties#\\/\\$defs\\/(?:mDisableSnapOn--bottom|mDisableSnapOn--top|mDockingRuleSet|FalloffCurve--EditorCurveData--only|FalloffCurve--EditorCurveData--with-ExternalCurve)$', 'u');
function validate21(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is properties_object_type {
	/* # sourceURL="docs.json.ts--lib--0.5.2.1--TypedString--PropertySchemaToRegex--properties_object" */
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
		if (data.$ref === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema32.required, parentSchema: schema32, data };
			vErrors.push(err0);
			errors++;
		}
		for (const key0 in data) {
			if (!(key0 === '$ref')) {
				const err1: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema32, data };
				vErrors.push(err1);
				errors++;
			}
		}
		if (data.$ref !== undefined) {
			let data0 = data.$ref;
			if (typeof data0 === 'string') {
				if (!pattern4.test(data0)) {
					const err2: ErrorObject = { instancePath: instancePath + '/$ref', schemaPath: '#/properties/%24ref/pattern', keyword: 'pattern', params: { pattern: '^docs.json.ts--0.5.2.1--properties#\\/\\$defs\\/(?:mDisableSnapOn--bottom|mDisableSnapOn--top|mDockingRuleSet|FalloffCurve--EditorCurveData--only|FalloffCurve--EditorCurveData--with-ExternalCurve)$' }, message: 'must match pattern "' + '^docs.json.ts--0.5.2.1--properties#\\/\\$defs\\/(?:mDisableSnapOn--bottom|mDisableSnapOn--top|mDockingRuleSet|FalloffCurve--EditorCurveData--only|FalloffCurve--EditorCurveData--with-ExternalCurve)$' + '"', schema: '^docs.json.ts--0.5.2.1--properties#\\/\\$defs\\/(?:mDisableSnapOn--bottom|mDisableSnapOn--top|mDockingRuleSet|FalloffCurve--EditorCurveData--only|FalloffCurve--EditorCurveData--with-ExternalCurve)$', parentSchema: schema32.properties.$ref, data: data0 };
					vErrors.push(err2);
					errors++;
				}
			} else {
				const err3: ErrorObject = { instancePath: instancePath + '/$ref', schemaPath: '#/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema32.properties.$ref.type, parentSchema: schema32.properties.$ref, data: data0 };
				vErrors.push(err3);
				errors++;
			}
		}
	} else {
		const err4: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema32.type, parentSchema: schema32, data };
		vErrors.push(err4);
		errors++;
	}
	(validate21 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate21 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
