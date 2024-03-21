import {
	TypesGenerationFromSchema,
} from '../TypesGeneration';
import ts from 'typescript';
import {
	adjust_enum_name,
	create_modifier,
	create_string_starts_with,
	type_reference_node,
} from '../TsFactoryWrapper';
import {
	TypeNodeGeneration,
	TypeNodeGenerationResult,
} from '../SchemaBasedResultsMatching/TypeNodeGeneration';
import {
	local_ref,
} from '../StringStartsWith';

export const target_files = Object.entries({
	'common/prefixes.ts': ['Texture2D--basic'],
}).reduce(
	(was, is) => {
		for (const reference of is[1]) {
			was[reference] = is[0];
		}

		return was;
	},
	{} as {[key: string]: string}
);

export const schema = {
	type: 'object',
	required: ['type', 'string_starts_with'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: 'string'},
		string_starts_with: {type: 'string', minLength: 1},
	},
};

export const generators = [
	new TypesGenerationFromSchema<{
		type: string;
		string_starts_with: string;
	}>(schema, (data, reference_name) => {
		return ts.factory.createTypeAliasDeclaration(
			[create_modifier('export')],
			ts.factory.createIdentifier(adjust_enum_name(reference_name)),
			undefined,
			create_string_starts_with(data.string_starts_with)
		);
	}),
];

export const type_node_generators = [
	new TypeNodeGeneration<{$ref: local_ref<'Texture2D--basic'>}>(
		{
			type: 'object',
			required: ['$ref'],
			additionalProperties: false,
			properties: {
				$ref: {
					type: 'string',
					const: local_ref('Texture2D--basic'),
				},
			},
		},
		(data) => {
			const reference_name = data['$ref'].substring(14);

			return new TypeNodeGenerationResult(
				() => type_reference_node(reference_name),
				{
					'common/prefixes': [reference_name],
				}
			);
		}
	),
];
