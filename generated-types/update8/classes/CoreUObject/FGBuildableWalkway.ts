import {FGBuildableWalkwayLightweight__type} from './FGBuildableWalkwayLightweight';

import {FGBuildable__base__type} from './FGBuildable';

import {
	common_base__FGBuildableWalkway__base__type,
	common_base__FGBuildableWalkway__type,
} from '../../../common/classes/CoreUObject/FGBuildableWalkway';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableWalkway__type = FGBuildableWalkway__merged__type;

export type FGBuildableWalkway__base__type =
	FGBuildableWalkway__base__merged__type;

export type FGBuildableWalkway__base__merged__type =
	common_base__FGBuildableWalkway__base__type &
		FGBuildable__base__type;

export type FGBuildableWalkway__merged__type =
	common_base__FGBuildableWalkway__type &
		FGBuildableWalkway__base__type;

export type FGBuildableWalkway__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableWalkwayLightweight__type,
			...FGBuildableWalkwayLightweight__type[],
		];
	};
