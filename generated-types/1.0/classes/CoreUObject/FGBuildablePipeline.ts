import {FGBuildable__base__type} from './FGBuildable.js';

import {decimal_string__type} from '../../../common/common/scalar.ts';

import {common_base__FGBuildablePipeline__type} from '../../../common/classes/CoreUObject/FGBuildablePipeline.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildablePipeline__type =
	common_base__FGBuildablePipeline__type &
		FGBuildable__base__type &
		FGBuildablePipeline__properties__type;

export type FGBuildablePipeline__properties__type = {
	mSoundSplineComponentEmitterInterval: decimal_string__type;
	mLastElapsedTime: decimal_string__type;
	mLastFlowForSoundUpdateThreshold: decimal_string__type;
	mUpdateSoundsTimerInterval: decimal_string__type;
};

export type FGBuildablePipeline__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePipeline__type, ...FGBuildablePipeline__type[]];
	};
