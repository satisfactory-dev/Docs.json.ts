import ts from "typescript";
import {TypesGenerationFromSchema} from "../TypesGeneration";
import {
	adjust_class_name,
	create_modifier,
	create_regex_validation_function,
	createParameter, flexibly_create_regex_validation_function
} from "../TsFactoryWrapper";
import {TypeNodeGeneration, TypeNodeGenerationResult} from "../TypeNodeGeneration";

export const target_files = {
	'decimal-string': 'utils/validators.ts',
	'decimal-string--signed': 'utils/validators.ts',
	'integer-string': 'utils/validators.ts',
	'integer-string--signed': 'utils/validators.ts',
};

declare type schema_type = {
	type: 'string',
	pattern: 'string',
};

const schema = {
	type: 'object',
	required: [
		'type',
		'pattern',
	],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		pattern: {type: 'string', minLength: 1},
	},
};

declare type ref_type = {
	'$ref':
		| '#/definitions/decimal-string'
		| '#/definitions/decimal-string--signed'
		| '#/definitions/integer-string'
		| '#/definitions/integer-string--signed'
};

const ref_schema = {
	type: 'object',
	required: ['$ref'],
	additionalProperties: false,
	properties: {
		'$ref': {
			oneOf: Object.keys(target_files).map((ref) => {
				return {type: 'string', const: `#/definitions/${ref}`};
			}),
		},
	},
};

export const generators = [
	new TypesGenerationFromSchema<
		schema_type
	>(
		schema,
		(data, reference_name) : ts.FunctionDeclaration => {
			return create_regex_validation_function(data, reference_name);
		}
	),
];

export const custom_generators = [
	/**
	 * will generate a type adapted from https://stackoverflow.com/a/70387184/23528553
	 *
	 * export type string_starts_with<prefix extends string> = keyof {
	 * 	[pseudo_key in keyof {
	 * 		[key: string]: any;
	 * 	} as pseudo_key extends string ? `${prefix}${pseudo_key}` : never]: string;
	 * };
	 *
	 * const foo:string_starts_with<'foo'> = 'bar'; // invalid
	 */
	() : {file: string, node: ts.Node}[] => {
		const nodes:{file: string, node:ts.Node}[] = [];

		nodes.push({
			file: 'utils/validators.ts',
			node: ts.factory.createTypeAliasDeclaration(
				[
					create_modifier('export'),
				],
				ts.factory.createIdentifier('string_starts_with'),
				[
					ts.factory.createTypeParameterDeclaration(
						undefined,
						'prefix',
						ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
					)
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
										[ts.factory.createParameterDeclaration(
											undefined,
											undefined,
											'key',
											undefined,
											ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
										)],
										ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
									),
								])
							)
						),
						ts.factory.createConditionalTypeNode(
							ts.factory.createTypeReferenceNode('pseudo_key'),
							ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
							ts.factory.createTemplateLiteralType(
								ts.factory.createTemplateHead(''),
								[
									ts.factory.createTemplateLiteralTypeSpan(
										ts.factory.createTypeReferenceNode('prefix'),
										ts.factory.createTemplateMiddle('')
									),
									ts.factory.createTemplateLiteralTypeSpan(
										ts.factory.createTypeReferenceNode('pseudo_key'),
										ts.factory.createTemplateTail('')
									),
								]
							),
							ts.factory.createKeywordTypeNode(ts.SyntaxKind.NeverKeyword)
						),
						undefined,
						ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
						undefined
					)
				)
			)
		});

		nodes.push({
			file: 'utils/validators.ts',
			node: flexibly_create_regex_validation_function(
				'regexp_argument',
				ts.factory.createIdentifier('pattern'),

				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter('pattern', ts.SyntaxKind.StringKeyword),
					createParameter('reference_argument', ts.SyntaxKind.StringKeyword),
				],
				[
					ts.factory.createTemplateSpan(
						ts.factory.createIdentifier('reference_argument'),
						ts.factory.createTemplateMiddle(' must pass the regex ')
					),
					ts.factory.createTemplateSpan(
						ts.factory.createIdentifier('pattern'),
						ts.factory.createTemplateTail('')
					),
				]
			),
		});

		return nodes;
	},
];

export const type_node_generators = [
	new TypeNodeGeneration<ref_type>(ref_schema, (property) => {
		const ref_key = property['$ref'].substring(14) as keyof typeof target_files;

		return new TypeNodeGenerationResult(
			() => ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
			{
				[target_files[ref_key]]: [adjust_class_name(ref_key)],
			}
		);
	}),
	new TypeNodeGeneration<{
		type: string,
		pattern: string,
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
		() => {
			return new TypeNodeGenerationResult(
				() => ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
			);
		},
	),
];
