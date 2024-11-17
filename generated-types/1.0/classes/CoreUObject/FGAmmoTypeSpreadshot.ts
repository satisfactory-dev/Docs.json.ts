import {FGAmmoTypeProjectile__base__type} from './FGAmmoTypeProjectile';

import {common_base__FGAmmoTypeSpreadshot__type} from '../../../common/classes/CoreUObject/FGAmmoTypeSpreadshot';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGAmmoTypeSpreadshot__type = FGAmmoTypeSpreadshot__merged__type;

export type FGAmmoTypeSpreadshot__merged__type =
	common_base__FGAmmoTypeSpreadshot__type &
		FGAmmoTypeProjectile__base__type;

export type FGAmmoTypeSpreadshot__NativeClass =
	NativeClass__type & {
		Classes: [FGAmmoTypeSpreadshot__type];
	};
