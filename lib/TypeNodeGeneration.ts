import Ajv, {Schema, ValidateFunction} from 'ajv/dist/2020';
import ts, {preProcessFile} from "typescript";
import {import_these_somewhere_later} from "./TypesGeneration";
import {array_string_schema_type} from "./TypesGeneration/arrays";
import {array_string_schema} from "./TypesGeneration/json_schema_types";

export class TypeNodeGenerationResult
{
	readonly type:() => ts.TypeNode;
	readonly import_these_somewhere_later:import_these_somewhere_later;
	constructor(
		type:() => ts.TypeNode,
		import_these_somewhere_later:import_these_somewhere_later = {}
	) {
		this.type = type;
		this.import_these_somewhere_later = import_these_somewhere_later;
	}
}

declare type TypeNodeGeneration_generator<T extends {[key: string]: any}> = (data:T) => TypeNodeGenerationResult;

export class TypeNodeGeneration<T extends { [key: string]: any }>
{
	readonly schema:Schema;
	private validate:WeakMap<Ajv, ValidateFunction<T>> = new WeakMap<Ajv, ValidateFunction<T>>();
	private generator:TypeNodeGeneration_generator<T>;
	constructor(schema:Schema, generator:TypeNodeGeneration_generator<T>) {
		this.schema = schema;
		this.generator = generator;
	}

	match(ajv: Ajv, property: object): TypeNodeGenerationResult | null {
		if (!this.validate.has(ajv)) {
			this.validate.set(ajv, ajv.compile<T>(this.schema));
		}
		const validate = this.validate.get(ajv) as ValidateFunction<T>;

		if (validate(property)) {
			return this.generator(property);
		}

		return null;
	}

	static matchers:TypeNodeGeneration<any>[] = [];
}

declare type oneOf_validator = ValidateFunction<{oneOf: object[]}>;

declare type array_string_validator = ValidateFunction<array_string_schema_type>;

declare type object_string_validator = ValidateFunction<{
	type: 'string',
	minLength: 1,
	object_string: {
		type: 'object',
		required: [string, ...string[]],
		additionalProperties?: boolean,
		properties: object,
	},
}>;

declare type object_validator = ValidateFunction<{
	type: 'object',
	required: [string, ...string[]],
	properties: object,
}>;

declare type tuple_array_validator = ValidateFunction<{
	type: 'array',
	minItems: 2,
	maxItems: 2,
	items: false,
	prefixItems: [any, any],
}>;

export class TypeNodeGenerationMatcher
{
	private matchers:TypeNodeGeneration<any>[];
	private oneOf_schema_matcher:WeakMap<Ajv, oneOf_validator> = new WeakMap<Ajv, oneOf_validator>();
	private array_string_matcher:WeakMap<Ajv, array_string_validator> = new WeakMap<Ajv, array_string_validator>();
	private object_string_matcher:WeakMap<Ajv, object_string_validator> = new WeakMap<Ajv, object_string_validator>();
	private object_matcher:WeakMap<Ajv, object_validator> = new WeakMap<Ajv, object_validator>();
	private tuple_array_matcher:WeakMap<Ajv, tuple_array_validator> = new WeakMap<Ajv, tuple_array_validator>();

	constructor(matchers:TypeNodeGeneration<any>[]) {
		this.matchers = matchers;
	}

	private search(ajv:Ajv, property:object):TypeNodeGenerationResult|null {
		for (const matcher of this.matchers) {
			const match = matcher.match(ajv, property);

			if (match) {
				return match;
			}
		}

		return (
			this.oneOf_matcher(ajv, property)
			|| this.object_search(ajv, property)
			|| this.tuple_array_search(ajv, property)
		);
	}

	private oneOf_matcher(ajv:Ajv, property:object): TypeNodeGenerationResult|null
	{
		if (!this.oneOf_schema_matcher.has(ajv)) {
			this.oneOf_schema_matcher.set(ajv, ajv.compile({
				type: 'object',
				required: ['oneOf'],
				additionalProperties: false,
				properties: {
					oneOf: {
						type: 'array',
						minItems: 1,
						items: {type: 'object'},
					},
				},
			}));
		}

		const oneOf_matcher = this.oneOf_schema_matcher.get(ajv) as oneOf_validator;

		if (oneOf_matcher(property)) {
			const matches:TypeNodeGenerationResult[] = [];
			let has_all_matches = true;

			for (const sub_property of property.oneOf) {
				let found_match = false;
				for (const matcher of this.matchers) {
					const match = matcher.match(ajv, sub_property);

					if (match) {
						found_match = true;
						matches.push(match);
						break;
					}
				}

				if (!found_match) {
					const match = this.array_string_search(ajv, sub_property);

					if (match) {
						found_match = true;
						matches.push(match);
						break;
					}
				}

				if (!found_match) {
					has_all_matches = false;
					break;
				}
			}

			if (has_all_matches && matches.length) {
				return new TypeNodeGenerationResult(
					() => {
						return ts.factory.createUnionTypeNode(matches.map((result) => {
							return result.type();
						}));
					},
				);
			} else {
				console.error(property);

				throw new Error('lolwhut');
			}
		}

		return null;
	}

	private tuple_array_search(ajv:Ajv, property:object): TypeNodeGenerationResult|null
	{
		if (!this.tuple_array_matcher.has(ajv)) {
			this.tuple_array_matcher.set(ajv, ajv.compile({
				type: 'object',
				required: ['type', 'minItems', 'maxItems', 'items', 'prefixItems'],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'array'},
					minItems: {type: 'number', const: 2},
					maxItems: {type: 'number', const: 2},
					items: {type: 'boolean', const: false},
					prefixItems: {
						type: 'array',
						minItems: 2,
						maxItems: 2,
						items: {
							type: 'object',
						},
					},
				}
			}));
		}

		const tuple_array_matcher = this.tuple_array_matcher.get(ajv) as tuple_array_validator;

		if (tuple_array_matcher(property)) {
			const first = this.search(ajv, property.prefixItems[0]);

			if (!first) {
				console.error(property.prefixItems[0]);

				throw new Error('Failed to match first member of tuple');
			}

			const second = this.search(ajv, property.prefixItems[1]);

			if (!second) {
				console.error(property.prefixItems[1]);

				throw new Error('Failed to match second member of tuple');
			}

			return new TypeNodeGenerationResult(
				() => {
					return ts.factory.createTupleTypeNode([
						first.type(),
						second.type(),
					]);
				},
				[first.import_these_somewhere_later, second.import_these_somewhere_later].reduce(
					(was, is) => {
						for (const entry of Object.entries(is)) {
							const [import_from, import_these] = entry;

							if (!(import_from in was)) {
								was[import_from] = [];
							}

							for (const import_this of import_these) {
								if (!was[import_from].includes(import_this)) {
									was[import_from].push(import_this);
								}
							}
						}

						return was;
					},
					{}
				)
			);
		}

		return null;
	}

	private array_string_search(ajv:Ajv, property:object): TypeNodeGenerationResult|null
	{
		if (!this.array_string_matcher.has(ajv)) {
			this.array_string_matcher.set(ajv, ajv.compile(array_string_schema));
		}

		const array_string_matcher = this.array_string_matcher.get(ajv) as array_string_validator;

		if (array_string_matcher(property)) {
			const result = this.search(ajv, property.array_string.items);

			if (result) {
				return new TypeNodeGenerationResult(
					() => {
						return ts.factory.createArrayTypeNode(result.type());
					},
					result.import_these_somewhere_later
				);
			} else if ('array_string' in property) {
				console.log('need to check shit', JSON.stringify(property.array_string.items));
			}
		} else if ('array_string' in property) {
			console.error(property.array_string, array_string_matcher.errors);
			throw new Error(`Unsupported array_string usage found!`);
		}

		return null;
	}

	private object_string_search(ajv:Ajv, property:object): TypeNodeGenerationResult|null
	{
		if (!this.object_string_matcher.has(ajv)) {
			this.object_string_matcher.set(ajv, ajv.compile({
				type: 'object',
				required: [
					'type',
					'object_string',
				],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'string'},
					minLength: {type: 'number', const: 1},
					object_string: {
						type: 'object',
						required: [
							'type',
							'required',
							'properties',
						],
						additionalProperties: false,
						properties: {
							type: {type: 'string', const: 'object'},
							required: {
								type: 'array',
								minItems: 1,
								items: {type: 'string', minLength: 1},
							},
							properties: {type: 'object'},
						},
					},
				},
			}));
		}

		const object_string_matcher = this.object_string_matcher.get(ajv) as object_string_validator;

		if (object_string_matcher(property)) {
			return this.object_search(ajv, property.object_string);
		} else if ('object_string' in property) {
			console.error(property.object_string, object_string_matcher.errors);

			throw new Error('whut');
		}

		return null;
	}

	private object_search(ajv:Ajv, property:object): TypeNodeGenerationResult|null
	{
		if (!this.object_matcher.has(ajv)) {
			this.object_matcher.set(ajv, ajv.compile({
				type: 'object',
				required: [
					'type',
					'required',
					'properties',
				],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'object'},
					required: {
						type: 'array',
						minItems: 1,
						items: {type: 'string', minLength: 1},
					},
					properties: {type: 'object'},
				},
			}));
		}

		const object_matcher = this.object_matcher.get(ajv) as object_validator;

		if (object_matcher(property)) {
			const object_types:{[key: string]: TypeNodeGenerationResult} = {};

			for (const entry of Object.entries(property.properties)) {

				const [sub_property_name, sub_property] = entry;

				const sub_property_match = this.search(ajv, sub_property)

				if (!sub_property_match) {
					console.error(sub_property);
					throw new Error(`Could not find match for ${sub_property_name}`);
				}

				object_types[sub_property_name] = sub_property_match;

				return new TypeNodeGenerationResult(
					() => {
						return ts.factory.createTypeLiteralNode(Object.entries(object_types).map((entry) => {
							const [sub_property_name, sub_property_match] = entry;

							return ts.factory.createPropertySignature(
								undefined,
								sub_property_name,
								undefined,
								sub_property_match.type()
							);
						}));
					},
					Object.entries(object_types).map(entry => entry[1].import_these_somewhere_later).reduce(
						(was, is) => {
							for (const entry of Object.entries(is)) {
								const [import_from, import_these] = entry;

								if (!(import_from in was)) {
									was[import_from] = [];
								}

								for (const import_this of import_these) {
									if (!was[import_from].includes(import_this)) {
										was[import_from].push(import_this);
									}
								}
							}

							return was;
						},
						{}
					)
				);
			}
		}

		return null;
	}

	find(
		ajv:Ajv,
		property:object,
	) : TypeNodeGenerationResult {
		let match =
			this.search(ajv, property)
			|| this.array_string_search(ajv, property)
			|| this.object_string_search(ajv, property);

		if (match) {
			return match;
		}

		console.error(property);

		throw new Error('Could not match property to type generation!');
	}
}
