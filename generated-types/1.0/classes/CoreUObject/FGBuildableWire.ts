import {decimal_string__type} from '../../common/scalar';

import {
	None__type,
	xyz__type,
	NativeClass__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

export type FGBuildableWire__type = FGBuildable__base__type & {
	mMaxLength: decimal_string__type;
	mMaxPowerTowerLength: decimal_string__type;
	mLengthPerCost: decimal_string__type;
	mConnections: None__type;
	mConnectionLocations: xyz__type;
	mWireInstances: '';
	mCachedLength: decimal_string__type;
};

export type FGBuildableWire__NativeClass = NativeClass__type & {
	Classes: [FGBuildableWire__type, FGBuildableWire__type];
};
