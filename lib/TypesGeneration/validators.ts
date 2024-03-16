import ts, {TypeReferenceNode} from 'typescript';
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
	create_conditional_UnrealEngineString_type_reference,
	conditional_UnrealEngineString_type_arguments,
	create_union,
	create_literal_node_from_value,
	createClass__members__with_auto_constructor,
	create_UnrealEngineStringReference_reference_type,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {UnrealEngineString_regex} from '../DocsValidation';

const validator_target_files = {
	'decimal-string': 'utils/validators.ts',
	'decimal-string--signed': 'utils/validators.ts',
	'integer-string': 'utils/validators.ts',
	'integer-string--signed': 'utils/validators.ts',
};
const vector_string_target_files = {
	mDockingRuleSet: 'classes/base.ts',
	mLightControlData: 'classes/base.ts',
	'color-decimal': 'common/color.ts',
	color: 'common/color.ts',
};

export const target_files = {
	...validator_target_files,
	...vector_string_target_files,
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
			oneOf: [
				...Object.keys(validator_target_files),
				...supported_meta_types,
			].map((ref) => {
				return {type: 'string', const: `#/definitions/${ref}`};
			}),
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
		keyof typeof validator_target_files
	>(
		Object.keys(
			validator_target_files
		) as (keyof typeof validator_target_files)[],
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
	new TypesGenerationMatchesReferenceName<
		{
			type: 'string';
			minLength: 1;
			vector_object_string: vector_object_string_type;
		},
		'mDockingRuleSet' | 'mLightControlData' | 'color-decimal' | 'color'
	>(
		['mDockingRuleSet', 'mLightControlData', 'color-decimal', 'color'],
		(data, reference_name) => {
			return createClass(
				adjust_class_name(reference_name),
				createClass__members__with_auto_constructor(
					Object.assign({}, data.vector_object_string, {
						required: Object.keys(
							data.vector_object_string.properties
						) as [string, ...string[]],
					}),
					['public', 'readonly']
				),
				{
					modifiers: ['export'],
				}
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
						create_literal_node_from_value(
							UnrealEngineStringReference_left_default[0]
						)
					),
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'value',
						create_union(
							create_type('string'),
							ts.factory.createTypeReferenceNode(
								'string_starts_with',
								[create_type('string')]
							)
						),
						create_type('string')
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

export const UnrealEngineStringReference_general_regex =
	'/(?:[A-Z-][A-Za-z0-9_-]+/)+(?:[A-Z][A-Za-z_0-9-]+\\.[A-Z][A-Za-z_0-9-]+(?:_C)?(?::[A-Z][A-Za-z0-9_]+)?|[A-Z][A-Za-z_]+\\.[A-Z][A-Za-z_]+)';

export type UnrealEngineStringReference_string_or_string_array =
	| string
	| [string, ...string[]];

export type UnrealEngineStringReference_right =
	| UnrealEngineStringReference_string_or_string_array
	| {starts_with: UnrealEngineStringReference_string_or_string_array};

export type UnrealEngineStringReference_type =
	| {
			left: UnrealEngineStringReference_string_or_string_array;
			right: UnrealEngineStringReference_right;
	  }
	| {
			left: UnrealEngineStringReference_string_or_string_array;
	  }
	| {
			right: UnrealEngineStringReference_right;
	  }
	| true;

export type UnrealEngineStringReference_general_type = {
	type: 'string';
	minLength: 1;
	UnrealEngineStringReference: UnrealEngineStringReference_type;
};

export const UnrealEngineStringReference_schema = {
	definitions: {
		UnrealEngineStringReference_schema_left_string: {
			type: 'string',
			pattern: `^(/Script/[A-Z][A-Za-z]+.[A-Z][A-Za-z]+(?:2D)?|${UnrealEngineStringReference_general_regex})$`,
		},
		UnrealEngineStringReference_schema_right_string: {
			type: 'string',
			pattern: `^${UnrealEngineStringReference_general_regex}$`,
		},
		UnrealEngineStringReference_schema_left_property: {
			oneOf: [
				{
					$ref: '#/definitions/UnrealEngineStringReference_schema_left_string',
				},
				{
					type: 'array',
					minItems: 1,
					items: {
						$ref: '#/definitions/UnrealEngineStringReference_schema_left_string',
					},
				},
			],
		},
		UnrealEngineStringReference_schema_right_starts_with: {
			type: 'string',
			pattern:
				'^/(?:[A-Z][A-Za-z_\\-.]+/)+(?:[A-Z][A-Za-z_\\-.]+/|[A-Z][A-Za-z_\\-.]+\\.[A-Z][A-Za-z_\\-]+)$',
		},
		UnrealEngineStringReference_schema_right_property: {
			oneOf: [
				{
					$ref: '#/definitions/UnrealEngineStringReference_schema_right_string',
				},
				{
					type: 'array',
					minItems: 1,
					items: {
						$ref: '#/definitions/UnrealEngineStringReference_schema_right_string',
					},
				},
				{
					type: 'object',
					required: ['starts_with'],
					additionalProperties: false,
					properties: {
						starts_with: {
							oneOf: [
								{
									$ref: '#/definitions/UnrealEngineStringReference_schema_right_starts_with',
								},
								{
									type: 'array',
									minItems: 1,
									items: {
										$ref: '#/definitions/UnrealEngineStringReference_schema_right_starts_with',
									},
								},
							],
						},
					},
				},
			],
		},
	},
	oneOf: [
		{
			type: 'object',
			required: ['left', 'right'],
			additionalProperties: false,
			properties: {
				left: {
					$ref: '#/definitions/UnrealEngineStringReference_schema_left_property',
				},
				right: {
					$ref: '#/definitions/UnrealEngineStringReference_schema_right_property',
				},
			},
		},
		{
			type: 'object',
			required: ['left'],
			additionalProperties: false,
			properties: {
				left: {
					$ref: '#/definitions/UnrealEngineStringReference_schema_left_property',
				},
			},
		},
		{
			type: 'object',
			required: ['right'],
			additionalProperties: false,
			properties: {
				right: {
					$ref: '#/definitions/UnrealEngineStringReference_schema_right_property',
				},
			},
		},
		{
			type: 'boolean',
			const: true,
		},
	],
};

export const UnrealEngineStringReference_general_schema = {
	type: 'object',
	required: ['type', 'minLength', 'UnrealEngineStringReference'],
	additionalProperties: false,
	definitions: UnrealEngineStringReference_schema.definitions,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		UnrealEngineStringReference: UnrealEngineStringReference_schema,
	},
};

export const UnrealEngineStringReference_left_default = [
	'/Script/Engine.BlueprintGeneratedClass',
];

export const vector_object_string_schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {
			oneOf: [
				{
					type: 'string',
					const: '#/definitions/decimal-string',
				},
				{
					type: 'string',
					const: '#/definitions/decimal-string--signed',
				},
				{
					type: 'string',
					const: '#/definitions/integer-string',
				},
				{
					type: 'string',
					const: '#/definitions/integer-string--signed',
				},
			],
		},
	},
};

export type vector_object_string_type = {
	type: 'object';
	properties: {
		[key: string]: {
			$ref:
				| '#/definitions/decimal-string'
				| '#/definitions/decimal-string--signed'
				| '#/definitions/integer-string'
				| '#/definitions/integer-string--signed';
		};
	};
};

const definitions = {
	...UnrealEngineStringReference_schema.definitions,
};

export const type_node_generators = [
	new TypeNodeGeneration<ref_type>(ref_schema, (property) => {
		const ref_key = property['$ref'].substring(
			14
		) as keyof typeof validator_target_files;

		return new TypeNodeGenerationResult(
			() =>
				ts.factory.createTypeReferenceNode(
					'StrictlyTypedNumberFromRegExp',
					[create_type('string')]
				),
			!(ref_key in validator_target_files)
				? undefined
				: {
						[validator_target_files[ref_key].replace(/\.ts$/, '')]:
							[adjust_class_name(ref_key)],
					}
		);
	}),
	new TypeNodeGeneration<{
		$ref:
			| '#/definitions/color'
			| '#/definitions/color-decimal'
			| '#/definitions/mDockingRuleSet'
			| '#/definitions/mLightControlData';
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					type: 'string',
					enum: [
						'#/definitions/color',
						'#/definitions/color-decimal',
						'#/definitions/mDockingRuleSet',
						'#/definitions/mLightControlData',
					],
				},
			},
		},
		(data) =>
			new TypeNodeGenerationResult(() => {
				return ts.factory.createTypeReferenceNode(
					adjust_class_name(data.$ref.substring(14))
				);
			})
	),
	new TypeNodeGeneration<{
		type: 'string';
		minLength: 1;
		vector_object_string: vector_object_string_type;
	}>(
		{
			type: 'object',
			required: ['type', 'minLength', 'vector_object_string'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', const: 1},
				vector_object_string: {
					type: 'object',
					required: ['type', 'properties'],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'object'},
						properties: {
							type: 'object',
							additionalProperties: vector_object_string_schema,
						},
					},
				},
			},
		},
		(data) => {
			const pattern_prop: {[key: string]: string} = {};
			const type_gen: {[key: string]: TypeReferenceNode} = {};

			for (const entry of Object.entries(
				data.vector_object_string.properties
			)) {
				const [property, {$ref}] = entry;

				if ($ref.startsWith('#/definitions/decimal-string')) {
					pattern_prop[property] = '\\d+\\.\\d+';
				} else {
					pattern_prop[property] = '\\d+';
				}

				if ($ref.endsWith('--signed')) {
					pattern_prop[property] =
						`-?${pattern_prop[property as keyof typeof pattern_prop]}`;
				}

				type_gen[property] = ts.factory.createTypeReferenceNode(
					'StrictlyTypedNumberFromRegExp',
					[create_literal_node_from_value(pattern_prop[property])]
				);
			}

			return new TypeNodeGenerationResult(() => {
				return create_object_type(
					Object.fromEntries(
						Object.keys(data.vector_object_string.properties).map(
							(property) => {
								return [property, type_gen[property]];
							}
						)
					)
				);
			});
		}
	),
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
	new TypeNodeGeneration<UnrealEngineStringReference_general_type>(
		UnrealEngineStringReference_general_schema,
		(data_from_schema) => {
			return new TypeNodeGenerationResult(() => {
				return create_UnrealEngineStringReference_reference_type(
					data_from_schema.UnrealEngineStringReference
				);
			});
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
