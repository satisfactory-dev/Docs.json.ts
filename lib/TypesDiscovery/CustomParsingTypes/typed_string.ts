import {
	CandidatesDiscovery,
} from '../CandidatesDiscovery';
import {
	object_has_non_empty_array_property,
	object_has_property,
	object_has_property_that_equals,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
	local_ref,
} from '../../StringStartsWith';
import {
	typed_string_parent_type,
} from '../../CustomParsingTypes/TypedString';
import {
	SchemaObject,
} from 'ajv/dist/2020';

export class typed_string extends CandidatesDiscovery
{
	discovery_candidates(
		current: SchemaObject,
		discovered_types: Set<string>,
	): [unknown, ...unknown[]] | undefined {
		if (
			object_has_property(
				current,
				'$defs',
				value_is_non_array_object
			)
		) {
			for (const entry of Object.entries(current.$defs)) {
				const [property, value] = entry;

				if (this.is_typed_string(value)) {
					discovered_types.add(local_ref(property));
				}
			}
		}

		return undefined;
	}

	private is_typed_string(
		maybe:unknown
	) : maybe is typed_string_parent_type {
		return (
			value_is_non_array_object(maybe)
			&& 3 === Object.keys(maybe).length
			&& object_has_property_that_equals(maybe, 'type', 'string')
			&& object_has_property_that_equals(maybe, 'minLength', 1)
			&& object_has_property(
				maybe,
				'typed_string',
				value_is_non_array_object
			)
			&& (
				(
					2 === Object.keys(maybe.typed_string).length
					&& object_has_non_empty_array_property(
						maybe.typed_string,
						'required',
						is_string
					)
					&& object_has_property(
						maybe.typed_string,
						'properties',
						value_is_non_array_object
					)
				)
				|| (
					(
						(
							4 === Object.keys(maybe.typed_string).length
							&& object_has_property(
								maybe.typed_string,
								'maxItems',
								(e): e is number => 'number' === typeof e,
							)
						)
						|| (
							3 === Object.keys(
								maybe.typed_string
							).length
							&& !object_has_property(
								maybe.typed_string,
								'maxItems',
							)
						)
					)
					&& object_has_property(
						maybe.typed_string,
						'minItems',
						(e): e is number => 'number' === typeof e,
					)
					&& object_has_property_that_equals(
						maybe.typed_string,
						'items',
						false
					)
					&& object_has_non_empty_array_property(
						maybe.typed_string,
						'prefixItems',
						value_is_non_array_object
					)
				)
			)
		);
	}
}
