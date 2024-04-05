import {
	CandidatesDiscovery,
} from '../CandidatesDiscovery';
import {
	SchemaObject,
} from 'ajv/dist/2020';
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

export class EnumString extends CandidatesDiscovery
{
	discovery_candidates(
		current: SchemaObject,
		discovered_types: Set<string>,
	): [unknown, ...unknown[]] | undefined {
		if (
			object_has_property(
				current,
				'definitions',
				value_is_non_array_object
			)
		) {
			for (const entry of Object.entries(current.definitions)) {
				const [property, value] = entry;

				if (this.is_enum_string(value)) {
					discovered_types.add(local_ref(property));
				}
			}
		}

		return undefined;
	}

	private is_enum_string(
		maybe:unknown
	): maybe is {type: 'string', enum: [string, ...string[]]} {
		return (
			object_has_property_that_equals(
				maybe,
				'type',
				'string'
			)
			&& object_has_non_empty_array_property(maybe, 'enum', is_string)
			&& 2 === Object.keys(maybe).length
		);
	}
}
