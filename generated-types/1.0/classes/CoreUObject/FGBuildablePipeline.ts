import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	decimal_string__type
} from '../../../common/common/scalar.js';

import type {
	common_base__FGBuildablePipeline__type
} from '../../../common/classes/CoreUObject/FGBuildablePipeline.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePipeline__type
	= common_base__FGBuildablePipeline__type
		& FGBuildable__base__type
		& FGBuildablePipeline__properties__type;

export type FGBuildablePipeline__properties__type = {
	mSoundSplineComponentEmitterInterval: decimal_string__type,
	mLastElapsedTime: decimal_string__type,
	mLastFlowForSoundUpdateThreshold: decimal_string__type,
	mUpdateSoundsTimerInterval: decimal_string__type,
};

export type FGBuildablePipeline__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildablePipeline__type, ...FGBuildablePipeline__type[]],
	};
