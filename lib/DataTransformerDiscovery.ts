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

export class DataTransformerDiscovery
{
	public readonly discovery:DataTransformer;
	private readonly candidates: [AnyGenerator, ...AnyGenerator[]];
	private readonly $ref:Promise<$ref>;

	constructor(
		ajv: Ajv,
		discovery:DataTransformer,
		candidates: [AnyGenerator, ...AnyGenerator[]],
	) {
		this.discovery = discovery;
		this.candidates = candidates;
		this.$ref = $ref.fromDataDiscovery(ajv, discovery);
	}

	add_generators(...generators:AnyGenerator[])
	{
		this.candidates.push(...generators);
	}

	async maybe_remap_ref(value:unknown)
	{
		const $ref = await this.$ref;

		while ($ref.check(value)) {
			value = await ((await $ref.generate())(value));
		}

		return value;
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
							? await transformer.generate()
							: (raw_data:unknown) => raw_data
					),
				];
			}
		)));
	}

	async find(from:unknown) {
		const transformer = this.candidates.find(e => e.check(from));

		if (!transformer) {
			console.log(from);
			throw new Error('no match found!');
		}

		const match = await transformer.generate();

		if (!(match instanceof Function)) {
			console.error(match);
			throw new Error('Unsupported');
		}

		return match;
	}
}
