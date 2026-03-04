import {FGWeapon__base__type} from './FGWeapon.js';

import {boolean__type} from '../../../common/common/scalar.js';

import {common_base__FGChargedWeapon__type} from '../../../common/classes/CoreUObject/FGChargedWeapon.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGChargedWeapon__type = FGChargedWeapon__merged__type & {
	mIsPendingExecuteFire: boolean__type;
};

export type FGChargedWeapon__merged__type =
	common_base__FGChargedWeapon__type & FGWeapon__base__type;

export type FGChargedWeapon__NativeClass = NativeClass__type & {
	Classes: [FGChargedWeapon__type];
};
