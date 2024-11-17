import {FGEquipment__base__type} from './FGEquipment';

import {
	boolean__type,
	integer_string__type,
} from '../../../common/common/scalar';

import {
	common_base__FGWeapon__base__type,
	common_base__FGWeapon__gun_base__type,
	common_base__FGWeapon__rebar_gun__type,
	common_base__FGWeapon__rifle__type,
} from '../../../common/classes/CoreUObject/FGWeapon';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGWeapon__base__type = FGWeapon__base__merged__type;

export type FGWeapon__base__merged__type =
	common_base__FGWeapon__base__type & FGEquipment__base__type;

export type FGWeapon__gun_base__type = FGWeapon__gun_base__merged__type;

export type FGWeapon__gun_base__merged__type =
	common_base__FGWeapon__gun_base__type & FGWeapon__base__type;

export type FGWeapon__rebar_gun__type = FGWeapon__rebar_gun__merged__type & {
	mMuteDryFire: boolean__type;
	mRandomReloadAnim: integer_string__type;
	mRandomStingerAnim: integer_string__type;
	mRebarGunStingerID: integer_string__type;
	mRebarGunEquipID: integer_string__type;
};

export type FGWeapon__rebar_gun__merged__type =
	common_base__FGWeapon__rebar_gun__type &
		FGWeapon__gun_base__type;

export type FGWeapon__rifle__type = FGWeapon__rifle__merged__type;

export type FGWeapon__rifle__merged__type =
	common_base__FGWeapon__rifle__type & FGWeapon__gun_base__type;

export type FGWeapon__NativeClass = NativeClass__type & {
	Classes: [FGWeapon__rebar_gun__type, FGWeapon__rifle__type];
};
