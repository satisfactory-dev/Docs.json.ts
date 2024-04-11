import {
	Converter,
	ConverterMatchesSchema,
	ExpressionResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../../Exceptions';

type oneOf = {
	oneOf: [SchemaObject, ...SchemaObject[]],
};

const schema = {
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
};

export class OneOfConverter extends ConverterMatchesSchema<oneOf> {
	private readonly discovery:DataDiscovery;

	constructor(discovery:DataDiscovery) {
		super(discovery.docs.ajv, schema);
		this.discovery = discovery;
	}

	async can_convert_schema_and_raw_data(
		schema: SchemaObject,
		raw_data: unknown
	): Promise<boolean> {
		if (this.can_convert_schema(schema)) {
			for (const entry of schema.oneOf) {
				if (await Converter.has_matching_schema_and_raw_data(
					await this.discovery.candidates,
					entry,
					raw_data
				)) {
					return true;
				}
			}
		}

		return false;
	}

	async convert(schema: oneOf, raw_data: unknown): Promise<
		ExpressionResult
	> {
		const candidates = await this.discovery.candidates;

		for (const entry of schema.oneOf) {
			const converter = await Converter.has_matching_schema_and_raw_data(
				candidates,
				entry,
				raw_data
			);

			if (converter) {
				try {
					return await converter.convert(entry, raw_data);
				} catch (err) {
					throw new NoMatchError(
						{
							schema,
							raw_data,
							matches: await Promise.all(schema.oneOf.map(async (e) => !!await Converter.has_matching_schema_and_raw_data(
								candidates,
								e,
								raw_data
							))),
							instance: await Promise.all(schema.oneOf.map(async (e) => {
								const maybe = await Converter.has_matching_schema_and_raw_data(
									candidates,
									e,
									raw_data,
								);

								return maybe ? maybe.constructor.name : undefined;
							})),
						},
						'Failed to convert oneOf',
					)
				}
			}
		}

		throw new NoMatchError(
			{
				schema,
				raw_data,
				oneOf: await Promise.all(schema.oneOf.map(e => Converter.has_matching_schema_and_raw_data(
					candidates,
					e,
					raw_data
				))),
			},
			'Unable to convert data!'
		);
	}
}
