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
	'xyz-array': 'common/arrays.ts',
	'ItemClass-and-amount': 'common/arrays.ts',
	'ItemClass-only--array': 'common/arrays.ts',
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
	new TypesGenerationMatchesReferenceName<
		{
			type: 'string';
			minLength: 1;
			array_string: {
				type: 'array';
				minItems: 1;
				items: {
					type: 'object';
					required: ['X', 'Y', 'Z'];
					properties: {
						X: {$ref: '#/definitions/decimal-string'};
						Y: {$ref: '#/definitions/decimal-string--signed'};
						Z: {$ref: '#/definitions/decimal-string--signed'};
					};
				};
			};
		},
		'xyz-array'
	>(['xyz-array'], (_, reference_name) => {
		return ts.factory.createTypeAliasDeclaration(
			[create_modifier('export')],
			ts.factory.createIdentifier(adjust_class_name(reference_name)),
			undefined,
			ts.factory.createTupleTypeNode([
				ts.factory.createTypeReferenceNode(
					adjust_class_name('xyz--unsigned-x')
				),
				ts.factory.createRestTypeNode(
					ts.factory.createArrayTypeNode(
						ts.factory.createTypeReferenceNode(
							adjust_class_name('xyz--unsigned-x')
						)
					)
				),
			])
		);
	}),
	new TypesGenerationMatchesReferenceName<
		ItemClass_and_Amount | ItemClass_only,
		'ItemClass-and-amount' | 'ItemClass-only--array'
	>(
		['ItemClass-and-amount', 'ItemClass-only--array'],
		(data, reference_name) => {
			function check(_: any): _ is ItemClass_and_Amount {
				return 'ItemClass-and-amount' === reference_name;
			}

			const generate = check(data)
				? (): ts.TypeNode => {
						return create_object_type({
							ItemClass: ts.factory.createTypeReferenceNode(
								adjust_class_name(
									data.array_string.items.properties.ItemClass[
										'$ref'
									].substring(14)
								)
							),
							Amount: ts.factory.createTypeReferenceNode(
								adjust_class_name(
									`${data.array_string.items.properties.Amount['$ref'].substring(14)}__type`
								)
							),
						});
					}
				: (): ts.TypeNode => {
						return create_object_type({
							ItemClass: ts.factory.createTypeReferenceNode(
								adjust_class_name(
									data.array_string.items.properties.ItemClass[
										'$ref'
									].substring(14)
								)
							),
						});
					};

			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				ts.factory.createIdentifier(adjust_class_name(reference_name)),
				undefined,
				ts.factory.createTupleTypeNode([
					generate(),
					ts.factory.createRestTypeNode(
						ts.factory.createArrayTypeNode(generate())
					),
				])
			);
		}
	),
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
		$ref:
			| '#/definitions/mDamageTypes'
			| '#/definitions/xyz-array'
			| '#/definitions/ItemClass-and-amount'
			| '#/definitions/ItemClass-only--array'
			| '#/definitions/mFuel';
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
