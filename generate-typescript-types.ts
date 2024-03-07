import {dirname} from "path";
import {fileURLToPath} from "url";

import {DocsTsGenerator, GenerationException} from "./lib/DocsTsGenerator";
import {readFile, writeFile} from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

const generator = new DocsTsGenerator({
	docs_path: `${__dirname}/data/Docs.json`,
	cache_path: `${__dirname}/data/`,
});

try {
	const progress = await generator.generate_types(`${__dirname}/generated-types/`);

	console.log(progress);
	console.table({
		Supported: progress.definitions.supported.length,
		Unsupported: progress.definitions.unsupported.length,
	});

	const all_progress_items = [
		...progress.definitions.supported,
		...progress.definitions.unsupported,
	].sort((a, b) => a.localeCompare(b));

	const progress_markdown = `# Types Progress${'\n'}${
		((progress.definitions.supported.length / all_progress_items.length) * 100).toFixed(2)
	}% Complete ${'\n\n'}${
		all_progress_items.map((key) => {
			return `* [${progress.definitions.supported.includes(key) ? 'x' : ' '}] ${key}`;
		}).join('\n')
	}${'\n'}`

	await writeFile(`${__dirname}/types-progress.md`, progress_markdown);
} catch (err) {
	if (err instanceof GenerationException) {
//		console.error(err.progress);
		console.error(err.exception);
	} else {
		console.error(err);
	}

	throw new Error('Failed to generate types');
}
