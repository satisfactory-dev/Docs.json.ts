import {
	SchemaCompilingGenerator,
} from '../Generator';
import {
	property_regex,
} from '../../CustomParsingTypes/TypedObjectString';
import {
	schema_sub_types,
	schema_type,
	typed_object_string,
} from './typed_object_string';
import {
	DataTransformer,
} from '../../DataTransformer';
import Ajv from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../../DataTransformerDiscovery/NoMatchError';
import {
	UnrealEngineString_schema_definitions,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	property_exists_on_object,
} from '../../CustomParsingTypes/CustomPairingTypes';

const schema = {
	type: 'object',
	additionalProperties: false,
	patternProperties: {
		[property_regex]: {
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
							oneOf: schema_sub_types,
						},
					},
				},
			},
		},
	},
};

export class typed_object_string_dictionary extends SchemaCompilingGenerator<
	{
		[key: string]: schema_type,
	},
	{[key: string]: schema_type},
	{[key: string]: unknown}
> {
	private readonly typed_object_string:typed_object_string;

	constructor(ajv:Ajv, discovery:DataTransformer) {
		super(ajv, {
			definitions: UnrealEngineString_schema_definitions,
			...schema,
		});
		this.typed_object_string = new typed_object_string(ajv, discovery);
	}
	async generate(
		schema_data: { [key: string]: schema_type; }
	) {
		const converters = Object.fromEntries(await Promise.all(
			Object.entries(schema_data).map(
				async (
					entry
				) : Promise<[
					string,
					(raw_data:schema_type) => {[key: string]: unknown},
				]> => {
					const [property, sub_schema] = entry;

					if (!this.typed_object_string.check(sub_schema)) {
						throw new NoMatchError(
							{
								property,
								sub_schema,
							},
							'Does not appear to be a typed_object_string!'
						);
					}

					return [
						property,
						await this.typed_object_string.generate(sub_schema),
					];
				}
			)
		));

		return (
			raw_data: {[key: string]: schema_type}
		): {[key: string]: unknown} => {
			return Object.fromEntries(Object.entries(raw_data).map((entry) => {
				const [property, value] = entry;

				if (!property_exists_on_object(converters, property)) {
					throw new NoMatchError(
						property,
						'not found in converters!'
					);
				}

				return [
					property,
					converters[property](value),
				];
			}));
		};
	}
}
