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
} from './SchemaParser.ts';

import common_types from '../../../schema/common/types.json' with {
	type: 'json',
};

// oxlint-disable-next-line @stylistic/max-len
import common_classes__base from '../../../schema/common/base-classes.json' with {
	type: 'json',
};

import common_classes from '../../../schema/common/classes.json' with {
	type: 'json',
};

import common_properties from '../../../schema/common/properties.json' with {
	type: 'json',
};

import {
	FilenameAdjuster,
} from './../../FilenameAdjuster.ts';

import type {
	processed_results,
} from './../../printer-factory.ts';
import {
	get_results,
	handle_results,
} from './../../printer-factory.ts';

import {
	filenames_by_$id,
} from './filenames.ts';

async function generation_factory(
): Promise<void> {
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

	// eslint-disable-next-line require-yield, @typescript-eslint/require-await
	async function* get_results_from_data_schema(
	) {
		throw new Error('Should not be called for common types!');
	}

	const results: processed_results = [];

	const schema_set: SchemaObjectWith$id[] = [
		common_types,
		common_properties,
		common_classes__base,
		common_classes,
	];

	for (const schema of schema_set) {
		console.log(`getting results for ${schema.$id}`);
		for await (const schema_results of get_results(
			schema,
			adjuster,
			parser,
			get_results_from_data_schema,
			false,
		)) {
			results.push(...schema_results);
			parser.clear_imports();
		}
	}

	await handle_results(results);
}

export {
	generation_factory,
};

