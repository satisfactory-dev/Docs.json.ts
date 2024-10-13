import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	common_ref,
	local_ref,
} from '../../StringStartsWith';
import {
	ConverterMatchesSchema,
	ExpressionResult,
} from '../Generator';
import ts, {
	FalseLiteral,
	NullLiteral,
	TrueLiteral,
} from 'typescript';

const schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {type: 'string', enum: [
			local_ref('boolean'),
			local_ref('boolean-extended'),
			common_ref('boolean'),
			common_ref('boolean-extended'),
		]},
	},
};

export type schema_type = SchemaObject & {
	$ref: (
		| local_ref<
		| 'boolean'
		| 'boolean-extended'
	>
		| common_ref<
			| 'boolean'
			| 'boolean-extended'
		>
	)
};

export class BooleanConverter extends ConverterMatchesSchema<
	schema_type,
	'True'|'False'|'',
	TrueLiteral|FalseLiteral|NullLiteral
> {
	constructor(ajv:Ajv) {
		super(ajv, schema);
	}

	can_convert_schema_and_raw_data(
		schema: SchemaObject,
		raw_data: unknown,
	): Promise<boolean> {
		return Promise.resolve(this.can_convert_schema(schema) && (
			'True' === raw_data
			|| 'False' === raw_data
			|| '' === raw_data
		));
	}

	convert(
		_: schema_type,
		raw_data: '' | 'True' | 'False',
	): Promise<ExpressionResult<NullLiteral | TrueLiteral | FalseLiteral>> {
		return Promise.resolve(new ExpressionResult(
			'' === raw_data
				? ts.factory.createNull()
				: (
					'True' === raw_data
						? ts.factory.createTrue()
						: ts.factory.createFalse()
				),
		));
	}
}
