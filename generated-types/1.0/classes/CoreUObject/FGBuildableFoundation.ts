import {FGBuildable__base__type} from './FGBuildable';

import {
	common_base__FGBuildableFoundation__type,
	common_base__FGBuildableFoundation__base__type,
} from '../../../common/classes/CoreUObject/FGBuildableFoundation';

export type FGBuildableFoundation__type =
	common_base__FGBuildableFoundation__type &
		FGBuildableFoundation__base__type;

export type FGBuildableFoundation__base__type =
	FGBuildableFoundation__base__merged__type;

export type FGBuildableFoundation__base__merged__type =
	common_base__FGBuildableFoundation__base__type &
		FGBuildable__base__type;
