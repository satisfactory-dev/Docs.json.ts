import {dirname} from "path";
import {fileURLToPath} from "url";

import {DocsTsGenerator, GenerationException} from "./lib/DocsTsGenerator";

const __dirname = dirname(fileURLToPath(import.meta.url));

const generator = new DocsTsGenerator({
	docs_path: `${__dirname}/data/Docs.json`,
	utf8_cache_path: `${__dirname}/data/`,
});

try {
	const progress = await generator.generate_types(`${__dirname}/generated-types/`);

	console.log(progress);
} catch (err) {
	if (err instanceof GenerationException) {
		console.error(err.progress);
		console.error(err.exception);
	} else {
		console.error(err);
	}

	throw new Error('Failed to generate types');
}
