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
import {
	FailedToCompileSchema,
} from '@satisfactory-dev/ajv-utilities';

setup_PerformanceObserver();

const version = 'update8';
const sub_path = versions.update8;

try {
	await docs.get(version);
} catch (err) {
	await writeFile(
		`${import.meta.dirname}/failed-to-compile.${sub_path}.json`,
		`${JSON.stringify({
			err_is_Error: (err instanceof Error),
			err_type: (
				err instanceof Error
			)
				? err.constructor.name
				: typeof err,
			err_is_FailedToCompileSchema: (
				(
					err instanceof FailedToCompileSchema
					&& err.err instanceof Error
				)
					? {
						message: err.err?.message,
						stack: err.err?.stack,
					}
					: 'nope'
			),
			err,
		}, null, '\t')}\n`,
	);

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
}
