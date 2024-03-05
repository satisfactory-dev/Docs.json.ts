import {RGBA} from "./json_schema_types";
import ts, {ClassDeclaration} from "typescript";
import {
	adjust_class_name,
	create_callExpression__for_validation_function, create_this_assignment,
	createClass,
	createMethod,
	createProperty
} from "../TsFactoryWrapper";
import {
	ImportTracker,
	TypesGeneration,
	TypesGenerationMatchesReferenceName
} from "../TypesGeneration";
import {TypeNodeGeneration, TypeNodeGenerationResult} from "../TypeNodeGeneration";

export const target_files:{[key: string]: string} = {
	'color--base': 'common/color.ts',
	'color--semi-native': 'common/color.ts',
	'color-decimal--semi-native': 'common/color.ts',
	'color': 'common/color.ts',
	'color-decimal': 'common/color.ts',
};

ImportTracker.set_imports('common/color.ts', [{
	import_these: [
		'integer_string',
		'decimal_string',
	],
	from: '../utils/validators',
}]);

function rgba_super_caller(data:RGBA): ts.MethodDeclaration
{
	const constructor_body:(ts.IfStatement|ts.ExpressionStatement)[] = [];

	constructor_body.push(ts.factory.createExpressionStatement(ts.factory.createCallExpression(
		ts.factory.createSuper(),
		undefined,
		(Object.keys(data.properties) as ('R'|'G'|'B'|'A')[]).map((property) : ['R'|'G'|'B'|'A', ts.Identifier] => {
			return [property, ts.factory.createIdentifier(property)];
		}).map((entry, index) => {
			const [property, identifier] = entry;

			const is_int = (data.properties[property]['$ref'] === '#/definitions/integer-string');

			const validate = create_callExpression__for_validation_function(
				is_int ? 'integer-string' : 'decimal-string',
				index,
				[identifier]
			);

			return ts.factory.createCallExpression(
				ts.factory.createIdentifier(is_int ? 'parseInt' : 'parseFloat'),
				undefined,

				is_int ? [validate, ts.factory.createNumericLiteral(10)] : [validate]
			);
		})
	)));

	return createMethod(
		'constructor',
		Object.keys(data.properties).map((property) => {
			return [property, ts.SyntaxKind.StringKeyword];
		}),
		constructor_body,
		['public']
	);
}

export const generators:TypesGeneration<any, any>[] = [
	new TypesGenerationMatchesReferenceName<
		{
			type: 'object',
			required: ('R'|'G'|'B'|'A')[],
		},
		'color--base'
	>(
		[
			'color--base',
		],
		(data, reference_name) : ClassDeclaration => {
			const members:(ts.PropertyDeclaration|ts.MethodDeclaration)[] = data.required.map((property) => {
				return createProperty(property, ts.SyntaxKind.NumberKeyword, [
					'public',
				]);
			});

			members.push(createMethod(
				'constructor',
				data.required.map((property) => {
					return [property, ts.SyntaxKind.NumberKeyword];
				}),
				data.required.map((property) => {
					return create_this_assignment(property, property);
				}),
				['protected']
			));

			return createClass(reference_name, members, {
				modifiers: ['abstract'],
			});
		}
	),
	new TypesGenerationMatchesReferenceName<
		RGBA,
		'color-decimal--semi-native'|'color--semi-native'
	>(
		[
			'color-decimal--semi-native',
			'color--semi-native',
		],
		(data, reference_name) : ClassDeclaration => {
			const members = [
				rgba_super_caller(data),
			];

			return createClass(reference_name, members, {
				modifiers: ['export'],
				extends: 'color--base',
			});
		}
	),
	new TypesGenerationMatchesReferenceName<
		{object_string: RGBA},
		'color-decimal'|'color'
	>(
		[
			'color-decimal',
			'color',
		],
		(data, reference_name) : ClassDeclaration => {
			const members = [
				rgba_super_caller(data.object_string),
			];

			return createClass(reference_name, members, {
				modifiers: ['export'],
				extends: 'color--base',
			});
		}
	),
];

export const type_node_generators = [
	new TypeNodeGeneration<{
		'$ref': '#/definitions/color-decimal'
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				'$ref': {
					type: 'string',
					pattern: '^#/definitions/(color-decimal)$',
				}
			}
		},
		(property) => {
			const reference_name = adjust_class_name(property['$ref'].substring(14));

			return new TypeNodeGenerationResult(
				() => {
					return ts.factory.createTypeReferenceNode(reference_name);
				},
				{
					'common/color': [
						reference_name,
					],
				}
			);
		}
	)
];
