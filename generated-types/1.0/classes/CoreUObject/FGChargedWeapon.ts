import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {
	Montage_1P__type,
	Montage_3P__type,
	FilterMontageTag__type,
	FilterMontageTag__charged__type,
	CameraAnim__type,
	empty_object__type,
} from '../../common/unassigned';

import {
	boolean__type,
	decimal_string__type,
	integer_string__type,
} from '../../common/scalar';

import {FGWeapon__base__type} from './FGWeapon';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGChargedWeapon__type = FGWeapon__base__type & {
	AmmoTypeToAkEvent: [
		[
			(
				| UnrealEngineString<
						'/Script/Engine.BlueprintGeneratedClass',
						StringStartsWith<'/Game/FactoryGame/'>
				>
				| UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/'>
				>
			),
			(
				| UnrealEngineString<
						'/Script/Engine.BlueprintGeneratedClass',
						StringStartsWith<'/Game/FactoryGame/'>
				>
				| UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/'>
				>
			),
		],
		...[
			(
				| UnrealEngineString<
						'/Script/Engine.BlueprintGeneratedClass',
						StringStartsWith<'/Game/FactoryGame/'>
				>
				| UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/'>
				>
			),
			(
				| UnrealEngineString<
						'/Script/Engine.BlueprintGeneratedClass',
						StringStartsWith<'/Game/FactoryGame/'>
				>
				| UnrealEngineString<
						'/Script/AkAudio.AkAudioEvent',
						StringStartsWith<'/Game/WwiseAudio/Events/'>
				>
			),
		][],
	];
	mRadialMenuShowUpTime: decimal_string__type;
	mPrimaryFireStartMontageList: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
				>;
			},
		];
	};
	mReloadMontageList: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
				>;
			},
		];
	};
	mSecondaryFireMontageList: {
		Montages: [
			{
				Filter: boolean__type;
				FilterMontageTag: FilterMontageTag__type;
				InvertFilter?: boolean__type;
				Exclusive: boolean__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
				>;
			},
			...{
				Filter: boolean__type;
				FilterMontageTag: FilterMontageTag__type;
				InvertFilter?: boolean__type;
				Exclusive: boolean__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
				>;
			}[],
		];
	};
	mPrimaryFireEndMontageList: {
		Montages: [
			{
				Filter: boolean__type;
				FilterMontageTag: FilterMontageTag__charged__type;
				Exclusive: boolean__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
				>;
				CameraAnim?: CameraAnim__type;
			},
			{
				Filter: boolean__type;
				FilterMontageTag: FilterMontageTag__charged__type;
				Exclusive: boolean__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
				>;
				CameraAnim?: CameraAnim__type;
			},
			{
				Filter: boolean__type;
				FilterMontageTag: FilterMontageTag__charged__type;
				Exclusive: boolean__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
				>;
				CameraAnim?: CameraAnim__type;
			},
		];
	};
	mEquipMontage?: {
		Montages: [
			{
				Filter: boolean__type;
				FilterMontageTag: FilterMontageTag__type;
				InvertFilter?: boolean__type;
				Exclusive: boolean__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
				>;
			},
			{
				Filter: boolean__type;
				FilterMontageTag: FilterMontageTag__type;
				InvertFilter?: boolean__type;
				Exclusive: boolean__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
				>;
			},
		];
	};
	mStingerMontage?: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/NobeliskDetonator/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Nobelisk/'>
				>;
			},
		];
	};
	mUnEquipMontage?: empty_object__type;
	mDispensedProjectiles: '';
	mMaxChargeTime: decimal_string__type;
	mReleaseCooldown: decimal_string__type;
	mMaxThrowForce: integer_string__type;
	mMinThrowForce: integer_string__type;
	mDelayBetweenSecondaryTriggers: decimal_string__type;
};

export type FGChargedWeapon__NativeClass = NativeClass__type & {
	Classes: [FGChargedWeapon__type];
};
