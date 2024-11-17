import {common_base__FGWeapon__base__type} from './FGWeapon';

import {decimal_string__type, integer_string__type} from '../../common/scalar';

export type common_base__FGChargedWeapon__type =
	common_base__FGWeapon__base__type & {
		mRadialMenuShowUpTime: decimal_string__type;
		mDispensedProjectiles: '';
		mMaxChargeTime: decimal_string__type;
		mMaxThrowForce: integer_string__type;
		mMinThrowForce: integer_string__type;
		mDelayBetweenSecondaryTriggers: decimal_string__type;
	};
