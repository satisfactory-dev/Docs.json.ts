export function object_has_property<T extends string = string>(
	maybe: object,
	property: T
): maybe is {[key: string]: any} & {[key in T]: any} {
	return property in maybe;
}

export function value_is_array(maybe: object): maybe is any[] {
	return maybe instanceof Array;
}

export function value_is_non_array_object(maybe: any): maybe is Exclude<object, any[]>
{
	return 'object' === typeof maybe && !(maybe instanceof Array);
}

export function array_is_non_empty<T extends any = any>(
	maybe: T[]
): maybe is [T, ...T[]] {
	return maybe.length >= 1;
}

export function object_has_array_property<T extends string = string>(
	maybe: object,
	property: T
): maybe is {[key: string]: any} & {[key in T]: any[]} {
	return (
		object_has_property(maybe, property) && value_is_array(maybe[property])
	);
}

export function object_only_has_that_property<T extends string = string>(
	maybe: object,
	property: T
): maybe is {[key in T]: any} {
	return (
		object_has_property(maybe, property) && 1 === Object.keys(maybe).length
	);
}
