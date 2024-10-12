import {empty_object__type} from '../../common/unassigned';

import {boolean__type, decimal_string__type} from '../../common/scalar';

import {FGBuildable__consumes_power_base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGPipeHyperStart__type = FGBuildable__consumes_power_base__type & {
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

export type FGPipeHyperStart__NativeClass = NativeClass__type & {
	Classes: [FGPipeHyperStart__type];
};
