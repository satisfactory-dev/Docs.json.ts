import {decimal_string__type} from '../../common/scalar';

import {empty_object__type, NativeClass__type} from '../../common/unassigned';

import {FGBuildable__pipeline_accessory__base__type} from './FGBuildable';

export type FGBuildablePipeReservoir__type =
	FGBuildable__pipeline_accessory__base__type & {
		mStackingHeight: decimal_string__type;
		mStorageCapacity: decimal_string__type;
		mIndicatorData: empty_object__type;
	};

export type FGBuildablePipeReservoir__NativeClass = NativeClass__type & {
	Classes: [FGBuildablePipeReservoir__type, FGBuildablePipeReservoir__type];
};
