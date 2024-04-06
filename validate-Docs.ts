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
import {
	setup_PerformanceObserver,
} from './setup_PerformanceObserver';
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

setup_PerformanceObserver();

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
