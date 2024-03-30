import {
	dirname,
} from "node:path";
import {
	fileURLToPath,
} from "node:url";

export function __dirname_from_meta(meta:ImportMeta)
{
	return fileURLToPath(dirname(meta.url));
}
