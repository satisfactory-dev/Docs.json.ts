import {
	v1_0_base__FGConsumableDescriptor__type,
	v1_0_base__FGConsumableDescriptor__healing__type,
} from '../../common/unassigned.js';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGConsumableDescriptor__NativeClass =
	NativeClass__type & {
		Classes: [
			(
				| v1_0_base__FGConsumableDescriptor__type
				| v1_0_base__FGConsumableDescriptor__healing__type
			),
			...(
				| v1_0_base__FGConsumableDescriptor__type
				| v1_0_base__FGConsumableDescriptor__healing__type
			)[],
		];
	};
