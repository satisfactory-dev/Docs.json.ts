import {
	DoubleCheckedStringSchema,
	ExpressionResult,
} from '../Generator';
import {
	local_ref,
} from '../../StringStartsWith';
import Ajv, {
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
	schema_basic,
	schema_basic_type, TypedObjectString_basic,
} from './TypedObjectString';

type schema_type = SchemaObject & {
	$ref: local_ref<string>,
};


export class RefToTypedObjectStringBasic extends DoubleCheckedStringSchema<
	schema_type,
	schema_basic_type
> {
	private basic:TypedObjectString_basic;

	protected constructor(
		discovery:DataDiscovery,
		ajv:Ajv,
		refs:[local_ref<string>, ...local_ref<string>[]]
	) {
		super(
			discovery,
			ajv,
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
			schema_basic
		);
		this.basic = new TypedObjectString_basic(discovery, ajv);
	}

	protected double_check_failure_message(): string {
		return 'Schema not a typed_object_string string!';
	}

	protected expression_result(
		definition: schema_basic_type,
		raw_data: string
	): Promise<ExpressionResult<ts.Expression>> {
		return this.basic.convert_unknown(definition, raw_data);
	}

	static async from_definitions(discovery:DataDiscovery, ajv:Ajv)
	{
		const {definitions} = await discovery.docs.schema();
		const check = ajv.compile<schema_basic_type>(schema_basic);
		const refs = Object.entries(definitions).filter(
			maybe => check(maybe[1])
		).map(e => e[0]).map(e => local_ref(e));

		return new this(
			discovery,
			ajv,
			require_non_empty_array<local_ref<string>>(refs)
		);
	}
}
