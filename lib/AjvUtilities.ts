import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from './Exceptions';

export function compile<T>(
	ajv:Ajv,
	schema:SchemaObject,
) : ValidateFunction<T> {
	try {
		return ajv.compile<T>(schema);
	} catch (err) {
		throw new NoMatchError({err, schema}, 'Failed to compile schema');
	}
}
