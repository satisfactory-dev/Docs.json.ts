import {
	is_string,
} from '@satisfactory-dev/predicates.ts';

import type {
	SchemaObject,
} from 'ajv/dist/2020';

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

export type specific_schema_shorthand = (
	| 'common'
	| 'update8'
	| '1.0'
	| '1.1'
);

export type specific_schema_ref<
	Version extends specific_schema_shorthand,
	T extends string
> = StringStartsWith<`${Version}.schema.json#/$defs/`, T>;

export type common_ref<
	T extends string
> = specific_schema_ref<'common', T>;

export type update8_ref<
	T extends string
> = specific_schema_ref<'update8', T>;

export type one_point_oh_ref<
	T extends string
> = specific_schema_ref<'1.0', T>;

export type one_point_one_ref<
	T extends string
> = specific_schema_ref<'1.1', T>;

export type any_ref<T extends string> = (
	| local_ref<T>
	| common_ref<T>
	| update8_ref<T>
	| one_point_oh_ref<T>
	| one_point_one_ref<T>
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

export function update8_ref<
	T extends string = string
>(ref_like_string:T): update8_ref<T> {
	if (/\s+/.test(ref_like_string)) {
		throw new Error('No spacing characters allowed!');
	}

	if (ref_like_string.startsWith('update8.schema.json#/$defs/')) {
		throw new NoMatchError(
			ref_like_string,
			'Already a update8 ref!',
		);
	}

	return `update8.schema.json#/$defs/${
		ref_like_string
	}` as update8_ref<T>;
}

export function one_point_oh_ref<
	T extends string = string
>(ref_like_string:T): one_point_oh_ref<T> {
	if (/\s+/.test(ref_like_string)) {
		throw new Error('No spacing characters allowed!');
	}

	if (ref_like_string.startsWith('1.0.schema.json#/$defs/')) {
		throw new NoMatchError(
			ref_like_string,
			'Already a 1.0 ref!',
		);
	}

	return `1.0.schema.json#/$defs/${
		ref_like_string
	}` as one_point_oh_ref<T>;
}

export function one_point_one_ref<
	T extends string = string
>(ref_like_string:T): one_point_one_ref<T> {
	if (/\s+/.test(ref_like_string)) {
		throw new Error('No spacing characters allowed!');
	}

	if (ref_like_string.startsWith('1.1.schema.json#/$defs/')) {
		throw new NoMatchError(
			ref_like_string,
			'Already a 1.1 ref!',
		);
	}

	return `1.1.schema.json#/$defs/${
		ref_like_string
	}` as one_point_one_ref<T>;
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

export function is_update8_$ref(maybe: unknown): maybe is (
	typeof maybe extends string
		? update8_ref<typeof maybe>
		: never
) {
	return is_string(maybe) && maybe.startsWith('update8.schema.json#/$defs/');
}

export function is_one_point_oh_$ref(maybe: unknown): maybe is (
	typeof maybe extends string
		? one_point_oh_ref<typeof maybe>
		: never
) {
	return is_string(maybe) && maybe.startsWith('1.0.schema.json#/$defs/');
}

export function is_one_point_one_$ref(maybe: unknown): maybe is (
	typeof maybe extends string
		? one_point_one_ref<typeof maybe>
		: never
) {
	return is_string(maybe) && maybe.startsWith('1.1.schema.json#/$defs/');
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

export function update8_$ref_in_array(
	maybe_$ref: unknown,
	$ref_array: update8_ref<string>[],
) {
	return is_update8_$ref(maybe_$ref) && $ref_array.includes(maybe_$ref);
}

export function one_point_oh_$ref_in_array(
	maybe_$ref: unknown,
	$ref_array: one_point_oh_ref<string>[],
) {
	return is_one_point_oh_$ref(maybe_$ref) && $ref_array.includes(maybe_$ref);
}

export function one_point_one_$ref_in_array(
	maybe_$ref: unknown,
	$ref_array: one_point_one_ref<string>[],
) {
	return (
		is_one_point_one_$ref(maybe_$ref)
		&& $ref_array.includes(maybe_$ref)
	);
}

export type additional_$defs = {
	[
		key in Exclude<specific_schema_shorthand, 'common'>
	]?: {[key: string]: SchemaObject}
};
