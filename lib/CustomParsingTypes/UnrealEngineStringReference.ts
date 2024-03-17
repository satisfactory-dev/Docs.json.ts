import Ajv from 'ajv/dist/2020';
import ts, {Node, TypeNode, TypeReferenceNode} from 'typescript';
import {
	adjust_class_name,
	create_index_access,
	create_literal_node_from_value,
	create_method_with_type_parameters,
	create_method_without_type_parameters,
	create_minimum_size_typed_array_of_type_references,
	create_modifier,
	create_template_span,
	create_this_assignment,
	create_throw_if,
	create_type,
	create_union,
	createClass,
	createParameter,
	possibly_create_lazy_union,
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
import {object_has_property} from './CustomPairingTypes';

const already_configured = new WeakSet<Ajv>();

export const UnrealEngineString_regex = /^([^']+)'(?:"([^"]+)"|([^"]+))'$/;

export type UnrealEngineString_type = {
	type: 'string';
	UnrealEngineString: {
		type: 'string';
		UnrealEngineString_prefix: string;
		pattern: string;
	};
} & ({minLength: 1} | {});

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
export type UnrealEngineStringReference_inner_type = {
	type: 'string';
	minLength: 1;
	['UnrealEngineStringReference--inner']: UnrealEngineStringReference_type;
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
export const UnrealEngineStringReference_inner_schema = {
	type: 'object',
	required: ['type', 'minLength', 'UnrealEngineStringReference--inner'],
	additionalProperties: false,
	definitions: UnrealEngineStringReference_schema.definitions,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		['UnrealEngineStringReference--inner']:
			UnrealEngineStringReference_schema,
	},
};

export const UnrealEngineStringReference_left_default = [
	'/Script/Engine.BlueprintGeneratedClass',
];

export class UnrealEngineStringReference {
	static configure_ajv(ajv: Ajv) {
		if (already_configured.has(ajv)) {
			return;
		}

		already_configured.add(ajv);

		ajv.addKeyword({
			keyword: 'UnrealEngineStringReference',
			type: 'string',
			metaSchema: UnrealEngineStringReference_schema,
			macro: this.ajv_macro_generator(false),
		});
	}

	static ajv_macro_generator(inner: boolean) {
		return (data_from_schema: UnrealEngineStringReference_type) => {
			const data: Exclude<typeof data_from_schema, true> | {} =
				true === data_from_schema ? {} : data_from_schema;
			const left_value = (
				'left' in data
					? data.left instanceof Array
						? data.left
						: [data.left]
					: UnrealEngineStringReference_left_default
			).join('|');
			const right_value =
				'right' in data
					? `(?:${(data.right instanceof Array
							? data.right
							: [
									'string' === typeof data.right
										? data.right
										: `(?:${(data.right
												.starts_with instanceof Array
												? data.right.starts_with
												: [data.right.starts_with]
											)
												.map(
													(starts_with) =>
														starts_with +
														'(?:[A-Z][A-Za-z0-9_.]+/)*[A-Z][A-Za-z_.0-9-]+(?::[A-Z][A-Za-z0-9]+)?'
												)
												.join('|')})`,
								]
						).join('|')})`
					: UnrealEngineStringReference_general_regex;

			const regex = `(?:(?:${left_value})'(?:${right_value}|"${right_value}")')`;

			return {
				pattern: inner ? regex : `^${regex}$`,
			};
		};
	}

	static TypesGenerators(): [
		TypesGeneration_concrete,
		...TypesGeneration_concrete[],
	] {
		return [
			new TypesGenerationFromSchema<UnrealEngineStringReference_general_type>(
				UnrealEngineStringReference_general_schema,
				(data, reference_name) => {
					return ts.factory.createTypeAliasDeclaration(
						[create_modifier('export')],
						adjust_class_name(reference_name),
						undefined,
						create_UnrealEngineStringReference_reference_type(
							data.UnrealEngineStringReference
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
			},
		];
	}

	static TypeNodeGeneration(): [
		TypeNodeGeneration<any>,
		...TypeNodeGeneration<any>[],
	] {
		return [
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

export function flexibly_create_UnrealEngineString_reference_type(
	type_arguments: [TypeNode, TypeNode] | [TypeNode] | undefined
): ts.TypeReferenceNode {
	return ts.factory.createTypeReferenceNode(
		'UnrealEngineString',
		type_arguments
	);
}

export function create_UnrealEngineStringReference_reference_type(
	data_from_schema: UnrealEngineStringReference_type
): TypeReferenceNode {
	const data: Exclude<typeof data_from_schema, true> | {} =
		true === data_from_schema ? {} : data_from_schema;

	let left_value: TypeNode = create_literal_node_from_value(
		UnrealEngineStringReference_left_default[0]
	);
	let left_changed = false;
	let right_value: TypeNode = create_type('string');
	let right_changed = false;

	if ('object' === typeof data && 'left' in data) {
		const {left} = data as {
			left: UnrealEngineStringReference_string_or_string_array;
		};

		const left_options = [
			...new Set(left instanceof Array ? left : [left]).values(),
		];

		if (1 === left_options.length) {
			left_value = create_literal_node_from_value(left_options[0]);
		} else if (left_options.length > 1) {
			left_value = possibly_create_lazy_union(left_options);
		}

		left_changed = true;
	}

	if ('object' === typeof data && 'right' in data) {
		const {right} = data as {right: UnrealEngineStringReference_right};

		if ('object' === typeof right && 'starts_with' in right) {
			const {starts_with} = right;

			const right_options = [
				...new Set(
					starts_with instanceof Array ? starts_with : [starts_with]
				).values(),
			];

			if (right_options.length >= 1) {
				right_value = ts.factory.createTypeReferenceNode(
					'string_starts_with',
					[
						1 === right_options.length
							? create_literal_node_from_value(right_options[0])
							: possibly_create_lazy_union(right_options),
					]
				);
			}
		} else {
			const right_options = [
				...new Set(right instanceof Array ? right : [right]).values(),
			];

			if (right_options.length >= 1) {
				right_value =
					1 === right_options.length
						? create_literal_node_from_value(right_options[0])
						: possibly_create_lazy_union(right_options);
			}
		}

		right_changed = true;
	}

	return flexibly_create_UnrealEngineString_reference_type(
		left_changed || right_changed
			? right_changed
				? [left_value, right_value]
				: [left_value]
			: undefined
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

function is_string_or_string_array(
	maybe: any
): maybe is string | [string, ...string[]] {
	return (
		'string' === typeof maybe ||
		(maybe instanceof Array &&
			maybe.length >= 1 &&
			maybe.every((e) => 'string' === typeof e))
	);
}

function is_UnrealEngineStringReference_value_object(
	maybe: object
): maybe is Exclude<UnrealEngineStringReference_type, true> {
	const keys = Object.keys(maybe);

	const has_left = 'left' in maybe && is_string_or_string_array(maybe.left);
	const has_right =
		object_has_property(maybe, 'right') &&
		('object' === typeof maybe.right && !(maybe.right instanceof Array)
			? 'starts_with' in maybe.right &&
				1 === Object.keys(maybe.right).length &&
				is_string_or_string_array(maybe.right.starts_with)
			: is_string_or_string_array(maybe.right));

	return (
		(2 === keys.length && has_left && has_right) ||
		(1 === keys.length && (has_left || has_right))
	);
}

export function is_UnrealEngineStringReference_value(
	maybe: any
): maybe is UnrealEngineStringReference_type {
	return (
		true === maybe ||
		('object' === typeof maybe &&
			is_UnrealEngineStringReference_value_object(maybe))
	);
}

export function is_UnrealEngineStringReference_inner_object(maybe: {
	[key: string]: any;
}): maybe is UnrealEngineStringReference_inner_type {
	const keys = Object.keys(maybe);

	return (
		3 === keys.length &&
		keys.includes('type') &&
		keys.includes('minLength') &&
		keys.includes('UnrealEngineStringReference--inner') &&
		'string' === maybe.type &&
		1 === maybe.minLength &&
		is_UnrealEngineStringReference_value(
			maybe['UnrealEngineStringReference--inner']
		)
	);
}
