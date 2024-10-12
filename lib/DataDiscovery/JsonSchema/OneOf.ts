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
		raw_data: unknown,
	): Promise<boolean> {
		if (this.can_convert_schema(schema)) {
			for (const entry of schema.oneOf) {
				if (await Converter.has_matching_schema_and_raw_data(
					await this.discovery.candidates,
					entry,
					raw_data,
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

		const failures:NoMatchError[] = [];

		for (const entry of schema.oneOf) {
			const converter = await Converter.has_matching_schema_and_raw_data(
				candidates,
				entry,
				raw_data,
			);

			if (
				converter
				&& await converter.can_convert_schema_and_raw_data(
					entry,
					raw_data,
				)
			) {
				try {
					return await converter.convert(entry, raw_data);
				} catch (err) {
					if (err instanceof NoMatchError) {
						failures.push(err);
					} else {
						throw err;
					}
				}
			}
		}

		throw new NoMatchError(
			{
				schema,
				raw_data,
				failures,
				oneOf: await Promise.all(schema.oneOf.map(async (
					e,
				) => {
					// eslint-disable-next-line max-len
					const converter = await Converter.has_matching_schema_and_raw_data(
						candidates,
						e,
						raw_data,
					);

					return [
						e,
						converter,
						(
							converter
								// eslint-disable-next-line max-len
								? await converter.can_convert_schema_and_raw_data(
									e,
									raw_data,
								)
								: 'no converter'
						),
					];
				})),
			},
			'Unable to convert data!',
		);
	}
}
