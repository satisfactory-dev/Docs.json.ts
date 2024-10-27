import {
	Montage_1P__type,
	Montage_3P__type,
	CameraAnim__type,
} from '../../common/unassigned';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGEquipment__base__type} from './FGEquipment';

import {
	decimal_string__type,
	boolean__type,
} from '../../../common/common/scalar';

import {
	mDamageTypes__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGEquipmentStunSpear__type = FGEquipmentStunSpear__base__type & {
	mSecondSwingMontageList: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
				>;
				CameraAnim: CameraAnim__type;
			},
		];
	};
	mFirstSwingMontageList: {
		Montages: [
			{
				Weight?: decimal_string__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment?: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
				>;
				CameraAnim: CameraAnim__type;
			},
			...{
				Weight?: decimal_string__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment?: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
				>;
				CameraAnim: CameraAnim__type;
			}[],
		];
	};
	mEquipMontage: {
		Montages: [
			{
				Weight?: decimal_string__type;
				Filter?: boolean__type;
				Exclusive?: boolean__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
				>;
			},
			{
				Weight?: decimal_string__type;
				Filter?: boolean__type;
				Exclusive?: boolean__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
				>;
			},
			{
				Weight?: decimal_string__type;
				Filter?: boolean__type;
				Exclusive?: boolean__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
				>;
			},
		];
	};
	mStingerMontage: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/StunSpear/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
				>;
				CameraAnim: CameraAnim__type;
			},
		];
	};
	mUnEquipMontage: {
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockBaton/'>
		>;
	};
	mDamageTypes: mDamageTypes__type;
	mArmAnimation: 'AE_StunSpear';
};

export type FGEquipmentStunSpear__base__type = FGEquipment__base__type & {
	mDamageTypes: mDamageTypes__type;
	mSecondSwingMinDelay: decimal_string__type;
	mSecondSwingMaxDelay: decimal_string__type;
	mSecondSwingUseCoolDown: decimal_string__type;
	mAttackDistance: decimal_string__type;
	mAttackSweepRadius: decimal_string__type;
};

export type FGEquipmentStunSpear__xeno_zapper__type =
	FGEquipmentStunSpear__base__type & {
		mFirstSwingMontageList: {
			Montages: [
				{
					Montage_1P: Montage_1P__type;
					Montage_3P: Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					CameraAnim: CameraAnim__type;
				},
				...{
					Montage_1P: Montage_1P__type;
					Montage_3P: Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					CameraAnim: CameraAnim__type;
				}[],
			];
		};
		mSecondSwingMontageList: {
			Montages: [
				{
					Weight: decimal_string__type;
					Montage_1P: Montage_1P__type;
					Montage_3P: Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					CameraAnim: CameraAnim__type;
				},
				...{
					Weight: decimal_string__type;
					Montage_1P: Montage_1P__type;
					Montage_3P: Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					CameraAnim: CameraAnim__type;
				}[],
			];
		};
		mDamageTypes: mDamageTypes__type;
		mArmAnimation: 'AE_ShockShank';
		mEquipMontage: {
			Montages: [
				{
					Montage_1P: Montage_1P__type;
					Montage_3P: Montage_3P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
				},
			];
		};
		mStingerMontage: {
			Montages: [
				{
					Montage_1P: Montage_1P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
				},
				...{
					Montage_1P: Montage_1P__type;
					Montage_Equipment: UnrealEngineString<
						'/Script/Engine.AnimMontage',
						StringStartsWith<'/Game/FactoryGame/Equipment/ShockShank/Animation/'>
					>;
					AudioEvent: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
					>;
				}[],
			];
		};
		mUnEquipMontage: {
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Equipment/ShockShank/'>
			>;
		};
	};

export type FGEquipmentStunSpear__NativeClass =
	NativeClass__type & {
		Classes: [
			FGEquipmentStunSpear__xeno_zapper__type,
			FGEquipmentStunSpear__type,
			FGEquipmentStunSpear__type,
		];
	};
