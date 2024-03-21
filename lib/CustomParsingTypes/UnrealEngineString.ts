import Ajv from 'ajv/dist/2020';
import ts, {
	ConditionalTypeNode,
	TypeNode, TypeReferenceNode,
} from 'typescript';
import {
	adjust_class_name,
	create_index_access,
	create_literal_node_from_value,
	create_method_with_type_parameters,
	create_method_without_type_parameters,
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
	TypesGenerationFromSchema,
} from '../TypesGeneration';
import {
	object_has_property,
	value_is_non_array_object,
} from './CustomPairingTypes';

const already_configured = new WeakSet<Ajv>();

export const UnrealEngineString_regex = /^([^']+)'(?:"([^"]+)"|([^"]+))'$/;

export const UnrealEngineString_general_regex =
	'/(?:[A-Z-][A-Za-z0-9_-]+/)+(?:[A-Z][A-Za-z_0-9-]+\\.[A-Z][A-Za-z_0-9-]+(?:_C)?(?::[A-Z][A-Za-z0-9_]+)?|[A-Z][A-Za-z_]+\\.[A-Z][A-Za-z_]+)';

export type UnrealEngineString_string_or_string_array =
	| string
	| [string, ...string[]];

export type UnrealEngineString_right =
	| UnrealEngineString_string_or_string_array
	| {starts_with: UnrealEngineString_string_or_string_array};

export type UnrealEngineString_type =
	| {
			left: UnrealEngineString_string_or_string_array;
			right: UnrealEngineString_right;
	}
	| {
			left: UnrealEngineString_string_or_string_array;
	}
	| {
			right: UnrealEngineString_right;
	}
	| true;

export type UnrealEngineString_parent_type = {
	type: 'string';
	minLength: 1;
	UnrealEngineString: UnrealEngineString_type;
};

export function is_UnrealEngineString_parent(
	maybe: unknown
): maybe is UnrealEngineString_parent_type {
	return (
		value_is_non_array_object(maybe)
		&& 3 === Object.keys(maybe).length
		&& object_has_property(maybe, 'type')
		&& 'string' === maybe.type
		&& object_has_property(maybe, 'minLength')
		&& 1 === maybe.minLength
		&& object_has_property(maybe, 'UnrealEngineString')
		&& (true === maybe.UnrealEngineString
			|| is_UnrealEngineString_object(
				maybe.UnrealEngineString
			))
	);
}

export const UnrealEngineString_schema_definitions = {
	UnrealEngineString_left_string: {
		type: 'string',
		pattern: `^(/Script/[A-Z][A-Za-z]+.[A-Z][A-Za-z]+(?:2D)?|${UnrealEngineString_general_regex})$`,
	},
	UnrealEngineString_right_string: {
		type: 'string',
		pattern: `^${UnrealEngineString_general_regex}$`,
	},
	UnrealEngineString_left: {
		oneOf: [
			{
				$ref: '#/definitions/UnrealEngineString_left_string',
			},
			{
				type: 'array',
				minItems: 1,
				items: {
					$ref: '#/definitions/UnrealEngineString_left_string',
				},
			},
		],
	},
	UnrealEngineString_right_starts_with: {
		type: 'string',
		pattern:
			'^/(?:[A-Z][A-Za-z_\\-.]+/)+(?:[A-Z][A-Za-z_\\-.]+/|[A-Z][A-Za-z_\\-.]+\\.[A-Z][A-Za-z_\\-]+)$',
	},
	UnrealEngineString_right: {
		oneOf: [
			{
				$ref: '#/definitions/UnrealEngineString_right_string',
			},
			{
				type: 'array',
				minItems: 1,
				items: {
					$ref: '#/definitions/UnrealEngineString_right_string',
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
								$ref: '#/definitions/UnrealEngineString_right_starts_with',
							},
							{
								type: 'array',
								minItems: 1,
								items: {
									$ref: '#/definitions/UnrealEngineString_right_starts_with',
								},
							},
						],
					},
				},
			},
		],
	},
};

export const UnrealEngineString_schema = {
	oneOf: [
		{
			type: 'object',
			required: ['left', 'right'],
			additionalProperties: false,
			properties: {
				left: {
					$ref: '#/definitions/UnrealEngineString_left',
				},
				right: {
					$ref: '#/definitions/UnrealEngineString_right',
				},
			},
		},
		{
			type: 'object',
			required: ['left'],
			additionalProperties: false,
			properties: {
				left: {
					$ref: '#/definitions/UnrealEngineString_left',
				},
			},
		},
		{
			type: 'object',
			required: ['right'],
			additionalProperties: false,
			properties: {
				right: {
					$ref: '#/definitions/UnrealEngineString_right',
				},
			},
		},
		{
			type: 'boolean',
			const: true,
		},
	],
};

export const UnrealEngineString_parent_schema = {
	type: 'object',
	required: ['type', 'minLength', 'UnrealEngineString'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		UnrealEngineString: UnrealEngineString_schema,
	},
};
export const UnrealEngineString_inner_schema = {
	type: 'object',
	required: ['type', 'minLength', 'UnrealEngineString--inner'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		minLength: {type: 'number', const: 1},
		['UnrealEngineString--inner']:
			UnrealEngineString_schema,
	},
};

export const UnrealEngineString_left_default = [
	'/Script/Engine.BlueprintGeneratedClass',
];

export class UnrealEngineString {
	static configure_ajv(ajv: Ajv) {
		if (already_configured.has(ajv)) {
			return;
		}

		already_configured.add(ajv);

		ajv.addKeyword({
			keyword: 'UnrealEngineString',
			type: 'string',
			metaSchema: {
				definitions: UnrealEngineString_schema_definitions,
				...UnrealEngineString_schema,
			},
			macro: this.ajv_macro_generator(false),
		});
	}

	static ajv_macro_generator(inner: boolean) {
		return (data_from_schema: UnrealEngineString_type) => {
			const data:
				| Exclude<typeof data_from_schema, true>
				| typeof empty_object =
				true === data_from_schema ? {} : data_from_schema;
			const left_value = (
				'left' in data
					? data.left instanceof Array
						? data.left
						: [data.left]
					: UnrealEngineString_left_default
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
					: UnrealEngineString_general_regex;

			const regex = `(?:(?:${left_value})'(?:${right_value}|"${right_value}")')`;

			return {
				pattern: inner ? regex : `^${regex}$`,
			};
		};
	}

	static TypesGenerators() {
		return [
			new TypesGenerationFromSchema<UnrealEngineString_parent_type>(
				{
					definitions:
						UnrealEngineString_schema_definitions,
					...UnrealEngineString_parent_schema,
				},
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
		];
	}

	static CustomGenerators() {
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
								UnrealEngineString_left_default[0]
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

	static TypeNodeGeneration() {
		return [
			new TypeNodeGeneration<UnrealEngineString_parent_type>(
				{
					definitions:
						UnrealEngineString_schema_definitions,
					...UnrealEngineString_parent_schema,
				},
				(data_from_schema) => {
					return new TypeNodeGenerationResult(() => {
						return create_UnrealEngineString_reference_type(
							data_from_schema.UnrealEngineString
						);
					});
				}
			),
		];
	}
}

export function adjust_unrealengine_prefix(prefix: string): string {
	return adjust_class_name(
		prefix.replace(/^\/Script\//, '').replace(/\.Class$/, '')
	);
}

export function adjust_unrealengine_value(value: string): string {
	return adjust_class_name(value.replace(/^\/Script\/FactoryGame\./, ''));
}

export function flexibly_create_UnrealEngineString_reference_type(
	type_arguments: [TypeNode, TypeNode] | [TypeNode] | undefined
): ts.TypeReferenceNode {
	return ts.factory.createTypeReferenceNode(
		'UnrealEngineString',
		type_arguments
	);
}

const empty_object = {};

export function create_UnrealEngineString_reference_type(
	data_from_schema: UnrealEngineString_type
): TypeReferenceNode {
	const data: Exclude<typeof data_from_schema, true> | typeof empty_object =
		true === data_from_schema ? {} : data_from_schema;

	let left_value: TypeNode = create_literal_node_from_value(
		UnrealEngineString_left_default[0]
	);
	let left_changed = false;
	let right_value: TypeNode = create_type('string');
	let right_changed = false;

	if ('object' === typeof data && 'left' in data) {
		const {left} = data as {
			left: UnrealEngineString_string_or_string_array;
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
		const {right} = data as {right: UnrealEngineString_right};

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

export function conditional_UnrealEngineString_type_arguments(
) : [ConditionalTypeNode, TypeReferenceNode] {
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
	maybe: unknown
): maybe is string | [string, ...string[]] {
	return (
		'string' === typeof maybe
		|| (maybe instanceof Array
			&& maybe.length >= 1
			&& maybe.every((e) => 'string' === typeof e))
	);
}

function is_UnrealEngineString_object(
	maybe: unknown
): maybe is Exclude<UnrealEngineString_type, true> {
	if (!value_is_non_array_object(maybe)) {
		return false;
	}

	const keys = Object.keys(maybe);

	const has_left = 'left' in maybe && is_string_or_string_array(maybe.left);
	const has_right =
		object_has_property(maybe, 'right')
		&& (value_is_non_array_object(maybe.right)
			? 'starts_with' in maybe.right
				&& 1 === Object.keys(maybe.right).length
				&& is_string_or_string_array(maybe.right.starts_with)
			: is_string_or_string_array(maybe.right));

	return (
		(2 === keys.length && has_left && has_right)
		|| (1 === keys.length && (has_left || has_right))
	);
}

export function is_UnrealEngineString_type(
	maybe: unknown
): maybe is UnrealEngineString_type {
	return (
		true === maybe
		|| ('object' === typeof maybe
			&& is_UnrealEngineString_object(maybe))
	);
}
