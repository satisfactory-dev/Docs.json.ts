import {
	writeFile,
} from 'fs/promises';
import {
	ValidationError,
} from './lib/DocsTsGenerator.ts';
import {
	NoMatchError,
} from './lib/Exceptions.ts';
import {
	docs,
} from './lib/helpers.ts';
import {
	setup_PerformanceObserver,
} from './setup_PerformanceObserver.ts';
import {
	versions,
} from './version-configs.ts';

setup_PerformanceObserver();

const version = 'version_1_1_1_1';
const sub_path = versions.version_1_1_1_1;

try {
	await docs.get(version);
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

	await writeFile(
		`${import.meta.dirname}/failed-to-compile.${sub_path}.json`,
		`${JSON.stringify(err, null, '\t')}\n`,
	);

	console.error(err.stack);
}
