import {
	dirname,
} from 'node:path';
import {
	fileURLToPath,
} from 'node:url';
import {
	DocsTsGenerator, ValidationError,
} from './lib/DocsTsGenerator';
import {
	NoMatchError,
} from './lib/Exceptions';
import Ajv from 'ajv/dist/2020';
import {
	configure_ajv,
} from './lib/DocsValidation';
const __dirname = dirname(fileURLToPath(import.meta.url));

const ajv = new Ajv({
	verbose: true,
	code: {
		source: true,
		es5: false,
		esm: true,
		optimize: true,
	},
});
configure_ajv(ajv);
const generator = new DocsTsGenerator({
	ajv,
	docs_path: `${__dirname}/data/Docs.json`,
	cache_path: `${__dirname}/data/`,
});

const measure_totals: {[key: string]: number} = {};

const obs = new PerformanceObserver((list) => {
	for (const entry of list.getEntries()) {
		if (!(entry.name in measure_totals)) {
			measure_totals[entry.name] = 0;
		}
		measure_totals[entry.name] += entry.duration;
	}

	console.table(
		Object.fromEntries(
			Object.entries(measure_totals).map((e) => {
				return [e[0], `${(e[1] / 1000).toFixed(4)}s`];
			})
		)
	);

	performance.clearMeasures();
});
obs.observe({entryTypes: ['measure'], buffered: true});

try {
	await generator.get();
} catch (err) {
	if (err instanceof ValidationError) {
		for (const error of err.errors) {
			process.stdout.write(JSON.stringify(error, null, '\t') + '\n');
		}
	} else if (err instanceof NoMatchError) {
		const {property, ...rest} = err as NoMatchError;
		delete rest.stack;
		process.stdout.write(JSON.stringify(property, null, '\t') + '\n');
		console.error(rest);
	} else {
		throw err;
	}

	console.error(err.stack);
}
