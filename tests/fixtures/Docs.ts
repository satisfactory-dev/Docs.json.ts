import {
	DocsTsGenerator,
} from '../../lib/DocsTsGenerator';

export const docs = new DocsTsGenerator({
	docs_path: `${__dirname}/../../data/Docs.json`,
	cache_path: `${__dirname}/../../data/`,
});
