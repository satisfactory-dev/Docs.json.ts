import {FGBuildableWall__base__type} from './FGBuildableWall';

import {common_base__FGBuildableWall__base__rectangle__type} from '../../../common/classes/CoreUObject/FGBuildableWall';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableWallLightweight__type =
	common_base__FGBuildableWall__base__rectangle__type &
		FGBuildableWall__base__type;

export type FGBuildableWallLightweight__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableWallLightweight__type,
			...FGBuildableWallLightweight__type[],
		];
	};
