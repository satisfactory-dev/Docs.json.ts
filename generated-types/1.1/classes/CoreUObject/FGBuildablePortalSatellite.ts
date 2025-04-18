import {
	v1_0_base__FGBuildablePortalSatellite__type,
	has__mLastEditedBy__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePortalSatellite__type =
	FGBuildablePortalSatellite__merged__type;

export type FGBuildablePortalSatellite__merged__type =
	v1_0_base__FGBuildablePortalSatellite__type &
		has__mLastEditedBy__type &
		FGBuildable__base__type;

export type FGBuildablePortalSatellite__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePortalSatellite__type];
	};
