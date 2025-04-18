import {v1_0_base__FGItemDescriptor__FGResourceDescriptor__type} from '../../common/unassigned';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGEquipmentDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [
			v1_0_base__FGItemDescriptor__FGResourceDescriptor__type,
			...v1_0_base__FGItemDescriptor__FGResourceDescriptor__type[],
		];
	};
