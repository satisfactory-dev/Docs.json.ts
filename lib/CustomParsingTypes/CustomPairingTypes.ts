export function annoyingly_have_to_escape_property(property: string): string {
	return property.replace(/([[\]])/g, '\\$1');
}

export abstract class SupportedSubSchemaType<
	ObjectType extends {[key: string]: unknown} = {[key: string]: unknown}
> {
	abstract is_supported_schema(maybe: unknown): maybe is ObjectType;

	abstract value_regex(value: ObjectType): string;
}
