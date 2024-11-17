import {FGItemDescriptor__FGResourceDescriptor__type} from './FGItemDescriptor';

import {
	common_base__FGAmmoTypeProjectile__base__type,
	common_base__FGAmmoTypeProjectile__type,
} from '../../../common/classes/CoreUObject/FGAmmoTypeProjectile';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGAmmoTypeProjectile__type = FGAmmoTypeProjectile__merged__type;

export type FGAmmoTypeProjectile__base__type =
	FGAmmoTypeProjectile__base__merged__type;

export type FGAmmoTypeProjectile__base__merged__type =
	common_base__FGAmmoTypeProjectile__base__type &
		FGItemDescriptor__FGResourceDescriptor__type;

export type FGAmmoTypeProjectile__merged__type =
	common_base__FGAmmoTypeProjectile__type &
		FGAmmoTypeProjectile__base__type;

export type FGAmmoTypeProjectile__NativeClass =
	NativeClass__type & {
		Classes: [FGAmmoTypeProjectile__type, ...FGAmmoTypeProjectile__type[]];
	};
