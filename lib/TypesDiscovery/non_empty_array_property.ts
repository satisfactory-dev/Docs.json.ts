import {
	PropertyDependentDiscovery,
} from './CandidatesDiscovery';
import {
	object_has_non_empty_array_property,
	value_is_non_array_object,
} from '@satisfactory-dev/predicates.ts';

export class non_empty_array_property extends PropertyDependentDiscovery
{
	discovery_candidates(
		current: unknown
	): [unknown, ...unknown[]] | undefined {
		if (object_has_non_empty_array_property(
			current,
			this.property,
			value_is_non_array_object
		)) {
			return current[this.property];
		}

		return undefined;
	}
}
