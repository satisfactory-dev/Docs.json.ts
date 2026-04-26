// oxlint-disable @stylistic/max-len
import type {
	ErrorObject, ValidateFunction,
} from 'ajv';
import type {
	Is,
} from '@satisfactory-dev/ajv-utilities';
import type {
	TintColor_type,
} from '../../src/version-specific/0.4.2.11/TypedString/PropertySchemaToRegex/TintColor.ts';
function ajv_utiltiies__definitely_evaluated<T>(maybe: Is<T>): Exclude<Is<T>['evaluated'], undefined> {
	if (undefined === maybe.evaluated)
		throw new Error(`${maybe.name}.evaluated not set!`);

	return maybe.evaluated;
}
function ajv_utilities__is_probably_object(maybe: unknown): maybe is Record<string, unknown> {
	return !!maybe && typeof maybe === 'object' && !Array.isArray(maybe);
}
export const TintColor = validate20;
const schema31 = { $schema: 'https://json-schema.org/draft/2020-12/schema', $id: 'docs.json.ts--lib--0.4.2.11--TypedString--PropertySchemaToRegex--TintColor', type: 'object', additionalProperties: false, required: ['$ref'] as const, properties: { $ref: { type: 'string', const: 'docs.json.ts--0.4.2.11--properties#/$defs/TintColor' } } };
function validate20(data: unknown, { instancePath = '' }: Partial<Omit<Exclude<Parameters<ValidateFunction>[1], undefined>, 'rootData'> & {
	rootData: unknown,
}> = {}): data is TintColor_type {
	/* # sourceURL="docs.json.ts--lib--0.4.2.11--TypedString--PropertySchemaToRegex--TintColor" */
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
		if (data.$ref === undefined) {
			const err0: ErrorObject = { instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: '$ref' }, message: 'must have required property \'' + '$ref' + '\'', schema: schema31.required, parentSchema: schema31, data };
			vErrors.push(err0);
			errors++;
		}
		for (const key0 in data) {
			if (!(key0 === '$ref')) {
				const err1: ErrorObject = { instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties', schema: false, parentSchema: schema31, data };
				vErrors.push(err1);
				errors++;
			}
		}
		if (data.$ref !== undefined) {
			let data0 = data.$ref;
			if (typeof data0 !== 'string') {
				const err2: ErrorObject = { instancePath: instancePath + '/$ref', schemaPath: '#/properties/%24ref/type', keyword: 'type', params: { type: 'string' }, message: 'must be string', schema: schema31.properties.$ref.type, parentSchema: schema31.properties.$ref, data: data0 };
				vErrors.push(err2);
				errors++;
			}
			if ('docs.json.ts--0.4.2.11--properties#/$defs/TintColor' !== data0) {
				const err3: ErrorObject = { instancePath: instancePath + '/$ref', schemaPath: '#/properties/%24ref/const', keyword: 'const', params: { allowedValue: 'docs.json.ts--0.4.2.11--properties#/$defs/TintColor' }, message: 'must be equal to constant', schema: 'docs.json.ts--0.4.2.11--properties#/$defs/TintColor', parentSchema: schema31.properties.$ref, data: data0 };
				vErrors.push(err3);
				errors++;
			}
		}
	} else {
		const err4: ErrorObject = { instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object', schema: schema31.type, parentSchema: schema31, data };
		vErrors.push(err4);
		errors++;
	}
	(validate20 as Is).errors = vErrors.length ? vErrors : null;

	return errors === 0;
}
(validate20 as Is).evaluated = { props: true, dynamicProps: false, dynamicItems: false };
