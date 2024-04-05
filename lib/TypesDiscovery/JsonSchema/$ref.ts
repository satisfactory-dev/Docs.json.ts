import {
	CandidatesDiscovery,
} from '../CandidatesDiscovery';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	object_has_property,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
} from '../../StringStartsWith';

export class $ref extends CandidatesDiscovery
{
	private readonly definitions:{[key: string]: true};

	constructor(schema:SchemaObject) {
		super(schema);
		this.definitions =
			object_has_property(
				schema,
				'definitions',
				value_is_non_array_object
			)
				? Object.fromEntries(
					Object.keys(schema.definitions).map(e => [e, true])
				)
				: {};
	}

	discovery_candidates(
		current: unknown,
		discovered_types: Set<string>,
	): [unknown, ...unknown[]] | undefined {

		const definitions = this.definitions;

		function has_definition_$ref(
			maybe:unknown
		) : maybe is (
			& {[key: string]: unknown}
			& {$ref: Exclude<(keyof typeof definitions), number>}
			) {
			return (
				object_has_property(maybe, '$ref', is_string)
				&& maybe.$ref.startsWith('#/definitions/')
				&& maybe.$ref.substring(14) in definitions
			);
		}

		function schema_has_definition<T extends string = string>(
			maybe:T, schema:SchemaObject
		): schema is (
			& SchemaObject
			& {
				definitions: (
					& {[key: string]: unknown}
					& {[k in typeof maybe]: {[key: string]: unknown}}
				)
			}
		) {
			return (
				maybe.startsWith('#/definitions/')
				&& maybe.substring(14) in schema.definitions
			);
		}

		if (
			has_definition_$ref(current)
			&& schema_has_definition(current.$ref, this.schema)
			&& !discovered_types.has(current.$ref)
		) {
			discovered_types.add(current.$ref);
			return [this.schema.definitions[current.$ref.substring(14)]];
		}

		return undefined;
	}
}
