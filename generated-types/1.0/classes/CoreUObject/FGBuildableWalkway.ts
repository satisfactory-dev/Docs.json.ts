import {FGBuildableWalkwayLightweight__type} from './FGBuildableWalkwayLightweight.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {
	common_base__FGBuildableWalkway__type,
	common_base__FGBuildableWalkway__base__type,
} from '../../../common/classes/CoreUObject/FGBuildableWalkway.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableWalkway__type =
	common_base__FGBuildableWalkway__type &
		FGBuildableWalkway__base__type;

export type FGBuildableWalkway__base__type =
	common_base__FGBuildableWalkway__base__type &
		FGBuildable__base__type;

export type FGBuildableWalkway__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableWalkwayLightweight__type,
			...FGBuildableWalkwayLightweight__type[],
		];
	};
