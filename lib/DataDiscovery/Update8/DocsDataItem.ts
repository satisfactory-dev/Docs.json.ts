import {
	Generator as Base,
	ConvertsArray,
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

export class Generator extends Base<
	DocsDataItem,
	DocsDataItem
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

class SpecificItemGenerator extends Base<DocsDataItem>
{
	private readonly check:ValidateFunction<DocsDataItem>;
	private readonly schema:DocsDataItem_schema;
	private readonly unbound_array:UnboundArray;

	constructor(
		discovery:DataDiscovery,
		ajv:Ajv,
		schema:DocsDataItem_schema
	) {
		super(discovery);
		this.check = ajv.compile<DocsDataItem>(schema);
		this.schema = schema;
		this.unbound_array = new UnboundArray(discovery, ajv);
	}

	async matches(raw_data: unknown)
	{
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

			const {NativeClass} = raw_data;

			const Classes = await Promise.all(
				(await maybe_unbound_array.convert_array(
					this.schema.properties.Classes,
					raw_data.Classes
				)).map(e => e.result())
			) as DocsDataItem_Classes_entry[];

			return new RawGenerationResult({
				NativeClass,
				Classes,
			});
		}

		return undefined;
	}
}
