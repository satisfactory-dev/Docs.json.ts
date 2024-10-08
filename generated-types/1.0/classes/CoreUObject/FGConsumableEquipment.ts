import {
	Montage_1P__type,
	Montage_3P__type,
	CameraAnim__type,
	empty_object__type,
	NativeClass__type,
} from '../../common/unassigned';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {decimal_string__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

export type FGConsumableEquipment__base__type = FGEquipment__base__type & {
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: empty_object__type;
};

export type FGConsumableEquipment__equipment__type =
	FGConsumableEquipment__base__type & {
		mEatMontage: {
			Montage_1P: Montage_1P__type;
			Montage_3P: Montage_3P__type;
			CameraAnim: CameraAnim__type;
		};
		mReEquipAfterEatMontage: {
			Montage_1P: Montage_1P__type;
		};
		mEquipMontage?: {
			Montages: [
				{
					Montage_1P: Montage_1P__type;
					Montage_3P: Montage_3P__type;
				},
			];
		};
	};

export type FGConsumableEquipment__medkit__type =
	FGConsumableEquipment__base__type & {
		mEquipMontage?: {
			Montages: [
				{
					Montage_1P: Montage_1P__type;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/'>
					>;
				},
			];
		};
		mMedkitUseMontages: {
			Montages: [
				{
					Montage_1P: Montage_1P__type;
					Montage_3P: Montage_3P__type;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/'>
					>;
					CameraAnim: CameraAnim__type;
				},
				{
					Montage_1P: Montage_1P__type;
					Montage_3P: Montage_3P__type;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/'>
					>;
					CameraAnim: CameraAnim__type;
				},
				{
					Montage_1P: Montage_1P__type;
					Montage_3P: Montage_3P__type;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/'>
					>;
					CameraAnim: CameraAnim__type;
				},
			];
		};
		mCurrentMedkitUseMontage: {
			Weight: decimal_string__type;
		};
	};

export type FGConsumableEquipment__NativeClass = NativeClass__type & {
	Classes: [
		FGConsumableEquipment__equipment__type,
		FGConsumableEquipment__medkit__type,
	];
};
