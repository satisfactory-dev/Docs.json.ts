import {
	ConverterMatchesSchema,
	ExpressionResult,
} from '../Generator';
import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	RawData,
	schema,
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/string_starts_with';
import {
	is_string,
} from '../../StringStartsWith';
import ts, {
	AsExpression,
} from 'typescript';
import {
	create_literal,
	type_reference_node,
} from '../../TsFactoryWrapper';

export class StringStartsWithConverter extends ConverterMatchesSchema<
	RawData,
	string,
	AsExpression
> {
	constructor(ajv:Ajv) {
		super(ajv, schema);
	}

	can_convert_schema_and_raw_data(
		schema: SchemaObject,
		raw_data: unknown
	): Promise<boolean> {
		return Promise.resolve(
			is_string(raw_data)
			&& this.can_convert_schema(schema)
			&& raw_data.startsWith(schema.string_starts_with)
		);
	}

	convert(
		schema: RawData,
		raw_data: string
	): Promise<ExpressionResult<ts.AsExpression>> {
		return Promise.resolve(new ExpressionResult(
			ts.factory.createAsExpression(
				ts.factory.createStringLiteral(raw_data),
				type_reference_node(
					'StringStartsWith',
					create_literal(schema.string_starts_with)
				)
			)
		));
	}
}
