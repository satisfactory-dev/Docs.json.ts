import {
	writeFile,
} from 'fs/promises';
import {
	ValidationError,
} from './lib/DocsTsGenerator';
import {
	NoMatchError,
} from './lib/Exceptions';
import {
	docs,
} from './lib/helpers';
import {
	setup_PerformanceObserver,
} from './setup_PerformanceObserver';
import {
	__dirname_from_meta,
} from './lib/__dirname';

const __dirname = __dirname_from_meta(import.meta);

setup_PerformanceObserver();

try {
	await docs.get();
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
			`${__dirname}/failed-to-compile.json`,
			`${JSON.stringify(err, null, '\t')}\n`
		);

	console.error(err.stack);
}
