import Ajv from 'ajv/dist/2020';
import {UnrealEngineString} from '../DocsValidation';
import ts, {Node} from 'typescript';
import {
	adjust_class_name,
	create_index_access,
	create_literal_node_from_value,
	create_method_with_type_parameters,
	create_method_without_type_parameters,
	create_minimum_size_typed_array_of_single_type,
	create_minimum_size_typed_array_of_type_references,
	create_modifier,
	create_object_type_alias,
	create_template_span,
	create_this_assignment,
	create_throw_if,
	create_type,
	create_union,
	createClass,
	createParameter,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	TypesGeneration_concrete,
	TypesGenerationFromSchema,
	TypesGenerationMatchesReferenceName,
} from '../TypesGeneration';
import {
	array_string_schema_type,
	target_files,
} from '../TypesGeneration/arrays';

const already_configured = new WeakSet<Ajv>();

export const UnrealEngineString_regex = /^([^']+)'(?:"([^"]+)"|([^"]+))'$/;

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

export type supported_oneOf_items = {
	type: 'string';
	minLength: 1;
	UnrealEngineString: {
		type: 'string';
		UnrealEngineString_prefix: string;
		pattern: string;
	};
};

export class UnrealEngineStringReference {
	static configure_ajv(ajv: Ajv) {
		if (already_configured.has(ajv)) {
			return;
		}

		already_configured.add(ajv);

		ajv.addKeyword({
			keyword: 'UnrealEngineString',
			type: 'string',
			metaSchema: {
				definitions: {
					base: {
						type: 'object',
						required: ['type', 'pattern'],
						properties: {
							type: {type: 'string', const: 'string'},
							pattern: {type: 'string', minLength: 2},
						},
					},
				},
				oneOf: [
					{
						type: 'object',
						$ref: '#/definitions/base',
						required: ['UnrealEngineString_prefix'],
						unevaluatedProperties: false,
						properties: {
							UnrealEngineString_prefix: {
								type: 'string',
								minLength: 1,
							},
						},
					},
					{
						type: 'object',
						$ref: '#/definitions/base',
						required: ['UnrealEngineString_prefix_pattern'],
						unevaluatedProperties: false,
						properties: {
							UnrealEngineString_prefix_pattern: {
								type: 'string',
								minLength: 2,
							},
						},
					},
				],
			},
			compile: (
				schema: {
					type: 'string';
					pattern: string;
				} & (
					| {
							UnrealEngineString_prefix: string;
					  }
					| {
							UnrealEngineString_prefix_pattern: string;
					  }
				)
			) => {
				return (data: string) => {
					return UnrealEngineString(schema, data);
				};
			},
			/*
			code: (ctx:KeywordCxt) => {
				const {data, schema, params} = ctx;
				ctx.pass(_`
					(() => {
						const match = UnrealEngineString_regex.exec(${data});

						if (!match) {
							return false;
						}

						const prefix = match[1];
						const value = match[2] || match[3];

						${
							'UnrealEngineString_prefix' in schema
							? _`if (prefix !== ${schema.UnrealEngineString_prefix}) { return false }`
							: _`if (!(new RegExp('${schema.UnrealEngineString_prefix_pattern}')).test(prefix) { return false; }`
						}

						if (!(new RegExp(${schema.pattern})).test(value)) {
							return false;
						}

						return true;
					})()
				`);
				ctx.pass(_`UnrealEngineString(${schema}, ${data})`);
			},
			 */
		});
	}

	static TypesGenerators(): [
		TypesGeneration_concrete,
		...TypesGeneration_concrete[],
	] {
		return [
			new TypesGenerationFromSchema<UnrealEngineString_type>(
				UnrealEngineString_schema,
				(data, reference_name) => {
					return ts.factory.createTypeAliasDeclaration(
						[create_modifier('export')],
						adjust_class_name(reference_name),
						undefined,
						create_UnrealEngineString_reference_type(
							data.UnrealEngineString
						)
					);
				}
			),
			new TypesGenerationMatchesReferenceName<
				array_string_schema_type,
				keyof typeof target_files
			>(['mDamageTypes'], (_, reference_name) => {
				return ts.factory.createTypeAliasDeclaration(
					[create_modifier('export')],
					ts.factory.createIdentifier(
						adjust_class_name(reference_name)
					),
					undefined,
					create_minimum_size_typed_array_of_type_references(
						'UnrealEngineString',
						() => {
							return [
								ts.factory.createTypeReferenceNode(
									'string_starts_with',
									[
										ts.factory.createLiteralTypeNode(
											ts.factory.createStringLiteral(
												'/Game/FactoryGame/-Shared/Blueprint/DamageTypes/'
											)
										),
									]
								),
							];
						}
					)
				);
			}),
			new TypesGenerationMatchesReferenceName<
				{
					type: 'object';
					required: ['Class', 'mTapeUnlocks'];
					additionalProperties: false;
					properties: {
						Class: {
							type: 'string';
							const: string;
						};
						mTapeUnlocks: {
							type: string;
							minLength: 1;
							array_string: {
								type: 'array';
								minItems: 1;
								items: UnrealEngineString_type;
							};
						};
					};
				},
				'mUnlocks_mTapeUnlocks'
			>(['mUnlocks_mTapeUnlocks'], (data, reference_name) => {
				return create_object_type_alias(
					adjust_class_name(reference_name),
					['declare'],
					{
						Class: create_literal_node_from_value(
							data.properties.Class.const
						),
						mTapeUnlocks:
							create_minimum_size_typed_array_of_single_type(
								data.properties.mTapeUnlocks.array_string
									.minItems,
								() =>
									create_UnrealEngineString_reference_type(
										data.properties.mTapeUnlocks
											.array_string.items
											.UnrealEngineString
									)
							),
					}
				);
			}),
		];
	}

	static CustomGenerators(): [
		{file: string; node: Node},
		...{file: string; node: Node}[],
	] {
		return [
			{
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
									ts.factory.createTypeReferenceNode(
										'prefix'
									)
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
									ts.factory.createTypeReferenceNode(
										'pattern'
									)
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
												create_index_access(
													'result',
													2
												),
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
			},
		];
	}

	static TypeNodeGeneration(): [
		TypeNodeGeneration<any>,
		...TypeNodeGeneration<any>[],
	] {
		return [
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
		];
	}
}

export function adjust_unrealengine_prefix(prefix: string): string {
	return adjust_class_name(
		prefix.replace(/^(?:\/Script\/)/, '').replace(/\.Class$/, '')
	);
}

export function adjust_unrealengine_value(value: string): string {
	return adjust_class_name(
		value.replace(/^(?:\/Script\/FactoryGame\.)/, '')
	);
}

function flexibly_create_UnrealEngineString_reference_type(
	type_arguments: ts.TypeNode[] | undefined
): ts.TypeReferenceNode {
	return ts.factory.createTypeReferenceNode(
		'UnrealEngineString',
		type_arguments
	);
}

export function create_UnrealEngineString_reference_type(
	type_arguments:
		| {UnrealEngineString_prefix: string; pattern: string}
		| {UnrealEngineString_prefix_pattern: string; pattern: string}
		| undefined = undefined
): ts.TypeReferenceNode {
	return flexibly_create_UnrealEngineString_reference_type(
		!type_arguments
			? undefined
			: [
					'UnrealEngineString_prefix' in type_arguments
						? ts.factory.createTypeReferenceNode(
								'string_starts_with',
								[
									create_literal_node_from_value(
										type_arguments.UnrealEngineString_prefix
									),
								]
							)
						: ts.factory.createTypeReferenceNode(
								'StringPassedRegExp',
								[
									create_literal_node_from_value(
										type_arguments.UnrealEngineString_prefix_pattern
									),
								]
							),
					ts.factory.createTypeReferenceNode('StringPassedRegExp', [
						create_literal_node_from_value(type_arguments.pattern),
					]),
				]
	);
}

export function conditional_UnrealEngineString_type_arguments(): [
	ts.ConditionalTypeNode,
	ts.TypeReferenceNode,
] {
	return [
		ts.factory.createConditionalTypeNode(
			ts.factory.createTypeQueryNode(
				ts.factory.createIdentifier('prefix_check')
			),
			create_type('string'),
			ts.factory.createTypeReferenceNode('string_starts_with', [
				ts.factory.createTypeQueryNode(
					ts.factory.createIdentifier('prefix_check')
				),
			]),
			create_type('string')
		),
		ts.factory.createTypeReferenceNode('StringPassedRegExp', [
			ts.factory.createTypeReferenceNode('pattern'),
			ts.factory.createTypeReferenceNode('value'),
		]),
	];
}

export function create_conditional_UnrealEngineString_type_reference(): ts.TypeReferenceNode {
	return flexibly_create_UnrealEngineString_reference_type(
		conditional_UnrealEngineString_type_arguments()
	);
}
