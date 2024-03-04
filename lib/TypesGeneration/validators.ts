import ts from "typescript";
import {TypesGenerationFromSchema} from "../TypesGeneration";
import {adjust_class_name, create_modifier, createParameter} from "../TsFactoryWrapper";

export const target_files = {
	'decimal-string': 'utils/validators.ts',
	'decimal-string--signed': 'utils/validators.ts',
	'integer-string': 'utils/validators.ts',
	'integer-string--signed': 'utils/validators.ts',
};

function must_be_a_decimal_like_string() {
	return ts.factory.createTemplateExpression(
		ts.factory.createTemplateHead(''),
		[
			ts.factory.createTemplateSpan(
				ts.factory.createIdentifier('reference_argument'),
				ts.factory.createTemplateTail(' must be a decimal-like string!')
			)
		]
	);
}

function must_be_an_integer_like_string() {
	return ts.factory.createTemplateExpression(
		ts.factory.createTemplateHead(''),
		[
			ts.factory.createTemplateSpan(
				ts.factory.createIdentifier('reference_argument'),
				ts.factory.createTemplateTail(' must be an integer-like string!')
			)
		]
	);
}

const custom_pattern_errors:{[key: string]: () => ts.TemplateExpression} = {
	'decimal-string': must_be_a_decimal_like_string,
	'decimal-string--signed': must_be_a_decimal_like_string,
	'integer-string': must_be_an_integer_like_string,
	'integer-string--signed': must_be_an_integer_like_string,
}

export const generators = [
	new TypesGenerationFromSchema<
		{
			type: 'string',
			pattern: 'string',
		}
	>(
		{
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
		},
		(data, reference_name) : ts.FunctionDeclaration => {
			return ts.factory.createFunctionDeclaration(
				[create_modifier('export')],
				undefined,
				adjust_class_name(reference_name),
				undefined,
				[
					createParameter('value', ts.SyntaxKind.StringKeyword),
					createParameter('reference_argument', ts.SyntaxKind.StringKeyword),
				],
				undefined,
				ts.factory.createBlock([
					ts.factory.createIfStatement(
						ts.factory.createLogicalNot(ts.factory.createCallExpression(
							ts.factory.createPropertyAccessExpression(
								ts.factory.createParenthesizedExpression(
									ts.factory.createNewExpression(
										ts.factory.createIdentifier('RegExp'),
										undefined,
										[
											ts.factory.createStringLiteral(data.pattern),
										]
									)
								),
								'test'
							),
							undefined,
							[ts.factory.createIdentifier('value')]
						)),
						ts.factory.createThrowStatement(ts.factory.createNewExpression(
							ts.factory.createIdentifier('Error'),
							undefined,
							[
								(reference_name in custom_pattern_errors)
									? custom_pattern_errors[reference_name]()
									: ts.factory.createTemplateExpression(
										ts.factory.createTemplateHead(''),
										[
											ts.factory.createTemplateSpan(
												ts.factory.createIdentifier('reference_argument'),
												ts.factory.createTemplateTail(` must pass the regex ${data.pattern}`)
											)
										]
									)
							]
						))
					),
					ts.factory.createReturnStatement(ts.factory.createIdentifier('value')),
				])
			);
		}
	),
];
