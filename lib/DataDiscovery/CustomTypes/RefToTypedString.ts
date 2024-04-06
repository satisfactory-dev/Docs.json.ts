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
	compile,
} from '../../AjvUtilities';
import {
	TypedString,
} from './TypedString';
import {
	generate_object_parent_schema,
	generate_typed_string_definitions,
	typed_string_parent_type,
} from '../../CustomParsingTypes/TypedString';

type schema_type = SchemaObject & {
	$ref: local_ref<string>,
};


export class RefToTypedString extends FilterRefs<
	schema_type,
	typed_string_parent_type
> {
	private basic:TypedString;

	protected constructor(
		discovery:DataDiscovery,
		refs:[local_ref<string>, ...local_ref<string>[]],
		all_refs:[local_ref<string>, ...local_ref<string>[]]
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
			{
				...generate_object_parent_schema(),
				definitions: {
					...generate_typed_string_definitions(all_refs),
				},
			}
		);
		this.basic = new TypedString(discovery);
	}

	protected double_check_failure_message(): string {
		return 'Schema not a typed_string string!';
	}

	protected expression_result(
		definition: typed_string_parent_type,
		raw_data: string
	): Promise<ExpressionResult<ts.Expression>> {
		return this.basic.convert_unknown(definition, raw_data);
	}

	static from_definitions(
		definitions:{[key: string]: SchemaObject},
		discovery: DataDiscovery
	) {
		const all_refs = Object.keys(definitions).map(local_ref);
		const check = compile<typed_string_parent_type>(
			discovery.docs.ajv,
			{
				...generate_object_parent_schema(),
				definitions: {
					...generate_typed_string_definitions(all_refs),
				},
			}
		);
		const refs = this.filter_refs(
			definitions,
			check
		);

		return new this(
			discovery,
			require_non_empty_array<local_ref<string>>(refs),
			require_non_empty_array(all_refs)
		);
	}
}
