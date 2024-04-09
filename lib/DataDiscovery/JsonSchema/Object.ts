import {
	Generator as Base,
	ConvertsObject,
	ConvertsUnknown,
	RawGenerationResult,
} from '../Generator';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	object_has_property,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
	local_ref,
} from '../../StringStartsWith';
import {
	compile,
} from '../../AjvUtilities';
import {
	NoMatchError,
} from '../../Exceptions';

export type object_extends_but_has_no_additional_properties = {
	type: 'object',
	$ref: local_ref<string>,
	unevaluatedProperties: false,
}
export type object_extends_and_has_additional_properties =
	& object_extends_but_has_no_additional_properties
	& {
		properties: {[key: string]: SchemaObject}
	};

abstract class ObjectTypeResolver<
	Check extends object_extends_but_has_no_additional_properties
		= object_extends_but_has_no_additional_properties
> extends ConvertsObject<SchemaObject> {
	private readonly check_errors:WeakMap<object, unknown[]> = new WeakMap<
		object,
		unknown[]
	>();
	protected readonly check:Promise<ValidateFunction<Check>>;

	protected constructor(
		discovery:DataDiscovery,
		from_schema:(definitions:{[key: string]: SchemaObject}) => SchemaObject
	) {
		super(discovery);
		this.check = discovery.docs.schema().then(({definitions}) => {
			return compile<
				Check
			>(discovery.docs.ajv, from_schema(definitions));
		});
	}

	async convert_object(
		schema: Check,
		raw_data: {
			[key: string]: unknown; }
	): Promise<{ [key: string]: unknown; }
	> {
		const property_converters = await this.resolve_property_converters(
			schema
		);

		if (
			Object.keys(property_converters).length > 0
		) {
			return Object.fromEntries(await Promise.all(Object.entries(
				raw_data
			).map(
				async (e) : Promise<[string, unknown]> => {
					const [property, value] = e;

					if (
						property in property_converters
						&& (
							property_converters[
								property
							][1] instanceof ConvertsUnknown
						)
					) {
						const [
							schema,
							converter,
						] = property_converters[property] as [
							SchemaObject,
							ConvertsUnknown<unknown, unknown>,
						];

						return [
							property,
							await converter.convert_unknown(
								schema,
								value,
							),
						];
					}

					return [property, value];
				}
			)));
		}

		return raw_data;
	}

	async matches(schema:unknown)
	{
		const check = await this.check;

		if (check(schema)) {
			return new RawGenerationResult(this);
		} else if(schema && 'object' === typeof schema) {
			if (!this.check_errors.has(schema)) {
				this.check_errors.set(schema, []);
			}

			(this.check_errors.get(schema) as unknown[]).push(check.errors);
		}

		return undefined;
	}

	validation_errors(schema:unknown): unknown[]|undefined
	{
		return (
			(schema && 'object' === typeof schema)
				? this.check_errors.get(schema)
				: undefined
		);
	}

	protected async resolve_converters(
		$ref:string
	): Promise<{[key: string]: [SchemaObject, unknown]}> {
		const resolved = await this.discovery.docs.definition(
			$ref
		);

		return this.resolve_property_converters(resolved);
	}

	protected async resolve_property_converters(
		resolved:SchemaObject
	): Promise<{[key: string]: [SchemaObject, unknown]}> {
		const property_converters:{
			[key: string]: [SchemaObject, unknown]
		} = {};

		if (
			object_has_property(
				resolved,
				'properties',
				(e): e is {[key: string]: SchemaObject} => {
					return (
						value_is_non_array_object(e)
						&& Object.values(e).every(
							value_is_non_array_object
						)
					);
				}
			)
		) {
			const properties = resolved.properties;

			const entries:[string, unknown][] = [];

			for (const e of Object.entries(properties)) {
				entries.push([
					e[0],
					await (await Base.find(
						await this.discovery.candidates,
						e[1]
					)).result(),
				]);
			}

			for (const entry of (
				entries
			)) {
				const [property, result] = entry;
				if (!(property in property_converters)) {
					property_converters[property] = [
						properties[property],
						result,
					];
				}
			}
		}

		if (
			'$ref' in resolved
			&& is_string(resolved.$ref)
			&& resolved.$ref.startsWith('#/definitions/')
		) {
			for (const entry of Object.entries(
				await this.resolve_converters(resolved.$ref.substring(14))
			)) {
				if (!(entry[0] in property_converters)) {
					property_converters[entry[0]] = entry[1];
				}
			}
		}

		return property_converters;
	}
}

function definitions_to_ref(
	definitions:{[key: string]: SchemaObject}
): SchemaObject & {
	type: 'object',
	required: [string, ...string[]],
	additionalProperties: false,
	properties: SchemaObject,
} {
	return {
		type: 'object',
		required: ['type', '$ref', 'unevaluatedProperties'],
		additionalProperties: false,
		properties: {
			type: {type: 'string', const: 'object'},
			$ref: {
				type: 'string',
				enum: Object.keys(definitions).map(local_ref),
			},
			unevaluatedProperties: {type: 'boolean', const: false},
		},
	};
}

export class ObjectExtendsButHasNoAdditionalProperties
	extends ObjectTypeResolver
{
	constructor(discovery:DataDiscovery) {
		super(discovery, definitions_to_ref);
	}
}

export class ObjectExtendsAndHasAdditionalProperties
	extends ObjectTypeResolver<object_extends_and_has_additional_properties>
{
	constructor(discovery:DataDiscovery) {
		super(discovery, (definitions:{[key: string]: SchemaObject}) => {
			const {
				required,
				properties,
				...rest
			} = definitions_to_ref(definitions);

			return {
				...rest,
				required: [
					...required,
					'properties',
				],
				properties: {
					...properties,
					properties: {type: 'object', minProperties: 1},
				},
			};
		});
	}
}

type object_extends_from_oneOf = {
	oneOf: [
		object_extends_but_has_no_additional_properties,
		...object_extends_but_has_no_additional_properties[],
	],
};

export class IsOneOfRef extends ConvertsObject<SchemaObject>
{
	private readonly check_errors:WeakMap<object, unknown[]> = new WeakMap<
		object,
		unknown[]
	>();
	protected readonly check:Promise<ValidateFunction<
		object_extends_from_oneOf
	>>;
	protected readonly resolver:ObjectExtendsButHasNoAdditionalProperties;

	constructor(discovery:DataDiscovery) {
		super(discovery);
		this.check = discovery.docs.schema().then(({definitions}) => {
			return compile<object_extends_from_oneOf>(discovery.docs.ajv, {
				type: 'object',
				required: ['oneOf'],
				additionalProperties: false,
				properties: {
					oneOf: {
						type: 'array',
						minItems: 1,
						items: definitions_to_ref(definitions),
					},
				},
			});
		});
		this.resolver = new ObjectExtendsButHasNoAdditionalProperties(
			discovery
		);
	}
	async convert_object(
		schema: object_extends_from_oneOf,
		raw_data: {[key: string]: unknown}
	): Promise<{[key: string]: unknown }> {
		const {definitions} = await this.discovery.docs.schema();
		for (const entry of schema.oneOf) {
			const schema = {
				...entry,
				definitions,
			};
			const check = this.discovery.docs.ajv.compile(schema);

			if (check(raw_data)) {
				return this.resolver.convert_object(
					schema,
					raw_data
				);
			}
		}

		throw new NoMatchError({
			schema,
			raw_data,
		});
	}

	async matches(schema:unknown)
	{
		const check = await this.check;

		if (check(schema)) {
			return new RawGenerationResult(this);
		} else if (schema && 'object' === typeof schema) {
			if (!this.check_errors.has(schema)) {
				this.check_errors.set(schema, []);
			}

			(this.check_errors.get(schema) as unknown[]).push(check.errors);
		}

		return undefined;
	}

	validation_errors(schema:unknown): unknown[]|undefined
	{
		return (
			(schema && 'object' === typeof schema)
				? this.check_errors.get(schema)
				: undefined
		);
	}
}
