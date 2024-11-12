import {FGBuildable__base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {common_base__FGBuildablePipeline__type} from '../../../common/classes/CoreUObject/FGBuildablePipeline';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePipeline__type = FGBuildablePipeline__merged__type & {
	mSoundSplineComponentEmitterInterval: decimal_string__type;
	mLastElapsedTime: decimal_string__type;
	mLastFlowForSoundUpdateThreshold: decimal_string__type;
	mUpdateSoundsTimerInterval: decimal_string__type;
};

export type FGBuildablePipeline__merged__type =
	common_base__FGBuildablePipeline__type &
		FGBuildable__base__type;

export type FGBuildablePipeline__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeline__type, ...FGBuildablePipeline__type[]];
	};
