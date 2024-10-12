import {
	decimal_string__type,
	boolean__type,
	integer_string__type,
} from '../../common/scalar';

import {
	Montage_1P__type,
	Montage_3P__type,
	CameraAnim__type,
	empty_object__type,
	weaponState__type,
} from '../../common/unassigned';

import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {FGEquipment__base__type} from './FGEquipment';

import {
	UnrealEngineString__array__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGWeapon__base__type = FGEquipment__base__type & {
	mShowCycleAmmoRadialMenuTimer: empty_object__type;
	mOnWeaponStateChanged: empty_object__type;
	mWeaponState: weaponState__type;
	mAutomaticallyReload: boolean__type;
	mAutoReloadDelay: decimal_string__type;
	mAutoReloadTimerHandle: empty_object__type;
	mCurrentAmmoCount: integer_string__type;
	mAllowedAmmoClasses: UnrealEngineString__array__type;
	mAttachMagazineToPlayer: boolean__type;
	mMuzzleSocketName: 'muzzleSocket' | 'MuzzleSocket' | 'None';
	mCurrentMagazineBoneName: 'CurrentMagazine' | 'hand_rSocket';
	mEjectMagazineBoneName: 'EjectMagazine' | 'hand_rSocket';
	mDispersionOnNoMagazine: decimal_string__type;
	mWeaponDamageMultiplier: decimal_string__type;
	mFiringBlocksDispersionReduction: boolean__type;
	mCurrentDispersion: decimal_string__type;
	mReloadTime: decimal_string__type;
	mAmmoSwitchUsedRadialMenu: boolean__type;
	mOnAmmoCyclingPressed: empty_object__type;
	mOnAmmoCyclingReleased: empty_object__type;
	mBlockSprintWhenFiring: boolean__type;
};

export type FGWeapon__gun_base__type = FGWeapon__base__type & {
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

export type FGWeapon__rebar_gun__type = FGWeapon__gun_base__type & {
	ClassName: 'Equip_RebarGun_Projectile_C';
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

export type FGWeapon__rifle__type = FGWeapon__gun_base__type & {
	ClassName?: 'Equip_Rifle_C';
	Fire: empty_object__type;
	mHasReloadedOnce: boolean__type;
	mReloadMontageList?: {
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
	mAmmoSwapMontageList?: {
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
	mFailedToFireMontageList?: empty_object__type;
	mEquipMontage?: {
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
	mStingerMontage?: {
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
	mUnEquipMontage?: empty_object__type;
};

export type FGWeapon__NativeClass = NativeClass__type & {
	Classes: [
		FGWeapon__rebar_gun__type | FGWeapon__rifle__type,
		...(FGWeapon__rebar_gun__type | FGWeapon__rifle__type)[],
	];
};
