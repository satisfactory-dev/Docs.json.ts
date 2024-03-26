import {
	SchemaCompilingGenerator,
} from '../Generator';
import Ajv from 'ajv/dist/2020';

export class anyOf extends SchemaCompilingGenerator<
	{anyOf: {[key: string]: unknown}[]},
	unknown,
	unknown
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['anyOf'],
			additionalProperties: false,
			properties: {
				anyOf: {
					type: 'array',
					minItems: 1,
					items: {type: 'object'},
				},
			},
		});
	}

	generate() {
		return Promise.resolve((raw_data: unknown) => {
			return raw_data;
		});
	}
}
