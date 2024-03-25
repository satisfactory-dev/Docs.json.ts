import {
	$ref,
} from './DataDiscovery/$ref';
import {
	AnyGenerator,
} from './DataDiscovery/Generator';
import {
	DataTransformer,
} from './DataTransformer';
import Ajv from 'ajv/dist/2020';
import {
	items, items_type,
} from './DataDiscovery/JsonSchema/Array/items';
import {
	object_has_property,
	value_is_non_array_object,
} from './CustomParsingTypes/CustomPairingTypes';
import {
	NoMatchError,
} from './DataTransformerDiscovery/NoMatchError';
import {
	oneOf,
} from './DataDiscovery/JsonSchema/oneOf';
import {is_string} from './StringStartsWith';

export class DataTransformerDiscovery
{
	public readonly discovery:DataTransformer;
	private readonly candidates: AnyGenerator[] = [];
	private readonly $ref:Promise<$ref>;
	private readonly items:items;
	private readonly oneOf:oneOf;

	constructor(
		ajv: Ajv,
		discovery:DataTransformer,
	) {
		this.discovery = discovery;
		this.$ref = $ref.fromDataDiscovery(ajv, discovery);
		this.items = new items(ajv, discovery);
		this.oneOf = new oneOf(ajv);
	}

	add_generators(...generators:AnyGenerator[])
	{
		this.candidates.push(...generators);
	}

	async maybe_remap_ref(value:unknown) : Promise<unknown>
	{
		const $ref = await this.$ref;

		while ($ref.check(value)) {
			value = await ((await $ref.generate())(value));
		}

		if (
			this.items.check(value)
		) {
			const result = await this.maybe_remap_ref(value.items);

			if (!value_is_non_array_object(result)) {
				console.error(value, result);
				throw new Error('value resolved to non-object value!');
			} else if (
				!object_has_property(
				result,
				'properties',
				value_is_non_array_object
				)
				&& !object_has_property(
					result,
					'const',
					is_string
				)
			) {
				throw new NoMatchError(
					{
						value,
						result,
					},
					'Properties not found on items!'
				);
			}

			value.items = result as items_type;
		}
		if (this.oneOf.check(value)) {
			value.oneOf = await Promise.all(value.oneOf.map(
				async (e) => {
					const result = await this.maybe_remap_ref(e);

					if (!value_is_non_array_object(result)) {
						throw new NoMatchError(result, 'type loss!');
					}

					return result;
				}
			));
		}

		if (value_is_non_array_object(value)) {
			return this.maybe_remap_object_ref(value);
		}

		return value;
	}

	async maybe_remap_object_ref(maybe: {[key: string]: unknown})
	{
		return Object.fromEntries(await Promise.all(Object.entries(maybe).map(
			async (e) : Promise<[string, unknown]> => [
				e[0],
				await this.maybe_remap_ref(e[1]),
			]
		)));
	}

	async find_from_object(object:{[key: string]: unknown})
	{
		return Object.fromEntries(await Promise.all(Object.entries(object).map(
			async (
				entry
			) : Promise<[string, (raw_data:unknown) => unknown]> => {
				const [property, value] = entry;

				const transformer = this.candidates.find(e => e.check(value));

				if (!transformer) {
					console.log({[property]: value});
					throw new Error(`no match found for ${property}`);
				}

				return [
					property,
					(
						transformer
							? await transformer.generate(value)
							: (raw_data:unknown) => raw_data
					),
				];
			}
		)));
	}

	find_generator(from:unknown) {
		const transformer = this.candidates.find(e => e.check(from));

		if (!transformer) {
			throw new NoMatchError(from);
		}

		return transformer;
	}

	async find(from:unknown) {
		const transformer = this.find_generator(from);

		const match = await transformer.generate(from);

		if (!(match instanceof Function)) {
			throw new NoMatchError({from, match}, 'Unsupported');
		}

		return match;
	}
}
