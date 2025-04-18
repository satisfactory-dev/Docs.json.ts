import ts, {
	ClassDeclaration,
	Expression,
	HeritageClause,
	KeywordTypeSyntaxKind,
	LiteralTypeNode,
	MethodDeclaration,
	Modifier, ModifierSyntaxKind, ModifierToken,
	NodeArray,
	NullLiteral,
	ParenthesizedExpression,
	PrefixUnaryExpression,
	PropertyDeclaration,
	PropertySignature,
	RegularExpressionLiteral,
	StringLiteral,
	SyntaxKind,
	TemplateExpression,
	TypeLiteralNode,
	TypeNode,
	TypeParameterDeclaration,
	TypeReferenceNode,
	UnionTypeNode,
	VariableDeclaration,
	VariableDeclarationList,
	VariableStatement,
} from 'typescript';
import {
	is_string,
	non_empty_map,
} from '@satisfactory-dev/predicates.ts';

declare type supported_class_modifiers = ('export' | 'abstract')[];

declare type supported_modifier =
	| 'abstract'
	| 'protected'
	| 'public'
	| 'static';

declare type supported_method_modifiers = [
	supported_modifier,
	...supported_modifier[],
];

export function adjust_class_name(class_name: string): string {
	if (
		'boolean' === class_name
		|| 'common_type__boolean' === class_name
	) {
		return 'Docs_boolean';
	}
	if ('class' === class_name) {
		return 'Docs_class';
	}

	if (class_name.match(/^\d+\.\d+-/)) {
		class_name = `v${class_name}`;
	}

	return class_name.replace(/[^A-Za-z_\d ]/g, '_');
}

export const modifier_map: {
	[key: string]: () => ts.ModifierToken<ts.ModifierSyntaxKind>;
} = {
	abstract: () => {
		return ts.factory.createModifier(ts.SyntaxKind.AbstractKeyword);
	},
	public: () => {
		return ts.factory.createModifier(ts.SyntaxKind.PublicKeyword);
	},
	export: () => {
		return ts.factory.createModifier(ts.SyntaxKind.ExportKeyword);
	},
	protected: () => {
		return ts.factory.createModifier(ts.SyntaxKind.ProtectedKeyword);
	},
	const: () => {
		return ts.factory.createModifier(ts.SyntaxKind.ConstKeyword);
	},
	readonly: () => {
		return ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword);
	},
	static: () => {
		return ts.factory.createModifier(ts.SyntaxKind.StaticKeyword);
	},
	declare: () => {
		return ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword);
	},
};

type modifier = Exclude<keyof typeof modifier_map, number>;

export function create_modifiers(
	first:modifier,
	...rest:modifier[]
) {
	const modifiers = rest.reduce(
		(was:[modifier, ...modifier[]], is:modifier) => {
			if (!was.includes(is)) {
				was.push(is);
			}

			return was;
		},
		[first],
	);

	return non_empty_map<modifier, ModifierToken<ModifierSyntaxKind>>(
		modifiers,
		e => modifier_map[e](),
	);
}

export function type_reference_node(
	name: string,
	...type_arguments:TypeNode[]
) : TypeReferenceNode {
	return ts.factory.createTypeReferenceNode(name, type_arguments);
}

export type create_class_options = {
	modifiers?: supported_class_modifiers;
	extends?: string;
};

export function createClass(
	name: string,
	members: (PropertyDeclaration | MethodDeclaration)[],
	options: create_class_options = {},
	type_parameters:
		| [TypeParameterDeclaration, ...TypeParameterDeclaration[]]
		| undefined = undefined,
): ClassDeclaration {
	let resolved_modifiers: undefined | Modifier[] = undefined;
	const resolved_heritage: HeritageClause[] = [];

	const {modifiers, extends: class_extends} = options;

	if (modifiers && modifiers.length) {
		resolved_modifiers = modifiers
			.reduce((was, is) => {
				if (!was.includes(is)) {
					was.push(is);
				}

				return was;
			}, [] as supported_class_modifiers)
			.map((modifier) => {
				if ('export' === modifier) {
					return ts.factory.createModifier(
						ts.SyntaxKind.ExportKeyword,
					);
				}

				return ts.factory.createModifier(
					ts.SyntaxKind.AbstractKeyword,
				);
			});
	}

	if (class_extends) {
		resolved_heritage.push(
			ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
				ts.factory.createExpressionWithTypeArguments(
					ts.factory.createIdentifier(
						adjust_class_name(class_extends),
					),
					undefined,
				),
			]),
		);
	}

	return ts.factory.createClassDeclaration(
		resolved_modifiers,
		ts.factory.createIdentifier(adjust_class_name(name)),
		type_parameters,
		resolved_heritage,
		members,
	);
}

export function createParameter(
	name: string | ts.ObjectBindingPattern,
	type: KeywordTypeSyntaxKind | TypeNode,
	initializer: ts.Expression | undefined = undefined,
) {
	return ts.factory.createParameterDeclaration(
		undefined,
		undefined,
		name,
		undefined,
		'object' === typeof type
			? type
			: ts.factory.createKeywordTypeNode(type),
		initializer,
	);
}

declare type createMethod_parameters_entry =
	| [string, KeywordTypeSyntaxKind | ts.TypeNode]
	| ts.ParameterDeclaration;

function create_method(
	name: string,
	type_parameters: ts.TypeParameterDeclaration[],
	parameters: createMethod_parameters_entry[],
	modifiers: supported_method_modifiers,
	body: ts.Statement[],
	return_type: ts.TypeNode | undefined = undefined,
) {
	return ts.factory.createMethodDeclaration(
		create_modifiers(...modifiers),
		undefined,
		name,
		undefined,
		type_parameters.length ? type_parameters : undefined,
		parameters.map((entry) => {
			if (!(entry instanceof Array)) {
				return entry;
			}

			const [name, type] = entry;

			return createParameter(name, type);
		}),
		return_type,
		ts.factory.createBlock(body),
	);
}

export function create_method_with_type_parameters(
	name: string,
	type_parameters: [
		ts.TypeParameterDeclaration,
		...ts.TypeParameterDeclaration[],
	],
	parameters: createMethod_parameters_entry[],
	body: ts.Statement[],
	modifiers: supported_method_modifiers,
	return_type: ts.TypeNode | undefined = undefined,
) {
	return create_method(
		name,
		type_parameters,
		parameters,
		modifiers,
		body,
		return_type,
	);
}

export function create_method_without_type_parameters(
	name: string,
	modifiers: supported_method_modifiers,
	parameters: createMethod_parameters_entry[],
	body: ts.Statement[],
	return_type: ts.TypeNode | undefined = undefined,
) {
	return create_method(name, [], parameters, modifiers, body, return_type);
}

export function create_throw(
	throw_this: string,
	throw_arguments: [ts.Expression, ...ts.Expression[]],
	type_parameters: [ts.TypeNode, ...ts.TypeNode[]] | undefined = undefined,
) {
	return ts.factory.createThrowStatement(
		ts.factory.createNewExpression(
			ts.factory.createIdentifier(throw_this),
			type_parameters,
			throw_arguments,
		),
	);
}

export function create_throw_if(
	throw_this: string,
	throw_if: ts.Expression,
	throw_arguments: [ts.Expression, ...ts.Expression[]],
	type_parameters: [ts.TypeNode, ...ts.TypeNode[]] | undefined = undefined,
) {
	return ts.factory.createIfStatement(
		throw_if,
		create_throw(throw_this, throw_arguments, type_parameters),
	);
}

export function template_expression_from_string(
	template: string,
): TemplateExpression {
	const ast = ts.createSourceFile(
		'create_span_from_template.ts',
		template,
		ts.ScriptTarget.Latest,
		false,
		ts.ScriptKind.TS,
	);

	if (1 !== ast.statements.length) {
		throw new Error('Input must have only one statement!');
	} else if (!ts.isExpressionStatement(ast.statements[0])) {
		throw new Error(
			'Input must be an expression statement!',
		);
	} else if (!ts.isTemplateExpression(ast.statements[0].expression)) {
		throw new Error(
			'Input must be a template literal expression!',
		);
	}

	return ast.statements[0].expression;
}

export function parenthesize(expression:Expression): ParenthesizedExpression {
	return ts.factory.createParenthesizedExpression(expression);
}

export function create_property_access(
	on: Expression,
	property: string,
) {
	return ts.factory.createPropertyAccessExpression(
		ts.isNewExpression(on) ? parenthesize(on) : on,
		property,
	);
}

const type_map = {
	boolean: ts.SyntaxKind.BooleanKeyword,
	number: ts.SyntaxKind.NumberKeyword,
	object: ts.SyntaxKind.ObjectKeyword,
	string: ts.SyntaxKind.StringKeyword,
	undefined: ts.SyntaxKind.UndefinedKeyword,
	never: ts.SyntaxKind.NeverKeyword,
	unknown: ts.SyntaxKind.UnknownKeyword,
};

export function create_type(type: keyof typeof type_map): ts.KeywordTypeNode {
	return ts.factory.createKeywordTypeNode(
		type_map[type] as ts.KeywordTypeSyntaxKind,
	);
}

export function create_object_type_from_entries(
	entries: [string, TypeNode][],
	required?:[string, ...string[]],
	default_required = true,
): TypeLiteralNode {
	return ts.factory.createTypeLiteralNode(
		entries.map((entry) => {
			const [property, type] = entry;

			return createPropertySignature(
				property,
				type,
				required ? required.includes(property) : default_required,
			);
		}),
	);
}

export function createPropertySignature(
	property: string,
	type: TypeNode,
	required = true,
) : PropertySignature {
	return ts.factory.createPropertySignature(
		undefined,
		property_name_or_computed(property),
		required
			? undefined
			: ts.factory.createToken(ts.SyntaxKind.QuestionToken),
		type,
	);
}

export function needs_element_access(property: string): boolean {
	return /[?[\] ]/.test(property);
}

export function computed_property_name_or_undefined(
	property: string,
): ts.ComputedPropertyName | undefined {
	return needs_element_access(property)
		? ts.factory.createComputedPropertyName(
			ts.factory.createStringLiteral(property),
		)
		: undefined;
}

export function property_name_or_computed<T extends string = string>(
	property: T,
): T | ts.ComputedPropertyName {
	return computed_property_name_or_undefined(property) || property;
}

export function minimum_size_array_of_single_type(
	repeat: number,
	generate: () => ts.TypeNode,
	max: number | undefined = undefined,
): ts.TupleTypeNode {
	if (repeat < 0) {
		throw new Error(
			`repeat must be greater than or equal to 0, ${repeat} given.`,
		);
	} else if (repeat !== (repeat | 0)) {
		throw new Error(`repeat must be an integer, ${repeat} given.`);
	}

	const types = [];

	for (let iteration = 0; iteration < repeat; ++iteration) {
		types.push(generate());
	}

	if (repeat === max) {
		return ts.factory.createTupleTypeNode(types);
	}

	return ts.factory.createTupleTypeNode([
		...types,
		ts.factory.createRestTypeNode(
			ts.factory.createArrayTypeNode(generate()),
		),
	]);
}

export function create_this_assignment(
	property: string,
	identifier: string | ts.Expression,
): ts.ExpressionStatement {
	return ts.factory.createExpressionStatement(
		ts.factory.createAssignment(
			needs_element_access(property)
				? ts.factory.createElementAccessExpression(
					ts.factory.createThis(),
					ts.factory.createStringLiteral(property),
				)
				: create_property_access(
					ts.factory.createThis(),
					property,
				),
			is_string(identifier)
				? ts.factory.createIdentifier(identifier)
				: identifier,
		),
	);
}

export function create_index_access(identifier: string, index: number) {
	return ts.factory.createElementAccessExpression(
		ts.factory.createIdentifier(identifier),
		index,
	);
}

export function create_literal<
	T1 extends string | RegExp | null = string | RegExp | null,
	T2 = T1 extends null
		? ts.LiteralTypeNode & {literal: NullLiteral}
		: (
			T1 extends RegExp
				? RegularExpressionLiteral
				: (ts.LiteralTypeNode & {literal: StringLiteral})
		),
>(value: T1): T2 {
	if (value instanceof RegExp) {
		return ts.factory.createRegularExpressionLiteral(
			value.toString(),
		) as T2;
	}

	return ts.factory.createLiteralTypeNode(
		null === value
			? ts.factory.createNull()
			: ts.factory.createStringLiteral(value),
	) as T2;
}

export function create_union(
	a: ts.TypeNode,
	b: ts.TypeNode,
	...rest: ts.TypeNode[]
): ts.UnionTypeNode {
	return ts.factory.createUnionTypeNode([a, b, ...rest]);
}

declare type lazy_union_item =
	| string
	| {$ref: string}
	| ({type: string} & ({pattern: string} | {const: string}));

function map_lazy_union_item_to_type(item: lazy_union_item): ts.TypeNode {
	if ('object' === typeof item) {
		if ('$ref' in item) {
			return type_reference_node(
				adjust_class_name(item.$ref.substring(8)),
			);
		}

		if ('const' in item) {
			return create_literal(item.const);
		}

		return type_reference_node(
			'StringPassedRegExp',
			create_literal(item.pattern),
		);
	}

	return create_literal(item);
}

export function create_lazy_union(
	a: lazy_union_item,
	b: lazy_union_item,
	...rest: lazy_union_item[]
): ts.UnionTypeNode {
	return create_union(
		map_lazy_union_item_to_type(a),
		map_lazy_union_item_to_type(b),
		...rest.map(map_lazy_union_item_to_type),
	);
}

export function possibly_create_lazy_union(
	items: lazy_union_item[],
): ts.TypeNode {
	if (items.length < 1) {
		throw new Error('Cannot create lazy unions from empty arrays!');
	} else if (1 === items.length) {
		return map_lazy_union_item_to_type(items[0]);
	}

	const [a, b, ...rest] = items;

	return create_lazy_union(a, b, ...rest);
}

type string_literal = LiteralTypeNode & {literal: StringLiteral};
export type non_empty_string_literal_union = UnionTypeNode & {
	types: NodeArray<string_literal> & [string_literal, ...string_literal[]];
};

export function create_typed_union(
	items: [string, ...string[]],
): non_empty_string_literal_union {
	return ts.factory.createUnionTypeNode(
		items.map(create_literal),
	) as non_empty_string_literal_union;
}

export function create_const_declaration_list(
	first:VariableDeclaration,
	...rest:VariableDeclaration[]
): VariableDeclarationList {
	return ts.factory.createVariableDeclarationList(
		[first, ...rest],
		ts.NodeFlags.Const,
	);
}

export function create_const_statement(
	first:VariableDeclaration,
	...rest:VariableDeclaration[]
): VariableStatement {
	return ts.factory.createVariableStatement(
		undefined,
		create_const_declaration_list(first, ...rest),
	);
}

export function variable(
	name: string,
	value: Expression,
	type: TypeNode|undefined = undefined,
) : VariableDeclaration {
	return ts.factory.createVariableDeclaration(
		name,
		undefined,
		type,
		value,
	);
}

export function not(
	expression:Expression,
): PrefixUnaryExpression & {operator: SyntaxKind.ExclamationToken} {
	return ts.factory.createLogicalNot(
		expression,
	) as PrefixUnaryExpression & {operator: SyntaxKind.ExclamationToken};
}
