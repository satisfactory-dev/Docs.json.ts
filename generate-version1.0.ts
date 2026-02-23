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
} from './src/version-specific/1.0.1.4/SchemaParser.ts';

import update3_overridable from './schema/0.3.7.7/overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update3_classes__base__overridable from './schema/0.3.7.7/base-classes.overridable.json' with {
	type: 'json',
};

import update4_overridable from './schema/0.4.2.11/overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update4_classes__base__overridable from './schema/0.4.2.11/base-classes.overridable.json' with {
	type: 'json',
};

import update5_overridable from './schema/0.5.2.1/overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__base__overridable from './schema/0.5.2.1/base-classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__overridable from './schema/0.5.2.1/classes.overridable.json' with {
	type: 'json',
};

import update6_overridable from './schema/0.6.1.5/overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update6_classes__base__overridable from './schema/0.6.1.5/base-classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update6_classes__overridable from './schema/0.6.1.5/classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update7_classes__base__overridable from './schema/0.7.1.1/base-classes.overridable.json' with {
	type: 'json',
};

import release_1_0_properties from './schema/1.0.1.4/properties.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import release_1_0_classes__base from './schema/1.0.1.4/base-classes.json' with {
	type: 'json',
};

import release_1_0_classes from './schema/1.0.1.4/classes.json' with {
	type: 'json',
};

import release_1_0 from './schema/1.0.1.4/docs.json' with {
	type: 'json',
};

import release_1_0_data from './data/1.0.1.4/Docs/en-us.utf8.json' with {
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
} from './src/version-specific/1.0.1.4/filenames.ts';

console.log('Generating Version 1.0');

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
		case 'docs.json.ts--1.0.1.4':
			data = release_1_0_data;
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
	update3_overridable,
	update3_classes__base__overridable,
	update4_overridable,
	update4_classes__base__overridable,
	update5_overridable,
	update5_classes__base__overridable,
	update5_classes__overridable,
	update6_overridable,
	update6_classes__base__overridable,
	update6_classes__overridable,
	update7_classes__base__overridable,
	release_1_0_properties,
	release_1_0_classes__base,
	release_1_0_classes,
	release_1_0,
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
