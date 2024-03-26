import {
	SchemaCompilingGenerator,
} from '../../Generator';
import {
	DataTransformer,
} from '../../../DataTransformer';
import Ajv from 'ajv/dist/2020';

export class prefixItems extends SchemaCompilingGenerator<
	{
		type: 'array',
		items: false,
		prefixItems: [unknown, ...unknown[]],
		minItems: number,
		maxItems: number,
	},
	unknown,
	unknown
> {
	private readonly discovery:DataTransformer;
	constructor(ajv: Ajv, discovery: DataTransformer) {
		super(ajv, {
			type: 'object',
			required: ['type', 'items', 'prefixItems', 'minItems', 'maxItems'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'array'},
				items: {type: 'boolean', const: false},
				uniqueItems: {type: 'boolean'},
				prefixItems: {
					type: 'array',
					minItems: 1,
					items: {type: 'object'},
				},
				minItems: {type: 'number', minimum: 0},
				maxItems: {type: 'number', minimum: 1},
			},
		});
		this.discovery = discovery;
	}

	generate() {
		return Promise.resolve((raw_data:unknown) => {
			return raw_data;
		});
	}
}
