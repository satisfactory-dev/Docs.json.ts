import type {
	UnrealEngineString, StringStartsWith
} from '../../utils/validators.js';

import type {
	boolean__type
} from '../../common/scalar.js';

import type {
	mPlatformDockingStatus__type,
	empty_object__type,
} from '../../common/unassigned.js';

import type {
	common_base__FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

export type common_base__FGBuildableTrainPlatform__base__type
	= common_base__FGBuildable__consumes_power_base__type & {
		mPlatformConnections: [
			UnrealEngineString<
				'/Script/FactoryGame.FGTrainPlatformConnection',
				StringStartsWith<'/Game/FactoryGame/Buildable/Factory/Train/Station/'>
			>,
			...UnrealEngineString<
				'/Script/FactoryGame.FGTrainPlatformConnection',
				StringStartsWith<'/Game/FactoryGame/Buildable/Factory/Train/Station/'>
			>[],
		],
		mIsOrientationReversed: boolean__type,
		mPlatformDockingStatus: mPlatformDockingStatus__type,
		mSavedDockingStatus: mPlatformDockingStatus__type,
		mDockingSequenceTimerHandle: empty_object__type,
		mIdleUpdateTimerHandle: empty_object__type,
		mDockWasCancelled: boolean__type,
	};
