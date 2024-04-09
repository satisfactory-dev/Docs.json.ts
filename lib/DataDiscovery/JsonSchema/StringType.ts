import {
	ConvertsUnknown,
	ExpressionResult,
	RawGenerationResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../../Exceptions';
import {
	is_string,
} from '../../StringStartsWith';
import {
	enum_schema_type,
} from '../../CustomParsingTypes/TypedStringEnum';
import {
	const_schema_type,
} from '../../CustomParsingTypes/TypedStringConst';
import ts from 'typescript';
import {
	create_literal,
	type_reference_node,
} from '../../TsFactoryWrapper';

type string_schema = {
	type: 'string',
	minLength?: number,
};
type pattern_schema = {
	type: 'string',
	pattern: string,
};

export class StringType extends ConvertsUnknown<
	unknown,
	ExpressionResult
> {
	private readonly is_const:ValidateFunction<const_schema_type>;
	private readonly is_enum:ValidateFunction<enum_schema_type>;
	private readonly is_string:ValidateFunction<string_schema>;

	constructor(discovery:DataDiscovery) {
		super(discovery);
		this.is_const = discovery.docs.ajv.compile<const_schema_type>({
			type: 'object',
			required: ['type', 'const'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				const: {type: 'string'},
			},
		});
		this.is_enum = discovery.docs.ajv.compile<enum_schema_type>({
			type: 'object',
			required: ['type', 'enum'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				enum: {
					type: 'array',
					minItems: 1,
					items: {type: 'string'},
				},
			},
		});
		this.is_string = discovery.docs.ajv.compile<string_schema>({
			type: 'object',
			required: ['type'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', minimum: 0},
			},
		});
	}

	async convert_unknown(
		schema: {[p: string]: unknown},
		raw_data: unknown
	): Promise<ExpressionResult> {
		if (!is_string(raw_data)) {
			throw new NoMatchError(
				{
					schema,
					raw_data,
				},
				'string schema should have string data!'
			);
		}

		if (
			(
				this.is_const(schema)
				&& raw_data === schema.const
			)
			|| (
				this.is_enum(schema)
				&& schema.enum.includes(raw_data)
			)
			|| this.is_string(schema)
		) {
			return Promise.resolve(new ExpressionResult(
				await this.discovery.literal.value_literal(raw_data)
			));
		}

		throw new NoMatchError(
			{
				schema,
				raw_data,
			},
			'Schema unsupported',
		);
	}

	matches(
		raw_data: unknown
	): Promise<RawGenerationResult<this>|undefined> {
		if (
			this.is_const(raw_data)
			|| this.is_enum(raw_data)
			|| this.is_string(raw_data)
		) {
			if ('typed_string' in raw_data) {
				throw new NoMatchError(
					{
						raw_data
					},
					'should not have matched!'
				);
			}

			return Promise.resolve(new RawGenerationResult(this));
		}

		return Promise.resolve(undefined);
	}
}

export class PatternType extends ConvertsUnknown<
	unknown,
	ExpressionResult
> {
	private readonly is_pattern:ValidateFunction<pattern_schema>;

	constructor(discovery:DataDiscovery) {
		super(discovery);
		this.is_pattern = discovery.docs.ajv.compile<pattern_schema>({
			type: 'object',
			required: ['type', 'pattern'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				pattern: {type: 'string', minLength: 2},
			},
		});
	}

	convert_unknown(
		schema: pattern_schema,
		raw_data: unknown
	): Promise<ExpressionResult> {
		if (!is_string(raw_data)) {
			throw new NoMatchError(
				{
					raw_data,
				},
				'Expecting string value!'
			);
		}

		const {pattern} = schema;
		const regex = new RegExp(pattern);

		if (!regex.test(raw_data)) {
			throw new NoMatchError({
				raw_data,
				pattern,
			}, `"${raw_data}" does not match /${pattern}/!`);
		}

		return Promise.resolve(new ExpressionResult(
			ts.factory.createAsExpression(
				ts.factory.createStringLiteral(raw_data),
				type_reference_node(
					'StringPassedRegExp',
					create_literal(pattern)
				)
			)
		));
	}

	matches(raw_data: unknown) {
		if (this.is_pattern(raw_data)) {
			return Promise.resolve(new RawGenerationResult(this));
		}

		return Promise.resolve(undefined);
	}
}
