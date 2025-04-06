import {
	common_base__FGWeapon__base__pre_1_1__type,
	empty_object__type,
} from '../../common/unassigned';

import {boolean__type} from '../../common/scalar';

export type common_base__FGWeapon__base__type =
	common_base__FGWeapon__base__pre_1_1__type & {
		mShowCycleAmmoRadialMenuTimer: empty_object__type;
	};

export type common_base__FGWeapon__gun_base__type =
	common_base__FGWeapon__base__type;

export type common_base__FGWeapon__rebar_gun__type =
	common_base__FGWeapon__gun_base__type &
		common_base__FGWeapon__rebar_gun__properties__type;

export type common_base__FGWeapon__rebar_gun__properties__type = {
	ClassName: 'Equip_RebarGun_Projectile_C';
};

export type common_base__FGWeapon__rifle__type =
	common_base__FGWeapon__gun_base__type &
		common_base__FGWeapon__rifle__properties__type;

export type common_base__FGWeapon__rifle__properties__type = {
	ClassName?: 'Equip_Rifle_C';
	Fire: empty_object__type;
	mHasReloadedOnce: boolean__type;
};
