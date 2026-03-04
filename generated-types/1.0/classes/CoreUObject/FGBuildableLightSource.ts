import {FGBuildable__base__type} from './FGBuildable.js';

import {
	common_base__FGBuildableLightSource__type,
	common_base__FGBuildableLightSource__base__type,
} from '../../../common/classes/CoreUObject/FGBuildableLightSource.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableLightSource__type =
	common_base__FGBuildableLightSource__type &
		FGBuildableLightSource__base__type;

export type FGBuildableLightSource__base__type =
	FGBuildableLightSource__base__merged__type;

export type FGBuildableLightSource__base__merged__type =
	common_base__FGBuildableLightSource__base__type &
		FGBuildable__base__type;

export type FGBuildableLightSource__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableLightSource__type, ...FGBuildableLightSource__type[]];
	};
