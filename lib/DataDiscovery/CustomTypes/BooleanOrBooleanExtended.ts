import Ajv, {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	is_string,
	local_ref,
} from '../../StringStartsWith';
import {
	ConvertsUnknown,
	ExpressionResult, RawGenerationResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	NoMatchError,
} from '../../Exceptions';
import ts from 'typescript';

const schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {type: 'string', enum: [
			local_ref('boolean'),
			local_ref('boolean-extended'),
		]},
	},
};

type schema_type = SchemaObject & {
	$ref: local_ref<
		| 'boolean'
		| 'boolean-extended'
	>
};

export class BooleanOrBooleanExtended extends ConvertsUnknown<
	unknown,
	ExpressionResult,
	schema_type
> {
	private readonly check:ValidateFunction<schema_type>;
	private readonly double_check:ValidateFunction<{
		type: 'string',
		enum: [string, ...string[]],
	}>;

	constructor(discovery:DataDiscovery, ajv:Ajv) {
		super(discovery);
		this.check = ajv.compile<schema_type>(schema);
		this.double_check = ajv.compile<{
			type: 'string',
			enum: [string, ...string[]],
		}>({
			type: 'object',
			required: ['type', 'enum'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				enum: {
					type: 'array',
					minItems: 2,
					uniqueItems: true,
					items: {type: 'string', enum: [
						'True',
						'False',
						'',
					]},
				},
			},
		});
	}

	async convert_unknown(
		schema: schema_type,
		raw_data: unknown
	): Promise<ExpressionResult> {
		if (!is_string(raw_data)) {
			throw new NoMatchError(raw_data, 'must be a string!');
		}

		const $ref = schema.$ref.substring(14);

		const definition = await this.discovery.docs.definition($ref);

		if (!this.double_check(definition)) {
			throw new NoMatchError(definition, 'Not a boolean schema!');
		}

		return new ExpressionResult(
			'' === raw_data
				? ts.factory.createIdentifier('undefined')
				: (
					'True' === raw_data
						? ts.factory.createTrue()
						: ts.factory.createFalse()
				)
		);
	}

	matches(raw_data: unknown) {
		if (this.check(raw_data)) {
			return Promise.resolve(new RawGenerationResult(this));
		}

		return Promise.resolve(undefined);
	}
}
