import {
	SchemaCompilingGenerator,
} from './Generator';
import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	DataTransformer,
} from '../DataTransformer';

export class $ref extends SchemaCompilingGenerator<
	{
		$ref: string,
	},
	{
		$ref: string,
	},
	unknown
> {
	private readonly definitions:{[key: string]: unknown};

	protected constructor(
		ajv:Ajv,
		definitions:{[key: string]: unknown},
		schema: SchemaObject
	) {
		super(ajv, schema);
		this.definitions = definitions;
	}

	generate() {
		return Promise.resolve((raw_data: {$ref: string}) => {
			const $ref = raw_data.$ref.substring(14);

			if (!($ref in this.definitions)) {
				throw new Error(`${$ref} not in definitions!`);
			}

			return this.definitions[$ref];
		});
	}

	static async fromDataDiscovery(ajv: Ajv, discovery: DataTransformer)
	{
		const schema = await discovery.type_checked_schema();

		return new $ref(
			ajv,
			schema.definitions,
			{
				type: 'object',
				required: ['$ref'],
				additionalProperties: false,
				properties: {
					$ref: {
						type: 'string',
						enum: Object.keys(
							schema.definitions
						).map(e => `#/definitions/${e}`),
					},
				},
			}
		)
	}
}
