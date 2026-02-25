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
} from '@signpostmarv/json-schema-typescript-codegen';

type SupportedLang = (
	| 'af'
	| 'ar'
	| 'bg'
	| 'ca'
	| 'cs'
	| 'da'
	| 'de'
	| 'Docs'
	| 'el'
	| 'en-AE'
	| 'en-AU'
	| 'en-CA'
	| 'en-GB'
	| 'en-US'
	| 'eo'
	| 'es-419'
	| 'es-ES'
	| 'et'
	| 'fa'
	| 'fi'
	| 'fr'
	| 'he'
	| 'hi'
	| 'hr'
	| 'hu'
	| 'ia-001'
	| 'id'
	| 'ie'
	| 'io'
	| 'it'
	| 'ja'
	| 'ko'
	| 'kw'
	| 'lb'
	| 'lt'
	| 'lv'
	| 'mt'
	| 'nl'
	| 'no'
	| 'pl'
	| 'pt-BR'
	| 'pt-PT'
	| 'ro'
	| 'ru'
	| 'sk'
	| 'sr-Cyrl'
	| 'sr-Latn'
	| 'sv'
	| 'th'
	| 'tr'
	| 'uk'
	| 'vi'
	| 'vo'
	| 'vun'
	| 'zh-Hans'
	| 'zh-Hant'
);

type VersionSpecificBasename<
	Version extends semver_full,
	LastBit extends ''|'.utf8',
> = Version extends semver_full<PositiveIntegerOrZero<1>>
	? `${SupportedLang}${LastBit}`
	: `Docs${LastBit}`;
type VersionSpecificFilename<
	Version extends semver_full,
	LastBit extends ''|'.utf8',
> = `Docs/${VersionSpecificBasename<Version, LastBit>}.json`;

export type {
	SupportedLang,
};

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

	async read(
		on_failure?: (
			data: unknown,
			errors: ValidateFunction['errors'],
		) => void,
	): Promise<T> {
		const maybe: unknown = JSON.parse(await this.#maybe_convert());

		if (!this.#validator(maybe)) {
			if (!on_failure) {
				console.error(this.#validator.errors);
			} else {
				on_failure(maybe, this.#validator.errors);
			}

			throw new TypeError('JSON file does not match expected format!');
		}

		return maybe;
	}

	async #maybe_convert(): Promise<string> {
		if (existsSync(this.#utf8path)) {
			return (await readFile(this.#utf8path)).toString();
		}

		const file = (await readFile(this.#filepath, {
			encoding: this.#filepath.includes('/1.0.1.4/Docs/io.json')
				? 'utf8'
				: 'utf-16le',
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
