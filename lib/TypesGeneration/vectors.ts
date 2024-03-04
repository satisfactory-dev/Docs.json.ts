import {ImportTracker, TypesGenerationMatchesReferenceName} from "../TypesGeneration";
import {
	auto_constructor_property_types,
	createClass,
	createClass__members__with_auto_constructor,
} from "../TsFactoryWrapper";

export const target_files:{[key: string]: string} = {
	'xy': 'common/vectors.ts',
	'xyz': 'common/vectors.ts',
	'xy--semi-native': 'common/vectors.ts',
	'xyz--semi-native': 'common/vectors.ts',
	'xy--integer': 'common/vectors.ts',
	'xyz--integer': 'common/vectors.ts',
	'quaternion': 'common/vectors.ts',
	'quaternion--semi-native': 'common/vectors.ts',
};

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
		'$ref': Exclude<keyof typeof auto_constructor_property_types, number>,
	}},
};

export const generators = [
	new TypesGenerationMatchesReferenceName<
		vector_object_type|{
			type: 'string',
			minLength: 1,
			object_string: vector_object_type
		},
		Exclude<keyof typeof auto_constructor_property_types, number>
	>(
		Object.keys(target_files),
		(data, reference_name) => {
			const members = createClass__members__with_auto_constructor(
				'object_string' in data ? data.object_string : data,
				['public'],
			);

			return createClass(reference_name, members, {
				modifiers: ['export'],
			});
		}
	)
];
