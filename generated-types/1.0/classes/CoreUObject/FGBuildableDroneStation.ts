import {FGBuildableDroneStation__version_1__type} from '../../common/unassigned';

import {FGBuildable__docking_station_base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableDroneStation__type =
	FGBuildableDroneStation__version_1__type &
		FGBuildable__docking_station_base__type;

export type FGBuildableDroneStation__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableDroneStation__type];
	};
