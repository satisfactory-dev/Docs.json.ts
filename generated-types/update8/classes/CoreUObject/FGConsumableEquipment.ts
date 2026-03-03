import {FGEquipment__base__type} from './FGEquipment.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGConsumableEquipment__NativeClass =
	NativeClass__type & {
		Classes: [FGEquipment__base__type, ...FGEquipment__base__type[]];
	};
