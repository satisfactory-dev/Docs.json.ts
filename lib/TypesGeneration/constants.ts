import ts from 'typescript';

import {TypesGenerationFromSchema} from '../TypesGeneration';
import {adjust_class_name, create_modifier} from '../TsFactoryWrapper';

export const target_files = Object.entries({
	'common/constants.ts': [
		'empty-object',
		'mChainsawState',
		'mSnappedPassthroughs',
		'mAspect',
		'mPlatformDockingStatus',
		'mBatteryStatus',
		'InfinityExtrap',
	]
}).reduce((was, is) => {
	for (const reference of is[1]) {
		was[reference] = is[0];
	}

	return was;
}, {} as {[key: string]: string});

export const schema = {
	type: 'object',
	required: [
		'type',
		'const',
	],
	additionalProperties: false,
	properties: {
		type: {type: 'string', 'const': 'string'},
		const: {type: 'string'},
	},
};

export const generators = [
	new TypesGenerationFromSchema<{
		type: 'string',
		const: string
	}>(
		schema,
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[
					create_modifier('export'),
				],
				ts.factory.createIdentifier(adjust_class_name(reference_name)),
				undefined,
				ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(data.const))
			);
		}
	),
];
