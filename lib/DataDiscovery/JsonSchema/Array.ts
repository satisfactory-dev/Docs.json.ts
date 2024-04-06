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
import {
	compile,
} from '../../AjvUtilities';

type unspecified_array = SchemaObject & {
	type: 'array',
	items: {[key: string]: unknown},
};

export type unbound_array = unspecified_array & {
	minItems: 1,
};

export type max_bounded_array = unbound_array & {
	maxItems: 1,
};

class UnspecifiedArray<
	ArrayType extends unspecified_array,
	Result = unknown
> extends ConvertsArray<Result> {
	public readonly check:ValidateFunction<ArrayType>;

	protected constructor(
		discovery:DataDiscovery,
		required:[string, ...string[]],
		properties:{[key: string]: SchemaObject},
	) {
		super(discovery);
		this.check = compile<ArrayType>(discovery.docs.ajv, {
			type: 'object',
			required,
			additionalProperties: false,
			properties: {
				...properties,
				type: {type: 'string', const: 'array'},
				items: {type: 'object'},
			},
		});
	}

	async convert_array(schema: ArrayType, raw_data:unknown[])
	{
		const converter:unknown = await (await Base.find(
			await this.discovery.candidates,
			schema.items
		)).result();

		return await Promise.all(raw_data.map(async (e) => {
			if (
				converter instanceof ConvertsObject
				&& value_is_non_array_object(e)
			) {
				return new RawGenerationResult(await converter.convert_object(
					schema.items,
					e
				));
			}

			return new RawGenerationResult(e);
		}))
	}

	matches(schema: unknown) {
		if (this.check(schema)) {
			return Promise.resolve(new RawGenerationResult(this));
		}

		return Promise.resolve(undefined);
	}
}

export class UnboundArray<
	ArrayType extends unbound_array = unbound_array,
	Result = unknown
> extends UnspecifiedArray<ArrayType, Result> {
	constructor(
		discovery:DataDiscovery,
		required: [string, ...string[]]|([]) = [],
		properties:{[key: string]: SchemaObject} = {}
	) {
		super(
			discovery,
			['type', 'minItems', 'items', ...required],
			{
				...properties,
				minItems: {type: 'number', minimum: 1},
			},
		);
	}
}

export class MaxBoundedArray<
	ArrayType extends max_bounded_array = max_bounded_array,
	Result = unknown
> extends UnboundArray<
	ArrayType,
	Result
> {
	constructor(discovery:DataDiscovery) {
		super(
			discovery,
			['maxItems'],
			{
				maxItems: {type: 'number', minimum: 1},
			}
		);
	}
}
