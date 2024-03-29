import {
	LiteralExpression,
	LiteralTypeNode,
	TypeReferenceNode,
	UnionTypeNode,
} from 'typescript';

export function object_has_property<
	Property extends string = string,
	Value = unknown
>(
	maybe: unknown,
	property: Property,
	predicate: undefined|((maybe:unknown) => maybe is Value) = undefined
): maybe is {[key: string]: unknown} & {[key in Property]: Value} {
	return (
		value_is_non_array_object(maybe)
		&& property in maybe
		&& (
			undefined === predicate
			|| predicate(maybe[property])
		)
	);
}

export function object_has_non_empty_array_property<
	Property extends string = string,
	Value = unknown
>(
	maybe: unknown,
	property: Property,
	predicate:
		| undefined
		| ((inner_maybe: unknown) => inner_maybe is Value) = undefined
): maybe is (
	& {[key: string]: unknown}
	& {[key in Property]: [Value, ...Value[]]}
) {
	return (
		object_has_property(maybe, property)
		&& is_non_empty_array(maybe[property], predicate)
	);
}

export function object_has_property_that_equals(
	maybe: object,
	property: string,
	expects: unknown
): maybe is {[key: string]: unknown} & {
	[key in typeof property]: typeof expects;
} {
	return object_has_property(maybe, property) && expects === maybe[property];
}

export function value_is_non_array_object(
	maybe: unknown
): maybe is {[key: string]: unknown} {
	return 'object' === typeof maybe && !(maybe instanceof Array);
}

export function is_non_empty_array<T = unknown>(
	maybe: unknown,
	predicate:
		| undefined
		| ((inner_maybe: unknown) => inner_maybe is T) = undefined
): maybe is [T, ...T[]] {
	return (
		maybe instanceof Array
		&& maybe.length >= 1
		&& (undefined === predicate || maybe.every((e) => predicate(e)))
	);
}

export function object_only_has_that_property<T = unknown>(
	maybe: unknown,
	property: string,
	predicate: undefined | ((maybe: unknown) => maybe is T) = undefined
): maybe is {[key in typeof property]: T} {
	return (
		value_is_non_array_object(maybe)
		&& object_has_property(maybe, property)
		&& 1 === Object.keys(maybe).length
		&& (undefined === predicate || predicate(maybe[property]))
	);
}

export function annoyingly_have_to_escape_property(property: string): string {
	return property.replace(/([[\]])/g, '\\$1');
}

export abstract class SupportedSubSchemaType<
	ObjectType extends {[key: string]: unknown} = {[key: string]: unknown},
	LiteralType extends
		| LiteralExpression
		| UnionTypeNode
		| TypeReferenceNode =
		| LiteralExpression
		| UnionTypeNode
		| TypeReferenceNode,
> {

	key_value_pair_entry(
		key: string,
		value: ObjectType
	): [
		typeof key,
		LiteralType extends LiteralExpression
			? LiteralTypeNode & {literal: LiteralType}
			: LiteralType,
	] {
		return [key, this.value_type(value)];
	}

	key_value_pair_regex(key: string, value: ObjectType): string {
		return `(?:${annoyingly_have_to_escape_property(key)}=(?:${this.value_regex(value)}))`;
	}

	abstract is_supported_schema(maybe: unknown): maybe is ObjectType;

	abstract value_regex(value: ObjectType): string;

	abstract value_type(
		value: ObjectType
	): LiteralType extends LiteralExpression
		? LiteralTypeNode & {literal: LiteralType}
		: LiteralType;
}
