import {
	empty_object__type,
	common_base__weaponState__type,
	UnrealEngineString__array__type,
} from '../../common/unassigned';

import {
	boolean__type,
	decimal_string__type,
	integer_string__type,
} from '../../common/scalar';

import {common_base__FGEquipment__base__type} from './FGEquipment';

export type common_base__FGWeapon__base__type =
	common_base__FGEquipment__base__type & {
		mShowCycleAmmoRadialMenuTimer: empty_object__type;
		mOnWeaponStateChanged: empty_object__type;
		mWeaponState: common_base__weaponState__type;
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

export type common_base__FGWeapon__gun_base__type =
	common_base__FGWeapon__base__type;

export type common_base__FGWeapon__rebar_gun__type =
	common_base__FGWeapon__gun_base__type & {
		ClassName: 'Equip_RebarGun_Projectile_C';
	};

export type common_base__FGWeapon__rifle__type =
	common_base__FGWeapon__gun_base__type & {
		ClassName?: 'Equip_Rifle_C';
		Fire: empty_object__type;
		mHasReloadedOnce: boolean__type;
	};
