import {FGBuildableWall__base__type} from './FGBuildableWall.ts';

import {common_base__FGBuildableCornerWall__type} from '../../../common/classes/CoreUObject/FGBuildableCornerWall.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableCornerWall__type =
	common_base__FGBuildableCornerWall__type &
		FGBuildableWall__base__type;

export type FGBuildableCornerWall__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableCornerWall__type, ...FGBuildableCornerWall__type[]];
	};
