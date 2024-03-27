import {
	SchemaCompilingGenerator, SecondaryCheckSchemaCompilingGenerator,
} from '../Generator';
import Ajv, {
} from 'ajv/dist/2020';
import {
	DataTransformer,
} from '../../DataTransformer';

export class oneOf extends SchemaCompilingGenerator<
	{oneOf: {[key: string]: unknown}[]},
	unknown,
	unknown
> {
	private readonly discovery:DataTransformer;

	constructor(ajv: Ajv, discovery:DataTransformer) {
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
		this.discovery = discovery;
	}

	generate(schema:{oneOf: {[key: string]: unknown}[]}) {
		return (
			SecondaryCheckSchemaCompilingGenerator.secondary_check_generation(
				this.discovery,
				schema.oneOf
			)
		);
	}
}
