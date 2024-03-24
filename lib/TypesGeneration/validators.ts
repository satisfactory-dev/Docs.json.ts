import ts from 'typescript';
import {
	TypesGenerationFromSchema,
	TypesGenerationMatchesReferenceName,
} from '../TypesGeneration';
import {
	adjust_class_name,
	create_function,
	create_modifier,
	create_throw_if,
	create_type,
	createParameter,
	flexibly_create_regex_validation_function,
	create_object_type,
	very_flexibly_create_regex_validation_function,
	create_literal,
	create_property_access,
	type_reference_node,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	UnrealEngineString,
} from '../CustomParsingTypes/UnrealEngineString';
import {
	TypedObjectString,
} from '../CustomParsingTypes/TypedObjectString';
import {
	TypedArrayString,
} from '../CustomParsingTypes/TypedArrayString';
import {
	local_ref,
} from '../StringStartsWith';

const validator_target_files = {
	'decimal-string': 'utils/validators.ts',
	'decimal-string--signed': 'utils/validators.ts',
	'integer-string': 'utils/validators.ts',
	'integer-string--signed': 'utils/validators.ts',
};

export const target_files = {
	...validator_target_files,
};

const supported_meta_types: string[] = [];

declare type schema_type = {
	type: 'string';
	pattern: 'string';
};

const schema = {
	type: 'object',
	required: ['type', 'pattern'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		pattern: {type: 'string', minLength: 1},
	},
};

declare type ref_type = {
	$ref:
		| local_ref<'decimal-string'>
		| local_ref<'decimal-string--signed'>
		| local_ref<'integer-string'>
		| local_ref<'integer-string--signed'>;
};

const ref_schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		$ref: {
			oneOf: [
				...Object.keys(validator_target_files),
				...supported_meta_types,
			].map((ref) => {
				return {type: 'string', const: `#/definitions/${ref}`};
			}),
		},
	},
};

export const generators = [
	new TypesGenerationFromSchema<schema_type>(
		schema,
		(data, reference_name): ts.FunctionDeclaration => {
			const value = ts.factory.createIdentifier('value');
			const is_int = reference_name.startsWith('integer-');

			return very_flexibly_create_regex_validation_function(
				reference_name,
				ts.factory.createStringLiteral(data.pattern),
				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter(
						'reference_argument',
						ts.SyntaxKind.StringKeyword
					),
				],
				() =>
					type_reference_node(
						adjust_class_name(`${reference_name}__type`)
					),
				[
					ts.factory.createTemplateSpan(
						ts.factory.createIdentifier('reference_argument'),
						ts.factory.createTemplateTail(
							` must pass the regex ${data.pattern}`
						)
					),
				],
				ts.factory.createReturnStatement(
					ts.factory.createAsExpression(
						ts.factory.createCallExpression(
							ts.factory.createIdentifier(
								is_int ? 'parseInt' : 'parseFloat'
							),
							undefined,

							is_int
								? [value, ts.factory.createNumericLiteral(10)]
								: [value]
						),
						type_reference_node(
							adjust_class_name(`${reference_name}__type`)
						)
					)
				)
			);
		}
	),
	new TypesGenerationMatchesReferenceName<
		{type: 'string'; string_starts_with: 'Texture2D /Game/FactoryGame/'},
		'Texture2D--basic'
	>(['Texture2D--basic'], (data, reference_name) => {
		return ts.factory.createTypeAliasDeclaration(
			[create_modifier('export')],
			adjust_class_name(reference_name),
			undefined,
			type_reference_node(
				'string_starts_with',
				ts.factory.createLiteralTypeNode(
					ts.factory.createStringLiteral(data.string_starts_with)
				),
			)
		);
	}),
	new TypesGenerationMatchesReferenceName<
		{
			type: 'string';
			pattern: string;
		},
		keyof typeof validator_target_files
	>(
		Object.keys(
			validator_target_files
		) as (keyof typeof validator_target_files)[],
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				adjust_class_name(reference_name),
				[
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'T',
						create_type('number'),
						create_type('number')
					),
				],
				type_reference_node(
					'StrictlyTypedNumberFromRegExp',
					ts.factory.createLiteralTypeNode(
						ts.factory.createStringLiteral(data.pattern)
					),
				)
			);
		}
	),
];

export const string_starts_with = {
	file: 'utils/validators.ts',
	node: ts.factory.createTypeAliasDeclaration(
		[create_modifier('export')],
		ts.factory.createIdentifier('string_starts_with'),
		[
			ts.factory.createTypeParameterDeclaration(
				undefined,
				'prefix',
				create_type('string')
			),
		],
		ts.factory.createTypeOperatorNode(
			ts.SyntaxKind.KeyOfKeyword,
			ts.factory.createMappedTypeNode(
				undefined,
				ts.factory.createTypeParameterDeclaration(
					undefined,
					'pseudo_key',
					ts.factory.createTypeOperatorNode(
						ts.SyntaxKind.KeyOfKeyword,
						ts.factory.createTypeLiteralNode([
							ts.factory.createIndexSignature(
								undefined,
								[
									createParameter(
										'key',
										create_type('string')
									),
								],
								create_type('unknown')
							),
						])
					)
				),
				ts.factory.createConditionalTypeNode(
					type_reference_node('pseudo_key'),
					create_type('string'),
					ts.factory.createTemplateLiteralType(
						ts.factory.createTemplateHead(''),
						[
							ts.factory.createTemplateLiteralTypeSpan(
								type_reference_node(
									'prefix'
								),
								ts.factory.createTemplateMiddle('')
							),
							ts.factory.createTemplateLiteralTypeSpan(
								type_reference_node(
									'pseudo_key'
								),
								ts.factory.createTemplateTail('')
							),
						]
					),
					create_type('never')
				),
				undefined,
				create_type('string'),
				undefined
			)
		)
	),
};

export const custom_generators = [
	/**
	 * will generate a type adapted from
	 * https://stackoverflow.com/a/70387184/23528553
	 *
	 * export type string_starts_with<prefix extends string> = keyof {
	 * 	[pseudo_key in keyof {
	 * 		[key: string]: any;
	 * 	} as pseudo_key extends string
	 * 		? `${prefix}${pseudo_key}` : never]
	 * 		: string;
	 * };
	 *
	 * const foo:string_starts_with<'foo'> = 'bar'; // invalid
	 */
	(): {file: string; node: ts.Node}[] => {
		const nodes: {file: string; node: ts.Node}[] = [];

		nodes.push(string_starts_with);

		nodes.push({
			file: 'utils/validators.ts',
			node: flexibly_create_regex_validation_function(
				'regexp_argument',
				'pattern',

				[
					createParameter('value', type_reference_node('Value')),
					createParameter('pattern', type_reference_node('Pattern')),
					createParameter(
						'reference_argument',
						ts.SyntaxKind.StringKeyword
					),
				],
				[
					ts.factory.createTemplateSpan(
						ts.factory.createIdentifier('reference_argument'),
						ts.factory.createTemplateMiddle(
							' must pass the regex '
						)
					),
					ts.factory.createTemplateSpan(
						ts.factory.createIdentifier('pattern'),
						ts.factory.createTemplateTail('')
					),
				],
				() => [
					type_reference_node('Pattern'),
					type_reference_node('Value'),
				],
				[
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'Pattern',
						create_type('string'),
						create_type('string')
					),
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'Value',
						create_type('string'),
						create_type('string')
					),
				]
			),
		});

		nodes.push(
			...UnrealEngineString.CustomGenerators(),
			...TypedObjectString.CustomGenerators()
		);

		nodes.push({
			file: 'utils/validators.ts',
			node: create_function(
				'string_has_minLength',
				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter('min_length', ts.SyntaxKind.NumberKeyword),
					createParameter(
						'reference_argument',
						ts.SyntaxKind.StringKeyword
					),
				],
				create_type('string'),
				[
					create_throw_if(
						'Error',
						ts.factory.createLessThan(
							create_property_access(
								ts.factory.createIdentifier('value'),
								'length'
							),
							ts.factory.createIdentifier('min_length')
						),
						[
							ts.factory.createTemplateExpression(
								ts.factory.createTemplateHead(''),
								[
									ts.factory.createTemplateSpan(
										ts.factory.createIdentifier(
											'reference_argument'
										),
										ts.factory.createTemplateMiddle(
											' expected to be of length '
										)
									),
									ts.factory.createTemplateSpan(
										ts.factory.createIdentifier(
											'min_length'
										),
										ts.factory.createTemplateMiddle(', ')
									),
									ts.factory.createTemplateSpan(
										create_property_access(
											ts.factory.createIdentifier(
												'value'
											),
											'length'
										),
										ts.factory.createTemplateTail(' found')
									),
								]
							),
						]
					),
					ts.factory.createReturnStatement(
						ts.factory.createIdentifier('value')
					),
				]
			),
		});

		return nodes;
	},
	(): {file: string; node: ts.Node}[] => {
		return [
			{
				file: 'utils/validators.ts',
				node: ts.factory.createTypeAliasDeclaration(
					[create_modifier('export')],
					'StrictlyTypedNumberFromRegExp',
					[
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'pattern',
							create_type('string')
						),
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'T',
							create_type('number'),
							create_type('number')
						),
					],
					ts.factory.createIntersectionTypeNode([
						type_reference_node('T'),
						create_object_type({
							_DocsJsonPattern:
								type_reference_node('pattern'),
						}),
					])
				),
			},
			{
				file: 'utils/validators.ts',
				node: ts.factory.createTypeAliasDeclaration(
					[create_modifier('export')],
					'StringPassedRegExp',
					[
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'pattern',
							create_type('string')
						),
						ts.factory.createTypeParameterDeclaration(
							undefined,
							'T',
							create_type('string'),
							create_type('string')
						),
					],
					ts.factory.createIntersectionTypeNode([
						type_reference_node('T'),
						ts.factory.createMappedTypeNode(
							undefined,
							ts.factory.createTypeParameterDeclaration(
								undefined,
								'pseudo_key',
								type_reference_node('pattern')
							),
							undefined,
							undefined,
							create_type('never'),
							undefined,
						),
					])
				),
			},
		];
	},
];

export const type_node_generators = [
	new TypeNodeGeneration<ref_type>(ref_schema, (property) => {
		const ref_key = property['$ref'].substring(
			14
		) as keyof typeof validator_target_files;

		return new TypeNodeGenerationResult(
			() =>
				type_reference_node(
					'StrictlyTypedNumberFromRegExp',
					create_type('string')
				),
			!(ref_key in validator_target_files)
				? undefined
				: {
					[validator_target_files[ref_key].replace(/\.ts$/, '')]:
							[adjust_class_name(ref_key)],
				}
		);
	}),
	new TypeNodeGeneration<{
		$ref:
			| local_ref<'color'>
			| local_ref<'color-decimal'>
			| local_ref<'mDockingRuleSet'>
			| local_ref<'mLightControlData'>;
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					type: 'string',
					enum: [
						local_ref('color'),
						local_ref('color-decimal'),
						local_ref('mDockingRuleSet'),
						local_ref('mLightControlData'),
					],
				},
			},
		},
		(data) =>
			new TypeNodeGenerationResult(() => {
				return type_reference_node(
					adjust_class_name(data.$ref.substring(14))
				);
			})
	),
	new TypeNodeGeneration<{
		type: string;
		pattern: string;
	}>(
		{
			type: 'object',
			required: ['type', 'pattern'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				pattern: {type: 'string', minLength: 2},
			},
		},
		(data) => {
			return new TypeNodeGenerationResult(() => {
				return type_reference_node(
					'StringPassedRegExp',
					create_literal(data.pattern)
				);
			});
		}
	),
	...UnrealEngineString.TypeNodeGeneration(),
	...TypedObjectString.TypeNodeGeneration(),
	...TypedArrayString.TypeNodeGeneration(),
	new TypeNodeGeneration<{
		type: 'string';
		string_starts_with: string;
	}>(
		{
			type: 'object',
			required: ['type', 'string_starts_with'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				string_starts_with: {type: 'string', minLength: 1},
			},
		},
		(property) => {
			return new TypeNodeGenerationResult(
				() => {
					return type_reference_node(
						'string_starts_with',
						ts.factory.createLiteralTypeNode(
							ts.factory.createStringLiteral(
								property.string_starts_with
							)
						),
					);
				},
				{
					'utils/validators': ['string_starts_with'],
				}
			);
		}
	),
	new TypeNodeGeneration<{
		type: 'string';
		minLength: number;
	}>(
		{
			type: 'object',
			required: ['type', 'minLength'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', minimum: 1},
			},
		},
		() => {
			return new TypeNodeGenerationResult(
				() => {
					return create_type('string');
				},
				{
					'utils/validators': ['string_has_minLength'],
				}
			);
		}
	),
	new TypeNodeGeneration<{
		type: 'string';
		minLength: number;
	}>(
		{
			type: 'object',
			required: ['type'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
			},
		},
		() => {
			return new TypeNodeGenerationResult(() => {
				return create_type('string');
			});
		}
	),
];
