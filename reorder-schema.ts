import {
	writeFile,
} from 'node:fs/promises';

import type {
	ObjectOfSchemas,
	SchemaObject,
	SchemaObjectWith$id,
} from '@signpostmarv/json-schema-typescript-codegen';

import common_types from './schema/common/types.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update3_classes__base__overridable from './schema/0.3.7.7/base-classes.overridable.json' with {
	type: 'json',
};

import update3_overridable from './schema/0.3.7.7/overridable.json' with {
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

// eslint-disable-next-line @stylistic/max-len
import update4_classes__base__overridable from './schema/0.4.2.11/base-classes.overridable.json' with {
	type: 'json',
};

import update4_overridable from './schema/0.4.2.11/overridable.json' with {
	type: 'json',
};

import update4_properties from './schema/0.4.2.11/properties.json' with {
	type: 'json',
};

import update4_classes from './schema/0.4.2.11/classes.json' with {
	type: 'json',
};

import update4_classes__base from './schema/0.4.2.11/base-classes.json' with {
	type: 'json',
};

import update4 from './schema/0.4.2.11/docs.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__base__overridable from './schema/0.5.2.1/base-classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__overridable from './schema/0.5.2.1/classes.overridable.json' with {
	type: 'json',
};

import update5_overridable from './schema/0.5.2.1/overridable.json' with {
	type: 'json',
};

import update5_properties from './schema/0.5.2.1/properties.json' with {
	type: 'json',
};

import update5_classes from './schema/0.5.2.1/classes.json' with {
	type: 'json',
};

import update5_classes__base from './schema/0.5.2.1/base-classes.json' with {
	type: 'json',
};

import update5 from './schema/0.5.2.1/docs.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update6_classes__base__overridable from './schema/0.6.1.5/base-classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update6_classes__overridable from './schema/0.6.1.5/classes.overridable.json' with {
	type: 'json',
};

import update6_overridable from './schema/0.6.1.5/overridable.json' with {
	type: 'json',
};

import update6_properties from './schema/0.6.1.5/properties.json' with {
	type: 'json',
};

import update6_classes from './schema/0.6.1.5/classes.json' with {
	type: 'json',
};

import update6_classes__base from './schema/0.6.1.5/base-classes.json' with {
	type: 'json',
};

import update6 from './schema/0.6.1.5/docs.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update7_classes__base__overridable from './schema/0.7.1.1/base-classes.overridable.json' with {
	type: 'json',
};

import update7_classes from './schema/0.7.1.1/classes.json' with {
	type: 'json',
};

import update7_classes__base from './schema/0.7.1.1/base-classes.json' with {
	type: 'json',
};

import update7 from './schema/0.7.1.1/docs.json' with {
	type: 'json',
};

import update8_properties from './schema/0.8.3.3/properties.json' with {
	type: 'json',
};

import update8_classes from './schema/0.8.3.3/classes.json' with {
	type: 'json',
};

import update8_classes__base from './schema/0.8.3.3/base-classes.json' with {
	type: 'json',
};

import update8 from './schema/0.8.3.3/docs.json' with {
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

for (
	const [
		schema,
		filepath,
	] of [
		[common_types, './schema/common/types.json'],
		// eslint-disable-next-line @stylistic/max-len
		[update3_classes__base__overridable, './schema/0.3.7.7/base-classes.overridable.json'],
		[update3_overridable, './schema/0.3.7.7/overridable.json'],
		[update3_properties, './schema/0.3.7.7/properties.json'],
		[update3_classes__base, './schema/0.3.7.7/base-classes.json'],
		[update3_classes, './schema/0.3.7.7/classes.json'],
		[update3, './schema/0.3.7.7/docs.json'],
		// eslint-disable-next-line @stylistic/max-len
		[update4_classes__base__overridable, './schema/0.4.2.11/base-classes.overridable.json'],
		[update4_overridable, './schema/0.4.2.11/overridable.json'],
		[update4_properties, './schema/0.4.2.11/properties.json'],
		[update4_classes__base, './schema/0.4.2.11/base-classes.json'],
		[update4_classes, './schema/0.4.2.11/classes.json'],
		[update4, './schema/0.4.2.11/docs.json'],
		// eslint-disable-next-line @stylistic/max-len
		[update5_classes__base__overridable, './schema/0.5.2.1/base-classes.overridable.json'],
		// eslint-disable-next-line @stylistic/max-len
		[update5_classes__overridable, './schema/0.5.2.1/classes.overridable.json'],
		[update5_overridable, './schema/0.5.2.1/overridable.json'],
		[update5_properties, './schema/0.5.2.1/properties.json'],
		[update5_classes__base, './schema/0.5.2.1/base-classes.json'],
		[update5_classes, './schema/0.5.2.1/classes.json'],
		[update5, './schema/0.5.2.1/docs.json'],
		// eslint-disable-next-line @stylistic/max-len
		[update6_classes__base__overridable, './schema/0.6.1.5/base-classes.overridable.json'],
		// eslint-disable-next-line @stylistic/max-len
		[update6_classes__overridable, './schema/0.6.1.5/classes.overridable.json'],
		[update6_overridable, './schema/0.6.1.5/overridable.json'],
		[update6_properties, './schema/0.6.1.5/properties.json'],
		[update6_classes__base, './schema/0.6.1.5/base-classes.json'],
		[update6_classes, './schema/0.6.1.5/classes.json'],
		[update6, './schema/0.6.1.5/docs.json'],
		// eslint-disable-next-line @stylistic/max-len
		[update7_classes__base__overridable, './schema/0.7.1.1/base-classes.overridable.json'],
		[update7_classes__base, './schema/0.7.1.1/base-classes.json'],
		[update7_classes, './schema/0.7.1.1/classes.json'],
		[update7, './schema/0.7.1.1/docs.json'],
		[update8_properties, './schema/0.8.3.3/properties.json'],
		[update8_classes__base, './schema/0.8.3.3/base-classes.json'],
		[update8_classes, './schema/0.8.3.3/classes.json'],
		[update8, './schema/0.8.3.3/docs.json'],
	] as [SchemaObjectWith$id, string][]
) {
	sort_$defs(schema);
	let result = JSON.stringify(schema, null, '\t');
	result = result.replace(
		/\{\s+"type": "string"\s+\}/g,
		'{"type": "string"}',
	);
	await writeFile(filepath, result);
}
