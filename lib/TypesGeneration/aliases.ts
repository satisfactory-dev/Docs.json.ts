import {
	TypesGenerationMatchesReferenceName,
} from '../TypesGeneration';
import {
	adjust_class_name,
	create_literal,
	create_modifier,
	create_type,
	create_union,
	type_reference_node,
} from '../TsFactoryWrapper';
import ts from 'typescript';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	UnrealEngineString,
} from '../CustomParsingTypes/UnrealEngineString';

export const target_files = {
	mScannerDisplayText: 'common/aliases.ts',
	'ItemClass--prop': 'common/aliases.ts',
	mOutputInventoryHandlerData: 'common/aliases.ts',
};

const string_aliases: (keyof typeof target_files)[] = ['mScannerDisplayText'];

export const generators = [
	new TypesGenerationMatchesReferenceName<
		{type: 'string'},
		keyof typeof target_files
	>(string_aliases, (_, reference_name) => {
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
			type_reference_node(
				adjust_class_name(data['$ref'].substring(14))
			)
		);
	}),
	...UnrealEngineString.TypesGenerators(),
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
				() => type_reference_node(reference_name),
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
					type_reference_node(
						'StringPassedRegExp',
						create_literal(data.pattern),
					),
				{'utils/validators': ['StringPassedRegExp']}
			);
		}
	),
];
