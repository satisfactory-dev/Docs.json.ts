// oxlint-disable-next-line @stylistic/max-len
import TintColor from '../../schema/lib/0.4.2.11/TypedString/PropertySchemaToRegex/TintColor.schema.json' with {
	type: 'json',
};

import PrecompileValidators from '../PrecompileValidators.ts';

export default new PrecompileValidators(
	{
		remove_dataCtxKeys: {},
		specify_types: {
			[TintColor.$id]: [
				'TintColor_type',

				// oxlint-disable-next-line @stylistic/max-len
				'../../src/version-specific/0.4.2.11/TypedString/PropertySchemaToRegex/TintColor.ts',
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
		TintColor,
	},
);
