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
	object_has_non_empty_array_property,
} from '@satisfactory-dev/predicates.ts';

import type {

	/*
	file splitting doesn't quite work yet
	$ref_type,
	*/
	SchemaObjectWith$id,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	$ref,
	adjust_name_default,
	adjust_name_finisher,
	Printer,
	SchemaParser,

	/*
	Type,
	*/
} from '@signpostmarv/json-schema-typescript-codegen';

import {
	configure_parser,
} from './src/version-specific/0.3.7.7/SchemaParser.ts';

/*
file splitting doesn't quite work yet
import type {
	NativeClass,
} from './src/version-specific/0.3.7.7/NativeClass.ts';
*/

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

const $ref_instance = parser.types.find(
	(maybe) => maybe instanceof $ref,
);

if (undefined === $ref_instance) {
	throw new TypeError('Could not find $ref instance!');
}

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

function printer_factory(): Printer {
	const printer = new Printer({
		data_filename_callback: (
			name,
		) => {
			const result = adjuster.adjust_name_to_data_filename(name);

			/*
			file splitting doesn't quite work yet
			if (/^FG[A-Za-z]+(?:_data)?$/.test(name)) {
				result = result
					.replace(
						/\.ts$/,
						`/${name.replace(/_data$/, '')}.ts`,
					) as `./${string}.ts`;
			}
			*/

			return result;
		},
		type_filename_callback: (
			name,
		) => {
			const result = adjuster.adjust_name_to_type_filename(name);

			/*
			file splitting doesn't quite work yet
			if (/^FG[A-Za-z]+(?:_type)?$/.test(name)) {
				result = result
					.replace(
						/\.ts$/,
						`/${name.replace(/_type$/, '')}.ts`,
					) as `./${string}.ts`;
			}
			*/

			return result;
		},
	});

	return printer;
}

async function get_results_from_$defs_only_schema(
	schema: SchemaObjectWith$id,
	adjuster: FilenameAdjuster,
) {
	adjuster.current_id = schema.$id;

	const printer = printer_factory();

	return await printer.parse(
		{},
		schema,
		parser,
		`${schema.$id}_type`,
		`${schema.$id}_data`,
	);
}

async function* get_results_from_data_schema(
	schema: SchemaObjectWith$id,
	adjuster: FilenameAdjuster,
) {
	adjuster.current_id = schema.$id;

	const printer = printer_factory();

	let data: unknown = undefined;

	switch (schema.$id) {
		case 'docs.json.ts--0.3.7.7':
			data = update3_data;
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

	/*
	file splitting doesn't quite work yet
	for (let i = 0; i < data.length; ++i) {
		const sub_data: {
			NativeClass: string,
		} = data[i] as {
			NativeClass: string,
		};

		const sub_schema = Type.maybe_add_$defs(
			schema,
			(
				$ref_instance as $ref
			).resolve_def(
				schema.prefixItems[i] as $ref_type,
				schema.$defs || {},
			),
		);

		const type_name = /^Class'\/Script\/FactoryGame\.(FG[A-Za-z]+)'$/.exec(
			sub_data.NativeClass,
		);

		if (null === type_name) {
			throw new TypeError('Could not get type name!');
		}

		const foo = await printer.parse(
			sub_data,
			sub_schema,
			parser,
			`${type_name[1]}_type`,
			`${type_name[1]}_data`,
		);

		yield foo;
		parser.clear_imports();
	}
	*/
}

async function* get_results(
	schema: SchemaObjectWith$id,
	adjuster: FilenameAdjuster,
) {
	if (!('type' in schema)) {
		yield get_results_from_$defs_only_schema(schema, adjuster);

		/*
		file splitting doesn't quite work yet
		parser.clear_imports();
		*/
	} else {
		yield* get_results_from_data_schema(schema, adjuster);
	}
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
	for await (const schema_results of get_results(
		schema,
		adjuster,
	)) {
		results.push(...schema_results);
		parser.clear_imports();
	}
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
				.replace(
					/((?:import|export)(?: type)? )(\{)([^}]+)+(\s*\})/g,
					(
						substring,
						opener: string,
						left_bracket: string,
						middle: string,
						right_bracket: string,
					) => {
						return `${
							opener
						}${
							left_bracket
						}\n\t${
							middle
								.trim()
								.split(',')
								.map((e) => e.trim())
								.join(',\n\t')
						}\n${
							right_bracket
						}`;
					})
		}`,
	);
}
