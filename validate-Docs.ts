import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {DocsTsGenerator} from './lib/DocsTsGenerator';
const __dirname = dirname(fileURLToPath(import.meta.url));

const generator = new DocsTsGenerator({
	docs_path: `${__dirname}/data/Docs.json`,
	utf8_cache_path: `${__dirname}/data/`,
});

await generator.get();
