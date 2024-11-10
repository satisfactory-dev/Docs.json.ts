import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGEquipment__base__type} from './FGEquipment';

import {boolean__type} from '../../../common/common/scalar';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGJumpingStilts__type} from '../../../common/classes/CoreUObject/FGJumpingStilts';

export type FGJumpingStilts__type = FGJumpingStilts__merged__type & {
	mEquipMontage: {
		Montages: [FGJumpingStilts__Montage__type];
	};
	mStingerMontage: empty_object__type;
	mUnEquipMontage: FGJumpingStilts__Montage__type;
};

export type FGJumpingStilts__AudioEvent__type = UnrealEngineString<
	'/Script/AkAudio.AkAudioEvent',
	StringStartsWith<
		| '/Game/WwiseAudio/Events/Equipment/BladeRunners/'
		| '/Game/WwiseAudio/Events/Equipment/Equipment_Gear/BladeRunners/'
	>
>;

export type FGJumpingStilts__merged__type =
	common_base__FGJumpingStilts__type & FGEquipment__base__type;

export type FGJumpingStilts__Montage__type = {
	AudioEvent: FGJumpingStilts__AudioEvent__type;
	bSeparate3PAudioEvent: boolean__type;
	AudioEvent3P: FGJumpingStilts__AudioEvent__type;
};

export type FGJumpingStilts__NativeClass = NativeClass__type & {
	Classes: [FGJumpingStilts__type];
};
