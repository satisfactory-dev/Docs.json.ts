import {ImportTracker, TypesGenerationFromSchema, TypesGenerationMatchesReferenceName} from "../TypesGeneration";
import ts from "typescript";
import {adjust_class_name, create_modifier} from "../TsFactoryWrapper";
import {UnrealEngineString_schema} from "./validators";
import {array_string_schema, array_string_type, generate_array_string_schema} from "./json_schema_types";

export const target_files = {
	'Texture2D': 'common/unions.ts',
	'mDescriptorStatBars': 'common/unions.ts',
};

ImportTracker.set_imports('common/unions.ts', [
	{
		from: './constants',
		import_these: ['None'],
	},
	{
		from: './prefixes',
		import_these: ['Texture2D__basic'],
	},
	{
		from: '../utils/validators',
		import_these: [
			'string_starts_with',
			'UnrealEngineString',
		],
	},
]);

declare type array_of_objects_item = {
	type: 'object',
	required: string[],
	properties: {[key: string]: object},
};

declare type supported_oneOf_items =
	| {'$ref': '#/definitions/Texture2D--basic'}
	| {'$ref': '#/definitions/None'}
	| {
		type: 'string',
		minLength: 1,
		UnrealEngineString: {
			type: 'string',
			UnrealEngineString_prefix: string,
			pattern: string,
		},
	}
	| {type: 'string', const: string}
	| (array_string_type & {array_string: {items: {
		type: 'object',
		required: [
			'Value'
		],
		properties: {
			Value: {
				'$ref': '#/definitions/integer-string'
			}
		}
	}}})
	| {type: 'string', string_starts_with: string}
;
export const generators = [
	new TypesGenerationFromSchema<{
		oneOf: [supported_oneOf_items, ...supported_oneOf_items[]]
	}>(
		{
			type: 'object',
			required: ['oneOf'],
			additionalProperties: false,
			properties: {
				type: {type: 'string'},
				oneOf: {
					type: 'array',
					minItems: 1,
					items: {
						oneOf: [
							{
								type: 'object',
								required: ['$ref'],
								additionalProperties: false,
								properties: {
									'$ref': {
										type: 'string',
										pattern: '^#/definitions/(Texture2D--basic|None)$',
									},
								},
							},
							UnrealEngineString_schema,
							{
								type: 'object',
								required: ['type', 'const'],
								additionalProperties: false,
								properties: {
									type: {type: 'string', const: 'string'},
									const: {type: 'string'},
								},
							},
							/*
							generate_array_string_schema({
								type: 'object',
								required: ['type', 'required', 'properties'],
								additionalProperties: false,
								properties: {
									type: {type: 'string', const: 'object'},
									required: {type: 'array', const: ['Value']},
									properties: {
										type: 'object', const: {Value: {'$ref': '#/definitions/integer-string'}}
									},
								},
							}),
							*/
							{
								type: 'object',
								required: ['type', 'string_starts_with'],
								additionalProperties: false,
								properties: {
									type: {type: 'string', const: 'string'},
									string_starts_with: {type: 'string', minLength: 1},
								},
							},
						],
					},
				},
			},
		},
		(data, reference_name) => {

			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				adjust_class_name(reference_name),
				undefined,
				ts.factory.createUnionTypeNode(
					data.oneOf.map((entry) => {
						if ('$ref' in entry) {
							return ts.factory.createTypeReferenceNode(adjust_class_name(entry['$ref'].substring(14)));
						} else if ('const' in entry) {
							return ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(
								entry.const
							));
						} else if ('array_string' in entry) {
							console.error(entry);

							throw new Error('Unsupported array_string found');
						} else if ('string_starts_with' in entry) {
							return ts.factory.createTypeReferenceNode(
								'string_starts_with',
								[
									ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(
										entry.string_starts_with
									)),
								]
							);
						}

						return ts.factory.createTypeReferenceNode(
							adjust_class_name('UnrealEngineString'),
							[
								ts.factory.createTypeReferenceNode('string_starts_with', [
									ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(
										entry.UnrealEngineString.UnrealEngineString_prefix
									))
								])
							]
						);
					})
				)
			);
		}
	),
];
