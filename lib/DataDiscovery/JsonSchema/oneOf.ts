import {
	AnyGenerator,
	SecondaryCheckSchemaCompilingGenerator,
} from '../Generator';
import {
	DataTransformer,
} from '../../DataTransformer';

type schema_type = {oneOf: {[key: string]: unknown}[]};

export class oneOf extends SecondaryCheckSchemaCompilingGenerator<
	schema_type,
	unknown,
	unknown
> {
	private readonly discovery:DataTransformer;

	constructor(discovery:DataTransformer) {
		super(discovery.docs.ajv, {
			type: 'object',
			required: ['oneOf'],
			additionalProperties: false,
			properties: {
				oneOf: {
					type: 'array',
					minItems: 1,
					items: {type: 'object'},
				},
			},
		});
		this.discovery = discovery;
	}

	generate(schema:schema_type) {
		const generators = schema.oneOf.map(
			e => this.discovery.data.find_generator(e)
		);

		return Promise.resolve(async (raw_data: unknown) => {
			for (const generator of generators) {
				if (generator.check(raw_data)) {
					return (await generator.generate(raw_data))(raw_data);
				}
			}

			if (await this.secondary_check(schema, raw_data)) {
				return raw_data;
			}

			return  raw_data;
		});
	}

	async secondary_check(
		schema_data: schema_type,
		raw_data: unknown
	) {
		const generators = schema_data.oneOf.map(
			(
				e
			) : [
				AnyGenerator,
				{[key: string]: unknown},
			] => [this.discovery.data.find_generator(e), e]
		).filter(
			(
				maybe
			) : maybe is [
				SecondaryCheckSchemaCompilingGenerator<
					unknown,
					unknown,
					unknown
				>,
				{[key: string]: unknown},
			] => SecondaryCheckSchemaCompilingGenerator.is(
				maybe[0]
			)
		);

		for (const entry of generators) {
			const [generator, sub_schema] = entry;

			if (
				generator.check(raw_data)
				|| await generator.secondary_check(sub_schema, raw_data)
			) {
				return true;
			}
		}

		return false;
	}
}
