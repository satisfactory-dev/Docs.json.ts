import {empty_object__type, xy__type} from '../../common/unassigned.ts';

import {
	decimal_string__type,
	integer_string__type,
	boolean__type,
} from '../../common/scalar.ts';

import {common_base__FGBuildable__docking_station_base__type} from './FGBuildable.ts';

export type common_base__FGBuildableDockingStation__type =
	common_base__FGBuildable__docking_station_base__type & {
		VehicleFuelConsumptionRateChangedDelegate: empty_object__type;
		ItemTransferRateChangedDelegate: empty_object__type;
		MaximumStackTransferRateChangedDelegate: empty_object__type;
		mDockPosition: xy__type;
		mMinimumDockingTime: decimal_string__type;
		mFuelInventorySizeX: integer_string__type;
		mFuelInventorySizeY: integer_string__type;
		mFuelTransferSpeed: decimal_string__type;
		mForceSignificance: boolean__type;
		mVehicleFuelConsumptionRate: decimal_string__type;
		mItemTransferRate: decimal_string__type;
		mMaximumStackTransferRate: decimal_string__type;
		mDockingVehicleStatistics: empty_object__type;
	};
