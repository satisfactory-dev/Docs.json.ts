import ts from 'typescript';

import {
	TypesGenerationFromSchema,
} from '../TypesGeneration';
import {
	adjust_class_name,
	create_literal,
	create_modifier,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';

export const target_files = {
	'empty-object': 'common/constants.ts',
	None: 'common/constants.ts',
	mChainsawState: 'common/constants.ts',
	mSnappedPassthroughs: 'common/constants.ts',
	mAspect: 'common/constants.ts',
	mPlatformDockingStatus: 'common/constants.ts',
	mBatteryStatus: 'common/constants.ts',
	InfinityExtrap: 'common/constants.ts',
};

export const schema = {
	type: 'object',
	required: ['type', 'const'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		const: {type: 'string'},
	},
};

export declare type schema_type = {
	type: 'string';
	const: string;
};

declare type ref_type = {
	$ref:
		| '#/definitions/empty-object'
		| '#/definitions/mChainsawState'
		| '#/definitions/mSnappedPassthroughs'
		| '#/definitions/mAspect'
		| '#/definitions/mPlatformDockingStatus'
		| '#/definitions/mBatteryStatus'
		| '#/definitions/InfinityExtrap';
};

const ref_schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {
			oneOf: Object.keys(target_files).map((ref) => {
				return {type: 'string', const: `#/definitions/${ref}`};
			}),
		},
	},
};

export const generators = [
	new TypesGenerationFromSchema<schema_type>(
		schema,
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				ts.factory.createIdentifier(adjust_class_name(reference_name)),
				undefined,
				ts.factory.createLiteralTypeNode(
					ts.factory.createStringLiteral(data.const)
				)
			);
		}
	),
	new TypesGenerationFromSchema<{$ref: '#/definitions/None'}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {type: 'string', const: '#/definitions/None'},
			},
		},
		(_, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				adjust_class_name(reference_name),
				undefined,
				ts.factory.createTypeReferenceNode('None')
			);
		}
	),
];

export const type_node_generators = [
	new TypeNodeGeneration<schema_type>(schema, (property) => {
		return new TypeNodeGenerationResult(() =>
			ts.factory.createLiteralTypeNode(
				ts.factory.createStringLiteral(property.const)
			)
		);
	}),
	new TypeNodeGeneration<ref_type>(ref_schema, (property) => {
		const ref_key = property['$ref'].substring(
			14
		) as keyof typeof target_files;

		const reference_name = adjust_class_name(ref_key);

		return new TypeNodeGenerationResult(
			() => ts.factory.createTypeReferenceNode(reference_name),
			{
				[target_files[ref_key].replace(/\.ts$/, '')]: [reference_name],
			}
		);
	}),
	new TypeNodeGeneration<{
		$ref: '#/definitions/mOutputInventoryHandlerData';
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					oneOf: [
						{
							type: 'string',
							pattern:
								'^#/definitions/(mOutputInventoryHandlerData)$',
						},
					],
				},
			},
		},
		() => {
			const reference_name = adjust_class_name('empty-object');

			return new TypeNodeGenerationResult(
				() => {
					return ts.factory.createTypeReferenceNode(reference_name);
				},
				{
					'common/constants': [reference_name],
				}
			);
		}
	),
	new TypeNodeGeneration<{type: 'string'; const: string}>(
		{
			type: 'object',
			required: ['type', 'const'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				const: {type: 'string'},
			},
		},
		(data) => {
			return new TypeNodeGenerationResult(() =>
				create_literal(data.const)
			);
		}
	),
];
