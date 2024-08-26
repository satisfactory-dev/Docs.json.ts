import ts, {
	TupleTypeNode,
	TypeLiteralNode,
	UnionTypeNode,
} from 'typescript';
import {
	TypeDefinitionDiscovery,
} from '../../TypeDefinitionDiscovery';
import {
	create_object_type_from_entries,
	createPropertySignature,
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
	generate_typed_string_$defs,
	typed_string_inner_array_prefixItems_type,
	typed_string_inner_array_type,
	typed_string_inner_object_pattern_type,
	typed_string_inner_object_type,
	typed_string_parent_type,
} from '../../CustomParsingTypes/TypedString';
import {
	local_ref,
} from '../../StringStartsWith';
import {
	object_has_property,
} from '@satisfactory-dev/predicates.ts';

function create_combinations(values:Set<string>) : string[][] {
	const as_array:string[] = [...values.values()];
	const entered:string[] = [JSON.stringify(as_array)];
	const result:string[][] = [as_array];

	const filter_these_out:string[] = [];

	for (const item of as_array) {
		const filtered:string[] = as_array.filter(
			(maybe) => {
				return (
					maybe !== item
					&& !filter_these_out.includes(maybe)
				);
			},
		);

		if (filtered.length) {
			for (
				const entry of create_combinations(new Set<string>(filtered))
			) {
				const json_string = JSON.stringify(entry);

				if (!entered.includes(json_string)) {
					entered.push(json_string);
					result.push(entry);
				}
			}
		}
	}

	return [...(new Set<string[]>(result)).values()];
}

export class typed_string extends GeneratorDoesDiscovery<
	typed_string_parent_type,
	TypeLiteralNode|TupleTypeNode|UnionTypeNode
> {
	private readonly known_types:[
		AnyGenerator,
		...AnyGenerator[],
	];

	constructor(
		supported_refs: local_ref<string>[],
		discovery:TypeDefinitionDiscovery,
	) {
		super(
			{
				...generate_object_parent_schema(),
				$defs: {
					...generate_typed_string_$defs(supported_refs),
				},
			},
			discovery,
		);

		this.known_types = [
			new UnrealEngineString(discovery.docs.ajv),
		];
	}

	generate(): (
		raw_data: typed_string_parent_type
	) => TypeLiteralNode|TupleTypeNode|UnionTypeNode {
		return (
			raw_data:typed_string_parent_type,
		) : TypeLiteralNode|TupleTypeNode|UnionTypeNode => {
			const {typed_string: typed_string_value} = raw_data;

			if (typed_string.is_array_type(typed_string_value)) {
				for (const known_type of this.known_types) {
					if (known_type.check(typed_string_value.items)) {
						return minimum_size_array_of_single_type(
							typed_string_value.minItems,
							() => known_type.generate()(
								typed_string_value.items as never,
							),
							typed_string_value.maxItems,
						)
					}
				}

				return minimum_size_array_of_single_type(
					typed_string_value.minItems,
					() => this.discovery.find(typed_string_value.items),
					typed_string_value.maxItems,
				);
			} else if (typed_string.is_prefixItems_type(typed_string_value)) {
				return minimum_size_array_of_single_type(
					typed_string_value.minItems,
					() => ts.factory.createTupleTypeNode(
						typed_string_value.prefixItems.map(
							e => this.discovery.find(e),
						),
					),
					typed_string_value.maxItems,
				);
			} else if (
				typed_string.is_object_pattern_type(typed_string_value)
			) {
				const [
					property_regex,
					value,
				] = Object.entries(typed_string_value.patternProperties)[0];
				const properties = property_regex.substring(
					2,
					property_regex.length - 2,
				).split('|');

				const combinations = create_combinations(new Set(properties));

				const value_generator = () => this.discovery.find(value);

				const result = combinations.map(
					(required:string[]): TypeLiteralNode => {
						return ts.factory.createTypeLiteralNode(
							required.map(property => createPropertySignature(
								property,
								value_generator(),
							)),
						)
					},
				);

				return ts.factory.createUnionTypeNode(result);
			}

			return create_object_type_from_entries(
				Object.entries(
					typed_string_value.properties,
				).map((
					entry,
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
				}),
				typed_string_value.required,
			);
		};
	}

	static is_array_type(
		maybe:
			| typed_string_inner_object_type
			| typed_string_inner_object_pattern_type
			| typed_string_inner_array_type
			| typed_string_inner_array_prefixItems_type,
	): maybe is typed_string_inner_array_type {
		return (
			object_has_property(maybe, 'items')
			&& !object_has_property(maybe, 'prefixItems')
		);
	}

	static is_object_pattern_type(
		maybe:
			| typed_string_inner_object_type
			| typed_string_inner_object_pattern_type
			| typed_string_inner_array_type
			| typed_string_inner_array_prefixItems_type,
	): maybe is typed_string_inner_object_pattern_type {
		return object_has_property(maybe, 'minProperties');
	}

	static is_object_type(
		maybe:
			| typed_string_inner_object_type
			| typed_string_inner_object_pattern_type
			| typed_string_inner_array_type
			| typed_string_inner_array_prefixItems_type,
	): maybe is typed_string_inner_object_type {
		return object_has_property(maybe, 'properties');
	}

	static is_prefixItems_type(
		maybe:
			| typed_string_inner_object_type
			| typed_string_inner_object_pattern_type
			| typed_string_inner_array_type
			| typed_string_inner_array_prefixItems_type,
	): maybe is typed_string_inner_array_prefixItems_type {
		return object_has_property(maybe, 'prefixItems');
	}
}
