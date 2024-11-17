import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {
	Montage_1P__type,
	Montage_3P__type,
	FilterMontageTag__type,
	FilterMontageTag__charged__type,
	CameraAnim__type,
} from '../../common/unassigned';

import {FGWeapon__base__type} from './FGWeapon';

import {
	boolean__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {common_base__FGChargedWeapon__type} from '../../../common/classes/CoreUObject/FGChargedWeapon';

export type FGChargedWeapon__type = FGChargedWeapon__merged__type & {
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
	mReleaseCooldown: decimal_string__type;
};

export type FGChargedWeapon__merged__type =
	common_base__FGChargedWeapon__type & FGWeapon__base__type;

export type FGChargedWeapon__NativeClass = NativeClass__type & {
	Classes: [FGChargedWeapon__type];
};
