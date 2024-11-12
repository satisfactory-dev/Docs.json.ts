import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGBuildableResourceSink__type} from '../../../common/classes/CoreUObject/FGBuildableResourceSink';

export type FGBuildableResourceSink__type =
	FGBuildableResourceSink__merged__type & {
		mCouponInventoryHandler: empty_object__type;
	};

export type FGBuildableResourceSink__merged__type =
	common_base__FGBuildableResourceSink__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableResourceSink__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableResourceSink__type];
	};
