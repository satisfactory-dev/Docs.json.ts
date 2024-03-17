import {TypesGenerationFromSchema} from '../TypesGeneration';
import ts from 'typescript';
import {
	adjust_class_name,
	create_minimum_size_typed_array_of_single_type,
	create_modifier,
	create_object_type,
	create_union,
	possibly_create_lazy_union,
} from '../TsFactoryWrapper';
import {target_files as validators_target_files} from './validators';
import {
	array_string_type,
	generate_array_string_schema,
} from './json_schema_types';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	create_UnrealEngineString_reference_type,
	supported_oneOf_items as UnrealEngineStringReference_supported_oneOf_items,
	UnrealEngineString_schema,
} from '../CustomParsingTypes/UnrealEngineStringReference';

export const target_files = {
	Texture2D: 'common/unions.ts',
	mDescriptorStatBars: 'common/unions.ts',
	'mEventType--optional-csv': 'common/enum.ts',
	'FGSchematic--mUnlocks_Class': 'classes/CoreUObject/FGSchematic.ts',
	'FGSchematic--mUnlocks_mTapeUnlocks': 'classes/CoreUObject/FGSchematic.ts',
	'FGSchematic--mUnlocks_mRecipes': 'classes/CoreUObject/FGSchematic.ts',
	'FGSchematic--mUnlocks_resources_to_scan':
		'classes/CoreUObject/FGSchematic.ts',
	'FGSchematic--mUnlocks_mEmotes': 'classes/CoreUObject/FGSchematic.ts',
	'FGSchematic--mUnlocks_mSchematics': 'classes/CoreUObject/FGSchematic.ts',
	'FGSchematic--mUnlocks_inventory_slots':
		'classes/CoreUObject/FGSchematic.ts',
	'FGSchematic--mUnlocks_equipment_slots':
		'classes/CoreUObject/FGSchematic.ts',
	'FGSchematic--mUnlocks_mScannableObjects':
		'classes/CoreUObject/FGSchematic.ts',
	'FGSchematic--mUnlocks_mItemsToGive': 'classes/CoreUObject/FGSchematic.ts',
};

declare type supported_oneOf_items =
	| {$ref: '#/definitions/Texture2D--basic'}
	| {$ref: '#/definitions/None'}
	| UnrealEngineStringReference_supported_oneOf_items
	| {type: 'string'; const: string}
	| (array_string_type & {
			array_string: {
				items: {
					type: 'object';
					required: ['Value'];
					properties: {
						Value: {
							$ref: '#/definitions/integer-string';
						};
					};
				};
			};
	  })
	| {type: 'string'; string_starts_with: string}
	| (array_string_type & {
			array_string: {
				items: {
					$ref: '#/definitions/mEventType';
				};
			};
	  });
export const generators = [
	new TypesGenerationFromSchema<{
		oneOf: [supported_oneOf_items, ...supported_oneOf_items[]];
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
									$ref: {
										type: 'string',
										pattern:
											'^#/definitions/(Texture2D--basic|None)$',
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
							generate_array_string_schema({
								type: 'object',
								required: ['type', 'required', 'properties'],
								additionalProperties: false,
								properties: {
									type: {type: 'string', const: 'object'},
									required: {
										type: 'array',
										const: ['Value'],
									},
									properties: {
										type: 'object',
										const: {
											Value: {
												$ref: '#/definitions/integer-string',
											},
										},
									},
								},
							}),
							generate_array_string_schema({
								type: 'object',
								required: ['$ref'],
								additionalProperties: false,
								properties: {
									$ref: {type: 'string', minLength: 15},
								},
							}),
							{
								type: 'object',
								required: ['type', 'string_starts_with'],
								additionalProperties: false,
								properties: {
									type: {type: 'string', const: 'string'},
									string_starts_with: {
										type: 'string',
										minLength: 1,
									},
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
							return ts.factory.createTypeReferenceNode(
								adjust_class_name(entry['$ref'].substring(14))
							);
						} else if ('const' in entry) {
							return ts.factory.createLiteralTypeNode(
								ts.factory.createStringLiteral(entry.const)
							);
						} else if (
							'array_string' in entry &&
							'type' in entry.array_string.items &&
							'properties' in entry.array_string.items &&
							'object' === entry.array_string.items.type &&
							1 === entry.array_string.items.required.length &&
							'Value' === entry.array_string.items.required[0] &&
							'Value' in entry.array_string.items.properties
						) {
							let value_reference_name = (
								entry.array_string.items as {
									properties: {
										Value: {$ref: string};
									};
								}
							).properties.Value['$ref'].substring(14);

							if (
								value_reference_name in validators_target_files
							) {
								value_reference_name = `${value_reference_name}__type`;
							}

							return create_object_type({
								Value: create_minimum_size_typed_array_of_single_type(
									entry.array_string.minItems,
									() =>
										ts.factory.createTypeReferenceNode(
											adjust_class_name(
												value_reference_name
											)
										)
								),
							});
						} else if (
							'array_string' in entry &&
							'$ref' in entry.array_string.items &&
							'#/definitions/mEventType' ===
								entry.array_string.items['$ref']
						) {
							return create_minimum_size_typed_array_of_single_type(
								entry.array_string.minItems,
								() =>
									ts.factory.createTypeReferenceNode(
										adjust_class_name(
											(
												entry.array_string.items as {
													$ref: string;
												}
											)['$ref'].substring(14)
										)
									)
							);
						} else if ('array_string' in entry) {
							console.error(entry.array_string);

							throw new Error('Unsupported array_string found');
						} else if ('string_starts_with' in entry) {
							return ts.factory.createTypeReferenceNode(
								'string_starts_with',
								[
									ts.factory.createLiteralTypeNode(
										ts.factory.createStringLiteral(
											entry.string_starts_with
										)
									),
								]
							);
						}

						return create_UnrealEngineString_reference_type(
							entry.UnrealEngineString
						);
					})
				)
			);
		}
	),
	new TypesGenerationFromSchema<{
		anyOf: [{$ref: string}, ...{$ref: string}[]];
	}>(
		{
			type: 'object',
			required: ['anyOf'],
			additionalProperties: false,
			properties: {
				anyOf: {
					type: 'array',
					minItems: 1,
					items: {
						type: 'object',
						required: ['$ref'],
						additionalProperties: false,
						properties: {
							$ref: {
								type: 'string',
								pattern: '^#\\/definitions\\/',
							},
						},
					},
				},
			},
		},
		(data, reference_name) => {
			const [a, b, ...rest] = data.anyOf;

			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				adjust_class_name(reference_name),
				undefined,
				create_union(
					ts.factory.createTypeReferenceNode(
						adjust_class_name(a.$ref.substring(14))
					),
					ts.factory.createTypeReferenceNode(
						adjust_class_name(b.$ref.substring(14))
					),
					...rest
						.map((e) => e.$ref.substring(14))
						.map((sub_reference) => {
							return ts.factory.createTypeReferenceNode(
								adjust_class_name(sub_reference)
							);
						})
				)
			);
		}
	),
];

export const type_node_generators = [
	new TypeNodeGeneration<{
		$ref: `#/definitions/${keyof typeof target_files}`;
	}>(
		{
			type: 'object',
			required: ['$ref'],
			properties: {
				$ref: {
					oneOf: Object.keys(target_files).map((e) => {
						return {type: 'string', const: `#/definitions/${e}`};
					}),
				},
			},
		},
		(data) => {
			let reference_name = adjust_class_name(data['$ref'].substring(14));

			if (reference_name in validators_target_files) {
				reference_name = `${reference_name}__type`;
			}

			return new TypeNodeGenerationResult(
				() => {
					return ts.factory.createTypeReferenceNode(reference_name);
				},
				{
					'common/unions': [reference_name],
				}
			);
		}
	),
	new TypeNodeGeneration<{type: 'string'; enum: [string, ...string[]]}>(
		{
			type: 'object',
			required: ['type', 'enum'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				enum: {
					type: 'array',
					minItems: 1,
					items: {type: 'string'},
				},
			},
		},
		(data) => {
			return new TypeNodeGenerationResult(() =>
				possibly_create_lazy_union(data.enum)
			);
		}
	),
];
