import type {
	v1_0_base__FGBuildableSpaceElevator__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableSpaceElevator__type
	= v1_0_base__FGBuildableSpaceElevator__type & FGBuildable__base__type;

export type FGBuildableSpaceElevator__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableSpaceElevator__type],
	};
