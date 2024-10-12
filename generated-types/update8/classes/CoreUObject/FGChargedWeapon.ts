import {boolean__type, integer_string__type} from '../../common/scalar';

import {FGWeapon__base__type} from './FGWeapon';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGChargedWeapon__type = FGWeapon__base__type & {
	mRadialMenuShowUpTime: decimal_string__type;
	mDispensedProjectiles: '';
	mIsPendingExecuteFire: boolean__type;
	mMaxChargeTime: decimal_string__type;
	mMaxThrowForce: integer_string__type;
	mMinThrowForce: integer_string__type;
	mDelayBetweenSecondaryTriggers: decimal_string__type;
};

export type FGChargedWeapon__NativeClass = NativeClass__type & {
	Classes: [FGChargedWeapon__type];
};
