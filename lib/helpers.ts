import {
	existsSync,
} from 'node:fs';
import {
	DocsTsGenerator,
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
	allErrors: true,
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
	docs_path: `${__dirname}/../data/Docs.json`,
	cache_path: `${__dirname}/../data/`,
});

export const skip_because_docs_dot_json_not_yet_bundled = {
	skip:
		existsSync(`${__dirname}/../data/Docs.json`)
			? false
			: 'Docs.json not yet bundled!',
};
