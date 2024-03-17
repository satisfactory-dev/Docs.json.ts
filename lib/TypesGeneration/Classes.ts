import {
	adjust_class_name,
	create_object_type_alias,
	possibly_create_lazy_union,
} from '../TsFactoryWrapper';
import ts from 'typescript';
import {TypesGenerationMatchesReferenceName} from '../TypesGeneration';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {TypedObjectString} from '../CustomParsingTypes/TypedObjectString';

declare type supported_base_classes_union =
	| 'class--no-description-or-display-name'
	| 'class--no-description'
	| 'class';
export const supported_base_classes: [
	supported_base_classes_union,
	...supported_base_classes_union[],
] = [
	'class--no-description-or-display-name',
	'class--no-description',
	'class',
];

export const target_files = {
	mDisableSnapOn: 'classes/base.ts',
	EditorCurveData: 'classes/base.ts',
};

export const generators = [
	...TypedObjectString.TypesGenerators(),
	new TypesGenerationMatchesReferenceName<
		{
			type: 'object';
			required: ['Class'];
			additionalProperties: false;
			properties: {
				Class: {
					type: 'string';
					enum: [string, ...string[]];
				};
			};
		},
		'mUnlocks_Class'
	>(['mUnlocks_Class'], (data, reference_name) => {
		return create_object_type_alias(
			adjust_class_name(reference_name),
			['declare'],
			{
				Class: possibly_create_lazy_union(data.properties.Class.enum),
			}
		);
	}),
];

export const type_node_generators = [
	new TypeNodeGeneration<{
		$ref: '#/definitions/mDisableSnapOn' | '#/definitions/EditorCurveData';
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					oneOf: Object.keys(target_files).map((reference_name) => {
						return {
							type: 'string',
							const: `#/definitions/${reference_name}`,
						};
					}),
				},
			},
		},
		(property) => {
			const reference_name = adjust_class_name(
				property['$ref'].substring(14)
			);
			if (!(reference_name in target_files)) {
				throw new Error(
					`target file for ${reference_name} not configured!`
				);
			}

			const target_file = target_files[
				reference_name as keyof typeof target_files
			].replace(/\.ts$/, '');

			return new TypeNodeGenerationResult(
				() => {
					return ts.factory.createTypeReferenceNode(reference_name);
				},
				{
					[target_file]: [reference_name],
				}
			);
		}
	),
];
