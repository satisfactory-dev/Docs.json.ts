import {common_base__FGEquipment__base__type} from './FGEquipment';

import {mDamageTypes__type} from '../../common/unassigned';

import {boolean__type, decimal_string__type} from '../../common/scalar';

export type common_base__FGGasMask__type =
	common_base__FGEquipment__base__type & {
		mDamageTypesToProtectAgainst: mDamageTypes__type;
		mPostProcessEnabled: boolean__type;
		mFilterCountdown: decimal_string__type;
		mFilterDuration: decimal_string__type;
		mIsInPoisonGas: boolean__type;
	};
