import {FGAmmoTypeProjectile__base__type} from './FGAmmoTypeProjectile.js';

import {
	common_base__FGAmmoTypeInstantHit__base__type,
	common_base__FGAmmoTypeInstantHit__chaos__type,
	common_base__FGAmmoTypeInstantHit__standard__type,
} from '../../../common/classes/CoreUObject/FGAmmoTypeInstantHit.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGAmmoTypeInstantHit__base__type =
	common_base__FGAmmoTypeInstantHit__base__type &
		FGAmmoTypeProjectile__base__type;

export type FGAmmoTypeInstantHit__chaos__type =
	common_base__FGAmmoTypeInstantHit__chaos__type &
		FGAmmoTypeInstantHit__base__type;

export type FGAmmoTypeInstantHit__standard__type =
	common_base__FGAmmoTypeInstantHit__standard__type &
		FGAmmoTypeInstantHit__base__type;

export type FGAmmoTypeInstantHit__NativeClass =
	NativeClass__type & {
		Classes: [
			FGAmmoTypeInstantHit__chaos__type | FGAmmoTypeInstantHit__standard__type,
			FGAmmoTypeInstantHit__chaos__type | FGAmmoTypeInstantHit__standard__type,
		];
	};
