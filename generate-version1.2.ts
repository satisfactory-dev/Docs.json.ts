import type {
	NodeFactory,
} from '@signpostmarv/json-schema-typescript-codegen';

import ts, {
	factory,
} from 'typescript';

import {
	generation_factory as generation_factory_00,
} from './src/version-specific/1.2.0.0/generation_factory.ts';

import {
	generation_factory as generation_factory_10,
} from './src/version-specific/1.2.1.0/generation_factory.ts';

import {
	generation_factory as generation_factory_20,
} from './src/version-specific/1.2.2.0/generation_factory.ts';

import {
	is_supported,
} from './src/version-specific/1.2.0.0/supported_lang.ts';

const [,, ...remaining] = process.argv;

const not_flag = remaining.filter((maybe) => !maybe.startsWith('--'));

const [lang, semver] = not_flag;

const supported_semver = [
	'1.2.0.0',
	'1.2.1.0',
	'1.2.2.0',
] as const;

if (!(supported_semver as readonly string[]).includes(semver)) {
	throw new Error('Unexpected semver specified!');
}

const process_generation = {
	types: true,
	data: true,
};

const typed_ts = {
	...ts,
	factory: factory as NodeFactory,
};

if (remaining.includes('--skip-types')) {
	process_generation.types = false;
}

if (remaining.includes('--skip-data')) {
	process_generation.data = false;
}

if (!is_supported(lang)) {
	throw new Error('Unsupported language');
}

if ('1.2.0.0' === semver) {
	const {
		default: release_data_00,
	} = await import(
		`${import.meta.dirname}/data/1.2.0.0/Docs/${lang}.utf8.json`,
		{
			with: {
				type: 'json',
			},
		},
	) as {
		default: unknown,
	};

	await generation_factory_00(
		release_data_00,
		lang,
		process_generation,
		undefined,
		typed_ts,
	);
}

if ('1.2.1.0' === semver) {
	const {
		default: release_data_10,
	} = await import(
		`${import.meta.dirname}/data/1.2.1.0/Docs/${lang}.utf8.json`,
		{
			with: {
				type: 'json',
			},
		},
	) as {
		default: unknown,
	};

	await generation_factory_10(
		release_data_10,
		lang,
		process_generation,
		undefined,
		typed_ts,
	);
}

if ('1.2.2.0' === semver) {
	const {
		default: release_data_20,
	} = await import(
		`${import.meta.dirname}/data/1.2.2.0/Docs/${lang}.utf8.json`,
		{
			with: {
				type: 'json',
			},
		},
	) as {
		default: unknown,
	};

	await generation_factory_20(
		release_data_20,
		lang,
		process_generation,
		undefined,
		typed_ts,
	);
}
