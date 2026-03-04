import type {
	v1_0_base__FGItemDescriptor__FGResourceDescriptor__type
} from '../../common/unassigned.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGEquipmentDescriptor__NativeClass
	= NativeClass__type & {
		Classes: [
			v1_0_base__FGItemDescriptor__FGResourceDescriptor__type,
			...v1_0_base__FGItemDescriptor__FGResourceDescriptor__type[],
		],
	};
