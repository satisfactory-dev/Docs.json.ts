import ts, {
	ClassDeclaration, Expression,
	HeritageClause,
	KeywordTypeSyntaxKind, MethodDeclaration,
	Modifier,
	PropertyDeclaration,
	TypeNode,
	TypeParameterDeclaration,
} from 'typescript';

declare type supported_property_modifiers = ('public'|'abstract'|'readonly')[];

declare type supported_class_modifiers = ('export'|'abstract')[];

declare type supported_method_modifiers = ('abstract'|'protected'|'public'|'static')[];

export function adjust_class_name(class_name:string): string
{
	if ('class' === class_name) {
		return 'Docs_class';
	}

	return class_name.replace(/[^A-Za-z_\d]/g, '_');
}

export function adjust_unrealengine_prefix(prefix:string): string
{
	return adjust_class_name(
		prefix.replace(/^(?:\/Script\/)/, '').replace(/\.Class$/, '')
	);
}

export function adjust_unrealengine_value(value:string): string
{
	return adjust_class_name(value.replace(/^(?:\/Script\/FactoryGame\.)/, ''));
}

export function adjust_enum_name(enum_name:string): string
{
	if ('boolean' === enum_name) {
		return 'Docs_boolean';
	}

	return adjust_class_name(enum_name);
}

export const modifier_map:{[key: string]: () => ts.ModifierToken<ts.ModifierSyntaxKind>} = {
	'abstract': () => {
		return ts.factory.createModifier(ts.SyntaxKind.AbstractKeyword);
	},
	'public': () => {
		return ts.factory.createModifier(ts.SyntaxKind.PublicKeyword);
	},
	'export': () => {
		return ts.factory.createModifier(ts.SyntaxKind.ExportKeyword);
	},
	'protected': () => {
		return ts.factory.createModifier(ts.SyntaxKind.ProtectedKeyword);
	},
	'const': () => {
		return ts.factory.createModifier(ts.SyntaxKind.ConstKeyword);
	},
	'readonly': () => {
		return ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword);
	},
	'static': () => {
		return ts.factory.createModifier(ts.SyntaxKind.StaticKeyword);
	},
	'declare': () => {
		return ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword);
	},
};

export type supported_modifiers = keyof typeof modifier_map;

export function create_modifier(modifier:keyof typeof modifier_map): ts.ModifierToken<ts.ModifierSyntaxKind> {
	return modifier_map[modifier]();
}

export function createProperty_with_specific_type(
	name:string,
	type:ts.TypeNode,
	modifiers:supported_property_modifiers = [],
): PropertyDeclaration {

	let resolved_modifiers:undefined|(Modifier[]) = undefined;

	if (modifiers.length) {
		resolved_modifiers = modifiers.reduce((was, is) => {
			if (!was.includes(is)) {
				was.push(is);
			}

			return was;
		}, [] as supported_property_modifiers).map(modifier => {
			return create_modifier(modifier);
		});
	}

	return ts.factory.createPropertyDeclaration(
		resolved_modifiers,
		property_name_or_computed(name),
		undefined,
		type,
		undefined
	);
}

export function createProperty(
	name:string,
	type:KeywordTypeSyntaxKind|TypeNode,
	modifiers:supported_property_modifiers = [],
): PropertyDeclaration {
	return createProperty_with_specific_type(
		name,
		'number' === typeof(type) ? ts.factory.createKeywordTypeNode(type) : type,
		modifiers
	);
}

export type create_class_options = {
	modifiers?:supported_class_modifiers,
	extends?:string,
};

export function createClass(
	name:string,
	members:(PropertyDeclaration|MethodDeclaration)[],
	options: create_class_options = {},
	type_parameters: [TypeParameterDeclaration, ...TypeParameterDeclaration[]]|undefined = undefined
) : ClassDeclaration {
	let resolved_modifiers:undefined|(Modifier[]) = undefined;
	let resolved_heritage:HeritageClause[] = [];

	const {modifiers, extends:class_extends} = options;

	if (modifiers && modifiers.length) {
		resolved_modifiers = modifiers.reduce((was, is) => {
			if (!was.includes(is)) {
				was.push(is);
			}

			return was;
		}, [] as supported_class_modifiers).map((modifier) => {
			if ('export' === modifier) {
				return ts.factory.createModifier(ts.SyntaxKind.ExportKeyword);
			}

			return ts.factory.createModifier(ts.SyntaxKind.AbstractKeyword);
		});
	}

	if (class_extends) {
		resolved_heritage.push(ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
			ts.factory.createExpressionWithTypeArguments(
				ts.factory.createIdentifier(adjust_class_name(class_extends)),
				undefined
			),
		]));
	}

	return ts.factory.createClassDeclaration(
		resolved_modifiers,
		ts.factory.createIdentifier(adjust_class_name(name)),
		type_parameters,
		resolved_heritage,
		members
	);
}

export const auto_constructor_property_types_from_generated_types = {
	'#/definitions/quaternion--semi-native' : adjust_class_name('quaternion--semi-native'),
	'#/definitions/xyz--semi-native': adjust_class_name('xyz--semi-native'),
	'#/definitions/decimal-string--signed': adjust_class_name('decimal-string--signed__type'),
	'#/definitions/decimal-string': adjust_class_name('decimal-string__type'),
	'#/definitions/integer-string--signed': adjust_class_name('integer-string--signed__type'),
	'#/definitions/integer-string': adjust_class_name('integer-string__type'),
	'#/definitions/mDisableSnapOn': adjust_class_name('mDisableSnapOn'),
	'#/definitions/mDockingRuleSet': adjust_class_name('mDockingRuleSet'),
	'#/definitions/EditorCurveData': adjust_class_name('EditorCurveData'),
	'#/definitions/mLightControlData': adjust_class_name('mLightControlData'),
	'#/definitions/InfinityExtrap': adjust_class_name('InfinityExtrap'),
};

export type auto_constructor_property_types_from_generated_types_properties<
	Properties extends string = string
> = {
	[key in Properties]: {
		'$ref': keyof typeof auto_constructor_property_types_from_generated_types;
	};
};

export type auto_constructor_property_types_from_generated_types_object<
	Required extends [string, ...string[]],
	Properties extends string = string,
	Type extends string = 'object',
> = {
	type: Type,
	required: Required,
	properties: auto_constructor_property_types_from_generated_types_properties<Properties>,
};

export function create_callExpression__for_validation_function(
	call_function: string,
	argument_index: number,
	identifier: [ts.Expression, ...ts.Expression[]],
): ts.CallExpression {
	return ts.factory.createCallExpression(
		ts.factory.createIdentifier(adjust_class_name(call_function)),
		undefined,
		[
			...identifier,
			ts.factory.createTemplateExpression(
				ts.factory.createTemplateHead('Argument '),
				[
					ts.factory.createTemplateSpan(
						ts.factory.createNumericLiteral(argument_index),
						ts.factory.createTemplateTail('')
					),
				]
			),
		]
	);
}

function is_supported_auto_constructor_property_type(
	prop:string
) : prop is Exclude<keyof typeof auto_constructor_property_types_from_generated_types, number> {
	return prop in auto_constructor_property_types_from_generated_types;
}

export function is_supported_properties_object(
	object: { [key: string]: { '$ref': string } }
) : object is auto_constructor_property_types_from_generated_types_properties<Exclude<keyof typeof object, number>> {
	for (const properties of Object.values(object)) {
		if (!is_supported_auto_constructor_property_type(properties['$ref'])) {
			return false;
		}
	}

	return true;
}

export function createClass__members__with_auto_constructor<
	T extends [string, ...string[]],
	Properties extends string = string
>(
	data: auto_constructor_property_types_from_generated_types_object<T, Properties>,
	properties_modifiers:supported_property_modifiers,
) : (ts.PropertyDeclaration|ts.MethodDeclaration)[] {
	const members:(ts.PropertyDeclaration|ts.MethodDeclaration)[] = [];

	const property_types = Object.fromEntries((Object.entries(data.properties) as [string, {'$ref': string}][]).map(
		(entry) : [
			string, // property name
			[
				() => ts.KeywordTypeSyntaxKind|ts.TypeNode, // property type
				() => ts.KeywordTypeSyntaxKind|ts.TypeNode, // constructor arg type
			],
		] => {
			return [
				entry[0],
				[
					() => {
						const [property_name, {'$ref': property_data_ref}] = entry;

						if ( !is_supported_auto_constructor_property_type(property_data_ref)) {
							console.error(property_data_ref);

							throw new Error('Unsupported property type!');
						}

						let type:ts.TypeNode = ts.factory.createTypeReferenceNode(
							adjust_class_name(auto_constructor_property_types_from_generated_types[
								property_data_ref
							])
						);

						if (!data.required.includes(property_name)) {
							type = ts.factory.createUnionTypeNode([
								type,
								create_type('undefined'),
							]);
						}

						return type;
					},
					() => {
						const [property_name, {'$ref': property_data_ref}] = entry;

						if ( !is_supported_auto_constructor_property_type(property_data_ref)) {
							console.error(property_data_ref);

							throw new Error('Unsupported property type!');
						}

						let type:ts.TypeNode = ts.factory.createTypeReferenceNode(
							adjust_class_name(auto_constructor_property_types_from_generated_types[property_data_ref])
						);

						if (!data.required.includes(property_name)) {
							type = ts.factory.createUnionTypeNode([
								type,
								create_type('undefined'),
							]);
						}

						return type;
					},
				],
			];
		}
	));

	members.push(...Object.entries(property_types).map((entry) => {
		const [property_name, [generator]] = entry;

		return createProperty(property_name, generator(), properties_modifiers);
	}));

	members.push(create_method_without_type_parameters(
		'constructor',
		Object.entries(property_types).map((entry) => {
			const [property_name, [, generator]] = entry;

			return [property_name, generator()];
		}),
		(Object.entries(data.properties) as [string, {'$ref': string}][]).map((entry, index) => {
			const [property_name, property] = entry;

			if (property['$ref'] in auto_constructor_property_types_from_generated_types) {
				return create_this_assignment(property_name, property_name);
			}

			const is_int = (
				property['$ref'] === '#/definitions/integer-string'
				|| property['$ref'] === '#/definitions/integer-string--signed'
			);

			const is_signed = property['$ref'].endsWith('--signed');

			const validate = create_callExpression__for_validation_function(
				`${
					is_int ? 'integer-string' : 'decimal-string'
				}${
					is_signed ? '--signed' : ''
				}`,
				index,
				[ts.factory.createIdentifier(property_name)]
			);

			return create_this_assignment(
				property_name,
				validate
			);
		}),
		['public']
	));

	return members;
}

export function createParameter(
	name: string|ts.ObjectBindingPattern,
	type:KeywordTypeSyntaxKind|TypeNode,
	initializer:ts.Expression|undefined = undefined
) {
	return ts.factory.createParameterDeclaration(
		undefined,
		undefined,
		name,
		undefined,
		('object' === typeof(type)) ? type : ts.factory.createKeywordTypeNode(type),
		initializer
	);
}

declare type createMethod_parameters_entry = [string, KeywordTypeSyntaxKind|ts.TypeNode]|ts.ParameterDeclaration;

function create_method(
	name: string,
	type_parameters: ts.TypeParameterDeclaration[],
	parameters: createMethod_parameters_entry[],
	body: ts.Statement[],
	modifiers: supported_method_modifiers = [],
	return_type:ts.TypeNode|undefined = undefined,
)  {
	const resolved_modifiers = modifiers.reduce(
		(was, is) => {
			if (!was.includes(is)) {
				was.push(is);
			}

			return was;
		},
		[] as supported_method_modifiers
	).map(modifier => {
		return create_modifier(modifier);
	});

	return ts.factory.createMethodDeclaration(
		resolved_modifiers,
		undefined,
		name,
		undefined,
		type_parameters.length ? type_parameters : undefined,
		parameters.map(entry => {
			if (!(entry instanceof Array)) {
				return entry;
			}

			const [name, type] = entry;

			return createParameter(name, type);
		}),
		return_type,
		ts.factory.createBlock(body)
	);
}

export function create_method_with_type_parameters(
	name: string,
	type_parameters: [ts.TypeParameterDeclaration, ...ts.TypeParameterDeclaration[]],
	parameters: createMethod_parameters_entry[],
	body: ts.Statement[],
	modifiers: supported_method_modifiers = [],
	return_type:ts.TypeNode|undefined = undefined,
) {
	return create_method(
		name,
		type_parameters,
		parameters,
		body,
		modifiers,
		return_type
	);
}

export function create_method_without_type_parameters(
	name: string,
	parameters: createMethod_parameters_entry[],
	body: ts.Statement[],
	modifiers: supported_method_modifiers = [],
	return_type:ts.TypeNode|undefined = undefined,
) {
	return create_method(
		name,
		[],
		parameters,
		body,
		modifiers,
		return_type
	);
}

export function create_string_starts_with(string_starts_with:string): ts.TypeReferenceNode
{
	return ts.factory.createTypeReferenceNode('string_starts_with', [
		ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(string_starts_with)),
	]);
}

function must_be_a_decimal_like_string() {
	return ts.factory.createTemplateExpression(
		ts.factory.createTemplateHead(''),
		[
			ts.factory.createTemplateSpan(
				ts.factory.createIdentifier('reference_argument'),
				ts.factory.createTemplateTail(' must be a decimal-like string!')
			)
		]
	);
}

function must_be_an_integer_like_string() {
	return ts.factory.createTemplateExpression(
		ts.factory.createTemplateHead(''),
		[
			ts.factory.createTemplateSpan(
				ts.factory.createIdentifier('reference_argument'),
				ts.factory.createTemplateTail(' must be an integer-like string!')
			)
		]
	);
}

export function create_function(
	reference_name: string,
	parameters: ts.ParameterDeclaration[],
	return_type: ts.TypeNode,
	body: [ts.Statement, ...ts.Statement[]],
	type_parameters: [ts.TypeParameterDeclaration, ...ts.TypeParameterDeclaration[]]|undefined = undefined
) : ts.FunctionDeclaration {
	return ts.factory.createFunctionDeclaration(
		[create_modifier('export')],
		undefined,
		adjust_class_name(reference_name),
		type_parameters,
		parameters,
		return_type,
		ts.factory.createBlock(body)
	)
}

const custom_pattern_errors:{[key: string]: () => ts.TemplateExpression} = {
	'decimal-string': must_be_a_decimal_like_string,
	'decimal-string--signed': must_be_a_decimal_like_string,
	'integer-string': must_be_an_integer_like_string,
	'integer-string--signed': must_be_an_integer_like_string,
}

export function create_throw(
	throw_this:string,
	throw_arguments:[ts.Expression, ...ts.Expression[]],
	type_parameters: [ts.TypeNode, ...ts.TypeNode[]]|undefined = undefined
) {
	return ts.factory.createThrowStatement(ts.factory.createNewExpression(
		ts.factory.createIdentifier(throw_this),
		type_parameters,
		throw_arguments
	));
}

export function create_throw_if(
	throw_this:string,
	throw_if:ts.Expression,
	throw_arguments:[ts.Expression, ...ts.Expression[]],
	type_parameters: [ts.TypeNode, ...ts.TypeNode[]]|undefined = undefined
) {
	return ts.factory.createIfStatement(throw_if, create_throw(throw_this, throw_arguments, type_parameters));
}

export function create_template_span(span_arguments:[(string|Expression), ...(string|Expression)[]]) : ts.TemplateExpression | ts.StringLiteral {
	const stack = span_arguments.reduce(
		(was, is) => {
			if ('string' === typeof is) {
				if (1 === was.length) {
					was[0] += is;
				} else {
					(was[was.length - 1] as [Expression, string])[1] += is;
				}
			} else {
				was.push([is, '']);
			}

			return was;
		},
		[''] as [string, ...[Expression, string][]]
	);

	if (1 === stack.length) {
		return ts.factory.createStringLiteral(stack[0]);
	}

	const head = ts.factory.createTemplateHead(stack.shift() as string);

	return ts.factory.createTemplateExpression(head, (stack as [Expression, string][]).map((entry, index) => {
		const [expression, chunk] = entry;

		return ts.factory.createTemplateSpan(
			expression,
			index === stack.length - 1
				? ts.factory.createTemplateTail(chunk)
				: ts.factory.createTemplateMiddle(chunk)
		);
	}));
}

export function create_basic_reference_argument_template_span(
	head:string,
	identifer:string,
	tail:string|undefined = undefined
) {
	if (undefined === tail) {
		tail = identifer;
		identifer = head;
		head = '';
	}

	return ts.factory.createTemplateExpression(
		ts.factory.createTemplateHead(head),
		[
			ts.factory.createTemplateSpan(
				ts.factory.createIdentifier(identifer),
				ts.factory.createTemplateTail(tail)
			),
		]
	);
}

export function very_flexibly_create_regex_validation_function(
	reference_name: string,
	regexp_argument: ts.Expression,
	parameters: ts.ParameterDeclaration[],
	return_type: () => ts.TypeNode,
	error_template_spans: ts.TemplateSpan[],
	return_statement:ts.ReturnStatement|undefined = undefined
) : ts.FunctionDeclaration {
	return create_function(
		reference_name,
		parameters,
		return_type(),
		[
			create_throw_if(
				'Error',
				ts.factory.createLogicalNot(ts.factory.createCallExpression(
					ts.factory.createPropertyAccessExpression(
						ts.factory.createParenthesizedExpression(
							ts.factory.createNewExpression(
								ts.factory.createIdentifier('RegExp'),
								undefined,
								[
									regexp_argument,
								]
							)
						),
						'test'
					),
					undefined,
					[ts.factory.createIdentifier('value')]
				)),
				[
					(reference_name in custom_pattern_errors)
						? custom_pattern_errors[reference_name]()
						: ts.factory.createTemplateExpression(
							ts.factory.createTemplateHead(''),
							error_template_spans
						)
				]
			),
			return_statement ? return_statement : ts.factory.createReturnStatement(
				ts.factory.createAsExpression(
					ts.factory.createIdentifier('value'),
					return_type()
				)
			),
		]
	)
}

export function flexibly_create_regex_validation_function(
	reference_name: string,
	regexp_argument: ts.Expression,
	parameters: ts.ParameterDeclaration[],
	error_template_spans: ts.TemplateSpan[],
	pattern_argument:(() => ts.TypeNode)|undefined = undefined
) : ts.FunctionDeclaration {
	return very_flexibly_create_regex_validation_function(
		reference_name,
		regexp_argument,
		parameters,
		() => ts.factory.createTypeReferenceNode(
			'StringPassedRegExp',
			pattern_argument ? [pattern_argument()] : [create_type('string')]
		),
		error_template_spans
	);
}

export function create_regex_validation_function(
	data:{type: string, pattern: string},
	reference_name: string
) : ts.FunctionDeclaration {
	return flexibly_create_regex_validation_function(
		reference_name,
		ts.factory.createStringLiteral(data.pattern),
		[
			createParameter('value', ts.SyntaxKind.StringKeyword),
			createParameter('reference_argument', ts.SyntaxKind.StringKeyword),
		],
		[
			ts.factory.createTemplateSpan(
				ts.factory.createIdentifier('reference_argument'),
				ts.factory.createTemplateTail(` must pass the regex ${data.pattern}`)
			)
		],
		() => ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(data.pattern))
	);
}

const type_map = {
	any: ts.SyntaxKind.AnyKeyword,
	boolean: ts.SyntaxKind.BooleanKeyword,
	number: ts.SyntaxKind.NumberKeyword,
	object: ts.SyntaxKind.ObjectKeyword,
	string: ts.SyntaxKind.StringKeyword,
	undefined: ts.SyntaxKind.UndefinedKeyword,
	never: ts.SyntaxKind.NeverKeyword,
};

export function create_type(type:keyof typeof type_map): ts.KeywordTypeNode {
	return ts.factory.createKeywordTypeNode(type_map[type] as ts.KeywordTypeSyntaxKind);
}

export function create_object_type<
	T extends {[key: string]: ts.TypeNode} = {[key: string]: ts.TypeNode}
>(properties:T, required:(keyof T)[]) : ts.TypeLiteralNode {
	return ts.factory.createTypeLiteralNode(Object.entries(properties).map((entry) => {
		const [property, type] = entry;

		return ts.factory.createPropertySignature(
			undefined,
			property_name_or_computed(property),
			required.includes(property) ? undefined : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
			type
		);
	}));
}

export function create_object_type_alias<
	T extends {[key: string]: ts.TypeNode} = {[key: string]: ts.TypeNode}
>(
	reference_name:string,
	modifiers: [keyof typeof modifier_map, ...(keyof typeof modifier_map)[]],
	properties:T,
	required:(keyof T)[]
) : ts.TypeAliasDeclaration {
	return ts.factory.createTypeAliasDeclaration(
		modifiers.map(create_modifier),
		reference_name,
		undefined,
		create_object_type<T>(properties, required)
	);
}

export function needs_element_access(property:string) : boolean
{
	return /[?]/.test(property);
}

export function computed_property_name_or_undefined(property:string) : ts.ComputedPropertyName|undefined
{
	return needs_element_access(property)
		? ts.factory.createComputedPropertyName(ts.factory.createStringLiteral(property))
		: undefined;
}

export function property_name_or_computed<T extends string = string>(property:T) : T|ts.ComputedPropertyName {
	return computed_property_name_or_undefined(property) || property;
}

export function create_minimum_size_typed_array_of_single_type(
	repeat: number,
	generate: () => ts.TypeNode
) : ts.TupleTypeNode {
	if (repeat < 1) {
		throw new Error(`repeat must be greater than or equal to 1, ${repeat} given.`);
	} else if (repeat !== (repeat|0)) {
		throw new Error(`repeat must be an integer, ${repeat} given.`);
	}

	const types = [generate()];

	for (let iteration = 1; iteration < repeat; ++iteration) {
		types.push(generate());
	}

	return ts.factory.createTupleTypeNode([
		...types,
		ts.factory.createRestTypeNode(ts.factory.createArrayTypeNode(generate())),
	]);
}

export function create_this_assignment(property:string, identifier:string|ts.Expression): ts.ExpressionStatement {
	return ts.factory.createExpressionStatement(ts.factory.createAssignment(
		needs_element_access(property) ? ts.factory.createElementAccessExpression(
				ts.factory.createThis(),
			ts.factory.createStringLiteral(property)
		) :
		ts.factory.createPropertyAccessExpression(
			ts.factory.createThis(),
			property
		),
		('string' === typeof(identifier)) ? ts.factory.createIdentifier(identifier) : identifier
	));
}

export function create_minimum_size_typed_array_of_type_references(
	reference_name: string,
	type_parameters_generator: () => [ts.TypeNode, ...ts.TypeNode[]],
	repeat: number = 1
) {
	if (repeat < 1) {
		throw new Error(`repeat must be greater than or equal to 1, ${repeat} given.`);
	} else if (repeat !== (repeat|0)) {
		throw new Error(`repeat must be an integer, ${repeat} given.`);
	}

	function generate() : ts.TypeReferenceNode {
		return ts.factory.createTypeReferenceNode(reference_name, type_parameters_generator());
	}

	const types:(ts.TypeReferenceNode|ts.RestTypeNode)[] = [generate()];

	for (let iteration = 1; iteration < repeat; ++iteration) {
		types.push(generate());
	}

	types.push(ts.factory.createRestTypeNode(ts.factory.createArrayTypeNode(generate())));

	return ts.factory.createTupleTypeNode(types);
}

export function create_index_access(identifier:string, index:number) {
	return ts.factory.createElementAccessExpression(ts.factory.createIdentifier(identifier),index);
}

export function create_literal_node_from_value(value:string) : ts.LiteralTypeNode
{
	return ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(value));
}

export function create_union(a:ts.TypeNode, b:ts.TypeNode, ...rest:ts.TypeNode[]) : ts.UnionTypeNode
{
	return ts.factory.createUnionTypeNode([a, b, ...rest]);
}

declare type lazy_union_item = string|({type: string}&({pattern: string}|{const: string}));

function map_lazy_union_item_to_type(item:lazy_union_item) : ts.TypeNode
{
	if ('object' === typeof item) {
		if ('const' in item) {
			return create_literal_node_from_value(item.const);
		}

		return ts.factory.createTypeReferenceNode('StringPassedRegExp', [
			create_literal_node_from_value(item.pattern),
		]);
	}

	return create_literal_node_from_value(item);
}
export function create_lazy_union(a:lazy_union_item, b:lazy_union_item, ...rest:lazy_union_item[]) : ts.UnionTypeNode
{

	return create_union(map_lazy_union_item_to_type(a), map_lazy_union_item_to_type(b), ...rest.map(map_lazy_union_item_to_type));
}

export function possibly_create_lazy_union(items:lazy_union_item[]) : ts.TypeNode
{
	if (items.length < 1) {
		throw new Error('Cannot create lazy unions from empty arrays!');
	} else if (1 === items.length) {
		return map_lazy_union_item_to_type(items[0]);
	}

	const [a, b, ...rest] = items;

	return create_lazy_union(a, b, ...rest);
}

export function create_UnrealEngineString_reference_type(
	type_arguments:
		| {UnrealEngineString_prefix: string, pattern:string}
		| {UnrealEngineString_prefix_pattern: string, pattern:string}
		| undefined
	= undefined
) : ts.TypeReferenceNode {
	return ts.factory.createTypeReferenceNode(
		'UnrealEngineString',
		!type_arguments ? undefined : [
			(
				'UnrealEngineString_prefix' in type_arguments
					? ts.factory.createTypeReferenceNode('string_starts_with', [
						create_literal_node_from_value(type_arguments.UnrealEngineString_prefix),
					])
					: ts.factory.createTypeReferenceNode('StringPassedRegExp', [
						create_literal_node_from_value(type_arguments.UnrealEngineString_prefix_pattern),
					])
			),
			ts.factory.createTypeReferenceNode('StringPassedRegExp', [
				create_literal_node_from_value(type_arguments.pattern),
			])
		]
	);
}
