import {FGEquipment__base__type} from './FGEquipment';

import {FGSuitBase__1_0__type} from '../../common/unassigned';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGSuitBase__type = FGSuitBase__merged__type;

export type FGSuitBase__merged__type = FGEquipment__base__type &
	FGSuitBase__1_0__type;

export type FGSuitBase__NativeClass = NativeClass__type & {
	Classes: [FGSuitBase__type];
};
