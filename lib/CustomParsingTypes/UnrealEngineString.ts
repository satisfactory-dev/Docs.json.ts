import Ajv from 'ajv/dist/2020';
import ts, {
	ConditionalTypeNode,
	TypeNode,
	TypeReferenceNode,
} from 'typescript';
import {
	adjust_class_name,
	create_const_statement,
	create_index_access,
	create_literal,
	create_method_with_type_parameters,
	create_method_without_type_parameters,
	create_modifier,
	create_new_RegExp,
	create_property_access,
	create_this_assignment,
	create_throw_if,
	create_type,
	create_union,
	createClass,
	createParameter,
	createPropertySignature,
	possibly_create_lazy_union,
	variable,
	not,
	type_reference_node,
	template_expression_from_string,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
	UnexpectedlyUnknown,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	TypesGenerationFromSchema,
} from '../TypesGeneration';
import {
	object_has_property,
	value_is_non_array_object,
} from './CustomPairingTypes';
import {
	is_string,
	local_ref,
} from '../StringStartsWith';

const already_configured = new WeakSet<Ajv>();

export const UnrealEngineString_regex = /^([^']+)'(?:"([^"]+)"|([^"]+))'$/;

export const UnrealEngineString_general_regex =
	`/(?:[A-Z-][A-Za-z0-9_-]+/)+(?:[A-Z][A-Za-z_0-9-]+\\.[A-Z][A-Za-z_0-9-]+(?:_C)?$(?::[A-Z][A-Za-z0-9_]+)?|[A-Z][A-Za-z_]+\\.[A-Z][A-Za-z_]+)`;

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

export function check_UnrealEngineString_parent(
	maybe:unknown,
	require_left: boolean = false
) : (
	typeof require_left extends true
		? (UnrealEngineString_parent_type & {
			UnrealEngineString: {
				left: UnrealEngineString_string_or_string_array,
			}
		})
		: UnrealEngineString_parent_type
) {
	if (!is_UnrealEngineString_parent(maybe)) {
		throw new UnexpectedlyUnknown(
			maybe,
			'Not an UnrealEngineString_parent object!'
		);
	}

	return maybe;
}

export function check_UnrealEngineString_has_left_string(
	maybe: UnrealEngineString_type
) : UnrealEngineString_type & {
	left: string,
} {
	if (
		!object_has_property(
			maybe,
			'left',
			is_string
		)
	) {
		throw new Error('UnrealEngineString does not have left field!');
	}

	return maybe;
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
				$ref: local_ref('UnrealEngineString_left_string'),
			},
			{
				type: 'array',
				minItems: 1,
				items: {
					$ref: local_ref('UnrealEngineString_left_string'),
				},
			},
		],
	},
	UnrealEngineString_right_starts_with: {
		type: 'string',
		pattern:
			`^/(?:[A-Z][A-Za-z_\\-.]+/)+(?:[A-Z][A-Za-z_\\-.]+/|[A-Z][A-Za-z_\\-.]+\\.[A-Z][A-Za-z_\\-]+)$`,
	},
	UnrealEngineString_right: {oneOf: [
		{
			$ref: local_ref('UnrealEngineString_right_string'),
		},
		{
			type: 'array',
			minItems: 1,
			items: {
				$ref: local_ref('UnrealEngineString_right_string'),
			},
		},
		{
			type: 'object',
			required: ['starts_with'],
			additionalProperties: false,
			properties: {starts_with: {oneOf: [
				{
					$ref: local_ref('UnrealEngineString_right_starts_with'),
				},
				{
					type: 'array',
					minItems: 1,
					items: {
						$ref: local_ref(
							'UnrealEngineString_right_starts_with'
						),
					},
				},
			]}},
		},
	]},
};

export const UnrealEngineString_schema = {
	oneOf: [
		{
			type: 'object',
			required: ['left', 'right'],
			additionalProperties: false,
			properties: {
				left: {
					$ref: local_ref('UnrealEngineString_left'),
				},
				right: {
					$ref: local_ref('UnrealEngineString_right'),
				},
			},
		},
		{
			type: 'object',
			required: ['left'],
			additionalProperties: false,
			properties: {
				left: {
					$ref: local_ref('UnrealEngineString_left'),
				},
			},
		},
		{
			type: 'object',
			required: ['right'],
			additionalProperties: false,
			properties: {
				right: {
					$ref: local_ref('UnrealEngineString_right'),
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

export const UnrealEngineString_left_default = [
	'/Script/Engine.BlueprintGeneratedClass',
];
const right_value_starts_with_suffix =
	'(?:[A-Z][A-Za-z0-9_.]+/)*[A-Z][A-Za-z_.0-9-]+(?::[A-Z][A-Za-z0-9]+)?';

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
							is_string(data.right)
								? data.right
								: `(?:${(data.right
									.starts_with instanceof Array
									? data.right.starts_with
									: [data.right.starts_with]
											)
									.map(
										(starts_with) => `${
											starts_with
										}${
											right_value_starts_with_suffix
										}`
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
						UnrealEngineString.type_from_parent(data)
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
							type_reference_node('prefix'),
							undefined
						),
						ts.factory.createPropertyDeclaration(
							[create_modifier('readonly')],
							'value',
							undefined,
							type_reference_node('value'),
							undefined
						),
						create_method_without_type_parameters(
							'constructor',
							[
								createParameter(
									'prefix',
									type_reference_node(
										'prefix'
									)
								),
								createParameter(
									'value',
									type_reference_node('value')
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
									type_reference_node(
										'pattern'
									)
								),
								createParameter(
									ts.factory.createObjectBindingPattern([
										ts.factory.createBindingElement(
											undefined,
											undefined,
											'not_an_UnrealEngineString_string',
											template_expression_from_string(
												`\`UnrealEngineString value expected, "\${
													unchecked_string
												}" found\``,
											)
										),
										ts.factory.createBindingElement(
											undefined,
											undefined,
											'prefix_check_failed',
											template_expression_from_string(
												`\`UnrealEngineString prefix expected to start with \${
													prefix_check
												}, not found on "\${
													unchecked_string
												}"\``,
											)
										),
										ts.factory.createBindingElement(
											undefined,
											undefined,
											'value_check_failed',
											template_expression_from_string(
												`\`UnrealEngineString suffix expected to match \${
													pattern
												}, not found on "\${
													unchecked_string
												}"\``
											)
										),
									]),
									ts.factory.createTypeLiteralNode(
										[
											'not_an_UnrealEngineString_string',
											'prefix_check_failed',
											'value_check_failed',
										].map((object_key) => {
											return createPropertySignature(
												object_key,
												create_type('string')
											);
										})
									)
								),
							],
							[
								create_const_statement(variable(
									'result',
									ts.factory.createCallExpression(
										create_property_access(
											create_new_RegExp(
												UnrealEngineString_regex
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
								)),
								create_throw_if(
									'Error',
									not(
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
										not(ts.factory.createCallExpression(
											create_property_access(
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
										))
									),
									[
										ts.factory.createIdentifier(
											'prefix_check_failed'
										),
									]
								),
								create_throw_if(
									'Error',
									not(
										ts.factory.createCallExpression(
											create_property_access(
												create_new_RegExp(
													'pattern'
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
										conditional_type_arguments(),
										[
											create_index_access('result', 1),
											ts.factory.createAsExpression(
												create_index_access(
													'result',
													2
												),
												type_reference_node(
													'StringPassedRegExp',
													type_reference_node(
														'pattern'
													),
													type_reference_node(
														'value'
													),
												)
											),
										]
									)
								),
							],
							['static'],
							conditional_UnrealEngineString_type_reference()
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
								type_reference_node(
									'string_starts_with',
									create_type('string')
								)
							),
							create_literal(
								UnrealEngineString_left_default[0]
							)
						),
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'value',
							create_union(
								create_type('string'),
								type_reference_node(
									'string_starts_with',
									create_type('string')
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
						return UnrealEngineString.type_from_parent(
							data_from_schema
						);
					});
				}
			),
		];
	}

	static type_from_parent(
		maybe:unknown
	) : TypeReferenceNode {
		return UnrealEngineString_reference_type(
			check_UnrealEngineString_parent(maybe).UnrealEngineString
		);
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
	return type_reference_node(
		'UnrealEngineString',
		...(type_arguments || [])
	);
}

const empty_object = {};

export function UnrealEngineString_reference_type(
	data_from_schema: UnrealEngineString_type
): TypeReferenceNode {
	const data: Exclude<typeof data_from_schema, true> | typeof empty_object =
		true === data_from_schema ? {} : data_from_schema;

	let left_value: TypeNode = create_literal(
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
			left_value = create_literal(left_options[0]);
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
				right_value = type_reference_node(
					'string_starts_with',
					(
						1 === right_options.length
							? create_literal(right_options[0])
							: possibly_create_lazy_union(right_options)
					),
				);
			}
		} else {
			const right_options = [
				...new Set(right instanceof Array ? right : [right]).values(),
			];

			if (right_options.length >= 1) {
				right_value =
					1 === right_options.length
						? create_literal(right_options[0])
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

function conditional_type_arguments(
) : [ConditionalTypeNode, TypeReferenceNode] {
	return [
		ts.factory.createConditionalTypeNode(
			ts.factory.createTypeQueryNode(
				ts.factory.createIdentifier('prefix_check')
			),
			create_type('string'),
			type_reference_node(
				'string_starts_with',
				ts.factory.createTypeQueryNode(
					ts.factory.createIdentifier('prefix_check')
				),
			),
			create_type('string')
		),
		type_reference_node(
			'StringPassedRegExp',
			type_reference_node('pattern'),
			type_reference_node('value'),
		),
	];
}

export function conditional_UnrealEngineString_type_reference(
): ts.TypeReferenceNode {
	return flexibly_create_UnrealEngineString_reference_type(
		conditional_type_arguments()
	);
}

function is_string_or_string_array(
	maybe: unknown
): maybe is string | [string, ...string[]] {
	return (
		is_string(maybe)
		|| (maybe instanceof Array
			&& maybe.length >= 1
			&& maybe.every(is_string)
		)
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
