import {
	SchemaCompilingGenerator,
} from '../../Generator';
import Ajv from 'ajv/dist/2020';

export type schema_type = {type: 'string', pattern: string};

export const schema = {
	type: 'object',
	required: ['type', 'pattern'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		pattern: {type: 'string', minLength: 2},
	},
};

export class Pattern extends SchemaCompilingGenerator<
	schema_type,
	unknown,
	unknown
> {
	constructor(ajv: Ajv) {
		super(ajv, schema);
	}

	generate() {
		return Promise.resolve((raw_data: unknown) => {
			console.log(raw_data);
			throw new Error('bar');
		});
	}
}
