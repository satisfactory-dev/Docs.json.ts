import {
	TypeDefinitionWriter,
} from './lib/TypeDefinitionWriter';
import {
	NoMatchError,
} from './lib/Exceptions';
import {
	writeFile,
} from 'node:fs/promises';
import {
	__dirname_from_meta,
} from './lib/__dirname';
import {
	docs,
} from './lib/helpers';
import {
	setup_PerformanceObserver,
} from './setup_PerformanceObserver';
import {
	versions,
} from './version-configs';

const __dirname = __dirname_from_meta(import.meta);

const perf = setup_PerformanceObserver();

const version = 'version_1_0_1_1';
const sub_path = versions.version_1_0_1_1;
try {
	performance.mark('start');
	const bar = new TypeDefinitionWriter(
		docs,
		version,
	);
	performance.measure('bootstrap', 'start');
	performance.mark('bootstrap done');
	await bar.write(`${__dirname}/generated-types/${sub_path}/`);
	performance.measure('types generated', 'bootstrap done');
	const discovery = await bar.discovery;
	const result = await discovery.discover_type_$defs();

	process.stdout.write(
		`${
			JSON.stringify(result.missing_classes, null, '\t')
		}\n`,
	);
	console.table({
		'Found Types': Object.keys(result.found_types).length,
		'Missing Types': result.missing_types.length,
		'Found Classes': result.found_classes.length,
		'Missing Classes': result.missing_classes.length,
	});
	await writeFile(
		`${__dirname}/discover-types.${sub_path}.perf.json`,
		`${JSON.stringify(perf(), null, '\t')}`,
	);
} catch (err) {
	await writeFile(
		`${__dirname}/discover-types.${sub_path}.perf.json`,
		`${JSON.stringify(perf(), null, '\t')}`,
	);
	if (err instanceof NoMatchError) {
		console.error('ran into an issue');
		await writeFile(
			`./discovery-types.${sub_path}.failure.json`,
			JSON.stringify(
				{
					now: performance.now(),
					property: err.property as unknown,
					message: err.message,
					stack: err.stack?.split('\n'),
				},
				null,
				'\t',
			),
		);

		console.error(err.message, err.stack);
	} else {
		throw err;
	}
}
