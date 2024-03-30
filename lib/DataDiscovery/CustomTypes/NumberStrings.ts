import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	ConvertsUnknown,
	ExpressionResult,
	RawGenerationResult,
} from '../Generator';
import {
	is_string,
	local_ref,
} from '../../StringStartsWith';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import Ajv, {
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../../Exceptions';
import ts from 'typescript';
import {
	create_literal,
	type_reference_node,
} from '../../TsFactoryWrapper';

const schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {type: 'string', enum: [
			local_ref('decimal-string'),
			local_ref('decimal-string--signed'),
			local_ref('integer-string'),
			local_ref('integer-string--signed'),
		]},
	},
};

type schema_type = SchemaObject & {
	$ref: local_ref<
		| 'decimal-string'
		| 'decimal-string--signed'
		| 'integer-string'
		| 'integer-string--signed'
	>
};

export class NumberStrings extends ConvertsUnknown<
	unknown,
	ExpressionResult,
	schema_type
> {
	private readonly check:ValidateFunction<schema_type>;
	private readonly double_check:ValidateFunction<{
		type: 'string',
		pattern: string,
	}>;
	constructor(discovery:DataDiscovery, ajv:Ajv) {
		super(discovery);
		this.check = ajv.compile<schema_type>(schema);
		this.double_check = ajv.compile<{
			type: 'string',
			pattern: string,
		}>({
			type: 'object',
			required: ['type', 'pattern'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				pattern: {type: 'string', minLength: 2},
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

		const definition = await this.discovery.docs.definition(
			schema.$ref.substring(14)
		);

		if (!this.double_check(definition)) {
			throw new NoMatchError(definition, 'Not a pattern schema!');
		}

		return new ExpressionResult(ts.factory.createAsExpression(
			ts.factory.createStringLiteral(raw_data),
			type_reference_node(
				'StringPassedRegExp',
				create_literal(definition.pattern)
			)
		));
	}

	matches(raw_data: unknown) {
		if (this.check(raw_data)) {
			return Promise.resolve(new RawGenerationResult(this));
		}

		return Promise.resolve(undefined);
	}
}
