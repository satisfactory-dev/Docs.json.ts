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

type prefix_array_type = {
	type: 'array',
	items?: false,
	prefixItems: [SchemaObject, ...SchemaObject[]],
	minItems: number,
	maxItems?: number,
};

export class ArrayConverter extends ConverterMatchesSchema<
	array_type|prefix_array_type,
	unknown[],
	ArrayLiteralExpression
> {
	private readonly discovery:DataDiscovery;

	constructor(discovery:DataDiscovery) {
		super(discovery.docs.ajv, {
			oneOf: [
				{
			type: 'object',
			required: ['type', 'minItems', 'items'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'array'},
				items: {type: 'object'},
				minItems: {type: 'number', minimum: 0},
				maxItems: {type: 'number', minimum: 1},
			},
				},
				{
					type: 'object',
					required: ['type', 'minItems', 'prefixItems'],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'array'},
						items: {type: 'boolean', const: false},
						prefixItems: {type: 'array', items: {
							type: 'object',
						}},
						minItems: {type: 'number', minimum: 0},
						maxItems: {type: 'number', minimum: 1},
					},
				},
			],
		});

		this.discovery = discovery;
	}

	async can_convert_schema_and_raw_data(
		schema: SchemaObject,
		raw_data: unknown,
	): Promise<boolean> {
		return Promise.resolve(
			this.can_convert_schema(schema)
			&& raw_data instanceof Array
			&& (
				(
					!('prefixItems' in schema)
					&& !!((await this.discovery.candidates).find(
						e => e.can_convert_schema(schema.items),
					))
					&& !!Converter.has_matching_schema(
						await this.discovery.candidates,
						schema.items,
					)
				)
				|| (
					('prefixItems' in schema)
					&& !!await Promise.all(schema.prefixItems.map(
						async (sub_schema) => (
							!! (await this.discovery.candidates).find(
								e => e.can_convert_schema(sub_schema),
							)
							&& !!Converter.has_matching_schema(
								await this.discovery.candidates,
								sub_schema,
							)
						),
					))
				)
			),
		);
	}

	async convert(
		schema: array_type|prefix_array_type,
		raw_data: unknown[],
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
				'Cannot convert!',
			);
		}

		const converted:unknown[] = 'prefixItems' in schema
			? await this.#convert_prefixItems_type(schema, raw_data)
			: await this.#convert_array_type(schema, raw_data);

		return new ExpressionResult(
			await this.discovery.literal.array_literal(converted),
		);
	}

	async #convert_array_type(
		schema: array_type,
		raw_data: unknown[],
	): Promise<unknown[]> {
		const converter = await Converter.find_matching_schema(
			await this.discovery.candidates,
			schema.items,
		);

		const converted:unknown[] = [];

		for (const entry of raw_data) {
			converted.push(await converter.convert(schema.items, entry));
		}

		return converted;
	}

	async #convert_prefixItems_type(
		schema: prefix_array_type,
		raw_data: unknown[],
	): Promise<unknown[]> {
		if (raw_data.length > schema.prefixItems.length) {
			throw new NoMatchError(
				{
					schema,
					raw_data,
				},
				`Schema requires prefixItems of no more than ${
					schema.prefixItems.length
				}, ${
					raw_data.length
				} found!`,
			);
		}

		const converted:unknown[] = [];

		let index = 0;

		for (const entry of schema.prefixItems) {
			const converter = await Converter.find_matching_schema(
				await this.discovery.candidates,
				entry,
			);

			converted.push(await converter.convert(entry, raw_data[index]));

			++index;
		}

		return converted;
	}
}
