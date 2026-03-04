import type {
	FGBuildableWall__base__type
} from './FGBuildableWall.js';

import type {
	common_base__FGBuildableCornerWall__type
} from '../../../common/classes/CoreUObject/FGBuildableCornerWall.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableCornerWall__type
	= common_base__FGBuildableCornerWall__type
		& FGBuildableWall__base__type;

export type FGBuildableCornerWall__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableCornerWall__type, ...FGBuildableCornerWall__type[]],
	};
