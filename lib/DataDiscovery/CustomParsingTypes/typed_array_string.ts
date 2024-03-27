import {
	SchemaCompilingGenerator, SecondaryCheckSchemaCompilingGenerator,
} from '../Generator';
import {
	schema as items_schema,
	schema_type as items_schema_type,
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
import {
	UnrealEngineString_schema_definitions,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	writeFileSync,
} from 'node:fs';
import {is_string} from '../../StringStartsWith';

type schema_type = {
	type: 'string',
	minLength: 1,
	typed_array_string: items_schema_type,
};

export class typed_array_string extends SecondaryCheckSchemaCompilingGenerator<
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
			definitions: {
				...UnrealEngineString_schema_definitions,
			},
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', const: 1},
				typed_array_string: items_schema,
			},
		})

		writeFileSync('/app/typed_array_string-schema.json', JSON.stringify({
			type: 'object',
			required: ['type', 'minLength', 'typed_array_string'],
			additionalProperties: false,
			definitions: {
				...UnrealEngineString_schema_definitions,
			},
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', const: 1},
				typed_array_string: items_schema,
			},
		}, null, '\t') + '\n');

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

	secondary_check(
		schema_data: schema_type,
		raw_data: unknown
	) {
		if (!is_string(raw_data)) {
			return Promise.resolve(false);
		}

		const converter = this.discovery.data.find_generator(
			schema_data.typed_array_string.items
		);
		const parsed = string_to_array(raw_data);

		return Promise.resolve(parsed && converter.check(parsed));
	}
}
