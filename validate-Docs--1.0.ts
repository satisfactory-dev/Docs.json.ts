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
import {
	versions,
} from './version-configs';

const __dirname = __dirname_from_meta(import.meta);

setup_PerformanceObserver();

const version = 'version_1_0_0_7';
const sub_path = versions.version_1_0_0_7;

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
		`${__dirname}/failed-to-compile.${sub_path}.json`,
		`${JSON.stringify(err, null, '\t')}\n`,
	);

	console.error(err.stack);
}
