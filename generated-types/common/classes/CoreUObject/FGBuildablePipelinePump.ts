import {common_base__FGBuildable__pipeline_flow_accessory__type} from './FGBuildable.ts';

import {boolean__type, decimal_string__type} from '../../common/scalar.ts';

export type common_base__FGBuildablePipelinePump__type =
	common_base__FGBuildable__pipeline_flow_accessory__type & {
		mIsPipePumpPlaying: boolean__type;
		mIsExceedingHeadLift: boolean__type;
		mCurrentAudioHeadLift: decimal_string__type;
	};

export type common_base__FGBuildablePipelinePump__valve__type =
	common_base__FGBuildable__pipeline_flow_accessory__type;
