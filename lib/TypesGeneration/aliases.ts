import {TypesGenerationMatchesReferenceName} from "../TypesGeneration";
import {adjust_class_name, create_modifier, create_type} from "../TsFactoryWrapper";
import ts from "typescript";

export const target_files = {
	'mScannerDisplayText': 'common/aliases.ts',
};

export const generators = [
	new TypesGenerationMatchesReferenceName<{type: 'string'}, keyof typeof target_files>(
		Object.keys(target_files) as (keyof typeof target_files)[],
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[create_modifier('export')],
				adjust_class_name(reference_name),
				undefined,
				create_type('string')
			);
		}
	),
];
