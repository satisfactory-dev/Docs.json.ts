import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {common_base__FGBuildableRadarTower__type} from '../../../common/classes/CoreUObject/FGBuildableRadarTower';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableRadarTower__type =
	common_base__FGBuildableRadarTower__type &
		FGBuildable__consumes_power_base__type;

export type FGBuildableRadarTower__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableRadarTower__type];
	};
