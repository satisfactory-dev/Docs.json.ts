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

	console.error(err.stack);
}
