import {None__type, xyz__type} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

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
