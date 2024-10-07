import {
	is_string,
} from '@satisfactory-dev/predicates.ts';

import {
	NoMatchError,
} from './Exceptions';

export type StringStartsWith<
	Prefix extends string,
	Suffix extends string = string
> = string & keyof {
	[T in keyof {
		[key: string]: unknown;
	} as T extends string ? `${Prefix}${Suffix}` : never]: string;
};

export type local_ref<
	T extends string
> = StringStartsWith<'#/$defs/', T>;

export type common_ref<
	T extends string
> = StringStartsWith<'common.schema.json#/$defs/', T>;

export type any_ref<T extends string> = (
	| local_ref<T>
	| common_ref<T>
);

export function local_ref<
	T extends string = string
>(ref_like_string:T): local_ref<T> {
	if (/\s+/.test(ref_like_string)) {
		throw new Error('No spacing characters allowed!');
	}

	if (ref_like_string.startsWith('#/$defs/')) {
		throw new NoMatchError(
			ref_like_string,
			'Already a local ref!',
		);
	}

	return `#/$defs/${
		ref_like_string
	}` as local_ref<T>;
}

export function common_ref<
	T extends string = string
>(ref_like_string:T): common_ref<T> {
	if (/\s+/.test(ref_like_string)) {
		throw new Error('No spacing characters allowed!');
	}

	if (ref_like_string.startsWith('common.schema.json#/$defs/')) {
		throw new NoMatchError(
			ref_like_string,
			'Already a common ref!',
		);
	}

	return `common.schema.json#/$defs/${
		ref_like_string
	}` as common_ref<T>;
}

export function is_$ref(maybe: unknown): maybe is (
	typeof maybe extends string
		? local_ref<typeof maybe>
		: never
) {
	return is_string(maybe) && maybe.startsWith('#/$defs/');
}

export function is_common_$ref(maybe: unknown): maybe is (
	typeof maybe extends string
		? common_ref<typeof maybe>
		: never
) {
	return is_string(maybe) && maybe.startsWith('common.schema.json#/$defs/');
}

export function $ref_in_array(
	maybe_$ref: unknown,
	$ref_array: local_ref<string>[],
) {
	return is_$ref(maybe_$ref) && $ref_array.includes(maybe_$ref);
}

export function common_$ref_in_array(
	maybe_$ref: unknown,
	$ref_array: common_ref<string>[],
) {
	return is_common_$ref(maybe_$ref) && $ref_array.includes(maybe_$ref);
}
