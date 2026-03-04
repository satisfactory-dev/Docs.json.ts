import type {
	decimal_string__type
} from '../../common/scalar.js';

import type {
	empty_object__type
} from '../../common/unassigned.js';

import type {
	common_base__FGBuildable__pipeline_accessory__base__type
} from './FGBuildable.js';

export type common_base__FGBuildablePipeReservoir__type
	= common_base__FGBuildable__pipeline_accessory__base__type & {
		mStackingHeight: decimal_string__type,
		mStorageCapacity: decimal_string__type,
		mIndicatorData: empty_object__type,
	};
