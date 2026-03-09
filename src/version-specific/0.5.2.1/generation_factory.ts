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
} from '../../version-specific/0.5.2.1/SchemaParser.ts';

import update5_properties from '../../../schema/0.5.2.1/properties.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_overridable from '../../../schema/0.5.2.1/overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__base from '../../../schema/0.5.2.1/base-classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__base__overridable from '../../../schema/0.5.2.1/base-classes.overridable.json' with {
	type: 'json',
};

import update5_classes from '../../../schema/0.5.2.1/classes.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__overridable from '../../../schema/0.5.2.1/classes.overridable.json' with {
	type: 'json',
};

import update5 from '../../../schema/0.5.2.1/docs.json' with {
	type: 'json',
};

import {
	FilenameAdjuster,
} from '../../FilenameAdjuster.ts';

import type {
	processed_results,
} from '../../printer-factory.ts';
import {
	get_results,
	handle_results,
} from '../../printer-factory.ts';

import {
	filenames_by_$id,
} from '../../version-specific/0.5.2.1/filenames.ts';

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
): Promise<void> {
	console.log('Generating Update 5');

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
		update5,
		release_data,
		parser,
		lang,
		'update5_docs',
		'update5',
		process_types,
		process_data,
	);

	const results: processed_results = [];

	const schema_set: SchemaObjectWith$id[] = [];

	if (process_types) {
		schema_set.push(
			update5_overridable,
			update5_properties,
			update5_classes__base,
			update5_classes__base__overridable,
			update5_classes,
			update5_classes__overridable,
		);

		if (!process_data) {
			schema_set.push(
				update5,
			);
		}
	}

	if (process_data) {
		schema_set.push(
			update5,
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

	await handle_results(results);
}

export {
	generation_factory,
};
