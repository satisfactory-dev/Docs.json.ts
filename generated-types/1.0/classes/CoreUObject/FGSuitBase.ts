import {FGEquipment__base__type} from './FGEquipment.ts';

import {FGSuitBase__1_0__type} from '../../common/unassigned.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGSuitBase__type = FGEquipment__base__type & FGSuitBase__1_0__type;

export type FGSuitBase__NativeClass = NativeClass__type & {
	Classes: [FGSuitBase__type];
};
