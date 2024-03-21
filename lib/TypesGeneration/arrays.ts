import {
	TypesGenerationMatchesReferenceName,
} from '../TypesGeneration';
import ts from 'typescript';
import {
	adjust_class_name,
	create_minimum_size_typed_array_of_single_type,
	create_modifier,
	type_reference_node,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	local_ref,
} from '../StringStartsWith';

export const target_files = {
	mDamageTypes: 'common/arrays.ts',
	mFuel: 'common/arrays.ts',
};

export const generators = [
	new TypesGenerationMatchesReferenceName<{minItems: number}, 'mFuel'>(
		['mFuel'],
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				adjust_class_name(reference_name),
				undefined,
				create_minimum_size_typed_array_of_single_type(
					data.minItems,
					() => {
						return type_reference_node(
							adjust_class_name(`${reference_name}_item`)
						);
					}
				)
			);
		}
	),
];

export const type_node_generators = [
	new TypeNodeGeneration<{
		$ref: local_ref<'mDamageTypes'> | local_ref<'mFuel'>;
	}>(
		{
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
		},
		(data) => {
			const reference_name = adjust_class_name(
				data['$ref'].substring(14)
			);

			return new TypeNodeGenerationResult(
				() => {
					return type_reference_node(reference_name);
				},
				{
					'common/arrays': [reference_name],
				}
			);
		}
	),
];
