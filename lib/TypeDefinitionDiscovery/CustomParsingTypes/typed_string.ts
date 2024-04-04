import {
	TypeLiteralNode,
} from 'typescript';
import {
	TypeDefinitionDiscovery,
} from '../../TypeDefinitionDiscovery';
import {
	create_object_type_from_entries,
} from '../../TsFactoryWrapper';
import {
	GeneratorDoesDiscovery,
} from '../GeneratorDoesDiscovery';
import {
	UnrealEngineString,
} from './UnrealEngineString';
import {
	AnyGenerator,
} from '../Generator';
import {
	generate_object_parent_schema,
	typed_string_parent_type,
} from '../../CustomParsingTypes/TypedString';
import {
	local_ref,
} from '../../StringStartsWith';
import {
	UnrealEngineString_schema_definitions,
} from '../../CustomParsingTypes/UnrealEngineString';

export class typed_string extends GeneratorDoesDiscovery<
	typed_string_parent_type,
	TypeLiteralNode
> {
	private readonly known_types:[
		AnyGenerator,
		...AnyGenerator[],
	];

	constructor(
		supported_refs: local_ref<string>[],
		discovery:TypeDefinitionDiscovery
	) {
		super(
			{
				...generate_object_parent_schema(
					supported_refs,
					[],
					0,
					-1,
				),
				definitions: UnrealEngineString_schema_definitions,
			},
			discovery
		);

		this.known_types = [
			new UnrealEngineString(discovery.docs.ajv),
		];
	}

	generate(): (raw_data: typed_string_parent_type) => TypeLiteralNode {
		return (raw_data:typed_string_parent_type) : TypeLiteralNode => {
			return create_object_type_from_entries(
				Object.entries(
					raw_data.typed_string.properties
				).map((
					entry
				) => {
					for (const known_type of this.known_types) {
						if (known_type.check(entry[1])) {
							return [
								entry[0],
								known_type.generate()(entry[1] as never),
							];
						}
					}

					return [
						entry[0],
						this.discovery.find(entry[1]),
					];
				})
			);
		};
	}
}
