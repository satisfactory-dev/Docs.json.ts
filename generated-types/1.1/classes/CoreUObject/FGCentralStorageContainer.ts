import type {
	v1_0_base__FGCentralStorageContainer__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGCentralStorageContainer__type
	= v1_0_base__FGCentralStorageContainer__type & FGBuildable__base__type;

export type FGCentralStorageContainer__NativeClass
	= NativeClass__type & {
		Classes: [
			FGCentralStorageContainer__type,
			...FGCentralStorageContainer__type[],
		],
	};
