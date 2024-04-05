import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	object_has_property,
	value_is_non_array_object,
} from './CustomParsingTypes/CustomPairingTypes';
import {
	CandidatesDiscovery,
} from './TypesDiscovery/CandidatesDiscovery';
import {
	properties,
} from './TypesDiscovery/JsonSchema/properties';
import {
	non_empty_array_property,
} from './TypesDiscovery/non_empty_array_property';
import {
	$ref,
} from './TypesDiscovery/JsonSchema/$ref';
import {
	non_array_object_property,
} from './TypesDiscovery/non_array_object_property';
import {
	DocsDataItem, DocsTsGenerator,
} from './DocsTsGenerator';
import {
	compile,
} from './AjvUtilities';
import {
	local_ref,
} from './StringStartsWith';
import {
	typed_string,
} from './TypesDiscovery/CustomParsingTypes/typed_string';
import {
	ConstString,
} from './TypesDiscovery/JsonSchema/const';
import {
	EnumString,
} from './TypesDiscovery/JsonSchema/enum';
import {
	UnrealEngineString,
} from './TypesDiscovery/CustomParsingTypes/UnrealEngineString';

export class TypesDiscovery
{
	private discovery:Promise<{
		discovered_types: local_ref<string>[],
		missed_types: string[],
	}>|undefined;
	private readonly candidates_discovery:[
		CandidatesDiscovery,
		...CandidatesDiscovery[],
	];
	private readonly docs:DocsTsGenerator;

	constructor(
		candidates_discovery: [CandidatesDiscovery, ...CandidatesDiscovery[]],
		docs: DocsTsGenerator,
	) {
		this.candidates_discovery = candidates_discovery;
		this.docs = docs;
	}

	async discover_types()
	{
		if (!this.discovery) {
			const schema = await this.docs.schema();
			const discovered_types = new Set<local_ref<string>>();

			this.discover_types_from(schema, schema, discovered_types);

			this.discovery = Promise.resolve({
				discovered_types: [...discovered_types.values()],
				missed_types: Object.keys(
					object_has_property(
						schema,
						'definitions',
						value_is_non_array_object
					)
						? schema.definitions
						: {}
				).map(local_ref).filter(
					maybe => !discovered_types.has(maybe)
				),
			});
		}

		return this.discovery;
	}

	private discover_types_from(
		current:unknown,
		schema:SchemaObject,
		discovered_types:Set<string>
	) {
		if (!value_is_non_array_object(current)) {
			return;
		}

		for (const discovery of this.candidates_discovery) {
			const candidates = discovery.discovery_candidates(
				current,
				discovered_types
			);
			for (const candidate of (candidates || [])) {
				this.discover_types_from(candidate, schema, discovered_types);
			}
		}
	}

	static custom_parsing_types(schema:SchemaObject): (
		[CandidatesDiscovery, ...CandidatesDiscovery[]]
	) {
		return [
			new UnrealEngineString(schema),
			new typed_string(schema),
		];
	}

	static async generate_is_NativeClass(
		docs:DocsTsGenerator
	) {
		const schema = await docs.schema();

		if (!object_has_property(
			schema,
			'definitions',
			value_is_non_array_object
		)) {
			throw new Error('Schema appears to have no definitions');
		}

		if (!object_has_property(
			schema.definitions,
			'NativeClass',
			value_is_non_array_object
		)) {
			throw new Error('Could not find NativeClass on provided schema!');
		}

		return compile<DocsDataItem>(docs.ajv, {
			definitions: schema.definitions,
			...schema.definitions.NativeClass,
		});
	}

	static standard_jsonschema_discovery(schema:SchemaObject): (
		[CandidatesDiscovery, ...CandidatesDiscovery[]]
	) {
		return [
			new non_empty_array_property('prefixItems', schema),
			new non_empty_array_property('oneOf', schema),
			new non_empty_array_property('anyOf', schema),
			new non_array_object_property('items', schema),
			new properties(schema),
			new $ref(schema),
			new ConstString(schema),
			new EnumString(schema),
		];
	}
}
