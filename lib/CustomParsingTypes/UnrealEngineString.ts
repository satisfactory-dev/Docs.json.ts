import Ajv from 'ajv/dist/2020';
import ts, {
	StringLiteral,
	TypeNode,
	TypeReferenceNode,
	UnionTypeNode,
} from 'typescript';
import {
	is_string,
	object_has_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

import {
	adjust_class_name,
	create_const_statement,
	create_index_access,
	create_literal,
	create_method_with_type_parameters,
	create_method_without_type_parameters,
	create_modifiers,
	create_property_access,
	create_this_assignment,
	create_throw_if,
	create_type,
	createClass,
	createParameter,
	not,
	parenthesize,
	possibly_create_lazy_union,
	template_expression_from_string,
	type_reference_node, variable,
} from '../TsFactoryWrapper';
import {
	local_ref,
} from '../StringStartsWith';
import {
	entry,
} from '../FilesGenerator';

export const UnrealEngineString_regex = /^([^']+)'(?:"([^"]+)"|([^"]+))'$/;
// eslint-disable-next-line max-len
export const UnrealEngineString_regex_quoted = /^"([^']+)'(?:"([^"]+)"|([^"]+))'"$/;

export const UnrealEngineString_general_regex =
	`/(?:[A-Z-][A-Za-z0-9_-]+/)+(?:_?[A-Z][A-Za-z_0-9-]+\\.[A-Z][A-Za-z_0-9-]+(?:_C)?(?::[A-Z][A-Za-z0-9_]+)?|[A-Z0-9][A-Za-z_]+\\.[A-Z0-9][A-Za-z_]+)`;

export type UnrealEngineString_string_or_string_array =
	| string
	| [string, ...string[]];

export function string_or_string_array_to_node(
	value:
		| string
		| [string, ...string[]],
) : typeof value extends string
	? (ts.LiteralTypeNode & {literal: StringLiteral})
	: UnionTypeNode {
	if (is_string(value)) {
		return create_literal(value);
	}

	return ts.factory.createUnionTypeNode(value.map(e => create_literal(e)));
}

export type UnrealEngineString_right =
	| UnrealEngineString_string_or_string_array
	| {starts_with: UnrealEngineString_string_or_string_array};

export type UnrealEngineString_type =
	| {
			left: UnrealEngineString_string_or_string_array;
			right: UnrealEngineString_right;
			quote_mode?: typeof UnrealEngineString['quote_mode'],
	}
	| {
			left: UnrealEngineString_string_or_string_array;
			quote_mode?: typeof UnrealEngineString['quote_mode'],
	}
	| {
			right: UnrealEngineString_right;
			quote_mode?: typeof UnrealEngineString['quote_mode'],
	}
	| typeof UnrealEngineString['quote_mode']
	| true;

export type UnrealEngineString_parent_type = {
	type: 'string';
	minLength: 1;
	UnrealEngineString: UnrealEngineString_type;
};

export function is_UnrealEngineString_parent(
	maybe: unknown,
): maybe is UnrealEngineString_parent_type {
	return (
		value_is_non_array_object(maybe)
		&& 3 === Object.keys(maybe).length
		&& object_has_property(maybe, 'type')
		&& 'string' === maybe.type
		&& object_has_property(maybe, 'minLength')
		&& 1 === maybe.minLength
		&& object_has_property(maybe, 'UnrealEngineString')
		&& (
			true === maybe.UnrealEngineString
			|| is_UnrealEngineString_object(
				maybe.UnrealEngineString,
			)
			|| (
				is_string(maybe.UnrealEngineString)
				&& [
					'original',
					'new',
					'double_escaped',
					'double',
					'both',
				].includes(maybe.UnrealEngineString)
			)
		)
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
			`^/(?:_?[A-Z][A-Za-z_\\-.]+/)+(?:[A-Z][A-Za-z_\\-.]+/|[A-Z][A-Za-z_\\-.]+\\.[A-Z][A-Za-z_\\-]+)$`,
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
							'UnrealEngineString_right_starts_with',
						),
					},
				},
			]}},
		},
	]},
	UnrealEngineString_quote_mode: {
		type: 'string',
		enum: [
			'original',
			'both',
			'double_escaped',
			'double',
			'new',
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
					$ref: local_ref('UnrealEngineString_left'),
				},
				right: {
					$ref: local_ref('UnrealEngineString_right'),
				},
				quote_mode: {
					$ref: local_ref('UnrealEngineString_quote_mode'),
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
				quote_mode: {
					$ref: local_ref('UnrealEngineString_quote_mode'),
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
				quote_mode: {
					$ref: local_ref('UnrealEngineString_quote_mode'),
				},
			},
		},
		{
			$ref: local_ref('UnrealEngineString_quote_mode'),
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
	// eslint-disable-next-line max-len
	'(?:_?[A-Z0-9][A-Za-z0-9_.]+/)*[A-Z0-9][A-Za-z_.0-9-]+(?::[A-Z0-9][A-Za-z0-9]+)?';

export class UnrealEngineString {
	private static already_configured:WeakSet<Ajv> = new WeakSet<Ajv>();

	// eslint-disable-next-line max-len
	static quote_mode:'both'|'original'|'new'|'double_escaped'|'double' = 'both';

	static ajv_macro_generator(inner: boolean) {
		return (data_from_schema: UnrealEngineString_type) => {
			const data:
				| Exclude<typeof data_from_schema, true>
				| empty_object =
				(
					true === data_from_schema
					|| is_string(data_from_schema)
				) ? {} : data_from_schema;

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
										}`,
									)
									.join('|')})`,
						]
						).join('|')})`
					: UnrealEngineString_general_regex;

			let regex = `(?:(?:${left_value})'(?:${right_value}|"${right_value}")'|"(?:${left_value})'${right_value}'"|\\\\"(?:${left_value})'${right_value}'\\\\")`;

			let quote_mode = this.quote_mode;

			if (is_string(data_from_schema)) {
				quote_mode = data_from_schema;
			} else if ('quote_mode' in data && undefined !== data.quote_mode) {
				quote_mode = data.quote_mode;
			}

			if ('original' === quote_mode) {
				regex = `(?:(?:${left_value})'(?:${right_value}|"${right_value}")')`;
			} else if ('new' === quote_mode) {
				regex = `(?:"(?:${left_value})'${right_value}'"|\\\\"(?:${left_value})'${right_value}'\\\\")`;
			} else if ('double_escaped' === quote_mode) {
				regex = `(?:\\\\"(?:${left_value})'${right_value}'\\\\")`;
			} else if ('double' === quote_mode) {
				regex = `(?:"(?:${left_value})'${right_value}'")`;
			}

			return {
				pattern: inner ? regex : `^${regex}$`,
			};
		};
	}

	static configure_ajv(ajv: Ajv) {
		if (this.already_configured.has(ajv)) {
			return;
		}

		this.already_configured.add(ajv);

		ajv.addKeyword({
			keyword: 'UnrealEngineString',
			type: 'string',
			metaSchema: {
				$defs: UnrealEngineString_schema_definitions,
				...UnrealEngineString_schema,
			},
			macro: this.ajv_macro_generator(false),
		});
	}

	static CustomGenerators() : [entry, ...entry[]] {
		const UnrealEngineString_class = createClass(
			'UnrealEngineString',
			[
				ts.factory.createPropertyDeclaration(
					create_modifiers('readonly'),
					'left',
					undefined,
					ts.factory.createTypeReferenceNode('left'),
					undefined,
				),
				ts.factory.createPropertyDeclaration(
					create_modifiers('readonly'),
					'right',
					undefined,
					ts.factory.createTypeReferenceNode('right'),
					undefined,
				),
				create_method_without_type_parameters(
					'constructor',
					['protected'],
					[
						createParameter(
							'left',
							ts.factory.createTypeReferenceNode('left'),
						),
						createParameter(
							'right',
							ts.factory.createTypeReferenceNode('right'),
						),
					],
					[
						create_this_assignment('left', 'left'),
						create_this_assignment('right', 'right'),
					],
				),
				create_method_with_type_parameters(
					'fromString',
					[
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'left',
							create_type('string'),
							create_type('string'),
						),
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'right',
							create_type('string'),
							create_type('string'),
						),
					],
					[
						createParameter(
							'value',
							create_type('string'),
						),
					],
					[
						create_const_statement(variable(
							'result',
							ts.factory.createCallExpression(
								create_property_access(
									ts.factory.createRegularExpressionLiteral(
										UnrealEngineString_regex.toString(),
									),
									'exec',
								),
								undefined,
								[
									ts.factory.createIdentifier('value'),
								],
							),
						)),
						create_throw_if(
							'Error',
							not(ts.factory.createIdentifier('result')),
							[
								template_expression_from_string(
									'`Not an UnrealEngineString (${value})`',
								),
							],
						),
						ts.factory.createReturnStatement(
							ts.factory.createNewExpression(
								ts.factory.createIdentifier(
									'UnrealEngineString',
								),
								[
									ts.factory.createTypeReferenceNode('left'),
									ts.factory.createTypeReferenceNode(
										'right',
									),
								],
								[
									ts.factory.createAsExpression(
										create_index_access('result', 1),
										ts.factory.createTypeReferenceNode(
											'left',
										),
									),
									ts.factory.createAsExpression(
										parenthesize(
											ts.factory.createLogicalOr(
												create_index_access(
													'result',
													2,
												),
												create_index_access(
													'result',
													3,
												),
											),
										),
										ts.factory.createTypeReferenceNode(
											'right',
										),
									),
								],
							),
						),
					],
					['static'],
					ts.factory.createTypeReferenceNode(
						'UnrealEngineString',
						[
							ts.factory.createTypeReferenceNode('left'),
							ts.factory.createTypeReferenceNode('right'),
						],
					),
				),
			],
			{
				modifiers: ['export'],
			},
			[
				ts.factory.createTypeParameterDeclaration(
					undefined,
					'left',
					create_type('string'),
					create_type('string'),
				),
				ts.factory.createTypeParameterDeclaration(
					undefined,
					'right',
					create_type('string'),
					create_type('string'),
				),
			],
		);
		return [
			{
				file: 'utils/validators.ts',
				node: UnrealEngineString_class,
			},
		];
	}
}

export function adjust_unrealengine_value(value: string): string {
	return adjust_class_name(value.replace(/^\/Script\/FactoryGame\./, ''));
}

export function flexibly_create_UnrealEngineString_reference_type(
	type_arguments: [TypeNode, TypeNode] | [TypeNode] | undefined,
): ts.TypeReferenceNode {
	return type_reference_node(
		'UnrealEngineString',
		...(type_arguments || []),
	);
}

type empty_object = Record<never, never>;

export function UnrealEngineString_reference_type(
	data_from_schema: UnrealEngineString_type,
): TypeReferenceNode {
	const data: Exclude<typeof data_from_schema, true> | empty_object =
		true === data_from_schema ? {} : data_from_schema;

	let left_value: TypeNode = create_literal(
		UnrealEngineString_left_default[0],
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
					starts_with instanceof Array ? starts_with : [starts_with],
				).values(),
			];

			if (right_options.length >= 1) {
				right_value = type_reference_node(
					'StringStartsWith',
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
			: undefined,
	);
}

function is_string_or_string_array(
	maybe: unknown,
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
	maybe: unknown,
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
	const has_quote_mode = (
		'quote_mode' in maybe
		&& is_string(maybe.quote_mode)
		&& [
			'original',
			'double_escaped',
			'double',
			'both',
			'new',
		].includes(maybe.quote_mode)
	);

	return (
		(3 === keys.length && has_left && has_right && has_quote_mode)
		|| (2 === keys.length && has_left && has_right)
		|| (2 === keys.length && has_quote_mode && (has_left || has_right))
		|| (1 === keys.length && (has_left || has_right))
	);
}
