import {
	existsSync,
} from 'node:fs';
import {
	DocsTsGenerator,
	DocsTsGeneratorVersion,
} from './DocsTsGenerator.ts';
import Ajv from 'ajv/dist/2020.js';
import {
	configure_ajv,
} from './DocsValidation.ts';

const ajv = new Ajv({
	verbose: true,
	logger: false,
	allErrors: false,
	code: {
		source: true,
		esm: true,
		lines: true,
		optimize: 2,
	},
});
configure_ajv(ajv);

export const docs = new DocsTsGenerator({
	ajv,
	docs_versions: {
		common: new DocsTsGeneratorVersion({
			docs_path: `${import.meta.dirname}/../data/common/faux.json`,
			cache_path: `${import.meta.dirname}/../data/common/`,
			UnrealEngineString_quote_mode: 'original',
		}),
		version_1_1_1_1: new DocsTsGeneratorVersion({
			docs_path: `${import.meta.dirname}/../data/1.1/en-US.json`,
			cache_path: `${import.meta.dirname}/../data/1.1/`,
			UnrealEngineString_quote_mode: 'double',
		}),
		version_1_0_1_4: new DocsTsGeneratorVersion({
			docs_path: `${import.meta.dirname}/../data/1.0/en-US.json`,
			cache_path: `${import.meta.dirname}/../data/1.0/`,
			UnrealEngineString_quote_mode: 'double',
		}),
		update8: new DocsTsGeneratorVersion({
			docs_path: `${import.meta.dirname}/../data/update8/Docs.json`,
			cache_path: `${import.meta.dirname}/../data/update8/`,
			UnrealEngineString_quote_mode: 'original',
		}),
	},
});

export const skip_because_docs_dot_json_not_yet_bundled = {
	skip:
		existsSync(`${import.meta.dirname}/../data/update8/Docs.json`)
			? false
			: 'Docs.json not yet bundled!',
};
