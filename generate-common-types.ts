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
	docs,
} from './lib/helpers';
import {
	ValidationError,
} from './lib/DocsTsGenerator';

try {
	performance.mark('start');
	const bar = new TypeDefinitionWriter(
		docs,
		'common',
	);
	performance.measure('bootstrap', 'start');
	performance.mark('bootstrap done');
	await bar.write(`${import.meta.dirname}/generated-types/common/`);
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
	/*
	await writeFile(
		`${import.meta.dirname}/discover-types.common.perf.json`,
		`${JSON.stringify(perf(), null, '\t')}`,
	);
	*/
} catch (err) {
	/*
	await writeFile(
		`${import.meta.dirname}/discover-types.common.perf.json`,
		`${JSON.stringify(perf(), null, '\t')}`,
	);
	*/
	if (err instanceof NoMatchError) {
		console.error('ran into an issue');
		await writeFile(
			`./discovery-types.common.failure.json`,
			JSON.stringify(
				{
					property: err.property as unknown,
					message: err.message,
					stack: err.stack?.split('\n'),
				},
				null,
				'\t',
			),
		);

		console.error(err.message, err.stack);
	} else if (err instanceof ValidationError) {
		console.error('ran into a validation issue');
		await writeFile(
			`./discovery-types.common.failure.json`,
			JSON.stringify(
				{
					now: performance.now(),
					message: err.message,
					stack: err.stack?.split('\n'),
					errors: err.errors,
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
