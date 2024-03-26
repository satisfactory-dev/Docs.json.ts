import {
	SchemaCompilingGenerator,
} from '../Generator';
import Ajv from 'ajv/dist/2020';

type object_type = {
	type: 'object',
	properties: {[key: string]: unknown}
};

export class ObjectType extends SchemaCompilingGenerator<
	object_type,
	object_type,
	unknown
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'properties'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'object'},
				properties: {type: 'object'},
				required: {
					type: 'array',
					minItems: 1,
					items: {type: 'string'},
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
