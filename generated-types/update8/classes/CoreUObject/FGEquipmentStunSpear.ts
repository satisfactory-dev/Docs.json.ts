import {mDamageTypes__type} from '../../common/unassigned';

import {FGEquipment__base__type} from './FGEquipment';

import {
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGEquipmentStunSpear__type = FGEquipmentStunSpear__base__type & {
	mDamageTypes?: mDamageTypes__type;
	mArmAnimation?: 'AE_StunSpear';
	mRandomAttackAnim: integer_string__type;
	mRandomEquipAnim: integer_string__type;
};

export type FGEquipmentStunSpear__base__type = FGEquipment__base__type & {
	mDamageTypes: mDamageTypes__type;
	mSecondSwingMaxTime: decimal_string__type;
	mSecondSwingCooldDownTime: decimal_string__type;
	mAttackDistance: decimal_string__type;
	mAttackSweepRadius: decimal_string__type;
};

export type FGEquipmentStunSpear__xeno_zapper__type =
	FGEquipmentStunSpear__base__type & {
		mDamageTypes?: mDamageTypes__type;
		mArmAnimation?: 'AE_ShockShank';
		mPunchAnimationWeight: decimal_string__type;
	};

export type FGEquipmentStunSpear__NativeClass =
	NativeClass__type & {
		Classes: [
			FGEquipmentStunSpear__xeno_zapper__type | FGEquipmentStunSpear__type,
			FGEquipmentStunSpear__xeno_zapper__type | FGEquipmentStunSpear__type,
			FGEquipmentStunSpear__xeno_zapper__type | FGEquipmentStunSpear__type,
		];
	};
