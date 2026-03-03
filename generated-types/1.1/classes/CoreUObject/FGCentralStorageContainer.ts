import {v1_0_base__FGCentralStorageContainer__type} from '../../common/unassigned.ts';

import {FGBuildable__base__type} from './FGBuildable.ts';

import {NativeClass__type} from '../../../common/common/unassigned.ts';

export type FGCentralStorageContainer__type =
	v1_0_base__FGCentralStorageContainer__type & FGBuildable__base__type;

export type FGCentralStorageContainer__NativeClass =
	NativeClass__type & {
		Classes: [
			FGCentralStorageContainer__type,
			...FGCentralStorageContainer__type[],
		];
	};
