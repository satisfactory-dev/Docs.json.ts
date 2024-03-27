import {
	AnyGenerator,
	SchemaCompilingGenerator, SecondaryCheckSchemaCompilingGenerator,
} from '../Generator';
import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	DataTransformer,
} from '../../DataTransformer';
import {
	NoMatchError,
} from '../../DataTransformerDiscovery/NoMatchError';
import {
	string_starts_with,
} from '../CustomParsingTypes/string_starts_with';
import {
	RawData,
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/string_starts_with';
import {
	is_string,
} from '../../StringStartsWith';

export class oneOf extends SchemaCompilingGenerator<
	{oneOf: {[key: string]: unknown}[]},
	unknown,
	unknown
> {
	private discovery:DataTransformer;

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
