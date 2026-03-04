import {FGBuildableWallLightweight__type} from './FGBuildableWallLightweight.js';

import {FGBuildable__base__type} from './FGBuildable.js';

import {common_base__FGBuildableWall__base__type} from '../../../common/classes/CoreUObject/FGBuildableWall.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableWall__base__type =
	common_base__FGBuildableWall__base__type &
		FGBuildable__base__type;

export type FGBuildableWall__NativeClass = NativeClass__type & {
	Classes: [
		FGBuildableWallLightweight__type,
		...FGBuildableWallLightweight__type[],
	];
};
