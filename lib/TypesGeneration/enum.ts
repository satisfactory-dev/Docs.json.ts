import {ImportTracker, TypesGenerationFromSchema} from "../TypesGeneration";
import ts from "typescript";
import {adjust_enum_name, create_modifier, create_string_starts_with, createParameter} from "../TsFactoryWrapper";
import {schema as const_schema} from './constants';
import {TypeNodeGeneration, TypeNodeGenerationResult} from "../TypeNodeGeneration";
import update8_schema from '../../schema/update8.schema.json' assert {type: 'json'};

export const target_files = Object.entries({
	'common/enum.ts': [
		'boolean',
		'boolean-extended',
		'mStackSize',
		'mForm',
		'mScannableType',
		'mEventType',
		'mFreightCargoType',
		'MaterialSlotName',
		'weaponState',
		'mCrosshairMaterial',
		'mClassToScanFor',
	],
}).reduce((was, is) => {
	for (const reference of is[1]) {
		was[reference] = is[0];
	}

	return was;
}, {} as {[key: string]: string});

ImportTracker.set_imports('common/enum.ts', [
	{
		import_these: [
			'string_starts_with',
		],
		from: '../utils/validators',
	},
]);

const schema = {
	type: 'object',
	required: [
		'type',
		'enum',
	],
	additionalProperties: false,
	properties: {
		type: {type: 'string', 'const': 'string'},
		enum: {type: 'array', minItems: 1, items: {type: 'string'}}
	},
};

declare type schema_type = {
	type: string,
	enum: [string, ...string[]]
};

const multi_enum_schema = {
	type: 'object',
	required: [
		'oneOf',
	],
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
						required: [
							'type',
							'string_starts_with',
						],
						additionalProperties: false,
						properties: {
							type: {type: 'string', const: 'string'},
							string_starts_with: {type: 'string', minLength: 1},
						},
					},
				]
			},
		},
	},
};

declare type multi_enum_schema_type =
	| schema_type
	| { type: 'string', const: string }
	| {type: 'string', string_starts_with: string}
;

function enum_to_types(enum_data:[string, ...string[]]) : ts.LiteralTypeNode[] {
	return enum_data.map((value) => {
		return ts.factory.createLiteralTypeNode(
			ts.factory.createStringLiteral(value)
		);
	})
}

function create_union_types(data:[multi_enum_schema_type, ...multi_enum_schema_type[]]):ts.UnionTypeNode
{
	const types:(ts.LiteralTypeNode|ts.TypeReferenceNode)[] = [];

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
			return ts.factory.createTypeAliasDeclaration(
				[
					create_modifier('export'),
				],
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
		oneOf: [multi_enum_schema_type, ...multi_enum_schema_type[]]
	}>(
		multi_enum_schema,
		(data, reference_name) => {

			return ts.factory.createTypeAliasDeclaration(
				[
					create_modifier('export'),
				],
				ts.factory.createIdentifier(adjust_enum_name(reference_name)),
				undefined,
				create_union_types(data.oneOf)
			);
		},
	),
];

export const type_node_generators = [
	new TypeNodeGeneration<multi_enum_schema_type>(
		schema,
		(property) => {
			return new TypeNodeGenerationResult(
				() => create_union_types([property]),
			);
		}
	),
	new TypeNodeGeneration<{'$ref': '#/definitions/boolean'|'#/definitions/boolean-extended'}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				'$ref': {
					oneOf: [
						{type: 'string', const: '#/definitions/boolean'},
						{type: 'string', const: '#/definitions/boolean-extended'},
					],
				},
			},
		},
		(property) => {
			const type_name = adjust_enum_name(property['$ref'].substring(14));

			return new TypeNodeGenerationResult(
				() => ts.factory.createTypeReferenceNode(type_name),
				{
					'common/enum': [
						type_name,
					]
				}
			);
		},
	)
];
