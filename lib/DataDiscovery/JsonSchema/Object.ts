import {
	Generator as Base,
	ConvertsObject,
	ConvertsUnknown,
	RawGenerationResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import Ajv, {
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

export type object_extends_but_has_no_additional_properties = {
	type: 'object',
	$ref: local_ref<string>,
	unevaluatedProperties: false,
}

export class ObjectExtendsButHasNoAdditionalProperties extends ConvertsObject<
	SchemaObject
> {
	private readonly check:Promise<ValidateFunction<
		object_extends_but_has_no_additional_properties
	>>;

	constructor(discovery:DataDiscovery, ajv:Ajv) {
		super(discovery);
		this.check = discovery.docs.schema().then(({definitions}) => {
			return ajv.compile<
				object_extends_but_has_no_additional_properties
			>({
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
			});
		});
	}

	private async resolve_converters(
		$ref:string
	): Promise<{[key: string]: [SchemaObject, unknown]}> {
		const resolved = await this.discovery.docs.definition(
			$ref
		);

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
							this.discovery.candidates,
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

	async convert_object(
		schema: object_extends_but_has_no_additional_properties,
		raw_data: {
			[key: string]: unknown; }
	): Promise<{ [key: string]: unknown; }
	> {
		const $ref = schema.$ref.substring(14);

		const property_converters = await this.resolve_converters($ref);

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
}
