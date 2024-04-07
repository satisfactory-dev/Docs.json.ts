import {
	Generator as Base,
	ConvertsArray,
	ExpressionResult,
	RawGenerationResult,
} from '../Generator';
import {
	DocsDataItem, DocsDataItem_Classes_entry,
} from '../../DocsTsGenerator';
import {
	SchemaObject,
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	DataDiscovery,
} from '../../DataDiscovery';
import {
	NoMatchError,
} from '../../Exceptions';
import {
	MaxBoundedArray,
	UnboundArray,
} from '../JsonSchema/Array';
import {
	UnrealEngineString,
} from '../CustomTypes/UnrealEngineString';
import {
	object_has_property,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	is_UnrealEngineString_parent,
} from '../../CustomParsingTypes/UnrealEngineString';
import {
	TypeReferenceNode,
} from 'typescript';
import {
	ObjectExtendsAndHasAdditionalProperties,
	ObjectExtendsButHasNoAdditionalProperties,
} from '../JsonSchema/Object';
import {
	adjust_class_name,
	type_reference_node,
} from '../../TsFactoryWrapper';
import {
	local_ref,
} from '../../StringStartsWith';
import {
	compile,
} from '../../AjvUtilities';

type DocsDataItem_schema = (
	& SchemaObject
	& {
		definitions: {[key: string]: SchemaObject},
		type: 'object',
		$ref: '#/definitions/NativeClass',
		unevaluatedProperties: false,
		properties: {
			Classes: SchemaObject,
		},
	}
);

type modified_DocsDataItem =
	& DocsDataItem<
		unknown,
		ExpressionResult
	>
	& {
		Classes_type: undefined|TypeReferenceNode,
		NativeClass_raw:string
	};

type DocsDataItemResult =
	| RawGenerationResult<DocsDataItem>
	| RawGenerationResult<
		modified_DocsDataItem
	>;

export class Generator extends Base<
	DocsDataItem,
	DocsDataItemResult,
	DocsDataItemResult,
	DocsDataItemResult
> {
	private readonly prepare:Promise<SpecificItemGenerator[]>;

	constructor(discovery:DataDiscovery) {
		super(discovery);
		const check = compile<
			DocsDataItem_schema
		>(discovery.docs.ajv, {
			type: 'object',
			required: [
				'type',
				'$ref',
				'unevaluatedProperties',
				'properties',
			],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: 'object'},
				$ref: {type: 'string', const: '#/definitions/NativeClass'},
				unevaluatedProperties: {type: 'boolean', const: false},
				properties: {
					type: 'object',
					required: ['Classes'],
					additionalProperties: false,
					properties: {
						Classes: {type: 'object'},
					},
				},
			},
		})
		this.prepare = new Promise((yup, nope) => {
			this.discovery.docs.schema().then((
				{
					definitions,
					prefixItems,
				}
			) => {
				yup(prefixItems.map((item) => {
					if (!check(item)) {
						throw new NoMatchError(item);
					}

					const schema:DocsDataItem_schema = {
						...item,
						definitions,
					};

					return new SpecificItemGenerator(discovery, schema);
				}));
			}).catch(nope);
		});
	}

	async matches(raw_data: unknown) {
		const checks = await this.prepare;

		for (const check of checks) {
			const maybe = await check.matches(
				raw_data
			);

			if (maybe) {
				return maybe;
			}
		}

		throw new NoMatchError({
			raw_data,
		});

		return undefined;
	}
}

/**
 * @todo need to add support for NativeClass.Classes with oneOf specs on items
 */
export class SpecificItemGenerator extends Base<
	DocsDataItem,
	DocsDataItemResult,
	DocsDataItemResult,
	DocsDataItemResult
> {
	private readonly array_only_minItems:UnboundArray;
	private readonly array_with_maxItems:MaxBoundedArray;
	private readonly check:ValidateFunction<DocsDataItem>;
	private readonly extends_$ref:ObjectExtendsButHasNoAdditionalProperties;
	private readonly has_properties:ObjectExtendsAndHasAdditionalProperties;
	private readonly NativeClass_definition:Promise<SchemaObject>;
	private readonly schema:DocsDataItem_schema;
	private readonly unreal_engine_string:UnrealEngineString;

	constructor(
		discovery:DataDiscovery,
		schema:DocsDataItem_schema
	) {
		super(discovery);
		this.check = compile<DocsDataItem>(discovery.docs.ajv, schema);
		this.schema = schema;
		this.array_only_minItems = new UnboundArray(discovery);
		this.array_with_maxItems = new MaxBoundedArray(discovery);
		this.unreal_engine_string = new UnrealEngineString(discovery);
		this.NativeClass_definition = this.discovery.docs.definition(
			'NativeClass'
		);
		this.extends_$ref = new ObjectExtendsButHasNoAdditionalProperties(
			discovery
		);
		this.has_properties = new ObjectExtendsAndHasAdditionalProperties(
			discovery
		);
	}

	async matches(raw_data: unknown) : Promise<
		| RawGenerationResult<DocsDataItem>
		| RawGenerationResult<modified_DocsDataItem>
		| undefined
	> {
		if (this.check(raw_data)) {
			const maybe_unbound_array = await (
				await this.array_with_maxItems.matches(
					this.schema.properties.Classes
				)
			)?.result() || await (
				await this.array_only_minItems.matches(
					this.schema.properties.Classes
				)
			)?.result();

			if (!(maybe_unbound_array instanceof ConvertsArray)) {
				throw new NoMatchError({
					NativeClass: raw_data.NativeClass,
					maxItems: this.array_with_maxItems.check.errors,
					minItems: this.array_only_minItems.check.errors,
				});
			} else if (
				!maybe_unbound_array.check(this.schema.properties.Classes)
			) {
				throw new NoMatchError(
					{
						raw_data,
						schema: this.schema.properties.Classes,
					},
					'Matches to array conversion despite schema not passing!'
				);
			}

			const NativeClass_definition = await this.NativeClass_definition;

			if (
				!object_has_property(
					NativeClass_definition,
					'properties',
					value_is_non_array_object
				)
				|| !object_has_property(
					NativeClass_definition.properties,
					'NativeClass',
					is_UnrealEngineString_parent
				)
			) {
				throw new NoMatchError(
					NativeClass_definition,
					'UnrealEngineString expected, not found!'
				);
			}

			const {NativeClass} = raw_data;

			const Classes = await Promise.all(
				(await maybe_unbound_array.convert_array(
					this.schema.properties.Classes,
					raw_data.Classes
				)).map(e => (
					e.result()
				))
			) as DocsDataItem_Classes_entry[];

			let Classes_type:undefined|TypeReferenceNode = undefined;

			if (
				await this.extends_$ref.matches(
					this.schema.properties.Classes.items
				)
				|| await this.has_properties.matches(
					this.schema.properties.Classes.items
				)
			) {
				Classes_type = type_reference_node(adjust_class_name(
					`${(
						this.schema.properties.Classes.items.$ref as local_ref<
							string
						>
					).substring(14)}__type`
				));
			}

			const result:modified_DocsDataItem = {
				NativeClass_raw: NativeClass,
				Classes_type,
				NativeClass: await this.unreal_engine_string.convert_unknown(
					NativeClass_definition.properties.NativeClass,
					NativeClass
				),
				Classes,
			};

			return new RawGenerationResult(result);
		}

		return undefined;
	}
}
