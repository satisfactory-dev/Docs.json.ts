import {
	dirname,
} from 'node:path';
import {
	mkdir,
	writeFile,
} from 'node:fs/promises';

import type {
	SchemaObjectWith$id,
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';
import {
	Printer,
} from '@signpostmarv/json-schema-typescript-codegen';

import type {
	FilenameAdjuster,
} from './FilenameAdjuster.ts';

export type processed_results = Awaited<ReturnType<Printer['parse']>>[0][];

export function printer_factory(adjuster: FilenameAdjuster): Printer {
	const printer = new Printer({
		data_filename_callback: (
			name,
		) => {
			const result = adjuster.adjust_name_to_data_filename(name);

			return result;
		},
		type_filename_callback: (
			name,
		) => {
			const result = adjuster.adjust_name_to_type_filename(name);

			return result;
		},
	});

	return printer;
}

export async function get_results_from_$defs_only_schema(
	schema: SchemaObjectWith$id,
	adjuster: FilenameAdjuster,
	parser: SchemaParser,
) {
	adjuster.current_id = schema.$id;

	const printer = printer_factory(adjuster);

	return await printer.parse(
		{},
		schema,
		parser,
		`${schema.$id}_type`,
		`${schema.$id}_data`,
	);
}

export async function* get_results(
	schema: SchemaObjectWith$id,
	adjuster: FilenameAdjuster,
	parser: SchemaParser,
	get_results_from_data_schema: (
		schema: SchemaObjectWith$id,
		adjuster: FilenameAdjuster,
	) => AsyncGenerator<Awaited<ReturnType<Printer['parse']>>>,
) {
	if (!('type' in schema)) {
		yield get_results_from_$defs_only_schema(schema, adjuster, parser);
	} else {
		yield* get_results_from_data_schema(schema, adjuster);
	}
}

export async function handle_results(
	results: processed_results,
): Promise<void> {
	const files = new Set<string>();

	for (const result of results) {
		if (files.has(result.filename)) {
			throw new Error(`${result.filename} already written to!`);
		}

		const code = result.code.replace(
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
			});

		const directory = dirname(result.filename);
		await mkdir(directory, {recursive: true});
		await writeFile(
			result.filename,
			`/* eslint-disable @stylistic/max-len */${
				'\n\n'
			}${
				code
			}`,
		);
	}
}
