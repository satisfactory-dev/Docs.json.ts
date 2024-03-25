import {
	SchemaCompilingGenerator,
} from '../../Generator';
import Ajv from 'ajv/dist/2020';
import {
	object_only_has_that_property,
} from '../../../CustomParsingTypes/CustomPairingTypes';
import {
	NoMatchError,
} from '../../../DataTransformerDiscovery/NoMatchError';

type schema_type = {type: 'string'}

export class StringType extends SchemaCompilingGenerator<
	schema_type,
	string,
	string
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
			},
		});
	}

	async generate(schema:schema_type) {
		if (!object_only_has_that_property(schema, 'type')) {
			throw new NoMatchError(
				schema,
				'Unexpected properties found!'
			);
		}

		return Promise.resolve((raw_data: string) => {
			return raw_data;
		});
	}
}
