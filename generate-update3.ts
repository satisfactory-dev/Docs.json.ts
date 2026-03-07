import {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import type {
	SchemaObjectWith$id,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$ref,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	configure_parser,
} from './src/version-specific/0.3.7.7/SchemaParser.ts';

import update3_overridable from './schema/0.3.7.7/overridable.json' with {
	type: 'json',
};

import update3_properties from './schema/0.3.7.7/properties.json' with {
	type: 'json',
};

import update3_classes__base from './schema/0.3.7.7/base-classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update3_classes__base__overridable from './schema/0.3.7.7/base-classes.overridable.json' with {
	type: 'json',
};

import update3_classes from './schema/0.3.7.7/classes.json' with {
	type: 'json',
};

import update3 from './schema/0.3.7.7/docs.json' with {
	type: 'json',
};

import update3_data from './data/0.3.7.7/Docs/Docs.utf8.json' with {
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
} from './src/printer-factory.ts';

import {
	filenames_by_$id,
} from './src/version-specific/0.3.7.7/filenames.ts';

import {
	results_from_data_factory,
} from './src/results_from_data_factory.ts';

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

const get_results_from_data_schema = results_from_data_factory(
	update3,
	update3_data,
	parser,
	'en-US',
	'update3_docs',
	'update3',
);

const results: processed_results = [];

console.log(
	`update 3: ${
		100
		* (
			update3.prefixItems.filter((maybe) => !('type' in maybe)).length
			/ update3.prefixItems.length
		)
	}%`,
);

for (const schema of [
	update3_overridable,
	update3_properties,
	update3_classes__base__overridable,
	update3_classes__base,
	update3_classes,
	update3,
]) {
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
