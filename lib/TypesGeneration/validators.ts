import ts from "typescript";
import {ImportTracker, TypesGenerationFromSchema} from "../TypesGeneration";
import {
	adjust_class_name, create_basic_reference_argument_template_span,
	create_function,
	create_modifier,
	create_regex_validation_function, create_this_assignment,
	create_throw, create_throw_if, create_type,
	createClass,
	createClass__members__with_auto_constructor,
	createMethod,
	createParameter,
	flexibly_create_regex_validation_function
} from "../TsFactoryWrapper";
import {TypeNodeGeneration, TypeNodeGenerationResult} from "../TypeNodeGeneration";
import {UnrealEngineString_regex} from "../DocsValidation";

export const target_files = {
	'decimal-string': 'utils/validators.ts',
	'decimal-string--signed': 'utils/validators.ts',
	'integer-string': 'utils/validators.ts',
	'integer-string--signed': 'utils/validators.ts',
};

ImportTracker.set_imports('utils/validators.ts', [{
	from: '../../../lib/schema-exports',
	import_these: [
		'string_to_array',
		'string_to_object',
	],
}]);

declare type schema_type = {
	type: 'string',
	pattern: 'string',
};

const schema = {
	type: 'object',
	required: [
		'type',
		'pattern',
	],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		pattern: {type: 'string', minLength: 1},
	},
};

declare type ref_type = {
	'$ref':
		| '#/definitions/decimal-string'
		| '#/definitions/decimal-string--signed'
		| '#/definitions/integer-string'
		| '#/definitions/integer-string--signed'
};

const ref_schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		'$ref': {
			oneOf: Object.keys(target_files).map((ref) => {
				return {type: 'string', const: `#/definitions/${ref}`};
			}),
		},
	},
};

export const generators = [
	new TypesGenerationFromSchema<
		schema_type
	>(
		schema,
		(data, reference_name) : ts.FunctionDeclaration => {
			return create_regex_validation_function(data, reference_name);
		}
	),
];

export const custom_generators = [
	/**
	 * will generate a type adapted from https://stackoverflow.com/a/70387184/23528553
	 *
	 * export type string_starts_with<prefix extends string> = keyof {
	 * 	[pseudo_key in keyof {
	 * 		[key: string]: any;
	 * 	} as pseudo_key extends string ? `${prefix}${pseudo_key}` : never]: string;
	 * };
	 *
	 * const foo:string_starts_with<'foo'> = 'bar'; // invalid
	 */
	() : {file: string, node: ts.Node}[] => {
		const nodes:{file: string, node:ts.Node}[] = [];

		nodes.push({
			file: 'utils/validators.ts',
			node: ts.factory.createTypeAliasDeclaration(
				[
					create_modifier('export'),
				],
				ts.factory.createIdentifier('string_starts_with'),
				[
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'prefix',
						create_type('string')
					)
				],
				ts.factory.createTypeOperatorNode(
					ts.SyntaxKind.KeyOfKeyword,
					ts.factory.createMappedTypeNode(
						undefined,
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'pseudo_key',
							ts.factory.createTypeOperatorNode(
								ts.SyntaxKind.KeyOfKeyword,
								ts.factory.createTypeLiteralNode([
									ts.factory.createIndexSignature(
										undefined,
										[ts.factory.createParameterDeclaration(
											undefined,
											undefined,
											'key',
											undefined,
											create_type('string')
										)],
										create_type('any')
									),
								])
							)
						),
						ts.factory.createConditionalTypeNode(
							ts.factory.createTypeReferenceNode('pseudo_key'),
							create_type('string'),
							ts.factory.createTemplateLiteralType(
								ts.factory.createTemplateHead(''),
								[
									ts.factory.createTemplateLiteralTypeSpan(
										ts.factory.createTypeReferenceNode('prefix'),
										ts.factory.createTemplateMiddle('')
									),
									ts.factory.createTemplateLiteralTypeSpan(
										ts.factory.createTypeReferenceNode('pseudo_key'),
										ts.factory.createTemplateTail('')
									),
								]
							),
							create_type('never')
						),
						undefined,
						create_type('string'),
						undefined
					)
				)
			)
		});

		nodes.push({
			file: 'utils/validators.ts',
			node: flexibly_create_regex_validation_function(
				'regexp_argument',
				ts.factory.createIdentifier('pattern'),

				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter('pattern', ts.SyntaxKind.StringKeyword),
					createParameter('reference_argument', ts.SyntaxKind.StringKeyword),
				],
				[
					ts.factory.createTemplateSpan(
						ts.factory.createIdentifier('reference_argument'),
						ts.factory.createTemplateMiddle(' must pass the regex ')
					),
					ts.factory.createTemplateSpan(
						ts.factory.createIdentifier('pattern'),
						ts.factory.createTemplateTail('')
					),
				]
			),
		});

		nodes.push({
			file: 'utils/validators.ts',
			node: createClass('UnrealEngineString', [
				ts.factory.createPropertyDeclaration(
					[create_modifier('readonly')],
					'prefix',
					undefined,
					create_type('string'),
					undefined
				),
				ts.factory.createPropertyDeclaration(
					[create_modifier('readonly')],
					'value',
					undefined,
					create_type('string'),
					undefined
				),
				createMethod(
					'constructor',
					[
						createParameter('prefix', create_type('string')),
						createParameter('value', create_type('string')),
					],
					[
						create_this_assignment('prefix', 'prefix'),
						create_this_assignment('value', 'value'),
					],
					['protected']
				),
				createMethod(
					'fromString',
					[
						createParameter('value', create_type('string')),
					],
					[
						ts.factory.createVariableStatement(
							undefined,
							ts.factory.createVariableDeclarationList(
								[
									ts.factory.createVariableDeclaration(
										'result',
										undefined,
										undefined,
										ts.factory.createCallExpression(
											ts.factory.createPropertyAccessExpression(
												ts.factory.createParenthesizedExpression(
													ts.factory.createNewExpression(
														ts.factory.createIdentifier('RegExp'),
														undefined,
														[
															ts.factory.createRegularExpressionLiteral(
																UnrealEngineString_regex.toString()
															),
														]
													)
												),
												'exec'
											),
											undefined,
											[ts.factory.createIdentifier('value')]
										)
									),
								],
								ts.NodeFlags.Const
							),
						),
						ts.factory.createIfStatement(
							ts.factory.createLogicalNot(ts.factory.createIdentifier('result')),
							create_throw('Error', [
								ts.factory.createTemplateExpression(
									ts.factory.createTemplateHead('UnrealEngineString value expected, '),
									[
										ts.factory.createTemplateSpan(
											ts.factory.createIdentifier('value'),
											ts.factory.createTemplateTail(' found')
										)
									]
								)
							])
						),
						ts.factory.createReturnStatement(ts.factory.createNewExpression(
							ts.factory.createIdentifier('UnrealEngineString'),
							undefined,
							[
								ts.factory.createElementAccessExpression(
									ts.factory.createIdentifier('result'),
									1,
								),
								ts.factory.createElementAccessExpression(
									ts.factory.createIdentifier('result'),
									2,
								),
							]
						)),
					]
				)
			])
		});

		nodes.push({
			file: 'utils/validators.ts',
			node: create_function(
				'array_string',
				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter('reference_argument', ts.SyntaxKind.StringKeyword),
				],
				ts.factory.createTypeReferenceNode('T'),
				[
					ts.factory.createVariableStatement(
						undefined,
						ts.factory.createVariableDeclarationList(
							[
								ts.factory.createVariableDeclaration(
									'result',
									undefined,
									undefined,
									ts.factory.createCallExpression(
										ts.factory.createIdentifier('string_to_array'),
										[
											ts.factory.createTypeReferenceNode('T'),
										],
										[ts.factory.createIdentifier('value')]
									)
								),
							],
							ts.NodeFlags.Const
						),
					),
					create_throw_if(
						'Error',
						ts.factory.createLogicalNot(ts.factory.createIdentifier('result')),
						[
							create_basic_reference_argument_template_span(
								'reference_argument',
								' must be a Docs.json array string!'
							),
						]
					),
					ts.factory.createReturnStatement(ts.factory.createIdentifier('result')),
				],
				[
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'T',
						ts.factory.createArrayTypeNode(create_type('any'))
					)
				]
			)
		});

		nodes.push({
			file: 'utils/validators.ts',
			node: create_function(
				'object_string',
				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter('reference_argument', ts.SyntaxKind.StringKeyword),
				],
				ts.factory.createTypeReferenceNode('T'),
				[
					ts.factory.createVariableStatement(
						undefined,
						ts.factory.createVariableDeclarationList(
							[
								ts.factory.createVariableDeclaration(
									'result',
									undefined,
									undefined,
									ts.factory.createCallExpression(
										ts.factory.createIdentifier('string_to_object'),
										[
											ts.factory.createTypeReferenceNode('T'),
										],
										[ts.factory.createIdentifier('value')]
									)
								),
							],
							ts.NodeFlags.Const
						),
					),
					create_throw_if(
						'Error',
						ts.factory.createLogicalNot(ts.factory.createIdentifier('result')),
						[
							create_basic_reference_argument_template_span(
								'reference_argument',
								' must be a Docs.json object string!'
							),
						]
					),
					ts.factory.createReturnStatement(ts.factory.createIdentifier('result')),
				],
				[
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'T',
						create_type('object')
					)
				]
			)
		});

		nodes.push({
			file: 'utils/validators.ts',
			node: create_function(
				'string_has_minLength',
				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter('min_length', ts.SyntaxKind.NumberKeyword),
					createParameter('reference_argument', ts.SyntaxKind.StringKeyword),
				],
				create_type('string'),
				[
					create_throw_if(
						'Error',
						ts.factory.createLessThan(
							ts.factory.createPropertyAccessExpression(
								ts.factory.createIdentifier('value'),
								'length'
							),
							ts.factory.createIdentifier('min_length')
						),
						[
							ts.factory.createTemplateExpression(
								ts.factory.createTemplateHead(''),
								[
									ts.factory.createTemplateSpan(
										ts.factory.createIdentifier('reference_argument'),
										ts.factory.createTemplateMiddle(' expected to be of length ')
									),
									ts.factory.createTemplateSpan(
										ts.factory.createIdentifier('min_length'),
										ts.factory.createTemplateMiddle(', '),
									),
									ts.factory.createTemplateSpan(
										ts.factory.createPropertyAccessExpression(
											ts.factory.createIdentifier('value'),
											'length'
										),
										ts.factory.createTemplateTail(' found'),
									),
								]
							)
						]
					),
					ts.factory.createReturnStatement(ts.factory.createIdentifier('value'))
				]
			),
		})

		return nodes;
	},
];

export const type_node_generators = [
	new TypeNodeGeneration<ref_type>(ref_schema, (property) => {
		const ref_key = property['$ref'].substring(14) as keyof typeof target_files;

		return new TypeNodeGenerationResult(
			() => create_type('number'),
			{
				[target_files[ref_key]]: [adjust_class_name(ref_key)],
			}
		);
	}),
	new TypeNodeGeneration<{
		type: string,
		pattern: string,
	}>(
		{
			type: 'object',
			required: ['type', 'pattern'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				pattern: {type: 'string', minLength: 2},
			},
		},
		() => {
			return new TypeNodeGenerationResult(
				() => create_type('string'),
			);
		},
	),
	new TypeNodeGeneration<{
		type: 'string',
		minLength: 1,
		UnrealEngineString: {
			type: 'string',
			UnrealEngineString_prefix: string,
			pattern: string,
		}
	}>(
		{
			type: 'object',
			required: ['type', 'UnrealEngineString'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', const: 1},
				UnrealEngineString: {
					type: 'object',
					required: ['type', 'UnrealEngineString_prefix', 'pattern'],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'string'},
						UnrealEngineString_prefix: {type: 'string', minLength: 1},
						pattern: {type: 'string', minLength: 2},
					}
				},
			}
		},
		() => {
			return new TypeNodeGenerationResult(
				() => ts.factory.createTypeReferenceNode('UnrealEngineString'),
				{
					'utils/validators': [
						'UnrealEngineString',
					],
				},
			);
		}
	),
	new TypeNodeGeneration<{
		type: 'string',
		string_starts_with: string,
	}>(
		{
			type: 'object',
			required: ['type', 'string_starts_with'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				string_starts_with: {type: 'string', minLength: 1},
			}
		},
		(property) => {
			return new TypeNodeGenerationResult(
				() => {
					return ts.factory.createTypeReferenceNode('string_starts_with', [
						ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(property.string_starts_with)),
					]);
				},
				{
					'utils/validators': [
						'string_starts_with',
					],
				}
			);
		}
	),
	new TypeNodeGeneration<{
		type: 'string',
		minLength: number,
	}>(
		{
			type: 'object',
			required: ['type', 'minLength'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', minimum: 1},
			}
		},
		(property) => {
			return new TypeNodeGenerationResult(
				() => {
					return create_type('string');
				},
				{
					'utils/validators': [
						'string_has_minLength',
					],
				}
			);
		}
	),
	new TypeNodeGeneration<{
		type: 'string',
		minLength: number,
	}>(
		{
			type: 'object',
			required: ['type'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
			}
		},
		(property) => {
			return new TypeNodeGenerationResult(() => {
				return create_type('string');
			});
		}
	),
];
