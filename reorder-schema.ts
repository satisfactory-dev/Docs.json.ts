import {
	writeFile,
} from 'node:fs/promises';

import type {
	ObjectOfSchemas,
	SchemaObjectWith$id,
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

for (
	const [
		schema,
		filepath,
	] of [
		[common_types, './schema/common/types.json'],
		[update3_properties, './schema/0.3.7.7/properties.json'],
		[update3_classes__base, './schema/0.3.7.7/base-classes.json'],
		[update3_classes, './schema/0.3.7.7/classes.json'],
		[update3, './schema/0.3.7.7/docs.json'],
	] as [SchemaObjectWith$id, string][]
) {
	sort_$defs(schema);
	await writeFile(filepath, JSON.stringify(schema, null, '\t'));
}
