import {mBatteryStatus__type} from '../../common/unassigned';

import {decimal_string__type, integer_string__type} from '../../common/scalar';

import {common_base__FGBuildable__consumes_power_base__type} from './FGBuildable';

export type common_base__FGBuildablePowerStorage__type =
	common_base__FGBuildable__consumes_power_base__type & {
		m_PreviousBatteryStatus: mBatteryStatus__type;
		mCurrentGameTimeSinceStateChange: decimal_string__type;
		mActivationEventID: integer_string__type;
		mBatteryStatus: mBatteryStatus__type;
		mPowerStore: decimal_string__type;
		mPowerStoreCapacity: decimal_string__type;
		mPowerInputCapacity: decimal_string__type;
		mIndicatorLevelMax: integer_string__type;
		mIndicatorLevel: integer_string__type;
	};
