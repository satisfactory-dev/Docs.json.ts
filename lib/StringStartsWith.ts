export type StringStartsWith<
	Prefix extends string,
	Suffix extends string = string
> = keyof {
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

export function $ref_in_array(
	$ref: local_ref<string>,
	$ref_array: local_ref<string>[]
) {
	return $ref_array.includes($ref);
}
