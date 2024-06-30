import {boolean__type, decimal_string__type} from '../../common/scalar';

import {empty_object__type, NativeClass__type} from '../../common/unassigned';

import {FGBuildable__consumes_power_base__type} from './FGBuildable';

export type FGBuildableResourceSink__type =
	FGBuildable__consumes_power_base__type & {
		IsAnimationProducing: boolean__type;
		EnableTickGrinder: boolean__type;
		EnableTickEngine: boolean__type;
		mGrinderInterpDuration: decimal_string__type;
		mEngineInterpDuration: decimal_string__type;
		mCouponInventoryHandler: empty_object__type;
		mProcessingTime: decimal_string__type;
		mProducingTimer: decimal_string__type;
	};

export type FGBuildableResourceSink__NativeClass = NativeClass__type & {
	Classes: [FGBuildableResourceSink__type];
};
