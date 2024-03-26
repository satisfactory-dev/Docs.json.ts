import {
	SchemaCompilingGenerator,
} from '../../Generator';
import Ajv from 'ajv/dist/2020';

export const schema = {
	type: 'object',
	required: ['type', 'enum'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		enum: {type: 'array', minItems: 1, items: {type: 'string'}},
	},
};

export class Enum extends SchemaCompilingGenerator<
	{type: 'string', enum: [string, ...string[]]},
	string,
	string|boolean|undefined
> {
	constructor(ajv: Ajv) {
		super(ajv, schema);
	}

	generate(schema:{type: 'string', enum: [string, ...string[]]}) {
		if (
			schema.enum.includes('True')
			&& schema.enum.includes('False')
			&& (
				2 === schema.enum.length
				|| (
					3 === schema.enum.length
					&& schema.enum.includes('')
				)
			)
		) {

			return Promise.resolve((raw_data: string) => {
				return '' === raw_data ? undefined : ('True' === raw_data);
			});
		}

		return Promise.resolve((raw_data: string) => {
			return raw_data;
		});
	}
}
