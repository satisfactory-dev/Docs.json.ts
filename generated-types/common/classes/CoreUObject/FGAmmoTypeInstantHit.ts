import {boolean__type, decimal_string__type} from '../../common/scalar';

import {xyz__type} from '../../common/unassigned';

import {common_base__FGAmmoTypeProjectile__base__type} from './FGAmmoTypeProjectile';

export type common_base__FGAmmoTypeInstantHit__base__type =
	common_base__FGAmmoTypeProjectile__base__type & {
		mPlayFireEffects: boolean__type;
	};

export type common_base__FGAmmoTypeInstantHit__chaos__type =
	common_base__FGAmmoTypeInstantHit__base__type & {
		ClassName: 'Desc_CartridgeChaos_C';
		Location: xyz__type;
		Trail_Velocity: decimal_string__type;
	};

export type common_base__FGAmmoTypeInstantHit__standard__type =
	common_base__FGAmmoTypeInstantHit__base__type & {
		ClassName: 'Desc_CartridgeStandard_C';
	};
