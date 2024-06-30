import {
	is_string,
} from '@satisfactory-dev/predicates.ts';

import {
	Converter,
	ConverterMatchesSchema,
	ExpressionResult,
} from '../Generator';
import {
	generate_object_parent_schema,
	generate_typed_string_$defs,
	typed_string_inner_array_prefixItems_type,
	typed_string_inner_array_type,
	typed_string_inner_object_pattern_type,
	typed_string_inner_object_type,
	typed_string_parent_type,
} from '../../CustomParsingTypes/TypedString';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	local_ref,
} from '../../StringStartsWith';
import {
	ArrayLiteralExpression,
	ObjectLiteralExpression,
} from 'typescript';
import {
	NoMatchError,
} from '../../Exceptions';
import {
	string_to_array,
	string_to_object,
} from '../../DocsValidation';
import {
	compile,
} from '../../AjvUtilities';
import {
	typed_string,
} from '../../TypeDefinitionDiscovery/CustomParsingTypes/typed_string';
import assert from 'node:assert/strict';

export class TypedStringConverter extends ConverterMatchesSchema<
	typed_string_parent_type,
	string,
	ArrayLiteralExpression|ObjectLiteralExpression
> {
	private readonly $defs:{[key: string]: SchemaObject};
	private readonly discovery:DataDiscovery;
	private readonly regex_schema_cache:{
		[key: string]: [
			RegExp,
			SchemaObject,
		][],
	} = {};

	constructor(
		discovery:DataDiscovery,
		$defs:{[key: string]: SchemaObject}
	) {
		const local_refs = Object.keys($defs).map(local_ref);
		super(discovery.docs.ajv, {
			...generate_object_parent_schema(),
			$defs: {
				...$defs,
				...generate_typed_string_$defs(local_refs),
			},
		});
		this.discovery = discovery;
		this.$defs = $defs;
	}

	can_convert_schema_and_raw_data(
		schema: SchemaObject,
		raw_data: unknown
	): Promise<boolean> {
		return Promise.resolve(
			this.can_convert_schema(schema)
			&& is_string(raw_data)
			&& (
				(
					'required' in schema.typed_string
					&& false !== string_to_object(raw_data, true)
				)
				|| (
					'patternProperties' in schema.typed_string
					&& false !== string_to_object(raw_data, true)
				)
				|| (
					!('required' in schema.typed_string)
					&& (
						(
							typed_string.is_array_type(schema.typed_string)
							&& this.check_shallow_array_schema(
								schema.typed_string,
								string_to_array(raw_data, true)
							)
						)
						|| (
							typed_string.is_prefixItems_type(
								schema.typed_string
							)
							&& this.check_shallow_array_prefixItems_schema(
								schema.typed_string,
								string_to_array(raw_data, true)
							)
						)
					)
				)
			)
		);
	}

	async convert(
		schema: typed_string_parent_type,
		raw_data: string
	): Promise<ExpressionResult<
		| ArrayLiteralExpression
		| ObjectLiteralExpression
	>> {
		if (!await this.can_convert_schema_and_raw_data(schema, raw_data)) {
			throw new NoMatchError(
				{
					schema,
					raw_data,
				},
				'Cannot convert!'
			)
		} else if (
			typed_string.is_object_type(schema.typed_string)
			|| typed_string.is_object_pattern_type(schema.typed_string)
		) {
			const shallow = string_to_object(raw_data, true);

			assert.notEqual(shallow, false, new NoMatchError(
				{
					raw_data,
				},
				'raw data not a typed_string!'
			));

			return this.convert_object(
				schema.typed_string,
				shallow as Exclude<typeof shallow, false>
			);
		}

		const shallow = string_to_array(raw_data, true);

		assert.notEqual(shallow, false, new NoMatchError(
			{
				raw_data,
			},
			'raw data not a typed string!'
		));

		if (typed_string.is_array_type(schema.typed_string)) {
			return this.convert_array(
				schema.typed_string,
				shallow as Exclude<typeof shallow, false>
			);
		} else if (typed_string.is_prefixItems_type(schema.typed_string)) {
			return this.convert_prefixItems(
				schema.typed_string,
				shallow as Exclude<typeof shallow, false>
			);
		}

		throw new NoMatchError(
			{
				raw_data,
				shallow,
				schema,
			},
			'Failed to convert native type!'
		);
	}

	private check_shallow_array_prefixItems_schema(
		schema: typed_string_inner_array_prefixItems_type,
		shallow: unknown
	) {
		if (!(shallow instanceof Array)) {
			return false;
		}

		for (const entry of (shallow as unknown[])) {
			if (!is_string(entry)) {
				return false;
			}

			const inner_shallow = string_to_array(entry, true);

			if (
				false === inner_shallow
				|| !this.check_shallow_array_schema(schema, inner_shallow)
			) {
				return false;
			}
		}

		return true;
	}

	private check_shallow_array_schema(
		schema:
			| typed_string_inner_array_type
			| typed_string_inner_array_prefixItems_type,
		shallow: unknown
	) {
		if (false === shallow) {
			return false;
		}

		const check = compile<unknown[]>(
			this.discovery.docs.ajv,
			{
				...schema,
				$defs: this.$defs,
				type: 'array',
			},
		);

		return !!check(shallow);
	}

	private check_shallow_array_schema_assert(
		schema:
			| typed_string_inner_array_type
			| typed_string_inner_array_prefixItems_type,
		shallow: unknown
	): asserts shallow is unknown[] {
		const check = compile<unknown[]>(
			this.discovery.docs.ajv,
			{
				...schema,
				$defs: this.$defs,
				type: 'array',
			},
		);

		if (!check(shallow)) {
			throw new NoMatchError(
				{
					shallow,
					schema,
					errors: check.errors,
				},
				'Shallow parse of typed_string does not match array schema!'
			);
		}
	}

	private async convert_array(
		schema: typed_string_inner_array_type,
		shallow: unknown[]
	) : Promise<ExpressionResult<ArrayLiteralExpression>> {
		performance.mark(`${this.constructor.name}.convert_array() start`);
		this.check_shallow_array_schema_assert(schema, shallow);

		const converter = await Converter.find_matching_schema(
			await this.discovery.candidates,
			schema.items
		);

		const items:ExpressionResult[] = [];

		for (const e of shallow) {
			items.push(await converter.convert(schema.items, e));
		}

		const result = new ExpressionResult(
			await this.discovery.literal.array_literal(
				items
			)
		);

		performance.measure(
			`${this.constructor.name}.convert_array()`,
			`${this.constructor.name}.convert_array() start`
		);

		return result;
	}

	private async convert_object(
		schema:
			| typed_string_inner_object_type
			| typed_string_inner_object_pattern_type,
		shallow:{[key: string]: unknown}
	) : Promise<ExpressionResult<ObjectLiteralExpression>> {
		performance.mark(`${this.constructor.name}.convert_object() start`);
		this.convert_object_check_shallow_parse(schema, shallow);

		const converted_entries:[string, ExpressionResult][] = [];

		for (const entry of Object.entries(shallow)) {
			const [property, value] = entry;

			const property_schema = this.convert_object_property_schema(
				schema,
				property
			);

			const converter = await Converter.find_matching_schema(
				await this.discovery.candidates,
				property_schema
			);

			converted_entries.push([
				property,
				await converter.convert(property_schema, value),
			]);
		}

		const converted = Object.fromEntries(converted_entries);

		performance.measure(
			`${this.constructor.name}.convert_object() bootstrap`,
			`${this.constructor.name}.convert_object() start`
		);

		try {
			performance.mark(`${this.constructor.name}.convert_object() start`);

			const result = new ExpressionResult(
				await this.discovery.literal.object_literal(converted)
			);

			performance.measure(
				`${this.constructor.name}.convert_object()`,
				`${this.constructor.name}.convert_object() start`
			);

			return result;
		} catch (error) {
			throw new NoMatchError(
				{
					converted,
					error,
				},
				'Failed to grab object literal!'
			);
		}
	}

	private convert_object_check_shallow_parse(
		schema:
			| typed_string_inner_object_type
			| typed_string_inner_object_pattern_type,
		shallow:{[key: string]: unknown}
	) {
		performance.mark(
			`${
				this.constructor.name
			}.convert_object_check_shallow_parse() start`
		);
		const check = compile<
			{[key: string]: unknown}
		>(
			this.discovery.docs.ajv,
			{
				...schema,
				$defs: this.$defs,
				type: 'object',
			}
		);

		const result = check(shallow);

		performance.measure(
			`${
				this.constructor.name
			}.convert_object_check_shallow_parse()`,
			`${
				this.constructor.name
			}.convert_object_check_shallow_parse() start`
		);

		if (!result) {
			throw new NoMatchError(
				{
					shallow,
					schema,
					errors: check.errors,
				},
				'Shallow parse of typed_string does not match object schema!'
			);
		}
	}

	private convert_object_property_schema(
		schema:
			| typed_string_inner_object_type
			| typed_string_inner_object_pattern_type,
		property: string
	) : SchemaObject {
		performance.mark(
			`${
				this.constructor.name
			}.convert_object_property_schema() start`
		);

		if ('properties' in schema) {
			if (!(property in schema.properties)) {
				performance.measure(
					`${
						this.constructor.name
					}.convert_object_property_schema() object failure`,
					`${
						this.constructor.name
					}.convert_object_property_schema() start`
				);
				throw new NoMatchError(
					{
						property,
						schema,
					},
					'Property not in schema!'
				);
			}
			performance.measure(
				`${
					this.constructor.name
				}.convert_object_property_schema() object schema`,
				`${
					this.constructor.name
				}.convert_object_property_schema() start`
			);

			return schema.properties[property];
		}

		const json_string = JSON.stringify(schema.patternProperties);

		if (!(json_string in this.regex_schema_cache)) {
			this.regex_schema_cache[json_string] = Object.entries(
				schema.patternProperties
			).map(
				(e) : [RegExp, {[key: string]: unknown}] => {
					return [
						new RegExp(e[0]),
						e[1],
					];
				}
			);
			performance.measure(
				`${
					this.constructor.name
				}.convert_object_property_schema() pattern caching`,
				`${
					this.constructor.name
				}.convert_object_property_schema() start`
			);
		}

		const property_regex_schema = this.regex_schema_cache[
			json_string
		].find(
			maybe => maybe[0].test(property)
		);

		if (!property_regex_schema) {
			performance.measure(
				`${
					this.constructor.name
				}.convert_object_property_schema() pattern failure`,
				`${
					this.constructor.name
				}.convert_object_property_schema() start`
			);
			throw new NoMatchError(
				{
					property,
					schema,
				},
				'Property not in schema!'
			);
		}

		performance.measure(
			`${
				this.constructor.name
			}.convert_object_property_schema() pattern schema`,
			`${
				this.constructor.name
			}.convert_object_property_schema() start`
		);

		return property_regex_schema[1];
	}

	private async convert_prefixItems(
		schema: typed_string_inner_array_prefixItems_type,
		shallow: unknown[]
	): Promise<ExpressionResult<ArrayLiteralExpression>> {
		performance.mark(`${this.constructor.name}.convert_prefixItems() start`);
		const slightly_less_than_shallow:unknown[][] = [];

		for (const entry of shallow) {
			if (!is_string(entry)) {
				throw new NoMatchError(
					{
						schema,
						shallow,
						entry,
					},
					'Expecting string entries on shallow array!'
				);
			}

			const inner_shallow = string_to_array(entry, true);

			if (false === inner_shallow) {
				throw new NoMatchError(
					{
						entry,
					},
					'Failed to parse inner entry!'
				);
			}

			this.check_shallow_array_schema_assert(schema, inner_shallow);

			slightly_less_than_shallow.push(inner_shallow);
		}

		const converted:ExpressionResult<ArrayLiteralExpression>[] = [];

		for (const e of slightly_less_than_shallow) {
			if (e.length !== schema.prefixItems.length) {
				throw new NoMatchError(
					{
						e,
						schema,
					},
					`Expected an array of length ${schema.prefixItems.length}, received ${e.length}`,
				);
			}

			const items:ExpressionResult[] = [];
			let index = 0;

			for (const entry of e) {
				const type = schema.prefixItems[index];

				const converter = await Converter.find_matching_schema(
					await this.discovery.candidates,
					type
				);

				if (!await converter.can_convert_schema_and_raw_data(
					type,
					entry
				)) {
					throw new NoMatchError(
						{
							entry,
							type,
							converter: converter.constructor.name,
						},
						'Cannot convert entry!'
					);
				}

				items.push(await converter.convert(type, entry));

				++index;
			}

			converted.push(new ExpressionResult(
				await this.discovery.literal.array_literal(items)
			));
		}

		const result = new ExpressionResult(
			await this.discovery.literal.array_literal(converted)
		);

		performance.measure(
			`${this.constructor.name}.convert_prefixItems()`,
			`${this.constructor.name}.convert_prefixItems() start`
		);

		return result;
	}
}
