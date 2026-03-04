import type {
	docs_versions,
} from './lib/DocsTsGenerator.ts';

export const versions: Record<keyof docs_versions, string> = {
	common: 'common',
	update8: 'update8',
	version_1_0_1_4: '1.0',
	version_1_1_1_1: '1.1',
};

export const versions_list = Object.entries(versions) as [
	keyof docs_versions,
	string,
][];
