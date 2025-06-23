import {
	existsSync,
} from 'node:fs';
import {
	DocsTsGenerator,
	DocsTsGeneratorVersion,
} from './DocsTsGenerator';
import {
	__dirname_from_meta,
} from './__dirname';
import Ajv from 'ajv/dist/2020';
import {
	configure_ajv,
} from './DocsValidation';

const __dirname = __dirname_from_meta(import.meta);
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
			docs_path: `${__dirname}/../data/common/faux.json`,
			cache_path: `${__dirname}/../data/common/`,
			UnrealEngineString_quote_mode: 'original',
		}),
		version_1_1_1_1: new DocsTsGeneratorVersion({
			docs_path: `${__dirname}/../data/1.1/en-US.json`,
			cache_path: `${__dirname}/../data/1.1/`,
			UnrealEngineString_quote_mode: 'double',
		}),
		version_1_0_1_4: new DocsTsGeneratorVersion({
			docs_path: `${__dirname}/../data/1.0/en-US.json`,
			cache_path: `${__dirname}/../data/1.0/`,
			UnrealEngineString_quote_mode: 'double',
		}),
		update8: new DocsTsGeneratorVersion({
			docs_path: `${__dirname}/../data/update8/Docs.json`,
			cache_path: `${__dirname}/../data/update8/`,
			UnrealEngineString_quote_mode: 'original',
		}),
	},
});

export const skip_because_docs_dot_json_not_yet_bundled = {
	skip:
		existsSync(`${__dirname}/../data/update8/Docs.json`)
			? false
			: 'Docs.json not yet bundled!',
};
