import {FGBuildableDroneStation__update8__type} from '../../common/unassigned.js';

import {FGBuildable__docking_station_base__type} from './FGBuildable.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGBuildableDroneStation__type =
	FGBuildableDroneStation__update8__type &
		FGBuildable__docking_station_base__type;

export type FGBuildableDroneStation__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableDroneStation__type];
	};
