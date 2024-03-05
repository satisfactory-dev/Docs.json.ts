import ts, {
	ClassDeclaration,
	HeritageClause,
	KeywordTypeSyntaxKind, MethodDeclaration,
	Modifier,
	PropertyDeclaration, TypeNode,
} from 'typescript';

declare type supported_property_modifiers = ('public'|'abstract')[];

declare type supported_class_modifiers = ('export'|'abstract')[];

declare type supported_method_modifiers = ('abstract'|'protected'|'public')[];

export function adjust_class_name(class_name:string): string
{
	if ('class' === class_name) {
		return 'Docs_class';
	}

	return class_name.replace(/[^A-Za-z_]/g, '_');
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
};

export type supported_modifiers = keyof typeof modifier_map;

export function create_modifier(modifier:keyof typeof modifier_map): ts.ModifierToken<ts.ModifierSyntaxKind> {
	return modifier_map[modifier]();
}

export function createProperty(
	name:string,
	type:KeywordTypeSyntaxKind,
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
		ts.factory.createIdentifier(name),
		undefined,
		ts.factory.createKeywordTypeNode(type),
		undefined
	);
}

export type create_class_options = {
	modifiers?:supported_class_modifiers,
	extends?:string,
};

export function createClass(
	name:string,
	members:(PropertyDeclaration|MethodDeclaration)[],
	options: create_class_options = {}
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
		undefined,
		resolved_heritage,
		members
	);
}

export const auto_constructor_property_types:{[key: string]: KeywordTypeSyntaxKind} = {
	'#/definitions/decimal-string--signed': ts.SyntaxKind.NumberKeyword,
	'#/definitions/decimal-string': ts.SyntaxKind.NumberKeyword,
	'#/definitions/integer-string--signed': ts.SyntaxKind.NumberKeyword,
	'#/definitions/integer-string': ts.SyntaxKind.NumberKeyword,
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

export function createClass__members__with_auto_constructor<T extends [string, ...string[]]>(
	data: {
		type: 'object',
		required: T,
		properties: {[key: string]: {
			'$ref': Exclude<keyof typeof auto_constructor_property_types, number>,
		}},
	},
	properties_modifiers:supported_property_modifiers,
) : (ts.PropertyDeclaration|ts.MethodDeclaration)[] {
	const members:(ts.PropertyDeclaration|ts.MethodDeclaration)[] = data.required.map((property) => {
		return createProperty(
			property,
			auto_constructor_property_types[data.properties[property]['$ref']],
			properties_modifiers
		);
	});

	members.push(createMethod(
		'constructor',
		Object.keys(data.properties).map((property) => {
			return [property, ts.SyntaxKind.StringKeyword];
		}),
		data.required.map((property): [string, ts.Identifier] => {
			return [property, ts.factory.createIdentifier(property)];
		}).map((entry:[string, ts.Identifier], index) => {
			const [property, identifier] = entry;

			const is_int = (
				data.properties[property]['$ref'] === '#/definitions/integer-string'
				|| data.properties[property]['$ref'] === '#/definitions/integer-string--signed'
			);

			const is_float = (
				data.properties[property]['$ref'] === '#/definitions/decimal-string'
				|| data.properties[property]['$ref'] === '#/definitions/decimal-string--signed'
			);

			const is_signed = data.properties[property]['$ref'].endsWith('--signed');

			const validate = create_callExpression__for_validation_function(
				`${
					is_int ? 'integer-string' : 'decimal-string'
				}${
					is_signed ? '--signed' : ''
				}`,
				index,
				[identifier]
			);

			return ts.factory.createExpressionStatement(ts.factory.createAssignment(
				ts.factory.createPropertyAccessExpression(ts.factory.createThis(), property),
				(!is_int && !is_float) ? validate : ts.factory.createCallExpression(
					ts.factory.createIdentifier(is_int ? 'parseInt' : 'parseFloat'),
					undefined,

					is_int ? [validate, ts.factory.createNumericLiteral(10)] : [validate]
				)
			));
		}),
		['public']
	));

	return members;
}

export function createParameter(
	name: string,
	type:KeywordTypeSyntaxKind|TypeNode,
) {
	return ts.factory.createParameterDeclaration(
		undefined,
		undefined,
		name,
		undefined,
		('object' === typeof(type)) ? type : ts.factory.createKeywordTypeNode(type)
	);
}

declare type createMethod_parameters_entry = [string, KeywordTypeSyntaxKind]|ts.ParameterDeclaration;

export function createMethod(
	name: string,
	parameters: createMethod_parameters_entry[],
	body: ts.Statement[],
	modifiers: supported_method_modifiers = []
) {
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
		undefined,
		parameters.map(entry => {
			if (!(entry instanceof Array)) {
				return entry;
			}

			const [name, type] = entry;

			return createParameter(name, type);
		}),
		undefined,
		ts.factory.createBlock(body)
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

const custom_pattern_errors:{[key: string]: () => ts.TemplateExpression} = {
	'decimal-string': must_be_a_decimal_like_string,
	'decimal-string--signed': must_be_a_decimal_like_string,
	'integer-string': must_be_an_integer_like_string,
	'integer-string--signed': must_be_an_integer_like_string,
}

export function flexibly_create_regex_validation_function(
	reference_name: string,
	regexp_argument: ts.Expression,
	parameters: ts.ParameterDeclaration[],
	error_template_spans: ts.TemplateSpan[]
) : ts.FunctionDeclaration {
	return ts.factory.createFunctionDeclaration(
		[create_modifier('export')],
		undefined,
		adjust_class_name(reference_name),
		undefined,
		parameters,
		ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
		ts.factory.createBlock([
			ts.factory.createIfStatement(
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
				ts.factory.createThrowStatement(ts.factory.createNewExpression(
					ts.factory.createIdentifier('Error'),
					undefined,
					[
						(reference_name in custom_pattern_errors)
							? custom_pattern_errors[reference_name]()
							: ts.factory.createTemplateExpression(
								ts.factory.createTemplateHead(''),
								error_template_spans
							)
					]
				))
			),
			ts.factory.createReturnStatement(ts.factory.createIdentifier('value')),
		])
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
		]
	);
}
