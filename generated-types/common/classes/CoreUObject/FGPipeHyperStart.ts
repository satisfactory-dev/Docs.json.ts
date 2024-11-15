import {empty_object__type} from '../../common/unassigned';

import {boolean__type, decimal_string__type} from '../../common/scalar';

import {common_base__FGBuildable__consumes_power_base__type} from './FGBuildable';

export type common_base__FGPipeHyperStart__type =
	common_base__FGBuildable__consumes_power_base__type & {
		mWindDirectionFromTurbine: empty_object__type;
		['mIsWindSoundPlaying?']: boolean__type;
		mAudioTimerCounter: decimal_string__type;
		AudioCounterTimer: empty_object__type;
		IsEnginePlaying: boolean__type;
		mOpeningOffset: decimal_string__type;
		mInitialMinSpeedFactor: decimal_string__type;
		mLength: decimal_string__type;
		mCanStack: boolean__type;
		mStackHeight: decimal_string__type;
		mUseStaticHeight: boolean__type;
	};
