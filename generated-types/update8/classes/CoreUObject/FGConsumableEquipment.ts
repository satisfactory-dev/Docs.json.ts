import {FGEquipment__base__type} from './FGEquipment';

import {NativeClass__type} from '../../common/unassigned';

export type FGConsumableEquipment__NativeClass = NativeClass__type & {
	Classes: [FGEquipment__base__type, ...FGEquipment__base__type[]];
};
