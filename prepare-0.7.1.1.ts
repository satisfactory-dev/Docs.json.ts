import {
	Ajv2020 as Ajv,
} from 'ajv/dist/2020.js';

import {
	semver,
} from './src/guarded.ts';

import {
	Utf16leJsonHandler,
} from './src/Utf16leJsonHandler.ts';

import {
	configure_parser,
} from './src/version-specific/0.7.1.1/SchemaParser.ts';

import type {
	NativeClass,
} from './src/version-specific/0.3.7.7/types.ts';

import {
	SchemaParser,
} from '@signpostmarv/json-schema-typescript-codegen';

const ajv = new Ajv({
	strict: true,
	verbose: true,
});

const parser = new SchemaParser({ajv});

configure_parser(parser);

const validator = ajv.compile<
	[NativeClass, ...NativeClass[]]
>({
	$ref: 'docs.json.ts--0.7.1.1#',
});

const handler = new Utf16leJsonHandler({
	validator,
	data_path: `${import.meta.dirname}/data/`,
	version: semver('0.7.1.1'),
	file_path: 'Docs/Docs.json',
});

await handler.read();

console.log('0.7.1.1 updated');
