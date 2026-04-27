import {
	$defs_schema,
} from '@signpostmarv/json-schema-typescript-codegen';

import PrecompileValidators from '../PrecompileValidators.ts';

import {
	Object_generate_schema_definition,
} from '../../src/version-specific/1.0.1.4/TypedString/Object.ts';

const ObjectSchema = {
	// oxlint-disable-next-line @stylistic/max-len
	$id: 'docs.json.ts--lib--0.8.3.3--TypedString--PropertySchemaToRegex--Object',
	type: 'object',
	additionalProperties: false,
	required: ['type', 'typed_string'],
	properties: {
		$defs: $defs_schema.properties.$defs,
		type: {
			type: 'string',
			const: 'string',
		},
		typed_string: Object_generate_schema_definition(),
	},
};

export default new PrecompileValidators(
	{
		remove_dataCtxKeys: {},
		specify_types: {
			[ObjectSchema.$id]: [
				'ObjectSchema_type',

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/1.0.1.4/TypedString/PropertySchemaToRegex/Object.ts',
			],
		},
	},
	[
		'parentData',
		'parentDataProperty',
		'rootData',
		'dynamicAnchors',
	],
	{
		ObjectSchema,
	},
);
