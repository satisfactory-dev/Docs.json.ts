import {ImportTracker, TypesGenerationFromSchema} from "../TypesGeneration";
import ts from "typescript";
import {adjust_enum_name, create_modifier, create_string_starts_with} from "../TsFactoryWrapper";
import {schema as const_schema} from './constants';

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
}

function enum_to_types(enum_data:[string, ...string[]]) : ts.LiteralTypeNode[] {
	return enum_data.map((value) => {
		return ts.factory.createLiteralTypeNode(
			ts.factory.createStringLiteral(value)
		);
	})
}

export const generators = [
	new TypesGenerationFromSchema<{
		type: string,
		enum: [string, ...string[]]
	}>(
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
		oneOf: (
			{type: string, enum: [string, ...string[]]}
			|{type: string, string_starts_with: string}
			|{type: string, const: string}
		)[]
	}>(
		{
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
		},
		(data, reference_name) => {
			const types:(ts.LiteralTypeNode|ts.TypeReferenceNode)[] = [];

			for (const check of data.oneOf) {
				if ('enum' in check) {
					types.push(...enum_to_types(check.enum));
				} else if ('const' in check) {
					types.push(...enum_to_types([check.const]));
				} else {
					types.push(create_string_starts_with(check.string_starts_with));
				}
			}

			return ts.factory.createTypeAliasDeclaration(
				[
					create_modifier('export'),
				],
				ts.factory.createIdentifier(adjust_enum_name(reference_name)),
				undefined,
				ts.factory.createUnionTypeNode(types)
			);
		},
	),
];
