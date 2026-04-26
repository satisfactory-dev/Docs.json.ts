import {
	OneOf,
} from '@signpostmarv/json-schema-typescript-codegen';

import PrecompileValidators from '../PrecompileValidators.ts';

const OneOf_schema = {
	// oxlint-disable-next-line @stylistic/max-len
	$id: 'docs.json.ts--lib--0.5.2.1--TypedString--PropertySchemaToRegex--OneOf',
	...OneOf.generate_schema_definition({
		kind: 'oneOf',
		mode: 'unspecified',
	}),
};

const properties_object_schema = {
	// oxlint-disable-next-line @stylistic/max-len
	$id: 'docs.json.ts--lib--0.5.2.1--TypedString--PropertySchemaToRegex--properties_object',
	type: 'object',
	additionalProperties: false,
	required: ['$ref'],
	properties: {
		$ref: {
			type: 'string',
			// eslint-disable-next-line @stylistic/max-len
			pattern: `^docs.json.ts--0.5.2.1--properties#\\/\\$defs\\/(?:${[
				'mDisableSnapOn--bottom',
				'mDisableSnapOn--top',
				'mDockingRuleSet',
				'FalloffCurve--EditorCurveData--only',
				'FalloffCurve--EditorCurveData--with-ExternalCurve',
			].join('|')})$`,
		},
	},
};

export default new PrecompileValidators(
	{
		remove_dataCtxKeys: {},
		specify_types: {
			[OneOf_schema.$id]: [
				'OneOf_type',

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.5.2.1/TypedString/PropertySchemaToRegex/OneOf.ts',
			],
			[properties_object_schema.$id]: [
				'properties_object_type',

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.5.2.1/TypedString/PropertySchemaToRegex/properties_objects.ts',
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
		OneOf: OneOf_schema,
		properties_object: properties_object_schema,
	},
);
