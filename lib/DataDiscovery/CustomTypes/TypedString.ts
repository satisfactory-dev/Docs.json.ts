import {
	Generator as Base,
	ConvertsUnknown,
	ExpressionResult,
	RawGenerationResult,
} from '../Generator';
import {
	generate_object_parent_schema,
	typed_string_parent_type,
} from '../../CustomParsingTypes/TypedString';
import {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	is_string,
	local_ref,
} from '../../StringStartsWith';
import {
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	ObjectLiteralExpression,
} from 'typescript';
import {
	NoMatchError,
} from '../../Exceptions';
import {
	string_to_object,
} from '../../DocsValidation';
import {
	is_UnrealEngineString_parent,
	UnrealEngineString_schema_definitions,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	compile,
} from '../../AjvUtilities';
import {
	UnrealEngineString,
} from './UnrealEngineString';

export class TypedString extends ConvertsUnknown<
	string,
	ExpressionResult,
	typed_string_parent_type
> {
	private readonly check:Promise<
		ValidateFunction<typed_string_parent_type>
	>;
	private readonly definitions:Promise<{[key: string]: SchemaObject}>;
	private readonly UnrealEngineString:UnrealEngineString;

	constructor(discovery:DataDiscovery) {
		super(discovery);
		this.definitions = discovery.docs.schema().then(
			({definitions}) => {
				return {
					...UnrealEngineString_schema_definitions,
					...definitions,
				};
			}
		);

		this.check = this.definitions.then((definitions) => {
			const local_refs = Object.keys(definitions).map(local_ref);
			const schema = {
				...generate_object_parent_schema(
					local_refs,
					[],
					0,
					-1
				),
				definitions,
			};

			return compile<typed_string_parent_type>(
				discovery.docs.ajv,
				schema
			);
		});
		this.UnrealEngineString = new UnrealEngineString(discovery);
	}

	async convert_unknown(
		schema: typed_string_parent_type,
		raw_data: unknown
	): Promise<ExpressionResult<ObjectLiteralExpression>> {
		if (!is_string(raw_data)) {
			throw new NoMatchError(raw_data, 'raw data not a string!');
		}

		const shallow = string_to_object(raw_data, true);

		if (false === shallow) {
			throw new NoMatchError(
				raw_data,
				'raw data not a typed_string'
			);
		}

		const definitions = await this.definitions;

		const check = compile<
			{[key: string]: unknown}
		>(
			this.discovery.docs.ajv,
			{
				...schema.typed_string,
				definitions,
			}
		);

		if (!check(shallow)) {
			throw new NoMatchError(
				{
					shallow,
					schema,
					errors: check.errors,
				},
				'Shallow parse of typed_string does not match schema!'
			);
		}

		const converted = Object.fromEntries(await Promise.all(
			Object.entries(shallow).map(async (
				entry
			) : Promise<[string, unknown]> => {
				if (!(entry[0] in schema.typed_string.properties)) {
					throw new NoMatchError(
						{
							[entry[0]]: entry[1],
							schema: schema.typed_string.properties,
						},
						'Property not in schema!'
					);
				}

				const [property, value] = entry;
				let converter:unknown = await (await Base.find(
					await this.discovery.candidates,
					schema.typed_string.properties[property]
				)).result();

				if (
					!(converter instanceof ConvertsUnknown)
					&& is_UnrealEngineString_parent(
						schema.typed_string.properties[property]
					)
				) {
					converter = this.UnrealEngineString;
				}

				if (converter instanceof ConvertsUnknown) {
					return [
						property,
						await converter.convert_unknown(
							schema.typed_string.properties[property],
							value
						),
					];
				}

				throw new NoMatchError(
					{
						data: {[property]: value},
						schema: schema.typed_string.properties[property],
						converter,
					},
					'No converter found!'
				)
			})
		));

		try {
			return new ExpressionResult(
				await this.discovery.literal.object_literal(converted)
			);
		} catch (error) {
			throw new NoMatchError(
				{
					converted,
					error,
				},
				'Failed to grab object literal!'
			);
		}
	}

	async matches(
		raw_data:unknown
	): Promise<RawGenerationResult<this>|undefined> {
		if (
			value_is_non_array_object(raw_data)
			&& (await this.check)(raw_data)
		) {
			return new RawGenerationResult(this);
		}

		return undefined;
	}
}
