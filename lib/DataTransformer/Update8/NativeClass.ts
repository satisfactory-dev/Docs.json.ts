import {
	Generator,
} from '../Generator';
import {
	DocsDataItem,
} from '../../DocsTsGenerator';
import ts, {
	PrimaryExpression,
	CallExpression, TypeNode,
} from 'typescript';
import Ajv from 'ajv/dist/2020';
import schema from '../../../schema/update8.schema.json' assert {type: 'json'};
import {
	create_literal,
	create_property_access,
	create_type,
	createParameter,
	minimum_size_array_of_single_type,
} from '../../TsFactoryWrapper';

export class NativeClass extends Generator<DocsDataItem> {
	constructor(ajv:Ajv) {
		super(ajv, {
			definitions: schema.definitions,
			...schema.definitions.NativeClass,
		});
	}
	generate(
		return_type:TypeNode,
	): (raw_data: PrimaryExpression) => CallExpression {
		const func = ts.factory.createArrowFunction(
			undefined,
			undefined,
			[
				createParameter(
					ts.factory.createObjectBindingPattern([
						ts.factory.createBindingElement(
							undefined,
							undefined,
							'NativeClass',
						),
						ts.factory.createBindingElement(
							undefined,
							undefined,
							'Classes',
						),
					]),
					ts.factory.createTypeLiteralNode([
						ts.factory.createPropertySignature(
							undefined,
							'NativeClass',
							undefined,
							create_type('string')
						),
						ts.factory.createPropertySignature(
							undefined,
							'Classes',
							undefined,
							minimum_size_array_of_single_type(
								1,
								() => create_type('unknown')
							),
						),
					]),
				),
			],
			return_type,
			undefined,
			ts.factory.createBlock([
				ts.factory.createReturnStatement(
					ts.factory.createAsExpression(
						ts.factory.createObjectLiteralExpression([
							ts.factory.createPropertyAssignment(
								'NativeClass',
								ts.factory.createCallExpression(
									create_property_access(
										ts.factory.createIdentifier(
											'UnrealEngineString'
										),
										'fromString'
									),
									[
										create_literal(
											'/Script/CoreUObject.Class'
										),
										ts.factory.createTypeReferenceNode(
											'StringStartsWith',
											[
												create_literal(
													'/Script/FactoryGame.FG'
												),
											]
										),
									],
									[
										ts.factory.createIdentifier(
											'NativeClass'
										),
									]
								),
							),
							ts.factory.createShorthandPropertyAssignment(
								'Classes'
							),
						]),
						return_type
					),
				),
			])
		);

		return (
			raw_data:PrimaryExpression
		) => ts.factory.createCallExpression(
			func,
			undefined,
			[raw_data]
		);
	}
}
