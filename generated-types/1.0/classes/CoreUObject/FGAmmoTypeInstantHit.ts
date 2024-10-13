import {FGAmmoTypeProjectile__base__type} from './FGAmmoTypeProjectile';

import {
	boolean__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {
	xyz__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

export type FGAmmoTypeInstantHit__base__type =
	FGAmmoTypeProjectile__base__type & {
		mPlayFireEffects: boolean__type;
	};

export type FGAmmoTypeInstantHit__chaos__type =
	FGAmmoTypeInstantHit__base__type & {
		ClassName: 'Desc_CartridgeChaos_C';
		Location: xyz__type;
		Trail_Velocity: decimal_string__type;
	};

export type FGAmmoTypeInstantHit__standard__type =
	FGAmmoTypeInstantHit__base__type & {
		ClassName: 'Desc_CartridgeStandard_C';
	};

export type FGAmmoTypeInstantHit__NativeClass =
	NativeClass__type & {
		Classes: [
			FGAmmoTypeInstantHit__chaos__type | FGAmmoTypeInstantHit__standard__type,
			FGAmmoTypeInstantHit__chaos__type | FGAmmoTypeInstantHit__standard__type,
		];
	};
