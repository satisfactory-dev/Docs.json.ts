import {
	AnyGenerator,
	SecondaryCheckSchemaCompilingGenerator,
} from '../Generator';
import Ajv, {
} from 'ajv/dist/2020';
import {
	DataTransformer,
} from '../../DataTransformer';
import {
	NoMatchError,
} from '../../DataTransformerDiscovery/NoMatchError';

type schema_type = {oneOf: {[key: string]: unknown}[]};

export class oneOf extends SecondaryCheckSchemaCompilingGenerator<
	schema_type,
	unknown,
	unknown
> {
	private readonly discovery:DataTransformer;

	constructor(ajv: Ajv, discovery:DataTransformer) {
		super(ajv, {
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

			throw new NoMatchError({
				raw_data,
				schema,
				generators: generators.map(e => e.constructor.name),
				errors: generators.map(e => e.check.errors),
				secondary: generators.filter(
					(
						maybe
					): maybe is SecondaryCheckSchemaCompilingGenerator<
						unknown,
						unknown,
						unknown
					> => SecondaryCheckSchemaCompilingGenerator.is(
						maybe
					)
				).map((e) => e.secondary_errors),
			})
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
