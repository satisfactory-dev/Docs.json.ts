import type {
	mDamageTypes__type
} from '../../common/unassigned.js';

import type {
	decimal_string__type
} from '../../common/scalar.js';

import type {
	common_base__FGEquipment__base__type
} from './FGEquipment.js';

export type common_base__FGEquipmentStunSpear__type
	= common_base__FGEquipmentStunSpear__base__type & {
		mArmAnimation: 'AE_StunSpear',
	};

export type common_base__FGEquipmentStunSpear__base__type
	= common_base__FGEquipment__base__type & {
		mDamageTypes: mDamageTypes__type,
		mAttackDistance: decimal_string__type,
		mAttackSweepRadius: decimal_string__type,
	};

export type common_base__FGEquipmentStunSpear__xeno_zapper__type
	= common_base__FGEquipmentStunSpear__base__type & {
		mArmAnimation: 'AE_ShockShank',
	};
