import type {
	v1_0_base__FGBuildableSnowCannon__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableSnowCannon__type
	= v1_0_base__FGBuildableSnowCannon__type & FGBuildable__base__type;

export type FGBuildableSnowCannon__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableSnowCannon__type],
	};
