import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {common_base__FGBuildableGenerator__base__type} from '../../../common/classes/CoreUObject/FGBuildableGenerator';

export type FGBuildableGenerator__base__type =
	FGBuildableGenerator__base__merged__type;

export type FGBuildableGenerator__base__merged__type =
	common_base__FGBuildableGenerator__base__type &
		FGBuildable__consumes_power_base__type;
