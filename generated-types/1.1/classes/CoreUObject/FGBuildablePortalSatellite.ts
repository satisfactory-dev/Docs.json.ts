import type {
	v1_0_base__FGBuildablePortalSatellite__type,
	has__mLastEditedBy__type,
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePortalSatellite__type
	= FGBuildablePortalSatellite__merged__type;

export type FGBuildablePortalSatellite__merged__type
	= v1_0_base__FGBuildablePortalSatellite__type
		& has__mLastEditedBy__type
		& FGBuildable__base__type;

export type FGBuildablePortalSatellite__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildablePortalSatellite__type],
	};
