import {
	ExpressionResult,
	FilterRefs,
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
import {
	compile,
} from '../../AjvUtilities';

type schema_type = SchemaObject & {
	$ref: local_ref<string>,
};

const secondary_schema = {
	type: 'object',
	required: ['type', 'enum'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		enum: {type: 'array', minItems: 1, items: {type: 'string'}},
	},
};

type secondary_schema_type = {
	type: 'string',
	enum: [string, ...string[]],
};

export class RefToEnum extends FilterRefs<
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
		return 'Schema not an enum string!';
	}

	protected expression_result(
		definition: secondary_schema_type,
		raw_data: string
	): Promise<ExpressionResult> {
		if (!definition.enum.includes(raw_data)) {
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

	static from_definitions(
		definitions:{[key: string]: SchemaObject},
		discovery: DataDiscovery
	) {
		const check = compile<secondary_schema_type>(
			discovery.docs.ajv,
			secondary_schema
		);
		const refs = this.filter_refs(
			definitions,
			check
		);

		return new this(
			discovery,
			require_non_empty_array<local_ref<string>>(refs)
		);
	}
}
