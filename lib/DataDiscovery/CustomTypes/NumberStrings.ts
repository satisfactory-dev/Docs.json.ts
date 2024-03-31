import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	DoubleCheckedStringSchema,
	ExpressionResult,
} from '../Generator';
import {
	local_ref,
} from '../../StringStartsWith';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import Ajv from 'ajv/dist/2020';
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

export type schema_type = SchemaObject & {
	$ref: local_ref<
		| 'decimal-string'
		| 'decimal-string--signed'
		| 'integer-string'
		| 'integer-string--signed'
	>
};

export class NumberStrings extends DoubleCheckedStringSchema<
	schema_type,
	{
		type: 'string',
		pattern: string,
	}
> {
	constructor(discovery:DataDiscovery, ajv:Ajv) {
		super(
			discovery,
			ajv,
			schema,
			{
			type: 'object',
			required: ['type', 'pattern'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				pattern: {type: 'string', minLength: 2},
			},
			}
		);
	}

	protected double_check_failure_message(): string {
		return 'Not a pattern schema!';
	}

	protected expression_result(
		definition: { type: 'string'; pattern: string; },
		raw_data: string
	): Promise<ExpressionResult<ts.Expression>> {
		return Promise.resolve(new ExpressionResult(
			ts.factory.createAsExpression(
			ts.factory.createStringLiteral(raw_data),
			type_reference_node(
				'StringPassedRegExp',
				create_literal(definition.pattern)
			)
			)
		));
	}
}
