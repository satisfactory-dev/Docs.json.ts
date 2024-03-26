import {
	SchemaCompilingGenerator,
} from '../Generator';
import Ajv from 'ajv/dist/2020';
import {
	property_regex,
} from '../../CustomParsingTypes/TypedObjectString';
import {
	schema as pattern_schema,
	schema_type as pattern_type,
} from '../JsonSchema/String/Pattern';
import {
	DataTransformer,
} from '../../DataTransformer';
import {
	NoMatchError,
} from '../../DataTransformerDiscovery/NoMatchError';
import {
	string_to_object,
} from '../../DocsValidation';
import {
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	writeFileSync,
} from 'node:fs';
import {
	UnrealEngineString_parent_schema,
	UnrealEngineString_schema_definitions,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	schema as enum_schema,
} from '../JsonSchema/String/Enum';

type schema_type = {
	type: 'string',
	minLength: 1,
	typed_object_string: {
		[key: string]: (
			| pattern_type
		),
	},
};

export class typed_object_string extends SchemaCompilingGenerator<
	schema_type,
	string,
	{[key: string]: unknown}
> {
	private readonly discovery:DataTransformer;

	constructor(ajv: Ajv, discovery:DataTransformer) {
		super(ajv, {
			type: 'object',
			required: ['type', 'minLength', 'typed_object_string'],
			additionalProperties: false,
			definitions: UnrealEngineString_schema_definitions,
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
								enum_schema,
								UnrealEngineString_parent_schema,
							],
						},
					},
				},
			},
		});

		writeFileSync('/app/typed_object_string-schema.json', JSON.stringify({
			type: 'object',
			required: ['type', 'minLength', 'typed_object_string'],
			additionalProperties: false,
			definitions: UnrealEngineString_schema_definitions,
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
								enum_schema,
								UnrealEngineString_parent_schema,
							],
						},
					},
				},
			},
		}, null, '\t') + '\n');

		this.discovery = discovery;
	}

	async generate(schema:schema_type) {
		const converters = Object.fromEntries(await Promise.all(
			Object.entries(
				schema.typed_object_string
			).map(async (
				entry
			) : Promise<[string, (raw_data:unknown) => unknown]> => {
				return [
					entry[0],
					await this.discovery.data.find_generator(
						entry[1]
					).generate(entry[1]),
				];
			})
		));

		return Promise.resolve((raw_data: string) => {
			const parsed = string_to_object(raw_data);

			if (!value_is_non_array_object(parsed)) {
				throw new NoMatchError(
					{
						raw_data,
						parsed,
					},
					'Parsing issue!'
				)
			}

			return Object.fromEntries(Object.entries(
				parsed
			).map((entry) => {
				const [property, value] = entry;

				return [
					property,
					property in converters
						? converters[property](value)
						: value,
				];
			}));
		});
	}
}
