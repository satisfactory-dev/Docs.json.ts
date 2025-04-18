import {
	v1_0_base__FGBuildableRadarTower__type,
	has__mLastEditedBy__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableRadarTower__type =
	v1_0_base__FGBuildableRadarTower__type &
		FGBuildable__base__type &
		has__mLastEditedBy__type;

export type FGBuildableRadarTower__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableRadarTower__type];
	};
