import {FGBuildableWallLightweight__type} from './FGBuildableWallLightweight';

import {FGBuildable__base__type} from './FGBuildable';

import {
	common_base__FGBuildableWall__base__type,
	common_base__FGBuildableWall__base__rectangle__type,
} from '../../../common/classes/CoreUObject/FGBuildableWall';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableWall__base__type =
	common_base__FGBuildableWall__base__type &
		FGBuildable__base__type;

export type FGBuildableWall__base__rectangle__type =
	common_base__FGBuildableWall__base__rectangle__type &
		FGBuildableWall__base__type;

export type FGBuildableWall__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableWallLightweight__type,
		...FGBuildableWallLightweight__type[],
	];
};
