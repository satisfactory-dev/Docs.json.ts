import {
	docs_versions,
} from "./lib/DocsTsGenerator";

export const versions: Record<keyof docs_versions, string> = {
	update8: 'update8',
};

export const versions_list = Object.entries(versions) as [
	keyof docs_versions,
	string,
][];
