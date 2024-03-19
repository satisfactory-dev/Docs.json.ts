import Ajv, {Schema, ValidateFunction} from 'ajv/dist/2020';
import {
	NoMatchError,
	OneOfOrAnyOfNoMatchError,
	PartialMatchError,
	PropertyMatchFailure,
	UnexpectedlyUnknownNoMatchError,
} from './SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	object_has_property,
	object_only_has_that_property,
} from './CustomParsingTypes/CustomPairingTypes';

export class GenerationResult<T> {
	readonly generate: () => T;

	constructor(generate: () => T) {
		this.generate = generate;
	}
}

export type DataType = {[key: string]: any} | true;

export type ResultGenerator<
	T1,
	T2 extends DataType,
	T3 extends GenerationResult<T1> = GenerationResult<T1>,
> = (data: T2) => T3;

export type ResultGenerationMatchers<
	Result,
	Data extends DataType = DataType,
	Generation extends GenerationResult<Result> = GenerationResult<Result>,
	ItemType extends ResultGeneration<
		Result,
		Data,
		Generation
	> = ResultGeneration<Result, Data, Generation>,
> = Array<ItemType>;

declare type oneOf_or_anyOf_validator = ValidateFunction<
	{oneOf: object[]} | {anyOf: object[]}
>;

declare type object_validator = ValidateFunction<{
	type: 'object';
	required: [string, ...string[]];
	properties: object;
}>;

declare type tuple_array_validator = ValidateFunction<{
	type: 'array';
	minItems: 2;
	maxItems: 2;
	items: false;
	prefixItems: [any, any];
}>;

export type array_match_type = {
	type: 'array';
	items: {
		anyOf: [object, ...object[]];
	};
} & ({minItems: number} | {}) &
	({maxItems: number} | {});

declare type array_validator = ValidateFunction<array_match_type>;

export class ResultGeneration<
	ResultType,
	Data extends DataType = DataType,
	MatchResult extends
		GenerationResult<ResultType> = GenerationResult<ResultType>,
> {
	readonly schema: Schema;
	private validate: WeakMap<Ajv, ValidateFunction<Data>> = new WeakMap<
		Ajv,
		ValidateFunction<Data>
	>();
	private readonly generator: ResultGenerator<ResultType, Data, MatchResult>;

	static matchers: ResultGenerationMatchers<any, any>[] = [];

	constructor(
		schema: Schema,
		generator: ResultGenerator<ResultType, Data, MatchResult>
	) {
		this.schema = schema;
		this.generator = generator;
	}

	match(ajv: Ajv, data: object): MatchResult | null {
		if (!this.validate.has(ajv)) {
			try {
				this.validate.set(ajv, ajv.compile<Data>(this.schema));
			} catch (err) {
				console.error((this.schema as unknown as any).properties);

				throw err;
			}
		}
		const validate = this.validate.get(ajv) as ValidateFunction<Data>;

		if (validate(data)) {
			return this.generator(data);
		}

		return null;
	}
}

export abstract class ResultGenerationMatcher<
	ResultType,
	Data extends DataType,
	MatchResult extends GenerationResult<ResultType>,
	Matchers extends ResultGeneration<ResultType, Data, MatchResult>,
> {
	public readonly matchers: Array<Matchers>;
	private oneOf_or_anyOf_schema_matcher: WeakMap<
		Ajv,
		oneOf_or_anyOf_validator
	> = new WeakMap<Ajv, oneOf_or_anyOf_validator>();
	private object_matcher: WeakMap<Ajv, object_validator> = new WeakMap<
		Ajv,
		object_validator
	>();
	private tuple_array_matcher: WeakMap<Ajv, tuple_array_validator> =
		new WeakMap<Ajv, tuple_array_validator>();
	private array_matcher: WeakMap<Ajv, array_validator> = new WeakMap<
		Ajv,
		array_validator
	>();
	public throw_on_failure_to_find = true;
	public definitions_to_check: {[key: string]: Exclude<Schema, boolean>} =
		{};

	constructor(matchers: Array<Matchers> = []) {
		this.matchers = matchers;
	}

	protected abstract create_unknown_result(): MatchResult;

	protected abstract create_union_result(
		matches: [MatchResult, ...MatchResult[]]
	): MatchResult;

	protected abstract create_tuple_result(
		first: MatchResult,
		second: MatchResult
	): MatchResult;

	protected abstract create_array_result(
		property: array_match_type,
		result: MatchResult
	): MatchResult;

	protected abstract create_object_result(object_types: {
		[key: string]: MatchResult;
	}): MatchResult;

	protected abstract create_type_reference_result(
		reference: string
	): MatchResult;

	private search(
		ajv: Ajv,
		property: object,
		already_checked: (keyof typeof this.definitions_to_check)[]
	): MatchResult | null {
		for (const matcher of this.matchers) {
			const match = matcher.match(ajv, property);

			if (match) {
				return match;
			}
		}

		return (
			this.oneOf_or_anyOf_matcher(ajv, property) ||
			this.object_search(ajv, property) ||
			this.tuple_array_search(ajv, property) ||
			this.array_search(ajv, property) ||
			this.find_by_maybe_ref(ajv, property, already_checked)
		);
	}

	private oneOf_or_anyOf_matcher(
		ajv: Ajv,
		property: object,
		already_checked: (keyof typeof this.definitions_to_check)[] = []
	): MatchResult | null {
		if (!this.oneOf_or_anyOf_schema_matcher.has(ajv)) {
			this.oneOf_or_anyOf_schema_matcher.set(
				ajv,
				ajv.compile({
					oneOf: [
						{
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
						},
						{
							type: 'object',
							required: ['anyOf'],
							additionalProperties: false,
							properties: {
								anyOf: {
									type: 'array',
									minItems: 1,
									items: {type: 'object'},
								},
							},
						},
					],
				})
			);
		}

		const oneOf_matcher = this.oneOf_or_anyOf_schema_matcher.get(
			ajv
		) as oneOf_or_anyOf_validator;

		if (oneOf_matcher(property)) {
			const matches: MatchResult[] = [];
			let has_all_matches = true;
			let missing_matches: [object, ...object[]] | undefined;

			for (const sub_property of 'oneOf' in property
				? property.oneOf
				: property.anyOf) {
				const match = this.search(ajv, sub_property, already_checked);

				if (!match) {
					has_all_matches = false;
					if (!missing_matches) {
						missing_matches = [sub_property];
					} else {
						missing_matches.push(sub_property);
					}
					break;
				} else {
					matches.push(match);
				}
			}

			if (has_all_matches && matches.length) {
				return this.create_union_result(
					matches as [MatchResult, ...MatchResult[]]
				);
			} else if (
				this.throw_on_failure_to_find &&
				matches.length > 0 &&
				missing_matches
			) {
				throw new PartialMatchError(property, missing_matches);
			} else if (this.throw_on_failure_to_find) {
				throw new OneOfOrAnyOfNoMatchError(
					'anyOf' in property ? property.anyOf : property.oneOf
				);
			}
		}

		return null;
	}

	private tuple_array_search(
		ajv: Ajv,
		property: object,
		already_checked: (keyof typeof this.definitions_to_check)[] = []
	): MatchResult | null {
		if (!this.tuple_array_matcher.has(ajv)) {
			this.tuple_array_matcher.set(
				ajv,
				ajv.compile({
					type: 'object',
					required: [
						'type',
						'minItems',
						'maxItems',
						'items',
						'prefixItems',
					],
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
					},
				})
			);
		}

		const tuple_array_matcher = this.tuple_array_matcher.get(
			ajv
		) as tuple_array_validator;

		if (tuple_array_matcher(property)) {
			const first = this.search(
				ajv,
				property.prefixItems[0],
				already_checked
			);

			if (!first) {
				throw new UnexpectedlyUnknownNoMatchError(
					property.prefixItems[0],
					'Failed to match first member of tuple'
				);
			}

			const second = this.search(
				ajv,
				property.prefixItems[1],
				already_checked
			);

			if (!second) {
				throw new UnexpectedlyUnknownNoMatchError(
					property.prefixItems[1],
					'Failed to match second member of tuple'
				);
			}

			return this.create_tuple_result(first, second);
		}

		return null;
	}

	private array_search(
		ajv: Ajv,
		property: object,
		already_checked: (keyof typeof this.definitions_to_check)[] = []
	): MatchResult | null {
		if (!this.array_matcher.has(ajv)) {
			this.array_matcher.set(
				ajv,
				ajv.compile({
					type: 'object',
					required: ['type', 'items'],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'array'},
						minItems: {type: 'number', minimum: 1},
						maxItems: {type: 'number'},
						items: {
							oneOf: [
								{
									type: 'object',
									required: ['anyOf'],
									additionalProperties: false,
									properties: {
										anyOf: {
											type: 'array',
											minItems: 1,
											items: {type: 'object'},
										},
									},
								},
								{
									type: 'object',
									required: ['type'],
									properties: {
										type: {
											type: 'string',
											const: 'string',
										},
									},
								},
							],
						},
					},
				})
			);
		}

		const array_matcher = this.array_matcher.get(ajv) as array_validator;

		if (array_matcher(property)) {
			const result = this.search(ajv, property.items, already_checked);

			if (result) {
				return this.create_array_result(property, result);
			}
		}

		return null;
	}

	private object_search(ajv: Ajv, property: object): MatchResult | null {
		if (!this.object_matcher.has(ajv)) {
			this.object_matcher.set(
				ajv,
				ajv.compile({
					type: 'object',
					required: ['type', 'required', 'properties'],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'object'},
						required: {
							type: 'array',
							minItems: 1,
							items: {type: 'string', minLength: 1},
						},
						additionalProperties: {type: 'boolean'},
						properties: {type: 'object'},
					},
				})
			);
		}

		const object_matcher = this.object_matcher.get(
			ajv
		) as object_validator;

		if (object_matcher(property)) {
			const object_types: {[key: string]: MatchResult} = {};

			for (const entry of Object.entries(property.properties)) {
				const [sub_property_name, sub_property] = entry;

				object_types[sub_property_name] = this.find(ajv, sub_property);
			}

			return this.create_object_result(object_types);
		}

		return null;
	}

	private find_by_maybe_ref(
		ajv: Ajv,
		property: object,
		already_checked: (keyof typeof this.definitions_to_check)[] = []
	): MatchResult | null {
		if (
			object_only_has_that_property(property, '$ref') &&
			'string' === typeof property.$ref &&
			property.$ref.startsWith('#/definitions/')
		) {
			const definition = property.$ref.substring(14);

			if (
				definition in this.definitions_to_check &&
				!already_checked.includes(definition) &&
				this.find(ajv, this.definitions_to_check[definition], [
					definition,
					...already_checked,
				])
			) {
				return this.create_type_reference_result(definition);
			}
		}

		return null;
	}

	find(
		ajv: Ajv,
		property: object,
		already_checked: (keyof typeof this.definitions_to_check)[] = []
	): MatchResult {
		let match = this.search(ajv, property, already_checked);

		if (match) {
			return match;
		}

		if (this.throw_on_failure_to_find) {
			throw new NoMatchError(property);
		}

		return this.create_unknown_result();
	}

	find_from_properties(
		ajv: Ajv,
		properties: {
			[key: string]: object;
		}
	): {[K in keyof typeof properties]: MatchResult} {
		return Object.fromEntries(
			Object.entries(properties).map((entry) => {
				const [property, property_data] = entry;

				try {
					return [property, this.find(ajv, property_data)];
				} catch (err) {
					if (
						err instanceof NoMatchError ||
						err instanceof PartialMatchError
					) {
						throw new PropertyMatchFailure(property, err);
					}

					throw err;
				}
			})
		);
	}
}
