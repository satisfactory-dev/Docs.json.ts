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
> = StringStartsWith<'#/definitions/', T>;

export function local_ref<
	T extends string = string
>(ref_like_string:T): local_ref<T> {
	if (/\s+/.test(ref_like_string)) {
		throw new Error('No spacing characters allowed!');
	}

	return `#/definitions/${
		ref_like_string
	}` as local_ref<T>;
}

export function is_string(maybe: unknown): maybe is string {
	return 'string' === typeof maybe;
}

export function is_$ref(maybe: unknown): maybe is (
	typeof maybe extends string
		? local_ref<typeof maybe>
		: never
) {
	return is_string(maybe) && maybe.startsWith('#/definitions/');
}

export function $ref_in_array(
	maybe_$ref: unknown,
	$ref_array: local_ref<string>[]
) {
	return is_$ref(maybe_$ref) && $ref_array.includes(maybe_$ref);
}
