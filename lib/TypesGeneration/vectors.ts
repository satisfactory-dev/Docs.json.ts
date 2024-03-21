import {
	adjust_class_name,
	createClass,
	createClass__members__with_auto_constructor,
	type_reference_node,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import ts from 'typescript';

export const target_files = {
	xy: 'common/vectors.ts',
	xyz: 'common/vectors.ts',
	'xyz--semi-native': 'common/vectors.ts',
	'xy--integer': 'common/vectors.ts',
	'xyz--integer': 'common/vectors.ts',
	quaternion: 'common/vectors.ts',
	'pitch-yaw-roll': 'common/vectors.ts',
};

export const type_node_generators = [
	new TypeNodeGeneration<{
		type: 'object';
		$ref:
			| '#/definitions/xy'
			| '#/definitions/xyz'
			| '#/definitions/xyz--semi-native'
			| '#/definitions/xy--integer'
			| '#/definitions/xyz--integer'
			| '#/definitions/pitch-yaw-roll';
	}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					oneOf: [...Object.keys(target_files)].map((ref) => {
						return {type: 'string', const: `#/definitions/${ref}`};
					}),
				},
			},
		},
		(property) => {
			const ref_key = property['$ref'].substring(
				14
			) as keyof typeof target_files;

			const reference_name = adjust_class_name(ref_key);

			return new TypeNodeGenerationResult(
				() => type_reference_node(reference_name),
				{
					[target_files[ref_key]]: [reference_name],
				}
			);
		}
	),
];

export const custom_generators = [
	(): {file: string; node: ts.Node}[] => [
		{
			file: 'common/vectors.ts',
			node: createClass(
				adjust_class_name('xyz--unsigned-x'),
				createClass__members__with_auto_constructor(
					{
						type: 'object',
						required: ['X', 'Y', 'Z'],
						properties: {
							X: {$ref: '#/definitions/decimal-string'},
							Y: {$ref: '#/definitions/decimal-string--signed'},
							Z: {$ref: '#/definitions/decimal-string--signed'},
						},
					},
					['public', 'readonly']
				),
				{
					modifiers: ['export'],
				}
			),
		},
	],
];
