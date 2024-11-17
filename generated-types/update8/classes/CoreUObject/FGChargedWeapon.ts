import {FGWeapon__base__type} from './FGWeapon';

import {boolean__type} from '../../../common/common/scalar';

import {common_base__FGChargedWeapon__type} from '../../../common/classes/CoreUObject/FGChargedWeapon';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGChargedWeapon__type = FGChargedWeapon__merged__type & {
	mIsPendingExecuteFire: boolean__type;
};

export type FGChargedWeapon__merged__type =
	common_base__FGChargedWeapon__type & FGWeapon__base__type;

export type FGChargedWeapon__NativeClass = NativeClass__type & {
	Classes: [FGChargedWeapon__type];
};
