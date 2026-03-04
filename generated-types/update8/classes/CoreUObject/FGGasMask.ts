import {FGEquipment__base__type} from './FGEquipment.js';

import {common_base__FGGasMask__type} from '../../../common/classes/CoreUObject/FGGasMask.js';

import {NativeClass__type} from '../../../common/common/unassigned.js';

export type FGGasMask__type = FGGasMask__merged__type;

export type FGGasMask__merged__type =
	common_base__FGGasMask__type & FGEquipment__base__type;

export type FGGasMask__NativeClass = NativeClass__type & {
	Classes: [FGGasMask__type];
};
