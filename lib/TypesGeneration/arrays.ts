import {TypesGenerationMatchesReferenceName} from '../TypesGeneration';
import ts from 'typescript';
import {
	adjust_class_name,
	create_minimum_size_typed_array_of_single_type,
	create_modifier,
	create_object_type,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';

export const target_files = {
	mDamageTypes: 'common/arrays.ts',
	mFuel: 'common/arrays.ts',
};

export type array_string_schema_type = {
	type: 'string';
	minLength: 1;
	array_string: {
		type: 'array';
		minItems: number;
		items: object;
	} & ({maxItems: number} | {});
};

declare type ItemClass_only = {
	type: 'string';
	minLength: 1;
	array_string: {
		type: 'array';
		minItems: 1;
		items: {
			type: 'object';
			required: ['ItemClass'];
			properties: {
				ItemClass: {$ref: '#/definitions/ItemClass'};
			};
		};
	};
};

declare type ItemClass_and_Amount = {
	type: 'string';
	minLength: 1;
	array_string: {
		type: 'array';
		minItems: 1;
		items: {
			type: 'object';
			required: ['ItemClass', 'Amount'];
			properties: {
				ItemClass: {$ref: '#/definitions/ItemClass'};
				Amount: {$ref: '#/definitions/integer-string'};
			};
		};
	};
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
						return ts.factory.createTypeReferenceNode(
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
		$ref: '#/definitions/mDamageTypes' | '#/definitions/mFuel';
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
					return ts.factory.createTypeReferenceNode(reference_name);
				},
				{
					'common/arrays': [reference_name],
				}
			);
		}
	),
];
