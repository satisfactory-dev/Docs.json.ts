import {
	CandidatesDiscovery,
} from '../CandidatesDiscovery';
import {
	is_non_empty_array,
	object_has_property, object_only_has_that_property,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	is_string,
} from '../../StringStartsWith';

export class typed_object_string extends CandidatesDiscovery
{
	discovery_candidates(current: unknown): [unknown, ...unknown[]] | undefined
	{
		if (object_has_property(
			current,
			'typed_object_string',
			value_is_non_array_object
		)) {
			const properties = Object.values(
				current.typed_object_string
			).map(e => {
				if (
					value_is_non_array_object(e)
					&& Object.values(e).every(
						maybe => object_only_has_that_property(
							maybe,
							'$ref',
							is_string
						)
					)
				) {
					return Object.values(e);
				}

				return [e];
			}).flat();

			if (is_non_empty_array(properties)) {
				return properties;
			}
		}

		return undefined;
	}
}
