import ts, {
	Identifier,
	ObjectLiteralExpression,
	ShorthandPropertyAssignment,
	SpreadAssignment,
	TypeNode,
} from 'typescript';
import {
	import_these_later,
	import_these_somewhere_later,
} from '../TypesGeneration';
import {array_string_schema_type} from '../TypesGeneration/arrays';
import {
	adjust_class_name,
	computed_property_name_or_undefined,
	create_callExpression__for_validation_function,
	create_method_without_type_parameters,
	create_minimum_size_typed_array_of_single_type,
	create_modifier,
	create_object_type,
	create_this_assignment,
	needs_element_access,
	property_name_or_computed,
} from '../TsFactoryWrapper';
import {
	array_match_type,
	DataType,
	GenerationResult,
	ResultGeneration,
	ResultGenerationMatcher,
	ResultGenerationMatchers,
} from '../SchemaBasedResultsMatching';

export class TypeNodeGenerationResult extends GenerationResult<ts.TypeNode> {
	readonly import_these_somewhere_later: import_these_somewhere_later;

	constructor(
		type: () => ts.TypeNode,
		import_these_somewhere_later: import_these_somewhere_later = {}
	) {
		super(type);
		this.import_these_somewhere_later = import_these_somewhere_later;
	}

	get type(): () => ts.TypeNode {
		return this.generate;
	}
}

export class TypeNodeGeneration<T extends DataType> extends ResultGeneration<
	TypeNode,
	T,
	TypeNodeGenerationResult
> {
	static matchers: ResultGenerationMatchers<TypeNode, any>[] = [];
}

abstract class UnsuccessfulMatchException<
	T extends object | unknown,
> extends Error {
	readonly property: T;

	constructor(
		property: T,
		message = 'Could not match property to type generation!'
	) {
		super(message);
		this.property = property;
	}
}

export class PartialMatchError extends UnsuccessfulMatchException<{
	[key: string]: object;
}> {
	readonly missing: [object, ...object[]];

	constructor(
		property: {[key: string]: object},
		missing: [object, ...object[]],
		message = 'partial match found'
	) {
		super(property, message);
		this.missing = missing;
	}
}

export class NoMatchError<
	T extends object | unknown = object,
> extends UnsuccessfulMatchException<T> {}

export class UnexpectedlyUnknownNoMatchError<
	T extends unknown = unknown,
> extends NoMatchError<T> {}

export class OneOfOrAnyOfNoMatchError extends NoMatchError<object[]> {}

export class PropertyMatchFailure extends NoMatchError {
	readonly property_name: string;
	readonly original: NoMatchError | PartialMatchError;

	constructor(
		property_name: string,
		original: NoMatchError | PartialMatchError
	) {
		super(original.property, original.message);
		this.property_name = property_name;
		this.original = original;
	}
}

export class TypeNodeGenerationMatcher extends ResultGenerationMatcher<
	TypeNode,
	DataType,
	TypeNodeGenerationResult,
	TypeNodeGeneration<any>
> {
    protected create_type_reference_result(reference: any): TypeNodeGenerationResult {
        return new TypeNodeGenerationResult(() => ts.factory.createTypeReferenceNode(adjust_class_name(reference)));
    }

	protected create_union_result(
		matches: [TypeNodeGenerationResult, ...TypeNodeGenerationResult[]]
	): TypeNodeGenerationResult {
		return new TypeNodeGenerationResult(() => {
			return ts.factory.createUnionTypeNode(
				matches.map((result) => {
					return result.type();
				})
			);
		});
	}

	protected create_tuple_result(
		first: TypeNodeGenerationResult,
		second: TypeNodeGenerationResult
	): TypeNodeGenerationResult {
		return new TypeNodeGenerationResult(
			() => {
				return ts.factory.createTupleTypeNode([
					first.type(),
					second.type(),
				]);
			},
			[
				first.import_these_somewhere_later,
				second.import_these_somewhere_later,
			].reduce(this.reduce_import_these_somewhere_later, {})
		);
	}

	private reduce_import_these_somewhere_later(
		was: import_these_somewhere_later,
		is: import_these_somewhere_later
	): import_these_somewhere_later {
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
	}

	protected create_array_result(
		property: array_match_type,
		result: TypeNodeGenerationResult
	): TypeNodeGenerationResult {
		return new TypeNodeGenerationResult(() => {
			if ('minItems' in property) {
				return create_minimum_size_typed_array_of_single_type(
					property.minItems,
					result.type,
					'maxItems' in property ? property.maxItems : undefined
				);
			}

			return ts.factory.createArrayTypeNode(result.type());
		}, result.import_these_somewhere_later);
	}

	protected create_array_string_result(
		property: array_string_schema_type,
		result: TypeNodeGenerationResult
	): TypeNodeGenerationResult {
		return new TypeNodeGenerationResult(() => {
			if ('minItems' in property.array_string) {
				return create_minimum_size_typed_array_of_single_type(
					property.array_string.minItems,
					result.type,
					'maxItems' in property.array_string
						? property.array_string.maxItems
						: undefined
				);
			}
			return ts.factory.createArrayTypeNode(result.type());
		}, result.import_these_somewhere_later);
	}

	protected create_object_result(object_types: {
		[key: string]: TypeNodeGenerationResult;
	}): TypeNodeGenerationResult {
		return new TypeNodeGenerationResult(
			() => {
				return ts.factory.createTypeLiteralNode(
					Object.entries(object_types).map((entry) => {
						const [sub_property_name, sub_property_match] = entry;

						return ts.factory.createPropertySignature(
							undefined,
							property_name_or_computed(sub_property_name),
							undefined,
							sub_property_match.type()
						);
					})
				);
			},
			Object.entries(object_types)
				.map((entry) => entry[1].import_these_somewhere_later)
				.reduce(this.reduce_import_these_somewhere_later, {})
		);
	}

	protected create_unknown_result(): TypeNodeGenerationResult {
		return new TypeNodeGenerationResult(() =>
			ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)
		);
	}

	static merge_imports(
		filename: string,
		path_relative: string,
		results: TypeNodeGenerationResult[],
		onto: import_these_later
	) {
		for (const result of results) {
			this.merge_import_singular(filename, path_relative, result, onto);
		}
	}

	static merge_import_singular(
		filename: string,
		path_relative: string,
		result: TypeNodeGenerationResult,
		onto: import_these_later
	) {
		for (const import_these_entry of Object.entries(
			result.import_these_somewhere_later
		)) {
			const [import_from_absolute, import_these] = import_these_entry;
			const import_from = `${path_relative}${import_from_absolute}`;

			if (!(filename in onto)) {
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

export function create_constructor_args<T1 extends string = string>(
	file: T1,
	reference_name: string,
	data:
		| ({required: string[]; $ref: string} & {
				properties: {[p: string]: object};
		  })
		| {
				required: string[];
				$ref: string;
		  }
		| ({required: string[]} & {properties: {[p: string]: object}})
		| {required: string[]}
		| ({
				$ref: string;
		  } & {properties: {[p: string]: object}})
		| {$ref: string},
	property_types: {[p: string]: TypeNodeGenerationResult}
): {file: T1; node: ts.TypeAliasDeclaration} {
	let type: ts.TypeNode | undefined;

	const required = 'required' in data ? data.required : [];

	const properties = required
		.concat('properties' in data ? Object.keys(data.properties) : [])
		.reduce(
			(was, is) => {
				was[is] =
					is in property_types
						? property_types[is].type()
						: ts.factory.createKeywordTypeNode(
								ts.SyntaxKind.StringKeyword
							);

				return was;
			},
			{} as {[key: string]: ts.TypeNode}
		);

	if (('required' in data && data.required.length) || 'properties' in data) {
		type = create_object_type<typeof properties>(properties);
	}

	if ('$ref' in data && data['$ref']?.startsWith('#/definitions/')) {
		const reference = ts.factory.createTypeReferenceNode(
			adjust_class_name(
				`${data['$ref'].substring(14)}__constructor_args`
			)
		);

		type = type
			? ts.factory.createIntersectionTypeNode([reference, type])
			: reference;
	}

	if (!type) {
		console.error(data);

		throw new Error('unsupported type found!');
	}

	return {
		file,
		node: ts.factory.createTypeAliasDeclaration(
			[create_modifier('export')],
			ts.factory.createIdentifier(
				adjust_class_name(`${reference_name}__constructor_args`)
			),
			undefined,
			type
		),
	};
}

declare type object_shorthand = (
	| {
			required: string[];
			$ref: string;
	  }
	| {
			required: string[];
	  }
	| {
			$ref: string;
	  }
) &
	(
		| {
				properties: {[key: string]: object};
		  }
		| {}
	);

export function create_binding_constructor(
	reference_name: string,
	data: object_shorthand,
	pass_to_super: string[],
	required_but_not_defined: string[] = []
): ts.MethodDeclaration {
	let constructor_body: ts.ExpressionStatement[] = [];
	let remapped_count = 0;
	const remapped_properties: {[key: string]: string} = {};

	const constructor_properties = [
		...('properties' in data ? Object.keys(data.properties) : []),
		...required_but_not_defined,
	].reduce((was, is) => {
		if (!was.includes(is)) {
			was.push(is);
		}

		return was;
	}, [] as string[]);

	const constructor_arg = constructor_properties.map((property) => {
		const property_name = computed_property_name_or_undefined(property);
		const name = needs_element_access(property)
			? `remapped_${++remapped_count}`
			: property;

		if (property_name) {
			remapped_properties[property] = name;
		}

		return ts.factory.createBindingElement(undefined, property_name, name);
	});

	if ('properties' in data) {
		constructor_body.push(
			...Object.keys(data.properties).map((property, index) => {
				const property_object = data.properties[
					property as keyof typeof data.properties
				] as {
					[key: string]: {
						type: string;
						pattern?: string;
					};
				};

				let assigned_value: ts.Expression =
					ts.factory.createIdentifier(
						property in remapped_properties
							? remapped_properties[property]
							: property
					);

				if (
					property_object &&
					'pattern' in property_object &&
					'string' === typeof property_object.pattern
				) {
					assigned_value =
						create_callExpression__for_validation_function(
							'regexp_argument',
							index,
							[
								assigned_value,
								ts.factory.createStringLiteral(
									property_object.pattern
								),
							]
						);
				}

				return create_this_assignment(property, assigned_value);
			})
		);
	}

	if ('$ref' in data && data['$ref']?.startsWith('#/definitions/')) {
		let rest_arg: Identifier | ObjectLiteralExpression =
			ts.factory.createIdentifier('rest');

		if (pass_to_super.length > 0) {
			let pass_to_super_object:
				| [
						ShorthandPropertyAssignment,
						...ShorthandPropertyAssignment[],
				  ]
				| [
						ShorthandPropertyAssignment,
						...ShorthandPropertyAssignment[],
						SpreadAssignment,
				  ] = pass_to_super.map((prop) => {
				return ts.factory.createShorthandPropertyAssignment(prop);
			}) as [
				ShorthandPropertyAssignment,
				...ShorthandPropertyAssignment[],
			];
			pass_to_super_object = [
				...pass_to_super_object,
				ts.factory.createSpreadAssignment(rest_arg),
			];
			rest_arg = ts.factory.createObjectLiteralExpression(
				pass_to_super_object
			);
		}

		constructor_body = [
			ts.factory.createExpressionStatement(
				ts.factory.createCallExpression(
					ts.factory.createSuper(),
					undefined,
					[rest_arg]
				)
			),
			...constructor_body,
		];
		constructor_arg.push(
			ts.factory.createBindingElement(
				ts.factory.createToken(ts.SyntaxKind.DotDotDotToken),
				undefined,
				'rest'
			)
		);
	}

	return create_method_without_type_parameters(
		'constructor',
		[
			ts.factory.createParameterDeclaration(
				undefined,
				undefined,
				ts.factory.createObjectBindingPattern(constructor_arg),
				undefined,
				ts.factory.createTypeReferenceNode(
					adjust_class_name(`${reference_name}__constructor_args`)
				)
			),
		],
		constructor_body,
		['protected']
	);
}
