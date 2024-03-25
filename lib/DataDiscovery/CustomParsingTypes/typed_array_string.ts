import {
	SchemaCompilingGenerator,
} from '../Generator';
import {
	schema_type as items_schema_type,
	schema as items_schema,
} from '../JsonSchema/Array/items';
import {
	DataTransformer,
} from '../../DataTransformer';
import Ajv from 'ajv/dist/2020';
import {
	string_to_array,
} from '../../DocsValidation';
import {
	NoMatchError,
} from '../../DataTransformerDiscovery/NoMatchError';

type schema_type = {
	type: 'string',
	minLength: 1,
	typed_array_string: items_schema_type,
};

export class typed_array_string extends SchemaCompilingGenerator<
	schema_type,
	string,
	unknown[]
> {
	private readonly discovery:DataTransformer;

	constructor(ajv: Ajv, discovery:DataTransformer) {
		super(ajv, {
			type: 'object',
			required: ['type', 'minLength', 'typed_array_string'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', const: 1},
				typed_array_string: items_schema,
			},
		})

		this.discovery = discovery;
	}

	async generate(schema:schema_type) {
		const converter = await this.discovery.data.find_generator(
			schema.typed_array_string.items
		).generate(schema.typed_array_string.items);

		return (raw_data:string) => {
			const parsed = string_to_array(raw_data);

			if (false === parsed) {
				throw new NoMatchError(raw_data, 'Parsing issue!');
			}

			return parsed.map(e => converter(e));
		};
	}
}
