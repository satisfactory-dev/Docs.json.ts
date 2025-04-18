import {
	mElevatorState__type,
	v1_0_base__FGBuildable__consumes_power_base__type,
} from '../../common/unassigned';

import {FGBuildable__base__type} from './FGBuildable';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	decimal_string__type,
	integer_string__type,
} from '../../../common/common/scalar';

export type FGBuildableElevator__type =
	v1_0_base__FGBuildable__consumes_power_base__type &
		FGBuildable__base__type &
		FGBuildableElevator__properties__type;

export type FGBuildableElevator__properties__type = {
	mStopAtFloorTimerHandle: empty_object__type;
	mPowerOutPauseTimerHandle: empty_object__type;
	mSpeed: decimal_string__type;
	mHeight: decimal_string__type;
	mLockedMovementDirection: 'EED_Up';
	mFloorStopInfos: '';
	mQueuedStops: '';
	mQueuedStopIndexes: '';
	mCharactersInElevator: '';
	mHeightOfCabin: decimal_string__type;
	mSongID: integer_string__type;
	mDurationToOpenDoors: decimal_string__type;
	mDurationToWaitAtStop: decimal_string__type;
	mDurationToCloseDoors: decimal_string__type;
	mDurationPauseBeforeMove: decimal_string__type;
	mDurationPausePowerOutage: decimal_string__type;
	mDurationPauseBeforeDoorOpen: decimal_string__type;
	mElevatorState: mElevatorState__type;
};

export type FGBuildableElevator__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableElevator__type, ...FGBuildableElevator__type[]];
	};
