import {
	CandidatesDiscovery,
} from '../CandidatesDiscovery';
import {
	is_non_empty_array,
	object_has_property,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';

export class properties extends CandidatesDiscovery
{
	discovery_candidates(
		current: unknown
	): [unknown, ...unknown[]] | undefined {
		if (
			object_has_property(
				current,
				'properties',
				value_is_non_array_object
			)
		) {
			const properties = Object.values(current.properties);

			if (is_non_empty_array(properties)) {
				return properties;
			}
		}

		return undefined;
	}
}
