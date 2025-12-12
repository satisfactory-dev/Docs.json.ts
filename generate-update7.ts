import {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	object_has_non_empty_array_property,
} from '@satisfactory-dev/predicates.ts';

import type {
	SchemaObjectWith$id,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$ref,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	configure_parser,
} from './src/version-specific/0.7.1.1/SchemaParser.ts';

import update7_classes__base from './schema/0.7.1.1/base-classes.json' with {
	type: 'json',
};

import update7_classes from './schema/0.7.1.1/classes.json' with {
	type: 'json',
};

import update7 from './schema/0.7.1.1/docs.json' with {
	type: 'json',
};

import update7_data from './data/0.7.1.1/Docs/Docs.utf8.json' with {
	type: 'json',
};

import {
	FilenameAdjuster,
} from './src/FilenameAdjuster.ts';

import type {
	processed_results,
} from './src/printer-factory.ts';
import {
	get_results,
	handle_results,
	printer_factory,
} from './src/printer-factory.ts';

import {
	filenames_by_$id,
} from './src/version-specific/0.7.1.1/filenames.ts';

console.log('Generating Update 7');

const ajv = new Ajv({strict: true, verbose: true});

const parser = new SchemaParser({ajv});

configure_parser(parser);

const $ref_instance = parser.types.find(
	(maybe) => maybe instanceof $ref,
);

if (undefined === $ref_instance) {
	throw new TypeError('Could not find $ref instance!');
}

const adjuster = new FilenameAdjuster(
	filenames_by_$id,
	'docs.json.ts--common--types',
);

async function* get_results_from_data_schema(
	schema: SchemaObjectWith$id,
	adjuster: FilenameAdjuster,
) {
	adjuster.current_id = schema.$id;

	const printer = printer_factory(adjuster);

	let data: unknown = undefined;

	switch (schema.$id) {
		case 'docs.json.ts--0.7.1.1':
			data = update7_data;
			break;
	}

	if (undefined === data) {
		throw new TypeError(`No data specified for ${schema.$id}`);
	} else if (!Array.isArray(data)) {
		throw new TypeError(
			`Data was not in expected format for ${schema.$id}`,
		);
	} else if (!object_has_non_empty_array_property(schema, 'prefixItems')) {
		throw new TypeError(
			`Schema was not in expected format for ${schema.$id}`,
		);
	}

	yield await printer.parse(
		data,
		schema,
		parser,
	);
}

const results: processed_results = [];

for (const schema of [
	update7_classes__base,
	update7_classes,
	update7,
]) {
	console.log(`getting results for ${schema.$id}`);

	for await (const schema_results of get_results(
		schema as SchemaObjectWith$id,
		adjuster,
		parser,
		get_results_from_data_schema,
	)) {
		results.push(...schema_results);
		parser.clear_imports();
	}
}

await handle_results(results);
