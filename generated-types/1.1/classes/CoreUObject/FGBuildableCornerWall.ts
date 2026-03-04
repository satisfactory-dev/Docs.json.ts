import type {
	v1_0_base__FGBuildableCornerWall__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableCornerWall__type
	= v1_0_base__FGBuildableCornerWall__type & FGBuildable__base__type;

export type FGBuildableCornerWall__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableCornerWall__type, ...FGBuildableCornerWall__type[]],
	};
