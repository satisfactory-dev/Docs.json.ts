import {
	glob,
} from 'glob';
import {
	unlink,
} from 'node:fs/promises';

const __dirname = import.meta.dirname;

for (const remove of await glob(`${__dirname}/{data/*.mjs,coverage/tmp/*.json}`)) {
	await unlink(remove);
}
