import {
	ExpressionResult, Generator, SchemaCompilingGenerator,
} from '../Generator';
import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	TypesDiscovery,
} from '../../TypesDiscovery';
import {
	DocsDataItem, DocsTsGenerator,
} from '../../DocsTsGenerator';
import {
	object_has_non_empty_array_property,
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
} from '../../Exceptions';

/**
 * @todo get auto-conversion of Classes property to behave as expected
 */
export class NativeClass extends Generator<
	DocsDataItem,
	DocsDataItem,
	unknown
> {
	private readonly data_transformer:DataTransformer;
	private readonly discovery:DataTransformerDiscovery;
	private readonly items:items;
	constructor(
		check:ValidateFunction<DocsDataItem>,
		discovery:DataTransformerDiscovery,
		data_transformer:DataTransformer
	) {
		super(check);
		this.discovery = discovery;
		this.items = new items(data_transformer.docs.ajv);
		this.data_transformer = data_transformer;
	}

	async generate() {
		const root_schema =
			await this.data_transformer.type_checked_schema();
		return async (raw_data:DocsDataItem) => {
			const schema = await this.data_transformer.find_matching_schema(
				raw_data
			);

			if (!object_has_property(schema, '$ref', is_string)) {
				throw new NoMatchError(
					schema,
					'NativeClass schema had no $ref!'
				);
			} else if (!schema.$ref.startsWith('#/definitions/')) {
				throw new NoMatchError(
					schema,
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

			const unresolved_schema = {
				...$ref_schema.properties,
				...(object_has_property(
					schema,
					'properties',
					value_is_non_array_object
				) ? schema.properties : {}),
			};

			const resolved_schema =
				await this.discovery.maybe_remap_object_ref(
					unresolved_schema
				);

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
			}));

			const {Classes: Classes_schema} = resolved_schema;

			const generators = await this.Classes_generators(
				Classes_schema
			);

			const remapped_classes = (
				result as DocsDataItem
			).Classes.map(async (
				Classes_entry
			) : Promise<
				& {[key: string]: unknown}
				& {ClassName: string|ExpressionResult}
			> => {
				const generator = generators.find(e => e.check(Classes_entry));

				if (!generator) {
					throw new NoMatchError(
						[
							Classes_entry,
							(generators.map((e) => e.check(Classes_entry))),
							(generators.map((e) => e.check.errors)),
						],
						'No matching generator found!'
					);
				}

				const result = Object.fromEntries(await Promise.all(
					Object.entries(Classes_entry).map(async (
						entry
					) : Promise<[string, unknown]> => {
						const [property, raw_data] = entry;

						if (property in generator.result) {
							return [
								property,
								await generator.result[property](raw_data),
							];
						}

						return [property, raw_data];
					})
				));

				if (
					!object_has_property(
						result,
						'ClassName',
						(e:unknown) : e is string|ExpressionResult => {
							return (
								is_string(e)
								|| e instanceof ExpressionResult
							);
						}
					)
				) {
					throw new NoMatchError(
						result,
						'ClassName not present as string on result!'
					);
				}

				return result;
			});

			result.Classes = await Promise.all(remapped_classes);

			return result;
		};
	}

	private async Classes_generators(
		Classes_schema:unknown
	) {
		if (this.items.check(Classes_schema)) {
			if (object_has_property(Classes_schema.items, 'properties')) {
				return [await this.Classes_generators_from_direct_items(
					Classes_schema as {
						items: {
							properties: {[key: string]: unknown},
						},
					}
				)];
			} else if (object_has_non_empty_array_property(
				Classes_schema.items,
				'oneOf',
				(e:unknown) : e is (
					& {[key: string]: unknown}
					& {properties: {[key: string]: unknown}}
				) => {
					return object_has_property(e, 'properties');
				}
			)) {
				return this.Classes_generators_from_oneOf_items(
					Classes_schema as {items: {oneOf: {
						properties: {[key: string]: unknown},
					}[]}}
				);
			}

			throw new NoMatchError(
				Classes_schema.items,
				'Not yet supported!'
			);
		}

		throw new NoMatchError(
			{Classes_schema},
			'Unsupported classes check!'
		);
	}

	private async Classes_generators_from_direct_items(
		Classes_schema:{items: {properties: {[key: string]: unknown}}}
	) {
		return NativeClassResult.with_result(
			Classes_schema,
			Object.fromEntries(await Promise.all(Object.entries(
				Classes_schema.items.properties
			).map(
				async (
					entry
				) : Promise<[string, (raw_data:unknown) => unknown]> => {
					const [property, value] = entry;

					return [
						property,
						await this.discovery.find_generator(value).generate(
							Classes_schema.items.properties[
								property
							]
						),
					];
				}
			))),
			this.data_transformer
		);
	}

	private async Classes_generators_from_oneOf_items(
		Classes_schema:{items: {oneOf: {
			properties: {[key: string]: unknown},
		}[]}}
	) {
		return Promise.all(Classes_schema.items.oneOf.map((
			e
		) => {
			return this.Classes_generators_from_direct_items({
				items: e,
			});
		}));
	}

	static async fromTypesDiscovery(
		data_transformer: DataTransformer,
		docs: DocsTsGenerator
	) {
		return new this(
			await TypesDiscovery.generate_is_NativeClass(
				docs
			),
			data_transformer.data,
			data_transformer
		);
	}
}

class NativeClassResult extends SchemaCompilingGenerator<
	unknown,
	unknown,
	{[key: string]: (raw_data:unknown) => unknown}
> {
	public readonly result:{[key: string]: (raw_data:unknown) => unknown};
	public readonly schema:SchemaObject;

	protected constructor(
		ajv:Ajv,
		schema:SchemaObject,
		result:{[key: string]: (raw_data:unknown) => unknown}
	) {
		super(ajv, schema);
		this.schema = schema;
		this.result = result;
	}

	generate() {
		return Promise.resolve(() => this.result);
	}

	static async with_result(
		schema:SchemaObject & {items: SchemaObject},
		result:{[key: string]: (raw_data:unknown) => unknown},
		discovery: DataTransformer
	) {
		return new this(
			discovery.docs.ajv,
			{
				definitions: (
					await discovery.type_checked_schema()
				).definitions,
				...schema.items,
			},
			result
		);
	}
}
