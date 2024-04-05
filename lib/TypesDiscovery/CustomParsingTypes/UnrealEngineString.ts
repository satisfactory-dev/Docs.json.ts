import {
	CandidatesDiscovery,
} from '../CandidatesDiscovery';
import {
	SchemaObject,
} from 'ajv/dist/2020';
import {
	object_has_property,
	value_is_non_array_object,
} from '../../CustomParsingTypes/CustomPairingTypes';
import {
	local_ref,
} from '../../StringStartsWith';
import {
	is_UnrealEngineString_parent,
} from '../../CustomParsingTypes/UnrealEngineString';

export class UnrealEngineString extends CandidatesDiscovery
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

				if (is_UnrealEngineString_parent(value)) {
					discovered_types.add(local_ref(property));
				}
			}
		}

		return undefined;
	}
}
