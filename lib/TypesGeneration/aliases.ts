import {ImportTracker, TypesGenerationFromSchema, TypesGenerationMatchesReferenceName} from "../TypesGeneration";
import {adjust_class_name, create_modifier, create_type} from "../TsFactoryWrapper";
import ts from "typescript";
import {UnrealEngineString_schema, UnrealEngineString_type} from "./validators";
import {TypeNodeGeneration} from "../TypeNodeGeneration";

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
				ts.factory.createTypeReferenceNode(
					'UnrealEngineString',
					[
						ts.factory.createTypeReferenceNode(
							'string_starts_with',
							[ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(
								data.UnrealEngineString.UnrealEngineString_prefix
							))]
						),
						ts.factory.createTypeReferenceNode(
							'StringPassedRegExp',
							[ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(
								data.UnrealEngineString.pattern
							))]
						)
					]
				)
			);
		}
	),
];

