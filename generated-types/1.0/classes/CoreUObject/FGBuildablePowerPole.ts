import {FGBuildable__base__type} from './FGBuildable';

import {
	decimal_string__type,
	boolean__type,
} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildablePowerPole__type = FGBuildable__base__type & {
	mPowerConnections: '';
	mPowerPoleType: 'PPT_POLE' | 'PPT_WALL' | 'PPT_TOWER' | 'PPT_WALL_DOUBLE';
	mPowerTowerWireMaxLength: decimal_string__type;
	mHasPower: boolean__type;
};

export type FGBuildablePowerPole__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePowerPole__type, ...FGBuildablePowerPole__type[]];
	};
