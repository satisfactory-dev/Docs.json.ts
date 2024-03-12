import {
	adjust_class_name,
	create_modifier,
	createClass,
	create_type,
	createClass__members__with_auto_constructor,
	possibly_create_lazy_union,
	create_literal_node_from_value,
	create_minimum_size_typed_array_of_single_type,
	create_UnrealEngineString_reference_type,
	create_object_type_alias,
} from '../TsFactoryWrapper';
import ts from 'typescript';
import {
	TypesGenerationFromSchema,
	TypesGenerationMatchesReferenceName,
} from '../TypesGeneration';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../TypeNodeGeneration';
import {UnrealEngineString_type} from './validators';

declare type supported_base_classes_union =
	| 'class--no-description-or-display-name'
	| 'class--no-description'
	| 'class';
export const supported_base_classes: [
	supported_base_classes_union,
	...supported_base_classes_union[],
] = [
	'class--no-description-or-display-name',
	'class--no-description',
	'class',
];

export const target_files = {
	mDisableSnapOn: 'classes/base.ts',
	mDockingRuleSet: 'classes/base.ts',
	EditorCurveData: 'classes/base.ts',
	mLightControlData: 'classes/base.ts',
	mUnlocks_Class: 'classes/CoreUObject/FGSchematic.ts',
	mUnlocks_mTapeUnlocks: 'classes/CoreUObject/FGSchematic.ts',
};

declare type mDisableSnapOn_member = {
	type: 'string';
	minLength: 1;
	object_string: {
		type: 'object';
		required: [string, ...string[]];
		additionalProperties: false;
		properties: {
			[key: string]: {
				$ref: '#/definitions/boolean';
			};
		};
	};
};

export const generators = [
	new TypesGenerationFromSchema<{
		oneOf: [
			mDisableSnapOn_member,
			mDisableSnapOn_member,
			...mDisableSnapOn_member[],
		];
	}>(
		{
			type: 'object',
			required: ['oneOf'],
			additionalProperties: false,
			properties: {
				oneOf: {
					type: 'array',
					minItems: 2,
					items: {
						type: 'object',
						required: ['type', 'minLength', 'object_string'],
						additionalProperties: false,
						properties: {
							type: {type: 'string', const: 'string'},
							minLength: {type: 'number', const: 1},
							object_string: {
								type: 'object',
								required: [
									'type',
									'required',
									'additionalProperties',
									'properties',
								],
								additionalProperties: false,
								properties: {
									type: {type: 'string', const: 'object'},
									required: {
										type: 'array',
										minItems: 1,
										items: {type: 'string', minLength: 1},
									},
									additionalProperties: {
										type: 'boolean',
										const: false,
									},
									properties: {
										type: 'object',
										additionalProperties: {
											type: 'object',
											required: ['$ref'],
											additionalProperties: false,
											properties: {
												$ref: {
													type: 'string',
													const: '#/definitions/boolean',
												},
											},
										},
									},
								},
							},
						},
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
						return ts.factory.createTypeLiteralNode(
							entry.object_string.required.map((property) => {
								return ts.factory.createPropertySignature(
									undefined,
									property,
									undefined,
									create_type('boolean')
								);
							})
						);
					})
				)
			);
		}
	),
	new TypesGenerationFromSchema<{
		type: 'string';
		minLength: 1;
		object_string: {
			type: 'object';
			required: [string, ...string[]];
			properties: {
				[key: string]: {
					$ref:
						| '#/definitions/mDisableSnapOn'
						| '#/definitions/mDockingRuleSet'
						| '#/definitions/EditorCurveData'
						| '#/definitions/mLightControlData';
				};
			};
		};
	}>(
		{
			type: 'object',
			required: ['type', 'minLength', 'object_string'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'string'},
				minLength: {type: 'number', const: 1},
				object_string: {
					type: 'object',
					required: ['type', 'required', 'properties'],
					additionalProperties: false,
					properties: {
						type: {type: 'string', const: 'object'},
						required: {
							type: 'array',
							minItems: 1,
							items: {type: 'string'},
						},
						properties: {
							type: 'object',
							additionalProperties: {
								type: 'object',
								required: ['$ref'],
								additionalProperties: false,
								properties: {
									$ref: {
										type: 'string',
										pattern:
											'^#/definitions/(decimal-string|InfinityExtrap|mLightControlData)',
									},
								},
							},
						},
					},
				},
			},
		},
		(data, reference_name) => {
			return createClass(
				adjust_class_name(reference_name),
				createClass__members__with_auto_constructor(
					data.object_string,
					['public', 'readonly']
				),
				{
					modifiers: ['export'],
				}
			);
		}
	),
	new TypesGenerationMatchesReferenceName<
		{
			type: 'object';
			required: ['Class'];
			additionalProperties: false;
			properties: {
				Class: {
					type: 'string';
					enum: [string, ...string[]];
				};
			};
		},
		'mUnlocks_Class'
	>(['mUnlocks_Class'], (data, reference_name) => {
		return create_object_type_alias(
			adjust_class_name(reference_name),
			['declare'],
			{
				Class: possibly_create_lazy_union(data.properties.Class.enum),
			},
			['Class']
		);
	}),
	new TypesGenerationMatchesReferenceName<
		{
			type: 'object';
			required: ['Class', 'mTapeUnlocks'];
			additionalProperties: false;
			properties: {
				Class: {
					type: 'string';
					const: string;
				};
				mTapeUnlocks: {
					type: string;
					minLength: 1;
					array_string: {
						type: 'array';
						minItems: 1;
						items: UnrealEngineString_type;
					};
				};
			};
		},
		'mUnlocks_mTapeUnlocks'
	>(['mUnlocks_mTapeUnlocks'], (data, reference_name) => {
		return create_object_type_alias(
			adjust_class_name(reference_name),
			['declare'],
			{
				Class: create_literal_node_from_value(
					data.properties.Class.const
				),
				mTapeUnlocks: create_minimum_size_typed_array_of_single_type(
					data.properties.mTapeUnlocks.array_string.minItems,
					() =>
						create_UnrealEngineString_reference_type(
							data.properties.mTapeUnlocks.array_string.items
								.UnrealEngineString
						)
				),
			},
			['Class']
		);
	}),
];

export const type_node_generators = [
	new TypeNodeGeneration<{
		$ref:
			| '#/definitions/mDisableSnapOn'
			| '#/definitions/mDockingRuleSet'
			| '#/definitions/EditorCurveData'
			| '#/definitions/mLightControlData'
			| '#/definitions/mUnlocks_Class'
			| '#/definitions/mUnlocks_mTapeUnlocks';
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					oneOf: Object.keys(target_files).map((reference_name) => {
						return {
							type: 'string',
							const: `#/definitions/${reference_name}`,
						};
					}),
				},
			},
		},
		(property) => {
			const reference_name = adjust_class_name(
				property['$ref'].substring(14)
			);
			if (!(reference_name in target_files)) {
				throw new Error(
					`target file for ${reference_name} not configured!`
				);
			}

			const target_file = target_files[
				reference_name as keyof typeof target_files
			].replace(/\.ts$/, '');

			return new TypeNodeGenerationResult(
				() => {
					return ts.factory.createTypeReferenceNode(reference_name);
				},
				{
					[target_file]: [reference_name],
				}
			);
		}
	),
];
