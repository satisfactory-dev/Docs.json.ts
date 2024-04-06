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

export function compile<T>(
	ajv:Ajv,
	schema:SchemaObject,
) : ValidateFunction<T> {
	try {
		performance.mark('ajv compile start');

		const result = ajv.compile<T>(schema);

		performance.measure('ajv compile', 'ajv compile start');

		return result;
	} catch (err) {
		writeFileSync(
			`${__dirname}/../failed-to-compile.json`,
			`${JSON.stringify(
				{
					schema,
					err,
				},
				null,
				'\t'
			)}\n`
		);
		throw new NoMatchError({err, schema}, 'Failed to compile schema');
	}
}
