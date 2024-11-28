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
	common_base__FGEquipmentStunSpear__base__type,
	common_base__FGEquipmentStunSpear__type,
	common_base__FGEquipmentStunSpear__xeno_zapper__type,
} from '../../../common/classes/CoreUObject/FGEquipmentStunSpear';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGEquipmentStunSpear__type = FGEquipmentStunSpear__merged__type & {
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
};

export type FGEquipmentStunSpear__base__type =
	FGEquipmentStunSpear__base__merged__type & {
		mSecondSwingMinDelay: decimal_string__type;
		mSecondSwingMaxDelay: decimal_string__type;
		mSecondSwingUseCoolDown: decimal_string__type;
	};

export type FGEquipmentStunSpear__base__merged__type =
	common_base__FGEquipmentStunSpear__base__type &
		FGEquipment__base__type;

export type FGEquipmentStunSpear__candy_cane_basher__type =
	FGEquipmentStunSpear__merged__type & {
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
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
					CameraAnim: CameraAnim__type;
				},
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
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
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
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
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
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
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
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
					bSeparate3PAudioEvent: boolean__type;
					AudioEvent3P: UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
					CameraAnim: CameraAnim__type;
				},
			];
		};
		mUnEquipMontage: {
			AudioEvent: UnrealEngineString<
				'/Script/AkAudio.AkAudioEvent',
				StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
			>;
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
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
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
						StringStartsWith<'/Game/WwiseAudio/Events/Buildable/_Shared/Christmas/CandyCane/'>
					>;
					CameraAnim: CameraAnim__type;
				}[],
			];
		};
	};

export type FGEquipmentStunSpear__merged__type =
	common_base__FGEquipmentStunSpear__type &
		FGEquipmentStunSpear__base__type;

export type FGEquipmentStunSpear__xeno_zapper__type =
	FGEquipmentStunSpear__xeno_zapper__merged__type & {
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

export type FGEquipmentStunSpear__xeno_zapper__merged__type =
	common_base__FGEquipmentStunSpear__xeno_zapper__type &
		FGEquipmentStunSpear__base__type;

export type FGEquipmentStunSpear__NativeClass =
	NativeClass__type & {
		Classes: [
			FGEquipmentStunSpear__xeno_zapper__type,
			FGEquipmentStunSpear__type,
			FGEquipmentStunSpear__candy_cane_basher__type,
		];
	};
