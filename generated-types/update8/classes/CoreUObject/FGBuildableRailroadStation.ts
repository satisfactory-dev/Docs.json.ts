import {FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type} from './FGBuildableTrainPlatformCargo.ts';

import {common_base__FGBuildableRailroadStation__type} from '../../../common/classes/CoreUObject/FGBuildableRailroadStation.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableRailroadStation__type =
	FGBuildableRailroadStation__merged__type;

export type FGBuildableRailroadStation__merged__type =
	common_base__FGBuildableRailroadStation__type &
		FGBuildableTrainPlatformCargo__FGBuildableRailroadStation__type;

export type FGBuildableRailroadStation__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableRailroadStation__type];
	};
