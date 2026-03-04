import {
	ConverterMatchesSchema,
	ExpressionResult,
} from '../Generator.ts';
import type Ajv from 'ajv/dist/2020.js';
import type {
	SchemaObject,
} from 'ajv/dist/2020.js';
import type {
	RawData,
	// eslint-disable-next-line @stylistic/max-len
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/string_starts_with.ts';
import {
	schema,
	// eslint-disable-next-line @stylistic/max-len
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/string_starts_with.ts';
import {
	is_string,
} from '@satisfactory-dev/predicates.ts';
import type {
	AsExpression,
} from 'typescript';
import ts from 'typescript';
import {
	create_literal,
	type_reference_node,
} from '../../TsFactoryWrapper.ts';

export class StringStartsWithConverter extends ConverterMatchesSchema<
	RawData,
	string,
	AsExpression
> {
	constructor(ajv: Ajv) {
		super(ajv, schema);
	}

	can_convert_schema_and_raw_data(
		schema: SchemaObject,
		raw_data: unknown,
	): Promise<boolean> {
		return Promise.resolve(
			is_string(raw_data)
			&& this.can_convert_schema(schema)
			&& raw_data.startsWith(schema.string_starts_with),
		);
	}

	convert(
		schema: RawData,
		raw_data: string,
	): Promise<ExpressionResult<ts.AsExpression>> {
		return Promise.resolve(new ExpressionResult(
			ts.factory.createAsExpression(
				ts.factory.createStringLiteral(raw_data),
				type_reference_node(
					'StringStartsWith',
					create_literal(schema.string_starts_with),
				),
			),
		));
	}
}
