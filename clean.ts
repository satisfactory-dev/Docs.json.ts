import {
	glob,
} from 'glob';
import {
	unlink,
} from 'node:fs/promises';

for (const remove of await glob(`${import.meta.dirname}/{data/*.mjs,coverage/tmp/*.json}`)) {
	await unlink(remove);
}

for (const remove of await glob(`${import.meta.dirname}/generated-types/{update8,1.0}/**/*.ts`)) {
	await unlink(remove);
}
