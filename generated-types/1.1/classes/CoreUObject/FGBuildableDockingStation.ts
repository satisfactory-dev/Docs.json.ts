import type {
	v1_0_base__FGBuildableDockingStation__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableDockingStation__type
	= v1_0_base__FGBuildableDockingStation__type & FGBuildable__base__type;

export type FGBuildableDockingStation__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableDockingStation__type],
	};
