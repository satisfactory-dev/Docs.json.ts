import {
	tap,
} from 'node:test/reporters';
import {
	run,
} from 'node:test';
import {
	glob,
} from 'glob';

const __dirname = import.meta.dirname;

const ac = new AbortController();

run({
	files: await glob(`${__dirname}/tests/**/*.ts`),
	concurrency: true,
	signal: ac.signal,
})
	.on('test:fail', (e) => {
		ac.abort();
		console.error(e);
		process.exitCode = 1;
	})
	.compose(tap)
	.pipe(process.stdout);
