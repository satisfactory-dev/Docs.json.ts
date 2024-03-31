import {
	Generator as Base,
	ConvertsArray,
	ExpressionResult,
	RawGenerationResult,
} from '../Generator';
import {
	DocsDataItem, DocsDataItem_Classes_entry,
} from '../../DocsTsGenerator';
import Ajv, {
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

type DocsDataItemResult =
	| RawGenerationResult<DocsDataItem>
	| RawGenerationResult<
		DocsDataItem<
			unknown,
			ExpressionResult
		>
		& {
			NativeClass_raw:string
		}
	>;

export class Generator extends Base<
	DocsDataItem,
	DocsDataItemResult,
	DocsDataItemResult,
	DocsDataItemResult
> {
	private readonly prepare:Promise<SpecificItemGenerator[]>;

	constructor(discovery:DataDiscovery, ajv:Ajv) {
		super(discovery);
		const check = ajv.compile<DocsDataItem_schema>({
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

					return new SpecificItemGenerator(discovery, ajv, schema);
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

		return undefined;
	}
}

class SpecificItemGenerator extends Base<
	DocsDataItem,
	DocsDataItemResult,
	DocsDataItemResult,
	DocsDataItemResult
> {
	private readonly check:ValidateFunction<DocsDataItem>;
	private readonly NativeClass_definition:Promise<SchemaObject>;
	private readonly schema:DocsDataItem_schema;
	private readonly unbound_array:UnboundArray;
	private readonly unreal_engine_string:UnrealEngineString;

	constructor(
		discovery:DataDiscovery,
		ajv:Ajv,
		schema:DocsDataItem_schema
	) {
		super(discovery);
		this.check = ajv.compile<DocsDataItem>(schema);
		this.schema = schema;
		this.unbound_array = new UnboundArray(discovery, ajv);
		this.unreal_engine_string = new UnrealEngineString(discovery);
		this.NativeClass_definition = this.discovery.docs.definition(
			'NativeClass'
		);
	}

	async matches(raw_data: unknown) {
		if (this.check(raw_data)) {
			const maybe_unbound_array = await (
				await this.unbound_array.matches(
					this.schema.properties.Classes
				)
			)?.result();

			if (!(maybe_unbound_array instanceof ConvertsArray)) {
				return new RawGenerationResult(raw_data);
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
				)).map(e => e.result())
			) as DocsDataItem_Classes_entry[];

			const result: (
				& DocsDataItem<unknown, ExpressionResult>
				& {NativeClass_raw: string}
			) = {
				NativeClass_raw: NativeClass,
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
