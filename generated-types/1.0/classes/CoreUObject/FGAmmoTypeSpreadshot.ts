import {FGAmmoTypeProjectile__base__type} from './FGAmmoTypeProjectile.ts';

import {common_base__FGAmmoTypeSpreadshot__type} from '../../../common/classes/CoreUObject/FGAmmoTypeSpreadshot.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGAmmoTypeSpreadshot__type =
	common_base__FGAmmoTypeSpreadshot__type &
		FGAmmoTypeProjectile__base__type;

export type FGAmmoTypeSpreadshot__NativeClass =
	NativeClass__type & {
		Classes: [FGAmmoTypeSpreadshot__type];
	};
