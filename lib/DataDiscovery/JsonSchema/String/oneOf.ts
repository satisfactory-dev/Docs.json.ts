import {
	SchemaCompilingGenerator,
} from '../../Generator';
import Ajv from 'ajv/dist/2020';

export class oneOf extends SchemaCompilingGenerator<
	{oneOf: {[key: string]: unknown}[]},
	unknown,
	unknown
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'oneOf'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				oneOf: {
					type: 'array',
					minItems: 1,
					items: {
						oneOf: [
							{
								type: 'object',
								required: ['$ref'],
								additionalProperties: false,
								properties: {
									$ref: {
										type: 'string',
										const: '#/definitions/None',
									},
								},
							},
							{
								type: 'object',
								required: ['type', 'string_starts_with'],
								additionalProperties: false,
								properties: {
									type: {type: 'string', const: 'string'},
									string_starts_with: {
										type: 'string',
										minLength: 1,
									},
								},
							},
						],
					},
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
