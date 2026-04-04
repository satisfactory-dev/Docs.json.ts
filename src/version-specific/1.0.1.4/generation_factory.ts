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
} from '../../../src/version-specific/1.0.1.4/SchemaParser.ts';

// eslint-disable-next-line @stylistic/max-len
import update3_overridable from '../../../schema/0.3.7.7/overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update3_classes__base__overridable from '../../../schema/0.3.7.7/base-classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update4_overridable from '../../../schema/0.4.2.11/overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update4_classes__base__overridable from '../../../schema/0.4.2.11/base-classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_overridable from '../../../schema/0.5.2.1/overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__base__overridable from '../../../schema/0.5.2.1/base-classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update5_classes__overridable from '../../../schema/0.5.2.1/classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update6_overridable from '../../../schema/0.6.1.5/overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update6_classes__base__overridable from '../../../schema/0.6.1.5/base-classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update6_classes__overridable from '../../../schema/0.6.1.5/classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update7_classes__base__overridable from '../../../schema/0.7.1.1/base-classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update8_properties__overridable from '../../../schema/0.8.3.3/properties.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import update8_classes__base__overridable from '../../../schema/0.8.3.3/base-classes.overridable.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import release_1_0_properties from '../../../schema/1.0.1.4/properties.json' with {
	type: 'json',
};

// eslint-disable-next-line @stylistic/max-len
import release_1_0_classes__base from '../../../schema/1.0.1.4/base-classes.json' with {
	type: 'json',
};

import release_1_0_classes from '../../../schema/1.0.1.4/classes.json' with {
	type: 'json',
};

import release_1_0 from '../../../schema/1.0.1.4/docs.json' with {
	type: 'json',
};

import {
	FilenameAdjuster,
} from '../../FilenameAdjuster.ts';

import type {
	handle_results_options,
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
	handle_results_options: handle_results_options = {},
): Promise<void> {
	console.log(`Generating Version 1.0 ${lang}`);

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
			[release_1_0.$id]: {
				types: './generated-types/1.0.1.4/types.ts',
				data: `./generated-types/1.0.1.4/${lang}.data.ts`,
			},
		},
		'docs.json.ts--common--types',
	);

	const get_results_from_data_schema = results_from_data_factory(
		release_1_0,
		release_data,
		parser,
		lang,
		'release_1_0_docs',
		'release_1_0',
		process_types,
		process_data,
	);

	const results: processed_results = [];

	const schema_set: SchemaObjectWith$id[] = [];

	if (process_types) {
		schema_set.push(
			update3_overridable,
			update3_classes__base__overridable,
			update4_overridable,
			update4_classes__base__overridable,
			update5_overridable,
			update5_classes__base__overridable,
			update5_classes__overridable,
			update6_overridable,
			update6_classes__base__overridable,
			update6_classes__overridable,
			update7_classes__base__overridable,
			update8_properties__overridable,
			update8_classes__base__overridable,
			release_1_0_properties,
			release_1_0_classes__base,
			release_1_0_classes,
		);

		if (!process_data) {
			schema_set.push(
				release_1_0,
			);
		}
	}

	if (process_data) {
		schema_set.push(
			release_1_0,
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

	await handle_results(results, handle_results_options);
}

export {
	generation_factory,
};
