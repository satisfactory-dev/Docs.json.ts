import type {
	v1_0_base__FGBuildableRailroadStation__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableRailroadStation__type
	= FGBuildableRailroadStation__merged__type & {
		mStationName: '',
	};

export type FGBuildableRailroadStation__merged__type
	= v1_0_base__FGBuildableRailroadStation__type & FGBuildable__base__type;

export type FGBuildableRailroadStation__NativeClass
	= NativeClass__type & {
		Classes: [
			FGBuildableRailroadStation__type,
			...FGBuildableRailroadStation__type[],
		],
	};
