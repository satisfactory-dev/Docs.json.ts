import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {boolean__type} from '../../common/scalar';

import {
	mPlatformDockingStatus__type,
	empty_object__type,
} from '../../common/unassigned';

import {common_base__FGBuildable__consumes_power_base__type} from './FGBuildable';

export type common_base__FGBuildableTrainPlatform__base__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mPlatformConnections: [
			UnrealEngineString<
				'/Script/FactoryGame.FGTrainPlatformConnection',
				StringStartsWith<'/Game/FactoryGame/Buildable/Factory/Train/Station/'>
			>,
			...UnrealEngineString<
				'/Script/FactoryGame.FGTrainPlatformConnection',
				StringStartsWith<'/Game/FactoryGame/Buildable/Factory/Train/Station/'>
			>[],
		];
		mIsOrientationReversed: boolean__type;
		mPlatformDockingStatus: mPlatformDockingStatus__type;
		mSavedDockingStatus: mPlatformDockingStatus__type;
		mDockingSequenceTimerHandle: empty_object__type;
		mIdleUpdateTimerHandle: empty_object__type;
		mDockWasCancelled: boolean__type;
	};
