import {
	SchemaCompilingGenerator,
} from '../../Generator';
import Ajv from 'ajv/dist/2020';

export class StringType extends SchemaCompilingGenerator<
	{type: 'string'},
	unknown,
	unknown
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
			},
		});
	}

	generate() {
		return Promise.resolve((raw_data:unknown) => {
			console.log(raw_data);
			throw new Error('bar');
		});
	}
}
