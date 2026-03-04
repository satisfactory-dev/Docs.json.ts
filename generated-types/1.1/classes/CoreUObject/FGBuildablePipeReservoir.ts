import type {
	v1_0_base__FGBuildablePipeReservoir__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePipeReservoir__type
	= v1_0_base__FGBuildablePipeReservoir__type & FGBuildable__base__type;

export type FGBuildablePipeReservoir__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildablePipeReservoir__type, FGBuildablePipeReservoir__type],
	};
