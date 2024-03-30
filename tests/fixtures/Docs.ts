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
