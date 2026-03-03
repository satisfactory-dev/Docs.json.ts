import {
	v1_0_base__FGConsumableEquipment__equipment__type,
	v1_0_base__FGConsumableEquipment__medkit__type,
} from '../../common/unassigned.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGConsumableEquipment__NativeClass =
	NativeClass__type & {
		Classes: [
			v1_0_base__FGConsumableEquipment__equipment__type,
			v1_0_base__FGConsumableEquipment__medkit__type,
		];
	};
