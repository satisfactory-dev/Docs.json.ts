import {FGBuildable__docking_station_base__type} from './FGBuildable.js';

import {common_base__FGBuildableDockingStation__type} from '../../../common/classes/CoreUObject/FGBuildableDockingStation.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGBuildableDockingStation__type =
	common_base__FGBuildableDockingStation__type &
		FGBuildable__docking_station_base__type;

export type FGBuildableDockingStation__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableDockingStation__type];
	};
