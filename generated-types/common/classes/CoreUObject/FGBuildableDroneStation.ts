import {common_base__FGBuildable__docking_station_base__type} from './FGBuildable';

import {
	boolean__type,
	boolean_extended__type,
	decimal_string__type,
	integer_string__type,
} from '../../common/scalar';

import {xyz__type} from '../../common/unassigned';

export type common_base__FGBuildableDroneStation__type =
	common_base__FGBuildable__docking_station_base__type & {
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
		mMapText: '';
	};
