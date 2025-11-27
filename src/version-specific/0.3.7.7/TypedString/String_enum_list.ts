import type {
	Ajv2020 as Ajv,
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	PositiveInteger,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	PositiveIntegerGuard,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	ArrayLiteralExpression,
	LiteralTypeNode,
	RestedTupleTypeNode,
	StringLiteral,
	TupleTypeNode,
	UnionTypeNode,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';
import {
	factory,
	StringTupleToLiteralTypeNodeTuple,
} from '@signpostmarv/json-schema-typescript-codegen/typescript-overrides';

export type String_enum_list_type = {
	type: 'array',
	minItems: PositiveInteger<number>,
	uniqueItems: true,
	items: {
		type: 'string',
		enum: readonly [string, ...string[]],
	},
};

export type String_enum_list_properties = {
	type: 'object',
	required: readonly [
		'type',
		'minItems',
		'uniqueItems',
		'items',
	],
	properties: {
		type: {
			type: 'string',
			const: 'array',
		},
		minItems: {
			type: 'integer',
			minimum: 1,
		},
		uniqueItems: {
			type: 'boolean',
			const: true,
		},
		items: {
			type: 'object',
			required: readonly ['type', 'enum'],
			properties: {
				type: {
					type: 'string',
					const: 'string',
				},
				enum: {
					type: 'array',
					minItems: 1,
					uniqueItems: true,
					items: {
						type: 'string',
						minLength: 1,
					},
				},
			},
		},
	},
};

export type String_enum_list_DataTo = ArrayLiteralExpression<
	StringLiteral,
	[StringLiteral, ...StringLiteral[]],
	true
>;

export type String_enum_list_SchemaTo = (
	| RestedTupleTypeNode<UnionTypeNode<[
		LiteralTypeNode<StringLiteral>,
		LiteralTypeNode<StringLiteral>,
		...LiteralTypeNode<StringLiteral>[],
	]>>
	| TupleTypeNode<
		LiteralTypeNode<StringLiteral>,
		[LiteralTypeNode<StringLiteral>]
	>
);

export type String_enum_list_TypeGenerator = undefined;

export function String_enum_list_compile_validator(
	ajv: Ajv,
): ValidateFunction<String_enum_list_type> {
	return ajv.compile<
		String_enum_list_type
	>(
		{
			type: 'object',
			additionalProperties: false,
			required: [
				'type',
				'minItems',
				'uniqueItems',
				'items',
			],
			properties: {
				type: {
					type: 'string',
					const: 'array',
				},
				minItems: {
					type: 'integer',
					minimum: 1,
				},
				uniqueItems: {
					type: 'boolean',
					const: true,
				},
				items: {
					type: 'object',
					required: ['type', 'enum'],
					properties: {
						type: {
							type: 'string',
							const: 'string',
						},
						enum: {
							type: 'array',
							minItems: 1,
							items: {
								type: 'string',
								minLength: 1,
							},
						},
					},
				},
			},
		},
	);
}

export function String_enum_list_generate_typescript_data(
	data: string,
	coerced_schema: String_enum_list_type,
): String_enum_list_DataTo {
	const parts = data
		.substring(1, data.length - 1)
		.split(',');

	const matches = parts
		.map((e) => (
			/^"[^"]+"/.test(e)
				? e.substring(1, e.length - 1)
				: e
		))
		.filter((maybe) => coerced_schema.items.enum.includes(maybe));

	if (parts.length !== matches.length) {
		throw new TypeError('Data contains unsupported elements!');
	}

	const sanity_check: (
		String_enum_list_DataTo
	) = factory.createArrayLiteralExpression(
		matches
			.filter((maybe) => undefined !== maybe)
			.map((value) => factory.createStringLiteral(value)),
	);

	return sanity_check;
}

export function String_enum_list_generate_typescript_type(
	schema: String_enum_list_type,
): String_enum_list_SchemaTo {
	function enum_generator(
		value: [string, string, ...string[]],
	): UnionTypeNode<[
		LiteralTypeNode<StringLiteral>,
		LiteralTypeNode<StringLiteral>,
		...LiteralTypeNode<StringLiteral>[],
	]>;
	function enum_generator(
		value: [string],
	): LiteralTypeNode<StringLiteral>;
	function enum_generator(
		value: [string, ...string[]],
	): (
		| UnionTypeNode<[
			LiteralTypeNode<StringLiteral>,
			LiteralTypeNode<StringLiteral>,
			...LiteralTypeNode<StringLiteral>[],
		]>
		| LiteralTypeNode<StringLiteral>
	) {
		if (1 === value.length) {
			return factory.createLiteralTypeNode(
				factory.createStringLiteral(value[0]),
			);
		}

		return factory.createUnionTypeNode(
			StringTupleToLiteralTypeNodeTuple(
				value as [string, string, ...string[]],
			),
		);
	}

	if (schema.items.enum.length > 1) {
		const coerced_enum = (
			schema.items.enum
		) as [
			string,
			string,
			...string[],
		];

		const a = enum_generator(coerced_enum);
		const b = factory.createRestTypeNode(
			factory.createArrayTypeNode(
				enum_generator(coerced_enum),
			),
		);

		const sanity_check: RestedTupleTypeNode<
			UnionTypeNode<[
				LiteralTypeNode<StringLiteral>,
				LiteralTypeNode<StringLiteral>,
				...LiteralTypeNode<StringLiteral>[],
			]>
		> = factory.createTupleTypeNode([
			a,
			b,
		]);

		return sanity_check;
	}

	const coerced_enum = (
		schema.items.enum
	) as [
		string,
	];

	const sanity_check: TupleTypeNode<
		LiteralTypeNode<StringLiteral>,
		[LiteralTypeNode<StringLiteral>]
	> = factory.createTupleTypeNode([
		enum_generator(coerced_enum),
	]);

	return sanity_check;
}

export function String_enum_list_ajv_macro(
	schema: String_enum_list_type,
	quoted: boolean,
) {
	const items = [...schema.items.enum];

	if (quoted) {
		items.push(...items.map((value) => `"${value}"`));
	}

	const regex = `${
		items
			.map((value) => RegExp.escape(value)).join('|')
	}`;

	return Object.freeze({
		pattern: `^\\((${
			regex
		})(?:,(${
			regex
		}))*\\)$`,
	});
}

export function String_enum_list_generate_schema_definition(
): Readonly<String_enum_list_properties> {
	return Object.freeze({
		type: 'object',
		required: [
			'type',
			'minItems',
			'uniqueItems',
			'items',
		],
		properties: {
			type: {
				type: 'string',
				const: 'array',
			},
			minItems: {
				type: 'integer',
				minimum: 1,
			},
			uniqueItems: {
				type: 'boolean',
				const: true,
			},
			items: {
				type: 'object',
				required: ['type', 'enum'],
				properties: {
					type: {
						type: 'string',
						const: 'string',
					},
					enum: {
						type: 'array',
						minItems: 1,
						uniqueItems: true,
						items: {
							type: 'string',
							minLength: 1,
						},
					},
				},
			},
		},
	} as const);
}

export function String_enum_list_generate_type_definition(
): Readonly<String_enum_list_type> {
	return Object.freeze({
		type: 'array',
		minItems: PositiveIntegerGuard(1),
		uniqueItems: true,
		items: {
			type: 'string',
			enum: [' '],
		},
	} as const);
}
