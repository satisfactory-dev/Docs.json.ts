import ts from 'typescript';
import {
	create_modifier,
	create_type,
	createParameter,
	type_reference_node,
} from '../TsFactoryWrapper';

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
