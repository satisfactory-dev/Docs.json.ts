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
		return ajv.compile<T>(schema);
	} catch (err) {
		console.error(err);
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
