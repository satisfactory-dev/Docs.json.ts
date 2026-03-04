import type {
	FGEquipment__base__type
} from './FGEquipment.js';

import type {
	FGSuitBase__1_0__type
} from '../../common/unassigned.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGSuitBase__type = FGEquipment__base__type & FGSuitBase__1_0__type;

export type FGSuitBase__NativeClass = NativeClass__type & {
	Classes: [FGSuitBase__type],
};
