import {
	SecondaryCheckSchemaCompilingGenerator,
} from '../Generator';
import {
	SchemaObject,
} from 'ajv/dist/2020';
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
} from '../../Exceptions';
import {
	string_to_object,
} from '../../DocsValidation';
import {
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	UnrealEngineString_parent_schema,
	UnrealEngineString_schema_definitions,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	schema as enum_schema,
} from '../JsonSchema/String/Enum';
import {
	schema as const_schema,
} from '../JsonSchema/String/ConstType';
import {
	is_string,
} from '../../StringStartsWith';

export type schema_type = {
	type: 'string',
	minLength: 1,
	typed_object_string: {
		[key: string]: (
			| pattern_type
		),
	},
};

export const schema_sub_types = [
	pattern_schema,
	enum_schema,
	UnrealEngineString_parent_schema,
	const_schema,
	{
		type: 'object',
		required: ['type', 'minLength', 'typed_array_string'],
		additionalProperties: false,
		properties: {
			type: {type: 'string', const: 'string'},
			minLength: {type: 'number', const: 1},
			typed_array_string: {
				type: 'object',
				required: ['type', 'minItems', 'items'],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'array'},
					minItems: {type: 'number', minimum: 1},
					items: {
						oneOf: [
							UnrealEngineString_parent_schema,
						],
					},
				},
			},
		},
	},
];

export function schema_object(
	...additional_oneOf:SchemaObject[]
) : SchemaObject {
	return {
		type: 'object',
		required: [
			'type',
			'minLength',
			'typed_object_string',
		],
		additionalProperties: false,
		properties: {
			type: {
				type: 'string',
				const: 'string',
			},
			minLength: {
				type: 'number',
				const: 1,
			},
			typed_object_string: {
				type: 'object',
				additionalProperties: false,
				patternProperties: {
					[property_regex]: {oneOf: [
						...schema_sub_types,
						...additional_oneOf,
					]},
				},
			},
		},
	};
}

const nested_schema = schema_object(
	schema_object(),
	{
		type: 'object',
		additionalProperties: false,
		patternProperties: {
			[property_regex]: schema_object(
				schema_object(),
				{
					type: 'object',
					additionalProperties: false,
					patternProperties: {
						[property_regex]: schema_object(
							schema_object()
						),
					},
				}
			),
		},
	}
);

const schema = {
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
						...schema_sub_types,
						nested_schema,
						{
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
						},
						{
							type: 'object',
							additionalProperties: false,
							patternProperties: {
								[property_regex]: {
									oneOf: [
										...schema_sub_types,
										schema_object(schema_object()),
									],
								},
							},
						},
					],
				},
			},
		},
	},
};

export class typed_object_string extends
	SecondaryCheckSchemaCompilingGenerator
<
	schema_type,
	string|{[key: string]: unknown},
	{[key: string]: unknown}
> {
	private readonly discovery:DataTransformer;

	constructor(discovery:DataTransformer) {
		super(discovery.docs.ajv, schema);

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

		return Promise.resolve((raw_data: string|{[key: string]: unknown}) => {
			const parsed =
				value_is_non_array_object(raw_data)
					? raw_data
					: string_to_object(raw_data);

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
	async secondary_check(
		schema_data: schema_type,
		raw_data: unknown
	): Promise<boolean> {
		this._secondary_errors = undefined;

		const parsed =
			value_is_non_array_object(raw_data)
				? raw_data
				: (
					is_string(raw_data)
						? string_to_object(raw_data)
						: false
				);

		if (!value_is_non_array_object(parsed)) {
			this._secondary_errors = [
				new NoMatchError(
					{
						raw_data,
						parsed,
					},
					'Raw data did not parse to something usable!'
				),
			];

			return false;
		}

		const converters = Object.fromEntries(Object.entries(
			schema_data.typed_object_string
		).map((
			entry
		) => {
			return [
				entry[0],
				this.discovery.data.find_generator(
					entry[1]
				),
			];
		}));

		let result = true;

		for (const entry of Object.entries(parsed)) {
			const [property, value] = entry;

			const converter = converters[property] || undefined;

			result = (
				!converter
				|| converter.check(value)
				|| (
					SecondaryCheckSchemaCompilingGenerator.is(
						converter
					)
					&& await converter.secondary_check(
						schema_data.typed_object_string[property],
						value
					)
				)
			);

			if (!result) {
				break;
			}
		}

		if (!result) {
			this._secondary_errors =
				SecondaryCheckSchemaCompilingGenerator.gather_errors(
					Object.values(converters)
				);
		}

		return result;
	}
}
