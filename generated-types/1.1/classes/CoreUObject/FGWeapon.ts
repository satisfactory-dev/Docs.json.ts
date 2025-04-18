import {
	v1_0_base__FGEquipment__base__type,
	v1_0_base__FGWeapon__gun_base__properties__type,
	v1_0_base__FGWeapon__rebar_gun__properties__type,
	v1_0_base__FGWeapon__rifle__properties__type,
} from '../../common/unassigned';

import {decimal_string__type} from '../../../common/common/scalar';

import {
	common_base__FGWeapon__base__pre_1_1__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	common_base__FGWeapon__rebar_gun__properties__type,
	common_base__FGWeapon__rifle__properties__type,
} from '../../../common/classes/CoreUObject/FGWeapon';

export type FGWeapon__base__type = FGWeapon__base__merged__type;

export type FGWeapon__base__merged__type =
	common_base__FGWeapon__base__pre_1_1__type &
		v1_0_base__FGEquipment__base__type;

export type FGWeapon__gun_base__type = FGWeapon__gun_base__merged__type & {
	MagnetismStrength: decimal_string__type;
	MagnetismZeroInputStrength: decimal_string__type;
};

export type FGWeapon__gun_base__merged__type =
	common_base__FGWeapon__base__pre_1_1__type &
		FGWeapon__base__type &
		v1_0_base__FGWeapon__gun_base__properties__type;

export type FGWeapon__rebar_gun__type =
	common_base__FGWeapon__base__pre_1_1__type &
		common_base__FGWeapon__rebar_gun__properties__type &
		FGWeapon__gun_base__type &
		v1_0_base__FGWeapon__rebar_gun__properties__type;

export type FGWeapon__rifle__type =
	common_base__FGWeapon__base__pre_1_1__type &
		common_base__FGWeapon__rifle__properties__type &
		FGWeapon__gun_base__type &
		v1_0_base__FGWeapon__rifle__properties__type;

export type FGWeapon__NativeClass = NativeClass__type & {
	Classes: [FGWeapon__rebar_gun__type, FGWeapon__rifle__type];
};
