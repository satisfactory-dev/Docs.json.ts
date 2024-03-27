import {
	ExpressionResult,
	SecondaryCheckSchemaCompilingGenerator,
} from '../Generator';
import {
	RawData,
	schema,
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/string_starts_with';
import ts from 'typescript';
import {
	create_literal,
	type_reference_node,
} from '../../TsFactoryWrapper';
import Ajv from 'ajv/dist/2020';
import {
	is_string,
} from '../../StringStartsWith';

export class string_starts_with extends SecondaryCheckSchemaCompilingGenerator<
	RawData,
	string,
	ExpressionResult
> {
	constructor(ajv:Ajv) {
		super(ajv, schema);
	}

	generate(schema_data: RawData): Promise<
		(raw_data: string) => ExpressionResult
	> {
		return Promise.resolve((raw_data:string) => {
			return new ExpressionResult(ts.factory.createAsExpression(
				ts.factory.createStringLiteral(raw_data),
				type_reference_node(
					'StringStartsWith',
					create_literal(schema_data.string_starts_with)
				)
			));
		});
	}

	secondary_check(
		schema_data: RawData,
		raw_data:unknown
	) {
		return Promise.resolve(
			is_string(raw_data)
			&& raw_data.startsWith(schema_data.string_starts_with)
		);
	}
}
