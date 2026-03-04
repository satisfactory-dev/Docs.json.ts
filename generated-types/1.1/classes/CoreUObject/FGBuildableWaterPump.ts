import type {
	v1_0_base__FGBuildableWaterPump__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableWaterPump__type
	= v1_0_base__FGBuildableWaterPump__type & FGBuildable__base__type;

export type FGBuildableWaterPump__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableWaterPump__type],
	};
