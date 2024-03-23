import {
	SchemaObject,
} from 'ajv/dist/2020';

export abstract class CandidatesDiscovery
{
	protected readonly schema:SchemaObject;

	constructor(schema:SchemaObject) {
		this.schema = schema;
	}

	abstract discovery_candidates(
		current: unknown,
		discovered_types: Set<string>,
	): [unknown, ...unknown[]] | undefined;
}

export abstract class PropertyDependentDiscovery extends CandidatesDiscovery
{
	protected readonly property:string;

	constructor(property:string, schema:SchemaObject) {
		super(schema);
		this.property = property;
	}
}
