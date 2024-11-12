import {boolean__type, decimal_string__type} from '../../common/scalar';

import {common_base__FGBuildable__consumes_power_base__type} from './FGBuildable';

export type common_base__FGBuildableResourceSink__type =
	common_base__FGBuildable__consumes_power_base__type & {
		IsAnimationProducing: boolean__type;
		EnableTickGrinder: boolean__type;
		EnableTickEngine: boolean__type;
		mGrinderInterpDuration: decimal_string__type;
		mEngineInterpDuration: decimal_string__type;
		mProcessingTime: decimal_string__type;
		mProducingTimer: decimal_string__type;
	};
