import {
	AnyGenerator,
	SchemaCompilingGenerator,
} from '../Generator';
import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	DataTransformer,
} from '../../DataTransformer';
import {
	NoMatchError,
} from '../../DataTransformerDiscovery/NoMatchError';
import {
	string_starts_with,
} from '../CustomParsingTypes/string_starts_with';
import {
	RawData,
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/string_starts_with';
import {
	is_string,
} from '../../StringStartsWith';

export class oneOf extends SchemaCompilingGenerator<
	{oneOf: {[key: string]: unknown}[]},
	unknown,
	unknown
> {
	private discovery:DataTransformer;

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

	async generate(schema:{oneOf: {[key: string]: unknown}[]}) {
		const generators =  await Promise.all(
			schema.oneOf.map((e) => {
				return this.discovery.data.find_generator(e);
			})
		);

		const string_starts_with_generators = generators.map(
			(e, index) : [AnyGenerator, SchemaObject] => [
				e,
				schema.oneOf[index],
			]
		).filter(maybe => maybe[0] instanceof string_starts_with) as [
			string_starts_with,
			RawData,
		][];

		return async (raw_data: unknown) => {
			const generator = generators.find(e => e.check(raw_data));

			if (!generator && is_string(raw_data)) {
				const maybe = string_starts_with_generators.find(
					e => e[0].test(e[1], raw_data)
				);

				if (maybe) {
					return (await maybe[0].generate(maybe[1]))(raw_data);
				}
			}

			if (!generator) {
				throw new NoMatchError(raw_data);
			}

			return (await generator.generate(raw_data))(raw_data);
		};
	}
}
