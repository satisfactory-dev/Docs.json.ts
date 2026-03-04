import type {
	v1_0_base__FGConsumableDescriptor__type,
	v1_0_base__FGConsumableDescriptor__healing__type,
} from '../../common/unassigned.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGConsumableDescriptor__NativeClass
	= NativeClass__type & {
		Classes: [
			(
				| v1_0_base__FGConsumableDescriptor__type
				| v1_0_base__FGConsumableDescriptor__healing__type
			),
			...(
				| v1_0_base__FGConsumableDescriptor__type
				| v1_0_base__FGConsumableDescriptor__healing__type
			)[],
		],
	};
