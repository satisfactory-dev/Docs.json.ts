import version_1_0_1_0_schema from '../schema/1.0.schema.json' with {
	type: 'json'
};

import update8_schema from '../schema/update8.schema.json' with {
	type: 'json'
};

import common_schema from '../schema/common.schema.json' with {
	type: 'json'
};

export class DocsSchema<
	schema
> {
	readonly schema: schema;

	constructor({
		schema,
	}: {
		schema: schema,
	}) {
		this.schema = schema;
	}
}

class DocsSchemaByLanguageCode<
	en_US
> {
	readonly en_US: DocsSchema<en_US>;

	constructor({
		en_US,
	}: {
		en_US: en_US,
	}) {
		this.en_US = new DocsSchema<en_US>({schema: en_US});
	}
}

export class DocsSchemaByVersion
{
	readonly common: DocsSchemaByLanguageCode<typeof common_schema>;
	readonly update8: DocsSchemaByLanguageCode<typeof update8_schema>;
	readonly version_1_0_1_0: DocsSchemaByLanguageCode<
		typeof version_1_0_1_0_schema
	>;

	constructor()
	{
		this.common = new DocsSchemaByLanguageCode({
			en_US: common_schema,
		});
		this.version_1_0_1_0 = new DocsSchemaByLanguageCode({
			en_US: version_1_0_1_0_schema,
		});
		this.update8 = new DocsSchemaByLanguageCode({
			en_US: update8_schema,
		});
	}
}
