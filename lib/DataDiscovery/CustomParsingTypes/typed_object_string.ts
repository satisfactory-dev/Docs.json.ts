import {
	SchemaCompilingGenerator,
} from '../Generator';
import Ajv from 'ajv/dist/2020';
import {
	property_regex,
} from '../../CustomParsingTypes/TypedObjectString';
import {
	schema_type as pattern_type,
	schema as pattern_schema,
} from '../JsonSchema/String/Pattern';

export class typed_object_string extends SchemaCompilingGenerator<
	{
		type: 'string',
		minLength: 1,
		typed_object_string: {
			[key: string]: (
				| pattern_type
			),
		},
	},
	unknown,
	unknown
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'minLength', 'typed_object_string'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', const: 1},
				typed_object_string: {
					type: 'object',
					additionalProperties: false,
					patternProperties: {
						[property_regex]: {
							oneOf: [
								pattern_schema,
							],
						},
					},
				},
			},
		});
	}

	generate() {
		return Promise.resolve((raw_data:unknown) => {
			console.log(raw_data);
			throw new Error('bar');
		});
	}
}
