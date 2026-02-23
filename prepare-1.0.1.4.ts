import {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	semver,
} from './src/guarded.ts';

import {
	Utf16leJsonHandler,
} from './src/Utf16leJsonHandler.ts';

import {
	configure_parser,
} from './src/version-specific/1.0.1.4/SchemaParser.ts';

import type {
	NativeClass,
} from './src/version-specific/0.3.7.7/types.ts';

import {
	SchemaParser,
	Type,
} from '@signpostmarv/json-schema-typescript-codegen';

import release_1_0 from './schema/1.0.1.4/docs.json' with {
	type: 'json',
};
import {
	object_has_property,
} from '@satisfactory-dev/predicates.ts';

const ajv = new Ajv({
	strict: true,
	verbose: true,
});

const parser = new SchemaParser({ajv});

configure_parser(parser);

const validator = ajv.compile<
	[NativeClass, ...NativeClass[]]
>({
	$ref: `${release_1_0.$id}#`,
});

const handler = new Utf16leJsonHandler({
	validator,
	data_path: `${import.meta.dirname}/data/`,
	version: semver('1.0.1.4'),
	file_path: 'Docs/en-US.json',
});

await handler.read((data, errors) => {
	if (
		Array.isArray(data)
		&& data.length === release_1_0.maxItems
	) {
		let passing = 0;

		for (let i = 0; i < release_1_0.maxItems; ++i) {
			const item: unknown = data[i];

			const validator = ajv.compile<NativeClass>(Type.maybe_add_$defs(
				release_1_0,
				release_1_0.prefixItems[i],
			));

			if (validator(item)) {
				console.log(`✅ ${item.NativeClass}`);
				++passing;
			} else if (
				object_has_property(item, 'NativeClass')
				&& 'string' === typeof item.NativeClass
			) {
				console.error(`❌ ${item.NativeClass}`);
			} else {
				console.error(`❌ data at index ${i}`);
			}
		}

		const percentage = (passing / release_1_0.maxItems) * 100;

		console.error(`⚠️  ${percentage}% valid`);
	}

	process.stderr.write(JSON.stringify(errors, null, '\t'));
});

console.log('1.0.1.4 updated');
