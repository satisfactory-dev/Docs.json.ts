import {
	Generator,
} from '../Generator';
import Ajv, {
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	TypesDiscovery,
} from '../../TypesDiscovery';
import {
	DocsDataItem,
} from '../../DocsTsGenerator';
import {
	object_has_property, property_exists_on_object,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
} from '../../StringStartsWith';
import {
	DataTransformerDiscovery,
} from '../../DataTransformerDiscovery';

export class NativeClass extends Generator<
	DocsDataItem,
	DocsDataItem,
	unknown
> {
	private readonly discovery:DataTransformerDiscovery;
	constructor(
		check:ValidateFunction<DocsDataItem>,
		discovery:DataTransformerDiscovery
	) {
		super(check);
		this.discovery = discovery;
	}

	async generate() {
		const root_schema =
			await this.discovery.discovery.type_checked_schema();
		return async (raw_data:DocsDataItem) => {
			const schema = await this.discovery.discovery.find_matching_schema(
				raw_data
			);

			if (!object_has_property(schema, '$ref', is_string)) {
				console.error(schema);
				throw new Error('NativeClass schema had no $ref!');
			} else if (!schema.$ref.startsWith('#/definitions/')) {
				console.error(schema);
				throw new Error(
					`NativeClass schema had unsupported $ref! (${schema.$ref})`
				);
			}

			const $ref = schema.$ref.substring(14);

			if (!object_has_property(
				root_schema.definitions,
				$ref,
				value_is_non_array_object
			)) {
				throw new Error(`${$ref} not defined in root schema!`);
			}

			const $ref_schema = root_schema.definitions[$ref];

			if (!object_has_property(
				$ref_schema,
				'properties',
				value_is_non_array_object
			)) {
				throw new Error(
					`${$ref} appears to have no properties definition!`
				);
			}

			const resolved_schema = Object.fromEntries(await Promise.all(
				Object.entries({
					...$ref_schema.properties,
					...(object_has_property(
						schema,
						'properties',
						value_is_non_array_object
					) ? schema.properties : {}),
				}).map(
					async (
						e
					) : Promise<[string, unknown]> => [
						e[0],
						await this.discovery.maybe_remap_ref(e[1]),
					]
				)
			));

			return Object.fromEntries(Object.entries(
				await this.discovery.find_from_object(
					resolved_schema
				)
			).map((entry) => {
				const [property, generator] = entry;

				if (!property_exists_on_object(raw_data, property)) {
					throw new Error(`${property} not on raw data!`);
				}

				return [
					property,
					generator(raw_data[property]),
				]
			}));
		};
	}

	static async fromTypesDiscovery(
		ajv:Ajv,
		discovery:DataTransformerDiscovery
	) {
		return new this(
			await TypesDiscovery.generate_is_NativeClass(
				ajv,
				discovery.discovery.discovery.types_discovery
			),
			discovery
		);
	}
}
