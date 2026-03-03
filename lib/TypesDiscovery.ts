import type {
	SchemaObject,
} from 'ajv/dist/2020.js';
import {
	object_has_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';
import {
	CandidatesDiscovery,
} from './TypesDiscovery/CandidatesDiscovery.ts';
import {
	properties,
} from './TypesDiscovery/JsonSchema/properties.ts';
import {
	non_empty_array_property,
} from './TypesDiscovery/non_empty_array_property.ts';
import {
	$ref,
	common_$ref,
} from './TypesDiscovery/JsonSchema/$ref.ts';
import {
	non_array_object_property,
} from './TypesDiscovery/non_array_object_property.ts';
import type {
	docs_versions,
	DocsDataItem,
} from './DocsTsGenerator.ts';
import {
	DocsTsGenerator,
} from './DocsTsGenerator.ts';
import {
	compile,
} from '@satisfactory-dev/ajv-utilities';
import {
	local_ref,
} from './StringStartsWith.ts';
import {
	typed_string,
} from './TypesDiscovery/CustomParsingTypes/typed_string.ts';
import {
	ConstString,
} from './TypesDiscovery/JsonSchema/const.ts';
import {
	EnumString,
} from './TypesDiscovery/JsonSchema/enum.ts';
import {
	UnrealEngineString,
} from './TypesDiscovery/CustomParsingTypes/UnrealEngineString.ts';

import common_schema from '../schema/common.schema.json' with {type: 'json'};

export class TypesDiscovery
{
	private discovery:Promise<{
		discovered_types: local_ref<string>[],
		missed_types: string[],
		schema_$defs: string[],
	}>|undefined;
	private readonly candidates_discovery:[
		CandidatesDiscovery,
		...CandidatesDiscovery[],
	];
	private readonly docs:DocsTsGenerator;
	private readonly version: keyof docs_versions;

	constructor(
		candidates_discovery: [CandidatesDiscovery, ...CandidatesDiscovery[]],
		docs: DocsTsGenerator,
		version: keyof docs_versions,
	) {
		this.candidates_discovery = candidates_discovery;
		this.docs = docs;
		this.version = version;
	}

	async discover_types()
	{
		if (!this.discovery) {
			const schema = await this.docs.schema(this.version);
			const discovered_types = new Set<local_ref<string>>();

			this.discover_types_from(schema, schema, discovered_types);

			this.discovery = Promise.resolve({
				discovered_types: [...discovered_types.values()],
				missed_types: Object.keys(
					object_has_property(
						schema,
						'$defs',
						value_is_non_array_object,
					)
						? schema.$defs
						: {},
				).map(local_ref).filter(
					maybe => !discovered_types.has(maybe),
				),
				schema_$defs: Object.keys(schema.$defs),
			});
		}

		return this.discovery;
	}

	private discover_types_from(
		current:unknown,
		schema:SchemaObject,
		discovered_types:Set<string>,
	) {
		if (!value_is_non_array_object(current)) {
			return;
		}

		for (const discovery of this.candidates_discovery) {
			const candidates = discovery.discovery_candidates(
				current,
				discovered_types,
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
		docs:DocsTsGenerator,
		version: keyof docs_versions,
	) {
		const schema = await docs.schema(version);

		if (!object_has_property(
			schema,
			'$defs',
			value_is_non_array_object,
		)) {
			throw new Error('Schema appears to have no $defs');
		}

		const target_schema = 'common' === version ? schema : common_schema;

		if (!object_has_property(
			target_schema.$defs,
			'NativeClass',
			value_is_non_array_object,
		)) {
			throw new Error('Could not find NativeClass on provided schema!');
		}

		return compile<DocsDataItem>(docs.ajv, {
			$defs: target_schema.$defs,
			...target_schema.$defs.NativeClass,
		});
	}

	static standard_jsonschema_discovery(schema:SchemaObject): (
		[CandidatesDiscovery, ...CandidatesDiscovery[]]
	) {
		return [
			new non_empty_array_property('prefixItems', schema),
			new non_empty_array_property('oneOf', schema),
			new non_empty_array_property('anyOf', schema),
			new non_empty_array_property('allOf', schema),
			new non_array_object_property('items', schema),
			new properties(schema),
			new $ref(schema),
			new common_$ref(),
			new ConstString(schema),
			new EnumString(schema),
		];
	}
}
