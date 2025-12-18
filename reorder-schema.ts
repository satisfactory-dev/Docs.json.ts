import {
	glob,
	readFile,
	writeFile,
} from 'node:fs/promises';

import type {
	ObjectOfSchemas,
	SchemaObject,
	SchemaObjectWith$id,
} from '@signpostmarv/json-schema-typescript-codegen';

function sort_$defs(schema: SchemaObjectWith$id) {
	const {$defs} = schema;

	if (undefined === $defs) {
		throw new TypeError(`No $defs in ${schema.$id}!`);
	}

	function isLowercase(value: string): boolean {
		return value.toLocaleLowerCase() === value;
	}

	const sorted_$defs: ObjectOfSchemas = Object.fromEntries(
		Object
			.entries($defs)
			.map((
				[key, value]: [string, SchemaObject],
			): [string, SchemaObject] => {
				const keys = Object.keys(value);

				if (
					3 === keys.length
					&& keys.includes('type')
					&& keys.includes('$ref')
					&& keys.includes('unevaluatedProperties')
				) {
					const {
						type,
						$ref,
						unevaluatedProperties,
					} = value;

					value = {
						type,
						$ref,
						unevaluatedProperties,
					};
				}

				return [key, value];
			})
			.sort(([a], [b]) => {
				const a_is_lower = isLowercase(a[0]);
				const b_is_lower = isLowercase(b[0]);

				if (
					(a_is_lower || b_is_lower)
					&& a_is_lower !== b_is_lower
				) {
					if (a_is_lower) {
						return -1;
					}

					return 1;
				}

				return a.localeCompare(b);
			}),
	);

	schema.$defs = sorted_$defs;
}

for await (const filepath of glob(`${import.meta.dirname}/schema/**/*.json`)) {
	const schema = JSON.parse(
		(await readFile(filepath)).toString(),
	) as SchemaObjectWith$id;

	sort_$defs(schema);
	let result = JSON.stringify(schema, null, '\t');
	result = result.replace(
		/\{\s+"type": "string"\s+\}/g,
		'{"type": "string"}',
	);
	await writeFile(filepath, result);
}
