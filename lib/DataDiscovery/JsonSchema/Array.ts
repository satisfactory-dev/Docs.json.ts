import {
	Generator as Base,
	ConvertsArray,
	ConvertsObject,
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
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';

type unbound_array = SchemaObject & {
	type: 'array',
	minItems: 1,
	items: {[key: string]: unknown},
};

export class UnboundArray extends ConvertsArray<unknown> {
	private readonly ajv:Ajv;
	public readonly check:ValidateFunction<unbound_array>;

	constructor(discovery:DataDiscovery, ajv:Ajv) {
		super(discovery);
		this.ajv = ajv;
		this.check = ajv.compile<unbound_array>({
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
		const converter = await (await Base.find(
			this.discovery.candidates,
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
