import type {
	common_base__FGBuildable__pipeline_flow_accessory__type
} from './FGBuildable.js';

import type {
	boolean__type, decimal_string__type
} from '../../common/scalar.js';

export type common_base__FGBuildablePipelinePump__type
	= common_base__FGBuildable__pipeline_flow_accessory__type & {
		mIsPipePumpPlaying: boolean__type,
		mIsExceedingHeadLift: boolean__type,
		mCurrentAudioHeadLift: decimal_string__type,
	};

export type common_base__FGBuildablePipelinePump__valve__type
	= common_base__FGBuildable__pipeline_flow_accessory__type;
