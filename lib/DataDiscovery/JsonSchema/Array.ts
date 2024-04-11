import {
	Converter,
	ConverterMatchesSchema,
    ExpressionResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	ArrayLiteralExpression,
} from 'typescript';
import {
	NoMatchError,
} from '../../Exceptions';

type array_type = {
	type: 'array',
	items: SchemaObject,
	minItems: number,
	maxItems?: number,
};

export class ArrayConverter extends ConverterMatchesSchema<
	array_type,
	unknown[],
	ArrayLiteralExpression
> {
	private readonly discovery:DataDiscovery;

	constructor(discovery:DataDiscovery) {
		super(discovery.docs.ajv, {
			type: 'object',
			required: ['type', 'minItems', 'items'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'array'},
				items: {type: 'object'},
				minItems: {type: 'number', minimum: 0},
				maxItems: {type: 'number', minimum: 1},
			},
		});

		this.discovery = discovery;
	}

    async can_convert_schema_and_raw_data(
		schema: SchemaObject,
		raw_data: unknown
	): Promise<boolean> {
        return Promise.resolve(
			this.can_convert_schema(schema)
			&& raw_data instanceof Array
			&& !!((await this.discovery.candidates).find(
				e => e.can_convert_schema(schema.items)
			))
			&& !!Converter.has_matching_schema(
				await this.discovery.candidates,
				schema.items
			)
		);
    }

	async convert(
		schema: array_type,
		raw_data: unknown[]
	): Promise<ExpressionResult<ArrayLiteralExpression>> {
		if (
			!this.can_convert_schema(schema)
			|| !await this.can_convert_schema_and_raw_data(schema, raw_data)
		) {
			throw new NoMatchError(
				{
					schema,
					raw_data,
				},
				'Cannot convert!'
			);
		}

		const converter = await Converter.find_matching_schema(
			await this.discovery.candidates,
			schema.items
		);

		const converted:unknown[] = [];

		for (const entry of raw_data) {
			converted.push(await converter.convert(schema.items, entry));
		}

		return new ExpressionResult(
			await this.discovery.literal.array_literal(converted)
		);
    }
}
