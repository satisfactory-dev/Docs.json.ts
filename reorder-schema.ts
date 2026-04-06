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

import {
	object_has_property,
} from '@satisfactory-dev/predicates.ts';

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
				} else if (
					1 === keys.length
					&& keys.includes('allOf')
					&& Array.isArray(value.allOf)
					&& value.allOf.every(
						(maybe): maybe is {$ref: string} => (
							object_has_property(maybe, '$ref')
							&& 'string' === typeof maybe.$ref
						),
					)
				) {
					value.allOf.sort(
						({$ref: a}, {$ref: b}) => {
							const a_hash = a.startsWith('#');
							const b_hash = b.startsWith('#');

							if (a_hash && !b_hash) {
								return 1;
							} else if (!a_hash && b_hash) {
								return -1;
							} else if (a_hash && b_hash) {
								return a.localeCompare(b);
							}

							const [a_schema, a_path] = a.split('#');
							const [b_schema, b_path] = b.split('#');

							const a_override = a_schema.endsWith(
								'.overridable',
							);
							const b_override = b_schema.endsWith(
								'.overridable',
							);

							const a_schema_no_override = a_override
								? a_schema.replace(/\.overridable$/, '')
								: a_schema;
							const b_schema_no_override = b_override
								? b_schema.replace(/\.overridable$/, '')
								: b_schema;

							// eslint-disable-next-line @stylistic/max-len
							if (a_schema_no_override === b_schema_no_override) {
								return a_path.localeCompare(b_path);
							} else if (a_override && !b_override) {
								return -1;
							} else if (!a_override && b_override) {
								return 1;
							}

							return a_schema.localeCompare(b_schema);
						},
					);
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

	if (
		'docs.json.ts--1.2.1.0' !== schema.$id
	) {
	sort_$defs(schema);
	}

	let result = JSON.stringify(schema, null, '\t');
	result = result.replace(
		/\{\s+"type": "string"\s+\}/g,
		'{"type": "string"}',
	);
	await writeFile(filepath, result);
}
