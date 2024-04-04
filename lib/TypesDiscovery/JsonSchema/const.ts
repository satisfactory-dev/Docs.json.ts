import {
	CandidatesDiscovery,
} from '../CandidatesDiscovery';
import {
	object_has_property,
	object_has_property_that_equals, value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	is_string, local_ref,
} from '../../StringStartsWith';
import {
	SchemaObject,
} from 'ajv/dist/2020';

export class ConstString extends CandidatesDiscovery
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

				if (this.is_const_string(value)) {
					discovered_types.add(local_ref(property));
				}
			}
		}

		return undefined;
	}

	private is_const_string(
		maybe:unknown
	): maybe is {type: 'string', const: string} {
		return (
			object_has_property_that_equals(
				maybe,
				'type',
				'string'
			)
			&& object_has_property(maybe, 'const', is_string)
			&& 2 === Object.keys(maybe).length
		);
	}
}
