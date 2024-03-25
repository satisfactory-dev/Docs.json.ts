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
import {
	items,
} from '../JsonSchema/Array/items';
import {
	DataTransformer,
} from '../../DataTransformer';
import {
	NoMatchError,
} from '../../DataTransformerDiscovery/NoMatchError';
import {
	AnyGenerator,
} from '../Generator';

/**
 * @todo get auto-conversion of Classes property to behave as expected
 */
export class NativeClass extends Generator<
	DocsDataItem,
	DocsDataItem,
	unknown
> {
	private readonly discovery:DataTransformerDiscovery;
	private readonly items:items;
	constructor(
		check:ValidateFunction<DocsDataItem>,
		discovery:DataTransformerDiscovery,
		ajv: Ajv,
		data_transformer:DataTransformer
	) {
		super(check);
		this.discovery = discovery;
		this.items = new items(ajv, data_transformer);
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

			const resolved_schema =
				await this.discovery.maybe_remap_object_ref({
					...$ref_schema.properties,
					...(object_has_property(
						schema,
						'properties',
						value_is_non_array_object
					) ? schema.properties : {}),
				});

			const result = Object.fromEntries(Object.entries(
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
			})) as DocsDataItem;

			const {Classes: Classes_schema} = resolved_schema;

			if (!this.items.check(Classes_schema)) {
				throw new Error('Unsupported classes check!');
			}

			try {
				const generators = Object.fromEntries(Object.entries(
					Classes_schema.items.properties
				).map(
					(entry) : [string, AnyGenerator] => {
						const [property, value] = entry;

						return [
							property,
							this.discovery.find_generator(value),
						];
					}
				));

				const remapped_classes = result.Classes.map(async (
					Classes_entry
				) : Promise<
					& {[key: string]: unknown}
					& {ClassName: string}
				> => {
					const result = Object.fromEntries(await Promise.all(
						Object.entries(Classes_entry).map(async (
							entry
						) : Promise<[string, unknown]> => {
							const [property, raw_data] = entry;

							if (property in generators) {
								return [
									property,
									(
										await generators[property].generate()
									)(raw_data),
								];
							}

							return [property, raw_data];
						})
					));

					if (!object_has_property(result, 'ClassName', is_string)) {
						console.error(result);
						throw new Error(
							'ClassName not present as string on result!'
						);
					}

					return result;
				});

				result.Classes = await Promise.all(remapped_classes);

				console.log(result.Classes[0]);
			} catch (err) {
				if (err instanceof NoMatchError) {
					process.stdout.write(
						`${JSON.stringify(err.value, null, '\t')}\n`
					);
					console.error(err.message, err.stack);
				} else {
					throw err;
				}
			}
			throw new Error('foo');
		};
	}

	static async fromTypesDiscovery(
		ajv:Ajv,
		data_transformer: DataTransformer
	) {
		return new this(
			await TypesDiscovery.generate_is_NativeClass(
				ajv,
				data_transformer.discovery.types_discovery
			),
			data_transformer.data,
			ajv,
			data_transformer
		);
	}
}
