import {
	TypesGenerationMatchesReferenceName,
} from '../TypesGeneration';
import {
	adjust_class_name,
	create_literal_node_from_value,
	create_modifier,
	create_object_type_alias,
	create_type,
	create_union,
} from '../TsFactoryWrapper';
import ts from 'typescript';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	UnrealEngineStringReference,
} from '../CustomParsingTypes/UnrealEngineStringReference';

export const target_files = {
	mScannerDisplayText: 'common/aliases.ts',
	'ItemClass--prop': 'common/aliases.ts',
	mOutputInventoryHandlerData: 'common/aliases.ts',
	'SpecifiedColor--semi-native': 'classes/CoreUObject/FGSchematic.ts',
};

const string_aliases: (keyof typeof target_files)[] = ['mScannerDisplayText'];

export const generators = [
	new TypesGenerationMatchesReferenceName<
		{type: 'string'},
		keyof typeof target_files
	>(string_aliases, (data, reference_name) => {
		return ts.factory.createTypeAliasDeclaration(
			[create_modifier('export')],
			adjust_class_name(reference_name),
			undefined,
			create_type('string')
		);
	}),
	new TypesGenerationMatchesReferenceName<
		{$ref: string},
		'mOutputInventoryHandlerData'
	>(['mOutputInventoryHandlerData'], (data, reference_name) => {
		return ts.factory.createTypeAliasDeclaration(
			[create_modifier('export')],
			adjust_class_name(reference_name),
			undefined,
			ts.factory.createTypeReferenceNode(
				adjust_class_name(data['$ref'].substring(14))
			)
		);
	}),
	...UnrealEngineStringReference.TypesGenerators(),
	new TypesGenerationMatchesReferenceName<
		{
			type: 'object';
			required: ['SpecifiedColor'];
			properties: {
				SpecifiedColor: {
					$ref: '#/definitions/color-decimal--semi-native';
				};
			};
		},
		'SpecifiedColor--semi-native'
	>(['SpecifiedColor--semi-native'], (data, reference_name) => {
		return create_object_type_alias(
			adjust_class_name(reference_name),
			['declare'],
			{
				SpecifiedColor: ts.factory.createTypeReferenceNode(
					adjust_class_name(
						data.properties.SpecifiedColor['$ref'].substring(14)
					)
				),
			}
		);
	}),
];

export const type_node_generators = [
	new TypeNodeGeneration<{
		$ref: `#/definitions/${keyof typeof target_files}`;
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					oneOf: Object.keys(target_files).map((e) => {
						return {type: 'string', const: `#/definitions/${e}`};
					}),
				},
			},
		},
		(data) => {
			const target_name = data['$ref'].substring(
				14
			) as keyof typeof target_files;
			const reference_name = adjust_class_name(target_name);

			return new TypeNodeGenerationResult(
				() => ts.factory.createTypeReferenceNode(reference_name),
				{
					[target_files[target_name].replace(/\.ts$/, '')]: [
						reference_name,
					],
				}
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
					type: 'string',
					pattern: '^#definitions/boolean(-extended)$',
				},
			},
		},
		(data) => {
			return new TypeNodeGenerationResult(() =>
				data['$ref'] === '#/definitions/boolean'
					? create_type('boolean')
					: create_union(
							create_type('boolean'),
							create_type('undefined')
						)
			);
		}
	),
	new TypeNodeGeneration<{type: 'string'; pattern: string}>(
		{
			type: 'object',
			required: ['type', 'pattern'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				enum: {type: 'string', minLength: 2},
			},
		},
		(data) => {
			return new TypeNodeGenerationResult(
				() =>
					ts.factory.createTypeReferenceNode('StringPassedRegExp', [
						create_literal_node_from_value(data.pattern),
					]),
				{'utils/validators': ['StringPassedRegExp']}
			);
		}
	),
];
