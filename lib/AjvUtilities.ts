import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from './Exceptions';
import {
	writeFileSync,
} from 'node:fs';

const __dirname = import.meta.dirname;

const cache = new WeakMap<SchemaObject, ValidateFunction>();

const duplicate_compile_check: {[key: string]: ValidateFunction} = {};

export function compile<T>(
	ajv:Ajv,
	schema:SchemaObject,
) : ValidateFunction<T> {
	try {
		performance.mark('ajv compile start');

		if (cache.has(schema)) {
			const result = cache.get(schema) as ValidateFunction<T>;

			performance.measure('ajv compile cached', 'ajv compile start');

			return result;
		}

		const key = JSON.stringify(schema);
		if (key in duplicate_compile_check) {
			performance.measure('ajv compile duplicate', 'ajv compile start');

			return duplicate_compile_check[key] as ValidateFunction<T>;
		}

		const result = ajv.compile<T>(schema);
		cache.set(schema, result);
		duplicate_compile_check[key] = result;

		performance.measure('ajv compile', 'ajv compile start');

		return result;
	} catch (err) {
		writeFileSync(
			`${__dirname}/../failed-to-compile.json`,
			`${JSON.stringify(
				{
					schema,
					err,
					message: err instanceof Error ? err.message : undefined,
				},
				null,
				'\t'
			)}\n`
		);
		throw new NoMatchError({err, schema}, 'Failed to compile schema');
	}
}
