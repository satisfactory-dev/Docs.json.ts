import { existsSync } from 'node:fs';
import {
	DocsTsGenerator,
} from '../../lib/DocsTsGenerator';
import {
	__dirname_from_meta,
} from '../../lib/__dirname';

const __dirname = __dirname_from_meta(import.meta);

export const docs = new DocsTsGenerator({
	docs_path: `${__dirname}/../../data/Docs.json`,
	cache_path: `${__dirname}/../../data/`,
});

export const skip_because_docs_dot_json_not_yet_bundled = {
	skip:
		existsSync(`${__dirname}/../../data/Docs.json`)
			? false
			: 'Docs.json not yet bundled!',
};
