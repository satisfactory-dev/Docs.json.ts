import {
	Generator as Base,
	ConvertsArray,
	ConvertsObject,
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
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';

export type unbound_array = SchemaObject & {
	type: 'array',
	minItems: 1,
	items: {[key: string]: unknown},
};

export class UnboundArray extends ConvertsArray<unknown> {
	public readonly check:ValidateFunction<unbound_array>;

	constructor(discovery:DataDiscovery) {
		super(discovery);
		this.check = discovery.docs.ajv.compile<unbound_array>({
			type: 'object',
			required: ['type', 'minItems', 'items'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'array'},
				minItems: {type: 'number', const: 1},
				items: {type: 'object'},
			},
		});
	}

	async convert_array(schema: unbound_array, raw_data:unknown[])
	{
		const converter:unknown = await (await Base.find(
			await this.discovery.candidates,
			schema.items
		)).result();

		return raw_data.map((e) => {
			if (
				converter instanceof ConvertsObject
				&& value_is_non_array_object(e)
			) {
				return new RawGenerationResult(converter.convert_object(
					schema.items,
					e
				));
			}

			return new RawGenerationResult(e);
		})
	}

	matches(schema: unknown) {
		if (this.check(schema)) {
			return Promise.resolve(new RawGenerationResult(this));
		}

		return Promise.resolve(undefined);
	}
}
