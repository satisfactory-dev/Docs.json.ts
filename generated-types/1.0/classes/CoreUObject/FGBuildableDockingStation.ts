import {FGBuildable__docking_station_base__type} from './FGBuildable';

import {common_base__FGBuildableDockingStation__type} from '../../../common/classes/CoreUObject/FGBuildableDockingStation';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableDockingStation__type =
	common_base__FGBuildableDockingStation__type &
		FGBuildable__docking_station_base__type;

export type FGBuildableDockingStation__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableDockingStation__type];
	};
