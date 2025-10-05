import {
	existsSync,
} from 'fs';

import {
	readFile,
	writeFile,
} from 'fs/promises';

import {
	basename,
} from 'path';

import type {
	ValidateFunction,
} from 'ajv/dist/2020.js';

import type {
	semver_full,
} from './types.ts';

import type {
	PositiveIntegerOrZero,
} from '../JSON-Schema-TypeScript-CodeGen/src/types.ts';

type VersionSpecificBasename<
	Version extends semver_full,
	LastBit extends ''|'.utf8',
> = Version extends semver_full<PositiveIntegerOrZero<1>>
	? `en-US${LastBit}`
	: `Docs${LastBit}`;
type VersionSpecificFilename<
	Version extends semver_full,
	LastBit extends ''|'.utf8',
> = `Docs/${VersionSpecificBasename<Version, LastBit>}.json`;

export class Utf16leJsonHandler<
	Version extends semver_full = semver_full,
	T extends [
		{[key: string]: unknown},
		...{[key: string]: unknown}[],
	] = [
		{[key: string]: unknown},
		...{[key: string]: unknown}[],
	],
> {
	#filepath: `${string}/${Version}/${VersionSpecificFilename<Version, ''>}`;

	#utf8path: `${
		string
	}/${
		Version
	}/${
		VersionSpecificFilename<Version, '.utf8'>
	}`;

	#validator: ValidateFunction<T>;

	constructor({
		validator,
		data_path,
		cache_path,
		version,
		file_path,
	}: {
		validator: ValidateFunction<T>,
		data_path: string,
		cache_path?: string,
		version: Version,
		file_path: VersionSpecificFilename<Version, ''>,
	}) {
		this.#validator = validator;
		this.#filepath = `${data_path}/${version}/${file_path}`;
		const utf8: (
			VersionSpecificBasename<Version, '.utf8'>
		) = basename(file_path.replace(/\.json$/, '.utf8')) as (
			VersionSpecificBasename<Version, '.utf8'>
		);
		this.#utf8path = `${
			cache_path || data_path
		}/${
			version
		}/Docs/${
			utf8
		}.json`;
	}

	async read(): Promise<T> {
		const maybe: unknown = JSON.parse(await this.#maybe_convert());

		console.log((maybe as unknown[]).length);

		if (!this.#validator(maybe)) {
			console.error(this.#validator.errors);
			throw new TypeError('JSON file does not match expected format!');
		}

		return maybe;
	}

	async #maybe_convert(): Promise<string> {
		if (existsSync(this.#utf8path)) {
			return (await readFile(this.#utf8path)).toString();
		}

		const file = (await readFile(this.#filepath, {
			encoding: 'utf-16le',
		})).replace(/"NativeClass":"Class'/g, `\n"NativeClass":"Class'`);

		const utf8 = JSON.stringify(
			JSON.parse(
				Buffer.from(file).toString('utf-8').trim(),
			),
			undefined,
			'\t',
		);

		await writeFile(this.#utf8path, utf8);

		return utf8;
	}
}
