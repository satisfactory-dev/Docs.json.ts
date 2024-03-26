import {
	TypeNode,
} from 'typescript';
import {
	Generator,
} from './Generator';
import {
	TypeDefinitionDiscovery,
} from '../TypeDefinitionDiscovery';
import Ajv, {
	SchemaObject,
} from 'ajv/dist/2020';

export abstract class GeneratorDoesDiscovery<
	RawData,
	Type extends TypeNode = TypeNode
> extends Generator<RawData, Type> {
	protected readonly discovery:TypeDefinitionDiscovery;

	protected constructor(
		ajv: Ajv,
		schema: SchemaObject,
		discovery: TypeDefinitionDiscovery
	) {
		super(ajv, schema);
		this.discovery = discovery;
	}
}
