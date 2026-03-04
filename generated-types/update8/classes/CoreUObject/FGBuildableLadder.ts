import type {
	FGBuildable__base__type
} from './FGBuildable.js';

import type {
	common_base__FGBuildableLadder__type
} from '../../../common/classes/CoreUObject/FGBuildableLadder.js';

import type {
	NativeClass__type
} from '../../../common/common/unassigned.js';

export type FGBuildableLadder__type
	= common_base__FGBuildableLadder__type & FGBuildable__base__type;

export type FGBuildableLadder__NativeClass = NativeClass__type & {
	Classes: [FGBuildableLadder__type],
};
