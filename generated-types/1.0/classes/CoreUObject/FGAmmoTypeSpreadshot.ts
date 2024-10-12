import {FGAmmoTypeProjectile__base__type} from './FGAmmoTypeProjectile';

import {
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGAmmoTypeSpreadshot__type = FGAmmoTypeProjectile__base__type & {
	SpreadTrail_Velocity: decimal_string__type;
	mNumShots: {
		Min: integer_string__type;
		Max: integer_string__type;
	};
	mSpreadAngleDegrees: decimal_string__type;
};

export type FGAmmoTypeSpreadshot__NativeClass =
	NativeClass__type & {
		Classes: [FGAmmoTypeSpreadshot__type];
	};
