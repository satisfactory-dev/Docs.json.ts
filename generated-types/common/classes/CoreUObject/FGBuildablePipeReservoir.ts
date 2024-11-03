import {decimal_string__type} from '../../common/scalar';

import {empty_object__type} from '../../common/unassigned';

import {common_base__FGBuildable__pipeline_accessory__base__type} from './FGBuildable';

export type common_base__FGBuildablePipeReservoir__type =
	common_base__FGBuildable__pipeline_accessory__base__type & {
		mStackingHeight: decimal_string__type;
		mStorageCapacity: decimal_string__type;
		mIndicatorData: empty_object__type;
	};
