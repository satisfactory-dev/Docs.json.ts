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
	return class_name.replace(/[^A-Za-z_]/g, '_');
}

export function adjust_enum_name(enum_name:string): string
{
	if ('boolean' === enum_name) {
		return 'Docs_boolean';
	}

	return adjust_class_name(enum_name);
}

const modifier_map:{[key: string]: () => ts.ModifierToken<ts.ModifierSyntaxKind>} = {
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

export function createClass(
	name:string,
	members:(PropertyDeclaration|MethodDeclaration)[],
	options: {
		modifiers?:supported_class_modifiers,
		extends?:string,
	} = {}
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

			const validate = ts.factory.createCallExpression(
				ts.factory.createIdentifier(
					adjust_class_name(`${
						is_int ? 'integer-string' : 'decimal-string'
					}${
						is_signed ? '--signed' : ''
					}`)
				),
				undefined,
				[
					identifier,
					ts.factory.createTemplateExpression(
						ts.factory.createTemplateHead('Argument '),
						[
							ts.factory.createTemplateSpan(
								ts.factory.createNumericLiteral(index),
								ts.factory.createTemplateTail('')
							),
						]
					),
				]
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

export function createMethod(
	name: string,
	parameters: [string, KeywordTypeSyntaxKind][],
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
