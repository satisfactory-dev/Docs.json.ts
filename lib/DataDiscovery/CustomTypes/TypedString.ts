import {
	Generator as Base,
	ConvertsUnknown,
	ExpressionResult,
	RawGenerationResult,
} from '../Generator';
import {
	generate_object_parent_schema,
	generate_typed_string_definitions,
	typed_string_inner_array_type,
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
	ArrayLiteralExpression,
	ObjectLiteralExpression,
} from 'typescript';
import {
	NoMatchError,
} from '../../Exceptions';
import {
	string_to_array,
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
import {
	typed_string,
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/typed_string';

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
				...generate_object_parent_schema(),
				definitions: {
					...definitions,
					...generate_typed_string_definitions(local_refs),
				},
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
	): Promise<ExpressionResult<
		| ObjectLiteralExpression
		| ArrayLiteralExpression
	>> {
		if (!is_string(raw_data)) {
			throw new NoMatchError(raw_data, 'raw data not a string!');
		} else if (typed_string.is_object_type(schema.typed_string)) {
			const shallow = string_to_object(raw_data, true);

			if (false === shallow) {
				throw new NoMatchError(
					raw_data,
					'raw data not a typed_string'
				);
			} else if (value_is_non_array_object(shallow)) {
				return this.convert_object(schema, shallow);
			}
		}

		const shallow = string_to_array(raw_data, true);

		if (false === shallow) {
			throw new NoMatchError(
				raw_data,
				'raw data not a typed_string'
			);
		} else if (typed_string.is_array_type(schema.typed_string)) {
			return this.convert_array(schema.typed_string, shallow);
		}

		throw new NoMatchError(
			{
				raw_data,
				shallow,
			},
			'Failed to convert native type!'
		);
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

	private async convert_array(
		schema: typed_string_inner_array_type,
		shallow: unknown[]
	) : Promise<ExpressionResult<ArrayLiteralExpression>> {

		const definitions = await this.definitions;

		const check = compile<
			{[key: string]: unknown}
		>(
			this.discovery.docs.ajv,
			{
				...schema,
				definitions,
				type: 'array',
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

		let converter:unknown = await (await Base.find(
			await this.discovery.candidates,
			schema.items
		)).result();

		if (
			!(converter instanceof ConvertsUnknown)
			&& is_UnrealEngineString_parent(
				schema.items
			)
		) {
			converter = this.UnrealEngineString;
		}

		if (converter instanceof ConvertsUnknown) {
			return new ExpressionResult(
				await this.discovery.literal.value_literal(
					Promise.all(shallow.map(e => converter.convert_unknown(
						schema.items,
						e
					)))
				) as ArrayLiteralExpression
			);
		}

		throw new NoMatchError(
			{
				shallow,
				schema,
				converter,
			},
			'No converter found!'
		)
	}

	private async convert_object(
		schema: typed_string_parent_type,
		shallow:{[key: string]: unknown}
	) {
		const {typed_string: typed_string_value} = schema;

		if (!typed_string.is_object_type(typed_string_value)) {
			throw new NoMatchError(
				{
					schema,
					shallow,
				},
				'Array-typed passed to object conversion!'
			);
		}

		const definitions = await this.definitions;

		const check = compile<
			{[key: string]: unknown}
		>(
			this.discovery.docs.ajv,
			{
				...typed_string_value,
				definitions,
				type: 'object',
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
				if (!(entry[0] in typed_string_value.properties)) {
					throw new NoMatchError(
						{
							[entry[0]]: entry[1],
							schema: typed_string_value.properties,
						},
						'Property not in schema!'
					);
				}

				const [property, value] = entry;
				let converter:unknown = await (await Base.find(
					await this.discovery.candidates,
					typed_string_value.properties[property]
				)).result();

				if (
					!(converter instanceof ConvertsUnknown)
					&& is_UnrealEngineString_parent(
						typed_string_value.properties[property]
					)
				) {
					converter = this.UnrealEngineString;
				}

				if (converter instanceof ConvertsUnknown) {
					return [
						property,
						await converter.convert_unknown(
							typed_string_value.properties[property],
							value
						),
					];
				}

				throw new NoMatchError(
					{
						data: {[property]: value},
						schema: typed_string_value.properties[property],
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
}
