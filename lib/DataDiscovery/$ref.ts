import {
	SchemaCompilingGenerator,
} from './Generator';
import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	DataTransformer,
} from '../DataTransformer';
import {
	object_has_property,
	value_is_non_array_object,
} from '../CustomParsingTypes/CustomPairingTypes';

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

			const result = this.definitions[$ref];

			if (object_has_property(
				raw_data,
				'properties',
				value_is_non_array_object
			)) {
				if (!value_is_non_array_object(result)) {
					throw new Error('Non-object resolution found!');
				}

				const {
					properties,
					...rest
				} = result;

				return {
					...rest,
					properties: {
						...(properties || {}),
						...raw_data.properties,
					},
				};
			}

			return result;
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
					type: {type: 'string', const: 'object'},
					unevaluatedProperties: {type: 'boolean', const: false},
					$ref: {
						type: 'string',
						enum: Object.keys(
							schema.definitions
						).map(e => `#/definitions/${e}`),
					},
					required: {
						type: 'array',
						minItems: 1,
						items: {type: 'string'},
					},
					properties: {type: 'object'},
				},
			}
		)
	}
}
