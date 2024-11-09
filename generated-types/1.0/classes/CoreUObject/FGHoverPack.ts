import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FilterMontageTag__type} from '../../common/unassigned';

import {FGEquipment__base__type} from './FGEquipment';

import {
	boolean__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGHoverPack__type} from '../../../common/classes/CoreUObject/FGHoverPack';

export type FGHoverPack__type = FGHoverPack__merged__type & {
	mCurrentPlayerVelocity_SFX: decimal_string__type;
	mCurrentMouseDelta_SFX: decimal_string__type;
	mLowBatteryWarningActive_SFX: boolean__type;
	mPropellerVFX: '';
	mDisplayRangeWarning: boolean__type;
	mEquipMontage?: {
		Montages: [
			{
				Filter?: boolean__type;
				FilterMontageTag?: FilterMontageTag__type;
				Exclusive?: boolean__type;
				AudioEvent: FGHoverPack__AudioEvent__type;
			},
			{
				Filter?: boolean__type;
				FilterMontageTag?: FilterMontageTag__type;
				Exclusive?: boolean__type;
				AudioEvent: FGHoverPack__AudioEvent__type;
			},
		];
	};
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: {
		AudioEvent: FGHoverPack__AudioEvent__type;
	};
};

export type FGHoverPack__AudioEvent__type = UnrealEngineString<
	'/Script/AkAudio.AkAudioEvent',
	StringStartsWith<'/Game/WwiseAudio/Events/Equipment/HoverPack/'>
>;

export type FGHoverPack__merged__type =
	common_base__FGHoverPack__type & FGEquipment__base__type;

export type FGHoverPack__NativeClass = NativeClass__type & {
	Classes: [FGHoverPack__type];
};
