import ts, {
	TupleTypeNode,
	TypeLiteralNode,
} from 'typescript';
import {
	TypeDefinitionDiscovery,
} from '../../TypeDefinitionDiscovery';
import {
	create_object_type_from_entries,
	minimum_size_array_of_single_type,
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
	generate_typed_string_definitions,
	typed_string_inner_array_prefixItems_type,
	typed_string_inner_array_type,
	typed_string_inner_object_type,
	typed_string_parent_type,
} from '../../CustomParsingTypes/TypedString';
import {
	local_ref,
} from '../../StringStartsWith';
import {
	object_has_property,
} from '../../CustomParsingTypes/CustomPairingTypes';

export class typed_string extends GeneratorDoesDiscovery<
	typed_string_parent_type,
	TypeLiteralNode|TupleTypeNode
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
				...generate_object_parent_schema(),
				definitions: {
					...generate_typed_string_definitions(supported_refs),
				},
			},
			discovery
		);

		this.known_types = [
			new UnrealEngineString(discovery.docs.ajv),
		];
	}

	generate(): (
		raw_data: typed_string_parent_type
	) => TypeLiteralNode|TupleTypeNode {
		return (
			raw_data:typed_string_parent_type
		) : TypeLiteralNode|TupleTypeNode => {
			const {typed_string: typed_string_value} = raw_data;

			if (typed_string.is_array_type(typed_string_value)) {
				for (const known_type of this.known_types) {
					if (known_type.check(typed_string_value.items)) {
						return minimum_size_array_of_single_type(
							typed_string_value.minItems,
							() => known_type.generate()(
								typed_string_value.items as never
							),
							typed_string_value.maxItems
						)
					}
				}

				return minimum_size_array_of_single_type(
					typed_string_value.minItems,
					() => this.discovery.find(typed_string_value.items),
					typed_string_value.maxItems
				);
			} else if (typed_string.is_prefixItems_type(typed_string_value)) {
				return ts.factory.createTupleTypeNode(
					typed_string_value.prefixItems.map(
						e => this.discovery.find(e)
					)
				);
			}

			return create_object_type_from_entries(
				Object.entries(
					typed_string_value.properties
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

	static is_array_type(
		maybe:
			| typed_string_inner_object_type
			| typed_string_inner_array_type
			| typed_string_inner_array_prefixItems_type
	): maybe is typed_string_inner_array_type {
		return object_has_property(maybe, 'items');
	}

	static is_object_type(
		maybe:
			| typed_string_inner_object_type
			| typed_string_inner_array_type
			| typed_string_inner_array_prefixItems_type
	): maybe is typed_string_inner_object_type {
		return object_has_property(maybe, 'properties');
	}

	static is_prefixItems_type(
		maybe:
			| typed_string_inner_object_type
			| typed_string_inner_array_type
			| typed_string_inner_array_prefixItems_type
	): maybe is typed_string_inner_array_prefixItems_type {
		return object_has_property(maybe, 'prefixItems');
	}
}
