import Ajv, {Schema, ValidateFunction} from 'ajv/dist/2020';
import ts from 'typescript';
import {
	import_these_later,
	import_these_somewhere_later,
} from './TypesGeneration';
import {
	array_string_schema_type,
} from './TypesGeneration/arrays';
import {
	array_string_schema,
} from './TypesGeneration/json_schema_types';
import {
	adjust_class_name,
	computed_property_name_or_undefined,
	create_callExpression__for_validation_function,
	create_method_without_type_parameters,
	create_modifier, create_object_type,
	create_this_assignment, create_type,
	needs_element_access,
	property_name_or_computed,
} from "./TsFactoryWrapper";
import {match} from "node:assert";

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
	private readonly generator:TypeNodeGeneration_generator<T>;
	constructor(schema:Schema, generator:TypeNodeGeneration_generator<T>) {
		this.schema = schema;
		this.generator = generator;
	}

	match(ajv: Ajv, property: object): TypeNodeGenerationResult | null {
		if (!this.validate.has(ajv)) {
			try {
				this.validate.set(ajv, ajv.compile<T>(this.schema));
			} catch (err) {
				console.error(((this.schema as unknown) as any).properties);

				throw err;
			}
		}
		const validate = this.validate.get(ajv) as ValidateFunction<T>;

		if (validate(property)) {
			return this.generator(property);
		}

		return null;
	}

	static matchers:TypeNodeGeneration<any>[] = [];
}

declare type oneOf_or_anyOf_validator = ValidateFunction<{oneOf: object[]}|{anyOf: object[]}>;

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

declare type array_validator = ValidateFunction<{
	type: 'array',
	items: {
		anyOf: [object, ...object[]],
	},
}>;

abstract class UnsuccessfulMatchException<T extends object|unknown> extends Error
{
	readonly property:T;

	constructor(property:T, message = 'Could not match property to type generation!') {
		super(message);
		this.property = property;
	}
}

export class PartialMatchError extends UnsuccessfulMatchException<{[key: string]: object}>
{
	readonly missing: [object, ...object[]];

	constructor(
		property:{[key: string]: object},
		missing:[object, ...object[]],
		message = 'partial match found'
	) {
		super(property, message);
		this.missing = missing;
	}
}

export class NoMatchError<T extends object|unknown = object> extends UnsuccessfulMatchException<T>
{
}

export class UnexpectedlyUnknownNoMatchError<T extends unknown = unknown> extends NoMatchError<T>
{
}

export class OneOfOrAnyOfNoMatchError extends NoMatchError<object[]>
{
}

export class PropertyMatchFailure extends NoMatchError
{
	readonly property_name:string;
	readonly original:NoMatchError|PartialMatchError;

	constructor(property_name:string, original:NoMatchError|PartialMatchError) {
		super(original.property, original.message);
		this.property_name = property_name;
		this.original = original;
	}
}

export class TypeNodeGenerationMatcher
{
	private readonly matchers:TypeNodeGeneration<any>[];
	private oneOf_or_anyOf_schema_matcher:WeakMap<Ajv, oneOf_or_anyOf_validator> = new WeakMap<Ajv, oneOf_or_anyOf_validator>();
	private array_string_matcher:WeakMap<Ajv, array_string_validator> = new WeakMap<Ajv, array_string_validator>();
	private object_string_matcher:WeakMap<Ajv, object_string_validator> = new WeakMap<Ajv, object_string_validator>();
	private object_matcher:WeakMap<Ajv, object_validator> = new WeakMap<Ajv, object_validator>();
	private tuple_array_matcher:WeakMap<Ajv, tuple_array_validator> = new WeakMap<Ajv, tuple_array_validator>();
	private array_matcher:WeakMap<Ajv, array_validator> = new WeakMap<Ajv, array_validator>();
	public throw_on_failure_to_find = true;

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
			this.oneOf_or_anyOf_matcher(ajv, property)
			|| this.object_search(ajv, property)
			|| this.tuple_array_search(ajv, property)
			|| this.array_search(ajv, property)
		);
	}

	private oneOf_or_anyOf_matcher(ajv:Ajv, property:object): TypeNodeGenerationResult|null
	{
		if (!this.oneOf_or_anyOf_schema_matcher.has(ajv)) {
			this.oneOf_or_anyOf_schema_matcher.set(ajv, ajv.compile({oneOf: [
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
				}
			]}));
		}

		const oneOf_matcher = this.oneOf_or_anyOf_schema_matcher.get(ajv) as oneOf_or_anyOf_validator;

		if (oneOf_matcher(property)) {
			const matches:TypeNodeGenerationResult[] = [];
			let has_all_matches = true;
			let missing_matches:[object, ...object[]]|undefined;

			for (const sub_property of 'oneOf' in property ? property.oneOf : property.anyOf) {
				const match =
					this.search(ajv, sub_property)
					|| this.array_string_search(ajv, sub_property)
					|| this.object_string_search(ajv, sub_property);

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
				return new TypeNodeGenerationResult(
					() => {
						return ts.factory.createUnionTypeNode(matches.map((result) => {
							return result.type();
						}));
					},
				);
			} else if (this.throw_on_failure_to_find && matches.length > 0 && missing_matches) {
				throw new PartialMatchError(property, missing_matches);
			} else if (this.throw_on_failure_to_find) {
				throw new OneOfOrAnyOfNoMatchError('anyOf' in property ? property.anyOf : property.oneOf);
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

	private array_search(ajv:Ajv, property:object): TypeNodeGenerationResult|null
	{
		if (!this.array_matcher.has(ajv)) {
			this.array_matcher.set(ajv, ajv.compile({
				type: 'object',
				required: ['type', 'items'],
				additionalProperties: false,
				properties: {
					type: {type: 'string', const: 'array'},
					items: {
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
				}
			}));
		}

		const array_matcher = this.array_matcher.get(ajv) as array_validator;

		if (array_matcher(property)) {
			const result = this.search(ajv, property.items);

			if (result) {
				return new TypeNodeGenerationResult(
					() => {
						return ts.factory.createArrayTypeNode(result.type());
					},
					result.import_these_somewhere_later
				);
			}
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
			} else if (this.throw_on_failure_to_find) {
				throw new NoMatchError(property.array_string, 'need to check shit');
			}
		} else if ('array_string' in property) {
			throw new UnexpectedlyUnknownNoMatchError(
				property.array_string,
				`Unsupported array_string usage found!`
			);
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
			}

			return new TypeNodeGenerationResult(
				() => {
					return ts.factory.createTypeLiteralNode(Object.entries(object_types).map((entry) => {
						const [sub_property_name, sub_property_match] = entry;

						return ts.factory.createPropertySignature(
							undefined,
							property_name_or_computed(sub_property_name),
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

		if (this.throw_on_failure_to_find) {
			throw new NoMatchError(property);
		}

		return new TypeNodeGenerationResult(() => ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword));
	}

	find_from_properties(ajv:Ajv, properties:{[key: string]: object}) : {[K in keyof typeof properties]: TypeNodeGenerationResult}
	{
		return Object.fromEntries(Object.entries(properties).map((entry) => {
			const [property, property_data] = entry;

			try {
				return [
					property,
					this.find(ajv, property_data),
				];
			} catch (err) {
				if (err instanceof NoMatchError || err instanceof PartialMatchError) {
					throw new PropertyMatchFailure(property, err);
				}

				throw err;
			}
		}));
	}

	static merge_imports(
		filename:string,
		path_relative:string,
		results:TypeNodeGenerationResult[],
		onto:import_these_later
	) {
		for (const result of results) {
			this.merge_import_singular(filename, path_relative, result, onto);
		}
	}

	static merge_import_singular(
		filename:string,
		path_relative:string,
		result:TypeNodeGenerationResult,
		onto:import_these_later
	) {
		for (const import_these_entry of  Object.entries(result.import_these_somewhere_later)) {
			const [import_from_absolute, import_these] = import_these_entry;
			const import_from = `${path_relative}${import_from_absolute}`;

			if ( ! (filename in onto)) {
				onto[filename] = {};
			}

			if (!(import_from in onto[filename])) {
				onto[filename][import_from] = [];
			}

			for (const import_this of import_these) {
				if (!onto[filename][import_from].includes(import_this)) {
					onto[filename][import_from].push(import_this);
				}
			}
		}
	}
}

export function create_constructor_args<T1 = string>(
	file:T1,
	reference_name:string,
	data: ({
		required: string[],
		'$ref': string,
	}|{
		required: string[],
	}|{
		'$ref': string,
	})&({properties: {[key: string]: object}}|{})
) : {file: T1, node: ts.TypeAliasDeclaration} {
	let type:ts.TypeNode|undefined;

	const required = ('required' in data ? data.required : []);

	const properties = required.concat('properties' in data ? Object.keys(data.properties) : []).reduce(
		(was, is) => {
			was[is] = ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);

			return was;
		},
		{} as {[key: string]: ts.KeywordTypeNode}
	);

	if ('required' in data && data.required.length || 'properties' in data) {
		type = create_object_type<typeof properties>(properties, required);
	}

	if ('$ref' in data && data['$ref']?.startsWith('#/definitions/')) {
		const reference = ts.factory.createTypeReferenceNode(adjust_class_name(`${
			data['$ref'].substring(14)
		}__constructor_args`));

		type = type ? ts.factory.createIntersectionTypeNode([
			reference,
			type,
		]) : reference;
	}

	if (!type) {
		console.error(data);

		throw new Error('unsupported type found!');
	}

	return {
		file,
		node: ts.factory.createTypeAliasDeclaration(
			[
				create_modifier('export'),
			],
			ts.factory.createIdentifier(adjust_class_name(`${reference_name}__constructor_args`)),
			undefined,
			type
		)
	};
}

declare type object_shorthand = ({
	required: string[],
	'$ref': string,
}|{
	required: string[],
}|{
	'$ref': string,
})&({
	properties:{[key: string]: object}
}|{});

export function create_binding_constructor(
	reference_name:string,
	data: object_shorthand
) : ts.MethodDeclaration {
	let constructor_body:ts.ExpressionStatement[] = [];
	let remapped_count = 0;
	const remapped_properties:{[key: string]: string} = {};
	const constructor_arg = ('required' in data ? data.required : []).map((property) => {
		const property_name = computed_property_name_or_undefined(property);
		const name = needs_element_access(property) ? `remapped_${++remapped_count}` : property;

		if (property_name) {
			remapped_properties[property] = name;
		}

		return ts.factory.createBindingElement(
			undefined,
			property_name,
			name
		);
	});

	if ('required' in data && 'properties' in data) {
		constructor_body.push(...data.required.map((property, index) => {
			const property_object = data.properties[
				property as keyof typeof data.properties
				] as {
				[key: string]: {
					type: string,
					pattern?: string,
				}
			};

			let assigned_value:ts.Expression = ts.factory.createIdentifier(
				property in remapped_properties ? remapped_properties[property] : property
			);

			if (property_object && 'pattern' in property_object && 'string' === typeof property_object.pattern) {
				assigned_value = create_callExpression__for_validation_function(
					'regexp_argument',
					index,
					[
						assigned_value,
						ts.factory.createStringLiteral(property_object.pattern),
					]
				);
			}

			return create_this_assignment(property, assigned_value);
		}));
	}

	if ('$ref' in data && data['$ref']?.startsWith('#/definitions/')) {
		constructor_body = [
			ts.factory.createExpressionStatement(ts.factory.createCallExpression(
				ts.factory.createSuper(),
				undefined,
				[ts.factory.createIdentifier('rest')]
			)),
			...constructor_body,
		];
		constructor_arg.push(ts.factory.createBindingElement(
			ts.factory.createToken(ts.SyntaxKind.DotDotDotToken),
			undefined,
			'rest'
		));
	}

	return create_method_without_type_parameters(
		'constructor',
		[
			ts.factory.createParameterDeclaration(
				undefined,
				undefined,
				ts.factory.createObjectBindingPattern(constructor_arg),
				undefined,
				ts.factory.createTypeReferenceNode(adjust_class_name(`${reference_name}__constructor_args`))
			),
		],
		constructor_body,
		['protected']
	);
}
