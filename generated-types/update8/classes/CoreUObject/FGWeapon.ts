import {weaponState__type} from '../../common/unassigned';

import {boolean__type} from '../../common/scalar';

import {FGEquipment__base__type} from './FGEquipment';

import {
	empty_object__type,
	UnrealEngineString__array__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	decimal_string__type,
	integer_string__type,
} from '../../../common/common/scalar';

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

export type FGWeapon__rebar_gun__type = FGWeapon__base__type & {
	ClassName?: 'Equip_RebarGun_Projectile_C';
	mMuteDryFire: boolean__type;
	mRandomReloadAnim: integer_string__type;
	mRandomStingerAnim: integer_string__type;
	mRebarGunStingerID: integer_string__type;
	mRebarGunEquipID: integer_string__type;
};

export type FGWeapon__rifle__type = FGWeapon__base__type & {
	ClassName?: 'Equip_Rifle_C';
	Fire: empty_object__type;
	mHasReloadedOnce: boolean__type;
};

export type FGWeapon__NativeClass = NativeClass__type & {
	Classes: [
		FGWeapon__rebar_gun__type | FGWeapon__rifle__type,
		...(FGWeapon__rebar_gun__type | FGWeapon__rifle__type)[],
	];
};
