import {decimal_string__type} from '../../common/scalar';

import {None__type, xyz__type} from '../../common/unassigned';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildableWire__type =
	common_base__FGBuildable__base__type & {
		mMaxLength: decimal_string__type;
		mMaxPowerTowerLength: decimal_string__type;
		mLengthPerCost: decimal_string__type;
		mConnections: None__type;
		mConnectionLocations: xyz__type;
		mWireInstances: '';
		mCachedLength: decimal_string__type;
	};
