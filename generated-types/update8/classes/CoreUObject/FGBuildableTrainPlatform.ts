import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {boolean__type} from '../../../common/common/scalar';

import {
	mPlatformDockingStatus__type,
	empty_object__type,
} from '../../../common/common/unassigned';

export type FGBuildableTrainPlatform__base__type =
	FGBuildable__consumes_power_base__type & {
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
