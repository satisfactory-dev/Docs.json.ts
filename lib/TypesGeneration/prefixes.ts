import {ImportTracker, TypesGenerationFromSchema} from "../TypesGeneration";
import ts from "typescript";
import {adjust_enum_name, create_modifier, create_string_starts_with} from "../TsFactoryWrapper";

export const target_files = Object.entries({
	'common/prefixes.ts': [
		'Texture2D--basic',
	],
}).reduce((was, is) => {
	for (const reference of is[1]) {
		was[reference] = is[0];
	}

	return was;
}, {} as {[key: string]: string});


ImportTracker.set_imports('common/prefixes.ts', [{
	import_these: [
		'string_starts_with',
	],
	from: '../utils/validators',
}]);

export const schema = {
	type: 'object',
	required: [
		'type',
		'string_starts_with',
	],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		string_starts_with: {type: 'string', minLength: 1},
	},
};

export const generators = [
	new TypesGenerationFromSchema<{
		type: string,
		string_starts_with: string,
	}>(
		schema,
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[
					create_modifier('export'),
				],
				ts.factory.createIdentifier(adjust_enum_name(reference_name)),
				undefined,
				create_string_starts_with(data.string_starts_with)
			);
		}
	),
];
