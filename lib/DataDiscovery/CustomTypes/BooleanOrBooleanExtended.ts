import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	local_ref,
} from '../../StringStartsWith';
import {
	DoubleCheckedStringSchema,
	ExpressionResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
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

export class BooleanOrBooleanExtended extends DoubleCheckedStringSchema<
	schema_type,
	{
		type: 'string',
		enum: [string, ...string[]],
	}
> {
	constructor(discovery:DataDiscovery, ajv:Ajv) {
		super(
			discovery,
			ajv,
			schema,
			{
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
			}
		);
	}

	protected double_check_failure_message(): string {
		return 'Not a boolean schema!';
	}

	protected expression_result(
		definition: { type: 'string'; enum: [string, ...string[]]; },
		raw_data: string
	) {
		return Promise.resolve(new ExpressionResult(
			'' === raw_data
				? ts.factory.createIdentifier('undefined')
				: (
					'True' === raw_data
						? ts.factory.createTrue()
						: ts.factory.createFalse()
				)
		));
	}
}
