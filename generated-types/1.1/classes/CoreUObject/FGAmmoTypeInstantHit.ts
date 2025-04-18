import {FGAmmoTypeProjectile__base__type} from './FGAmmoTypeProjectile';

import {
	common_base__FGAmmoTypeInstantHit__base__pre_1_1__type,
	common_base__FGAmmoTypeInstantHit__chaos__pre_1_1__type,
	common_base__FGAmmoTypeInstantHit__standard__pre_1_1__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGAmmoTypeInstantHit__base__type =
	common_base__FGAmmoTypeInstantHit__base__pre_1_1__type &
		FGAmmoTypeProjectile__base__type;

export type FGAmmoTypeInstantHit__chaos__type =
	common_base__FGAmmoTypeInstantHit__chaos__pre_1_1__type &
		FGAmmoTypeInstantHit__base__type;

export type FGAmmoTypeInstantHit__standard__type =
	common_base__FGAmmoTypeInstantHit__standard__pre_1_1__type &
		FGAmmoTypeInstantHit__base__type;

export type FGAmmoTypeInstantHit__NativeClass =
	NativeClass__type & {
		Classes: [
			FGAmmoTypeInstantHit__chaos__type,
			FGAmmoTypeInstantHit__standard__type,
		];
	};
