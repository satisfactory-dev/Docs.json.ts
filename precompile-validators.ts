import {
	writeFile,
} from 'node:fs/promises';

import update3 from './src-dev/precompile-validator-configs/0.3.7.7.ts';

import update4 from './src-dev/precompile-validator-configs/0.4.2.11.ts';

import update5 from './src-dev/precompile-validator-configs/0.5.2.1.ts';

for (const [instance, semver] of [
	[update3, '0.3.7.7'],
	[update4, '0.4.2.11'],
	[update5, '0.5.2.1'],
] as const) {
	await writeFile(
		`${
			import.meta.dirname
		}/generated-types/lib/${
			semver
		}.ts`,
		instance.compile({
			verbose: true,
			logger: false,
			allErrors: true,
		}),
	);
}
