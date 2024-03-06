import {ImportTracker, TypesGenerationMatchesReferenceName} from "../TypesGeneration";
import ts from "typescript";
import {
	adjust_class_name,
	create_minimum_size_typed_array_of_type_references,
	create_modifier
} from "../TsFactoryWrapper";
import {TypeNodeGeneration, TypeNodeGenerationResult} from "../TypeNodeGeneration";
export const target_files = {
	'mDamageTypes': 'common/arrays.ts',
	'xyz-array': 'common/arrays.ts',
};

ImportTracker.set_imports('common/arrays.ts', [
	{
		from: '../utils/validators',
		import_these: [
			'UnrealEngineString',
			'string_starts_with',
		],
	},
	{
		from: './vectors',
		import_these: [
			adjust_class_name('xyz--unsigned-x'),
		],
	},
]);

export type array_string_schema_type = {
	type: 'string',
	minLength: 1,
	array_string: {
		type: 'array',
		minItems: number,
		items: object,
	},
};

export const generators = [
	new TypesGenerationMatchesReferenceName<
		array_string_schema_type,
		keyof typeof target_files
	>(
		['mDamageTypes'],
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				ts.factory.createIdentifier(adjust_class_name(reference_name)),
				undefined,
				create_minimum_size_typed_array_of_type_references(
					'UnrealEngineString',
					() => {
						return [
							ts.factory.createTypeReferenceNode(
								'string_starts_with',
								[
									ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(
										'/Game/FactoryGame/-Shared/Blueprint/DamageTypes/'
									)),
								]
							)
						];
					}
				)
			);
		}
	),
	new TypesGenerationMatchesReferenceName<
		{
			type: 'string',
			minLength: 1,
			array_string: {
				type: 'array',
				minItems: 1,
				items: {
					type: 'object',
					required: ['X', 'Y', 'Z'],
					properties: {
						X: {'$ref': '#/definitions/decimal-string'},
						Y: {'$ref': '#/definitions/decimal-string--signed'},
						Z: {'$ref': '#/definitions/decimal-string--signed'},
					},
				},
			},
		},
		'xyz-array'
	>(
		['xyz-array'],
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				ts.factory.createIdentifier(adjust_class_name(reference_name)),
				undefined,
				ts.factory.createTupleTypeNode([
					ts.factory.createTypeReferenceNode(adjust_class_name('xyz--unsigned-x')),
					ts.factory.createRestTypeNode(ts.factory.createArrayTypeNode(
						ts.factory.createTypeReferenceNode(adjust_class_name('xyz--unsigned-x'))
					))
				])
			);
		}
	),
];

export const type_node_generators = [
	new TypeNodeGeneration<{
		'$ref':
			| '#/definitions/mDamageTypes'
			| '#/definitions/xyz-array'
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				'$ref': {
					oneOf: [
						{type: 'string', pattern: '^#/definitions/(mDamageTypes|xyz-array)$'},
					],
				},
			},
		},
		(data) => {
			const reference_name = adjust_class_name(data['$ref'].substring(14));

			return new TypeNodeGenerationResult(
				() => {
					return ts.factory.createTypeReferenceNode(reference_name);
				},
				{
					'common/arrays' : [reference_name],
				}
			);
		}
	),
]
