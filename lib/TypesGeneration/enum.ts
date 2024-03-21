import {
	TypesGenerationFromSchema,
} from '../TypesGeneration';
import ts from 'typescript';
import {
	adjust_enum_name,
	create_literal,
	create_modifier,
	create_string_starts_with,
	create_type,
	create_union,
	possibly_create_lazy_union,
} from '../TsFactoryWrapper';
import {
	schema as const_schema,
} from './constants';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	enum_schema_type,
} from '../CustomParsingTypes/TypedStringEnum';

export const target_files = {
	boolean: 'common/enum.ts',
	'boolean-extended': 'common/enum.ts',
	mStackSize: 'common/enum.ts',
	mForm: 'common/enum.ts',
	mScannableType: 'common/enum.ts',
	mEventType: 'common/enum.ts',
	mFreightCargoType: 'common/enum.ts',
	MaterialSlotName: 'common/enum.ts',
	weaponState: 'common/enum.ts',
	mCrosshairMaterial: 'common/enum.ts',
	mClassToScanFor: 'common/enum.ts',
};

declare type supported_definitions = keyof {
	[pseudo_key in keyof typeof target_files as pseudo_key extends string
		? `#/definitions/${pseudo_key}`
		: never]: string;
};

const schema = {
	type: 'object',
	required: ['type', 'enum'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		enum: {type: 'array', minItems: 1, items: {type: 'string'}},
	},
};

declare type schema_type = enum_schema_type;

const multi_enum_schema = {
	type: 'object',
	required: ['oneOf'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		oneOf: {
			type: 'array',
			minItems: 1,
			items: {
				anyOf: [
					schema,
					const_schema,
					{
						type: 'object',
						required: ['type', 'string_starts_with'],
						additionalProperties: false,
						properties: {
							type: {type: 'string', const: 'string'},
							string_starts_with: {type: 'string', minLength: 1},
						},
					},
				],
			},
		},
	},
};

declare type multi_enum_schema_type =
	| schema_type
	| {type: 'string'; const: string}
	| {type: 'string'; string_starts_with: string};

function enum_to_types(
	enum_data: [string, ...string[]]
): ts.LiteralTypeNode[] {
	return enum_data.map((value) => {
		return ts.factory.createLiteralTypeNode(
			ts.factory.createStringLiteral(value)
		);
	});
}

function create_union_types(
	data: [multi_enum_schema_type, ...multi_enum_schema_type[]]
): ts.UnionTypeNode {
	const types: (ts.LiteralTypeNode | ts.TypeReferenceNode)[] = [];

	for (const check of data) {
		if ('enum' in check) {
			types.push(...enum_to_types(check.enum));
		} else if ('const' in check) {
			types.push(...enum_to_types([check.const]));
		} else {
			types.push(create_string_starts_with(check.string_starts_with));
		}
	}

	return ts.factory.createUnionTypeNode(types);
}

export const generators = [
	new TypesGenerationFromSchema<schema_type>(
		schema,
		(data, reference_name) => {
			if (reference_name.startsWith('boolean')) {
				return ts.factory.createTypeAliasDeclaration(
					[create_modifier('export')],
					adjust_enum_name(reference_name),
					undefined,
					!reference_name.endsWith('-extended')
						? create_type('boolean')
						: create_union(
							create_type('boolean'),
							create_type('undefined')
						)
				);
			}

			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				ts.factory.createIdentifier(adjust_enum_name(reference_name)),
				undefined,
				ts.factory.createUnionTypeNode(
					data.enum.map((value) => {
						return ts.factory.createLiteralTypeNode(
							ts.factory.createStringLiteral(value)
						);
					})
				)
			);
		}
	),
	new TypesGenerationFromSchema<{
		oneOf: [multi_enum_schema_type, ...multi_enum_schema_type[]];
	}>(multi_enum_schema, (data, reference_name) => {
		return ts.factory.createTypeAliasDeclaration(
			[create_modifier('export')],
			ts.factory.createIdentifier(adjust_enum_name(reference_name)),
			undefined,
			create_union_types(data.oneOf)
		);
	}),
];

export const type_node_generators = [
	new TypeNodeGeneration<multi_enum_schema_type>(schema, (property) => {
		return new TypeNodeGenerationResult(() =>
			create_union_types([property])
		);
	}),
	new TypeNodeGeneration<enum_schema_type>(
		{
			type: 'object',
			required: ['type', 'enum'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				enum: {
					type: 'array',
					minItems: 1,
					items: {type: 'string'},
				},
			},
		},
		(data) => {
			return new TypeNodeGenerationResult(() =>
				possibly_create_lazy_union(data.enum)
			);
		}
	),
	new TypeNodeGeneration<{
		$ref: '#/definitions/boolean' | '#/definitions/boolean-extended';
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					oneOf: [
						{type: 'string', const: '#/definitions/boolean'},
						{
							type: 'string',
							const: '#/definitions/boolean-extended',
						},
					],
				},
			},
		},
		(property) => {
			const type_name = adjust_enum_name(property['$ref'].substring(14));

			return new TypeNodeGenerationResult(
				() => ts.factory.createTypeReferenceNode(type_name),
				{
					'common/enum': [type_name],
				}
			);
		}
	),
	new TypeNodeGeneration<{
		$ref: supported_definitions;
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					oneOf: Object.keys(target_files).map((enum_name) => {
						return {
							type: 'string',
							const: `#/definitions/${adjust_enum_name(enum_name)}`,
						};
					}),
				},
			},
		},
		(property) => {
			const reference_name = property['$ref'].substring(14);

			if ('#/definitions/boolean' === property['$ref']) {
				return new TypeNodeGenerationResult(() => {
					return create_type('boolean');
				});
			} else if ('#/definitions/boolean-extended' === property['$ref']) {
				return new TypeNodeGenerationResult(() => {
					return create_union(
						create_type('boolean'),
						create_literal(null)
					);
				});
			}

			return new TypeNodeGenerationResult(
				() => {
					return ts.factory.createTypeReferenceNode(reference_name);
				},
				{
					'common/enum': [reference_name],
				}
			);
		}
	),
];
