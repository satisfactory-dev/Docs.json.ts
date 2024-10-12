import {boolean__type, decimal_string__type} from '../../common/scalar';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {empty_object__type} from '../../common/unassigned';

import {FGEquipment__base__type} from './FGEquipment';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGJumpingStilts__type = FGEquipment__base__type & {
	mSprintSpeedFactor: decimal_string__type;
	mJumpSpeedFactor: decimal_string__type;
	mEquipMontage?: {
		Montages: [FGJumpingStilts__Montage__type];
	};
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: FGJumpingStilts__Montage__type;
};

export type FGJumpingStilts__AudioEvent__type = UnrealEngineString<
	'/Script/AkAudio.AkAudioEvent',
	StringStartsWith<'/Game/WwiseAudio/Events/Equipment/BladeRunners/'>
>;

export type FGJumpingStilts__Montage__type = {
	AudioEvent: FGJumpingStilts__AudioEvent__type;
	bSeparate3PAudioEvent: boolean__type;
	AudioEvent3P: FGJumpingStilts__AudioEvent__type;
};

export type FGJumpingStilts__NativeClass = NativeClass__type & {
	Classes: [FGJumpingStilts__type];
};
