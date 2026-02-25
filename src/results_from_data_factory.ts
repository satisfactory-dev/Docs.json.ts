import {
	object_has_non_empty_array_property,
} from '@satisfactory-dev/predicates.ts';

import type {
	SchemaObjectWith$id,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	FilenameAdjuster,
} from './FilenameAdjuster.ts';

import {
	printer_factory,
} from './printer-factory.ts';

import type {
	SupportedLang,
} from './Utf16leJsonHandler.ts';

function results_from_data_factory(
	docs_schema: SchemaObjectWith$id,
	docs_data: unknown,
	parser: SchemaParser,
	lang: SupportedLang,
) {
	return async function* (
		schema: SchemaObjectWith$id,
		adjuster: FilenameAdjuster,
	) {
		adjuster.current_id = schema.$id;

		const printer = printer_factory(adjuster);

		let data: unknown = undefined;

		switch (schema.$id) {
			case docs_schema.$id:
				data = docs_data;
				break;
		}

		if (undefined === data) {
			throw new TypeError(`No data specified for ${schema.$id} ${lang}`);
		} else if (!Array.isArray(data)) {
			throw new TypeError(
				`Data was not in expected format for ${schema.$id} ${lang}`,
			);
		} else if (!object_has_non_empty_array_property(
			schema,
			'prefixItems',
		)) {
			throw new TypeError(
				`Schema was not in expected format for ${schema.$id} ${lang}`,
			);
		}

		yield await printer.parse(
			data,
			schema,
			parser,
		);
	};
}

export {
	results_from_data_factory,
};
