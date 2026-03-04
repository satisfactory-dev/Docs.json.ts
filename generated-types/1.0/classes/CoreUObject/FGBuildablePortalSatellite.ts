import type {
	FGBuildablePortal__base__type
} from './FGBuildablePortal.js';

import type {
	boolean__type
} from '../../../common/common/scalar.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildablePortalSatellite__type
	= FGBuildablePortal__base__type & {
		ClassName?: 'Build_PortalSatellite_C',
		mPortalName?: 'Satellite Portal',
		['Lightning End Socket']: '',
		['Lightning Start Socket']: '',
		mWasHeatingUpLastTick: boolean__type,
	};

export type FGBuildablePortalSatellite__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildablePortalSatellite__type],
	};
