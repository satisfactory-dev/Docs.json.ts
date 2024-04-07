import {
	Generator as Base,
	ConvertsObject,
	ConvertsUnknown,
	RawGenerationResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	object_has_property,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
	local_ref,
} from '../../StringStartsWith';
import {
	compile,
} from '../../AjvUtilities';

export type object_extends_but_has_no_additional_properties = {
	type: 'object',
	$ref: local_ref<string>,
	unevaluatedProperties: false,
}
export type object_extends_and_has_additional_properties =
	& object_extends_but_has_no_additional_properties
	& {
		properties: {[key: string]: SchemaObject}
	};

abstract class ObjectTypeResolver<
	Check extends object_extends_but_has_no_additional_properties
		= object_extends_but_has_no_additional_properties
> extends ConvertsObject<SchemaObject> {
	protected readonly check:Promise<ValidateFunction<Check>>;

	constructor(
		discovery:DataDiscovery,
		from_schema:(definitions:{[key: string]: SchemaObject}) => SchemaObject
	) {
		super(discovery);
		this.check = discovery.docs.schema().then(({definitions}) => {
			return compile<
				Check
			>(discovery.docs.ajv, from_schema(definitions));
		});
	}

	async convert_object(
		schema: Check,
		raw_data: {
			[key: string]: unknown; }
	): Promise<{ [key: string]: unknown; }
	> {
		const property_converters = await this.resolve_property_converters(
			schema
		);

		if (
			Object.keys(property_converters).length > 0
		) {
			return Object.fromEntries(await Promise.all(Object.entries(
				raw_data
			).map(
				async (e) : Promise<[string, unknown]> => {
					const [property, value] = e;

					if (
						property in property_converters
						&& (
							property_converters[
								property
							][1] instanceof ConvertsUnknown
						)
					) {
						const [
							schema,
							converter,
						] = property_converters[property] as [
							SchemaObject,
							ConvertsUnknown<unknown, unknown>,
						];

						return [
							property,
							await converter.convert_unknown(
								schema,
								value,
							),
						];
					}

					return [property, value];
				}
			)));
		}

		return raw_data;
	}

	async matches(schema:unknown)
	{
		if ((await this.check)(schema)) {
			return new RawGenerationResult(this);
		}

		return undefined;
	}

	protected async resolve_converters(
		$ref:string
	): Promise<{[key: string]: [SchemaObject, unknown]}> {
		const resolved = await this.discovery.docs.definition(
			$ref
		);

		return this.resolve_property_converters(resolved);
	}

	protected async resolve_property_converters(
		resolved:SchemaObject
	): Promise<{[key: string]: [SchemaObject, unknown]}> {
		const property_converters:{
			[key: string]: [SchemaObject, unknown]
		} = {};

		if (
			object_has_property(
				resolved,
				'properties',
				(e): e is {[key: string]: SchemaObject} => {
					return (
						value_is_non_array_object(e)
						&& Object.values(e).every(
							value_is_non_array_object
						)
					);
				}
			)
		) {
			const properties = resolved.properties;

			for (const entry of (
				await Promise.all(Object.entries(properties).map(
					async (e) : Promise<[string, unknown]> => [
						e[0],
						await (await Base.find(
							await this.discovery.candidates,
							e[1]
						)).result(),
					]
				))
			)) {
				const [property, result] = entry;
				if (!(property in property_converters)) {
					property_converters[property] = [
						properties[property],
						result,
					];
				}
			}
		}

		if (
			'$ref' in resolved
			&& is_string(resolved.$ref)
			&& resolved.$ref.startsWith('#/definitions/')
		) {
			for (const entry of Object.entries(
				await this.resolve_converters(resolved.$ref.substring(14))
			)) {
				if (!(entry[0] in property_converters)) {
					property_converters[entry[0]] = entry[1];
				}
			}
		}

		return property_converters;
	}
}

export class ObjectExtendsButHasNoAdditionalProperties
	extends ObjectTypeResolver
{
	constructor(discovery:DataDiscovery) {
		super(discovery, (definitions:{[key: string]: SchemaObject}) => {
			return {
				type: 'object',
				required: ['type', '$ref', 'unevaluatedProperties'],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'object'},
					$ref: {
						type: 'string',
						enum: Object.keys(definitions).map(local_ref),
					},
					unevaluatedProperties: {type: 'boolean', const: false},
				},
			};
		});
	}
}

export class ObjectExtendsAndHasAdditionalProperties
	extends ObjectTypeResolver<object_extends_and_has_additional_properties>
{
	constructor(discovery:DataDiscovery) {
		super(discovery, (definitions:{[key: string]: SchemaObject}) => {
			return {
				type: 'object',
				required: [
					'type',
					'$ref',
					'unevaluatedProperties',
					'properties',
				],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'object'},
					$ref: {
						type: 'string',
						enum: Object.keys(definitions).map(local_ref),
					},
					unevaluatedProperties: {type: 'boolean', const: false},
					properties: {type: 'object', minProperties: 1},
				},
			};
		});
	}
}
