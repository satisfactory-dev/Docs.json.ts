import {TypesGenerationFromSchema} from "../TypesGeneration";
import ts from "typescript";
import {adjust_enum_name, create_modifier} from "../TsFactoryWrapper";

export const target_files = Object.entries({
	'common/enum.ts': [
		'boolean',
		'boolean-extended',
		'mStackSize',
		'mForm',
		'mScannableType',
		'mEventType',
		'mFreightCargoType',
		'MaterialSlotName',
		'weaponState',
	],
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
		'enum',
	],
	additionalProperties: false,
	properties: {
		type: {type: 'string', 'const': 'string'},
		enum: {type: 'array', minItems: 1, items: {
			type: 'string'
		}}
	},
};

export const generators = [
	new TypesGenerationFromSchema<{
		type: string,
		enum: [string, ...string[]]
	}>(
		schema,
		(data, reference_name) => {
			return ts.factory.createTypeAliasDeclaration(
				[
					create_modifier('export'),
				],
				ts.factory.createIdentifier(adjust_enum_name(reference_name)),
				undefined,
				ts.factory.createUnionTypeNode(
					data.enum.map((value) => {
						return ts.factory.createLiteralTypeNode(
							ts.factory.createStringLiteral(value)
						);
					})
				)
			);
		}
	),
];
