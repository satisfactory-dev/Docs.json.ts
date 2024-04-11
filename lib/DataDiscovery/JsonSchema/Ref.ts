import {
	Converter,
	ConverterMatchesSchema,
	ExpressionResult,
} from '../Generator';
import {
	local_ref,
} from '../../StringStartsWith';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	SchemaObject,
} from 'ajv/dist/2020';

type schema_type = {
	$ref: local_ref<string>,
};

export class Ref extends ConverterMatchesSchema<
	schema_type
> {
	private readonly cache:{[key: local_ref<string>]: boolean} = {};
	private readonly discovery:DataDiscovery;

	constructor(discovery:DataDiscovery) {
		super(discovery.docs.ajv, {
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {type: 'string', pattern: '^#/definitions/'},
			},
		});
		this.discovery = discovery;
	}

	async can_convert_schema_and_raw_data(
		schema: SchemaObject,
		raw_data: unknown
	): Promise<boolean> {
		performance.mark('start');
		if (!this.can_convert_schema(schema)) {
			performance.measure(
				`${
					this.constructor.name
				}.can_convert_schema_and_raw_data() early exit`,
				'start'
			);

			return false;
		} else if (schema.$ref in this.cache) {
			performance.measure(
				`${
					this.constructor.name
				}.can_convert_schema_and_raw_data() cached exit`,
				'start'
			);
			return this.cache[schema.$ref];
		}

		const definition = await this.discovery.docs.definition(
			schema.$ref.substring(14)
		);

		const converter = Converter.has_matching_schema(
			await this.discovery.candidates,
			definition
		);

		if (!converter) {
			performance.measure(
				`${
					this.constructor.name
				}.can_convert_schema_and_raw_data() deferred exit`,
				'start'
			);
			return false;
		}

		const result = await converter.can_convert_schema_and_raw_data(
			definition,
			raw_data
		);

		this.cache[schema.$ref] = result;

		performance.measure(
			`${
				this.constructor.name
			}.can_convert_schema_and_raw_data() resolved`,
			'start'
		);

		return result;
	}

	async convert(
		schema: schema_type,
		raw_data: schema_type
	): Promise<ExpressionResult> {
		performance.mark('start');
		const definition = await this.discovery.docs.definition(
			schema.$ref.substring(14)
		);

		const result = (await Converter.find_matching_schema(
			await this.discovery.candidates,
			definition
		)).convert(
			definition,
			raw_data
		);

		performance.measure(
			`${this.constructor.name}.convert()`,
			'start'
		);

		return result;
	}
}
