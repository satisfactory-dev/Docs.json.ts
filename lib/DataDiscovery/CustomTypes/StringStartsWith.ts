import {
	ConvertsUnknown,
	ExpressionResult,
	RawGenerationResult,
} from '../Generator';
import {
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	RawData,
	schema,
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/string_starts_with';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	compile,
} from '../../AjvUtilities';
import {
	is_string,
} from '../../StringStartsWith';
import {
	NoMatchError,
} from '../../Exceptions';
import ts from 'typescript';
import {
	create_literal,
	type_reference_node,
} from '../../TsFactoryWrapper';

export class StringStartsWith extends ConvertsUnknown<
	unknown,
	ExpressionResult
> {
	private readonly check:ValidateFunction<RawData>;

	constructor(discovery:DataDiscovery) {
		super(discovery);
		this.check = compile(discovery.docs.ajv, schema);
	}

	convert_unknown(
		schema: RawData,
		raw_data: unknown
	): Promise<ExpressionResult> {
		if (!is_string(raw_data)) {
			throw new NoMatchError(
				raw_data,
				'string_starts_with values expected to be string!'
			);
		} else if (!raw_data.startsWith(schema.string_starts_with)) {
			throw new NoMatchError(
				{
					schema,
					raw_data,
				},
				'string does not start with expected string!'
			);
		}

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

	matches(
		raw_data: unknown
	): Promise<RawGenerationResult<this> | undefined> {
		if (this.check(raw_data)) {
			return Promise.resolve(new RawGenerationResult(this));
		}

		return Promise.resolve(undefined);
	}
}
