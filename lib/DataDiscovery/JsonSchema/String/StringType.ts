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

type schema_type =
	& {type: 'string'}
	& ({minLength: number} | Record<string, never>);

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
				minLength: {type: 'number', minimum: 1},
			},
		});
	}

	async generate() {
		return Promise.resolve((raw_data: string) => {
			return raw_data;
		});
	}
}
