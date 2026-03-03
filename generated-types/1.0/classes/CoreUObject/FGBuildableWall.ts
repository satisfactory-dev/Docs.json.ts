import {FGBuildableWallLightweight__type} from './FGBuildableWallLightweight.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {common_base__FGBuildableWall__base__type} from '../../../common/classes/CoreUObject/FGBuildableWall.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableWall__base__type =
	common_base__FGBuildableWall__base__type &
		FGBuildable__base__type;

export type FGBuildableWall__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableWallLightweight__type,
		...FGBuildableWallLightweight__type[],
	];
};
