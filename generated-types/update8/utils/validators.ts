export function decimal_string(value: string, reference_argument: string) {
	if (!new RegExp('^\\d+\\.\\d{6}$').test(value))
		throw new Error(`${reference_argument} must be a decimal-like string!`);
	return value;
}

export function decimal_string__signed(
	value: string,
	reference_argument: string
) {
	if (!new RegExp('^-?\\d+\\.\\d{6}$').test(value))
		throw new Error(`${reference_argument} must be a decimal-like string!`);
	return value;
}

export function integer_string(value: string, reference_argument: string) {
	if (!new RegExp('^\\d+$').test(value))
		throw new Error(`${reference_argument} must be an integer-like string!`);
	return value;
}

export function integer_string__signed(
	value: string,
	reference_argument: string
) {
	if (!new RegExp('^-?\\d+$').test(value))
		throw new Error(`${reference_argument} must be an integer-like string!`);
	return value;
}
