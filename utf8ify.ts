import {
	readFile,
	writeFile,
} from 'node:fs/promises';
import {
	fileURLToPath,
} from 'url';
import {
	dirname,
} from 'path';
import schema from './schema/update8.schema.json' assert {type: 'json'};


const __dirname = dirname(fileURLToPath(import.meta.url));

const file = await readFile(`${__dirname}/data/Docs.json`, {
	encoding: 'utf-16le',
});

const utf8 = Buffer.from(file).toString('utf-8');

const json = JSON.parse(utf8.trim());

await writeFile(`${__dirname}/data/Docs.utf8.json`, JSON.stringify(json, null, '\t') + '\n');
