import {
	DoubleCheckedStringSchema,
	ExpressionResult,
} from '../Generator';
import {
	local_ref,
} from '../../StringStartsWith';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	require_non_empty_array,
} from '../../ArrayUtilities';
import ts from 'typescript';
import {
	NoMatchError,
} from '../../Exceptions';

type schema_type = SchemaObject & {
	$ref: local_ref<string>,
};

const secondary_schema = {
	type: 'object',
	required: ['type', 'const'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		const: {type: 'string'},
	},
};

type secondary_schema_type = {
	type: 'string',
	const: string,
};

export class RefToConst extends DoubleCheckedStringSchema<
	schema_type,
	secondary_schema_type
> {
	protected constructor(
		discovery:DataDiscovery,
		refs:[local_ref<string>, ...local_ref<string>[]]
	) {
		super(
			discovery,
			{
				type: 'object',
				required: ['$ref'],
				additionalProperties: false,
				properties: {
					$ref: {
						type: 'string',
						enum: refs,
					},
				},
			},
			secondary_schema
		);
	}

	protected double_check_failure_message(): string {
		return 'Schema not a const string!';
	}

	protected expression_result(
		definition: secondary_schema_type,
		raw_data: string
	): Promise<ExpressionResult> {
		if (raw_data !== definition.const) {
			throw new NoMatchError(
				{
					definition,
					raw_data,
				},
				'raw_data does not match schema!'
			);
		}

		return Promise.resolve(new ExpressionResult(
			ts.factory.createStringLiteral(raw_data)
		));
	}

	static async from_definitions(discovery:DataDiscovery)
	{
		const {definitions} = await discovery.docs.schema();
		const check = discovery.docs.ajv.compile<secondary_schema_type>(
			secondary_schema
		);
		const refs = Object.entries(definitions).filter(
			maybe => check(maybe[1])
		).map(e => e[0]).map(e => local_ref(e));

		return new this(
			discovery,
			require_non_empty_array<local_ref<string>>(refs)
		);
	}
}
