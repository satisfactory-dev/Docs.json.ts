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
};

ImportTracker.set_imports('common/arrays.ts', [
	{
		from: '../utils/validators',
		import_these: [
			'UnrealEngineString',
			'string_starts_with',
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
		Object.keys(target_files) as (keyof typeof target_files)[],
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
	)
];

export const type_node_generators = [
	new TypeNodeGeneration<{
		'$ref': '#/definitions/mDamageTypes'
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				'$ref': {
					oneOf: [
						{type: 'string', const: '#/definitions/mDamageTypes'},
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
