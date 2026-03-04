import type {
	FGAmmoTypeProjectile__base__type
} from './FGAmmoTypeProjectile.js';

import type {
	common_base__FGAmmoTypeSpreadshot__type
} from '../../../common/classes/CoreUObject/FGAmmoTypeSpreadshot.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGAmmoTypeSpreadshot__type
	= common_base__FGAmmoTypeSpreadshot__type
		& FGAmmoTypeProjectile__base__type;

export type FGAmmoTypeSpreadshot__NativeClass
	= NativeClass__type & {
		Classes: [FGAmmoTypeSpreadshot__type],
	};
