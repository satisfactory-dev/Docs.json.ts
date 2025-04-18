import {v1_0_base__FGBuildableRailroadStation__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableRailroadStation__type =
	FGBuildableRailroadStation__merged__type & {
		mStationName: '';
	};

export type FGBuildableRailroadStation__merged__type =
	v1_0_base__FGBuildableRailroadStation__type & FGBuildable__base__type;

export type FGBuildableRailroadStation__NativeClass =
	NativeClass__type & {
		Classes: [
			FGBuildableRailroadStation__type,
			...FGBuildableRailroadStation__type[],
		];
	};
