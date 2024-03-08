import {ImportTracker, TypesGenerationFromSchema, TypesGenerationMatchesReferenceName} from "../TypesGeneration";
import {
	adjust_class_name,
	create_modifier,
	create_type,
	create_UnrealEngineString_reference_type
} from "../TsFactoryWrapper";
import ts from "typescript";
import {UnrealEngineString_schema, UnrealEngineString_type} from "./validators";
import {TypeNodeGeneration, TypeNodeGenerationResult} from "../TypeNodeGeneration";

export const target_files = {
	'mScannerDisplayText': 'common/aliases.ts',
	'ItemClass--prop': 'common/aliases.ts',
	'mOutputInventoryHandlerData': 'common/aliases.ts',
};

ImportTracker.set_imports('common/aliases.ts', [
	{
		from: '../utils/validators',
		import_these: [
			'UnrealEngineString',
			'string_starts_with',
			'StringPassedRegExp',
		]
	},
	{
		from: './constants',
		import_these: [
			'empty_object'
		],
	},
]);

const string_aliases:(keyof typeof target_files)[] = [
	'mScannerDisplayText',
];

export const generators = [
	new TypesGenerationMatchesReferenceName<{type: 'string'}, keyof typeof target_files>(
		string_aliases,
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				adjust_class_name(reference_name),
				undefined,
				create_type('string')
			);
		}
	),
	new TypesGenerationMatchesReferenceName<{'$ref': string}, 'mOutputInventoryHandlerData'>(
		['mOutputInventoryHandlerData'],
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				adjust_class_name(reference_name),
				undefined,
				ts.factory.createTypeReferenceNode(adjust_class_name(data['$ref'].substring(14)))
			);
		}
	),
	new TypesGenerationFromSchema<UnrealEngineString_type>(
		UnrealEngineString_schema,
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				adjust_class_name(reference_name),
				undefined,
				create_UnrealEngineString_reference_type(data.UnrealEngineString)
			);
		}
	),
];

export const type_node_generators = [
	new TypeNodeGeneration<{'$ref': '#/definitions/mScannerDisplayText'}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				'$ref': {
					type: 'string',
					pattern: '^#/definitions/(mScannerDisplayText)$'
				}
			}
		},
		(data) => {
			const reference_name = adjust_class_name(data['$ref'].substring(14));

			return new TypeNodeGenerationResult(
				() => ts.factory.createTypeReferenceNode(reference_name),
				{
					'common/aliases': [reference_name]
				}
			);
		}
	),
]
