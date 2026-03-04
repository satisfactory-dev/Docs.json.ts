import type {
	FGItemDescriptor__FGResourceDescriptor__type
} from './FGItemDescriptor.js';

import type {
	common_base__FGAmmoTypeProjectile__type,
	common_base__FGAmmoTypeProjectile__base__type,
} from '../../../common/classes/CoreUObject/FGAmmoTypeProjectile.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGAmmoTypeProjectile__type
	= common_base__FGAmmoTypeProjectile__type
		& FGAmmoTypeProjectile__base__type;

export type FGAmmoTypeProjectile__base__type
	= common_base__FGAmmoTypeProjectile__base__type
		& FGItemDescriptor__FGResourceDescriptor__type;

export type FGAmmoTypeProjectile__NativeClass
	= NativeClass__type & {
		Classes: [FGAmmoTypeProjectile__type, ...FGAmmoTypeProjectile__type[]],
	};
