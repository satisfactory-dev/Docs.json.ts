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

// eslint-disable-next-line @stylistic/max-len
import update6_overridable from '../../../schema/0.6.1.5/overridable.json' with {
	type: 'json',
};

import update6_properties from '../../../schema/0.6.1.5/properties.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update6_classes__base__overridable from '../../../schema/0.6.1.5/base-classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update6_classes__base from '../../../schema/0.6.1.5/base-classes.json' with {
	type: 'json',
};

import update6_classes from '../../../schema/0.6.1.5/classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update6_classes__overridable from '../../../schema/0.6.1.5/classes.overridable.json' with {
	type: 'json',
};

import update6 from '../../../schema/0.6.1.5/docs.json' with {
	type: 'json',
};

import {
	FilenameAdjuster,
} from '../../FilenameAdjuster.ts';

import type {
	handle_results_options,
	processed_results,
} from '../../printer-factory.ts';
import {
	get_results,
	handle_results,
} from '../../printer-factory.ts';

import {
	filenames_by_$id,
} from './filenames.ts';

import {
	results_from_data_factory,
} from '../../results_from_data_factory.ts';

async function generation_factory(
	release_data: unknown,
	lang: 'en-US',
	{
		types: process_types,
		data: process_data,
	}: {
		types: boolean,
		data: boolean,
	} = {
		types: true,
		data: true,
	},
	handle_results_options: handle_results_options = {},
): Promise<void> {
	console.log('Generating Update 6');

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
		update6,
		release_data,
		parser,
		lang,
		'update6_docs',
		'update6',
		process_types,
		process_data,
	);

	const results: processed_results = [];

	const schema_set: SchemaObjectWith$id[] = [];

	if (process_types) {
		schema_set.push(
			update6_overridable,
			update6_properties,
			update6_classes__base,
			update6_classes__base__overridable,
			update6_classes,
			update6_classes__overridable,
		);

		if (!process_data) {
			schema_set.push(
				update6,
			);
		}
	}

	if (process_data) {
		schema_set.push(
			update6,
		);
	}

	for (const schema of schema_set) {
		console.log(`getting results for ${schema.$id}`);
		for await (const schema_results of get_results(
			schema,
			adjuster,
			parser,
			get_results_from_data_schema,
			process_data,
		)) {
			results.push(...schema_results);
			parser.clear_imports();
		}
	}

	await handle_results(results, handle_results_options);
}

export {
	generation_factory,
};
