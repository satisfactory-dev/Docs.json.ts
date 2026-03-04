import {FGEquipment__base__type} from './FGEquipment.js';

import {
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar.js';

import {
	common_base__FGEquipmentStunSpear__base__type,
	common_base__FGEquipmentStunSpear__type,
	common_base__FGEquipmentStunSpear__xeno_zapper__type,
} from '../../../common/classes/CoreUObject/FGEquipmentStunSpear.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGEquipmentStunSpear__type = FGEquipmentStunSpear__merged__type & {
	mRandomAttackAnim: integer_string__type;
	mRandomEquipAnim: integer_string__type;
};

export type FGEquipmentStunSpear__base__type =
	FGEquipmentStunSpear__base__merged__type & {
		mSecondSwingMaxTime: decimal_string__type;
		mSecondSwingCooldDownTime: decimal_string__type;
	};

export type FGEquipmentStunSpear__base__merged__type =
	common_base__FGEquipmentStunSpear__base__type &
		FGEquipment__base__type;

export type FGEquipmentStunSpear__merged__type =
	common_base__FGEquipmentStunSpear__type &
		FGEquipmentStunSpear__base__type;

export type FGEquipmentStunSpear__xeno_zapper__type =
	FGEquipmentStunSpear__xeno_zapper__merged__type & {
		mPunchAnimationWeight: decimal_string__type;
	};

export type FGEquipmentStunSpear__xeno_zapper__merged__type =
	common_base__FGEquipmentStunSpear__xeno_zapper__type &
		FGEquipmentStunSpear__base__type;

export type FGEquipmentStunSpear__NativeClass =
	NativeClass__type & {
		Classes: [
			FGEquipmentStunSpear__xeno_zapper__type | FGEquipmentStunSpear__type,
			FGEquipmentStunSpear__xeno_zapper__type | FGEquipmentStunSpear__type,
			FGEquipmentStunSpear__xeno_zapper__type | FGEquipmentStunSpear__type,
		];
	};
