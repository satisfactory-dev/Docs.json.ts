import {boolean__type, boolean_extended__type} from '../../common/scalar';

import {FGBuildable__docking_station_base__type} from './FGBuildable';

import {
	decimal_string__type,
	integer_string__type,
} from '../../../common/common/scalar';

import {
	xyz__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableDroneStation__type =
	FGBuildable__docking_station_base__type & {
		ClassName?: 'Build_DroneStation_C';
		mDisplayName?: 'Drone Port';
		mStoppedProducingAnimationSounds: boolean__type;
		mStoppedAkComponents: boolean_extended__type;
		mSocketStoppedAkComponents: '';
		m_DockingStates: 'DS_UNDOCKED';
		m_OffsetTime: decimal_string__type;
		mDroneDockingStartLocationLocal: xyz__type;
		mDroneDockingLocationLocal: xyz__type;
		mDroneDockingQueue: '';
		mStationHasDronesInQueue: boolean__type;
		mItemTransferringStage: 'ITS_NONE';
		mTransferProgress: decimal_string__type;
		mDroneQueueRadius: decimal_string__type;
		mDroneQueueSeparationRadius: decimal_string__type;
		mDroneQueueVerticalSeparation: decimal_string__type;
		mTripPowerCost: decimal_string__type;
		mTripPowerPerMeterCost: decimal_string__type;
		mTripInformationSampleCount: integer_string__type;
		mFuelStorageSizeX: integer_string__type;
		mFuelStorageSizeY: integer_string__type;
		mMapText: '';
	};

export type FGBuildableDroneStation__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableDroneStation__type];
	};
