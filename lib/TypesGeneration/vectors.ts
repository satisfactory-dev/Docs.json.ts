import {ImportTracker, TypesGenerationMatchesReferenceName} from "../TypesGeneration";
import {
	adjust_class_name,
	auto_constructor_property_types_from_keywords,
	createClass,
	createClass__members__with_auto_constructor,
} from "../TsFactoryWrapper";
import {TypeNodeGeneration, TypeNodeGenerationResult} from "../TypeNodeGeneration";
import ts from "typescript";

export const target_files = {
	'xy': 'common/vectors.ts',
	'xyz': 'common/vectors.ts',
	'xy--semi-native': 'common/vectors.ts',
	'xyz--semi-native': 'common/vectors.ts',
	'xy--integer': 'common/vectors.ts',
	'xyz--integer': 'common/vectors.ts',
	'quaternion': 'common/vectors.ts',
	'quaternion--semi-native': 'common/vectors.ts',
	'pitch-yaw-roll': 'common/vectors.ts',
};

export const supported_meta_types = [
	'transformation',
];

ImportTracker.set_imports('common/vectors.ts', [
	{
		import_these: [
			'decimal_string',
			'decimal_string__signed',
			'integer_string',
		],
		from: '../utils/validators',
	},
]);

declare type vector_object_type = {
	type: 'object',
	required: [string, ...string[]],
	properties: {[key: string]: {
		'$ref': Exclude<keyof typeof auto_constructor_property_types_from_keywords, number>,
	}},
};

export const generators = [
	new TypesGenerationMatchesReferenceName<
		vector_object_type|{
			type: 'string',
			minLength: 1,
			object_string: vector_object_type
		},
		Exclude<keyof typeof auto_constructor_property_types_from_keywords, number>
	>(
		Object.keys(target_files),
		(data, reference_name) => {
			const members = createClass__members__with_auto_constructor(
				'object_string' in data ? data.object_string : data,
				['public', 'readonly'],
			);

			return createClass(reference_name, members, {
				modifiers: ['export'],
			});
		}
	)
];

export const type_node_generators = [
	new TypeNodeGeneration<{
		type: 'object',
		'$ref':
			| '#/definitions/xy'
			| '#/definitions/xyz'
			| '#/definitions/xy--semi-native'
			| '#/definitions/xyz--semi-native'
			| '#/definitions/xy--integer'
			| '#/definitions/xyz--integer'
			| '#/definitions/quaternion'
			| '#/definitions/quaternion--semi-native'
			| '#/definitions/pitch-yaw-roll'
			| '#/definitions/transformation'
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				'$ref': {
					oneOf: [...Object.keys(target_files), ...supported_meta_types].map((ref) => {
						return {type: 'string', const: `#/definitions/${ref}`};
					}),
				},
			},
		},
		(property) => {
			const ref_key = property['$ref'].substring(14) as keyof typeof target_files;

			const reference_name = adjust_class_name(ref_key);

			return new TypeNodeGenerationResult(
				() => ts.factory.createTypeReferenceNode(reference_name),
				{
					[target_files[ref_key]]: [reference_name],
				}
			);
		}
	),
];

export const custom_generators = [
	(): {file: string, node: ts.Node}[] => [{
		file: 'common/vectors.ts',
		node: createClass(
			adjust_class_name('xyz--unsigned-x'),
			createClass__members__with_auto_constructor(
				{
					type: 'object',
					required: ['X', 'Y', 'Z'],
					properties: {
						X: {'$ref': '#/definitions/decimal-string'},
						Y: {'$ref': '#/definitions/decimal-string--signed'},
						Z: {'$ref': '#/definitions/decimal-string--signed'},
					},
				},
				['public', 'readonly']
			),
			{
				modifiers: ['export'],
			}
		),
	}],
	(): {file: string, node: ts.Node}[] => [{
		file: 'common/vectors.ts',
		node: createClass(
			adjust_class_name('transformation'),
			createClass__members__with_auto_constructor(
				{
					type: 'object',
					required: ['Rotation', 'Translation', 'Scale3D'],
					properties: {
						Rotation: {'$ref': '#/definitions/quaternion--semi-native'},
						Translation: {'$ref': '#/definitions/xyz--semi-native'},
						Scale3D: {'$ref': '#/definitions/xyz--semi-native'},
					},
				},
				['public', 'readonly']
			),
			{
				modifiers: ['export'],
			}
		),
	}],
];
