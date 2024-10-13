import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {
	integer_string__type,
	integer_string__signed__type,
	decimal_string__type,
	decimal_string__signed__type,
	boolean__type,
} from '../../../common/common/scalar';

import {
	empty_object__type,
	xyz__type,
	pitch_yaw_roll__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGBuildableJumppad__type =
	FGBuildable__consumes_power_base__type & {
		mPowerBankCapacity: decimal_string__type;
		mLaunchPowerCost: decimal_string__type;
		mChargeRateMultiplier: decimal_string__type;
		mCurrentPowerLevel: decimal_string__type;
		mLaunchVelocity: decimal_string__type;
		mLaunchAngle: decimal_string__signed__type;
		mPlayerChainJumpResetTime: decimal_string__type;
		mHasPowerForLaunch: boolean__type;
		ComponentsToLaunch: '';
		CharactersToLaunch: '';
		VehiclesToLaunch: '';
		mTrajectoryData: empty_object__type;
		mTrajectoryMeshScale: xyz__type;
		mTrajectoryMeshRotation: pitch_yaw_roll__type;
		mDestinationMeshHeightOffset: decimal_string__type;
		mTrajectorySplineMeshNumPrimitiveDataFloats: integer_string__type;
		mTrajectorySplineMeshSplineDataSettings: {
			StartTangentPrimitiveDataStartIndex: integer_string__type;
			EndPositionPrimitiveDataStartIndex: integer_string__type;
			EndTangentPrimitiveDataStartIndex: integer_string__type;
			InstanceScaleIndex: integer_string__signed__type;
		};
		mNumArrows: integer_string__type;
		mKillTimer: empty_object__type;
		mTrajectoryGravityMultiplier: decimal_string__type;
		mShowTrajectoryCounter: integer_string__type;
	};

export type FGBuildableJumppad__NativeClass =
	NativeClass__type & {
		Classes: [FGBuildableJumppad__type];
	};
