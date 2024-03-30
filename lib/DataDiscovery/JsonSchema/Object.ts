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

	async convert_object(
		schema: object_extends_but_has_no_additional_properties,
		raw_data: {
			[key: string]: unknown; }
	): Promise<{ [key: string]: unknown; }
	> {
		const $ref = schema.$ref.substring(14);

		const resolved = await this.discovery.docs.definition(
			$ref
		);

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

			const property_converters = Object.fromEntries(
				await Promise.all(Object.entries(properties).map(
					async (e) : Promise<[string, unknown]> => [
						e[0],
						await (await Base.find(
							this.discovery.candidates,
							e[1]
						)).result(),
					]
				))
			);

			return Object.fromEntries(await Promise.all(Object.entries(
				raw_data
			).map(
				async (e) : Promise<[string, unknown]> => {
					const [property, value] = e;

					if (
						object_has_property(
							property_converters,
							property,
							(e): e is ConvertsUnknown<unknown, unknown> => {
								return e instanceof ConvertsUnknown;
							}
						)
					) {
						return [
							property,
							await property_converters[
								property
							].convert_unknown(
								properties[property],
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
