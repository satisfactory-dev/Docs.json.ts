import ts from 'typescript';
import {
	ImportTracker,
	TypesGenerationFromSchema,
	TypesGenerationMatchesReferenceName,
} from '../TypesGeneration';
import {
	adjust_class_name,
	create_basic_reference_argument_template_span,
	create_function,
	create_modifier,
	create_this_assignment,
	create_throw_if,
	create_type,
	createClass,
	create_method_without_type_parameters,
	createParameter,
	flexibly_create_regex_validation_function,
	create_method_with_type_parameters,
	create_template_span,
	create_index_access,
	create_object_type,
	very_flexibly_create_regex_validation_function,
	create_UnrealEngineString_reference_type,
	create_conditional_UnrealEngineString_type_reference,
	conditional_UnrealEngineString_type_arguments,
	create_union,
	create_literal_node_from_value,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {UnrealEngineString_regex} from '../DocsValidation';

export const target_files = {
	'decimal-string': 'utils/validators.ts',
	'decimal-string--signed': 'utils/validators.ts',
	'integer-string': 'utils/validators.ts',
	'integer-string--signed': 'utils/validators.ts',
};

const supported_meta_types: string[] = [];

ImportTracker.set_imports('utils/validators.ts', [
	{
		from: '../../../lib/schema-exports',
		import_these: ['string_to_array', 'string_to_object'],
	},
]);

declare type schema_type = {
	type: 'string';
	pattern: 'string';
};

const schema = {
	type: 'object',
	required: ['type', 'pattern'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		pattern: {type: 'string', minLength: 1},
	},
};

declare type ref_type = {
	$ref:
		| '#/definitions/decimal-string'
		| '#/definitions/decimal-string--signed'
		| '#/definitions/integer-string'
		| '#/definitions/integer-string--signed';
};

const ref_schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {
			oneOf: [...Object.keys(target_files), ...supported_meta_types].map(
				(ref) => {
					return {type: 'string', const: `#/definitions/${ref}`};
				}
			),
		},
	},
};

export const generators = [
	new TypesGenerationFromSchema<schema_type>(
		schema,
		(data, reference_name): ts.FunctionDeclaration => {
			const value = ts.factory.createIdentifier('value');
			const is_int = reference_name.startsWith('integer-');

			return very_flexibly_create_regex_validation_function(
				reference_name,
				ts.factory.createStringLiteral(data.pattern),
				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter(
						'reference_argument',
						ts.SyntaxKind.StringKeyword
					),
				],
				() =>
					ts.factory.createTypeReferenceNode(
						adjust_class_name(`${reference_name}__type`)
					),
				[
					ts.factory.createTemplateSpan(
						ts.factory.createIdentifier('reference_argument'),
						ts.factory.createTemplateTail(
							` must pass the regex ${data.pattern}`
						)
					),
				],
				ts.factory.createReturnStatement(
					ts.factory.createAsExpression(
						ts.factory.createCallExpression(
							ts.factory.createIdentifier(
								is_int ? 'parseInt' : 'parseFloat'
							),
							undefined,

							is_int
								? [value, ts.factory.createNumericLiteral(10)]
								: [value]
						),
						ts.factory.createTypeReferenceNode(
							adjust_class_name(`${reference_name}__type`)
						)
					)
				)
			);
		}
	),
	new TypesGenerationMatchesReferenceName<
		{type: 'string'; string_starts_with: 'Texture2D /Game/FactoryGame/'},
		'Texture2D--basic'
	>(['Texture2D--basic'], (data, reference_name) => {
		return ts.factory.createTypeAliasDeclaration(
			[create_modifier('export')],
			adjust_class_name(reference_name),
			undefined,
			ts.factory.createTypeReferenceNode('string_starts_with', [
				ts.factory.createLiteralTypeNode(
					ts.factory.createStringLiteral(data.string_starts_with)
				),
			])
		);
	}),
	new TypesGenerationMatchesReferenceName<
		{
			type: 'string';
			pattern: string;
		},
		keyof typeof target_files
	>(
		Object.keys(target_files) as (keyof typeof target_files)[],
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				adjust_class_name(reference_name),
				[
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'T',
						create_type('number'),
						create_type('number')
					),
				],
				ts.factory.createTypeReferenceNode(
					'StrictlyTypedNumberFromRegExp',
					[
						ts.factory.createLiteralTypeNode(
							ts.factory.createStringLiteral(data.pattern)
						),
					]
				)
			);
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
	(): {file: string; node: ts.Node}[] => {
		const nodes: {file: string; node: ts.Node}[] = [];

		nodes.push({
			file: 'utils/validators.ts',
			node: ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				ts.factory.createIdentifier('string_starts_with'),
				[
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'prefix',
						create_type('string')
					),
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
										[
											ts.factory.createParameterDeclaration(
												undefined,
												undefined,
												'key',
												undefined,
												create_type('string')
											),
										],
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
										ts.factory.createTypeReferenceNode(
											'prefix'
										),
										ts.factory.createTemplateMiddle('')
									),
									ts.factory.createTemplateLiteralTypeSpan(
										ts.factory.createTypeReferenceNode(
											'pseudo_key'
										),
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
			),
		});

		nodes.push({
			file: 'utils/validators.ts',
			node: flexibly_create_regex_validation_function(
				'regexp_argument',
				ts.factory.createIdentifier('pattern'),

				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter('pattern', ts.SyntaxKind.StringKeyword),
					createParameter(
						'reference_argument',
						ts.SyntaxKind.StringKeyword
					),
				],
				[
					ts.factory.createTemplateSpan(
						ts.factory.createIdentifier('reference_argument'),
						ts.factory.createTemplateMiddle(
							' must pass the regex '
						)
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
			node: createClass(
				'UnrealEngineString',
				[
					ts.factory.createPropertyDeclaration(
						[create_modifier('readonly')],
						'prefix',
						undefined,
						ts.factory.createTypeReferenceNode('prefix'),
						undefined
					),
					ts.factory.createPropertyDeclaration(
						[create_modifier('readonly')],
						'value',
						undefined,
						ts.factory.createTypeReferenceNode('value'),
						undefined
					),
					create_method_without_type_parameters(
						'constructor',
						[
							createParameter(
								'prefix',
								ts.factory.createTypeReferenceNode('prefix')
							),
							createParameter(
								'value',
								ts.factory.createTypeReferenceNode('value')
							),
						],
						[
							create_this_assignment('prefix', 'prefix'),
							create_this_assignment('value', 'value'),
						],
						['protected']
					),
					create_method_with_type_parameters(
						'fromString',
						[
							ts.factory.createTypeParameterDeclaration(
								undefined,
								'pattern',
								create_type('string'),
								create_type('string')
							),
							ts.factory.createTypeParameterDeclaration(
								undefined,
								'value',
								create_type('string'),
								create_type('string')
							),
						],
						[
							createParameter(
								'unchecked_string',
								create_type('string')
							),
							createParameter(
								'prefix_check',
								create_union(
									create_type('string'),
									create_type('undefined')
								),
								ts.factory.createIdentifier('undefined')
							),
							createParameter(
								'pattern',
								ts.factory.createTypeReferenceNode('pattern')
							),
							createParameter(
								ts.factory.createObjectBindingPattern([
									ts.factory.createBindingElement(
										undefined,
										undefined,
										'not_an_UnrealEngineString_string',
										create_template_span([
											'UnrealEngineString value expected, "',
											ts.factory.createIdentifier(
												'unchecked_string'
											),
											'" found',
										])
									),
									ts.factory.createBindingElement(
										undefined,
										undefined,
										'prefix_check_failed',
										create_template_span([
											'UnrealEngineString prefix expected to start with ',
											ts.factory.createIdentifier(
												'prefix_check'
											),
											', not found on "',
											ts.factory.createIdentifier(
												'unchecked_string'
											),
											'"',
										])
									),
									ts.factory.createBindingElement(
										undefined,
										undefined,
										'value_check_failed',
										create_template_span([
											'UnrealEngineString suffix expected to match ',
											ts.factory.createIdentifier(
												'pattern'
											),
											', not found on "',
											ts.factory.createIdentifier(
												'unchecked_string'
											),
											'"',
										])
									),
								]),
								ts.factory.createTypeLiteralNode(
									[
										'not_an_UnrealEngineString_string',
										'prefix_check_failed',
										'value_check_failed',
									].map((object_key) => {
										return ts.factory.createPropertySignature(
											undefined,
											object_key,
											undefined,
											create_type('string')
										);
									})
								)
							),
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
															ts.factory.createIdentifier(
																'RegExp'
															),
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
												[
													ts.factory.createIdentifier(
														'unchecked_string'
													),
												]
											)
										),
									],
									ts.NodeFlags.Const
								)
							),
							create_throw_if(
								'Error',
								ts.factory.createLogicalNot(
									ts.factory.createIdentifier('result')
								),
								[
									ts.factory.createIdentifier(
										'not_an_UnrealEngineString_string'
									),
								]
							),
							create_throw_if(
								'Error',
								ts.factory.createLogicalAnd(
									ts.factory.createStrictInequality(
										ts.factory.createIdentifier(
											'undefined'
										),
										ts.factory.createIdentifier(
											'prefix_check'
										)
									),
									ts.factory.createLogicalNot(
										ts.factory.createCallExpression(
											ts.factory.createPropertyAccessExpression(
												create_index_access(
													'result',
													1
												),
												'startsWith'
											),
											undefined,
											[
												ts.factory.createIdentifier(
													'prefix_check'
												),
											]
										)
									)
								),
								[
									ts.factory.createIdentifier(
										'prefix_check_failed'
									),
								]
							),
							create_throw_if(
								'Error',
								ts.factory.createLogicalNot(
									ts.factory.createCallExpression(
										ts.factory.createPropertyAccessExpression(
											ts.factory.createParenthesizedExpression(
												ts.factory.createNewExpression(
													ts.factory.createIdentifier(
														'RegExp'
													),
													undefined,
													[
														ts.factory.createIdentifier(
															'pattern'
														),
													]
												)
											),
											'test'
										),
										undefined,
										[create_index_access('result', 2)]
									)
								),
								[
									ts.factory.createIdentifier(
										'value_check_failed'
									),
								]
							),
							ts.factory.createReturnStatement(
								ts.factory.createNewExpression(
									ts.factory.createIdentifier(
										'UnrealEngineString'
									),
									conditional_UnrealEngineString_type_arguments(),
									[
										create_index_access('result', 1),
										ts.factory.createAsExpression(
											create_index_access('result', 2),
											ts.factory.createTypeReferenceNode(
												'StringPassedRegExp',
												[
													ts.factory.createTypeReferenceNode(
														'pattern'
													),
													ts.factory.createTypeReferenceNode(
														'value'
													),
												]
											)
										),
									]
								)
							),
						],
						['static'],
						create_conditional_UnrealEngineString_type_reference()
					),
				],
				{
					modifiers: ['export'],
				},
				[
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'prefix',
						create_union(
							create_type('string'),
							ts.factory.createTypeReferenceNode(
								'string_starts_with',
								[create_type('string')]
							)
						),
						undefined
					),
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'value',
						ts.factory.createTypeReferenceNode(
							'StringPassedRegExp',
							[create_type('string')]
						),
						ts.factory.createTypeReferenceNode(
							'StringPassedRegExp',
							[create_type('string')]
						)
					),
				]
			),
		});

		nodes.push({
			file: 'utils/validators.ts',
			node: create_function(
				'array_string',
				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter(
						'reference_argument',
						ts.SyntaxKind.StringKeyword
					),
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
										ts.factory.createIdentifier(
											'string_to_array'
										),
										[
											ts.factory.createTypeReferenceNode(
												'T'
											),
										],
										[ts.factory.createIdentifier('value')]
									)
								),
							],
							ts.NodeFlags.Const
						)
					),
					create_throw_if(
						'Error',
						ts.factory.createLogicalNot(
							ts.factory.createIdentifier('result')
						),
						[
							create_basic_reference_argument_template_span(
								'reference_argument',
								' must be a Docs.json array string!'
							),
						]
					),
					ts.factory.createReturnStatement(
						ts.factory.createIdentifier('result')
					),
				],
				[
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'T',
						ts.factory.createArrayTypeNode(create_type('any'))
					),
				]
			),
		});

		nodes.push({
			file: 'utils/validators.ts',
			node: create_function(
				'object_string',
				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter(
						'reference_argument',
						ts.SyntaxKind.StringKeyword
					),
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
										ts.factory.createIdentifier(
											'string_to_object'
										),
										[
											ts.factory.createTypeReferenceNode(
												'T'
											),
										],
										[ts.factory.createIdentifier('value')]
									)
								),
							],
							ts.NodeFlags.Const
						)
					),
					create_throw_if(
						'Error',
						ts.factory.createLogicalNot(
							ts.factory.createIdentifier('result')
						),
						[
							create_basic_reference_argument_template_span(
								'reference_argument',
								' must be a Docs.json object string!'
							),
						]
					),
					ts.factory.createReturnStatement(
						ts.factory.createIdentifier('result')
					),
				],
				[
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'T',
						create_type('object')
					),
				]
			),
		});

		nodes.push({
			file: 'utils/validators.ts',
			node: create_function(
				'string_has_minLength',
				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter('min_length', ts.SyntaxKind.NumberKeyword),
					createParameter(
						'reference_argument',
						ts.SyntaxKind.StringKeyword
					),
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
										ts.factory.createIdentifier(
											'reference_argument'
										),
										ts.factory.createTemplateMiddle(
											' expected to be of length '
										)
									),
									ts.factory.createTemplateSpan(
										ts.factory.createIdentifier(
											'min_length'
										),
										ts.factory.createTemplateMiddle(', ')
									),
									ts.factory.createTemplateSpan(
										ts.factory.createPropertyAccessExpression(
											ts.factory.createIdentifier(
												'value'
											),
											'length'
										),
										ts.factory.createTemplateTail(' found')
									),
								]
							),
						]
					),
					ts.factory.createReturnStatement(
						ts.factory.createIdentifier('value')
					),
				]
			),
		});

		return nodes;
	},
	(): {file: string; node: ts.Node}[] => {
		return [
			{
				file: 'utils/validators.ts',
				node: ts.factory.createTypeAliasDeclaration(
					[create_modifier('export')],
					'StrictlyTypedNumberFromRegExp',
					[
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'pattern',
							create_type('string')
						),
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'T',
							create_type('number'),
							create_type('number')
						),
					],
					ts.factory.createIntersectionTypeNode([
						create_type('never'),
						ts.factory.createTypeReferenceNode('T'),
						create_object_type({
							_DocsJsonPattern:
								ts.factory.createTypeReferenceNode('pattern'),
						}),
					])
				),
			},
			{
				file: 'utils/validators.ts',
				node: ts.factory.createTypeAliasDeclaration(
					[create_modifier('export')],
					'StringPassedRegExp',
					[
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'pattern',
							create_type('string')
						),
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'T',
							create_type('string'),
							create_type('string')
						),
					],
					ts.factory.createIntersectionTypeNode([
						create_type('never'),
						ts.factory.createTypeReferenceNode('T'),
						create_object_type({
							_DocsJsonPattern:
								ts.factory.createTypeReferenceNode('pattern'),
						}),
					])
				),
			},
		];
	},
];

export const UnrealEngineString_schema = {
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
			},
		},
	},
};

export const UnrealEngineString_prefix_pattern_schema = {
	type: 'object',
	required: ['type', 'UnrealEngineString'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		UnrealEngineString: {
			type: 'object',
			required: ['type', 'UnrealEngineString_prefix_pattern', 'pattern'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				UnrealEngineString_prefix_pattern: {
					type: 'string',
					minLength: 1,
				},
				pattern: {type: 'string', minLength: 2},
			},
		},
	},
};

export type UnrealEngineString_type = {
	type: 'string';
	UnrealEngineString: {
		type: 'string';
		UnrealEngineString_prefix: string;
		pattern: string;
	};
} & ({minLength: 1} | {});

export type UnrealEngineString_pattern_type = {
	type: 'string';
	UnrealEngineString: {
		type: 'string';
		UnrealEngineString_prefix_pattern: string;
		pattern: string;
	};
} & ({minLength: 1} | {});

export const type_node_generators = [
	new TypeNodeGeneration<ref_type>(ref_schema, (property) => {
		const ref_key = property['$ref'].substring(
			14
		) as keyof typeof target_files;

		return new TypeNodeGenerationResult(
			() =>
				ts.factory.createTypeReferenceNode(
					'StrictlyTypedNumberFromRegExp',
					[create_type('string')]
				),
			!(ref_key in target_files)
				? undefined
				: {
						[target_files[ref_key].replace(/\.ts$/, '')]: [
							adjust_class_name(ref_key),
						],
					}
		);
	}),
	new TypeNodeGeneration<{
		type: string;
		pattern: string;
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
		(data) => {
			return new TypeNodeGenerationResult(() => {
				return ts.factory.createTypeReferenceNode(
					'StringPassedRegExp',
					[create_literal_node_from_value(data.pattern)]
				);
			});
		}
	),
	new TypeNodeGeneration<UnrealEngineString_type>(
		UnrealEngineString_schema,
		(data) => {
			return new TypeNodeGenerationResult(
				() =>
					create_UnrealEngineString_reference_type(
						data.UnrealEngineString
					),
				{
					'utils/validators': ['UnrealEngineString'],
				}
			);
		}
	),
	new TypeNodeGeneration<UnrealEngineString_pattern_type>(
		UnrealEngineString_prefix_pattern_schema,
		(data) => {
			return new TypeNodeGenerationResult(
				() =>
					create_UnrealEngineString_reference_type(
						data.UnrealEngineString
					),
				{
					'utils/validators': ['UnrealEngineString'],
				}
			);
		}
	),
	new TypeNodeGeneration<{
		type: 'string';
		string_starts_with: string;
	}>(
		{
			type: 'object',
			required: ['type', 'string_starts_with'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				string_starts_with: {type: 'string', minLength: 1},
			},
		},
		(property) => {
			return new TypeNodeGenerationResult(
				() => {
					return ts.factory.createTypeReferenceNode(
						'string_starts_with',
						[
							ts.factory.createLiteralTypeNode(
								ts.factory.createStringLiteral(
									property.string_starts_with
								)
							),
						]
					);
				},
				{
					'utils/validators': ['string_starts_with'],
				}
			);
		}
	),
	new TypeNodeGeneration<{
		type: 'string';
		minLength: number;
	}>(
		{
			type: 'object',
			required: ['type', 'minLength'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', minimum: 1},
			},
		},
		() => {
			return new TypeNodeGenerationResult(
				() => {
					return create_type('string');
				},
				{
					'utils/validators': ['string_has_minLength'],
				}
			);
		}
	),
	new TypeNodeGeneration<{
		type: 'string';
		minLength: number;
	}>(
		{
			type: 'object',
			required: ['type'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
			},
		},
		() => {
			return new TypeNodeGenerationResult(() => {
				return create_type('string');
			});
		}
	),
];
