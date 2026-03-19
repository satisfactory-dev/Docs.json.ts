import {
	writeFile,
} from 'node:fs/promises';

import update3 from './data/0.3.7.7/Docs/Docs.utf8.json' with {type: 'json'};
import update4 from './data/0.4.2.11/Docs/Docs.utf8.json' with {type: 'json'};
import update5 from './data/0.5.2.1/Docs/Docs.utf8.json' with {type: 'json'};
import update6 from './data/0.6.1.5/Docs/Docs.utf8.json' with {type: 'json'};
import update7 from './data/0.7.1.1/Docs/Docs.utf8.json' with {type: 'json'};
import update8 from './data/0.8.3.3/Docs/Docs.utf8.json' with {type: 'json'};

// oxlint-disable-next-line @stylistic/max-len
import version_1p0 from './data/1.0.1.4/Docs/en-US.utf8.json' with {type: 'json'};

// oxlint-disable-next-line @stylistic/max-len
import version_1p1 from './data/1.1.2.2/Docs/en-US.utf8.json' with {type: 'json'};

import type {
	semver_full,
} from './src/types.ts';
import {
	semver,
} from './src/guarded.ts';

const migration: {
	[key: string]: {[key: string]: [semver_full, ...semver_full[]]},
} = {};

const migration_short: {
	[key: string]: {[key: `FG${string}`]: [semver_full, ...semver_full[]]},
} = {};

const regex_get_short = /\.(FG.+)'$/;

for (const [version, data] of [
	[semver('0.3.7.7'), update3],
	[semver('0.4.2.11'), update4],
	[semver('0.5.2.1'), update5],
	[semver('0.6.1.5'), update6],
	[semver('0.7.1.1'), update7],
	[semver('0.8.3.3'), update8],
	[semver('1.0.1.4'), version_1p0],
	[semver('1.1.2.2'), version_1p1],
]) {
	for (
		const {
			NativeClass,
			Classes,
		} of data as {
			NativeClass: string,
			Classes: {
				ClassName: string,
			}[],
		}[]
	) {
		const match = regex_get_short.exec(NativeClass);

		if (null === match) {
			throw new Error(`Could not get short NativeClass from ${
				NativeClass
			}`);
		}

		const NativeClass_short = match[1] as `FG${string}`;

		for (const {ClassName} of Classes) {
			if (!(ClassName in migration)) {
				migration_short[ClassName] = {};
				migration[ClassName] = {};
			}

			if (!(NativeClass_short in migration_short[ClassName])) {
				migration_short[ClassName][NativeClass_short] = [version];
			} else {
				migration_short[ClassName][NativeClass_short].push(version);
			}

			if (!(NativeClass in migration[ClassName])) {
				migration[ClassName][NativeClass] = [version];
			} else {
				migration[ClassName][NativeClass].push(version);
			}
		}
	}
}

await writeFile(
	`${import.meta.dirname}/data/migration.json`,
	JSON.stringify(migration, null, '\t') + '\n',
);

await writeFile(
	`${import.meta.dirname}/data/migration-short.json`,
	JSON.stringify(migration_short, null, '\t') + '\n',
);
