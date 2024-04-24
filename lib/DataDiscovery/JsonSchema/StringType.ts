import {
	ConverterMatchesSchema,
	ExpressionResult,
} from '../Generator';
import Ajv, {
	SchemaObject,
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
import ts, {
	AsExpression,
	StringLiteral,
} from 'typescript';
import {
	create_literal,
	type_reference_node,
} from '../../TsFactoryWrapper';
import {
	object_has_property,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	not_matching_string_schema,
	not_matching_string_type,
} from '../../TypeDefinitionDiscovery/JsonSchema/String';
import {
	compile,
} from '../../AjvUtilities';

export type string_schema = {
	type: 'string',
	minLength?: number,
};
export type pattern_schema = {
	type: 'string',
	pattern: string,
};

abstract class StringConverter<
	Schema extends SchemaObject
> extends ConverterMatchesSchema<
	Schema,
	string,
	StringLiteral
> {
	private readonly maybe_not:ValidateFunction<not_matching_string_type>;

	protected constructor(ajv:Ajv, schema:SchemaObject) {
		super(ajv, schema);
		this.maybe_not = compile<not_matching_string_type>(
			ajv,
			not_matching_string_schema
		);
	}

	can_convert_schema_and_raw_data(
		schema:SchemaObject,
		raw_data:unknown
	) : Promise<boolean> {
		if (
			!is_string(raw_data)
			|| (
				object_has_property(schema, 'not', value_is_non_array_object)
				&& (
					!this.maybe_not(schema.not)
					|| schema.not.enum.includes(raw_data)
				)
			)
		) {
			return Promise.resolve(false);
		}

		return Promise.resolve(
			this.can_convert_schema(schema)
		);
	}
}

export class BasicStringConverter extends StringConverter<
	string_schema
> {
	constructor(ajv: Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', minimum: 0},
				not: not_matching_string_schema,
			},
		});
	}

	convert(
		_: string_schema,
		raw_data: string
	): Promise<ExpressionResult<StringLiteral>> {
		return Promise.resolve(new ExpressionResult<StringLiteral>(
			ts.factory.createStringLiteral(raw_data)
		));
	}
}

abstract class StringConvertHasConstraints<
	Schema extends SchemaObject
> extends StringConverter<Schema> {
	async convert(
		schema: Schema,
		raw_data: string
	): Promise<ExpressionResult<StringLiteral>> {
		if (!await this.can_convert_schema_and_raw_data(schema, raw_data)) {
			throw new NoMatchError(
				{
					schema,
					raw_data,
				},
				'Raw data probably did not pass check!'
			);
		}

		return Promise.resolve(new ExpressionResult<StringLiteral>(
			ts.factory.createStringLiteral(raw_data)
		));
	}
}

export class ConstStringConverter extends StringConvertHasConstraints<
	const_schema_type
> {
	constructor(ajv:Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'const'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				const: {type: 'string'},
			},
		});
	}

	can_convert_schema_and_raw_data(
		schema:SchemaObject,
		raw_data:unknown
	) : Promise<boolean> {
		return Promise.resolve(
			this.can_convert_schema(schema)
			&& is_string(raw_data)
			&& schema.const === raw_data
		);
	}
}

export class EnumStringConverter extends StringConvertHasConstraints<
	enum_schema_type
> {
	constructor(ajv:Ajv) {
		super(ajv, {
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
	}

	can_convert_schema_and_raw_data(
		schema:SchemaObject,
		raw_data:unknown
	) : Promise<boolean> {
		return Promise.resolve(
			this.can_convert_schema(schema)
			&& is_string(raw_data)
			&& schema.enum.includes(raw_data)
		);
	}
}

export class PatternConverter extends ConverterMatchesSchema<
	pattern_schema,
	string,
	AsExpression
> {
	constructor(ajv:Ajv) {
		super(ajv, {
			type: 'object',
			required: ['type', 'pattern'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				pattern: {type: 'string', minLength: 2},
			},
		});
	}
	can_convert_schema_and_raw_data(
		schema: SchemaObject,
		raw_data: unknown
	): Promise<boolean> {
		return Promise.resolve(
			this.can_convert_schema(schema)
			&& is_string(raw_data)
			&& (new RegExp(schema.pattern)).test(raw_data)
		);
	}

	async convert(
		schema: pattern_schema,
		raw_data: string
	): Promise<ExpressionResult<AsExpression>> {
		if (
			!this.can_convert_schema(schema)
			|| !await this.can_convert_schema_and_raw_data(schema, raw_data)
		) {
			throw new NoMatchError(
				{
					schema,
					raw_data,
				},
				'Cannot convert schema!'
			);
		}

		return Promise.resolve(new ExpressionResult(
			ts.factory.createAsExpression(
				ts.factory.createStringLiteral(raw_data),
				type_reference_node(
					'StringPassedRegExp',
					create_literal(schema.pattern)
				)
			)
		));
	}
}
