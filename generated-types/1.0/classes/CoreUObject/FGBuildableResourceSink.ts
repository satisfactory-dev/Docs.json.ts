import type {
	FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

import type {
	boolean__type,
	decimal_string__type,
} from '../../../common/common/scalar.js';

import type {
	common_base__FGBuildableResourceSink__type
} from '../../../common/classes/CoreUObject/FGBuildableResourceSink.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableResourceSink__type
	= common_base__FGBuildableResourceSink__type
		& FGBuildable__consumes_power_base__type
		& FGBuildableResourceSink__properties__type;

export type FGBuildableResourceSink__properties__type = {
	IsAnimationProducing: boolean__type,
	EnableTickGrinder: boolean__type,
	EnableTickEngine: boolean__type,
	mGrinderInterpDuration: decimal_string__type,
	mEngineInterpDuration: decimal_string__type,
	mProcessingTime: decimal_string__type,
	mProducingTimer: decimal_string__type,
};

export type FGBuildableResourceSink__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableResourceSink__type],
	};
