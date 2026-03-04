import type {
	v1_0_base__FGBuildableJumppad__type
} from '../../common/unassigned.js';

import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableJumppad__type = v1_0_base__FGBuildableJumppad__type
	& FGBuildable__base__type;

export type FGBuildableJumppad__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableJumppad__type],
	};
