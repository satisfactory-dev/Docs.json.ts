import type {
	mBatteryStatus__type
} from '../../common/unassigned.js';

import type {
	decimal_string__type,
	integer_string__type,
} from '../../common/scalar.js';

import type {
	common_base__FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

export type common_base__FGBuildablePowerStorage__type
	= common_base__FGBuildable__consumes_power_base__type & {
		m_PreviousBatteryStatus: mBatteryStatus__type,
		mCurrentGameTimeSinceStateChange: decimal_string__type,
		mActivationEventID: integer_string__type,
		mBatteryStatus: mBatteryStatus__type,
		mPowerStore: decimal_string__type,
		mPowerStoreCapacity: decimal_string__type,
		mPowerInputCapacity: decimal_string__type,
		mIndicatorLevelMax: integer_string__type,
		mIndicatorLevel: integer_string__type,
	};
