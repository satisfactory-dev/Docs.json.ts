import release_1_0_data from './data/1.0.1.4/Docs/en-us.utf8.json' with {
	type: 'json',
};
import release_1_0_data__sv from './data/1.0.1.4/Docs/sv.utf8.json' with {
	type: 'json',
};

import {
	generation_factory,
} from './src/version-specific/1.0.1.4/generation_factory.ts';

import {
	is_supported,
} from './src/version-specific/1.0.1.4/supported_lang.ts';

const [,, lang] = process.argv;

if (!is_supported(lang)) {
	throw new Error('Unsupported language');
}

const release_data = {
	'en-US': release_1_0_data,
	sv: release_1_0_data__sv,
};

await generation_factory(release_data[lang], lang);
