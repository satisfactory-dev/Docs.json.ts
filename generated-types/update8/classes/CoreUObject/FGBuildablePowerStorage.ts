import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {
	mBatteryStatus__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	decimal_string__type,
	integer_string__type,
} from '../../../common/common/scalar';

export type FGBuildablePowerStorage__type =
	FGBuildable__consumes_power_base__type & {
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

export type FGBuildablePowerStorage__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildablePowerStorage__type];
	};
