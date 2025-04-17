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
	empty_object__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	common_base__FGWeapon__base__type,
	common_base__FGWeapon__gun_base__type,
	common_base__FGWeapon__rebar_gun__type,
	common_base__FGWeapon__rifle__type,
} from '../../../common/classes/CoreUObject/FGWeapon';

export type FGWeapon__base__type = FGWeapon__base__merged__type;

export type FGWeapon__base__merged__type =
	common_base__FGWeapon__base__type & FGEquipment__base__type;

export type FGWeapon__gun_base__type =
	common_base__FGWeapon__gun_base__type &
		FGWeapon__base__type &
		FGWeapon__gun_base__properties__type;

export type FGWeapon__gun_base__properties__type = {
	mFireMontage: {
		Montage_1P: Montage_1P__type;
		Montage_3P: Montage_3P__type;
		Montage_Equipment: UnrealEngineString<
			'/Script/Engine.AnimMontage',
			StringStartsWith<'/Game/FactoryGame/Equipment/'>
		>;
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/'>
		>;
		CameraAnim: CameraAnim__type;
	};
	mSupressDryFireMontage: boolean__type;
};

export type FGWeapon__rebar_gun__type =
	common_base__FGWeapon__rebar_gun__type &
		FGWeapon__gun_base__type &
		FGWeapon__rebar_gun__properties__type;

export type FGWeapon__rebar_gun__properties__type = {
	mReloadMontageList: {
		Montages: [
			{
				Weight?: decimal_string__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/RebarGun/Animation/'>
				>;
				CameraAnim: CameraAnim__type;
			},
			{
				Weight?: decimal_string__type;
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/RebarGun/Animation/'>
				>;
				CameraAnim: CameraAnim__type;
			},
		];
	};
	mAmmoSwapMontageList: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/RebarGun/Animation/'>
				>;
				CameraAnim: CameraAnim__type;
			},
		];
	};
	mFailedToFireMontageList: {
		Montages: [
			{
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/RebarGun/'>
				>;
			},
		];
	};
	mEquipMontage: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/RebarGun/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/RebarGun/'>
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
					StringStartsWith<'/Game/FactoryGame/Equipment/RebarGun/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/RebarGun/'>
				>;
			},
		];
	};
	mUnEquipMontage: {
		AudioEvent: UnrealEngineString<
			'/Script/AkAudio.AkAudioEvent',
			StringStartsWith<'/Game/WwiseAudio/Events/Equipment/RebarGun/'>
		>;
	};
};

export type FGWeapon__rifle__type =
	common_base__FGWeapon__rifle__type &
		FGWeapon__gun_base__type &
		FGWeapon__rifle__properties__type;

export type FGWeapon__rifle__properties__type = {
	mReloadMontageList: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/Rifle/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
			},
		];
	};
	mAmmoSwapMontageList: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/Rifle/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
			},
		];
	};
	mFailedToFireMontageList: empty_object__type;
	mEquipMontage: {
		Montages: [
			{
				Montage_1P: Montage_1P__type;
				Montage_3P: Montage_3P__type;
				Montage_Equipment: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					StringStartsWith<'/Game/FactoryGame/Equipment/Rifle/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
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
					StringStartsWith<'/Game/FactoryGame/Equipment/Rifle/Animation/'>
				>;
				AudioEvent: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
				bSeparate3PAudioEvent: boolean__type;
				AudioEvent3P: UnrealEngineString<
					'/Script/AkAudio.AkAudioEvent',
					StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Rifle/'>
				>;
			},
		];
	};
	mUnEquipMontage: empty_object__type;
};

export type FGWeapon__NativeClass = NativeClass__type & {
	Classes: [FGWeapon__rebar_gun__type, FGWeapon__rifle__type];
};
