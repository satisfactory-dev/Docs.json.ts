import {dirname} from "path";
import {fileURLToPath} from "url";

import {DocsTsGenerator, generation_result, GenerationException} from "./lib/DocsTsGenerator";
import {readFile, writeFile} from "node:fs/promises";
import {PartialMatchError} from "./lib/TypeNodeGeneration";

const __dirname = dirname(fileURLToPath(import.meta.url));

const generator = new DocsTsGenerator({
	docs_path: `${__dirname}/data/Docs.json`,
	cache_path: `${__dirname}/data/`,
});

async function update_progress(progress:generation_result, log_progress = true)
{
	if (log_progress) {
		console.log(progress);
		console.table({
			Supported: progress.definitions.supported.length,
			Unsupported: progress.definitions.unsupported.length,
		});
	}

	const all_progress_items = [
		...progress.definitions.supported,
		...progress.definitions.unsupported,
	].sort((a, b) => a.localeCompare(b));

	const progress_markdown = `# Types Progress${'\n'}${
		((progress.definitions.supported.length / all_progress_items.length) * 100).toFixed(2)
	}% Complete (${progress.definitions.supported.length} of ${all_progress_items.length})${'\n\n'}${
		all_progress_items.map((key) => {
			return `* [${progress.definitions.supported.includes(key) ? 'x' : ' '}] ${key}`;
		}).join('\n')
	}${'\n'}`

	await writeFile(`${__dirname}/types-progress.md`, progress_markdown);
}

try {
	const progress = await generator.generate_types(
		`${__dirname}/generated-types/`,
		true,
		true
	);

	await update_progress(progress);
} catch (err) {
	if (err instanceof GenerationException) {
		await update_progress(err.progress, false);

		if (err.exception instanceof PartialMatchError) {
			console.error(
				err.exception.property,
				err.exception.missing
			);
		} else {
			console.error(err.exception);
		}
	} else {
		console.error('error not generation exception!');
		console.error(err);
	}

	throw new Error('Failed to generate types');
}
