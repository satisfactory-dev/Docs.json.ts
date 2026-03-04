import type {
	FGBuildable__consumes_power_base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildableJumppad__type
} from '../../../common/classes/CoreUObject/FGBuildableJumppad.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableJumppad__type
	= common_base__FGBuildableJumppad__type
		& FGBuildable__consumes_power_base__type;

export type FGBuildableJumppad__NativeClass
	= NativeClass__type & {
		Classes: [FGBuildableJumppad__type],
	};
