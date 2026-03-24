import {
	generation_factory,
} from './src/version-specific/1.2.0.0/generation_factory.ts';

import {
	is_supported,
} from './src/version-specific/1.2.0.0/supported_lang.ts';

const [,, ...remaining] = process.argv;

const lang = remaining.filter((maybe) => !maybe.startsWith('--'))[0];

const process_generation = {
	types: true,
	data: true,
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

const {
	default: release_data,
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

await generation_factory(release_data, lang, process_generation);
