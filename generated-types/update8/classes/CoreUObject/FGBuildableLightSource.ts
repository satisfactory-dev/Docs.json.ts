import {FGBuildable__base__type} from './FGBuildable';

import {
	common_base__FGBuildableLightSource__base__type,
	common_base__FGBuildableLightSource__type,
} from '../../../common/classes/CoreUObject/FGBuildableLightSource';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableLightSource__type =
	FGBuildableLightSource__merged__type;

export type FGBuildableLightSource__base__type =
	FGBuildableLightSource__base__merged__type;

export type FGBuildableLightSource__base__merged__type =
	common_base__FGBuildableLightSource__base__type &
		FGBuildable__base__type;

export type FGBuildableLightSource__merged__type =
	common_base__FGBuildableLightSource__type &
		FGBuildableLightSource__base__type;

export type FGBuildableLightSource__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableLightSource__type, ...FGBuildableLightSource__type[]];
	};
