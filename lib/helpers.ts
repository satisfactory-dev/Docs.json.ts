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
		version_1_0_0_0: new DocsTsGeneratorVersion({
			docs_path: `${__dirname}/../data/1.0/en-US.json`,
			cache_path: `${__dirname}/../data/1.0/`,
		}),
		update8: new DocsTsGeneratorVersion({
			docs_path: `${__dirname}/../data/update8/Docs.json`,
			cache_path: `${__dirname}/../data/update8/`,
		}),
	},
});

export const skip_because_docs_dot_json_not_yet_bundled = {
	skip:
		existsSync(`${__dirname}/../data/update8/Docs.json`)
			? false
			: 'Docs.json not yet bundled!',
};
