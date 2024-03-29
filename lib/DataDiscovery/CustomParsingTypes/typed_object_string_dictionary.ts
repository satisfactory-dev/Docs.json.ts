import {
	SecondaryCheckSchemaCompilingGenerator,
} from '../Generator';
import {
	property_regex,
} from '../../CustomParsingTypes/TypedObjectString';
import {
	schema_sub_types,
	schema_type,
	typed_object_string,
	schema_object as typed_object_string_schema_generator,
} from './typed_object_string';
import {
	DataTransformer,
} from '../../DataTransformer';
import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../../Exceptions';
import {
	UnrealEngineString_schema_definitions,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	property_exists_on_object, value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	string_to_object,
} from '../../DocsValidation';
import {
	is_string,
} from '../../StringStartsWith';

function schema_object(...additional_oneOf:SchemaObject[]) : SchemaObject
{
	return {
		type: 'object',
		additionalProperties: false,
		patternProperties: {
			[property_regex]: {oneOf: [
				typed_object_string_schema_generator(
					typed_object_string_schema_generator()
				),
				...schema_sub_types,
				...additional_oneOf,
			]},
		},
	};
}

const schema = schema_object(schema_object(schema_object()));

export class typed_object_string_dictionary
	extends SecondaryCheckSchemaCompilingGenerator<
	{
		[key: string]: schema_type,
	},
	{[key: string]: schema_type},
	{[key: string]: unknown}
> {
	private readonly discovery:DataTransformer;
	private readonly typed_object_string:typed_object_string;

	constructor(ajv:Ajv, discovery:DataTransformer) {
		super(ajv, {
			definitions: UnrealEngineString_schema_definitions,
			...schema,
		});
		this.discovery = discovery;
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

	async secondary_check(
		schema_data: { [key: string]: schema_type; },
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

		const converters = Object.fromEntries(Object.entries(schema_data).map(
			e => [
				e[0],
				this.discovery.data.find_generator(e[1]),
			],
		));

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
						schema_data[property],
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
