import {
	docs_versions,
} from "./lib/DocsTsGenerator";

export const versions: Record<keyof docs_versions, string> = {
	update8: 'update8',
	version_1_0_0_0: '1.0',
};

export const versions_list = Object.entries(versions) as [
	keyof docs_versions,
	string,
][];
