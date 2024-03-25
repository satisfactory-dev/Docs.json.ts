import {
	SchemaCompilingGenerator,
} from '../Generator';
import Ajv from 'ajv/dist/2020';

export class oneOf extends SchemaCompilingGenerator<
	{oneOf: {[key: string]: unknown}[]},
	unknown,
	unknown
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['oneOf'],
			additionalProperties: false,
			properties: {
				oneOf: {
					type: 'array',
					minItems: 1,
					items: {type: 'object'},
				},
			},
		});
	}

	generate() {
		return Promise.resolve((raw_data:unknown) => {
			console.log(raw_data);
		});
	}
}
