import {
	TypeDefinitionWriter,
} from './lib/TypeDefinitionWriter.ts';
import {
	NoMatchError,
} from './lib/Exceptions.ts';
import {
	writeFile,
} from 'node:fs/promises';
import {
	docs,
} from './lib/helpers.ts';
import {
	setup_PerformanceObserver,
} from './setup_PerformanceObserver.ts';
import {
	versions,
} from './version-configs.ts';

const perf = setup_PerformanceObserver();

const version = 'version_1_0_1_4';
const sub_path = versions.version_1_0_1_4;
try {
	performance.mark('start');
	const bar = new TypeDefinitionWriter(
		docs,
		version,
	);
	performance.measure('bootstrap', 'start');
	performance.mark('bootstrap done');
	await bar.write(`${import.meta.dirname}/generated-types/${sub_path}/`);
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
		`${import.meta.dirname}/discover-types.${sub_path}.perf.json`,
		`${JSON.stringify(perf(), null, '\t')}`,
	);
} catch (err) {
	await writeFile(
		`${import.meta.dirname}/discover-types.${sub_path}.perf.json`,
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
