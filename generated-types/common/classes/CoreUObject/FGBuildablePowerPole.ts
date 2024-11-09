import {decimal_string__type, boolean__type} from '../../common/scalar';

import {common_base__FGBuildable__base__type} from './FGBuildable';

export type common_base__FGBuildablePowerPole__type =
	common_base__FGBuildable__base__type & {
		mPowerConnections: '';
		mPowerPoleType: 'PPT_POLE' | 'PPT_WALL' | 'PPT_TOWER' | 'PPT_WALL_DOUBLE';
		mPowerTowerWireMaxLength: decimal_string__type;
		mHasPower: boolean__type;
	};
