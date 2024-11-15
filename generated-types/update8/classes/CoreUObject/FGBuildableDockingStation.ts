import {FGBuildable__docking_station_base__type} from './FGBuildable';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGBuildableDockingStation__type} from '../../../common/classes/CoreUObject/FGBuildableDockingStation';

export type FGBuildableDockingStation__type =
	FGBuildableDockingStation__merged__type & {
		mFuelInventoryHandlerData: empty_object__type;
		mInventoryHandlerData: empty_object__type;
	};

export type FGBuildableDockingStation__merged__type =
	common_base__FGBuildableDockingStation__type &
		FGBuildable__docking_station_base__type;

export type FGBuildableDockingStation__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableDockingStation__type];
	};
