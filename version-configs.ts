import {
	docs_versions,
} from "./lib/DocsTsGenerator";

export const versions: Record<keyof docs_versions, string> = {
	common: 'common',
	update8: 'update8',
	version_1_0_1_0: '1.0',
};

export const versions_list = Object.entries(versions) as [
	keyof docs_versions,
	string,
][];
