import type {
	TypeNode,
} from 'typescript';
import {
	Generator,
} from './Generator.ts';
import type {
	TypeDefinitionDiscovery,
} from '../TypeDefinitionDiscovery.ts';
import type {
	SchemaObject,
} from 'ajv/dist/2020.js';

export abstract class GeneratorDoesDiscovery<
	RawData,
	Type extends TypeNode = TypeNode,
> extends Generator<RawData, Type> {
	protected readonly discovery: TypeDefinitionDiscovery;

	protected constructor(
		schema: SchemaObject,
		discovery: TypeDefinitionDiscovery,
	) {
		super(discovery.docs.ajv, schema);
		this.discovery = discovery;
	}
}
