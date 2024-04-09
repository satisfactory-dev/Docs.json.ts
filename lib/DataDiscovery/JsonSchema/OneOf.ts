import {
	ConvertsUnknown,
	ExpressionResult, RawGenerationResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../../Exceptions';
import {RefToTypedString} from '../CustomTypes/RefToTypedString';

type oneOf = {
	oneOf: [SchemaObject, ...SchemaObject[]],
};

export class OneOf extends ConvertsUnknown<unknown, ExpressionResult> {
	private readonly is_oneOf:ValidateFunction<oneOf>;
	private readonly RefToTypedString:Promise<RefToTypedString>;

	constructor(discovery:DataDiscovery) {
		super(discovery);
		this.is_oneOf = discovery.docs.ajv.compile<oneOf>({
			type: 'object',
			required: ['oneOf'],
			additionalProperties: false,
			properties: {
				oneOf: {
					type: 'array',
					minItems: 1,
					items: {type: 'object', minProperties: 1},
				},
			},
		});
		this.RefToTypedString = discovery.docs.schema().then(
			({definitions}) => {
				return RefToTypedString.from_definitions(definitions, discovery);
			}
		);
	}

	async convert_unknown(
		schema: oneOf,
		raw_data: unknown
	) {
		for (const entry of schema.oneOf) {
			for (const candidate of await this.discovery.candidates) {
				const maybe = await (await candidate.matches(entry))?.result();

				if (maybe instanceof ConvertsUnknown) {
					return maybe.convert_unknown(entry, raw_data);
				}
			}
		}

		throw new NoMatchError(
			{
				schema,
				raw_data,
			},
			'Unable to convert oneOf!'
		);
	}

	async matches(raw_data: unknown)
	{
		if (this.is_oneOf(raw_data)) {
			let match = true;
			for (const entry of raw_data.oneOf) {
				let entry_match = false;
				for (const candidate of await this.discovery.candidates) {
					const maybe = await (await candidate.matches(entry))?.result();
					if (maybe instanceof ConvertsUnknown) {
						entry_match = true;
						break;
					}
				}

				if (!entry_match) {
					if (
						!!await (
							await this.RefToTypedString
						).matches(entry)
					) {
						entry_match = true;
					}
				}

				if (!entry_match) {
					match = false
					break;
				}
			}

			if (match) {
				return new RawGenerationResult(this);
			}

			throw new NoMatchError(
				{
					raw_data,
					is_typed_string_ref: await Promise.all(raw_data.oneOf.map(
						async (entry) => {
							return !!await (
								await this.RefToTypedString
							).matches(entry);
						}
					)),
				},
				'oneOf identified but unable to resolve sub-match!',
			);
		}

		return undefined;
	}
}
