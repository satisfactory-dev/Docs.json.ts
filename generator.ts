import {
	dirname,
} from 'node:path';
import {
	mkdir,
	writeFile,
} from 'node:fs/promises';

import {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	configure_parser,
} from './src/version-specific/0.3.7.7/SchemaParser.ts';

import type {
	SchemaObjectWith$id,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	adjust_name_default,
	adjust_name_finisher,
	Printer,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

import common_types from './schema/common/types.json' with {
	type: 'json',
};

import update3_properties from './schema/0.3.7.7/properties.json' with {
	type: 'json',
};

import update3_classes__base from './schema/0.3.7.7/base-classes.json' with {
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

const ajv = new Ajv({strict: true, verbose: true});

const parser = new SchemaParser({ajv});

configure_parser(parser);

type filenames_by_$id = {
	[key: string]: {
		types: `./${string}.ts`,
		data: `./${string}.ts`,
	},
};

const filenames_by_$id: filenames_by_$id = {
	[common_types.$id]: {
		types: './generated-types/common/types.ts',
		data: './generated-types/common/data.ts',
	},
	[update3_properties.$id]: {
		types: './generated-types/0.3.7.7/types/properties.ts',
		data: './generated-types/0.3.7.7/data/properties.ts',
	},
	[update3_classes__base.$id]: {
		types: './generated-types/0.3.7.7/classes/Base.ts',
		data: './generated-types/0.3.7.7/classes/Base.data.ts',
	},
	[update3_classes.$id]: {
		types: './generated-types/0.3.7.7/classes.ts',
		data: './generated-types/0.3.7.7/classes.data.ts',
	},
	[update3.$id]: {
		types: './generated-types/0.3.7.7/types.ts',
		data: './generated-types/0.3.7.7/data.ts',
	},
};


declare global {
	interface ObjectConstructor {
		fromEntries<
			Result extends {[key: string]: unknown} = {[key: string]: unknown},
		>(
			entries: [keyof Result, Result[keyof Result]][],
		): Result;
		fromEntries<
			T,
		>(
			entries: Iterable<readonly [PropertyKey, T]>
		): { [k: string]: T };
	}
}


class FilenameAdjuster<
	FilenamesById extends filenames_by_$id = filenames_by_$id,
> {
	#filenames_by_$id: FilenamesById;

	#adjusted_names_for_ids: {[key in keyof FilenamesById]: string};

	#adjusted_names_for_ids_entries: [keyof FilenamesById & string, string][];

	current_id: keyof FilenamesById;

	constructor(
		filenames_by_$id: FilenamesById,
		current_id: keyof FilenamesById,
	) {
		this.#filenames_by_$id = filenames_by_$id;
		this.current_id = current_id;
		this.#adjusted_names_for_ids = Object.fromEntries<{
			[k in keyof FilenamesById]: string
		}>(
			Object.keys(filenames_by_$id).map((
				$id,
			): [
				keyof FilenamesById,
				string,
			] => [
				$id,
				adjust_name_finisher(
					adjust_name_default($id),
				),
			]),
		);
		this.#adjusted_names_for_ids_entries = Object.entries(
			this.#adjusted_names_for_ids,
		);
	}

	adjust_name_to_data_filename(name: string): `./${string}.ts` {
		const maybe_matched = this.#adjusted_names_for_ids_entries.find(
			([, maybe]) => name.startsWith(maybe),
		);

		const matched_key = (maybe_matched || [this.current_id])[0];

		return this.#filenames_by_$id[matched_key].data;
	}

	adjust_name_to_type_filename(name: string): `./${string}.ts` {
		const maybe_matched = this.#adjusted_names_for_ids_entries.find(
			([, maybe]) => name.startsWith(maybe),
		);

		const matched_key = (maybe_matched || [this.current_id])[0];

		return this.#filenames_by_$id[matched_key].types;
	}
}

const adjuster = new FilenameAdjuster(
	filenames_by_$id,
	'docs.json.ts--common--types',
);

async function get_results_from_$defs_only_schema(
	schema: SchemaObjectWith$id,
	adjuster: FilenameAdjuster,
) {
	adjuster.current_id = schema.$id;

	const printer = new Printer({
		data_filename_callback: (
			name,
		) => adjuster.adjust_name_to_data_filename(name),
		type_filename_callback: (
			name,
		) => adjuster.adjust_name_to_type_filename(name),
	});

	return await printer.parse(
		{},
		schema,
		parser,
		`${schema.$id}_type`,
		`${schema.$id}_data`,
	);
}

async function get_results_from_data_schema(
	schema: SchemaObjectWith$id,
	adjuster: FilenameAdjuster,
) {
	adjuster.current_id = schema.$id;

	const printer = new Printer({
		data_filename_callback: (
			name,
		) => adjuster.adjust_name_to_data_filename(name),
		type_filename_callback: (
			name,
		) => adjuster.adjust_name_to_type_filename(name),
	});

	let data: unknown = undefined;

	switch (schema.$id) {
		case 'docs.json.ts--0.3.7.7':
			data = update3_data;
			break;
	}

	if (undefined === data) {
		throw new TypeError(`No data specified for ${schema.$id}`);
	}

	return await printer.parse(
		data,
		schema,
		parser,
		`${schema.$id}_type`,
		`${schema.$id}_data`,
	);
}

function get_results(
	schema: SchemaObjectWith$id,
	adjuster: FilenameAdjuster,
) {
	if (!('type' in schema)) {
		return get_results_from_$defs_only_schema(schema, adjuster);
	}

	return get_results_from_data_schema(schema, adjuster);
}

const results: Awaited<ReturnType<Printer['parse']>>[0][] = [];

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
	common_types,
	update3_properties,
	update3_classes__base,
	update3_classes,
	update3,
]) {
	const schema_results = await get_results(
		schema,
		adjuster,
	);

	parser.clear_imports();

	results.push(...schema_results);
}

const files = new Set<string>();

for (const result of results) {
	if (files.has(result.filename)) {
		throw new Error(`${result.filename} already written to!`);
	}

	const directory = dirname(result.filename);
	await mkdir(directory, {recursive: true});
	await writeFile(
		result.filename,
		`/* eslint-disable @stylistic/max-len */${
			'\n\n'
		}${
			result.code
		}`,
	);
}
