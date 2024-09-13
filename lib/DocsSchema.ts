import update8_schema from '../schema/update8.schema.json' with {
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
	readonly update8: DocsSchemaByLanguageCode<typeof update8_schema>;

	constructor()
	{
		this.update8 = new DocsSchemaByLanguageCode({
			en_US: update8_schema,
		});
	}
}
