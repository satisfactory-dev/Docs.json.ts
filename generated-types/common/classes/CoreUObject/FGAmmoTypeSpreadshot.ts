import {integer_string__type, decimal_string__type} from '../../common/scalar';

import {common_base__FGAmmoTypeProjectile__base__type} from './FGAmmoTypeProjectile';

export type common_base__FGAmmoTypeSpreadshot__type =
	common_base__FGAmmoTypeProjectile__base__type & {
		SpreadTrail_Velocity: decimal_string__type;
		mNumShots: {
			Min: integer_string__type;
			Max: integer_string__type;
		};
		mSpreadAngleDegrees: decimal_string__type;
	};
