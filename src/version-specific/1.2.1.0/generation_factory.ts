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
} from '../../../src/version-specific/1.2.1.0/SchemaParser.ts';

import release_1_2_1_0 from '../../../schema/1.2.1.0/docs.json' with {
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
} from './filenames.ts';

import {
	results_from_data_factory,
} from '../../results_from_data_factory.ts';

import type {
	SupportedLang,
} from '../../Utf16leJsonHandler.ts';

async function generation_factory(
	release_data: unknown,
	lang: SupportedLang,
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
	console.log(`Generating Version 1.2 ${lang}`);

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
		{
			...filenames_by_$id,
			[release_1_2_1_0.$id]: {
				types: './generated-types/1.2.1.0/types.ts',
				data: `./generated-types/1.2.1.0/${lang}.data.ts`,
			},
		},
		'docs.json.ts--common--types',
	);

	const get_results_from_data_schema = results_from_data_factory(
		release_1_2_1_0,
		release_data,
		parser,
		lang,
		'release_1_2_1_0_docs',
		'release_1_2_1_0',
		process_types,
		process_data,
	);

	const results: processed_results = [];

	const schema_set: SchemaObjectWith$id[] = [];

	if (process_types) {
		if (!process_data) {
			schema_set.push(
				release_1_2_1_0,
			);
		}
	}

	if (process_data) {
		schema_set.push(
			release_1_2_1_0,
		);
	}

	for (const schema of schema_set) {
		console.log(`getting results for ${schema.$id}`);

		for await (const schema_results of get_results(
			schema,
			adjuster,
			parser,
			get_results_from_data_schema,
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
