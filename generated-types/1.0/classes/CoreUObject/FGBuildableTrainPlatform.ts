import type {
	FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildableTrainPlatform__base__type
} from '../../../common/classes/CoreUObject/FGBuildableTrainPlatform.js';

export type FGBuildableTrainPlatform__base__type
	= FGBuildableTrainPlatform__base__merged__type;

export type FGBuildableTrainPlatform__base__merged__type
	= common_base__FGBuildableTrainPlatform__base__type
		& FGBuildable__consumes_power_base__type;
