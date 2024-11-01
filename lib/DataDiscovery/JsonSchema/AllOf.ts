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

type allOf = {
	allOf: [SchemaObject, ...SchemaObject[]],
};

const schema = {
	type: 'object',
	required: ['allOf'],
	additionalProperties: false,
	properties: {
		allOf: {
			type: 'array',
			minItems: 1,
			items: {type: 'object', minProperties: 1},
		},
	},
};

export class AllOfConverter extends ConverterMatchesSchema<allOf> {
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
			let response = true;

			for (const entry of schema.allOf) {
				if (!await Converter.has_matching_schema_and_raw_data(
					await this.discovery.candidates,
					entry,
					raw_data,
				)) {
					response = false;
				}

				if (!response) {
					break;
				}
			}

			return response;
		}

		return false;
	}

	async convert(schema: allOf, raw_data: unknown): Promise<
		ExpressionResult
	> {
		const candidates = await this.discovery.candidates;

		const failures:NoMatchError[] = [];

		for (const entry of schema.allOf) {
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
				allOf: await Promise.all(schema.allOf.map(async (
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
