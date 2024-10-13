import {xy__type} from '../../common/unassigned';

import {boolean__type} from '../../common/scalar';

import {FGBuildable__docking_station_base__type} from './FGBuildable';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	decimal_string__type,
	integer_string__type,
} from '../../../common/common/scalar';

export type FGBuildableDockingStation__type =
	FGBuildable__docking_station_base__type & {
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

export type FGBuildableDockingStation__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableDockingStation__type];
	};
