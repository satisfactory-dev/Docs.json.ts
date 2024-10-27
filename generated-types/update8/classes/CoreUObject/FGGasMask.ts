import {FGEquipment__base__type} from './FGEquipment';

import {
	mDamageTypes__type,
	NativeClass__type,
} from '../../../common/common/unassigned';

import {
	boolean__type,
	decimal_string__type,
} from '../../../common/common/scalar';

export type FGGasMask__type = FGEquipment__base__type & {
	mDamageTypesToProtectAgainst: mDamageTypes__type;
	mPostProcessEnabled: boolean__type;
	mFilterCountdown: decimal_string__type;
	mFilterDuration: decimal_string__type;
	mIsInPoisonGas: boolean__type;
};

export type FGGasMask__NativeClass = NativeClass__type & {
	Classes: [FGGasMask__type];
};
