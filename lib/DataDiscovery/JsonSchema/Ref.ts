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
import {
	NoMatchError,
} from '../../Exceptions';

type schema_type = {
	$ref: local_ref<string>,
};

type final_resolve_result = [SchemaObject, Converter<SchemaObject>];

export class Ref extends ConverterMatchesSchema<
	schema_type
> {
	private readonly cache:{
		[key: local_ref<string>]: final_resolve_result,
	} = {};
	private readonly discovery:DataDiscovery;

	constructor(discovery:DataDiscovery) {
		super(discovery.docs.ajv, {
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {type: 'string', pattern: '^#/\\$defs/'},
			},
		});
		this.discovery = discovery;
	}

	async can_convert_schema_and_raw_data(
		schema: SchemaObject,
		raw_data: unknown
	): Promise<boolean> {
		performance.mark(
			`${this.constructor.name}.can_convert_schema_and_raw_data() start`
		);
		if (!this.can_convert_schema(schema)) {
			performance.measure(
				`${
					this.constructor.name
				}.can_convert_schema_and_raw_data() early exit`,
				`${
					this.constructor.name
				}.can_convert_schema_and_raw_data() start`
			);

			return false;
		}

		const maybe = await this.resolve_to_final_converter_schema_only(
			schema
		);

		const [definition, converter] = maybe;

		const result = await converter.can_convert_schema_and_raw_data(
			definition,
			raw_data
		);

		performance.measure(
			`${
				this.constructor.name
			}.can_convert_schema_and_raw_data() resolved`,
			`${this.constructor.name}.can_convert_schema_and_raw_data() start`
		);

		return result;
	}

	async convert(
		schema: schema_type,
		raw_data: schema_type
	): Promise<ExpressionResult> {
		performance.mark(`${this.constructor.name}.convert() start`);

		const maybe = await this.resolve_to_final_converter_schema_only(
			schema
		);

		if (undefined === maybe) {
			throw new NoMatchError(
				{
					schema,
					raw_data,
				},
				'No final converter found!'
			);
		}

		const [
			definition,
			converter,
		] = maybe;

		const result = await converter.convert(
			definition,
			raw_data
		);

		performance.measure(
			`${this.constructor.name}.convert()`,
			`${this.constructor.name}.convert() start`
		);

		return result;
	}

	async resolve_to_final_converter_schema_only(
		schema:schema_type
	): Promise<final_resolve_result> {
		let checking:SchemaObject = schema;

		performance.mark(`${
			this.constructor.name
		}.resolve_to_final_converter_schema_only() start`);

		if (!(schema.$ref in this.cache)) {
			while (this.can_convert_schema(checking)) {
				checking = await this.discovery.docs.definition(
					checking.$ref.substring(8)
				);
			}

			if (this.can_convert_schema(checking)) {
				throw new NoMatchError(
					{
						schema,
						checking,
					},
					'Did not resolve past $ref type',
				);
			}

			const converter = await Converter.find_matching_schema(
				await this.discovery.candidates,
				checking
			);

			performance.measure(
				`${this.constructor.name}.resolve_to_final_converter_schema_only()`,
				`${
					this.constructor.name
				}.resolve_to_final_converter_schema_only() start`
			);

			this.cache[schema.$ref] = [checking, converter];
		} else {
			performance.measure(
				`${this.constructor.name}.resolve_to_final_converter_schema_only() cached`,
				`${
					this.constructor.name
				}.resolve_to_final_converter_schema_only() start`
			);
		}

		return this.cache[schema.$ref];
	}
}
