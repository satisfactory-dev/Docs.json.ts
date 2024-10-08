import {
	CandidatesDiscovery,
} from '../CandidatesDiscovery';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	is_string,
	object_has_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

// eslint-disable-next-line max-len
import common_schema from '../../../schema/common.schema.json' with {type: 'json'};

export class $ref extends CandidatesDiscovery
{
	private readonly $defs:{[key: string]: true};

	constructor(schema:SchemaObject) {
		super(schema);
		this.$defs =
			object_has_property(
				schema,
				'$defs',
				value_is_non_array_object,
			)
				? Object.fromEntries(
					Object.keys(schema.$defs).map(e => [e, true]),
				)
				: {};
	}

	discovery_candidates(
		current: unknown,
		discovered_types: Set<string>,
	): [unknown, ...unknown[]] | undefined {

		const $defs = this.$defs;

		function has_definition_$ref(
			maybe:unknown,
		) : maybe is (
			& {[key: string]: unknown}
			& {$ref: Exclude<(keyof typeof $defs), number>}
		) {
			return (
				object_has_property(maybe, '$ref', is_string)
				&& maybe.$ref.startsWith('#/$defs/')
				&& maybe.$ref.substring(8) in $defs
			);
		}

		function schema_has_definition<T extends string = string>(
			maybe:T, schema:SchemaObject,
		): schema is (
			& SchemaObject
			& {
				$defs: (
					& {[key: string]: unknown}
					& {[k in typeof maybe]: {[key: string]: unknown}}
				)
			}
		) {
			return (
				maybe.startsWith('#/$defs/')
				&& maybe.substring(8) in schema.$defs
			);
		}

		if (
			has_definition_$ref(current)
			&& schema_has_definition(current.$ref, this.schema)
			&& !discovered_types.has(current.$ref)
		) {
			discovered_types.add(current.$ref);
			return [this.schema.$defs[current.$ref.substring(8)]];
		}

		return undefined;
	}
}

export class common_$ref extends CandidatesDiscovery
{
	public readonly $defs:{[key: string]: true};

	constructor() {
		super(common_schema);
		this.$defs =
			object_has_property(
				common_schema,
				'$defs',
				value_is_non_array_object,
			)
				? Object.fromEntries(
					Object.keys(common_schema.$defs).map(e => [e, true]),
				)
				: {};
	}

	discovery_candidates(
		current: unknown,
		discovered_types: Set<string>,
	): [unknown, ...unknown[]] | undefined {

		const $defs = this.$defs;

		function has_definition_$ref(
			maybe:unknown,
		) : maybe is (
			& {[key: string]: unknown}
			& {$ref: Exclude<(keyof typeof $defs), number>}
		) {
			return (
				object_has_property(maybe, '$ref', is_string)
				&& maybe.$ref.startsWith('#/$defs/')
				&& maybe.$ref.substring(8) in $defs
			);
		}

		function schema_has_definition<T extends string = string>(
			maybe:T, schema:SchemaObject,
		): schema is (
			& SchemaObject
			& {
				$defs: (
					& {[key: string]: unknown}
					& {[k in typeof maybe]: {[key: string]: unknown}}
				)
			}
		) {
			return (
				maybe.startsWith('#/$defs/')
				&& maybe.substring(8) in schema.$defs
			);
		}

		function schema_has_definition_from_external<
			T extends string = string
		>(
			maybe:T, schema:SchemaObject,
		): schema is (
			& SchemaObject
			& {
				$defs: (
					& {[key: string]: unknown}
					& {[k in typeof maybe]: {[key: string]: unknown}}
				)
			}
		) {
			return (
				maybe.startsWith('common.schema.json#/$defs/')
				&& maybe.substring(26) in schema.$defs
			);
		}

		if (
			has_definition_$ref(current)
			&& schema_has_definition(current.$ref, this.schema)
			&& !discovered_types.has(current.$ref)
		) {
			discovered_types.add(current.$ref);
			return [this.schema.$defs[current.$ref.substring(8)]];
		}

		if (
			value_is_non_array_object(current)
			&& object_has_property(current, '$ref', is_string)
			&& schema_has_definition_from_external(current.$ref, this.schema)
			&& !discovered_types.has(current.$ref)
		) {
			discovered_types.add(current.$ref);
			return [this.schema.$defs[current.$ref.substring(26)]];
		}

		return undefined;
	}
}
