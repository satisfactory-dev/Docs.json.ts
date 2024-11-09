import {decimal_string__type, boolean__type} from '../../common/scalar';

import {common_base__FGEquipment__base__type} from './FGEquipment';

export type common_base__FGSuitBase__type =
	common_base__FGEquipment__base__type & {
		mImmunity: decimal_string__type;
		mIsWorking: boolean__type;
		mHasNegatedDamage: boolean__type;
		mDamageNegated: decimal_string__type;
		mFilterDuration: decimal_string__type;
		mCountdown: decimal_string__type;
		mDisableEffectTimer: decimal_string__type;
		mIsBurningFuel: boolean__type;
	};
